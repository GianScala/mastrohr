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
            500: '#1F4349',  // Deep teal from image
            600: '#183438',
            700: '#122529',
            800: '#0C171A',
            900: '#060A0C',
          },
          accent: {
            50: '#FFF0F7',
            100: '#FFE3EF',
            200: '#FFC6DF',
            300: '#FF99C8',
            400: '#FF66AC',
            500: '#C4306B',  // Magenta from image
            600: '#A32557',
            700: '#821B44',
            800: '#611431',
            900: '#400D21',
          },
          teal: {
            500: '#0E2830',  // Main background - darkest teal from image
            600: '#0B1F25',
            700: '#081619',
            800: '#050D0E',
            900: '#020607',
          },
          burgundy: {        // Additional accent from image
            500: '#6E2842',
            600: '#5A2036',
            700: '#46182A',
            800: '#32111E',
            900: '#1F0A12',
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