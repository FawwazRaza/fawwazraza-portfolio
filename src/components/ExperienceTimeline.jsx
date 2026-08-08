import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import experienceData from '../data/experience.json';
import { FaMapMarkerAlt, FaCalendarAlt, FaGithub, FaLinkedin, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaLayerGroup } from 'react-icons/fa';

// Company logo imports
import artificizen from '../Assets/logos/artificizen.png';
import adaxiomTech from '../Assets/logos/adaxiom tech.png';
import adsells from '../Assets/logos/adsells.jpg';
import fastNuces from '../Assets/logos/fast nuces.png';
import dep from '../Assets/logos/DEP.png';
import systemsLimited from '../Assets/logos/systems_limited.png';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const totalRoles = experienceData.length;

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, offsetWidth } = scrollContainerRef.current;
    const cardWidth = offsetWidth >= 1024 ? (offsetWidth * 0.333) : (offsetWidth * 0.85 + 16);
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(0, index), totalRoles - 1));
  };

  const scrollToCard = (index) => {
    if (!scrollContainerRef.current) return;
    const { offsetWidth } = scrollContainerRef.current;
    const cardWidth = offsetWidth >= 1024 ? (offsetWidth * 0.333) : (offsetWidth * 0.85 + 16);
    scrollContainerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  const nextSlide = () => {
    scrollToCard(Math.min(activeIndex + 1, totalRoles - 1));
  };

  const prevSlide = () => {
    scrollToCard(Math.max(activeIndex - 1, 0));
  };

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate + '-01');
    const end = endDate === 'Present' ? new Date() : new Date(endDate + '-01');
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

  const formatDate = (dateString) => {
    if (dateString === 'Present') return 'Present';
    const [year, month] = dateString.split('-');
    const date = new Date(year, month - 1);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section
      id="Experience-section"
      className="relative w-full min-h-[calc(100vh-80px)] snap-start flex flex-col pt-28 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-slate-50/50 via-white/50 to-slate-50/50"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-100 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-3 lg:mb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-1.5 font-poppins">
                <FaLayerGroup className="text-[10px]" />
                <span>Production Experience</span>
              </div>
              <h2 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Professional Experience
              </h2>
              <p className="font-poppins text-xs sm:text-sm text-slate-600 max-w-xl mt-1">
                7 engineering roles across AI pipelines, backend architectures, and enterprise automation
              </p>
            </div>

            {/* Desktop-Only Arrow Controls (Pointer devices ≥ 1024px) */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={prevSlide}
                disabled={activeIndex === 0}
                className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-700 disabled:opacity-30 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                aria-label="Previous experience"
              >
                <FaChevronLeft className="text-xs" />
              </button>
              <button
                onClick={nextSlide}
                disabled={activeIndex >= totalRoles - 3}
                className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-700 disabled:opacity-30 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                aria-label="Next experience"
              >
                <FaChevronRight className="text-xs" />
              </button>
            </div>
          </div>

          {/* Signature Engineering Timeline Rail on Desktop */}
          <div className="hidden lg:block relative my-4">
            <div className="h-0.5 w-full bg-slate-200 rounded-full relative">
              <div
                className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-500"
                style={{ width: `${((activeIndex + 1) / totalRoles) * 100}%` }}
              />
            </div>
            <div className="flex justify-between -mt-1.5">
              {experienceData.map((exp, idx) => (
                <button
                  key={exp.id}
                  onClick={() => scrollToCard(Math.min(idx, totalRoles - 3))}
                  className="group relative flex flex-col items-center focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-full"
                  title={`${exp.position} @ ${exp.company}`}
                  aria-label={`Jump to ${exp.company}`}
                >
                  <div
                    className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                      idx === activeIndex
                        ? 'bg-blue-600 border-white ring-2 ring-blue-500 scale-125'
                        : idx < activeIndex
                        ? 'bg-cyan-500 border-white'
                        : 'bg-white border-slate-300 group-hover:border-blue-400'
                    }`}
                  />
                  <span
                    className={`absolute top-4 text-[10px] font-poppins font-medium whitespace-nowrap transition-opacity duration-200 ${
                      idx === activeIndex
                        ? 'text-blue-600 font-bold opacity-100'
                        : 'text-slate-500 opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    {exp.company.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scrollable Experience Track (Hardware-Accelerated on all devices) */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-5 xl:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-2 px-1 -mx-1"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: 'x mandatory',
            scrollPadding: '0 16px',
          }}
        >
          {experienceData.map((exp, index) => {
            const logo = companyLogos[exp.company];
            const isCurrent = exp.end_date === 'Present' || index === 0;
            const isActive = index === activeIndex;

            return (
              <div
                key={exp.id}
                className="snap-start flex-shrink-0 w-[84vw] max-w-[360px] sm:max-w-[380px] lg:w-[calc(33.333%-16px)] lg:max-w-none flex flex-col"
              >
                <div
                  onClick={() => navigate(`/experience/${exp.id}`)}
                  className={`group relative rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-5 xl:p-6 flex flex-col justify-between h-[450px] xl:h-[470px] cursor-pointer overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-visible:outline-none ${
                    isActive ? 'border-blue-200' : ''
                  }`}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${exp.position} at ${exp.company}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      navigate(`/experience/${exp.id}`);
                    }
                  }}
                >
                  {isCurrent && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-l from-blue-600 to-cyan-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-bl-xl tracking-wider uppercase shadow-sm font-poppins">
                        Latest
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="flex items-start gap-3.5 mb-3">
                      <div className="w-11 h-11 xl:w-12 xl:h-12 flex-shrink-0 rounded-xl overflow-hidden bg-slate-50 border border-slate-200/80 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                        {logo ? (
                          <img
                            src={logo}
                            alt={exp.company}
                            className="w-full h-full object-contain p-1.5"
                            loading="lazy"
                          />
                        ) : (
                          <span className="text-blue-600 font-bold text-base xl:text-lg font-poppins">
                            {exp.company.charAt(0)}
                          </span>
                        )}
                      </div>

                      <div className="flex-grow min-w-0 pr-6">
                        <h3 className="font-poppins text-sm xl:text-base font-bold text-slate-900 mb-0.5 leading-snug group-hover:text-blue-600 transition-colors truncate">
                          {exp.position}
                        </h3>
                        <p className="font-poppins text-xs font-semibold text-blue-600 truncate">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 text-xs font-poppins text-slate-600 mb-3 bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="flex items-center gap-1.5 text-slate-600 truncate">
                          <FaCalendarAlt className="text-cyan-500 text-[10px] flex-shrink-0" />
                          <span className="truncate">{formatDate(exp.start_date)} - {formatDate(exp.end_date)}</span>
                        </span>
                        <span className="font-medium text-slate-500 flex-shrink-0">
                          {calculateDuration(exp.start_date, exp.end_date)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-500">
                        <span className="flex items-center gap-1.5 truncate">
                          <FaMapMarkerAlt className="text-blue-500 text-[10px] flex-shrink-0" />
                          <span className="truncate">{exp.location}</span>
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200/60 font-semibold text-[10px] text-slate-700 flex-shrink-0">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="font-poppins text-xs text-slate-600 mb-3 leading-relaxed line-clamp-3">
                      {exp.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 mt-auto">
                    <div className="flex flex-wrap gap-1 mb-2.5">
                      {exp.tech_stack.slice(0, 4).map((tech, ti) => (
                        <span
                          key={ti}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium border border-slate-200/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.tech_stack.length > 4 && (
                        <span
                          className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-medium cursor-pointer hover:bg-blue-100 transition-colors"
                          title={exp.tech_stack.slice(4).join(', ')}
                        >
                          +{exp.tech_stack.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-1.5">
                        {exp.links?.map((link, li) => (
                          <a
                            key={li}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 border border-slate-200 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                            title={link.label}
                            aria-label={`${exp.company} ${link.label}`}
                          >
                            {link.label === 'GitHub' ? (
                              <FaGithub className="text-xs" />
                            ) : link.label === 'LinkedIn' ? (
                              <FaLinkedin className="text-xs" />
                            ) : (
                              <FaExternalLinkAlt className="text-[10px]" />
                            )}
                          </a>
                        ))}
                      </div>

                      <span className="font-poppins text-xs font-semibold text-blue-600 group-hover:text-blue-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-all">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Centered Pagination Dots (6px/8px with 24px touch targets) */}
        <div className="flex justify-center items-center gap-1.5 mt-6" role="tablist" aria-label="Experience slides">
          {experienceData.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className="w-6 h-6 flex items-center justify-center rounded-full focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              role="tab"
              aria-selected={activeIndex === i}
              aria-label={`Go to role ${i + 1}`}
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
      </div>
    </section>
  );
}

export default React.memo(ExperienceTimeline);
