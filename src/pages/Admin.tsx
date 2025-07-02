
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoginModal from '@/components/LoginModal';
import CourseManager from '@/components/CourseManager';
import UserManagement from '@/components/UserManagement';
import CourseEnrollments from '@/components/CourseEnrollments';
import UserStatistics from '@/components/UserStatistics';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(!isLoggedIn);

  const services = [
    'Parampara Summer Camp',
    'Art & Craft Classes', 
    'Spoken English Class',
    'Spoken Hindi Class',
    'Soft Skill Training',
    'Public Speaking',
    'Personality Development Class',
    'Career Counseling',
    'Health Insurance',
    'Tarot Reading',
    'Business Consulting'
  ];

  const stats = [
    { label: 'Total Students', value: '245' },
    { label: 'Active Programs', value: '11' },
    { label: 'Completion Rate', value: '94%' },
    { label: 'Partner Organizations', value: '6' }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoginModal 
          isOpen={showLoginModal} 
          onClose={() => setShowLoginModal(false)}
          onLogin={() => setIsLoggedIn(true)}
        />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Admin Access Required</h1>
          <p className="text-gray-600 mb-6">Please login to access the admin panel</p>
          <Button onClick={() => setShowLoginModal(true)}>
            Login to Admin Panel
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">KIKI's Learning Hub - Admin Panel</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Madurai, Tamil Nadu</span>
            <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="statistics">Statistics</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="enrollments">Enrollments</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-kiki-purple-600">{stat.value}</div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Services Management */}
              <Card>
                <CardHeader>
                  <CardTitle>Services Offered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium">{service}</span>
                        <Badge variant="outline">Active</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><strong>Phone:</strong> 8220879805</p>
                    <p><strong>Location:</strong> Madurai, Tamil Nadu, India</p>
                    <p><strong>Focus:</strong> Soft Skills & Career Development</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="statistics">
              <UserStatistics />
            </TabsContent>

            <TabsContent value="courses">
              <CourseManager />
            </TabsContent>

            <TabsContent value="users">
              <UserManagement />
            </TabsContent>

            <TabsContent value="enrollments">
              <CourseEnrollments />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Admin;
