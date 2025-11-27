import { useEffect, useState } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import { Link } from "react-router-dom";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";
import { UserData } from "../data/UserData";
import logo from "../Assets/Fawwaz1.gif";

const Header = () => {
  const [isScrolling, setisScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const { resumeUrl } = UserData;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isCurrentScrolled = scrollTop > 0;
      setisScrolling(isCurrentScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    Events.scrollEvent.register("begin", function (to) {
      setActiveSection(to);
    });

    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 sm:px-4 lg:px-28 lg:pt-2
      ${isScrolling 
        ? "sticky backdrop-blur-xl bg-white/70 dark:bg-black/30 shadow-dark-depth border-b border-white/30 dark:border-white/5" 
        : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="cursor-pointer hover:scale-105 transition-transform duration-300">
          <img
            className="h-[80px] w-[90px] bg-cover bg-no-repeat rounded-lg"
            src={logo}
            alt="logo"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <div className="flex items-center gap-8">
            <ScrollLink
              activeClass="text-blue-600 dark:text-cyan-400 font-bold"
              spy={true}
              smooth={true}
              offset={-250}
              duration={500}
              to="Home-section"
              className="cursor-pointer text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium"
            >
              Home
            </ScrollLink>
            <ScrollLink
              activeClass="text-blue-600 dark:text-cyan-400 font-bold"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              to="About-section"
              className="cursor-pointer text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium"
            >
              About
            </ScrollLink>
            <ScrollLink
              activeClass="text-blue-600 dark:text-cyan-400 font-bold"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              to="Experience-section"
              className="cursor-pointer text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium"
            >
              Experience
            </ScrollLink>
            <Link 
              to="/projectlist" 
              className="cursor-pointer text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium"
            >
              Projects
            </Link>
            <Link 
              to="/links" 
              className="cursor-pointer text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium"
            >
              Links
            </Link>
            <ScrollLink
              activeClass="text-blue-600 dark:text-cyan-400 font-bold"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="Contact-section"
              className="cursor-pointer text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium"
            >
              Contact
            </ScrollLink>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full glass-card hover:scale-110 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <HiMoon className="text-xl text-gray-700" />
              ) : (
                <HiSun className="text-xl text-cyan-400" />
              )}
            </button>

            {/* Resume Button */}
            <button
              onClick={() => window.open(resumeUrl)}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-teal-500 text-white font-semibold hover:shadow-lg hover:scale-105 dark:hover:from-cyan-400 dark:hover:to-teal-400 transition-all duration-300"
            >
              Resume
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle & Theme Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full glass-card hover:scale-110 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <HiMoon className="text-xl text-gray-700" />
            ) : (
              <HiSun className="text-xl text-cyan-400" />
            )}
          </button>
          
          <button
            className="p-2 rounded-lg glass-card focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <CgClose className="text-2xl text-gray-800 dark:text-gray-100" />
            ) : (
              <CgMenuRight className="text-2xl text-gray-800 dark:text-gray-100" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden glass-card border-t border-white/20 dark:border-white/5 animate-slide-up">
          <div className="flex flex-col items-center space-y-4 py-6">
            <ScrollLink
              activeClass="text-blue-600 dark:text-cyan-400 font-bold"
              spy={true}
              smooth={true}
              offset={-250}
              duration={500}
              to="Home-section"
              onClick={toggleMobileMenu}
              className="cursor-pointer text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium text-lg"
            >
              Home
            </ScrollLink>
            <ScrollLink
              activeClass="text-blue-600 dark:text-cyan-400 font-bold"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              to="About-section"
              onClick={toggleMobileMenu}
              className="cursor-pointer text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium text-lg"
            >
              About
            </ScrollLink>
            <ScrollLink
              activeClass="text-blue-600 dark:text-cyan-400 font-bold"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              to="Experience-section"
              onClick={toggleMobileMenu}
              className="cursor-pointer text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium text-lg"
            >
              Experience
            </ScrollLink>
            <Link
              to="/projectlist"
              onClick={toggleMobileMenu}
              className="cursor-pointer text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium text-lg"
            >
              Projects
            </Link>
            <Link
              to="/links"
              onClick={toggleMobileMenu}
              className="cursor-pointer text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium text-lg"
            >
              Links
            </Link>
            <ScrollLink
              activeClass="text-blue-600 dark:text-cyan-400 font-bold"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="Contact-section"
              onClick={toggleMobileMenu}
              className="cursor-pointer text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium text-lg"
            >
              Contact
            </ScrollLink>
            <button
              onClick={() => window.open(resumeUrl)}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-teal-500 text-white font-semibold hover:shadow-lg dark:hover:shadow-glow-cyan transition-all duration-300"
            >
              Resume
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
