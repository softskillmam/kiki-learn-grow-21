
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star } from 'lucide-react';

const FeaturedPrograms = () => {
  const programs = [
    {
      id: 1,
      title: "Art & Craft Classes",
      description: "Express creativity through various art forms and hands-on craft projects",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&q=80",
      price: "₹2,999",
      originalPrice: "₹3,999",
      duration: "6 weeks",
      students: 124,
      rating: 4.8,
      ageRange: "6-16 years",
      mode: "Offline",
      category: "Arts"
    },
    {
      id: 2,
      title: "Spoken English Class",
      description: "Master fluent English communication and build confidence in speaking",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
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
      description: "Learn to speak Hindi fluently with proper pronunciation and grammar",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
      price: "₹1,799",
      originalPrice: "₹2,499",
      duration: "8 weeks",
      students: 95,
      rating: 4.7,
      ageRange: "10+ years",
      mode: "Hybrid",
      category: "Language"
    },
    {
      id: 4,
      title: "Soft Skill Training",
      description: "Develop essential soft skills for personal and professional success",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
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
      description: "Overcome stage fear and become a confident public speaker",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80",
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
      description: "Transform your personality and build lasting confidence",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
      price: "₹3,999",
      originalPrice: "₹5,499",
      duration: "6 weeks",
      students: 198,
      rating: 4.8,
      ageRange: "15+ years",
      mode: "Hybrid",
      category: "Personal"
    },
    {
      id: 7,
      title: "Career Counseling",
      description: "Discover your perfect career path with expert guidance and assessment",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      price: "₹1,499",
      originalPrice: "₹2,499",
      duration: "2 sessions",
      students: 89,
      rating: 4.9,
      ageRange: "15+ years",
      mode: "Online",
      category: "Career"
    },
    {
      id: 8,
      title: "Health Insurance",
      description: "Comprehensive health insurance consultation and planning services",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
      price: "₹999",
      originalPrice: "₹1,499",
      duration: "1 session",
      students: 76,
      rating: 4.6,
      ageRange: "18+ years",
      mode: "Online",
      category: "Insurance"
    },
    {
      id: 9,
      title: "Tarot Reading",
      description: "Gain insights into your life journey through professional tarot readings",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&q=80",
      price: "₹599",
      originalPrice: "₹999",
      duration: "1 session",
      students: 134,
      rating: 4.7,
      ageRange: "18+ years",
      mode: "Online",
      category: "Spiritual"
    },
    {
      id: 10,
      title: "Business Consulting",
      description: "Strategic business guidance to grow and scale your venture",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
      price: "₹4,999",
      originalPrice: "₹7,499",
      duration: "4 sessions",
      students: 45,
      rating: 4.9,
      ageRange: "21+ years",
      mode: "Hybrid",
      category: "Business"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services & Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive programs designed to unlock potential and foster personal & professional growth
          </p>
        </div>

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
                    <span className="text-xs text-gray-500 line-through">{program.originalPrice}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-kiki-purple-600 hover:bg-kiki-purple-700 text-sm">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
