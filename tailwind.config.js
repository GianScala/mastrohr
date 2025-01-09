// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F4F8',   // Lighter, perfect for backgrounds
          100: '#D9E2EC',  // Subtle backgrounds
          200: '#BCCCDC',  // Borders, dividers
          300: '#9FB3C8',  // Disabled states
          400: '#829AB1',  // Secondary text
          500: '#486581',  // Main primary - professional blue
          600: '#334E68',  // Hover states
          700: '#243B53',  // Active states
          800: '#102A43',  // Text color
          900: '#0A1F2E',  // Dense text
        },
        accent: {
          50: '#F0FDF4',   // Success backgrounds
          100: '#DCFCE7',  // Subtle accents
          200: '#BBF7D0',  // Highlights
          300: '#86EFAC',  // Secondary buttons
          400: '#4ADE80',  // Supporting elements
          500: '#22C55E',  // Main accent - professional green
          600: '#16A34A',  // Hover states
          700: '#15803D',  // Active states
          800: '#166534',  // Dark accents
          900: '#14532D',  // Deep accents
        },
        neutral: {         // Professional neutral grays
          50: '#F8FAFC',   // Page background
          100: '#F1F5F9',  // Card background
          200: '#E2E8F0',  // Borders
          300: '#CBD5E1',  // Disabled
          400: '#94A3B8',  // Placeholder text
          500: '#64748B',  // Secondary text
          600: '#475569',  // Body text
          700: '#334155',  // Headings
          800: '#1E293B',  // High contrast text
          900: '#0F172A',  // Extra dark text
        },
        // Additional professional colors for specific use cases
        success: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          500: '#059669',
          600: '#047857',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          500: '#D97706',
          600: '#B45309',
        },
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#DC2626',
          600: '#B91C1C',
        },
        info: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          500: '#0284C7',
          600: '#0369A1',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      // Additional professional extensions
      fontFamily: {
        sans: ['Inter var', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'soft': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'soft-md': '0 6px 12px -2px rgb(0 0 0 / 0.05), 0 3px 6px -3px rgb(0 0 0 / 0.05)',
        'soft-lg': '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
      },
      borderRadius: {
        'soft': '0.375rem',
        'soft-lg': '0.5rem',
      },
    },
  },
  plugins: [],
};