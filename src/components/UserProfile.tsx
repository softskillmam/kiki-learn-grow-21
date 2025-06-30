
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { User, BookOpen, Calendar, Award, Clock } from 'lucide-react';

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ isOpen, onClose }) => {
  const demoUser = {
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 9876543210",
    location: "Madurai, Tamil Nadu",
    memberSince: "January 2024",
    enrolledCourses: [
      {
        name: "Spoken English Class",
        progress: 75,
        status: "In Progress",
        nextClass: "Tomorrow 4:00 PM"
      },
      {
        name: "Personality Development",
        progress: 45,
        status: "In Progress", 
        nextClass: "Friday 6:00 PM"
      },
      {
        name: "Public Speaking",
        progress: 100,
        status: "Completed",
        completedDate: "March 2024"
      }
    ],
    achievements: [
      "English Communication Certificate",
      "Public Speaking Badge",
      "Perfect Attendance Award"
    ]
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl bg-white border-0 shadow-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center space-y-4 pb-6">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-kiki-purple-500 to-kiki-blue-500 rounded-full flex items-center justify-center">
            <User className="text-white w-10 h-10" />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Student Profile
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Personal Information */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Name:</span> {demoUser.name}</p>
              <p><span className="font-medium">Email:</span> {demoUser.email}</p>
              <p><span className="font-medium">Phone:</span> {demoUser.phone}</p>
              <p><span className="font-medium">Location:</span> {demoUser.location}</p>
              <p><span className="font-medium">Member Since:</span> {demoUser.memberSince}</p>
            </div>
          </div>

          {/* Enrolled Courses */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Enrolled Courses
            </h3>
            <div className="space-y-4">
              {demoUser.enrolledCourses.map((course, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">{course.name}</h4>
                    <Badge variant={course.status === 'Completed' ? 'default' : 'secondary'}>
                      {course.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    {course.status === 'In Progress' && (
                      <div className="flex items-center gap-1 text-sm text-kiki-purple-600">
                        <Calendar className="w-4 h-4" />
                        <span>Next Class: {course.nextClass}</span>
                      </div>
                    )}
                    {course.status === 'Completed' && (
                      <div className="flex items-center gap-1 text-sm text-green-600">
                        <Award className="w-4 h-4" />
                        <span>Completed: {course.completedDate}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Achievements
            </h3>
            <div className="flex flex-wrap gap-2">
              {demoUser.achievements.map((achievement, index) => (
                <Badge key={index} variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">
                  🏆 {achievement}
                </Badge>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-kiki-purple-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-kiki-purple-600">3</div>
              <div className="text-sm text-kiki-purple-800">Courses Enrolled</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">73%</div>
              <div className="text-sm text-blue-800">Average Progress</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserProfile;
