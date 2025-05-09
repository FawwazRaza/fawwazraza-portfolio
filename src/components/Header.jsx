import { useEffect, useState } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { UserData } from "../data/UserData";
import logo from "../Assets/Fawwaz1.gif";

const Header = () => {
  const [isScrolling, setisScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      className={`fixed top-0 z-50 flex w-full items-center justify-between text-base transition-all sm:px-4 lg:px-28 lg:pt-2
      ${isScrolling ? "sticky" : ""}`}
    >
      <div className="cursor-none">
        <img
          className="h-[80px] w-[90px] bg-cover bg-no-repeat"
          src={logo}
          alt="logo"
        />
      </div>
      <nav className="hidden lg:block">
        <div className="cursor-pointer items-center space-x-4 sm:flex sm:flex-col sm:gap-4 lg:flex lg:flex-row lg:gap-6">
          <ScrollLink
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-250}
            duration={500}
            to="Home-section"
          >
            <p
              className={
                activeSection === "Home-section"
                  ? "active"
                  : "text-black hover:text-green-500 hover:text-xl hover:font-bold"
              }
            >
              Home
            </p>
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            to="About-section"
          >
            <p
              className={
                activeSection === "About-section"
                  ? "active"
                  : "text-black hover:text-blue-500 hover:text-xl hover:font-bold"
              }
            >
              About
            </p>
          </ScrollLink>
          <Link to="/projectlist" className="text-black hover:text-yellow-400 hover:text-xl hover:font-bold">
            Projects
          </Link>
          <ScrollLink
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="Contact-section"
          >
            <p
              className={
                activeSection === "Contact-section"
                  ? "active"
                  : "text-black hover:text-red-500 hover:text-xl hover:font-bold"
              }
            >
              Contact
            </p>
          </ScrollLink>
          <div>
            <button
              onClick={() => {
                window.open(resumeUrl);
              }}
              className="button-UI w-[120px] rounded-lg px-4 py-1.5 font-bold tracking-wider text-gray-900 shadow-xl hover:text-white"
            >
              Resume
            </button>
          </div>
        </div>
      </nav>
      <div className="block lg:hidden">
        {" "}
        {/* Show on small screens */}
        <button
          className="mr-5 block   focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <CgMenuRight size={32} />
        </button>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="absolute left-0 top-full block w-full lg:hidden">
          <div
            className={`navbar-bg flex flex-col items-center space-y-4 py-4`}
          >
            <ScrollLink
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-250}
              duration={500}
              to="Home-section"
            >
              <p
                className={
                  activeSection === "Home-section"
                    ? "active"
                    : "text-green-500 text-xl font-bold"
                }
                onClick={toggleMobileMenu}
              >
                Home
              </p>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              to="About-section"
            >
              <p
                className={
                  activeSection === "About-section"
                    ? "active"
                    : "text-blue-500 text-xl font-bold "
                }
                onClick={toggleMobileMenu}
              >
                About
              </p>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              to="Project-section"
            >
              <p
                className={
                  activeSection === "Project-section"
                    ? "active"
                    : "text-yellow-400 text-xl font-bold "
                }
                onClick={toggleMobileMenu}
              >
                Projects
              </p>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="Contact-section"
            >
              <p
                className={
                  activeSection === "Contact-section"
                    ? "active"
                    : "text-red-500 text-xl font-bold "
                }
                onClick={toggleMobileMenu}
              >
                Contact
              </p>
            </ScrollLink>
            <div>
              <button
                onClick={() => {
                  window.open(resumeUrl);
                }}
                className="button-UI w-[120px] rounded-lg px-4 py-1.5 font-bold tracking-wider text-gray-900 shadow-xl "
              >
                Resume
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
