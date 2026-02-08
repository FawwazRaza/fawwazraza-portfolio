import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = React.memo(function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide on home page and pages that have their own back buttons
  const shouldHide = 
    location.pathname === '/' || 
    location.pathname === '' ||
    location.pathname.startsWith('/projects/') ||
    location.pathname.startsWith('/experience/') ||
    location.pathname === '/projectlist';

  return (
    <AnimatePresence>
      {!shouldHide && (
        <motion.button
          onClick={() => navigate('/')}
          className="fixed top-24 left-4 z-40 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 shadow-md text-slate-600 hover:text-blue-600 hover:shadow-lg hover:scale-110 transition-all duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          aria-label="Back to home"
          style={{ willChange: 'transform' }}
        >
          <FaArrowLeft className="text-sm" />
        </motion.button>
      )}
    </AnimatePresence>
  );
});

export default BackButton;
