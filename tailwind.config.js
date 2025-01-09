// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EFEF',
          100: '#D1E3E3',
          200: '#A3C7C7',
          300: '#75ABAB',
          400: '#478F8F',
          500: '#0D2A32',  // Main dark teal - deeper and more sophisticated
          600: '#0A2128',  // Darker variation for depth
          700: '#07181E',  // Even darker for layering
          800: '#051114',  // Very dark for contrasts
          900: '#02080A',  // Deepest shade for maximum contrast
        },
        accent: {
          50: '#FFF6E5',
          100: '#FFEDCC',
          200: '#FFDB99',
          300: '#FFC966',
          400: '#FFB733',
          500: '#FF9500',  // Refined orange - more premium feel
          600: '#CC7700',  // Darker orange for hover states
          700: '#995A00',
          800: '#663C00',
          900: '#331E00',
        },
        background: {
          default: '#081519',    // Main background - deeper and richer
          surface: '#0A1D23',    // Card backgrounds
          elevated: '#0C2429',   // Elevated elements
          highlight: '#0E2B31',  // Highlighted sections
        },
        overlay: {
          light: 'rgba(13, 42, 50, 0.3)',    // Light overlays
          medium: 'rgba(13, 42, 50, 0.6)',   // Medium overlays
          heavy: 'rgba(13, 42, 50, 0.9)',    // Heavy overlays
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B3C5C9',
          muted: '#718387',
          orange: '#FF9500',      // Accent text color
        },
        button: {
          primary: '#FFFFFF',     // White buttons
          secondary: '#0A2128',   // Dark buttons
          accent: '#FF9500',      // Orange buttons
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.05)',
          medium: 'rgba(255, 255, 255, 0.1)',
          heavy: 'rgba(255, 255, 255, 0.15)',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-glass': 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
        'gradient-card': 'linear-gradient(180deg, rgba(13, 42, 50, 0.3) 0%, rgba(13, 42, 50, 0.15) 100%)',
      },
      boxShadow: {
        'glass': '0 4px 24px -1px rgba(0, 0, 0, 0.2)',
        'card': '0 8px 32px -4px rgba(0, 0, 0, 0.3)',
        'button': '0 2px 8px -1px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};