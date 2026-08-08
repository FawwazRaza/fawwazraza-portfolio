import React, { useEffect } from "react";
import Header from "../components/Header";
import Home from "./Home";
import About from "./About";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ProjectCards from "../components/ProjectCards";
import Recommendations from "../components/Recommendations";
import Contact from "./Contact";
import Footer from "../components/Footer";
import { Element, scroller } from "react-scroll";
import { useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const { scrollTo } = location.state;
      // Scroll to the targeted section smoothly on render
      setTimeout(() => {
        scroller.scrollTo(scrollTo, {
          duration: 500,
          delay: 50,
          smooth: "easeInOutQuart",
          offset: -80,
        });
      }, 100);

      // Clean up the location state so it doesn't trigger scroll again on page reload
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="relative min-h-screen transition-colors duration-500">
      {/* Fixed Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="relative">
        <Element name="Home-section">
          <Home />
        </Element>

        <Element name="About-section">
          <About />
        </Element>

        <Element name="Experience-section" className="snap-beat">
          <ExperienceTimeline />
        </Element>

        <Element name="Project-section" className="snap-beat">
          <ProjectCards />
        </Element>

        <Element name="Recommendations-section" className="snap-beat">
          <Recommendations />
        </Element>

        <Element name="Contact-section">
          <Contact />
        </Element>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
