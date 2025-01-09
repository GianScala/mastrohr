// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#F4F4F5',
            100: '#E4E4E7',
            200: '#A1A1AA',
            300: '#71717A',
            400: '#52525B',
            500: '#09090B',  // Much darker main color
            600: '#070708',
            700: '#050506',
            800: '#030304',
            900: '#010102',
          },
          accent: {
            50: '#FFE4E1',
            100: '#FFD1CC',
            200: '#FFB3AA',
            300: '#FF8C80',
            400: '#FF6B5B',
            500: '#8B1F1A',  // Much darker Mars red
            600: '#771A16',  // Deeper red
            700: '#631512',  // Even deeper
            800: '#4F110E',  // Very deep
            900: '#3B0C0A',  // Extremely deep
          },
          dark: {           // Ultra-dark blacks
            500: '#050506',  // Main background
            600: '#040405',
            700: '#030304',
            800: '#020203',
            900: '#010102',
          },
          surface: {
            card: '#0A0A0C',    // Darker card backgrounds
            default: '#080809',  // Darker main surface
            deep: '#060607',     // Deeper elements
          },
          mars: {           // Darker Mars colors
            rust: '#6B1815',     // Dark rust
            ember: '#8B1F1A',    // Dark ember
            shadow: '#3B0C0A',   // Very dark shadows
            dust: '#561311',     // Dark dust
            night: '#030304'     // Ultra dark night
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#71717A',
            tertiary: '#52525B',
            accent: '#8B1F1A',   // Dark red text
          },
          glass: {
            light: 'rgba(255, 255, 255, 0.02)',
            medium: 'rgba(255, 255, 255, 0.03)',
            heavy: 'rgba(255, 255, 255, 0.05)',
          },
          overlay: {
            light: 'rgba(0, 0, 0, 0.4)',
            medium: 'rgba(0, 0, 0, 0.6)',
            heavy: 'rgba(0, 0, 0, 0.8)',
          },
          state: {
            success: '#1F5937',
            warning: '#8B4513',
            error: '#8B1F1A',
            info: '#1F3D8B',
          }
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-dark': 'linear-gradient(180deg, #09090B 0%, #050506 100%)',
          'gradient-mars': 'linear-gradient(180deg, #8B1F1A 0%, #3B0C0A 100%)',
        },
        boxShadow: {
          'card': '0 4px 24px -1px rgba(0, 0, 0, 0.5)',
          'button': '0 2px 8px -1px rgba(0, 0, 0, 0.5)',
          'mars': '0 4px 24px -1px rgba(139, 31, 26, 0.15)',
        }
      },
    },
    plugins: [],
  };