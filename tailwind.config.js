/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        dark: {
          base: '#0f0f12',      // Deep indigo-black base
          pure: '#0a0a0c',      // Pure black with depth
          surface: '#16161a',   // Elevated surface
          border: 'rgba(255, 255, 255, 0.05)', // Subtle borders
        },
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 10s ease-in-out infinite 1s',
        'float-slow': 'float 12s ease-in-out infinite 0.5s',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-20px) translateX(10px)' },
          '66%': { transform: 'translateY(10px) translateX(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(34, 211, 238, 0.3), 0 0 10px rgba(34, 211, 238, 0.2)' },
          '100%': { boxShadow: '0 0 15px rgba(34, 211, 238, 0.5), 0 0 25px rgba(34, 211, 238, 0.3)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 15px rgba(34, 211, 238, 0.3)',
        'glow-teal': '0 0 15px rgba(45, 212, 191, 0.3)',
        'dark-depth': '0 0 8px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
};
