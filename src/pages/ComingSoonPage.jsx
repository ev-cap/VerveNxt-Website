import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ComingSoonPage = ({ pageTitle = "This Page" }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900 text-white p-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <div className="inline-block p-4 bg-white/10 rounded-full mb-8">
          <Zap className="w-16 h-16 text-green-400" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {pageTitle} is <span className="text-green-400">Coming Soon!</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
          We're working hard to bring you an amazing experience. This section of our website is currently under construction. Stay tuned for exciting updates!
        </p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 150 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="bg-green-400 text-slate-900 hover:bg-green-500 px-8 py-4 text-lg font-semibold rounded-full">
            <Link to="/">
              <ArrowLeft className="mr-2 w-5 h-5" />
              Go Back Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full" onClick={() => window.location.href = '#contact'}>
            Get Notified
          </Button>
        </motion.div>

        <motion.div 
          className="mt-16 text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p>In the meantime, explore other parts of our site or follow us on social media!</p>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-green-500/20 rounded-full animate-pulse"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.8, 0.5, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default ComingSoonPage;