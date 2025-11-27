import { useState, useEffect } from 'react';
import LinkCards from '../components/LinkCards';
import MediumBlogs from '../components/MediumBlogs';
import LinkedInPosts from '../components/LinkedInPosts';

function LinksAndBlogs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="relative min-h-screen w-full py-20 lg:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-300/30 to-blue-300/20 dark:from-cyan-500/20 dark:to-blue-500/15 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-300/30 to-pink-300/20 dark:from-purple-500/20 dark:to-pink-500/15 rounded-full filter blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-[1800px]">
        {/* Page Header */}
        {/* <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h1 className="font-poppins text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Links & Content
          </h1>
          <p className="font-poppins text-lg text-gray-600 dark:text-cyan-300 max-w-3xl mx-auto">
            Explore my links, technical articles, and LinkedIn insights on AI, software development, and tech trends
          </p>
        </div> */}

        {/* Links Section */}
        {/* <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <LinkCards />
        </div> */}

        {/* Divider */}
        <hr className="border-gray-300 dark:border-gray-700 my-20" />

        {/* Medium Blogs Section */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <MediumBlogs />
        </div>

        {/* Divider */}
        <hr className="border-gray-300 dark:border-gray-700 my-20" />

        {/* LinkedIn Posts Section */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <LinkedInPosts />
        </div>
      </div>
    </div>
  );
}

export default LinksAndBlogs;
