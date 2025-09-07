
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Map, Zap, CreditCard, Route, Heart, BarChart3 } from 'lucide-react';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Map,
      title: "Universal Station Locator",
      description: "Discover thousands of charging stations from all major networks on a single, intuitive map.",
      image: "Interactive map interface showing EV charging stations with different network providers marked in various colors",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Real-Time Availability",
      description: "See live data on charger availability, so you never arrive at an occupied spot.",
      image: "Real-time charging station status display showing available and occupied charging ports",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: CreditCard,
      title: "Seamless In-App Payments",
      description: "Link your payment method once and pay for charges across different networks with a single tap.",
      image: "Mobile payment interface showing secure one-tap payment for EV charging",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Route,
      title: "Smart Route Planning",
      description: "Plan your long-distance trips with confidence. ROOL automatically adds charging stops to your route.",
      image: "Route planning interface showing optimal charging stops along a long-distance journey",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Heart,
      title: "Personalized Experience",
      description: "Save your favorite stations, track your charging history, and monitor your environmental impact.",
      image: "Personalized dashboard showing favorite charging stations and charging history",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: BarChart3,
      title: "Environmental Impact Tracking",
      description: "See how much CO2 you've saved and track your contribution to a greener planet.",
      image: "Environmental impact dashboard showing CO2 savings and green energy usage statistics",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            One App. All Stations. <span className="text-gradient">Zero Hassle</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of EV charging with features designed to make your journey effortless and enjoyable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveFeature(index)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-white shadow-2xl scale-105'
                    : 'bg-gray-50 hover:bg-white hover:shadow-lg'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Image */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative z-10">
              <img  
                alt={`${features[activeFeature].title} feature demonstration`}
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
               src="https://images.unsplash.com/photo-1675281828095-a6a3fdd187ea" />
            </div>
            
            {/* Decorative Background */}
            <div className={`absolute inset-0 bg-gradient-to-r ${features[activeFeature].color} rounded-3xl blur-3xl opacity-20 scale-110`}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
