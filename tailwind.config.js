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
            500: '#486A82',  // Main primary
            600: '#345066',
            700: '#243849',
            800: '#15212D',
            900: '#070B0F',
          },
          accent: {
            50: '#FFF2F1',
            100: '#FFE5E2',
            200: '#FFCCC6',
            300: '#FFA89E',
            400: '#FF8B80',
            500: '#FF6F61',  // Main accent - keeping your perfect orange/rose
            600: '#FF4D3D',
            700: '#FF2A19',
            800: '#F51A08',
            900: '#C91507',
          },
          teal: {
            500: '#0F2830',  // Main background - darker version
            600: '#0C1F25',  // Darker
            700: '#091619',  // Even darker
            800: '#060D0F',  // Very dark
            900: '#030506',  // Almost black
          },
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-dark': 'linear-gradient(180deg, var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
  };