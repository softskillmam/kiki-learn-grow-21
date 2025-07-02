
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, Phone, MapPin } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Art & Craft Classes",
      description: "Explore creativity through various art and craft activities. Perfect for developing artistic skills and imagination.",
      image: "/lovable-uploads/fd7df4fd-8fe5-4faa-9801-d3aabccc5157.png",
      price: "₹1,500",
      originalPrice: "₹2,000",
      duration: "4 weeks",
      students: 45,
      rating: 4.8,
      ageRange: "6-16 years",
      mode: "Offline",
      category: "Creative"
    },
    {
      id: 2,
      title: "Spoken English Class",
      description: "Master fluent English communication and build confidence in speaking with native-like fluency.",
      image: "/lovable-uploads/ab749e7b-7e24-4d9e-b411-43bc73b0ed39.png",
      price: "₹1,999",
      originalPrice: "₹2,999",
      duration: "8 weeks",
      students: 189,
      rating: 4.9,
      ageRange: "10+ years",
      mode: "Hybrid",
      category: "Language"
    },
    {
      id: 3,
      title: "Spoken Hindi Class",
      description: "Learn to speak Hindi fluently with proper pronunciation and grammar for effective communication.",
      image: "/lovable-uploads/c07edaf9-7666-4790-8fd5-aa7c87e82621.png",
      price: "₹1,799",
      originalPrice: "₹2,499",
      duration: "6 weeks",
      students: 123,
      rating: 4.7,
      ageRange: "8+ years",
      mode: "Offline",
      category: "Language"
    },
    {
      id: 4,
      title: "Soft Skill Training",
      description: "Develop essential soft skills for personal and professional success in today's competitive world.",
      image: "/lovable-uploads/d25e1c5a-1fb9-4781-add1-43899f865741.png",
      price: "₹3,499",
      originalPrice: "₹4,999",
      duration: "4 weeks",
      students: 267,
      rating: 4.8,
      ageRange: "15+ years",
      mode: "Online",
      category: "Professional"
    },
    {
      id: 5,
      title: "Public Speaking",
      description: "Overcome stage fear and become a confident public speaker with proven techniques and practice.",
      image: "/lovable-uploads/9a4c6801-fcf4-4a3e-958c-116d313d908d.png",
      price: "₹2,499",
      originalPrice: "₹3,499",
      duration: "3 weeks",
      students: 156,
      rating: 4.9,
      ageRange: "12+ years",
      mode: "Offline",
      category: "Communication"
    },
    {
      id: 6,
      title: "Personality Development Class",
      description: "Transform your personality and build self-confidence for personal and professional growth.",
      image: "/lovable-uploads/eea1d960-780b-4db1-89ab-648014f584d0.png",
      price: "₹2,999",
      originalPrice: "₹4,499",
      duration: "6 weeks",
      students: 198,
      rating: 4.8,
      ageRange: "14+ years",
      mode: "Hybrid",
      category: "Personal Development"
    },
    {
      id: 7,
      title: "Career Counseling",
      description: "Get expert guidance for career planning and make informed decisions about your future path.",
      image: "/lovable-uploads/96cfbc73-aed1-4bef-9de8-5b597d0e461f.png",
      price: "₹1,999",
      originalPrice: "₹2,999",
      duration: "2 sessions",
      students: 89,
      rating: 4.9,
      ageRange: "16+ years",
      mode: "Online",
      category: "Counseling"
    },
    {
      id: 8,
      title: "Health Insurance",
      description: "Understand health insurance policies and make the right choices for you and your family's wellbeing.",
      image: "/lovable-uploads/beb09b19-fd17-434b-8096-e9a42a070078.png",
      price: "₹999",
      originalPrice: "₹1,499",
      duration: "1 session",
      students: 67,
      rating: 4.6,
      ageRange: "18+ years",
      mode: "Online",
      category: "Insurance"
    },
    {
      id: 9,
      title: "Tarot Reading",
      description: "Discover insights into your life path through professional tarot card reading sessions.",
      image: "/lovable-uploads/8b5de2fa-aca2-40f2-9170-0af6794ef7fc.png",
      price: "₹1,299",
      originalPrice: "₹1,999",
      duration: "1 session",
      students: 234,
      rating: 4.7,
      ageRange: "18+ years",
      mode: "Offline",
      category: "Spiritual"
    },
    {
      id: 10,
      title: "Business Consulting",
      description: "Get expert advice for starting and growing your business with proven strategies and insights.",
      image: "/lovable-uploads/aab35988-5b49-4486-86d5-cc8a330fd4c9.png",
      price: "₹4,999",
      originalPrice: "₹7,499",
      duration: "3 sessions",
      students: 78,
      rating: 4.9,
      ageRange: "21+ years",
      mode: "Hybrid",
      category: "Business"
    }
  ];

  const handleEnrollNow = (programTitle: string) => {
    // Simple contact action for now
    window.open(`tel:8220879805`, '_self');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-kiki-purple-50 via-white to-kiki-blue-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              All <span className="bg-gradient-to-r from-kiki-purple-600 to-kiki-blue-600 bg-clip-text text-transparent">Programs & Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive programs designed to unlock potential and foster personal & professional growth
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-kiki-purple-600" />
                <span>8220879805</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-kiki-purple-600" />
                <span>Madurai, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {programs.map((program) => (
                <Card key={program.id} className="group overflow-hidden border-0 card-shadow hover:card-shadow-hover transition-all duration-300 hover-scale rounded-2xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className={`text-xs ${
                        program.mode === 'Online' ? 'bg-green-100 text-green-800' :
                        program.mode === 'Offline' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {program.mode}
                      </Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700 text-xs">
                        {program.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium text-gray-700">{program.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">{program.ageRange}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-kiki-purple-600 transition-colors line-clamp-2">
                      {program.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 line-clamp-2 text-sm">
                      {program.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{program.students}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-kiki-purple-600">{program.price}</span>
                        {program.originalPrice && (
                          <span className="text-xs text-gray-500 line-through">{program.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-4 pt-0">
                    <Button 
                      onClick={() => handleEnrollNow(program.title)}
                      className="w-full bg-kiki-purple-600 hover:bg-kiki-purple-700 text-sm"
                    >
                      Enroll Now
                    </Button>
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
