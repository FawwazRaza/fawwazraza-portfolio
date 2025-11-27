import React, { useState, useEffect } from 'react';
import linksData from '../data/links.json';
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

// Platform icon mapping
const getPlatformIcon = (platform) => {
  const icons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    datacamp: FaCode,
    default: FaExternalLinkAlt,
  };
  return icons[platform.toLowerCase()] || icons.default;
};

// Platform colors
const getPlatformColor = (platform) => {
  const colors = {
    github: 'from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800',
    linkedin: 'from-blue-600 to-blue-800',
    datacamp: 'from-green-600 to-green-800',
    default: 'from-cyan-600 to-teal-600',
  };
  return colors[platform.toLowerCase()] || colors.default;
};

function LinkCards({ limit = null }) {
  const [visibleCards, setVisibleCards] = useState([]);
  const displayLinks = limit ? linksData.slice(0, limit) : linksData;

  useEffect(() => {
    // Staggered entrance animation
    displayLinks.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 100);
    });
  }, [limit]);

  // Compact mode for preview (when limit is set)
  if (limit) {
    return (
      <div className="space-y-3">
        {displayLinks.map((link, index) => {
          const Icon = getPlatformIcon(link.platform);
          const platformColor = getPlatformColor(link.platform);
          const isVisible = visibleCards.includes(index);

          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group glass-card rounded-xl p-4 block hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 flex-shrink-0 rounded-lg bg-gradient-to-br ${platformColor} flex items-center justify-center shadow-md`}>
                  <Icon className="text-white text-lg" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {link.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                    {link.description}
                  </p>
                </div>
                <FaExternalLinkAlt className="text-xs text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 flex-shrink-0" />
              </div>
            </a>
          );
        })}
      </div>
    );
  }

  // Full page mode
  return (
    <div className="relative min-h-screen w-full py-20 lg:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-300 dark:bg-gradient-to-br dark:from-blue-500/25 dark:to-cyan-500/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-cyan-300 dark:bg-gradient-to-br dark:from-cyan-500/20 dark:to-teal-500/25 rounded-full filter blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Links & Resources
          </h2>
          <p className="font-poppins text-lg text-gray-600 dark:text-cyan-300 max-w-2xl mx-auto">
            Connect with me across different platforms and explore my work
          </p>
        </div>

        {/* Full Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {displayLinks.map((link, index) => {
            const Icon = getPlatformIcon(link.platform);
            const platformColor = getPlatformColor(link.platform);
            const isVisible = visibleCards.includes(index);

            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group glass-card rounded-xl p-5 hover:shadow-xl dark:hover:shadow-glow-cyan transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Platform Icon */}
                  <div className={`w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-br ${platformColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white text-xl" />
                  </div>

                  <div className="flex-grow">
                    {/* Title */}
                    <h3 className="font-poppins text-base lg:text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                      {link.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
                      {link.description}
                    </p>

                    {/* Platform Badge + Link Preview */}
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-[11px] font-semibold capitalize">
                        {link.platform}
                      </span>

                      {/* Favicon */}
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                        <img
                          src={`https://www.google.com/s2/favicons?domain=${new URL(link.url).hostname}&sz=16`}
                          alt=""
                          className="w-4 h-4 opacity-70"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <span className="truncate max-w-[180px] font-mono text-[11px]">
                          {new URL(link.url).hostname}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* External Link Arrow */}
                  <div className="flex-shrink-0">
                    <FaExternalLinkAlt className="text-gray-400 dark:text-gray-500 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-sm" />
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 to-teal-500/0 group-hover:from-cyan-500/10 group-hover:to-teal-500/10 transition-all duration-500 pointer-events-none"></div>
              </a>
            );
          })}
        </div>

        {/* Add More Links CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
          </p>
        </div>
      </div>
    </div>
  );
}

export default LinkCards;
