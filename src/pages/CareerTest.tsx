
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Target, Lightbulb, TrendingUp } from 'lucide-react';

const CareerTest = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-kiki-purple-50 via-white to-kiki-blue-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Discover Your <span className="bg-gradient-to-r from-kiki-purple-600 to-kiki-blue-600 bg-clip-text text-transparent">Perfect Career</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Take our comprehensive career assessment to find the path that aligns with your strengths, interests, and aspirations
            </p>
            <Button size="lg" className="bg-kiki-purple-600 hover:bg-kiki-purple-700">
              Start Career Test
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center p-6 border-0 card-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-kiki-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-kiki-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Personality Analysis</h3>
                  <p className="text-gray-600 text-sm">Understand your unique traits and work style preferences</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 card-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Skills Assessment</h3>
                  <p className="text-gray-600 text-sm">Identify your strengths and areas for development</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 card-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Interest Matching</h3>
                  <p className="text-gray-600 text-sm">Find careers that align with your passions and interests</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 card-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Growth Roadmap</h3>
                  <p className="text-gray-600 text-sm">Get a personalized plan for your career development</p>
                </CardContent>
              </Card>
            </div>

            {/* What You'll Get */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What You'll Receive</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-kiki-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-kiki-purple-800 mb-3">Detailed Report</h3>
                  <p className="text-kiki-purple-700">Comprehensive analysis of your personality, skills, and career matches</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Career Recommendations</h3>
                  <p className="text-blue-700">Top 10 career options ranked by compatibility with your profile</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Action Plan</h3>
                  <p className="text-green-700">Step-by-step guidance on how to achieve your career goals</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-kiki-purple-600 to-kiki-blue-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Future?</h2>
              <p className="text-xl mb-8 opacity-90">The test takes about 15-20 minutes to complete</p>
              <div className="flex justify-center gap-2 mb-6">
                <Badge className="bg-white/20 text-white">15-20 minutes</Badge>
                <Badge className="bg-white/20 text-white">Science-based</Badge>
                <Badge className="bg-white/20 text-white">Personalized results</Badge>
              </div>
              <Button size="lg" className="bg-white text-kiki-purple-600 hover:bg-gray-100">
                Begin Assessment Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareerTest;
