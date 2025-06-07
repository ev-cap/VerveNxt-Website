import React, { createContext, useState, useContext, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { toast } = useToast();

  // Check localStorage for existing mock user on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('mockUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
  const signInWithGoogleMock = () => {
    // This is a mock sign-in. Replace with actual Supabase logic.
    const mockUserData = {
      id: 'mock-user-123',
      name: 'Mock User',
      email: 'mock.user@example.com',
      avatar: `https://avatar.vercel.sh/mock.user@example.com.svg?text=MU` 
    };
    setUser(mockUserData);
    localStorage.setItem('mockUser', JSON.stringify(mockUserData)); // Store mock user
    toast({
      title: "Mock Sign-In Successful!",
      description: "You're signed in as a mock user.",
      variant: "success",
    });
    console.log("Supabase integration needed for actual Google Sign-In.");
  };

  const signOutMock = () => {
    setUser(null);
    localStorage.removeItem('mockUser'); // Remove mock user
    toast({
      title: "Signed Out (Mock)",
      description: "You have been signed out.",
    });
  };

  // In a real Supabase setup, you would initialize the Supabase client here
  // and use its methods for authentication. E.g., supabase.auth.signInWithOAuth(...), supabase.auth.signOut()
  // Also, you'd listen to onAuthStateChange to keep the user state in sync.

  return (
    <AuthContext.Provider value={{ user, signInWithGoogleMock, signOutMock }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};