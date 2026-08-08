import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaTimes, FaExpandAlt, FaUserCheck, FaCalendarAlt } from 'react-icons/fa';
import recommendationsData from '../data/recommendations.json';

// Import recommender photos
import wasimImg from '../Assets/images/recommenders/Wasim.jpg';
import mujtabaImg from '../Assets/images/recommenders/Mujtaba.jpg';
import yousafImg from '../Assets/images/recommenders/Muhammad Yousaf.jpg';
import tahaImg from '../Assets/images/recommenders/taha.png';
import shabbirImg from '../Assets/images/recommenders/Ghulam Shabbir.jpg';
import sufiyanImg from '../Assets/images/recommenders/Sufiyan anwar.jpg';

const recommenderImages = {
  'sufiyan': sufiyanImg,
  'dr-wasim': wasimImg,
  'mujtaba': mujtabaImg,
  'yousaf': yousafImg,
  'taha': tahaImg,
  'shabbir': shabbirImg,
};

function Recommendations() {
  const [activeModalRec, setActiveModalRec] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const totalRecs = recommendationsData.length;

  // Track active slide passively from native smooth scroll
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, offsetWidth } = carouselRef.current;
    const cardWidth = offsetWidth * 0.85 + 16;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(0, index), totalRecs - 1));
  };

  const scrollToCard = (index) => {
    if (!carouselRef.current) return;
    const { offsetWidth } = carouselRef.current;
    const cardWidth = offsetWidth * 0.85 + 16;
    carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModalRec(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="Recommendations-section"
      className="relative w-full min-h-[calc(100vh-80px)] snap-start flex flex-col pt-28 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 -right-16 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 -left-16 w-72 h-72 bg-cyan-200 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-2 font-poppins">
            <FaUserCheck className="text-[10px]" />
            <span>Peer & Leadership Endorsements</span>
          </div>
          <h2 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Recommendations
          </h2>
          <p className="font-poppins text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-1">
            Perspectives from managers, technical leads, and research mentors
          </p>
        </div>

        {/* Desktop Grid (≥1024px): 3 Columns x 2 Rows cleanly formatted */}
        <div className="hidden lg:grid grid-cols-3 gap-5 xl:gap-6">
          {recommendationsData.map((rec) => {
            const photo = recommenderImages[rec.id];

            return (
              <div
                key={rec.id}
                onClick={() => setActiveModalRec(rec)}
                className="group relative rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-5 xl:p-6 flex flex-col justify-between cursor-pointer focus-within:ring-2 focus-within:ring-blue-500 focus-visible:outline-none"
                tabIndex={0}
                role="button"
                aria-label={`Read full recommendation from ${rec.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveModalRec(rec);
                  }
                }}
              >
                <div>
                  {/* Author Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3 min-w-0">
                      {photo ? (
                        <img
                          src={photo}
                          alt={rec.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-sm font-poppins">
                          {rec.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                        </div>
                      )}
                      <div className="min-w-0">
                        <h3 className="font-poppins text-base font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                          {rec.name}
                        </h3>
                        <p className="font-poppins text-xs font-semibold text-slate-600 truncate">
                          {rec.title}
                        </p>
                      </div>
                    </div>

                    <a
                      href={rec.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-blue-600 p-1.5 rounded-lg hover:bg-blue-50 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none flex-shrink-0"
                      title="LinkedIn Profile"
                      aria-label={`${rec.name}'s LinkedIn`}
                    >
                      <FaLinkedin className="text-base" />
                    </a>
                  </div>

                  {/* Relationship & Date Badge */}
                  <div className="flex items-center gap-2 mb-3 text-[11px] font-poppins text-slate-500">
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-100/90 text-slate-700 font-medium border border-slate-200/60">
                      {rec.relationship}
                    </span>
                    <span>•</span>
                    <span className="truncate">{rec.date}</span>
                  </div>

                  {/* Quote Excerpt */}
                  <p className="font-poppins text-xs xl:text-sm text-slate-700 leading-relaxed line-clamp-3 italic">
                    "{rec.text}"
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-poppins text-blue-600 font-semibold group-hover:text-blue-700">
                  <span>Read full endorsement</span>
                  <FaExpandAlt className="text-[10px] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet Horizontal Scroll Carousel (< 1024px) */}
        <div className="lg:hidden">
          {/* Scrollable Track with Native Scroll-Snap & Touch Acceleration */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-2 px-1 -mx-1"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: 'x mandatory',
              scrollPadding: '0 16px',
            }}
          >
            {recommendationsData.map((rec, index) => {
              const photo = recommenderImages[rec.id];
              const isActive = index === activeIndex;

              return (
                <div
                  key={rec.id}
                  onClick={() => setActiveModalRec(rec)}
                  className={`snap-center flex-shrink-0 w-[84vw] max-w-[360px] sm:max-w-[380px] rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-md p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'shadow-md scale-100 opacity-100 border-blue-200'
                      : 'shadow-sm scale-[0.96] opacity-70'
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3 min-w-0">
                        {photo ? (
                          <img
                            src={photo}
                            alt={rec.name}
                            className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm font-poppins">
                            {rec.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                          </div>
                        )}
                        <div className="min-w-0">
                          <h3 className="font-poppins text-sm sm:text-base font-bold text-slate-900 truncate">
                            {rec.name}
                          </h3>
                          <p className="font-poppins text-[11px] sm:text-xs font-semibold text-slate-600 line-clamp-1">
                            {rec.title}
                          </p>
                        </div>
                      </div>

                      <a
                        href={rec.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-400 hover:text-blue-600 p-1.5 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none flex-shrink-0"
                        aria-label={`${rec.name}'s LinkedIn`}
                      >
                        <FaLinkedin className="text-base" />
                      </a>
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center gap-2 mb-3 text-[11px] font-poppins text-slate-500">
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                        {rec.relationship}
                      </span>
                      <span>•</span>
                      <span>{rec.date}</span>
                    </div>

                    {/* Quote */}
                    <p className="font-poppins text-xs sm:text-sm text-slate-700 leading-relaxed line-clamp-4 italic">
                      "{rec.text}"
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-poppins text-blue-600 font-semibold">
                    <span>Tap to view full endorsement</span>
                    <FaExpandAlt className="text-[10px]" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Centered Pagination Dots (6px inactive, 8px active with 24px touch target) */}
          <div className="flex justify-center items-center gap-1.5 mt-4 mb-2" role="tablist" aria-label="Recommendation slides">
            {recommendationsData.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                className="w-6 h-6 flex items-center justify-center rounded-full focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                role="tab"
                aria-selected={activeIndex === i}
                aria-label={`Go to recommendation ${i + 1}`}
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
      </div>

      {/* Lightbox Modal for Full Quote */}
      <AnimatePresence>
        {activeModalRec && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
            onClick={() => setActiveModalRec(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Full endorsement from ${activeModalRec.name}`}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalRec(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                aria-label="Close modal"
              >
                <FaTimes className="text-base" />
              </button>

              {/* Author Header */}
              <div className="flex items-start gap-3.5 pr-8 mb-4">
                {recommenderImages[activeModalRec.id] ? (
                  <img
                    src={recommenderImages[activeModalRec.id]}
                    alt={activeModalRec.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/20 shadow-md flex-shrink-0"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white font-bold text-base flex items-center justify-center flex-shrink-0 shadow-md">
                    {activeModalRec.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-poppins text-lg sm:text-xl font-bold text-slate-900">
                      {activeModalRec.name}
                    </h3>
                    <a
                      href={activeModalRec.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 p-0.5 hover:scale-110 transition-transform focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                      title="View LinkedIn Profile"
                      aria-label={`${activeModalRec.name}'s LinkedIn`}
                    >
                      <FaLinkedin className="text-base sm:text-lg" />
                    </a>
                  </div>
                  <p className="font-poppins text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                    {activeModalRec.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5 text-xs font-poppins text-slate-500">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-100 text-[11px]">
                      {activeModalRec.relationship}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <FaCalendarAlt className="text-[10px]" />
                      {activeModalRec.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Full Quote */}
              <div className="relative my-3 pl-4 border-l-2 border-blue-500/40">
                <FaQuoteLeft className="text-2xl text-blue-500/20 mb-2" />
                <p className="font-poppins text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  "{activeModalRec.text}"
                </p>
              </div>

              {/* Close Button Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setActiveModalRec(null)}
                  className="px-5 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default React.memo(Recommendations);
