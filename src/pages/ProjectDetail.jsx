import React, { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '../data/projects.json';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MarkdownRenderer from '../components/MarkdownRenderer';

// Eagerly import all project screenshots
const allScreenshots = import.meta.glob('../Assets/projects/**/*.png', { eager: true });

function getProjectScreens(slug) {
  const firstWord = slug.split('-')[0].toLowerCase();
  const matches = Object.entries(allScreenshots)
    .filter(([path]) => {
      const pathLower = path.toLowerCase();
      const filename = path.split('/').pop().toLowerCase();
      // Match either "{firstword}-screen*.png" OR "screen*.png" in a folder containing firstword
      return (
        (filename.startsWith(firstWord + '-screen') || filename.startsWith('screen')) &&
        pathLower.includes('/' + firstWord + '/')
      );
    })
    .sort(([a], [b]) => {
      const numA = parseInt(a.match(/screen(\d+)/)?.[1] || '0');
      const numB = parseInt(b.match(/screen(\d+)/)?.[1] || '0');
      return numA - numB;
    })
    .map(([, mod]) => mod.default);
  return matches;
}

const gradientColors = [
  'from-blue-500 to-cyan-500',
  'from-emerald-500 to-teal-500',
  'from-violet-500 to-purple-500',
  'from-amber-500 to-orange-500',
  'from-rose-500 to-pink-500',
  'from-indigo-500 to-blue-500',
];

const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projectsData.find((p) => slugify(p.name) === slug);
  const projectIndex = projectsData.findIndex((p) => slugify(p.name) === slug);

  const screenshots = useMemo(() => slug ? getProjectScreens(slug) : [], [slug]);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    if (!lightboxOpen) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, screenshots.length]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Project Not Found</h1>
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

  const gradient = gradientColors[projectIndex % gradientColors.length];

  const getProjectImage = () => {
    if (project.image) return project.image;
    if (project.githubUrl) {
      const m = project.githubUrl.match(/github\.com\/([^/]+)\/([^/?]+)/);
      if (m) return `https://opengraph.githubassets.com/1/${m[1]}/${m[2]}`;
    }
    return null;
  };

  const heroImage = getProjectImage();

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

          {/* Hero image / gradient */}
          <motion.div
            className="rounded-2xl overflow-hidden mb-10 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {heroImage ? (
              <img
                src={heroImage}
                alt={project.name}
                className="w-full h-64 md:h-80 object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            ) : (
              <div className={`w-full h-64 md:h-80 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                <FaGithub className="text-7xl text-white/40" />
              </div>
            )}
          </motion.div>

          {/* Title & meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="font-poppins text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              {project.name}
            </h1>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 hover:shadow-lg transition-all duration-300"
                >
                  <FaGithub className="text-lg" />
                  View on GitHub
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Full description */}
            <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 lg:p-8">
              <h2 className="font-poppins text-xl font-bold text-slate-800 mb-3">Overview</h2>
              <p className="text-slate-600 leading-relaxed text-base">
                {project.intro || project.description}
              </p>
            </div>

            {/* Problem solved */}
            {project.problem_solved && (
              <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 lg:p-8">
                <h2 className="font-poppins text-xl font-bold text-slate-800 mb-3">Problem Solved</h2>
                <p className="text-slate-600 leading-relaxed text-base">{project.problem_solved}</p>
              </div>
            )}

            {/* Technical details */}
            {project.technical_details && (
              <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 lg:p-8">
                <h2 className="font-poppins text-xl font-bold text-slate-800 mb-3">Technical Architecture</h2>
                <div className="prose prose-slate max-w-none text-slate-600">
                  <MarkdownRenderer content={project.technical_details} />
                </div>
              </div>
            )}

            {/* Project Screenshots Gallery */}
            {screenshots.length > 0 && (
              <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 lg:p-8">
                <h2 className="font-poppins text-xl font-bold text-slate-800 mb-6">Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {screenshots.map((src, i) => (
                    <motion.div
                      key={i}
                      className="rounded-xl overflow-hidden border border-slate-100 shadow-sm cursor-pointer group relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      onClick={() => openLightbox(i)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <img
                        src={src}
                        alt={`${project.name} screenshot ${i + 1}`}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3">
                          <FaExternalLinkAlt className="text-slate-700 text-xl" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Lightbox Modal */}
            <AnimatePresence>
              {lightboxOpen && (
                <motion.div
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeLightbox}
                >
                  {/* Close Button */}
                  <button
                    className="absolute top-4 right-4 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    onClick={closeLightbox}
                  >
                    <FaTimes className="text-2xl" />
                  </button>

                  {/* Navigation Buttons */}
                  {screenshots.length > 1 && (
                    <>
                      <button
                        className="absolute left-4 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      >
                        <FaChevronLeft className="text-2xl" />
                      </button>
                      <button
                        className="absolute right-4 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      >
                        <FaChevronRight className="text-2xl" />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[110] px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium">
                    {currentImageIndex + 1} / {screenshots.length}
                  </div>

                  {/* Main Image */}
                  <motion.div
                    key={currentImageIndex}
                    className="max-w-[90vw] max-h-[90vh] relative"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={screenshots[currentImageIndex]}
                      alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                      className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
