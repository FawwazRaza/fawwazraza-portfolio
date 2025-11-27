import React from "react";
import { UserData } from "../data/UserData";
import { HiHeart } from "react-icons/hi";

function Footer() {
  const currentYear = new Date().getFullYear();
  const { FooterLink } = UserData;

  const handleClick = (e) => {
    e.preventDefault();
    window.open(ensureAbsoluteUrl(FooterLink), '_blank', 'noopener,noreferrer');
  };

  const ensureAbsoluteUrl = (url) => {
    if (!/^https?:\/\//i.test(url)) {
      return `https://${url}`;
    }
    return url;
  };

  return (
    <footer className="relative py-8 mt-20">
      {/* Glassmorphic separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-cyan-500/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          {/* Copyright text */}
          <div className="flex items-center gap-2 font-poppins text-sm text-gray-600 dark:text-gray-300">
            <span>© {currentYear}</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Designed & Built by </span>
          </div>
          
          {/* Name link */}
          <a
            href={ensureAbsoluteUrl(FooterLink)}
            className="group relative font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-teal-400 hover:scale-105 transition-transform duration-300"
            onClick={handleClick}
            rel="noopener noreferrer"
          >
            Fawwaz Raza
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-teal-400 group-hover:w-full transition-all duration-300"></span>
          </a>

          {/* Mobile-only copyright */}
          <div className="sm:hidden font-poppins text-xs text-gray-500 dark:text-gray-300 text-center">
            Designed & Built with <HiHeart className="inline text-pink-500 animate-pulse" /> by Fawwaz
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
