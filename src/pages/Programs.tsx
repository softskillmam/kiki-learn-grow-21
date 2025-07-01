import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, Loader2, ShoppingCart } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface Course {
  id: string;
  title: string;
  description: string;
  image_url: string;
  price: number;
  original_price: number;
  duration: string;
  category: string;
  age_range: string;
  mode: string;
  total_lessons: number;
}

const Programs = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [cartItemIds, setCartItemIds] = useState<string[]>([]);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    fetchCourses();
    if (isAuthenticated) {
      fetchCartItems();
      // Show welcome message for new login
      if (user?.user_metadata?.full_name || user?.user_metadata?.name) {
        setShowWelcome(true);
        setTimeout(() => setShowWelcome(false), 5000);
      }
    }
  }, [isAuthenticated, user]);

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('status', 'active')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching courses:', error);
      } else {
        setCourses(data || []);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCartItems = async () => {
    if (!isAuthenticated || !user?.id) return;

    try {
      // Use direct query instead of RPC to avoid TypeScript issues
      const { data, error } = await supabase
        .from('cart_items')
        .select('course_id')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching cart items:', error);
        setCartItemIds([]);
      } else {
        const courseIds = data?.map(item => item.course_id) || [];
        setCartItemIds(courseIds);
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
      setCartItemIds([]);
    }
  };

  const addToCart = async (courseId: string) => {
    if (!isAuthenticated || !user?.id) {
      navigate('/login');
      return;
    }

    try {
      // Check if already in cart
      if (cartItemIds.includes(courseId)) {
        toast({
          title: "Already in Cart",
          description: "This course is already in your cart.",
        });
        return;
      }

      // Use direct insert instead of RPC to avoid TypeScript issues
      const { error } = await supabase
        .from('cart_items')
        .insert({
          user_id: user.id,
          course_id: courseId
        });

      if (error) {
        console.error('Error adding to cart:', error);
        toast({
          title: "Error",
          description: "Failed to add course to cart.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Added to Cart",
          description: "Course added to your cart successfully!",
        });
        fetchCartItems();
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast({
        title: "Error",
        description: "Failed to add course to cart.",
        variant: "destructive",
      });
    }
  };

  const handleBuyNow = (courseId: string) => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      // TODO: Implement payment/enrollment logic
      toast({
        title: "Coming Soon",
        description: "Payment integration will be implemented next!",
      });
    }
  };

  const isInCart = (courseId: string) => {
    return cartItemIds.includes(courseId);
  };

  const getRandomRating = () => (4.6 + Math.random() * 0.4).toFixed(1);
  const getRandomStudents = () => Math.floor(45 + Math.random() * 200);

  const getUserDisplayName = () => {
    if (!user) return '';
    return user.user_metadata?.full_name || 
           user.user_metadata?.name || 
           user.email?.split('@')[0] || 
           'User';
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-kiki-purple-600" />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Welcome Message */}
        {showWelcome && isAuthenticated && (
          <div className="bg-gradient-to-r from-kiki-purple-500 to-kiki-blue-500 text-white py-4">
            <div className="container mx-auto px-4 text-center">
              <p className="text-lg font-medium">
                Welcome back, {getUserDisplayName()}! 🎉
              </p>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-kiki-purple-50 via-white to-kiki-blue-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              All <span className="bg-gradient-to-r from-kiki-purple-600 to-kiki-blue-600 bg-clip-text text-transparent">Programs & Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to unlock potential and foster personal & professional growth
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="group overflow-hidden border-0 card-shadow hover:card-shadow-hover transition-all duration-300 hover-scale rounded-2xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image_url}
                      alt={course.title}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className={`text-xs ${
                        course.mode === 'Online' ? 'bg-green-100 text-green-800' :
                        course.mode === 'Offline' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {course.mode}
                      </Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700 text-xs">
                        {course.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium text-gray-700">{getRandomRating()}</span>
                      </div>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">{course.age_range}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-kiki-purple-600 transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 line-clamp-2 text-sm">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{getRandomStudents()}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-kiki-purple-600">₹{course.price}</span>
                        {course.original_price && (
                          <span className="text-xs text-gray-500 line-through">₹{course.original_price}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-4 pt-0 space-y-2">
                    <div className="flex gap-2 w-full">
                      <Button 
                        onClick={() => handleBuyNow(course.id)}
                        className="flex-1 bg-kiki-purple-600 hover:bg-kiki-purple-700 text-sm"
                      >
                        Buy Now
                      </Button>
                      {isAuthenticated && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => addToCart(course.id)}
                          disabled={isInCart(course.id)}
                          className="px-3"
                        >
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    {isAuthenticated && isInCart(course.id) && (
                      <p className="text-xs text-green-600 text-center">Already in cart</p>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
