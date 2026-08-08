import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.json';
import { FaGithub, FaChevronLeft, FaChevronRight, FaCodeBranch } from 'react-icons/fa';

const gradientColors = [
  'from-blue-600 to-cyan-600',
  'from-emerald-600 to-teal-600',
  'from-violet-600 to-purple-600',
  'from-amber-600 to-orange-600',
  'from-rose-600 to-pink-600',
  'from-indigo-600 to-blue-600',
  'from-teal-600 to-cyan-600',
  'from-fuchsia-600 to-pink-600',
];

const getProjectImage = (project) => {
  if (project.image) return project.image;
  if (project.githubUrl) {
    const m = project.githubUrl.match(/github\.com\/([^/]+)\/([^/?]+)/);
    if (m) return `https://opengraph.githubassets.com/1/${m[1]}/${m[2]}`;
  }
  return null;
};

const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default React.memo(function ProjectCards() {
  const navigate = useNavigate();
  const projects = projectsData;
  const totalProjects = projects.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    const cardWidth = offsetWidth >= 1024 ? (offsetWidth * 0.333) : (offsetWidth * 0.85 + 16);
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(0, index), totalProjects - 1));
  };

  const scrollToCard = (index) => {
    if (!scrollRef.current) return;
    const { offsetWidth } = scrollRef.current;
    const cardWidth = offsetWidth >= 1024 ? (offsetWidth * 0.333) : (offsetWidth * 0.85 + 16);
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  const nextSlide = () => {
    scrollToCard(Math.min(activeIndex + 1, totalProjects - 1));
  };

  const prevSlide = () => {
    scrollToCard(Math.max(activeIndex - 1, 0));
  };

  return (
    <section
      id="Project-section"
      className="relative w-full min-h-[calc(100vh-80px)] snap-start flex flex-col pt-28 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-transparent via-cyan-50/20 to-transparent"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-16 w-80 h-80 bg-blue-200 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 -right-16 w-80 h-80 bg-cyan-200 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 lg:mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50/90 border border-cyan-200/80 text-cyan-800 text-[11px] font-semibold uppercase tracking-wider mb-2 font-poppins">
              <FaCodeBranch className="text-[10px]" />
              <span>Featured Systems & Repositories</span>
            </div>
            <h2 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="font-poppins text-xs sm:text-sm text-slate-600 max-w-xl mt-1">
              Production-grade LLM applications, RAG pipelines, voice AI, and backend platforms
            </p>
          </div>

          {/* Desktop-Only Arrow Controls (Pointer devices ≥ 1024px) */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={prevSlide}
              disabled={activeIndex === 0}
              className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-700 disabled:opacity-30 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              aria-label="Previous project"
            >
              <FaChevronLeft className="text-xs" />
            </button>
            <button
              onClick={nextSlide}
              disabled={activeIndex >= totalProjects - 3}
              className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-700 disabled:opacity-30 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              aria-label="Next project"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>

        {/* Scrollable Project Cards Track (Hardware-Accelerated on all screen sizes) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 xl:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-2 px-1 -mx-1"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: 'x mandatory',
            scrollPadding: '0 16px',
          }}
        >
          {projects.map((project, index) => {
            const image = getProjectImage(project);
            const slug = slugify(project.name);
            const gradient = gradientColors[index % gradientColors.length];
            const isActive = index === activeIndex;

            return (
              <div
                key={project.id}
                className="snap-start flex-shrink-0 w-[84vw] max-w-[360px] sm:max-w-[380px] lg:w-[calc(33.333%-16px)] lg:max-w-none flex flex-col"
              >
                <div
                  onClick={() => navigate(`/projects/${slug}`)}
                  className={`group relative rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between h-[450px] xl:h-[470px] cursor-pointer focus-within:ring-2 focus-within:ring-blue-500 focus-visible:outline-none ${
                    isActive ? 'border-blue-200' : ''
                  }`}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${project.name}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      navigate(`/projects/${slug}`);
                    }
                  }}
                >
                  {/* Image Banner */}
                  <div className="relative h-44 xl:h-48 overflow-hidden bg-slate-900 flex-shrink-0">
                    {image ? (
                      <img
                        src={image}
                        alt={project.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div
                      className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center ${image ? 'hidden' : ''}`}
                      style={image ? { display: 'none' } : {}}
                    >
                      <FaGithub className="text-5xl text-white/60" />
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-110 transition-all focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                        title="View GitHub Repository"
                        aria-label={`View GitHub repository for ${project.name}`}
                      >
                        <FaGithub className="text-sm" />
                      </a>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-poppins text-base xl:text-lg font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {project.name}
                      </h3>
                      <p className="font-poppins text-xs text-slate-600 leading-relaxed line-clamp-3 mb-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 mt-auto">
                      <div className="flex flex-wrap gap-1 mb-2.5">
                        {project.technologies.slice(0, 3).map((tech, ti) => (
                          <span
                            key={ti}
                            className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium border border-slate-200/50"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span
                            className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-medium cursor-pointer hover:bg-blue-100 transition-colors"
                            title={project.technologies.slice(3).join(', ')}
                          >
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-xs font-poppins font-semibold text-blue-600">
                        <span>Architecture & Details</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Centered Pagination Dots (6px/8px with 24px touch targets) & Archive Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Project slides">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                className="w-6 h-6 flex items-center justify-center rounded-full focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                role="tab"
                aria-selected={activeIndex === i}
                aria-label={`Go to project ${i + 1}`}
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    activeIndex === i
                      ? 'w-[8px] h-[8px] bg-blue-600 shadow-sm'
                      : 'w-[6px] h-[6px] bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => navigate('/projectlist')}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200/90 text-slate-700 font-semibold text-xs hover:border-blue-300 hover:text-blue-600 hover:shadow-md transition-all focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
          >
            <span>View All Projects Archive</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
});
