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
            50: '#F6F4FF',
            100: '#EDE9FF',
            200: '#DCD4FF',
            300: '#C2B5FF',
            400: '#9C89FF',
            500: '#6B3FA0',  // Rich, deep purple
            600: '#5A2E8F',  // Darker purple for depth
            700: '#482178',  // Even deeper
            800: '#371662',  // Very deep purple
            900: '#260D4C',  // Darkest shade
          },
          teal: {
            500: '#0E2830',  // Main dark background
            600: '#0B1F25',
            700: '#081619',
            800: '#050D0E',
            900: '#020607',
          },
          support: {        // Additional professional colors
            success: '#38B26C',
            warning: '#F7B955',
            error: '#E35D6A',
            info: '#4A9BFF'
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