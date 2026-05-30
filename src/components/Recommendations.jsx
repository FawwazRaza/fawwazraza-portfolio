import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaQuoteLeft, FaQuoteRight, FaCalendarAlt, FaUserFriends } from 'react-icons/fa';
import recommendationsData from '../data/recommendations.json';

// Import real LinkedIn photos saved by the user
import wasimImg from '../Assets/images/recommenders/Wasim.jpg';
import mujtabaImg from '../Assets/images/recommenders/Mujtaba.jpg';
import yousafImg from '../Assets/images/recommenders/Muhammad Yousaf.jpg';
import tahaImg from '../Assets/images/recommenders/taha.png';
import shabbirImg from '../Assets/images/recommenders/Ghulam Shabbir.jpg';

// Lookup for loaded images
const recommenderImages = {
  'dr-wasim': wasimImg,
  'mujtaba': mujtabaImg,
  'yousaf': yousafImg,
  'taha': tahaImg,
  'shabbir': shabbirImg,
};

function Recommendations() {
  return (
    <section id="Recommendations-section" className="relative w-full py-16 lg:py-24 bg-white/40">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl animate-float-slow" />
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-violet-100 rounded-full filter blur-3xl animate-float-delayed" />
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-5xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-slate-900 mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Professional Recommendations
          </h2>
          <p className="font-poppins text-base text-slate-500 max-w-2xl mx-auto">
            Testimonials and endorsements from colleagues, team leads, and mentors
          </p>
        </motion.div>

        {/* Testimonials Vertical Flow */}
        <div className="space-y-20">
          {recommendationsData.map((rec, index) => {
            const photo = recommenderImages[rec.id];

            return (
              <motion.div
                key={rec.id}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.05 }}
              >
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4 md:px-8">
                  {/* Big quotation mark */}
                  <FaQuoteLeft className="text-4xl lg:text-5xl text-blue-500/10 mb-4 self-center animate-pulse-slow" />

                  {/* Recommendation Text quote */}
                  <p className="font-poppins text-base lg:text-lg italic text-slate-700 leading-relaxed max-w-3xl mb-8 relative font-medium">
                    "{rec.text}"
                  </p>

                  {/* Separator line for author details */}
                  <div className="w-12 h-0.5 bg-blue-500/30 rounded-full mb-6" />

                  {/* Author profile block */}
                  <div className="flex flex-col items-center">
                    {/* Real Profile Image */}
                    {photo ? (
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md mb-3 hover:scale-105 transition-transform duration-300">
                        <img 
                          src={photo} 
                          alt={rec.name} 
                          className="w-full h-full object-cover" 
                          loading="lazy" 
                          decoding="async" 
                        />
                      </div>
                    ) : (
                      // Initials fallback (just in case)
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-md mb-3 text-white font-bold text-lg">
                        {rec.name.split(' ').map(n => n.charAt(0)).join('').substring(0, 2)}
                      </div>
                    )}

                    {/* Name & LinkedIn Link */}
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-poppins text-base font-bold text-slate-900">
                        {rec.name}
                      </h4>
                      <a
                        href={rec.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:scale-115 transition-all duration-300"
                        title="View LinkedIn Profile"
                        aria-label={`View ${rec.name}'s LinkedIn Profile`}
                      >
                        <FaLinkedin className="text-sm" />
                      </a>
                    </div>

                    {/* Professional Title */}
                    <p className="font-poppins text-xs font-semibold text-slate-500 max-w-xl leading-normal text-center mb-3">
                      {rec.title}
                    </p>

                    {/* Metadata tags */}
                    <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] text-slate-400">
                      <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50/80 text-blue-600 font-semibold border border-blue-100/50">
                        <FaUserFriends className="text-[10px]" />
                        {rec.relationship}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-[9px]" />
                        {rec.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Elegant separator line between testimonial elements */}
                {index < recommendationsData.length - 1 && (
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mx-auto mt-20" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default React.memo(Recommendations);
