// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FAFBFC',
          100: '#F0F2F4',
          200: '#E2E5E9',
          300: '#C5CAD1',
          400: '#A7AFB9',
          500: '#151821',  // Refined dark base
          600: '#111419',
          700: '#0D1015',
          800: '#090B0F',
          900: '#050709',
        },
        accent: {
          50: '#FFF5F2',
          100: '#FFE9E5',
          200: '#FFD4CC',
          300: '#FFBFB3',
          400: '#FF9B8C',
          500: '#DC3D2B',  // Polished Mars red
          600: '#C83525',  // Sophisticated deep red
          700: '#B42E1F',  // Enhanced oxide red
          800: '#A02719',  // Refined crater red
          900: '#8C2013',  // Elegant shadow red
        },
        teal: {
          500: '#090C11',  // Refined dark background
          600: '#070A0E',
          700: '#05080B',
          800: '#030508',
          900: '#020304',
        },
        mars: {           
          rust: '#DD4B39',     // Sophisticated rust
          sand: '#E86D5C',     // Refined surface tone
          shadow: '#B8352A',   // Enhanced shadow
          dust: '#F24333',     // Professional dust tone
          night: '#0C0E12'     // Refined night shade
        },
        surface: {
          light: '#1C202A',    // Refined top surface
          default: '#151821',  // Enhanced main surface
          dark: '#0F1218',     // Polished dark surface
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(180deg, var(--tw-gradient-stops))',
        'gradient-mars': 'linear-gradient(to bottom, var(--surface-light), var(--surface-dark))',
      },
      // Adding subtle transitions
      transitionTimingFunction: {
        'mars': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      // Enhanced shadows for depth
      boxShadow: {
        'mars': '0 4px 6px -1px rgba(220, 61, 43, 0.1), 0 2px 4px -1px rgba(220, 61, 43, 0.06)',
        'mars-lg': '0 10px 15px -3px rgba(220, 61, 43, 0.1), 0 4px 6px -2px rgba(220, 61, 43, 0.05)',
      },
    },
  },
  plugins: [],
};