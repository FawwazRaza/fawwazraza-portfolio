import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { UserData } from "../data/UserData";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillCode,
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import imagedeveloper from "../Assets/images/fawwaz_2.png";
import mediumLogo from "../Assets/logos/medium.png";
import dataCampLogo from "../Assets/logos/datacamp.png";
import { useIntro } from "../context/IntroContext";

function Home() {
  const socialMedia = UserData.socialMedia;
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { introComplete } = useIntro();

  // Subtle parallax mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialMediaIcons = {
    AiFillGithub: AiFillGithub,
    FaLinkedinIn: FaLinkedinIn,
    AiOutlineTwitter: AiOutlineTwitter,
    AiFillCode: () => <img src={mediumLogo} alt="Medium" className="w-5 h-5 object-contain grayscale" />,
    FaEnvelope: FaEnvelope,
  };

  // Scroll-based parallax for hero - horizontal slide + fade
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroLeftX = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const heroRightX = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* Animated gradient background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-cyan-200/30 rounded-full filter blur-3xl"
          animate={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
          transition={{ type: 'tween', duration: 0.8, ease: 'easeOut' }}
          style={{ animation: 'float 8s ease-in-out infinite' }}
        />
        <motion.div
          className="absolute top-1/3 -right-20 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-blue-200/40 rounded-full filter blur-3xl"
          animate={{ x: mousePos.x * -0.3, y: mousePos.y * -0.3 }}
          transition={{ type: 'tween', duration: 0.8, ease: 'easeOut' }}
          style={{ animation: 'float 10s ease-in-out infinite 1s' }}
        />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-slate-200/40 to-blue-100/30 rounded-full filter blur-3xl animate-float-slow" />
      </div>

      {/* Floating decorative glass elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        <div className="absolute top-32 left-[10%] w-16 h-16 bg-white/60 backdrop-blur-sm rounded-2xl rotate-12 animate-float-slow shadow-sm border border-white/30" />
        <div className="absolute top-48 right-[15%] w-20 h-20 bg-white/40 backdrop-blur-sm rounded-3xl -rotate-6 animate-float-delayed shadow-sm border border-white/30" />
        <div className="absolute bottom-40 left-[20%] w-12 h-12 bg-white/60 backdrop-blur-sm rounded-xl rotate-45 animate-float shadow-sm border border-white/30" />
      </div>

      {/* Main Hero Section - with cinematic reveal + scroll parallax */}
      <div ref={heroRef} className="relative z-10 mx-auto max-w-6xl px-4 lg:px-8 min-h-[75vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-24">
          
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -80 }}
            animate={introComplete ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ x: heroLeftX, opacity: heroOpacity, willChange: 'transform, opacity' }}
          >
            {/* Greeting */}
            <div className="space-y-2">
              <motion.h2
                className="text-xl md:text-2xl font-semibold text-slate-600 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Hello <span className="inline-block animate-wave origin-bottom-right">👋</span>
              </motion.h2>
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
                  Fawwaz Raza
                </span>
              </motion.h1>
            </div>

            {/* Sub-headline */}
            <motion.div
              className="space-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-xl md:text-2xl font-semibold text-slate-700">
                Full Stack AI/ML Engineer | Software Engineer
              </p>
              <p className="text-sm md:text-base text-slate-600 max-w-xl font-medium">
                Building production-grade AI systems that scale.
              </p>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              className="flex gap-2 pt-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {socialMedia.map((data, index) => {
                const IconComponent = socialMediaIcons[data.icon];
                return (
                  <button
                    className="group relative flex items-center justify-center w-9 h-9 rounded-lg bg-white/80 backdrop-blur border border-slate-100 shadow-sm hover:shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                    key={index}
                    onClick={() => window.open(data.url)}
                    aria-label={data.socialMediaName}
                  >
                    <IconComponent className="text-base text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
                  </button>
                );
              })}
              <button
                className="group relative flex items-center justify-center w-9 h-9 rounded-lg bg-white/80 backdrop-blur border border-slate-100 shadow-sm hover:shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                onClick={() => window.location.href = 'mailto:fawwazraza2024@gmail.com'}
                aria-label="Email"
              >
                <FaEnvelope className="text-base text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
              </button>
              <button
                className="group relative flex items-center justify-center w-9 h-9 rounded-lg bg-white/80 backdrop-blur border border-slate-100 shadow-sm hover:shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                onClick={() => window.open('https://www.datacamp.com/portfolio/fawwazraza2024')}
                aria-label="DataCamp"
              >
                <img src={dataCampLogo} alt="DataCamp" className="w-5 h-5 object-contain grayscale" />
              </button>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-2 pt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            >
              <a
                href={UserData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-5 py-2.5 text-sm bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">View Resume</span>
              </a>
              <a
                href="mailto:fawwazraza2024@gmail.com"
                className="inline-flex items-center px-5 py-2.5 text-sm bg-white/80 backdrop-blur border border-slate-200 text-slate-700 font-semibold rounded-full hover:shadow-md hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Portrait */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={introComplete ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 80, scale: 0.95 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ x: heroRightX, opacity: heroOpacity, willChange: 'transform, opacity' }}
          >
            <motion.div
              className="relative group"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            >
              {/* Glass orb container */}
              <div className="relative overflow-hidden rounded-[1.5rem] p-1.5 bg-white/60 backdrop-blur border border-white/30 shadow-xl">
                <div className="relative overflow-hidden rounded-[1.3rem]">
                  <img
                    className="object-cover w-full h-auto max-w-[16rem] lg:max-w-[22rem] rounded-[1.5rem] transform transition-transform duration-700 group-hover:scale-105"
                    src={imagedeveloper}
                    alt="Fawwaz Raza - Software Engineer & AI/ML Engineer"
                    loading="lazy"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Subtle glow */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-blue-300/30 rounded-full filter blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-cyan-300/30 rounded-full filter blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          40%, 100% { transform: rotate(0deg); }
        }
        .animate-wave {
          animation: wave 2.5s ease-in-out infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Home;
