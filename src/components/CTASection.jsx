
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, CheckCircle, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to join the waitlist.",
        variant: "destructive"
      });
      return;
    }

    // Store email in localStorage
    const existingEmails = JSON.parse(localStorage.getItem('roolWaitlist') || '[]');
    if (!existingEmails.includes(email)) {
      existingEmails.push(email);
      localStorage.setItem('roolWaitlist', JSON.stringify(existingEmails));
    }

    setIsSubmitted(true);
    toast({
      title: "Welcome to the ROOL Family! 🎉",
      description: "You're now on our exclusive waitlist. We'll notify you the moment ROOL is available!"
    });

    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 cta-gradient"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -50, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 right-20 w-24 h-24 bg-white/20 rounded-lg"
        />
        <motion.div
          animate={{ x: [0, 50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-20 h-20 bg-white/15 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            Ready to Revolutionize Your <span className="text-yellow-300">EV Experience?</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Be the first to experience the future of EV charging. Sign up for exclusive updates, and we'll notify you the moment ROOL is available on the App Store and Google Play.
          </p>

          {/* Email Signup Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-12 max-w-2xl mx-auto"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl text-gray-900 placeholder-gray-500 text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl whitespace-nowrap"
                  >
                    Join Waitlist
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                <p className="text-white/70 text-sm">
                  🔒 We respect your privacy. No spam, just exciting updates about ROOL.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">You're In! 🎉</h3>
                <p className="text-white/90">Welcome to the ROOL family. We'll be in touch soon!</p>
              </motion.div>
            )}
          </motion.div>

          {/* App Store Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <div className="flex items-center space-x-4 bg-white/20 backdrop-blur-lg rounded-2xl px-6 py-4">
              <Smartphone className="w-8 h-8 text-white" />
              <div className="text-left">
                <p className="text-white/70 text-sm">Coming Soon to</p>
                <p className="text-white font-bold text-lg">App Store & Google Play</p>
              </div>
            </div>
            
            <div className="text-white/80">
              <span className="text-2xl">📱</span>
              <span className="ml-2 font-semibold">iOS & Android</span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-white/80">Charging Stations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Network Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Real-time Updates</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
