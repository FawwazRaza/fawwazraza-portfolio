import React, { useEffect, useState } from "react";
import { UserData } from "../data/UserData";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillCode,
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import imagedeveloper from "../Assets/images/fawwaz_2.png";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const socialMedia = UserData.socialMedia;

  // Trigger animations on component mount and handle scroll
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialMediaIcons = {
    AiFillGithub: AiFillGithub,
    FaLinkedinIn: FaLinkedinIn,
    AiOutlineTwitter: AiOutlineTwitter,
    AiFillCode: AiFillCode,
    FaEnvelope: FaEnvelope,
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* Animated gradient background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-cyan-200/30 dark:from-cyan-500/20 dark:to-teal-500/15 rounded-full filter blur-3xl opacity-80 animate-float"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute top-1/3 -right-20 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-blue-200/40 dark:from-teal-500/15 dark:to-cyan-500/20 rounded-full filter blur-3xl opacity-70 animate-float-delayed"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-slate-200/40 to-gray-200/30 dark:from-purple-500/10 dark:to-cyan-500/15 rounded-full filter blur-3xl opacity-60 animate-float-slow"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        ></div>
      </div>

      {/* Floating decorative glass elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-32 left-[10%] w-16 h-16 bg-white/40 dark:bg-black/20 backdrop-blur-sm rounded-2xl rotate-12 animate-float-slow shadow-dark-depth border border-white/20 dark:border-white/5"></div>
        <div className="absolute top-48 right-[15%] w-20 h-20 bg-white/30 dark:bg-black/15 backdrop-blur-sm rounded-3xl -rotate-6 animate-float-delayed shadow-dark-depth border border-white/20 dark:border-white/5"></div>
        <div className="absolute bottom-40 left-[20%] w-12 h-12 bg-white/50 dark:bg-black/25 backdrop-blur-sm rounded-xl rotate-45 animate-float shadow-dark-depth border border-white/20 dark:border-white/5"></div>
        <div className="absolute bottom-32 right-[25%] w-14 h-14 bg-white/35 dark:bg-black/18 backdrop-blur-sm rounded-2xl -rotate-12 animate-float-slow shadow-dark-depth border border-white/20 dark:border-white/5"></div>
      </div>

      {/* Main Hero Section */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-8 min-h-[75vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-24">
          
          {/* Left Column - Text Content */}
          <div 
            className={`space-y-4 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Greeting with wave animation */}
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-100 tracking-tight">
                Hello <span className="inline-block animate-wave origin-bottom-right">👋</span>
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 dark:from-cyan-400 dark:via-teal-400 dark:to-cyan-300 animate-glow">
                  Fawwaz Raza
                </span>
              </h1>
            </div>

            {/* Sub-headline */}
            <div className="space-y-1">
              <p className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-50">
                AI & ML Engineer | Software Engineer
              </p>
              <p className="text-sm md:text-base text-gray-600 dark:text-cyan-300 max-w-xl font-medium">
                Building intelligent systems that scale.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-2 pt-1">
              {socialMedia.map((data, index) => {
                const IconComponent = socialMediaIcons[data.icon];
                return (
                  <button
                    className="group relative flex items-center justify-center w-9 h-9 rounded-lg glass-card hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                    key={index}
                    onClick={() => window.open(data.url)}
                    aria-label={data.socialMediaName}
                  >
                    <IconComponent className="text-base text-gray-700 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400/0 to-cyan-400/0 dark:from-cyan-400/0 dark:to-teal-400/0 group-hover:from-blue-400/20 group-hover:to-cyan-400/20 dark:group-hover:from-cyan-400/20 dark:group-hover:to-teal-400/20 transition-all duration-300"></div>
                  </button>
                );
              })}
              <button
                className="group relative flex items-center justify-center w-9 h-9 rounded-lg glass-card hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                onClick={() => window.location.href = 'mailto:fawwazraza2024@gmail.com'}
                aria-label="Email"
              >
                <FaEnvelope className="text-base text-gray-700 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400/0 to-cyan-400/0 dark:from-cyan-400/0 dark:to-teal-400/0 group-hover:from-blue-400/20 group-hover:to-cyan-400/20 dark:group-hover:from-cyan-400/20 dark:group-hover:to-teal-400/20 transition-all duration-300"></div>
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={UserData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-teal-500 text-white font-semibold rounded-full hover:shadow-lg dark:hover:shadow-glow-cyan hover:from-blue-500 hover:to-cyan-500 dark:hover:from-cyan-400 dark:hover:to-teal-400 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">View Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-teal-500 dark:to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="mailto:fawwazraza2024@gmail.com"
                className="inline-flex items-center px-4 py-2 text-sm glass-card text-gray-900 dark:text-gray-100 font-semibold rounded-full hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Column - Portrait in floating glass orb */}
          <div 
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative group">
              {/* Glass orb container */}
              <div 
                className="relative overflow-hidden rounded-[1.5rem] p-1.5 animate-float-slow glass-card"
              >
                <div className="relative overflow-hidden rounded-[1.3rem]">
                  <img
                    className="object-cover w-full h-auto max-w-[16rem] lg:max-w-[22rem] rounded-[1.5rem] transform transition-transform duration-700 group-hover:scale-105"
                    src={imagedeveloper}
                    alt="Fawwaz Raza - AI & Machine Learning Engineer"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 dark:from-cyan-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Floating glow elements - only visible in dark mode */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-cyan-400/40 to-teal-400/30 rounded-full filter blur-2xl opacity-0 dark:opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-gradient-to-br from-teal-400/30 to-cyan-400/40 rounded-full filter blur-2xl opacity-0 dark:opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div 
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="flex flex-col items-center gap-1 animate-bounce-slow cursor-pointer group">
          <p className="text-xs text-gray-500 dark:text-cyan-300 font-medium group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">Scroll to explore</p>
          <HiChevronDown className="text-xl text-gray-400 dark:text-cyan-400 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors" />
        </div>
      </div>

      {/* Custom animations */}
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

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 10s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-float-slow {
          animation: float 12s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.8; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        /* Ensure backdrop-filter is supported */
        @supports (backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px)) {
          .backdrop-blur-md {
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }
          .backdrop-blur-sm {
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
