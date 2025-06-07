
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CommentsSection from '@/components/CommentsSection';

const blogPostsData = [
  {
    id: "1",
    title: "The Future of EV Charging: Trends to Watch in 2025",
    excerpt: "As electric vehicles become mainstream, charging technology is evolving rapidly. Discover the key innovations shaping the future...",
    content: "<p>The world of electric vehicles (EVs) is advancing at an unprecedented pace. As more drivers make the switch to electric, the demand for efficient, accessible, and intelligent charging solutions is skyrocketing. In 2025, we anticipate several key trends that will redefine the EV charging landscape.</p><h2>Smarter Charging Networks</h2><p>Expect to see more AI-powered charging networks that optimize energy distribution, predict demand, and offer dynamic pricing. These networks will integrate seamlessly with smart grids, contributing to overall energy stability.</p><h2>Ultra-Fast Charging (UFC)</h2><p>While fast charging is already available, 2025 will likely see a wider deployment of ultra-fast chargers capable of adding hundreds of miles of range in just a few minutes. This will be crucial for long-distance travel and reducing range anxiety.</p><h2>Wireless EV Charging</h2><p>Inductive charging technology is maturing. We may see more pilot programs and even commercial availability of wireless charging pads for homes and public spaces, offering unparalleled convenience.</p><h2>Vehicle-to-Grid (V2G) Technology</h2><p>EVs will increasingly become mobile energy storage units. V2G technology will allow EV owners to sell excess energy back to the grid, supporting grid stability and potentially earning them income.</p><p>At VerveNxt, we are closely monitoring these trends and actively working on incorporating cutting-edge solutions into the UNAD app to ensure our users always have access to the best and most convenient charging experiences.</p>",
    author: "Jane Doe",
    date: "June 7, 2025",
    category: "EV Technology",
    imageUrl: "A futuristic EV charging station with sleek design and glowing lights",
    slug: "future-of-ev-charging",
    tags: ["EV", "Charging", "Technology", "Future"]
  },
  {
    id: "2",
    title: "UNAD's Mission: Making Sustainable Travel a Reality",
    excerpt: "Learn how VerveNxt is pioneering solutions to make EV ownership seamless and contribute to a greener planet through the UNAD app.",
    content: "<p>Our core mission at VerveNxt is to accelerate the transition to sustainable transportation. We believe that electric vehicles are a cornerstone of this transition, but their adoption can be hindered by complexities in the charging ecosystem. That's where UNAD comes in.</p><h2>Simplifying the Complex</h2><p>UNAD is designed to be the single point of contact for all EV charging needs. By aggregating multiple charging networks into one intuitive platform, we eliminate the need for users to juggle various apps and payment methods. This simplification is key to making EV ownership more attractive and less daunting for a wider audience.</p><h2>Promoting Green Energy</h2><p>Beyond convenience, UNAD aims to guide users towards charging stations powered by renewable energy sources whenever possible. We are also exploring features that will allow users to track their carbon footprint reduction and understand their positive environmental impact.</p><p>Join us on this journey as we build a future where sustainable travel is not just a choice, but a delightful and effortless experience for everyone.</p>",
    author: "John Smith",
    date: "June 5, 2025",
    category: "Sustainability",
    imageUrl: "A scenic view of a winding road through mountains with an EV driving on it",
    slug: "unad-mission-sustainability",
    tags: ["Sustainability", "UNAD", "Mission", "Green Energy"]
  },
  {
    id: "3",
    title: "Top 5 Benefits of Using an EV Charging Aggregator App",
    excerpt: "Tired of juggling multiple apps? An aggregator like UNAD simplifies your charging experience. Here's how...",
    content: "<p>Electric vehicle (EV) charging aggregator apps like UNAD are revolutionizing how EV drivers find and use charging stations. Instead of managing multiple accounts and apps for different charging networks, an aggregator provides a unified solution. Here are the top 5 benefits:</p><ol><li><strong>One App for All Networks:</strong> Access a vast network of charging stations from various providers through a single interface. No more app-switching!</li><li><strong>Real-Time Availability and Status:</strong> Get live updates on charger availability, type, and operational status before you arrive, saving time and frustration.</li><li><strong>Simplified Payments:</strong> Link your payment method once and pay seamlessly across different networks, often with integrated payment systems.</li><li><strong>Efficient Route Planning:</strong> Many aggregators offer route planning features that incorporate necessary charging stops, making long-distance EV travel easier.</li><li><strong>Personalized Experience:</strong> Save favorite stations, view charging history, and sometimes even get recommendations based on your vehicle and preferences.</li></ol><p>UNAD aims to deliver all these benefits and more, ensuring that your EV charging experience is as smooth as your drive.</p>",
    author: "Alex Green",
    date: "May 30, 2025",
    category: "EV Lifestyle",
    imageUrl: "A person happily using a mobile app to find an EV charging station",
    slug: "benefits-ev-aggregator",
    tags: ["EV", "Lifestyle", "Aggregator", "Convenience"]
  },
];


const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPostsData.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 pt-20">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">Sorry, we couldn't find the blog post you're looking for.</p>
        <Button asChild>
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Button variant="outline" asChild className="mb-8">
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Link>
              </Button>
              <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1.5 text-blue-500" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1.5 text-blue-500" />
                  <span>By {post.author}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-1.5 text-blue-500" />
                  <span>{post.category}</span>
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-gradient">
                {post.title}
              </h1>
            </div>

            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-12">
              <img  
                className="w-full h-full object-cover"
                alt={post.title} src="https://images.unsplash.com/photo-1588021369192-7e708684d357" />
            </div>
            
            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

             <div className="mt-8">
                <h3 className="text-md font-semibold text-gray-700 mb-2">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                    {post.tags && post.tags.map(tag => (
                        <span key={tag} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{tag}</span>
                    ))}
                </div>
            </div>

            <hr className="my-12 border-gray-200" />

            <CommentsSection postId={post.id} />
            
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPostPage;