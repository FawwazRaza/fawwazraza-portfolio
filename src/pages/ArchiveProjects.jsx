import React, { useState } from "react";
import projectsData from "../data/projects.json";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MarkdownRenderer from "../components/MarkdownRenderer";

// Array of vibrant colors
const colors = [
  'from-blue-500 to-cyan-500', 'from-green-500 to-emerald-500', 'from-yellow-500 to-amber-500', 
  'from-red-500 to-rose-500', 'from-purple-500 to-violet-500', 'from-pink-500 to-fuchsia-500', 
  'from-indigo-500 to-blue-500', 'from-teal-500 to-cyan-500', 'from-orange-500 to-red-500', 
  'from-cyan-500 to-teal-500', 'from-lime-500 to-green-500', 'from-emerald-500 to-teal-500'
];

// Smart image resolver
const getProjectImage = (project) => {
  if (project.image) {
    return { type: 'local', url: project.image };
  }
  
  if (project.githubUrl) {
    const repoMatch = project.githubUrl.match(/github\.com\/([^\/]+)\/([^\/\?]+)/);
    if (repoMatch) {
      const [, owner, repo] = repoMatch;
      return { 
        type: 'github', 
        url: `https://opengraph.githubassets.com/1/${owner}/${repo}`,
        fallback: `https://github-readme-stats.vercel.app/api/pin/?username=${owner}&repo=${repo}&theme=default`
      };
    }
  }
  
  return { type: 'gradient', color: colors[Math.floor(Math.random() * colors.length)] };
};

const slugify = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

function ArchiveProjects() {
  const navigate = useNavigate();
  const AllProjects = projectsData;
  const [expandedCard, setExpandedCard] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (index, imageData) => {
    if (imageData.fallback && !imageErrors[index]) {
      setImageErrors(prev => ({ ...prev, [index]: true }));
    }
  };

  return (
    <div className="relative min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
      {/* Floating background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
        <div className="absolute top-24 right-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-24 left-10 w-72 h-72 bg-cyan-200 rounded-full filter blur-3xl animate-float-delayed"></div>
      </div>

      {/* Back Button */}
      <div
        onClick={() => navigate(-1)}
        className="relative z-10 max-w-7xl mx-auto mb-8 flex items-center gap-2 text-slate-600 hover:text-blue-600 cursor-pointer transition-colors duration-300"
        tabIndex={0}
        role="button"
        aria-label="Back to Portfolio"
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate(-1); }}
      >
        <FaArrowLeft />
        <span className="font-poppins font-medium">Back to Portfolio</span>
      </div>

      {/* Page Title */}
      <div className="relative z-10 max-w-7xl mx-auto mb-12">
        <h1 className="font-poppins text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-4">
          Project Archive
        </h1>
        <p className="text-center text-slate-500 font-poppins">
          A comprehensive collection of my work across various domains
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {AllProjects.map((project, index) => {
          const imageData = getProjectImage(project);
          const isExpanded = expandedCard === index;
          const hasExtendedInfo = project.intro || project.problem_solved;

          return (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-xl border border-slate-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl flex flex-col transition-all duration-500 cursor-pointer ${
                isExpanded ? 'md:col-span-2' : ''
              }`}
              tabIndex={0}
              aria-label={`Project: ${project.name}`}
              onClick={() => navigate(`/projects/${slugify(project.name)}`)}
            >
              {/* Project Image/Visual */}
              <div className="relative w-full h-48 overflow-hidden">
                {imageData.type === 'gradient' ? (
                  <div className={`w-full h-full bg-gradient-to-br ${imageData.color} opacity-30 flex items-center justify-center`}>
                    <FaGithub className="text-6xl text-white/50" />
                  </div>
                ) : (
                  <img
                    src={imageErrors[index] && imageData.fallback ? imageData.fallback : imageData.url}
                    alt={project.name}
                    loading="lazy"
                    onError={() => handleImageError(index, imageData)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content Container */}
              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <h2 className="font-poppins text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.name}
                  </h2>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>

                {/* Base Description */}
                <p className="font-poppins text-sm lg:text-base text-slate-600 mb-4 leading-relaxed">
                  {isExpanded && project.intro ? project.intro : project.description.substring(0, 120) + '...'}
                </p>

                {/* Expanded Content */}
                {isExpanded && hasExtendedInfo && (
                  <div className="mb-6 space-y-4 animate-slide-in max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-slate-100">
                    {project.problem_solved && (
                      <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl" onClick={(e) => e.stopPropagation()}>
                        <h3 className="font-semibold text-lg text-slate-900 mb-2">Problem Solved</h3>
                        <p className="text-sm text-slate-600 break-words hyphens-auto">{project.problem_solved}</p>
                      </div>
                    )}
                    
                    {project.technical_details && (
                      <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl" onClick={(e) => e.stopPropagation()}>
                        <h3 className="font-semibold text-lg text-slate-900 mb-2">Technical Details</h3>
                        <MarkdownRenderer content={project.technical_details} className="text-sm break-words" />
                      </div>
                    )}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, isExpanded ? undefined : 6).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${
                        colors[techIndex % colors.length]
                      } text-white text-xs font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300`}
                    >
                      {tech}
                    </span>
                  ))}
                  {!isExpanded && project.technologies.length > 6 && (
                    <span className="px-3 py-1.5 text-xs font-semibold text-slate-400">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex flex-wrap gap-3" onClick={(e) => e.stopPropagation()}>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group/btn"
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
                          ? 'bg-white border border-slate-200 text-slate-800' 
                          : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      } rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group/btn`}
                    >
                      <FaGithub className="text-lg group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {hasExtendedInfo && (
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-800 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
                      onClick={(e) => { e.stopPropagation(); setExpandedCard(isExpanded ? null : index); }}
                      aria-label={isExpanded ? 'Hide Details' : 'Show Details'}
                    >
                      <span>{isExpanded ? 'Hide Details' : 'Details'}</span>
                    </button>
                  )}
                </div>

                {/* Decorative border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Back to Portfolio Link */}
      <div className="relative z-10 max-w-7xl mx-auto mt-12 flex items-center justify-center gap-2">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 font-semibold transition-all duration-300 hover:shadow-md"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Portfolio</span>
        </button>
      </div>
    </div>
  );
}

export default ArchiveProjects;