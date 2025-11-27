import React, { useState, useEffect } from 'react';
import mediumBlogsData from '../data/medium_blogs.json';
import { FaExternalLinkAlt, FaClock, FaHeart } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';

function MediumBlogs({ limit = null }) {
  const [visibleBlogs, setVisibleBlogs] = useState([]);

  useEffect(() => {
    // Sort by claps and stagger animation
    const sortedBlogs = [...mediumBlogsData].sort((a, b) => b.claps - a.claps);
    sortedBlogs.forEach((_, index) => {
      setTimeout(() => {
        setVisibleBlogs(prev => [...prev, index]);
      }, index * 80);
    });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const displayBlogs = [...mediumBlogsData]
    .sort((a, b) => (b.claps || 0) - (a.claps || 0))
    .slice(0, limit ? limit : mediumBlogsData.length);

  // Compact mode for preview (when limit is set)
  if (limit) {
    return (
      <div className="space-y-3">
        {displayBlogs.map((blog, index) => {
          const isVisible = visibleBlogs.includes(index);
          return (
            <a
              key={blog.id}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group glass-card rounded-xl p-4 block hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-gradient-to-br from-gray-800 to-black flex items-center justify-center shadow-md">
                  <SiMedium className="text-white text-lg" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-gray-700 dark:group-hover:text-cyan-400 transition-colors">
                    {blog.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(blog.published_at)}
                    </span>
                    {blog.read_time && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        · {blog.read_time}
                      </span>
                    )}
                  </div>
                </div>
                <FaExternalLinkAlt className="text-xs text-gray-400 group-hover:text-gray-700 dark:group-hover:text-cyan-400 flex-shrink-0 mt-1" />
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
            <SiMedium className="text-3xl text-gray-900 dark:text-white" />
            <h2 className="font-poppins text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              Medium Articles
            </h2>
          </div>
          <p className="font-poppins text-sm text-gray-600 dark:text-cyan-300 max-w-2xl mx-auto">
            Deep dives into AI, RAG systems, and software architecture
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayBlogs.map((blog, index) => {
            const isVisible = visibleBlogs.includes(index);

            return (
              <a
                key={blog.id}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group glass-card rounded-2xl overflow-hidden hover:shadow-xl dark:hover:shadow-glow-cyan transition-all duration-500 flex flex-col max-w-[480px] mx-auto w-full ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Image or Gradient Fallback */}
                {blog.image_url ? (
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={blog.image_url}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                ) : (
                  <div className="relative w-full h-40 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
                    <SiMedium className="text-5xl text-white/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Header with Medium icon */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <SiMedium className="text-gray-900 dark:text-white text-base flex-shrink-0" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {formatDate(blog.published_at)}
                      </span>
                    </div>
                    
                    {/* Popular badge */}
                    {blog.claps > 150 && (
                      <span className="px-2 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold flex items-center gap-1">
                        <FaHeart className="text-xs" />
                        Hot
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-poppins text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2 break-words">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 leading-relaxed line-clamp-3 flex-grow break-words hyphens-auto">
                    {blog.excerpt}
                  </p>

                  {/* Metadata */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <FaHeart className="text-gray-600 dark:text-gray-400" />
                        <span className="font-semibold text-xs">{blog.claps}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock className="text-gray-600 dark:text-gray-400" />
                        <span className="font-medium text-xs">{blog.read_time}</span>
                      </div>
                    </div>
                    <FaExternalLinkAlt className="text-gray-400 group-hover:text-gray-700 dark:group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300 text-sm" />
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-900/0 to-gray-700/0 group-hover:from-gray-900/10 group-hover:to-gray-700/10 dark:group-hover:from-cyan-500/10 dark:group-hover:to-teal-500/10 transition-all duration-500 pointer-events-none"></div>
              </a>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://medium.com/@fawwazraza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 text-white rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <SiMedium className="text-2xl" />
            <span>View All Articles on Medium</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MediumBlogs;
