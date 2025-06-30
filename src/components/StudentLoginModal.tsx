
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Eye, EyeOff } from 'lucide-react';

interface StudentLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const StudentLoginModal: React.FC<StudentLoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
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
            Welcome to KIKI's Learning Hub
          </DialogTitle>
          <p className="text-gray-600 text-sm">
            Sign in to access your courses and continue learning
          </p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Location Badge */}
          <div className="flex justify-center">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              📍 Madurai, Tamil Nadu
            </Badge>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-12 bg-gray-50 border-gray-200 focus:bg-white focus:border-kiki-purple-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="h-12 bg-gray-50 border-gray-200 focus:bg-white focus:border-kiki-purple-500 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-kiki-purple-500 to-kiki-blue-500 hover:from-kiki-purple-600 hover:to-kiki-blue-600 text-white font-medium transition-all duration-200"
            >
              Sign In
            </Button>
          </form>

          {/* Forgot Password */}
          <div className="text-center">
            <button className="text-sm text-kiki-purple-600 hover:text-kiki-purple-700 font-medium">
              Forgot your password?
            </button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">New to KIKI's?</span>
            </div>
          </div>

          {/* Sign Up */}
          <Button
            variant="outline"
            className="w-full h-12 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
          >
            Create an account
          </Button>

          {/* Info Section */}
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-xs text-gray-600 mb-2">
              Access your courses, track progress, and connect with instructors
            </p>
            <div className="flex justify-center gap-2">
              <Badge variant="secondary" className="text-xs">Soft Skills</Badge>
              <Badge variant="secondary" className="text-xs">Career Development</Badge>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StudentLoginModal;
