
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedPrograms = () => {
  const featuredPrograms = [
    {
      id: 2,
      title: "Spoken English Class",
      description: "Master fluent English communication and build confidence in speaking",
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
      id: 4,
      title: "Soft Skill Training",
      description: "Develop essential soft skills for personal and professional success",
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
      description: "Overcome stage fear and become a confident public speaker",
      image: "/lovable-uploads/9a4c6801-fcf4-4a3e-958c-116d313d908d.png",
      price: "₹2,499",
      originalPrice: "₹3,499",
      duration: "3 weeks",
      students: 156,
      rating: 4.9,
      ageRange: "12+ years",
      mode: "Offline",
      category: "Communication"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Our most popular programs designed to unlock potential and foster personal & professional growth
          </p>
          <Link to="/programs">
            <Button variant="outline" className="border-kiki-purple-600 text-kiki-purple-600 hover:bg-kiki-purple-50">
              View All Programs
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {featuredPrograms.map((program) => (
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
