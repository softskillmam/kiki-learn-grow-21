
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Loader2, Users } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Course {
  id: string;
  title: string;
  status: string;
}

interface Enrollment {
  id: string;
  student_id: string;
  course_id: string;
  enrolled_at: string;
  status: string;
  progress: number;
  user_email?: string;
  user_name?: string;
}

interface CourseWithEnrollments {
  course: Course;
  enrollments: Enrollment[];
}

const CourseEnrollments: React.FC = () => {
  const { toast } = useToast();
  const [courseEnrollments, setCourseEnrollments] = useState<CourseWithEnrollments[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourseEnrollments();
  }, []);

  const fetchCourseEnrollments = async () => {
    try {
      // First fetch all courses
      const { data: courses, error: coursesError } = await supabase
        .from('courses')
        .select('id, title, status')
        .eq('status', 'active');

      if (coursesError) {
        console.error('Error fetching courses:', coursesError);
        toast({
          title: "Error",
          description: "Failed to load courses",
          variant: "destructive",
        });
        return;
      }

      // Then fetch enrollments for each course
      const courseEnrollmentData: CourseWithEnrollments[] = [];

      for (const course of courses || []) {
        const { data: enrollments, error: enrollmentsError } = await supabase
          .from('enrollments')
          .select(`
            id,
            student_id,
            course_id,
            enrolled_at,
            status,
            progress
          `)
          .eq('course_id', course.id);

        if (enrollmentsError) {
          console.error('Error fetching enrollments:', enrollmentsError);
          continue;
        }

        // Get user details for enrollments
        const enrichedEnrollments: Enrollment[] = [];
        for (const enrollment of enrollments || []) {
          try {
            const { data: userData } = await supabase.auth.admin.getUserById(enrollment.student_id);
            enrichedEnrollments.push({
              ...enrollment,
              user_email: userData.user?.email || 'Unknown',
              user_name: userData.user?.user_metadata?.full_name || 'Not provided'
            });
          } catch (error) {
            console.error('Error fetching user data:', error);
            enrichedEnrollments.push({
              ...enrollment,
              user_email: 'Unknown',
              user_name: 'Not provided'
            });
          }
        }

        courseEnrollmentData.push({
          course,
          enrollments: enrichedEnrollments
        });
      }

      setCourseEnrollments(courseEnrollmentData);
    } catch (error) {
      console.error('Error fetching course enrollments:', error);
      toast({
        title: "Error",
        description: "Failed to load course enrollments",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-kiki-purple-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Users className="h-6 w-6 text-kiki-purple-600" />
        <h2 className="text-2xl font-bold text-gray-900">Course Enrollments</h2>
      </div>

      {courseEnrollments.map((courseData) => (
        <Card key={courseData.course.id}>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">{courseData.course.title}</CardTitle>
              <Badge variant="outline">
                {courseData.enrollments.length} enrolled
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {courseData.enrollments.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student Email</TableHead>
                    <TableHead>Student Name</TableHead>
                    <TableHead>Enrolled Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progress</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courseData.enrollments.map((enrollment) => (
                    <TableRow key={enrollment.id}>
                      <TableCell>{enrollment.user_email}</TableCell>
                      <TableCell>{enrollment.user_name}</TableCell>
                      <TableCell>{formatDate(enrollment.enrolled_at)}</TableCell>
                      <TableCell>
                        <Badge variant={enrollment.status === 'active' ? 'default' : 'secondary'}>
                          {enrollment.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-kiki-purple-600 h-2 rounded-full" 
                              style={{ width: `${enrollment.progress || 0}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">
                            {enrollment.progress || 0}%
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No students enrolled in this course yet.
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      {courseEnrollments.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-gray-500">No active courses found.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CourseEnrollments;
