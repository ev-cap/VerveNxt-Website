import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft, MessageSquare, Send, ListFilter, Search, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';

// Sample blog posts data (in a real app, this would come from an API or CMS)
const blogPostsData = [
  {
    id: 1,
    title: "The Future of EV Charging: Trends to Watch in 2025",
    excerpt: "As electric vehicles become mainstream, charging technology is evolving rapidly. Discover the key innovations shaping the future...",
    content: "<p>The world of electric vehicles (EVs) is advancing at an unprecedented pace. As more drivers make the switch to electric, the demand for efficient, accessible, and intelligent charging solutions is skyrocketing. In 2025, we anticipate several key trends that will redefine the EV charging landscape.</p><h2>Smarter Charging Networks</h2><p>Expect to see more AI-powered charging networks that optimize energy distribution, predict demand, and offer dynamic pricing. These networks will integrate seamlessly with smart grids, contributing to overall energy stability.</p><h2>Ultra-Fast Charging (UFC)</h2><p>While fast charging is already available, 2025 will likely see a wider deployment of ultra-fast chargers capable of adding hundreds of miles of range in just a few minutes. This will be crucial for long-distance travel and reducing range anxiety.</p><h2>Wireless EV Charging</h2><p>Inductive charging technology is maturing. We may see more pilot programs and even commercial availability of wireless charging pads for homes and public spaces, offering unparalleled convenience.</p><h2>Vehicle-to-Grid (V2G) Technology</h2><p>EVs will increasingly become mobile energy storage units. V2G technology will allow EV owners to sell excess energy back to the grid, supporting grid stability and potentially earning them income.</p><p>At VerveNxt, we are closely monitoring these trends and actively working on incorporating cutting-edge solutions into the UNAD app to ensure our users always have access to the best and most convenient charging experiences.</p>",
    author: "Jane Doe",
    date: "June 1, 2025",
    category: "EV Technology",
    imageUrl: "A futuristic EV charging station with sleek design and glowing lights",
    slug: "future-of-ev-charging"
  },
  {
    id: 2,
    title: "UNAD's Mission: Making Sustainable Travel a Reality",
    excerpt: "Learn how VerveNxt is pioneering solutions to make EV ownership seamless and contribute to a greener planet through the UNAD app.",
    content: "<p>Our core mission at VerveNxt is to accelerate the transition to sustainable transportation. We believe that electric vehicles are a cornerstone of this transition, but their adoption can be hindered by complexities in the charging ecosystem. That's where UNAD comes in.</p><h2>Simplifying the Complex</h2><p>UNAD is designed to be the single point of contact for all EV charging needs. By aggregating multiple charging networks into one intuitive platform, we eliminate the need for users to juggle various apps and payment methods. This simplification is key to making EV ownership more attractive and less daunting for a wider audience.</p><h2>Promoting Green Energy</h2><p>Beyond convenience, UNAD aims to guide users towards charging stations powered by renewable energy sources whenever possible. We are also exploring features that will allow users to track their carbon footprint reduction and understand their positive environmental impact.</p><p>Join us on this journey as we build a future where sustainable travel is not just a choice, but a delightful and effortless experience for everyone.</p>",
    author: "John Smith",
    date: "May 28, 2025",
    category: "Sustainability",
    imageUrl: "A scenic view of a winding road through mountains with an EV driving on it",
    slug: "unad-mission-sustainability"
  },
  {
    id: 3,
    title: "Top 5 Benefits of Using an EV Charging Aggregator App",
    excerpt: "Tired of juggling multiple apps? An aggregator like UNAD simplifies your charging experience. Here's how...",
    content: "<p>Electric vehicle (EV) charging aggregator apps like UNAD are revolutionizing how EV drivers find and use charging stations. Instead of managing multiple accounts and apps for different charging networks, an aggregator provides a unified solution. Here are the top 5 benefits:</p><ol><li><strong>One App for All Networks:</strong> Access a vast network of charging stations from various providers through a single interface. No more app-switching!</li><li><strong>Real-Time Availability and Status:</strong> Get live updates on charger availability, type, and operational status before you arrive, saving time and frustration.</li><li><strong>Simplified Payments:</strong> Link your payment method once and pay seamlessly across different networks, often with integrated payment systems.</li><li><strong>Efficient Route Planning:</strong> Many aggregators offer route planning features that incorporate necessary charging stops, making long-distance EV travel easier.</li><li><strong>Personalized Experience:</strong> Save favorite stations, view charging history, and sometimes even get recommendations based on your vehicle and preferences.</li></ol><p>UNAD aims to deliver all these benefits and more, ensuring that your EV charging experience is as smooth as your drive.</p>",
    author: "Alex Green",
    date: "May 15, 2025",
    category: "EV Lifestyle",
    imageUrl: "A person happily using a mobile app to find an EV charging station",
    slug: "benefits-ev-aggregator"
  },
  {
    id: 4,
    title: "Navigating Range Anxiety: Tips for New EV Owners",
    excerpt: "Worried about running out of charge? We share practical tips and how UNAD helps you drive with confidence.",
    content: "<p>Range anxiety is a common concern for new electric vehicle (EV) owners. However, with a bit of planning and the right tools, it's easily managed. Here are some tips:...</p>",
    author: "Sarah Miller",
    date: "June 5, 2025",
    category: "EV Lifestyle",
    imageUrl: "An EV dashboard showing ample battery range",
    slug: "navigating-range-anxiety"
  },
  {
    id: 5,
    title: "The Environmental Impact of EVs: A Closer Look",
    excerpt: "Electric vehicles are a key part of a sustainable future. We delve into the real environmental benefits.",
    content: "<p>Switching to an electric vehicle (EV) is a significant step towards reducing your carbon footprint. Let's explore the environmental benefits in detail:...</p>",
    author: "Dr. Eco Friend",
    date: "June 10, 2025",
    category: "Sustainability",
    imageUrl: "Lush green forest with a clean energy symbol",
    slug: "environmental-impact-evs"
  }
];


const CommentsSection = ({ postId }) => {
  const { user, signInWithGoogleMock } = useAuth(); // Changed to use useAuth hook
  const { toast } = useToast();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem(`comments_${postId}`)) || [];
    setComments(storedComments);
  }, [postId]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      toast({ title: "Oops!", description: "Comment cannot be empty.", variant: "destructive" });
      return;
    }
    if (!user) {
      toast({ title: "Please sign in", description: "You need to be signed in to comment.", variant: "destructive" });
      return;
    }
    const newComment = {
      id: Date.now(),
      text: comment,
      author: user.name,
      avatar: user.avatar,
      date: new Date().toISOString(),
    };
    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem(`comments_${postId}`, JSON.stringify(updatedComments));
    setComment('');
    toast({ title: "Success!", description: "Your comment has been posted." });
  };

  const handleSignIn = () => {
    signInWithGoogleMock(); // Use the mock sign-in from context
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-12 pt-8 border-t border-gray-200"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <MessageSquare className="w-8 h-8 mr-3 text-blue-600" />
        Comments ({comments.length})
      </h2>
      {user ? (
        <form onSubmit={handleCommentSubmit} className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md">
          <div className="flex items-start space-x-4">
            <img-replace alt={user.name} className="w-12 h-12 rounded-full object-cover" />
            <div className="flex-1">
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={`Commenting as ${user.name}... What are your thoughts?`}
                className="w-full p-3 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                rows="4"
              />
              <Button type="submit" className="mt-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <Send className="w-4 h-4 mr-2" /> Post Comment
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <div className="mb-8 p-6 bg-gray-100 rounded-xl text-center">
          <p className="text-gray-700 mb-3 text-lg">Want to join the conversation?</p>
          <Button onClick={handleSignIn} className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold py-2 px-6 rounded-lg">
            Sign In to Comment
          </Button>
          <p className="text-xs text-gray-500 mt-2">(Mock Sign-In: Supabase integration needed for real authentication)</p>
        </div>
      )}
      <div className="space-y-6">
        {comments.length > 0 ? comments.map((c) => (
          <motion.div 
            key={c.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-start space-x-4 p-5 bg-white rounded-xl shadow-lg"
          >
            <img-replace alt={c.author} className="w-10 h-10 rounded-full object-cover border-2 border-blue-200" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold text-blue-700">{c.author}</p>
                <p className="text-xs text-gray-500">{new Date(c.date).toLocaleDateString()}</p>
              </div>
              <p className="text-gray-700 leading-relaxed">{c.text}</p>
            </div>
          </motion.div>
        )) : (
          <p className="text-gray-500 py-4 text-center text-lg">No comments yet. Be the first to share your thoughts!</p>
        )}
      </div>
    </motion.div>
  );
};


const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (slug) {
      const post = blogPostsData.find(p => p.slug === slug);
      setSelectedPost(post);
    } else if (blogPostsData.length > 0 && !selectedPost) {
      setSelectedPost(null); 
    }
  }, [slug, navigate, selectedPost]);

   useEffect(() => {
    if (location.pathname === '/blog' && !slug) {
      setSelectedPost(null);
    }
  }, [location.pathname, slug]);


  const filteredPosts = blogPostsData.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePostSelect = (post) => {
    setSelectedPost(post);
    navigate(`/blog/${post.slug}`);
  };

  const PostContentDisplay = ({ post }) => {
    if (!post) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center p-10">
          <Search className="w-24 h-24 text-gray-300 mb-6" />
          <h2 className="text-3xl font-semibold text-gray-700 mb-2">Select a Post</h2>
          <p className="text-gray-500 text-lg">Choose an article from the list to read its content here.</p>
        </div>
      );
    }

    return (
      <motion.div
        key={post.id} 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="p-6 md:p-10 h-full overflow-y-auto"
      >
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-4 mb-3">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1.5 text-blue-500" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1.5 text-blue-500" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                <Tag className="w-3 h-3 mr-1" />
                <span>{post.category}</span>
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-gradient leading-tight">
              {post.title}
            </h1>
          </div>

          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl mb-10">
            <img-replace
              className="w-full h-full object-cover"
              alt={post.title} />
          </div>
          
          <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed selection:bg-yellow-200 selection:text-yellow-800"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          <CommentsSection postId={post.id} />
        </div>
      </motion.div>
    );
  };


  return (
    <div className="pt-20 min-h-screen flex flex-col bg-gradient-to-br from-slate-100 to-sky-100">
      <header className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gradient mb-3">VerveNxt Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your hub for EV news, sustainability tips, and UNAD app updates.
          </p>
        </div>
      </header>

      <div className="flex-grow flex container mx-auto px-0 md:px-6 py-8 gap-0 md:gap-8">
        <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside 
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-full md:w-1/3 lg:w-1/4 bg-white shadow-xl rounded-r-lg md:rounded-lg p-6 overflow-y-auto flex-shrink-0"
            style={{ maxHeight: 'calc(100vh - 160px)' }}
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-800">Browse Articles</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)} className="md:hidden">
                <ChevronsLeft className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative mb-6">
              <Input 
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            
            <div className="mb-6">
              <Button variant="outline" className="w-full justify-start text-gray-600">
                <ListFilter className="w-4 h-4 mr-2" /> Filter / Sort
              </Button>
            </div>

            <nav className="space-y-3">
              {filteredPosts.length > 0 ? filteredPosts.map(post => (
                <motion.div
                  key={post.id}
                  whileHover={{ scale: 1.02, x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                <Link
                  to={`/blog/${post.slug}`}
                  onClick={(e) => { 
                    e.preventDefault(); 
                    handlePostSelect(post);
                    if (window.innerWidth < 768) setIsSidebarOpen(false);
                  }}
                  className={`block p-4 rounded-lg transition-all duration-200 ease-in-out group
                    ${selectedPost?.id === post.id 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105' 
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md'}`}
                >
                  <h3 className={`font-semibold text-lg mb-1 group-hover:text-blue-600 ${selectedPost?.id === post.id ? 'text-white' : 'text-gray-800'}`}>{post.title}</h3>
                  <p className={`text-sm ${selectedPost?.id === post.id ? 'text-blue-100' : 'text-gray-500 group-hover:text-gray-600'}`}>{post.excerpt.substring(0,70)}...</p>
                  <div className={`mt-2 text-xs flex items-center ${selectedPost?.id === post.id ? 'text-blue-200' : 'text-gray-400 group-hover:text-gray-500'}`}>
                    <Calendar className="w-3 h-3 mr-1" /> {post.date}
                  </div>
                </Link>
                </motion.div>
              )) : (
                <p className="text-gray-500 p-4 text-center">No articles found matching your search.</p>
              )}
            </nav>
          </motion.aside>
        )}
        </AnimatePresence>

        <motion.main 
          className="flex-grow bg-white shadow-xl rounded-lg overflow-hidden relative"
          initial={false} 
        >
          {!isSidebarOpen && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSidebarOpen(true)} 
              className="absolute top-4 left-4 z-10 bg-white/70 backdrop-blur-sm md:hidden"
              aria-label="Open sidebar"
            >
              <ChevronsRight className="h-5 w-5" />
            </Button>
          )}
          <AnimatePresence mode="wait">
            <PostContentDisplay post={selectedPost} />
          </AnimatePresence>
        </motion.main>
      </div>
    </div>
  );
};

export default BlogPage;