import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Project() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full py-12 lg:py-20">
      {/* Floating background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-40 left-10 w-64 h-64 bg-purple-300 dark:bg-gradient-to-br dark:from-purple-500/25 dark:to-pink-500/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-pink-300 dark:bg-gradient-to-br dark:from-pink-500/20 dark:to-purple-500/25 rounded-full filter blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="font-poppins text-lg text-gray-600 dark:text-cyan-300 max-w-2xl mx-auto">
            Showcasing my best work in software development, AI, and web technologies
          </p>
        </div>

        {/* Projects Grid - 2 columns max */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 max-w-6xl mx-auto">
          <Cards />
        </div>

        {/* View All Projects Link */}
        <div 
          className={`flex justify-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            onClick={() => navigate("/projectlist")}
            className="group flex items-center gap-3 px-8 py-4 glass-card rounded-2xl hover:scale-105 transition-all duration-300"
          >
            <span className="font-poppins text-lg font-semibold text-gray-900 dark:text-gray-100">
              View Full Project Archive
            </span>
            <FaArrowRight className="text-blue-600 dark:text-cyan-400 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
