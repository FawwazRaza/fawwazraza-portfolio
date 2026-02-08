import React, { useState, useEffect } from "react";
import { UserData } from "../data/UserData";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";
import mediumLogo from "../Assets/logos/medium.png";
import dataCampLogo from "../Assets/logos/datacamp.png";

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
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-200 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-200 rounded-full filter blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <div 
          className={`bg-white/80 backdrop-blur-xl border border-slate-100 shadow-lg rounded-3xl p-8 lg:p-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Header with icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-50 rounded-2xl">
              <HiSparkles className="text-5xl text-blue-600 animate-pulse" />
            </div>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Let's Collaborate
          </h2>

          {/* Description */}
          <p className="font-poppins text-base lg:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ready to innovate? I'm always eager to discuss new projects, creative 
            ideas, or potential collaborations. My inbox is open for opportunities 
            that could shape the future of technology.
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <button
              onClick={() => window.open(ensureAbsoluteUrl(FooterLink), '_blank', 'noopener,noreferrer')}
              className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <span className="text-lg">Partner Up!</span>
              <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🤝</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 text-sm text-slate-500 bg-white/80 rounded-full">
                Connect with me
              </span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-wrap gap-4 justify-center">
            {socialMedia.map((data, index) => {
              const isMedium = data.socialMediaName === 'Medium' || data.icon === 'AiFillCode';
              const IconComponent = socialMediaIcons[data.icon];
              return (
                <button
                  className="group relative flex items-center justify-center w-14 h-14 rounded-xl bg-white/80 border border-slate-100 shadow-sm hover:shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                  key={index}
                  onClick={() => window.open(data.url)}
                  aria-label={data.socialMediaName}
                >
                  {isMedium ? (
                    <img src={mediumLogo} alt="Medium" className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300" />
                  ) : IconComponent ? (
                    <IconComponent className="text-2xl text-slate-700 group-hover:text-blue-600 transition-colors duration-300" />
                  ) : null}
                </button>
              );
            })}
            <button
              className="group relative flex items-center justify-center w-14 h-14 rounded-xl bg-white/80 border border-slate-100 shadow-sm hover:shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              onClick={() => window.location.href = 'mailto:fawwazraza2024@gmail.com'}
              aria-label="Email"
            >
              <MdEmail className="text-2xl text-slate-700 group-hover:text-blue-600 transition-colors duration-300" />
            </button>
            <button
              className="group relative flex items-center justify-center w-14 h-14 rounded-xl bg-white/80 border border-slate-100 shadow-sm hover:shadow-md hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              onClick={() => window.open('https://www.datacamp.com/portfolio/fawwazraza2024')}
              aria-label="DataCamp"
            >
              <img src={dataCampLogo} alt="DataCamp" className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
            </button>
          </div>

          {/* Email address display */}
          <p className="mt-8 text-sm text-slate-600 font-poppins">
            Or drop me an email at{" "}
            <a 
              href="mailto:fawwazraza2024@gmail.com"
              className="text-blue-600 hover:underline font-semibold"
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
