import React, { useState, useEffect } from "react";
import projectsData from "../data/projects.json";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import MarkdownRenderer from "./MarkdownRenderer";

// Vibrant gradient colors for tech badges
const techColors = [
  'from-cyan-500 to-teal-500',
  'from-emerald-500 to-green-500',
  'from-amber-500 to-yellow-500',
  'from-rose-500 to-pink-500',
  'from-purple-500 to-violet-500',
  'from-pink-500 to-fuchsia-500',
  'from-indigo-500 to-blue-500',
  'from-teal-500 to-cyan-500',
  'from-orange-500 to-red-500',
  'from-cyan-400 to-blue-500',
];

// Smart image resolver with fallback priority
const getProjectImage = (project) => {
  // Priority 1: Local image path
  if (project.image) {
    return { type: 'local', url: project.image };
  }
  
  // Priority 2: GitHub repo card (for GitHub projects)
  if (project.githubUrl) {
    const repoMatch = project.githubUrl.match(/github\.com\/([^\/]+)\/([^\/\?]+)/);
    if (repoMatch) {
      const [, owner, repo] = repoMatch;
      // Use GitHub's opengraph image or stats card as fallback
      return { 
        type: 'github', 
        url: `https://opengraph.githubassets.com/1/${owner}/${repo}`,
        fallback: `https://github-readme-stats.vercel.app/api/pin/?username=${owner}&repo=${repo}&theme=dark`
      };
    }
  }
  
  // Priority 3: Gradient fallback
  return { type: 'gradient', color: techColors[Math.floor(Math.random() * techColors.length)] };
};

function Cards() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const [imageErrors, setImageErrors] = useState({});
  const projectsToDisplay = projectsData.slice(0, 4);

  useEffect(() => {
    // Staggered entrance animation
    projectsToDisplay.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 150);
    });

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisibleCards(projectsToDisplay.map((_, i) => i));
    }
  }, []);

  const handleImageError = (index, imageData) => {
    if (imageData.fallback && !imageErrors[index]) {
      setImageErrors(prev => ({ ...prev, [index]: true }));
    }
  };

  return (
    <>
      {projectsToDisplay.map((project, index) => {
        const imageData = getProjectImage(project);
        const isExpanded = expandedCard === index;
        const hasExtendedInfo = project.intro || project.problem_solved;

        return (
          <div
            key={index}
            className={`group relative glass-card rounded-2xl overflow-hidden transition-all duration-500 flex flex-col ${
              visibleCards.includes(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            } ${isExpanded ? 'md:col-span-2' : ''} w-full`}
          >
            {/* Project Image/Visual */}
            <div className="relative w-full h-48 overflow-hidden">
              {imageData.type === 'gradient' ? (
                <div className={`w-full h-full bg-gradient-to-br ${imageData.color} opacity-30 dark:opacity-50 flex items-center justify-center`}>
                  <FaGithub className="text-6xl text-white/40 dark:text-white/60" />
                </div>
              ) : (
                <img
                  src={imageErrors[index] && imageData.fallback ? imageData.fallback : imageData.url}
                  alt={project.name}
                  onError={() => handleImageError(index, imageData)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black/90 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Content Container */}
            <div className="p-6 lg:p-8 flex flex-col flex-grow">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <h2 className="font-poppins text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {project.name}
                </h2>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500 dark:bg-cyan-500 animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-cyan-500 dark:bg-teal-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>

              {/* Base Description */}
              <p className="font-poppins text-sm lg:text-base text-gray-700 dark:text-gray-100 mb-4 leading-relaxed">
                {isExpanded && project.intro ? project.intro : project.description.substring(0, 120) + '...'}
              </p>

              {/* Expanded Content - with max-height and scroll */}
              {isExpanded && hasExtendedInfo && (
                <div className="mb-6 space-y-4 animate-slide-in max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-gray-200 dark:scrollbar-track-gray-800">
                  {project.problem_solved && (
                    <div className="glass-card p-4 rounded-xl">
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-cyan-300 mb-2">Problem Solved</h3>
                      <p className="text-sm text-gray-700 dark:text-gray-200 break-words hyphens-auto">{project.problem_solved}</p>
                    </div>
                  )}
                  
                  {project.technical_details && (
                    <div className="glass-card p-4 rounded-xl">
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-cyan-300 mb-2">Technical Details</h3>
                      <MarkdownRenderer content={project.technical_details} className="text-sm break-words" />
                    </div>
                  )}
                </div>
              )}

              {/* Technologies with vibrant badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, isExpanded ? undefined : 6).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${
                      techColors[techIndex % techColors.length]
                    } text-white text-xs font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300`}
                  >
                    {tech}
                  </span>
                ))}
                {!isExpanded && project.technologies.length > 6 && (
                  <span className="px-3 py-1.5 text-xs font-semibold text-gray-500 dark:text-gray-300">
                    +{project.technologies.length - 6} more
                  </span>
                )}
              </div>


              {/* Action Buttons + Details Toggle */}
              <div className="mt-auto flex flex-wrap gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg dark:hover:shadow-glow-cyan hover:scale-105 transition-all duration-300 group/btn"
                  >
                    <FaExternalLinkAlt className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-6 py-3 ${
                      project.liveLink 
                        ? 'glass-card text-gray-900 dark:text-gray-100' 
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-teal-500 text-white'
                    } rounded-xl font-semibold hover:shadow-lg dark:hover:shadow-glow-cyan hover:scale-105 transition-all duration-300 group/btn`}
                  >
                    <FaGithub className="text-lg group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span>GitHub</span>
                  </a>
                )}
                {/* Details Toggle Button */}
                {hasExtendedInfo && (
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 px-6 py-3 glass-card text-gray-900 dark:text-gray-100 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
                    onClick={() => setExpandedCard(isExpanded ? null : index)}
                    aria-label={isExpanded ? 'Hide Details' : 'Show Details'}
                  >
                    <span>{isExpanded ? 'Hide Details' : 'Details'}</span>
                  </button>
                )}
              </div>

              {/* Decorative gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 dark:from-cyan-500/0 dark:to-teal-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 dark:group-hover:from-cyan-500/10 dark:group-hover:to-teal-500/10 transition-all duration-500 pointer-events-none"></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Cards;
