import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-40 right-20 w-16 h-16 bg-white/20 rounded-lg"
        />
        <motion.div
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-40 left-20 w-12 h-12 bg-white/15 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              ROOL: EV Charging,{' '}
              <span className="text-green-400">Simplified</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-white/90 mb-8 leading-relaxed"
            >
              ROOL is the ultimate EV charging station aggregator, designed to make your charging experience seamless and delightful. Join us in making our planet a greener place, one charge at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full pulse-glow"
                onClick={() => {
                  const ctaSection = document.getElementById('contact');
                  if (ctaSection) ctaSection.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Notified
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full"
                onClick={scrollToFeatures}
              >
                <Play className="mr-2 w-5 h-5" />
                Explore the App
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="floating-animation">
              <img  
                alt="ROOL mobile app interface showing EV charging stations on a map"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
               src="https://images.unsplash.com/photo-1696433370249-e88ab2b9f33b" />
            </div>
            
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-20 h-20 bg-cyan-300/30 rounded-full blur-xl"
            />
            <motion.div
              animate={{ scale: [1.1, 1, 1.1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-400/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;