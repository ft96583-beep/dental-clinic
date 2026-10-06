import { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Shield } from 'lucide-react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';

interface BlogPageProps {
  onBookClick: () => void;
}

export function BlogPage({ onBookClick }: BlogPageProps) {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Dental Knowledge
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Latest News & Expert Articles
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Stay informed with expert dental hygiene tips, cosmetic trends, and oral health insights from our lead specialists.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {BLOG_POSTS.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="h-56 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3.5 w-3.5 text-blue-600" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-600 font-semibold">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 leading-snug">{post.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{post.excerpt}</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setActivePost(post)}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs shadow-md transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-sm p-4">
            <div className="bg-white rounded-3xl max-w-3xl w-full p-8 sm:p-10 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
              <button 
                onClick={() => setActivePost(null)}
                className="absolute top-6 right-6 h-10 w-10 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 font-bold flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center space-x-3 text-xs text-slate-500">
                <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full">{activePost.category}</span>
                <span>•</span>
                <span>{activePost.date}</span>
                <span>•</span>
                <span>By {activePost.author}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">{activePost.title}</h2>

              <img src={activePost.image} alt={activePost.title} className="rounded-2xl h-72 w-full object-cover shadow-md" />

              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p>{activePost.content}</p>
                <p>
                  Remember, preventive care is always better than cure. If you experience any persistent discomfort or wish to upgrade your smile, schedule an appointment with our specialist team today.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => setActivePost(null)}
                  className="text-slate-600 hover:text-slate-900 font-bold text-xs"
                >
                  Close Article
                </button>
                <button
                  onClick={() => {
                    setActivePost(null);
                    onBookClick();
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-md cursor-pointer"
                >
                  Book Appointment Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
