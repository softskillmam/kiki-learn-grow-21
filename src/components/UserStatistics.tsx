
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Users, UserCheck, Clock, Calendar } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Statistics {
  totalUsers: number;
  verifiedUsers: number;
  unverifiedUsers: number;
  recentSignups: number;
  activeUsers: number;
}

const UserStatistics: React.FC = () => {
  const { toast } = useToast();
  const [stats, setStats] = useState<Statistics>({
    totalUsers: 0,
    verifiedUsers: 0,
    unverifiedUsers: 0,
    recentSignups: 0,
    activeUsers: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStatistics();
  }, []);

  const fetchStatistics = async () => {
    try {
      const { data: users, error } = await supabase.auth.admin.listUsers();
      
      if (error) {
        console.error('Error fetching user statistics:', error);
        toast({
          title: "Error",
          description: "Failed to load user statistics",
          variant: "destructive",
        });
        return;
      }

      const allUsers = users.users || [];
      const now = new Date();
      const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

      const statistics: Statistics = {
        totalUsers: allUsers.length,
        verifiedUsers: allUsers.filter(user => user.email_confirmed_at).length,
        unverifiedUsers: allUsers.filter(user => !user.email_confirmed_at).length,
        recentSignups: allUsers.filter(user => {
          const createdAt = new Date(user.created_at);
          return createdAt >= oneWeekAgo;
        }).length,
        activeUsers: allUsers.filter(user => {
          if (!user.last_sign_in_at) return false;
          const lastSignIn = new Date(user.last_sign_in_at);
          return lastSignIn >= oneMonthAgo;
        }).length
      };

      setStats(statistics);
    } catch (error) {
      console.error('Error fetching user statistics:', error);
      toast({
        title: "Error",
        description: "Failed to load user statistics",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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
        <h2 className="text-2xl font-bold text-gray-900">User Statistics</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-kiki-purple-600">{stats.totalUsers}</div>
                <p className="text-sm text-gray-600">Total Users</p>
              </div>
              <Users className="h-8 w-8 text-kiki-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-green-600">{stats.verifiedUsers}</div>
                <p className="text-sm text-gray-600">Verified Users</p>
              </div>
              <UserCheck className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-orange-600">{stats.unverifiedUsers}</div>
                <p className="text-sm text-gray-600">Unverified Users</p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-blue-600">{stats.recentSignups}</div>
                <p className="text-sm text-gray-600">New This Week</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-purple-600">{stats.activeUsers}</div>
                <p className="text-sm text-gray-600">Active (30 days)</p>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-indigo-600">
                  {stats.totalUsers > 0 ? Math.round((stats.verifiedUsers / stats.totalUsers) * 100) : 0}%
                </div>
                <p className="text-sm text-gray-600">Verification Rate</p>
              </div>
              <Badge variant="outline" className="text-indigo-600 border-indigo-600">
                Rate
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">User Verification Progress</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-kiki-purple-600 h-2 rounded-full" 
                    style={{ 
                      width: `${stats.totalUsers > 0 ? (stats.verifiedUsers / stats.totalUsers) * 100 : 0}%` 
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">
                  {stats.totalUsers > 0 ? Math.round((stats.verifiedUsers / stats.totalUsers) * 100) : 0}%
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-semibold text-gray-900">{stats.verifiedUsers}</div>
                <div className="text-gray-600">Verified</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-semibold text-gray-900">{stats.unverifiedUsers}</div>
                <div className="text-gray-600">Unverified</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-semibold text-gray-900">{stats.recentSignups}</div>
                <div className="text-gray-600">Recent</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-semibold text-gray-900">{stats.activeUsers}</div>
                <div className="text-gray-600">Active</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserStatistics;
