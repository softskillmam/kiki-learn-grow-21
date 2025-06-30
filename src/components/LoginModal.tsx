
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const handleGoogleLogin = () => {
    // Simulate Google login
    setTimeout(() => {
      onLogin();
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white border-0 shadow-2xl">
        <DialogHeader className="text-center space-y-4 pb-6">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-kiki-purple-500 to-kiki-blue-500 rounded-2xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">K</span>
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Welcome to KIKI's Admin
          </DialogTitle>
          <p className="text-gray-600 text-sm">
            Sign in to access your admin dashboard
          </p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Location Badge */}
          <div className="flex justify-center">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              📍 Madurai, Tamil Nadu
            </Badge>
          </div>

          {/* Google Sign In Button */}
          <Button
            onClick={handleGoogleLogin}
            className="w-full h-12 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 shadow-sm flex items-center justify-center gap-3 transition-all duration-200 hover:shadow-md"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Secure Admin Access</span>
            </div>
          </div>

          {/* Info Section */}
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-xs text-gray-600">
              Access to manage services, students, and business operations
            </p>
            <div className="flex justify-center gap-2 mt-2">
              <Badge variant="secondary" className="text-xs">Soft Skills</Badge>
              <Badge variant="secondary" className="text-xs">Career Development</Badge>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
