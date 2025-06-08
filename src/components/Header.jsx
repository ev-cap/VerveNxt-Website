import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Zap, LogIn, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signInWithGoogle, signOut, loading } = useAuth();
  const { toast } = useToast();

  const navItems = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'The UNAD App', href: '/the-unad-app', type: 'route' },
    { name: 'Our Mission', href: '/our-mission', type: 'route' },
    { name: 'Blog', href: '/blog', type: 'route' },
    { name: 'Contact', href: '/contact', type: 'route' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (item) => {
    if (item.type === 'route') {
      setIsMenuOpen(false);
    } else if (item.type === 'anchor') {
      if (location.pathname === '/') {
        scrollToSection(item.href.substring(1));
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">VerveNxt</span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.1 }}>
                <Link
                  to={item.href}
                  onClick={() => handleNavClick(item)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            {loading ? (
              <div className="w-24 h-8 bg-gray-200 animate-pulse rounded-full"></div>
            ) : user ? (
              <div className="flex items-center space-x-2">
                {user.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-6 h-6 rounded-full object-cover"
                  />
                ) : (
                  <UserCircle className="w-6 h-6 text-blue-600" />
                )}
                <span className="text-sm font-medium text-gray-700">{user.name.split(' ')[0]}</span>
                <Button variant="outline" size="sm" onClick={handleSignOut} className="rounded-full">Sign Out</Button>
              </div>
            ) : (
              <Button onClick={handleGoogleSignIn} variant="outline" className="rounded-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                <LogIn className="mr-2 h-4 w-4" /> Sign In with Google
              </Button>
            )}
            <Button asChild className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-2 rounded-full">
              <Link to="/#contact">Get Notified</Link>
            </Button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 bg-white/90 backdrop-blur-md rounded-lg shadow-lg"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => handleNavClick(item)}
                className="block py-3 px-4 text-gray-700 hover:text-blue-600 font-medium hover:bg-gray-100 rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}
            {loading ? (
              <div className="w-full h-8 bg-gray-200 animate-pulse rounded-full mx-4 my-3"></div>
            ) : user ? (
              <div className="px-4 py-3">
                <div className="flex items-center space-x-2 mb-2">
                  {user.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  ) : (
                    <UserCircle className="w-6 h-6 text-blue-600" />
                  )}
                  <span className="text-sm font-medium text-gray-700">{user.name}</span>
                </div>
                <Button variant="outline" size="sm" onClick={handleSignOut} className="w-full rounded-full">Sign Out</Button>
              </div>
            ) : (
              <Button onClick={handleGoogleSignIn} variant="outline" className="w-full mx-auto block my-3 rounded-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                <LogIn className="mr-2 h-4 w-4" /> Sign In with Google
              </Button>
            )}
            <Button asChild className="w-full mt-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white">
              <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>Get Notified</Link>
            </Button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;