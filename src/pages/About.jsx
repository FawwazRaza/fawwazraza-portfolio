import React from "react";
import { motion } from "framer-motion";
import SkillsSection from "../components/SkillsSection";
import ExperienceTimeline from "../components/ExperienceTimeline";
import LinkCards from "../components/LinkCards";
import MediumBlogs from "../components/MediumBlogs";
import LinkedInPosts from "../components/LinkedInPosts";
import mediumLogo from "../Assets/logos/medium.png";

function About() {
  return (
    <>
      {/* About Me Section */}
      <section className="relative min-h-screen w-full py-12 lg:py-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-20 right-10 w-48 h-48 bg-blue-200 rounded-full filter blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-cyan-200 rounded-full filter blur-3xl animate-float-delayed" />
        </div>

        <div className="relative z-10 mx-auto w-[92%] max-w-4xl">
          <motion.div
            className="rounded-2xl bg-white/80 backdrop-blur border border-slate-100 shadow-sm p-6 lg:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6 text-center font-poppins">
              About Me
            </h2>

            <div className="font-poppins text-sm lg:text-base text-slate-700 leading-relaxed space-y-5 max-w-3xl mx-auto">
              <p>
                I am a Software Engineer and a fresh graduate from FAST NUCES. I have spent my time in university and internships learning how to build software that is fast, clean, and reliable. I enjoy the logic behind a project, figuring out the best way to move data or the most efficient way to solve a problem.
              </p>

              <p>
                I am deeply interested in algorithms and optimization. I don't just want my code to work; I want it to be efficient. For example, when working on a voice AI project, I focused on fine-tuning a small 30MB model so it could run instantly on a phone without needing the internet. I enjoy looking at a task and finding a way to make it run faster or use less memory.
              </p>

              <p>
                I believe that the best software comes from a solid team effort. In my work at different companies, I regularly worked alongside other developers to make sure the backend, frontend, and AI parts all fit together perfectly. I make sure to write clean code and use clear REST API headers so that my teammates can easily integrate their work with mine.
              </p>

              <p>
                Even as a fresh grad, I have worked on projects that handle real-world stress. I have built parts of large systems, like a multi-tenant school platform and automated business tools that connect to Workday. Whether I am working on a 4-layer backend or a simple search tool, I follow professional design patterns to keep the code easy to maintain.
              </p>

              <p>
                <span className="font-semibold text-slate-800">Goal:</span> To join a top-tier team where I can use my skills in algorithms and system design to build high-quality products.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <SkillsSection />

      {/* Links & Social Section */}
      <section className="relative w-full py-12 lg:py-16">
        <div className="relative z-10 mx-auto w-[92%] max-w-7xl">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins text-2xl lg:text-3xl font-bold text-slate-800 mb-3">
              Links & Social
            </h2>
            <p className="font-poppins text-sm lg:text-base text-slate-500">
              Connect with me across platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Resources */}
            <div className="space-y-4">
              <h3 className="font-poppins text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </span>
                Resources
              </h3>
              <LinkCards limit={3} />
              <div className="mt-4">
                <a href="https://fawwazraza.github.io/fawwazraza-portfolio/#/links" className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur border border-slate-200 rounded-full text-sm font-semibold hover:shadow-md hover:scale-105 transition-all text-slate-700">
                  View All
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>

            {/* Medium */}
            <div className="space-y-4">
              <h3 className="font-poppins text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center overflow-hidden p-1">
                  <img src={mediumLogo} alt="Medium" className="w-5 h-5 object-contain invert" />
                </span>
                Medium
              </h3>
              <MediumBlogs limit={3} />
              <div className="mt-4">
                <a href="https://medium.com/@fawwazraza2024" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur border border-slate-200 rounded-full text-sm font-semibold hover:shadow-md hover:scale-105 transition-all text-slate-700">
                  View All
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="space-y-4">
              <h3 className="font-poppins text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </span>
                LinkedIn
              </h3>
              <LinkedInPosts limit={3} />
              <div className="mt-4">
                <a href="https://www.linkedin.com/in/fawwazraza" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur border border-slate-200 rounded-full text-sm font-semibold hover:shadow-md hover:scale-105 transition-all text-slate-700">
                  View All
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExperienceTimeline />
    </>
  );
}

export default About;