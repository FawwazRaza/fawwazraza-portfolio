import React, { useState, useEffect } from 'react';
import linkedInPostsData from '../data/linkedin_posts.json';
import { FaLinkedin, FaThumbsUp, FaCommentAlt, FaExternalLinkAlt } from 'react-icons/fa';

function LinkedInPosts({ limit = null }) {
  const [visiblePosts, setVisiblePosts] = useState([]);

  // Helper to safely get engagement values
  const getEngagement = (post) => {
    const likes = post.engagement?.likes || 0;
    const comments = post.engagement?.comments || 0;
    return { likes, comments, total: likes + comments };
  };

  useEffect(() => {
    // Staggered entrance animation
    linkedInPostsData.forEach((_, index) => {
      setTimeout(() => {
        setVisiblePosts(prev => [...prev, index]);
      }, index * 80);
    });
  }, []);

  // Format date - handle missing dates
  const formatDate = (dateString) => {
    if (!dateString) return 'Recent';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  // Get limited posts (no sorting by engagement since data may not have it)
  const displayPosts = linkedInPostsData.slice(0, limit ? limit : 9);

  // Compact mode for preview (when limit is set)
  if (limit) {
    return (
      <div className="space-y-3">
        {displayPosts.map((post, index) => {
          const isVisible = visiblePosts.includes(index);
          return (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group glass-card rounded-xl p-4 block hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-md">
                  <FaLinkedin className="text-white text-lg" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1 mt-1">
                    {post.summary || post.excerpt}
                  </p>
                  {post.hashtags && (
                    <div className="flex gap-1.5 mt-1.5 flex-wrap">
                      {post.hashtags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="text-xs text-blue-600 dark:text-cyan-400">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
                <FaExternalLinkAlt className="text-xs text-gray-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 flex-shrink-0 mt-1" />
              </div>
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className="relative w-full py-16">
      <div className="relative z-10 mx-auto w-[90%] max-w-[1800px]">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaLinkedin className="text-3xl text-blue-600 dark:text-blue-500" />
            <h2 className="font-poppins text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              LinkedIn Posts
            </h2>
          </div>
          <p className="font-poppins text-sm text-gray-600 dark:text-cyan-300 max-w-2xl mx-auto">
            Sharing insights on AI, software development, and tech trends
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayPosts.map((post, index) => {
            const isVisible = visiblePosts.includes(index);
            const { likes, comments, total: totalEngagement } = getEngagement(post);

            return (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group glass-card rounded-2xl overflow-hidden hover:shadow-xl dark:hover:shadow-glow-cyan transition-all duration-500 flex flex-col max-w-[480px] mx-auto w-full ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Image (if available) */}
                {post.image_url && (
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Header with LinkedIn icon */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FaLinkedin className="text-blue-600 dark:text-blue-500 text-base flex-shrink-0" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {formatDate(post.published_at)}
                      </span>
                    </div>
                    
                    {/* High engagement badge */}
                    {totalEngagement > 50 && (
                      <span className="px-2 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-poppins text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 leading-relaxed line-clamp-3 flex-grow break-words hyphens-auto">
                    {post.excerpt || post.summary}
                  </p>

                  {/* Hashtags or Engagement Stats */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {post.hashtags ? (
                      <div className="flex flex-wrap gap-1 flex-1">
                        {post.hashtags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="text-[10px] text-blue-600 dark:text-cyan-400">{tag}</span>
                        ))}
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-1">
                          <FaThumbsUp className="text-blue-600 dark:text-blue-500" />
                          <span className="font-semibold text-xs">{likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaCommentAlt className="text-green-600 dark:text-green-500" />
                          <span className="font-semibold text-xs">{comments}</span>
                        </div>
                      </>
                    )}
                    <div className="ml-auto">
                      <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300 text-sm" />
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500 pointer-events-none"></div>
              </a>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.linkedin.com/in/fawwazraza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <FaLinkedin className="text-2xl" />
            <span>View All Posts on LinkedIn</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Update posts in <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-xs font-mono text-cyan-600 dark:text-cyan-400">src/data/linkedin_posts.json</code>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LinkedInPosts;
