
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';
import LoginModal from './LoginModal';

interface ProtectedRouteProps {
  children: React.ReactNode;
  adminOnly?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, adminOnly = false }) => {
  const { isAuthenticated, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showAdminLogin, setShowAdminLogin] = React.useState(false);

  useEffect(() => {
    if (!loading) {
      if (adminOnly) {
        // For admin routes, show admin login modal instead of redirecting
        if (!isAuthenticated || !isAdmin) {
          setShowAdminLogin(true);
        } else {
          setShowAdminLogin(false);
        }
      } else {
        // For regular protected routes, redirect to main login
        if (!isAuthenticated) {
          navigate('/login');
        }
      }
    }
  }, [isAuthenticated, isAdmin, loading, navigate, adminOnly]);

  const handleAdminLogin = () => {
    setShowAdminLogin(false);
    // The auth context will handle the state update
  };

  const handleCloseAdminLogin = () => {
    setShowAdminLogin(false);
    navigate('/'); // Redirect to home if they close the admin login
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-kiki-purple-50 via-white to-kiki-blue-50 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-kiki-purple-600" />
      </div>
    );
  }

  // For admin routes
  if (adminOnly) {
    if (!isAuthenticated || !isAdmin) {
      return (
        <>
          <div className="min-h-screen bg-gradient-to-br from-kiki-purple-50 via-white to-kiki-blue-50 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Admin Access Required</h2>
              <p className="text-gray-600">Please login with admin credentials to access this page.</p>
            </div>
          </div>
          <LoginModal
            isOpen={showAdminLogin}
            onClose={handleCloseAdminLogin}
            onLogin={handleAdminLogin}
          />
        </>
      );
    }
    return <>{children}</>;
  }

  // For regular protected routes
  if (!isAuthenticated) {
    return null; // Will be redirected to /login by useEffect
  }

  return <>{children}</>;
};

export default ProtectedRoute;
