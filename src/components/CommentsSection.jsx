import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, UserCircle, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { v4 as uuidv4 } from 'uuid';

const CommentsSection = ({ postId }) => {
  const { user, signInWithGoogleMock } = useAuth();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments_${postId}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    } else {
      setComments([]); // Initialize with empty array if no comments found
    }
  }, [postId]);

  const saveCommentsToLocalStorage = (updatedComments) => {
    localStorage.setItem(`comments_${postId}`, JSON.stringify(updatedComments));
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) {
      toast({
        title: "Empty Comment",
        description: "Please write something before submitting.",
        variant: "destructive",
      });
      return;
    }
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to add a comment.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const commentToAdd = {
        id: uuidv4(),
        text: newComment,
        author: user.name,
        avatar: user.avatar || null, // Assuming user object might have an avatar URL
        timestamp: new Date().toISOString(),
      };
      const updatedComments = [commentToAdd, ...comments];
      setComments(updatedComments);
      saveCommentsToLocalStorage(updatedComments);
      setNewComment('');
      setIsLoading(false);
      toast({
        title: "Comment Added!",
        description: "Your insightful comment has been posted.",
        variant: "success",
      });
    }, 500);
  };

  const handleSignInPrompt = () => {
     // signInWithGoogleMock(); // This will be replaced by actual Supabase auth
    toast({
      title: "Google Sign-In (Mock)",
      description: "Supabase integration is required for full Google Sign-In functionality. Please complete Supabase setup.",
      variant: "default",
    });
    // For now, let's simulate a login
    signInWithGoogleMock();
  };


  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="mt-12"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
        <MessageSquare className="w-7 h-7 mr-3 text-blue-600" />
        Discussion ({comments.length})
      </h2>

      {user ? (
        <form onSubmit={handleAddComment} className="mb-8 p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
          <div className="flex items-start space-x-3 mb-3">
            {user.avatar ? (
              <img  src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1691398495617-18457fbf826d" />
            ) : (
              <UserCircle className="w-10 h-10 text-gray-400" />
            )}
            <Textarea
              placeholder="Share your thoughts..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-grow min-h-[80px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              rows={3}
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled={isLoading} className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90">
              {isLoading ? 'Posting...' : 'Post Comment'}
              <Send className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </form>
      ) : (
        <div className="mb-8 p-6 border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-50">
          <p className="text-gray-600 mb-4">Want to join the discussion?</p>
          <Button onClick={handleSignInPrompt} variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
            <LogIn className="mr-2 w-4 h-4" /> Sign in to Comment
          </Button>
           <p className="text-xs text-gray-500 mt-2">Google Sign-In currently mocked. Full functionality requires Supabase integration.</p>
        </div>
      )}

      <div className="space-y-6">
        {comments.length > 0 ? comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-5 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-4">
              {comment.avatar ? (
                <img  src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/flagged/photo-1608632359963-5828fa3b4141" />
              ) : (
                <UserCircle className="w-10 h-10 text-gray-400 flex-shrink-0" />
              )}
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-gray-800">{comment.author}</span>
                  <span className="text-xs text-gray-400">
                    {new Date(comment.timestamp).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}, {new Date(comment.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <p className="text-gray-700 whitespace-pre-wrap">{comment.text}</p>
              </div>
            </div>
          </motion.div>
        )) : (
          !user && comments.length === 0 ? null : (
             <p className="text-gray-500 text-center py-4">Be the first to share your thoughts on this post!</p>
          )
        )}
      </div>
    </motion.div>
  );
};

export default CommentsSection;