import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Preloader from "../src/components/Pre";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import ArchiveProjects from "./pages/ArchiveProjects";
import LinksAndBlogs from "./pages/LinksAndBlogs";
import NotFound from "./pages/NotFound";
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
      {/* ORIGINAL light theme background + REFINED dark theme with deeper blacks */}
      <div className="App min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20 dark:bg-[#0a0a0c] transition-all duration-500">
        {/* Ambient dark glow effects - ONLY in dark mode with subtle inner glow */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-0 dark:opacity-100 transition-opacity duration-500">
          <div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/12 rounded-full blur-3xl animate-float"
            style={{ boxShadow: '0 0 100px rgba(6, 182, 212, 0.15)' }}
          ></div>
          <div 
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/12 rounded-full blur-3xl animate-float-delayed"
            style={{ boxShadow: '0 0 100px rgba(20, 184, 166, 0.15)' }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-float-slow"
            style={{ boxShadow: '0 0 80px rgba(139, 92, 246, 0.1)' }}
          ></div>
        </div>
        
        <Router>
          <Preloader load={load} />
          <div className="App relative z-10" id={load ? "no-scroll" : "scroll"}>
            <ScrollToTopOnRouteChange />
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/about" element={<About />} />
              <Route path="/projectlist" element={<ArchiveProjects />} />
              <Route path="/links" element={<LinksAndBlogs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
