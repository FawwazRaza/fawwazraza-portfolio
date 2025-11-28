import React, { useState, useEffect } from "react";
import { UserData } from "../data/UserData";
import { skillsData } from "../data/SkillsData";
import { skillsImage } from "../utils/SkillsImage";
import AboutImage from "../Assets/images/AboutImage1.png";
import SkillsSummary from "../components/SkillsSummary";
import ExperienceTimeline from "../components/ExperienceTimeline";
import LinkCards from "../components/LinkCards";
import MediumBlogs from "../components/MediumBlogs";
import LinkedInPosts from "../components/LinkedInPosts";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const { about } = UserData;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="relative min-h-screen w-full py-8 lg:py-12">
        {/* Floating background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-20 right-10 w-48 h-48 bg-blue-300 dark:bg-gradient-to-br dark:from-cyan-500/25 dark:to-teal-500/20 rounded-full filter blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-cyan-300 dark:bg-gradient-to-br dark:from-teal-500/20 dark:to-cyan-500/25 rounded-full filter blur-3xl animate-float-delayed"></div>
        </div>

        <div className="relative z-10 mx-auto w-[95%] max-w-4xl">
          <div className={`glass-card rounded-2xl p-6 lg:p-10 flex flex-col items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              About Me
            </h2>
            <p className="font-poppins text-sm lg:text-base text-gray-700 dark:text-gray-200 leading-relaxed text-center max-w-2xl">
              {about}
            </p>
          </div>
        </div>
      </div>

      {/* Integrated Sections */}
      <SkillsSummary />

      {/* Links & Social Section */}
      <div className="relative w-full py-12 lg:py-16">
        <div className="relative z-10 mx-auto w-[92%] max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="font-poppins text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Links & Social
            </h2>
            <p className="font-poppins text-sm lg:text-base text-gray-600 dark:text-cyan-300">
              Connect with me across platforms
            </p>
          </div>

          {/* 3-column grid for Links, Medium, LinkedIn */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Links Column */}
            <div className="space-y-4">
              <h3 className="font-poppins text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </span>
                Resources
              </h3>
              <LinkCards limit={3} />
              <div className="mt-4">
                <a href="https://fawwazraza.github.io/fawwazraza-portfolio/#/links" className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-semibold hover:scale-105 transition-all text-gray-800 dark:text-white">
                  View All
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>

            {/* Medium Column */}
            <div className="space-y-4">
              <h3 className="font-poppins text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-800 to-black flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
                </span>
                Medium
              </h3>
              <MediumBlogs limit={3} />
              <div className="mt-4">
                <a href="https://medium.com/@fawwazraza2024" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-semibold hover:scale-105 transition-all text-gray-800 dark:text-white">
                  View All
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              </div>
            </div>

            {/* LinkedIn Column */}
            <div className="space-y-4">
              <h3 className="font-poppins text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </span>
                LinkedIn
              </h3>
              <LinkedInPosts limit={3} />
              <div className="mt-4">
                <a href="https://www.linkedin.com/in/fawwazraza" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-semibold hover:scale-105 transition-all text-gray-800 dark:text-white">
                  View All
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ExperienceTimeline />
    </>
  );
}

export default About;
