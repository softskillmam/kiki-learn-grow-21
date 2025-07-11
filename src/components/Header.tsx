
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, User, ShoppingCart, Search } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import UserProfile from './UserProfile';
import SearchModal from './SearchModal';
import Cart from './Cart';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleProtectedNavigation = (path: string) => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate(path);
    }
  };

  const navItems = isAuthenticated ? [
    { name: 'Home', href: '/' },
    { name: 'Enrolled Courses', href: '/enrolled-courses', protected: true },
    { name: 'Explore Programs', href: '/programs' },
    { name: 'Take Career Test', href: '/career-test', protected: true },
    { name: 'About', href: '/about' },
  ] : [
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '/programs' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-kiki-purple-500 to-kiki-blue-500"></div>
              <span className="text-xl font-bold text-gray-900">KIKI's Learning Hub</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                item.protected ? (
                  <button
                    key={item.name}
                    onClick={() => handleProtectedNavigation(item.href)}
                    className="text-sm font-medium text-gray-700 hover:text-kiki-purple-600 transition-colors cursor-pointer"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-kiki-purple-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowSearch(true)}
              >
                <Search className="h-4 w-4" />
              </Button>
              {isAuthenticated && (
                <>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowProfile(true)}
                  >
                    <User className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowCart(true)}
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </>
              )}
              {!isAuthenticated && (
                <Button variant="ghost" size="sm">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              )}
              {isAuthenticated ? (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <Button 
                  size="sm" 
                  className="bg-kiki-purple-600 hover:bg-kiki-purple-700"
                  onClick={() => navigate('/login')}
                >
                  Login
                </Button>
              )}
            </div>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    item.protected ? (
                      <button
                        key={item.name}
                        onClick={() => {
                          handleProtectedNavigation(item.href);
                          setIsOpen(false);
                        }}
                        className="text-lg font-medium text-gray-700 hover:text-kiki-purple-600 transition-colors text-left"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-lg font-medium text-gray-700 hover:text-kiki-purple-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                  <div className="pt-4 border-t space-y-3">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={() => {
                        setShowSearch(true);
                        setIsOpen(false);
                      }}
                    >
                      <Search className="h-4 w-4 mr-2" />
                      Search Courses
                    </Button>
                    {isAuthenticated && (
                      <>
                        <Button 
                          variant="ghost" 
                          className="w-full justify-start"
                          onClick={() => {
                            setShowProfile(true);
                            setIsOpen(false);
                          }}
                        >
                          <User className="h-4 w-4 mr-2" />
                          My Profile
                        </Button>
                        <Button 
                          variant="ghost" 
                          className="w-full justify-start"
                          onClick={() => {
                            setShowCart(true);
                            setIsOpen(false);
                          }}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          My Cart
                        </Button>
                      </>
                    )}
                    {isAuthenticated ? (
                      <Button 
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          handleLogout();
                          setIsOpen(false);
                        }}
                      >
                        Logout
                      </Button>
                    ) : (
                      <Button 
                        className="w-full bg-kiki-purple-600 hover:bg-kiki-purple-700"
                        onClick={() => {
                          navigate('/login');
                          setIsOpen(false);
                        }}
                      >
                        Login
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {isAuthenticated && (
        <>
          <UserProfile
            isOpen={showProfile}
            onClose={() => setShowProfile(false)}
          />
          <Cart
            isOpen={showCart}
            onClose={() => setShowCart(false)}
          />
        </>
      )}

      <SearchModal
        isOpen={showSearch}
        onClose={() => setShowSearch(false)}
      />
    </>
  );
};

export default Header;
