import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { IntroProvider } from "./context/IntroContext";
import Preloader from "../src/components/Pre";
import Layout from "./pages/Layout";
import ArchiveProjects from "./pages/ArchiveProjects";
import LinksAndBlogs from "./pages/LinksAndBlogs";
import ProjectDetail from "./pages/ProjectDetail";
import ExperienceDetail from "./pages/ExperienceDetail";
import NotFound from "./pages/NotFound";
import Certifications from "./pages/Certifications";
import BackButton from "./components/BackButton";
import IntroOverlay from "./components/IntroOverlay";
import "./App.css";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <IntroProvider>
        <AppContent load={load} />
      </IntroProvider>
    </ThemeProvider>
  );
}

function AppContent({ load }) {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white transition-colors duration-300">
      <IntroOverlay />
      <Router>
          <Preloader load={load} />
          <div className="App relative z-10" id={load ? "no-scroll" : "scroll"}>
            <ScrollToTopOnRouteChange />
            <BackButton />
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/projectlist" element={<ArchiveProjects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/experience/:id" element={<ExperienceDetail />} />
              <Route path="/links" element={<LinksAndBlogs />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </div>
  );
}

export default App;
