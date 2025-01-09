// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F0F0',   // Lightest teal shade
          100: '#CCE0E0',  // Light teal for contrast elements
          200: '#99C2C2',  // Subtle teal accents
          300: '#66A3A3',  // Mid-light teal
          400: '#338585',  // Medium teal
          500: '#1B4F5A',  // Your original perfect teal - main color
          600: '#164048',  // Slightly darker
          700: '#113037',  // Deeper teal
          800: '#0C2025',  // Very dark teal
          900: '#071013',  // Darkest teal shade
        },
        accent: {
          50: '#FFF4E6',   // Lightest orange
          100: '#FFE8CC',  // Light orange
          200: '#FFD199',  // Soft orange
          300: '#FFBA66',  // Medium light orange
          400: '#FFA333',  // Medium orange
          500: '#FF8C00',  // Your vibrant orange - perfect for stats
          600: '#CC7000',  // Darker orange
          700: '#995400',  // Deep orange
          800: '#663800',  // Very dark orange
          900: '#331C00',  // Darkest orange
        },
        teal: {
          500: '#0F2F37',  // Main background - deeper version
          600: '#0C262D',  // Card backgrounds
          700: '#091D22',  // Secondary backgrounds
          800: '#061418',  // Deeper elements
          900: '#030A0D',  // Darkest elements
        },
        surface: {
          card: '#113037',    // Card background color
          default: '#0F2F37', // Main surface color
          deep: '#0C262D',    // Deeper surface color
        },
        text: {
          primary: '#FFFFFF',     // Primary text
          secondary: '#B4C9CE',   // Secondary text
          muted: '#8AA0A4',      // Muted text
        },
        divider: 'rgba(255, 255, 255, 0.08)' // Subtle dividers
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};