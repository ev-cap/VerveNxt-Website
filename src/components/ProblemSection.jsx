
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, CreditCard, AlertCircle } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: MapPin,
      title: "Tired of Juggling Apps?",
      description: "Stop switching between multiple apps to find a compatible charging station.",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: Clock,
      title: "Wasting Time at Stations?",
      description: "No more uncertainty. Check station availability and charging speeds in real-time.",
      color: "from-cyan-500 to-sky-500"
    },
    {
      icon: CreditCard,
      title: "Confusing Payment Methods?",
      description: "Pay seamlessly through a single, secure app for any station in our network.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: AlertCircle,
      title: "Unreliable Information?",
      description: "Get accurate, up-to-date information about charging stations and their status.",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The EV Charging <span className="text-gradient">Hassle Ends Here</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the frustrations EV drivers face every day. That's why we built ROOL to solve these real problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${problem.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                <problem.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {problem.title}
              </h3>
              
              <p className="text-gray-600 text-center leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold">
            ✨ ROOL solves all of these problems in one beautiful app
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
