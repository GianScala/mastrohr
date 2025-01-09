// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#FAFAFA',
            100: '#F4F4F5',
            200: '#E4E4E7',
            300: '#D4D4D8',
            400: '#A1A1AA',
            500: '#18181B',  // Main color - sophisticated dark
            600: '#131314',
            700: '#0D0D0E',
            800: '#080809',
            900: '#030303',
          },
          accent: {
            50: '#F6F4FF',
            100: '#EDE9FF',
            200: '#DCD4FF',
            300: '#C2B5FF',
            400: '#9C89FF',
            500: '#6B3FA0',  // Rich purple - perfect for accents
            600: '#5A2E8F',
            700: '#482178',
            800: '#371662',
            900: '#260D4C',
          },
          dark: {           // More blacks/grays for layering
            500: '#101012',  // Main background
            600: '#0C0C0D',
            700: '#080809',
            800: '#040405',
            900: '#020202',
          },
          surface: {
            card: '#1C1C1F',    // Card backgrounds
            default: '#18181B',  // Main surface
            deep: '#131314',     // Deeper elements
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#A1A1AA',
            tertiary: '#71717A',
            purple: '#9C89FF',   // Accent text
          },
          // Special effects colors
          glass: {
            light: 'rgba(255, 255, 255, 0.03)',
            medium: 'rgba(255, 255, 255, 0.05)',
            heavy: 'rgba(255, 255, 255, 0.08)',
          },
          overlay: {
            light: 'rgba(0, 0, 0, 0.2)',
            medium: 'rgba(0, 0, 0, 0.4)',
            heavy: 'rgba(0, 0, 0, 0.6)',
          },
          // Additional UI colors
          state: {
            success: '#38B26C',
            warning: '#F7B955',
            error: '#E35D6A',
            info: '#4A9BFF',
          }
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-dark': 'linear-gradient(180deg, var(--tw-gradient-stops))',
          'gradient-glass': 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
        },
        boxShadow: {
          'card': '0 4px 24px -1px rgba(0, 0, 0, 0.3)',
          'button': '0 2px 8px -1px rgba(0, 0, 0, 0.3)',
          'purple': '0 4px 24px -1px rgba(107, 63, 160, 0.2)',
        }
      },
    },
    plugins: [],
  };