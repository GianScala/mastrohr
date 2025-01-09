// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5F6F7',   // Lightest shade for contrast text
          100: '#E6E8EA',  // Light backgrounds
          200: '#C8CCD0',  // Subtle borders
          300: '#A4ABB3',  // Disabled states
          400: '#808891',  // Secondary text
          500: '#1A1D21',  // Main primary - sophisticated dark
          600: '#15171A',  // Hover states
          700: '#111214',  // Active states
          800: '#0C0D0E',  // Deep backgrounds
          900: '#070808',  // Darkest shade
        },
        accent: {
          50: '#FFF7F0',   // Light orange hints
          100: '#FFEAD9',  // Subtle backgrounds
          200: '#FFD5B3',  // Highlights
          300: '#FFB980',  // Secondary elements
          400: '#FF9D4D',  // Supporting elements
          500: '#FF8019',  // Main accent - professional orange
          600: '#E66B00',  // Hover states
          700: '#CC5F00',  // Active states
          800: '#A64D00',  // Dark accents
          900: '#803C00',  // Deep accents
        },
        dark: {           // Core dark theme colors
          50: '#202225',  // Lightest dark
          100: '#1B1D1F', // Card backgrounds
          200: '#161719', // Borders
          300: '#111214', // Secondary backgrounds
          400: '#0C0D0E', // Active states
          500: '#070808', // Main dark
          600: '#050506', // Deeper elements
          700: '#030303', // Very deep elements
          800: '#020202', // Nearly black
          900: '#000000', // Pure black
        },
        // Additional professional dark theme colors
        surface: {
          light: '#2A2D31',    // Top-level surfaces
          default: '#1F2124',  // Main surface
          dark: '#18191C',     // Sunken surfaces
        },
        divider: {
          light: 'rgba(255, 255, 255, 0.08)',  // Subtle dividers
          strong: 'rgba(255, 255, 255, 0.12)', // Stronger dividers
        },
        text: {
          primary: 'rgba(255, 255, 255, 0.95)',   // Primary text
          secondary: 'rgba(255, 255, 255, 0.65)', // Secondary text
          disabled: 'rgba(255, 255, 255, 0.38)',  // Disabled text
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};