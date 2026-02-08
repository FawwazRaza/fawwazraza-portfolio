import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntro } from '../context/IntroContext';

const IntroOverlay = React.memo(function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  const { setIntroComplete } = useIntro();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1800);
    
    const completeTimer = setTimeout(() => {
      setIntroComplete(true);
    }, 2500); // 1800 + 700 for animation

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [setIntroComplete]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0f172a 100%)',
            willChange: 'transform',
          }}
          initial={{ y: 0, opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Subtle gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.p
              className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-blue-400/80 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Get Ready
            </motion.p>
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight font-poppins"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Fawwaz Raza
            </motion.h1>
            <motion.div
              className="mt-4 w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            />
            <motion.p
              className="mt-3 text-sm text-slate-400 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
            >
              Portfolio
            </motion.p>
          </div>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-slate-700 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default IntroOverlay;
