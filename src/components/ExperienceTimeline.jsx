import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import experienceData from '../data/experience.json';
import MarkdownRenderer from './MarkdownRenderer';
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase, FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

// Company logo imports
import artificizen from '../Assets/logos/artificizen.png';
import adaxiomTech from '../Assets/logos/adaxiom tech.png';
import adsells from '../Assets/logos/adsells.jpg';
import fastNuces from '../Assets/logos/fast nuces.png';
import dep from '../Assets/logos/DEP.png';
import systemsLimited from '../Assets/logos/systems_limited.png';

// Map company names to logos
const companyLogos = {
  'Systems Limited': systemsLimited,
  'Artificizen': artificizen,
  'National University of Computer and Emerging Sciences (FAST NUCES)': fastNuces,
  'AdAxiom Tech': adaxiomTech,
  'Digital Empowerment Network': dep,
  'Adsells Advertising': adsells,
};

function ExperienceTimeline() {
  const navigate = useNavigate();
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [visibleItems, setVisibleItems] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => ({ ...prev, [index]: true }));
            }, 50);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Handle mouse move for tilt effect
  const handleMouseMove = useCallback((e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePosition({ x, y });
  }, []);

  // Calculate tilt transform
  const getTiltTransform = (index) => {
    if (hoveredCard !== index) return {};
    
    const tiltX = (mousePosition.y - 0.5) * 6;
    const tiltY = (mousePosition.x - 0.5) * -6;
    
    return {
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out'
    };
  };

  // Calculate duration
  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate + '-01');
    const end = endDate === 'Present' ? new Date() : new Date(endDate + '-01');
    
    // Add 1 to make the duration inclusive of the starting month
    const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;
    
    if (years > 0 && remainingMonths > 0) {
      return `${years} yr ${remainingMonths} mo`;
    } else if (years > 0) {
      return `${years} yr`;
    } else {
      return `${remainingMonths} mo`;
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (dateString === 'Present') return 'Present';
    const [year, month] = dateString.split('-');
    const date = new Date(year, month - 1);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div id="Experience-section" ref={sectionRef} className="relative min-h-screen w-full py-12 lg:py-20 bg-slate-50/50">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-100 rounded-full filter blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-slate-900 mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="font-poppins text-base text-slate-500 max-w-2xl mx-auto">
            My journey in software engineering, AI systems development, and building scalable solutions
          </p>
        </div>

        {/* Experience Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceData.map((exp, index) => {
            const isExpanded = expandedExperience === index;
            const isVisible = visibleItems[index];
            const logo = companyLogos[exp.company];
            const isCurrent = exp.end_date === 'Present' || index === 0; // Systems Limited is latest

            return (
              <div
                key={exp.id}
                ref={el => cardRefs.current[index] = el}
                data-index={index}
                className={`relative transition-all duration-700 ease-out flex ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Content Card */}
                <div 
                  className="bg-white/80 backdrop-blur-xl border border-slate-100 shadow-md rounded-xl p-5 cursor-pointer group hover:shadow-xl transition-all duration-300 flex flex-col w-full relative overflow-hidden"
                  style={getTiltTransform(index)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onClick={() => navigate(`/experience/${exp.id}`)}
                >
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 transition-opacity duration-300 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}></div>

                  {/* Active/Latest indicator badge */}
                  {isCurrent && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-l from-blue-500 to-cyan-500 text-white text-[9px] font-bold px-3 py-1 rounded-bl-lg tracking-wider uppercase shadow-sm">
                        {index === 0 ? 'Latest' : 'Active'}
                      </div>
                    </div>
                  )}
                  
                  {/* Header */}
                  <div className="relative flex items-start gap-3 mb-4">
                    {/* Company Logo */}
                    <div className={`w-12 h-12 flex-shrink-0 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm transition-transform duration-300 ${
                      hoveredCard === index ? 'scale-110' : ''
                    }`}>
                      {logo ? (
                        <img src={logo} alt={exp.company} className="w-full h-full object-contain p-1.5" loading="lazy" decoding="async" />
                      ) : (
                        <span className="text-blue-600 font-bold text-xl">{exp.company.charAt(0)}</span>
                      )}
                    </div>

                    <div className="flex-grow min-w-0 pr-8">
                      <h3 className="font-poppins text-base lg:text-lg font-bold text-slate-900 mb-0.5 leading-snug group-hover:text-blue-600 transition-colors">
                        {exp.position}
                      </h3>
                      <p className="text-sm font-semibold text-blue-600 mb-1">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-col gap-1.5 text-xs text-slate-500 mb-4 flex-grow-0">
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-blue-500 text-[11px] w-3 flex-shrink-0" />
                      <span className="truncate">{exp.location}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-cyan-500 text-[11px] w-3 flex-shrink-0" />
                      <span>{formatDate(exp.start_date)} - {formatDate(exp.end_date)}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <FaBriefcase className="text-purple-500 text-[11px] w-3 flex-shrink-0" />
                      <span>{exp.type} ({calculateDuration(exp.start_date, exp.end_date)})</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="relative text-xs text-slate-600 mb-4 leading-relaxed line-clamp-3">
                    {exp.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="relative flex flex-wrap gap-1 mb-4 mt-auto">
                    {exp.tech_stack.slice(0, 5).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-0.5 rounded-md bg-slate-50 border border-slate-100 text-slate-600 text-[10px] font-medium transition-all duration-300 ${
                          hoveredCard === index ? 'hover:scale-105 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100' : ''
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.tech_stack.length > 5 && (
                      <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 border border-blue-100 text-[10px] font-medium">
                        +{exp.tech_stack.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Responsibilities list if expanded */}
                  {isExpanded && (
                    <div className="relative mt-2 mb-4 space-y-3 animate-fade-in w-full">
                      <div className="bg-slate-50/80 border border-slate-100 p-3.5 rounded-lg">
                        <h4 className="font-semibold text-xs text-slate-900 mb-2 uppercase tracking-wider">
                          Key Responsibilities
                        </h4>
                        {exp.responsibilities && exp.responsibilities.length > 0 ? (
                          <ul className="space-y-2">
                            {exp.responsibilities.map((responsibility, idx) => (
                              <li 
                                key={idx} 
                                className="flex items-start gap-2 text-xs text-slate-600 leading-normal"
                              >
                                <span className="text-blue-500 mt-0.5 text-[10px]">▸</span>
                                <span>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-xs text-slate-400">No responsibilities listed.</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="relative mt-auto pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex gap-2">
                      {exp.links?.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center justify-center w-8 h-8 bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 rounded-lg text-slate-600 hover:text-blue-600 shadow-sm transition-all duration-300 hover:scale-105"
                          title={link.label}
                        >
                          {link.label === 'GitHub' ? (
                            <FaGithub className="text-sm" />
                          ) : link.label === 'LinkedIn' ? (
                            <FaLinkedin className="text-sm" />
                          ) : (
                            <FaExternalLinkAlt className="text-xs" />
                          )}
                        </a>
                      ))}
                    </div>

                    {/* Toggle Details Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedExperience(isExpanded ? null : index);
                      }}
                      className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg text-xs font-semibold hover:shadow-md hover:shadow-blue-500/10 hover:scale-105 transition-all duration-300"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default React.memo(ExperienceTimeline);
