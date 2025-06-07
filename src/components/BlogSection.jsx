import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: "1",
    title: "The Future of EV Charging: Trends to Watch in 2025",
    excerpt: "As electric vehicles become mainstream, charging technology is evolving rapidly. Discover the key innovations shaping the future...",
    author: "Jane Doe",
    date: "June 7, 2025",
    category: "EV Technology",
    imageUrl: "A futuristic EV charging station with sleek design and glowing lights",
    slug: "future-of-ev-charging"
  },
  {
    id: "2",
    title: "UNAD's Mission: Making Sustainable Travel a Reality",
    excerpt: "Learn how VerveNxt is pioneering solutions to make EV ownership seamless and contribute to a greener planet through the UNAD app.",
    author: "John Smith",
    date: "June 5, 2025",
    category: "Sustainability",
    imageUrl: "A scenic view of a winding road through mountains with an EV driving on it",
    slug: "unad-mission-sustainability"
  },
  {
    id: "3",
    title: "Top 5 Benefits of Using an EV Charging Aggregator App",
    excerpt: "Tired of juggling multiple apps? An aggregator like UNAD simplifies your charging experience. Here's how...",
    author: "Alex Green",
    date: "May 30, 2025",
    category: "EV Lifestyle",
    imageUrl: "A person happily using a mobile app to find an EV charging station",
    slug: "benefits-ev-aggregator"
  },
];

const BlogSection = ({ onHomepage = false }) => {
  const postsToDisplay = onHomepage ? blogPosts.slice(0, 3) : blogPosts;

  return (
    <section id="blog" className={`py-20 ${onHomepage ? 'bg-gradient-to-br from-blue-50 to-indigo-50' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl lg:text-5xl font-bold ${onHomepage ? 'text-gray-900' : 'text-gradient'} mb-6`}>
            {onHomepage ? "Latest from Our Blog" : "VerveNxt Blog & News"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {onHomepage 
              ? "Stay updated with the latest news, insights, and stories about EV technology and sustainability from the VerveNxt team."
              : "Explore articles, company updates, industry news, and our thoughts on the future of electric vehicles and sustainable living."
            }
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {postsToDisplay.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-56">
                <img  
                  className="w-full h-full object-cover"
                  alt={post.title}
                 src="https://images.unsplash.com/photo-1588021369192-7e708684d357" />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="text-sm text-gray-500 space-y-1 mb-6">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-blue-500" />
                    <span>By {post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <Button asChild variant="outline" className="mt-auto border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white group">
                  <Link to={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {onHomepage && postsToDisplay.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y:30 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button size="lg" asChild className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-full">
              <Link to="/blog">
                Visit Our Blog <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;