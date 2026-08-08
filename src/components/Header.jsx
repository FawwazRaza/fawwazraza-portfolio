import React, { useEffect, useState } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { UserData } from "../data/UserData";
import logo from "../Assets/Fawwaz1.gif";

const Header = () => {
  const [isScrolling, setisScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const { resumeUrl } = UserData;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const renderScrollLink = (toSection, label, isMobile = false) => {
    const className = isMobile
      ? "cursor-pointer text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium text-lg"
      : "cursor-pointer text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium";

    if (location.pathname === "/") {
      return (
        <ScrollLink
          activeClass="text-blue-600 font-bold"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          to={toSection}
          onClick={isMobile ? toggleMobileMenu : undefined}
          className={className}
        >
          {label}
        </ScrollLink>
      );
    } else {
      return (
        <Link
          to="/"
          state={{ scrollTo: toSection }}
          onClick={isMobile ? toggleMobileMenu : undefined}
          className={className}
        >
          {label}
        </Link>
      );
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isCurrentScrolled = scrollTop > 0;
      setisScrolling(isCurrentScrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    Events.scrollEvent.register("begin", function (to) {
      setActiveSection(to);
    });

    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300
      ${isScrolling 
        ? "sticky backdrop-blur-xl bg-white/90 shadow-sm border-b border-slate-100/80" 
        : "bg-white/80 backdrop-blur-md border-b border-slate-100/50"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        {/* Logo */}
        <ScrollLink
          to="Home-section"
          smooth={true}
          duration={500}
          offset={-100}
          className="cursor-pointer hover:scale-105 transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-lg"
          aria-label="Back to top"
        >
          <img
            className="h-10 sm:h-12 w-auto object-contain rounded-md"
            src={logo}
            alt="Fawwaz Raza"
            loading="lazy"
            decoding="async"
          />
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <div className="flex items-center gap-8">
            {renderScrollLink("Home-section", "Home")}
            {renderScrollLink("About-section", "About")}
            {renderScrollLink("Experience-section", "Experience")}
            {renderScrollLink("Project-section", "Projects")}
            <Link 
              to="/certifications" 
              className="cursor-pointer text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium"
            >
              Certifications
            </Link>
            {renderScrollLink("Recommendations-section", "Recommendations")}
            <Link 
              to="/links" 
              className="cursor-pointer text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium"
            >
              Links
            </Link>
            {renderScrollLink("Contact-section", "Contact")}

            {/* Resume Button */}
            <button
              onClick={() => window.open(resumeUrl)}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Resume
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            className="p-2 rounded-lg bg-white/80 backdrop-blur border border-slate-100 shadow-sm focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <CgClose className="text-2xl text-slate-700" />
            ) : (
              <CgMenuRight className="text-2xl text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 animate-slide-up">
          <div className="flex flex-col items-center space-y-4 py-6">
            {renderScrollLink("Home-section", "Home", true)}
            {renderScrollLink("About-section", "About", true)}
            {renderScrollLink("Experience-section", "Experience", true)}
            {renderScrollLink("Project-section", "Projects", true)}
            <Link
              to="/certifications"
              onClick={toggleMobileMenu}
              className="cursor-pointer text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium text-lg"
            >
              Certifications
            </Link>
            {renderScrollLink("Recommendations-section", "Recommendations", true)}
            <Link
              to="/links"
              onClick={toggleMobileMenu}
              className="cursor-pointer text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium text-lg"
            >
              Links
            </Link>
            {renderScrollLink("Contact-section", "Contact", true)}
            <button
              onClick={() => window.open(resumeUrl)}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-lg transition-all duration-300"
            >
              Resume
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default React.memo(Header);
