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
            500: '#1F2937',  // Deep charcoal with slight warmth
            600: '#1A232F',
            700: '#151C26',
            800: '#0F151D',
            900: '#0A0D13',
          },
          accent: {
            50: '#FFF1ED',
            100: '#FFE4DB',
            200: '#FFD5C7',
            300: '#FFC5B3',
            400: '#FFB49F',
            500: '#983628',  // Mars dusty red
            600: '#8A2A1F',  // Deeper Mars red
            700: '#7C1F17',  // Rich oxide red
            800: '#6E150F',  // Deep Mars crater red
            900: '#600C08',  // Darkest Mars shadow
          },
          teal: {
            500: '#0C1C23',  // Darker background
            600: '#091418',
            700: '#060D11',
            800: '#03070A',
            900: '#010304',
          },
          mars: {           // Additional Mars-inspired colors
            rust: '#B34923',     // Rusty orange
            sand: '#D68763',     // Mars surface
            shadow: '#892A1F',   // Deep shadows
            dust: '#CC4E33',     // Dust storms
            night: '#1A1210'     // Mars night
          },
          surface: {
            light: '#1F2937',    // Top-level surfaces
            default: '#1A232F',  // Main surface
            dark: '#151C26',     // Sunken surfaces
          }
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-dark': 'linear-gradient(180deg, var(--tw-gradient-stops))',
          'gradient-mars': 'linear-gradient(180deg, var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
  };