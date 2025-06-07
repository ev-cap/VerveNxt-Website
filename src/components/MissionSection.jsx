
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Users, Target, Globe } from 'lucide-react';

const MissionSection = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability First",
      description: "Every feature we build is designed to accelerate the adoption of clean energy transportation."
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "We put EV drivers at the center of everything we do, creating solutions that truly serve their needs."
    },
    {
      icon: Target,
      title: "Innovation Focus",
      description: "We're constantly pushing the boundaries of what's possible in EV charging technology."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our vision extends beyond borders - we're building for a cleaner planet for everyone."
    }
  ];

  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mission Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Driving a <span className="text-gradient">Greener Future</span> with VerveNxt
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At VerveNxt Technology, we believe that accelerating the adoption of electric vehicles is key to a sustainable future. Our mission is to remove the barriers to EV ownership by creating technology that is not just functional, but delightful to use.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              UNAD is our first step towards a cleaner, greener planet for generations to come. We're not just building an app - we're building the infrastructure for a sustainable transportation revolution.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Our Impact Goal</h3>
                  <p className="text-gray-600">Reduce transportation emissions by 50% through seamless EV adoption</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Team Image and Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <img  
                alt="VerveNxt team working together on sustainable technology solutions"
                className="w-full rounded-3xl shadow-2xl"
               src="https://images.unsplash.com/photo-1594732832278-abd644401426" />
              
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl"
              >
                <span className="text-white font-bold text-lg">🌱</span>
              </motion.div>
            </div>

            {/* Company Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <value.icon className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
