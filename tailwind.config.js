// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5F5F5',
          100: '#E6E6E6',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#111111',  // Main primary - deep black
          600: '#0D0D0D',  // Darker black
          700: '#0A0A0A',  // Even darker
          800: '#070707',  // Very dark
          900: '#040404',  // Deepest black
        },
        accent: {
          50: '#FFF1F0',
          100: '#FFE4E1',
          200: '#FFC7C0',
          300: '#FFA99E',
          400: '#FF8B7D',
          500: '#FF6F61',  // Your original vibrant orange/rose
          600: '#FF4D3D',  // Slightly deeper
          700: '#FF2A19',  // Deep accent
          800: '#FF0800',  // Very deep
          900: '#CC0600',  // Darkest accent
        },
        dark: {
          500: '#0A0A0A',  // Main background
          600: '#080808',  // Card backgrounds
          700: '#060606',  // Secondary backgrounds
          800: '#040404',  // Deeper elements
          900: '#020202',  // Darkest elements
        },
        surface: {
          card: '#0D0D0D',    // Card background
          default: '#0A0A0A', // Main surface
          deep: '#070707',    // Deep surface
        },
        text: {
          primary: '#FFFFFF',    // White text
          secondary: '#B3B3B3',  // Gray text
          accent: '#FF6F61',     // Orange/rose text
        },
        button: {
          primary: '#FF6F61',    // Accent colored buttons
          secondary: '#111111',   // Dark buttons
          white: '#FFFFFF',      // White buttons
        },
        // Special effects
        glass: {
          light: 'rgba(255, 255, 255, 0.03)',
          medium: 'rgba(255, 255, 255, 0.05)',
          heavy: 'rgba(255, 255, 255, 0.08)',
        },
        overlay: {
          light: 'rgba(0, 0, 0, 0.2)',
          medium: 'rgba(0, 0, 0, 0.4)',
          heavy: 'rgba(0, 0, 0, 0.6)',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(180deg, #111111 0%, #070707 100%)',
        'gradient-card': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
      },
      boxShadow: {
        'card': '0 8px 32px -4px rgba(0, 0, 0, 0.5)',
        'button': '0 4px 16px -2px rgba(255, 111, 97, 0.2)',
        'glow': '0 0 24px -4px rgba(255, 111, 97, 0.15)',
      }
    },
  },
  plugins: [],
};