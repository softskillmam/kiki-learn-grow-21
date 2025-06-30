
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, BookOpen, Award, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-kiki-purple-50 via-white to-kiki-blue-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-kiki-purple-600 to-kiki-blue-600 bg-clip-text text-transparent">KIKI's Learning Hub</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering individuals through comprehensive skill development and personal growth programs
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8 border-0 card-shadow">
                <CardContent className="space-y-4">
                  <h2 className="text-2xl font-bold text-kiki-purple-600 mb-4">Our Mission</h2>
                  <p className="text-gray-600 leading-relaxed">
                    To provide comprehensive skill development programs that empower individuals to discover their potential, 
                    build confidence, and achieve personal and professional excellence. We believe in the philosophy of 
                    "Know thyself, grow thyself" - helping every learner understand their strengths and develop them further.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 border-0 card-shadow">
                <CardContent className="space-y-4">
                  <h2 className="text-2xl font-bold text-kiki-blue-600 mb-4">Our Vision</h2>
                  <p className="text-gray-600 leading-relaxed">
                    To become Tamil Nadu's leading hub for holistic skill development, creating a community of confident, 
                    skilled individuals who contribute positively to society. We envision a future where every person 
                    has access to quality education and personal development opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive programs designed for different age groups and skill levels
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center p-6 border-0 card-shadow hover:card-shadow-hover transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-kiki-purple-500 to-kiki-blue-500 rounded-full flex items-center justify-center">
                    <BookOpen className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Language Skills</h3>
                  <p className="text-gray-600 text-sm">Spoken English, Hindi, and communication enhancement programs</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 card-shadow hover:card-shadow-hover transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-kiki-blue-500 to-kiki-purple-500 rounded-full flex items-center justify-center">
                    <Users className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Soft Skills</h3>
                  <p className="text-gray-600 text-sm">Personal development, public speaking, and personality enhancement</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 card-shadow hover:card-shadow-hover transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-kiki-purple-500 to-kiki-blue-500 rounded-full flex items-center justify-center">
                    <Award className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Career Guidance</h3>
                  <p className="text-gray-600 text-sm">Professional counseling and career development programs</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 card-shadow hover:card-shadow-hover transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-kiki-blue-500 to-kiki-purple-500 rounded-full flex items-center justify-center">
                    <MapPin className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Local Focus</h3>
                  <p className="text-gray-600 text-sm">Serving Madurai and Tamil Nadu with culturally relevant programs</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We believe in personalized learning experiences that cater to individual needs and goals
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-kiki-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-kiki-purple-600 font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Assess</h3>
                <p className="text-gray-600">Understanding individual strengths, weaknesses, and learning styles</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-kiki-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-kiki-blue-600 font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Develop</h3>
                <p className="text-gray-600">Customized learning paths with practical, hands-on training</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-kiki-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-kiki-purple-600 font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Excel</h3>
                <p className="text-gray-600">Continuous support and guidance to achieve excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600">
                Ready to start your learning journey? Contact us today!
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-3 bg-kiki-purple-100 rounded-full flex items-center justify-center">
                    <Phone className="text-kiki-purple-600 w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">8220879805</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-3 bg-kiki-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="text-kiki-blue-600 w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@kikilearninghub.com</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-3 bg-kiki-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-kiki-purple-600 w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">Madurai, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
