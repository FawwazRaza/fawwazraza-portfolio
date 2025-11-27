import React, { useState, useEffect } from "react";
import { UserData } from "../data/UserData";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillCode,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const { FooterLink, socialMedia } = UserData;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialMediaIcons = {
    AiFillGithub: AiFillGithub,
    FaLinkedinIn: FaLinkedinIn,
    AiOutlineTwitter: AiOutlineTwitter,
    AiFillCode: AiFillCode,
  };

  const ensureAbsoluteUrl = (url) => {
    if (!/^https?:\/\//i.test(url)) {
      return `https://${url}`;
    }
    return url;
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center py-20">
      {/* Floating background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-300 dark:bg-gradient-to-br dark:from-violet-500/25 dark:to-fuchsia-500/20 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-300 dark:bg-gradient-to-br dark:from-fuchsia-500/20 dark:to-violet-500/25 rounded-full filter blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <div 
          className={`glass-card rounded-3xl p-8 lg:p-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Header with icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 glass rounded-2xl">
              <HiSparkles className="text-5xl text-blue-600 dark:text-cyan-400 animate-pulse" />
            </div>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Collaborate
          </h2>

          {/* Description */}
          <p className="font-poppins text-base lg:text-lg text-gray-700 dark:text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ready to innovate? I'm always eager to discuss new projects, creative 
            ideas, or potential collaborations. My inbox is open for opportunities 
            that could shape the future of technology.
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <button
              onClick={() => window.open(ensureAbsoluteUrl(FooterLink), '_blank', 'noopener,noreferrer')}
              className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-teal-500 text-white font-semibold rounded-full hover:shadow-lg dark:hover:shadow-glow-cyan hover:scale-105 hover:from-blue-500 hover:to-cyan-500 dark:hover:from-cyan-400 dark:hover:to-teal-400 transition-all duration-300"
            >
              <span className="text-lg">Partner Up!</span>
              <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🤝</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-white/10"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 text-sm text-gray-600 dark:text-cyan-300 glass-card rounded-full">
                Connect with me
              </span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-wrap gap-4 justify-center">
            {socialMedia.map((data, index) => {
              const IconComponent = socialMediaIcons[data.icon];
              return (
                <button
                  className="group relative flex items-center justify-center w-14 h-14 rounded-xl glass-card hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                  key={index}
                  onClick={() => window.open(data.url)}
                  aria-label={data.socialMediaName}
                >
                  <IconComponent className="text-2xl text-gray-700 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/0 to-cyan-400/0 dark:from-cyan-400/0 dark:to-teal-400/0 group-hover:from-blue-400/20 group-hover:to-cyan-400/20 dark:group-hover:from-cyan-400/20 dark:group-hover:to-teal-400/20 transition-all duration-300"></div>
                </button>
              );
            })}
            <button
              className="group relative flex items-center justify-center w-14 h-14 rounded-xl glass-card hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              onClick={() => window.location.href = 'mailto:fawwazraza2024@gmail.com'}
              aria-label="Email"
            >
              <MdEmail className="text-2xl text-gray-700 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/0 to-cyan-400/0 dark:from-cyan-400/0 dark:to-teal-400/0 group-hover:from-blue-400/20 group-hover:to-cyan-400/20 dark:group-hover:from-cyan-400/20 dark:group-hover:to-teal-400/20 transition-all duration-300"></div>
            </button>
          </div>

          {/* Email address display */}
          <p className="mt-8 text-sm text-gray-600 dark:text-gray-300 font-poppins">
            Or drop me an email at{" "}
            <a 
              href="mailto:fawwazraza2024@gmail.com"
              className="text-blue-600 dark:text-cyan-400 hover:underline font-semibold"
            >
              fawwazraza2024@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
