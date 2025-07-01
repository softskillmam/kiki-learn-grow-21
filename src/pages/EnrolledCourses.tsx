
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, BookOpen } from 'lucide-react';

const EnrolledCourses = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: "Spoken English Class",
      progress: 75,
      status: "In Progress",
      nextClass: "Tomorrow 4:00 PM",
      image: "/lovable-uploads/ab749e7b-7e24-4d9e-b411-43bc73b0ed39.png",
      totalLessons: 20,
      completedLessons: 15
    },
    {
      id: 2,
      title: "Personality Development",
      progress: 45,
      status: "In Progress", 
      nextClass: "Friday 6:00 PM",
      image: "/lovable-uploads/8b5de2fa-aca2-40f2-9170-0af6794ef7fc.png",
      totalLessons: 12,
      completedLessons: 5
    },
    {
      id: 3,
      title: "Public Speaking",
      progress: 100,
      status: "Completed",
      completedDate: "March 2024",
      image: "/lovable-uploads/9a4c6801-fcf4-4a3e-958c-116d313d908d.png",
      totalLessons: 8,
      completedLessons: 8
    }
  ];

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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden border-0 card-shadow hover:card-shadow-hover transition-all duration-300 rounded-2xl">
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant={course.status === 'Completed' ? 'default' : 'secondary'}>
                        {course.status}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {course.title}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                        </div>
                      </div>

                      {course.status === 'In Progress' && (
                        <div className="flex items-center gap-2 text-sm text-kiki-purple-600 bg-kiki-purple-50 p-2 rounded-lg">
                          <Calendar className="w-4 h-4" />
                          <span>Next: {course.nextClass}</span>
                        </div>
                      )}

                      {course.status === 'Completed' && (
                        <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-2 rounded-lg">
                          <Clock className="w-4 h-4" />
                          <span>Completed: {course.completedDate}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {enrolledCourses.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">No courses enrolled yet</h3>
                <p className="text-gray-600 mb-6">Start your learning journey by exploring our programs</p>
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
