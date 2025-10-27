import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const CommentsSection = ({ postId }) => {
  const { user, signInWithGoogle, loading } = useAuth();
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
      userId: user.id
    };
    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem(`comments_${postId}`, JSON.stringify(updatedComments));
    setComment('');
    toast({ title: "Success!", description: "Your comment has been posted." });
  };

  if (loading) {
    return <div className="mt-12 pt-8 border-t border-gray-200">Loading...</div>;
  }

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
        <form onSubmit={handleCommentSubmit} className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-md">
          <div className="flex items-start space-x-4">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="w-12 h-12 rounded-full object-cover"
            />
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
          <Button onClick={signInWithGoogle} className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-2 px-6 rounded-lg">
            Sign In with Google
          </Button>
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
            <img 
              src={c.avatar} 
              alt={c.author} 
              className="w-10 h-10 rounded-full object-cover border-2 border-blue-200"
            />
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

export default CommentsSection;