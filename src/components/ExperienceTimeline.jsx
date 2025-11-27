import React, { useState, useEffect, useRef, useCallback } from 'react';
import experienceData from '../data/experience.json';
import MarkdownRenderer from './MarkdownRenderer';
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase, FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

function ExperienceTimeline() {
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [visibleItems, setVisibleItems] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRefs = useRef([]);
  const timelineRef = useRef(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            // Add staggered delay based on how many are already visible
            setTimeout(() => {
              setVisibleItems(prev => ({ ...prev, [index]: true }));
            }, 100);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '-50px 0px -50px 0px'
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
    
    const tiltX = (mousePosition.y - 0.5) * 8;
    const tiltY = (mousePosition.x - 0.5) * -8;
    
    return {
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out'
    };
  };

  // Calculate duration
  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate + '-01');
    const end = endDate === 'Present' ? new Date() : new Date(endDate + '-01');
    
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
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

  // Get company logo path (with fallback)
  const getCompanyLogo = (companyName) => {
    const slug = companyName.toLowerCase().replace(/[^a-z0-9]/g, '-');
    return `/logos/${slug}.svg`;
  };

  return (
    <div id="Experience-section" ref={timelineRef} className="relative min-h-screen w-full py-12 lg:py-20">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-48 h-48 bg-purple-300 dark:bg-gradient-to-br dark:from-purple-500/25 dark:to-pink-500/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-300 dark:bg-gradient-to-br dark:from-pink-500/20 dark:to-purple-500/25 rounded-full filter blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-poppins text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Professional Experience
          </h2>
          <p className="font-poppins text-sm text-gray-600 dark:text-cyan-300 max-w-2xl mx-auto">
            My journey in software development and AI engineering
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line with animated gradient */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full">
            <div className="w-full h-full bg-gradient-to-b from-cyan-500 via-teal-500 to-purple-500 opacity-30"></div>
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-cyan-400 to-transparent opacity-60 animate-pulse-slow"></div>
          </div>

          {/* Experience Items */}
          <div className="space-y-8">
            {experienceData.map((exp, index) => {
              const isExpanded = expandedExperience === index;
              const isVisible = visibleItems[index];
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  ref={el => cardRefs.current[index] = el}
                  data-index={index}
                  className={`relative transition-all duration-700 ease-out ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : `opacity-0 ${isLeft ? '-translate-x-10' : 'translate-x-10'} translate-y-8`
                  }`}
                >
                  {/* Timeline Dot with pulse animation */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 border-3 border-white dark:border-gray-900 shadow-lg transition-all duration-500 ${
                      isVisible ? 'scale-100' : 'scale-0'
                    }`}>
                      <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-30"></div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`md:w-[calc(50%-1.5rem)] ${isLeft ? 'md:mr-auto md:pr-6' : 'md:ml-auto md:pl-6'}`}>
                    <div 
                      className="glass-card rounded-xl p-4 lg:p-5 cursor-pointer group"
                      style={getTiltTransform(index)}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onMouseMove={(e) => handleMouseMove(e, index)}
                    >
                      {/* Hover glow effect */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 dark:from-cyan-500/20 dark:to-teal-500/20 transition-opacity duration-300 ${
                        hoveredCard === index ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                      
                      {/* Header */}
                      <div className="relative flex items-start gap-3 mb-3">
                        {/* Company Logo */}
                        <div className={`w-10 h-10 flex-shrink-0 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-md transition-transform duration-300 ${
                          hoveredCard === index ? 'scale-110 rotate-3' : ''
                        }`}>
                          {exp.company.charAt(0)}
                        </div>

                        <div className="flex-grow min-w-0">
                          <h3 className="font-poppins text-base lg:text-lg font-bold text-gray-900 dark:text-white mb-0.5 truncate">
                            {exp.position}
                          </h3>
                          <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-1">
                            {exp.company}
                          </p>

                          {/* Meta Info */}
                          <div className="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-300">
                            <span className="flex items-center gap-1">
                              <FaMapMarkerAlt className="text-cyan-500 text-[10px]" />
                              {exp.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <FaCalendarAlt className="text-teal-500 text-[10px]" />
                              {formatDate(exp.start_date)} - {formatDate(exp.end_date)}
                            </span>
                            <span className="flex items-center gap-1">
                              <FaBriefcase className="text-purple-500 text-[10px]" />
                              {exp.type}
                            </span>
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className={`hidden sm:block px-2 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-[10px] font-semibold whitespace-nowrap transition-all duration-300 ${
                          hoveredCard === index ? 'shadow-lg shadow-cyan-500/30' : ''
                        }`}>
                          {calculateDuration(exp.start_date, exp.end_date)}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="relative text-xs text-gray-700 dark:text-gray-300 mb-3 leading-relaxed line-clamp-2">
                        {exp.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="relative flex flex-wrap gap-1 mb-3">
                        {exp.tech_stack.slice(0, 6).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-[10px] font-medium transition-all duration-300 ${
                              hoveredCard === index ? 'transform hover:scale-105 hover:bg-cyan-100 dark:hover:bg-cyan-900/40' : ''
                            }`}
                            style={{
                              transitionDelay: hoveredCard === index ? `${techIndex * 30}ms` : '0ms'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                        {exp.tech_stack.length > 6 && (
                          <span className="px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 text-[10px] font-medium">
                            +{exp.tech_stack.length - 6}
                          </span>
                        )}
                      </div>

                      {isExpanded && (
                      <div className="relative mt-4 space-y-3 animate-slide-in">
                        <div className="glass-card p-3 rounded-lg">
                          <h4 className="font-semibold text-sm text-gray-900 dark:text-cyan-300 mb-2">
                            Key Responsibilities
                          </h4>
                          {exp.responsibilities && exp.responsibilities.length > 0 ? (
                            <ul className="space-y-1.5">
                              {exp.responsibilities.map((responsibility, idx) => (
                                <li 
                                  key={idx} 
                                  className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300"
                                >
                                  <span className="text-cyan-500 mt-0.5 text-[10px]">▸</span>
                                  <span>{responsibility}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-xs text-gray-500 dark:text-gray-400">No responsibilities listed.</p>
                          )}
                        </div>
                      </div>
                    )}

                      {/* Action Buttons */}
                      <div className="relative mt-3 flex flex-wrap gap-2">
                        {exp.links?.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-2.5 py-1 glass-card rounded-md text-xs font-semibold text-gray-900 dark:text-gray-100 hover:scale-105 hover:shadow-md transition-all duration-300"
                          >
                            {link.label === 'GitHub' ? (
                              <FaGithub className="text-sm" />
                            ) : link.label === 'LinkedIn' ? (
                              <FaLinkedin className="text-sm" />
                            ) : (
                              <FaExternalLinkAlt className="text-[10px]" />
                            )}
                            <span>{link.label}</span>
                          </a>
                        ))}

                        {/* Toggle Details Button */}
                        <button
                          onClick={() => setExpandedExperience(isExpanded ? null : index)}
                          className="flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md text-xs font-semibold hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300"
                        >
                          <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceTimeline;
