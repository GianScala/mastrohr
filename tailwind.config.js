// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          // These are the actual colors from your app
          primary: '#00B3A2',  // Main teal background
          secondary: '#00C4B2', // Lighter teal for cards
          accent: '#FF3B30',   // Bright red for numbers/stats
          
          // Supporting colors for UI
          background: {
            DEFAULT: '#00B3A2',    // Your main teal
            dark: '#009B8C',       // Slightly darker
            light: '#00C4B2',      // Slightly lighter
            card: 'rgba(0, 179, 162, 0.8)'  // For card backgrounds
          },
          
          // Text colors
          text: {
            primary: '#FFFFFF',
            secondary: 'rgba(255, 255, 255, 0.8)',
            muted: 'rgba(255, 255, 255, 0.6)'
          },
          
          // Accent variations
          red: {
            DEFAULT: '#FF3B30',    // Your bright red
            dark: '#E63530',       // Slightly darker
            light: '#FF524A'       // Slightly lighter
          }
        },
        // Optional: Add backdrop blur for card effects
        backdropBlur: {
          'card': '10px'
        },
        // Optional: Add background opacity utilities
        backgroundOpacity: {
          '85': '0.85',
          '90': '0.90',
          '95': '0.95'
        }
      },
    },
    plugins: [],
  };