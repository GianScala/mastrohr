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
          500: '#131619',  // Darker charcoal base
          600: '#0F1214',
          700: '#0B0D0F',
          800: '#070809',
          900: '#030404',
        },
        accent: {
          50: '#FFF1ED',
          100: '#FFE4DB',
          200: '#FFD5C7',
          300: '#FFC5B3',
          400: '#FFB49F',
          500: '#CC3B28',  // More vibrant Mars red
          600: '#B82E1F',  // Deeper vibrant red
          700: '#A42317',  // Rich oxide red
          800: '#8F180F',  // Deep Mars crater red
          900: '#7A0E08',  // Darkest Mars shadow
        },
        teal: {
          500: '#080B0D',  // Even darker background
          600: '#060809',
          700: '#040506',
          800: '#020303',
          900: '#010101',
        },
        mars: {           
          rust: '#E74C3C',     // More vibrant rusty orange
          sand: '#FF6B6B',     // Brighter Mars surface
          shadow: '#C0392B',   // Richer deep shadows
          dust: '#FF4136',     // More vivid dust storms
          night: '#0A0808'     // Darker Mars night
        },
        surface: {
          light: '#1A1D21',    // Darker top-level surfaces
          default: '#131619',  // Darker main surface
          dark: '#0D0F12',     // Darker sunken surfaces
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