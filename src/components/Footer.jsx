import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, MapPin, Phone, Twitter, Linkedin, Github, Rss } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about', isRouterLink: true },
      { name: 'Our Team', href: '/about#team', isRouterLink: true },
      { name: 'Careers', href: '/careers', isRouterLink: true },
      { name: 'Press Kit', href: '/press', isRouterLink: true }
    ],
    product: [
      { name: 'ROOL App', href: '/the-rool-app', isRouterLink: true },
      { name: 'Features', href: '/the-rool-app#features', isRouterLink: true }, // Assuming features are on ROOL app page
      { name: 'Pricing', href: '/pricing', isRouterLink: true },
      { name: 'API Access', href: '/api', isRouterLink: true }
    ],
    resources: [
      { name: 'Blog / News', href: '/blog', isRouterLink: true },
      { name: 'Help Center', href: '/help', isRouterLink: true },
      { name: 'Privacy Policy', href: '/privacy', isRouterLink: true },
      { name: 'Terms of Service', href: '/terms', isRouterLink: true }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/vervenxt', label: 'Twitter', isRouterLink: false, external: true },
    { icon: Linkedin, href: 'https://linkedin.com/company/vervenxt', label: 'LinkedIn', isRouterLink: false, external: true },
    { icon: Github, href: 'https://github.com/vervenxt', label: 'GitHub', isRouterLink: false, external: true },
    { icon: Rss, href: '/blog', label: 'Blog', isRouterLink: true }
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center mb-6">
              <img
                src="/images/VervenxtLogo.png"
                alt="VerveNxt Logo"
                className="h-28"
              />
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionizing EV charging with technology that makes sustainable transportation accessible and delightful for everyone.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <a href="mailto:hello@vervenxt.com" className="text-gray-300 hover:text-green-400">hello@vervenxt.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <a href="tel:+91 91 3640 1982" className="text-gray-300 hover:text-green-400">+91 9920 770 489</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Pune, Maharashtra, India</span>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4 capitalize text-white">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.isRouterLink ? (
                        <Link
                          to={link.href}
                          className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get the latest news about ROOL and the future of EV charging.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-200">
                Subscribe
              </button>
            </form>

            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all duration-200"
                >
                {social.isRouterLink ? (
                    <Link to={social.href} aria-label={social.label} className="flex items-center justify-center w-full h-full">
                        <social.icon className="w-5 h-5" />
                    </Link>
                ) : (
                    <a href={social.href} aria-label={social.label} target={social.external ? "_blank" : "_self"} rel={social.external ? "noopener noreferrer" : ""} className="flex items-center justify-center w-full h-full">
                        <social.icon className="w-5 h-5" />
                    </a>
                )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} VerveNxt Solutions Private Limited. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Made with 💚 for a sustainable future
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;