
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, BookOpen, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface EnrolledCourse {
  id: string;
  progress: number;
  completed_lessons: number;
  enrolled_at: string;
  completed_at: string | null;
  next_class_at: string | null;
  status: 'enrolled' | 'completed' | 'dropped' | 'pending';
  course: {
    id: string;
    title: string;
    description: string;
    image_url: string;
    total_lessons: number;
    duration: string;
  };
}

const EnrolledCourses = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    fetchEnrolledCourses();
  }, [isAuthenticated, navigate, user]);

  const fetchEnrolledCourses = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('enrollments')
        .select(`
          *,
          course:courses(*)
        `)
        .eq('student_id', user.id)
        .order('enrolled_at', { ascending: false });

      if (error) {
        console.error('Error fetching enrolled courses:', error);
        toast({
          title: "Error",
          description: "Failed to load your enrolled courses",
          variant: "destructive",
        });
      } else {
        setEnrolledCourses(data || []);
      }
    } catch (error) {
      console.error('Error fetching enrolled courses:', error);
      toast({
        title: "Error",
        description: "Failed to load your enrolled courses",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  };

  const formatNextClass = (dateString: string | null) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-kiki-purple-50 via-white to-kiki-blue-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="bg-gradient-to-r from-kiki-purple-600 to-kiki-blue-600 bg-clip-text text-transparent">Enrolled Courses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track your learning progress and continue your journey
            </p>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {enrolledCourses.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledCourses.map((enrollment) => (
                  <Card key={enrollment.id} className="overflow-hidden border-0 card-shadow hover:card-shadow-hover transition-all duration-300 rounded-2xl">
                    <div className="relative">
                      <img
                        src={enrollment.course.image_url}
                        alt={enrollment.course.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant={enrollment.status === 'completed' ? 'default' : 'secondary'}>
                          {enrollment.status === 'enrolled' ? 'In Progress' : 
                           enrollment.status === 'completed' ? 'Completed' : 
                           enrollment.status}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {enrollment.course.title}
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                            <span>Progress</span>
                            <span>{enrollment.progress}%</span>
                          </div>
                          <Progress value={enrollment.progress} className="h-2" />
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{enrollment.completed_lessons}/{enrollment.course.total_lessons} lessons</span>
                          </div>
                        </div>

                        {enrollment.status === 'enrolled' && enrollment.next_class_at && (
                          <div className="flex items-center gap-2 text-sm text-kiki-purple-600 bg-kiki-purple-50 p-2 rounded-lg">
                            <Calendar className="w-4 h-4" />
                            <span>Next: {formatNextClass(enrollment.next_class_at)}</span>
                          </div>
                        )}

                        {enrollment.status === 'completed' && enrollment.completed_at && (
                          <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-2 rounded-lg">
                            <Clock className="w-4 h-4" />
                            <span>Completed: {formatDate(enrollment.completed_at)}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">No courses enrolled yet</h3>
                <p className="text-gray-600 mb-6">Start your learning journey by exploring our programs</p>
                <button
                  onClick={() => navigate('/programs')}
                  className="bg-kiki-purple-600 hover:bg-kiki-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Browse Programs
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EnrolledCourses;
