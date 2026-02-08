import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import experienceData from '../data/experience.json';
import { FaArrowLeft, FaGithub, FaLinkedin, FaExternalLinkAlt, FaMapMarkerAlt, FaCalendar, FaBriefcase } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Company logos import
import artificizenLogo from '../Assets/logos/artificizen.png';
import adaxiomLogo from '../Assets/logos/adaxiom tech.png';
import adsellsLogo from '../Assets/logos/adsells.jpg';
import fastLogo from '../Assets/logos/fast nuces.png';
import depLogo from '../Assets/logos/DEP.png';

const companyLogos = {
  'Artificizen': artificizenLogo,
  'AdAxiom Tech': adaxiomLogo,
  'Adsells Advertising': adsellsLogo,
  'National University of Computer and Emerging Sciences (FAST NUCES)': fastLogo,
  'Digital Empowerment Network': depLogo,
};

const gradientColors = [
  'from-blue-600 to-cyan-600',
  'from-emerald-600 to-teal-600',
  'from-violet-600 to-purple-600',
  'from-amber-600 to-orange-600',
];

export default function ExperienceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const experience = experienceData.find((exp) => exp.id === id);
  const expIndex = experienceData.findIndex((exp) => exp.id === id);

  if (!experience) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Experience Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const gradient = gradientColors[expIndex % gradientColors.length];
  const companyLogo = companyLogos[experience.company];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-white">
      <Header />

      <main className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <motion.button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium mb-8 transition-colors"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FaArrowLeft className="text-sm" />
            Back
          </motion.button>

          {/* Hero header with company logo */}
          <motion.div
            className="rounded-2xl overflow-hidden mb-10 shadow-lg bg-white border border-slate-100 p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-6">
              {/* Company logo */}
              {companyLogo && (
                <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-white border border-slate-100 shadow-sm p-2 flex items-center justify-center">
                  <img
                    src={companyLogo}
                    alt={experience.company}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}

              {/* Title & meta */}
              <div className="flex-1">
                <h1 className="font-poppins text-2xl lg:text-3xl font-bold text-slate-800 mb-2">
                  {experience.position}
                </h1>
                <h2 className="font-poppins text-xl font-semibold text-slate-600 mb-4">
                  {experience.company}
                </h2>

                {/* Meta info */}
                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <FaBriefcase className="text-blue-600" />
                    <span className="font-medium">{experience.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-600" />
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-blue-600" />
                    <span>
                      {experience.start_date} - {experience.end_date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content sections */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Description */}
            <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 lg:p-8">
              <h2 className="font-poppins text-xl font-bold text-slate-800 mb-3">Overview</h2>
              <p className="text-slate-600 leading-relaxed text-base">{experience.description}</p>
            </div>

            {/* Key Responsibilities */}
            {experience.responsibilities && experience.responsibilities.length > 0 && (
              <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 lg:p-8">
                <h2 className="font-poppins text-xl font-bold text-slate-800 mb-4">Key Responsibilities & Achievements</h2>
                <ul className="space-y-3">
                  {experience.responsibilities.map((resp, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-slate-600 leading-relaxed"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2" />
                      <span>{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            {experience.tech_stack && experience.tech_stack.length > 0 && (
              <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 lg:p-8">
                <h2 className="font-poppins text-xl font-bold text-slate-800 mb-4">Technologies & Tools</h2>
                <div className="flex flex-wrap gap-2">
                  {experience.tech_stack.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            {experience.links && experience.links.length > 0 && (
              <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 lg:p-8">
                <h2 className="font-poppins text-xl font-bold text-slate-800 mb-4">Related Links</h2>
                <div className="flex flex-wrap gap-3">
                  {experience.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 hover:shadow-lg transition-all duration-300"
                    >
                      {link.label.includes('GitHub') ? (
                        <FaGithub className="text-lg" />
                      ) : link.label.includes('LinkedIn') ? (
                        <FaLinkedin className="text-lg" />
                      ) : (
                        <FaExternalLinkAlt className="text-sm" />
                      )}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
