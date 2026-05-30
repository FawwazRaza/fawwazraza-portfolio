import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.json';
import { FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const gradientColors = [
  'from-blue-500 to-cyan-500',
  'from-emerald-500 to-teal-500',
  'from-violet-500 to-purple-500',
  'from-amber-500 to-orange-500',
  'from-rose-500 to-pink-500',
  'from-indigo-500 to-blue-500',
  'from-teal-500 to-cyan-500',
  'from-fuchsia-500 to-pink-500',
];

const getProjectImage = (project, index) => {
  if (project.image) return project.image;
  if (project.githubUrl) {
    const m = project.githubUrl.match(/github\.com\/([^/]+)\/([^/?]+)/);
    if (m) return `https://opengraph.githubassets.com/1/${m[1]}/${m[2]}`;
  }
  return null;
};

const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default React.memo(function ProjectCards() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const projects = projectsData;
  const [dragConstraint, setDragConstraint] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const isDragging = useRef(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobileOrTouch = 
        window.innerWidth < 768 || 
        ('ontouchstart' in window) || 
        (navigator.maxTouchPoints > 0);
      setIsMobile(mobileOrTouch);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.offsetWidth;
      setDragConstraint(-(scrollWidth - clientWidth));
    }
  }, [projects]);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.75;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-16 lg:py-24">
      <div className="relative z-10 mx-auto w-[92%] max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-slate-800 mb-3">
            Featured Projects
          </h2>
          <p className="font-poppins text-base lg:text-lg text-slate-500 max-w-2xl mx-auto">
            Showcasing my best work in AI, full-stack, and software engineering
          </p>
        </motion.div>

        {/* Scroll navigation */}
        <div className="relative group">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 items-center justify-center rounded-full bg-white shadow-lg border border-slate-100 text-slate-600 hover:text-blue-600 hover:shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
            aria-label="Scroll left"
          >
            <FaChevronLeft />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 items-center justify-center rounded-full bg-white shadow-lg border border-slate-100 text-slate-600 hover:text-blue-600 hover:shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
            aria-label="Scroll right"
          >
            <FaChevronRight />
          </button>

          {/* Scrollable row with drag */}
          <motion.div
            ref={scrollRef}
            className={`flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide ${isMobile ? '' : 'cursor-grab active:cursor-grabbing'}`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            drag={isMobile ? false : "x"}
            dragConstraints={isMobile ? undefined : { left: dragConstraint, right: 0 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
            onDragStart={() => { isDragging.current = true; }}
            onDragEnd={() => { setTimeout(() => { isDragging.current = false; }, 100); }}
          >
            {projects.map((project, index) => {
              const image = getProjectImage(project, index);
              const slug = slugify(project.name);
              const gradient = gradientColors[index % gradientColors.length];

              return (
                <motion.div
                  key={project.id}
                  className="snap-start flex-shrink-0 w-[85vw] sm:w-[360px] md:w-[380px] cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => { if (!isDragging.current) navigate(`/projects/${slug}`); }}
                >
                  <div className="h-full rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl overflow-hidden transition-shadow duration-300 flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      {image ? (
                        <img
                          src={image}
                          alt={project.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                        />
                      ) : null}
                      <div
                        className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center ${image ? 'hidden' : ''}`}
                        style={image ? { display: 'none' } : {}}
                      >
                        <FaGithub className="text-5xl text-white/50" />
                      </div>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm border border-slate-100 shadow-sm flex items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-110 hover:shadow-md transition-all duration-300"
                          title="View Repository"
                        >
                          <FaGithub className="text-base" />
                        </a>
                      )}
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-poppins text-lg font-bold text-slate-800 mb-2 line-clamp-1">
                        {project.name}
                      </h3>
                      <p className="font-poppins text-sm text-slate-500 mb-4 line-clamp-3 leading-relaxed flex-grow">
                        {project.description.substring(0, 140)}...
                      </p>

                      {/* Tech tags - show first 4 */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech, ti) => (
                          <span
                            key={ti}
                            className="px-2.5 py-1 rounded-full bg-slate-50 text-slate-600 text-[11px] font-medium border border-slate-100"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-[11px] font-medium border border-blue-100">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* View all button */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={() => navigate('/projectlist')}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:border-blue-300 hover:text-blue-600 hover:shadow-md transition-all duration-300"
          >
            View All Projects
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
});
