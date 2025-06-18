import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import HomePage from '@/pages/HomePage';
import BlogPage from '@/pages/BlogPage';
import ComingSoonPage from '@/pages/ComingSoonPage';
import TermsPage from '@/pages/TermsPage';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router future={{ 
        v7_startTransition: true,
        v7_relativeSplatPath: true 
      }}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPage />} /> 
              <Route path="/the-unad-app" element={<ComingSoonPage pageTitle="The UNAD App" />} />
              <Route path="/our-mission" element={<ComingSoonPage pageTitle="Our Mission" />} />
              <Route path="/contact" element={<ComingSoonPage pageTitle="Contact Us" />} />
              <Route path="/careers" element={<ComingSoonPage pageTitle="Careers" />} />
              <Route path="/press" element={<ComingSoonPage pageTitle="Press Kit" />} />
              <Route path="/pricing" element={<ComingSoonPage pageTitle="Pricing" />} />
              <Route path="/api" element={<ComingSoonPage pageTitle="API Access" />} />
              <Route path="/help" element={<ComingSoonPage pageTitle="Help Center" />} />
              <Route path="/privacy" element={<ComingSoonPage pageTitle="Privacy Policy" />} />
              <Route path="/terms" element={<TermsPage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;