// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#F5F7F9',
            100: '#E1E7ED',
            200: '#C3CFD9',
            300: '#9DB1C3',
            400: '#7890A9',
            500: '#1F4349',  // Deep professional teal
            600: '#183438',
            700: '#122529',
            800: '#0C171A',
            900: '#060A0C',
          },
          accent: {
            50: '#FDFDE8',
            100: '#FAFBC5',
            200: '#F7F89D',
            300: '#F1F175',
            400: '#EAE94D',
            500: '#FFB930',  // Warm yellow/amber - energetic & approachable
            600: '#F5A122',  // Slightly darker for hover states
            700: '#E88A17',  // Deep yellow for contrast
            800: '#D67311',  // Dark amber
            900: '#B35A0E',  // Deepest shade
          },
          teal: {
            500: '#0E2830',  // Main dark background
            600: '#0B1F25',
            700: '#081619',
            800: '#050D0E',
            900: '#020607',
          },
          success: {        // Additional professional colors
            500: '#38B26C',  // Success green
            600: '#2D8F56',
            700: '#236C41',
            800: '#1A4A2D',
            900: '#102819',
          }
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-dark': 'linear-gradient(180deg, var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
  };