import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Target, Award, Heart, Lightbulb } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries to create cutting-edge solutions for sustainable transportation.'
    },
    {
      icon: Heart,
      title: 'Sustainability',
      description: 'Our commitment to the environment drives every decision we make and every product we build.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in building strong relationships with our users, partners, and the EV community.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from product design to customer service.'
    }
  ];

  const milestones = [
    {
      year: 'April 2025',
      title: 'Company Founded',
      description: 'VerveNxt was established with a vision to revolutionize EV charging infrastructure.'
    },
    {
      year: 'October 2025',
      title: 'ROOL App Launch',
      description: 'Launched our flagship app to help EV owners find and access charging stations effortlessly.'
    },
    {
      year: 'December 2025',
      title: 'Expansion',
      description: 'Growing our network and partnerships to serve more EV users across India.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 py-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4">About VerveNxt</h1>
          <p className="text-xl max-w-3xl mx-auto px-6">
            Empowering the electric vehicle revolution with innovative technology and sustainable solutions
          </p>
        </motion.div>
      </div>

      {/* Mission Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At VerveNxt, we're on a mission to make electric vehicle charging accessible, reliable,
              and delightful for everyone. We believe that sustainable transportation shouldn't be
              complicated, and we're building the technology to make it seamless.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h3>
              <p className="text-gray-700 leading-relaxed">
                We develop innovative solutions that connect EV drivers with charging infrastructure.
                Our flagship product, ROOL, is a comprehensive platform that helps users discover,
                navigate to, and pay for EV charging with just a few taps.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We Do It</h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in a future where sustainable transportation is the norm, not the exception.
                By removing the barriers to EV adoption and making charging effortless, we're helping
                accelerate the transition to clean energy and a healthier planet.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building the future of EV charging, one milestone at a time
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-6"
              >
                <div className="flex-shrink-0 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center p-4">
                  <span className="text-xl font-bold text-white text-center leading-tight">{milestone.year}</span>
                </div>
                <div className="flex-grow bg-slate-50 p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              We're a passionate team of engineers, designers, and innovators dedicated to making
              sustainable transportation accessible to everyone. Our diverse backgrounds and shared
              vision drive us to create products that make a real difference.
            </p>
            <a
              href="/careers"
              className="inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Join Our Team
            </a>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 py-16">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join the EV Revolution?
            </h2>
            <p className="text-xl text-white mb-8">
              Download ROOL today and experience the future of EV charging
            </p>
            <a
              href="/the-rool-app"
              className="inline-block bg-white text-green-600 font-semibold py-3 px-8 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
