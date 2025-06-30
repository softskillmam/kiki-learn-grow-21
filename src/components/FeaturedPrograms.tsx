
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, MapPin } from 'lucide-react';

const FeaturedPrograms = () => {
  const programs = [
    {
      id: 1,
      title: "Creative Coding for Kids",
      description: "Learn programming through fun games and interactive projects",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      price: "₹2,999",
      originalPrice: "₹3,999",
      duration: "8 weeks",
      students: 124,
      rating: 4.8,
      ageRange: "8-14 years",
      mode: "Online",
      category: "Technology"
    },
    {
      id: 2,
      title: "Career Guidance Workshop",
      description: "Discover your perfect career path with expert counselors",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
      price: "₹1,499",
      originalPrice: "₹2,499",
      duration: "2 days",
      students: 89,
      rating: 4.9,
      ageRange: "15+ years",
      mode: "Hybrid",
      category: "Career"
    },
    {
      id: 3,
      title: "Art & Creativity Camp",
      description: "Express yourself through various art forms and techniques",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
      price: "₹3,499",
      originalPrice: "₹4,999",
      duration: "1 week",
      students: 67,
      rating: 4.7,
      ageRange: "6-16 years",
      mode: "Offline",
      category: "Arts"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured & Upcoming Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular programs designed to unlock potential and foster growth
          </p>
          <div className="mt-6">
            <Button variant="outline" className="border-kiki-purple-600 text-kiki-purple-600 hover:bg-kiki-purple-50">
              View All Programs
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="group overflow-hidden border-0 card-shadow hover:card-shadow-hover transition-all duration-300 hover-scale rounded-2xl">
              <div className="relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${
                    program.mode === 'Online' ? 'bg-green-100 text-green-800' :
                    program.mode === 'Offline' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {program.mode}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-700">
                    {program.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{program.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{program.ageRange}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-kiki-purple-600 transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {program.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{program.students} students</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-kiki-purple-600">{program.price}</span>
                    <span className="text-sm text-gray-500 line-through">{program.originalPrice}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-kiki-purple-600 hover:bg-kiki-purple-700">
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
