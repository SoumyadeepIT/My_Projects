/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f3f1',
          100: '#ede0da',
          200: '#dec2b5',
          300: '#cda38f',
          400: '#bc8469',
          500: '#a05941',
          600: '#8f4f3a',
          700: '#7e4532',
          800: '#6d3b2b',
          900: '#5c3123',
          950: '#4b2720',
        },
        secondary: {
          50: '#fcfaf4',
          100: '#f8f1e4',
          200: '#f0e4c9',
          300: '#e7d6ae',
          400: '#dfc994',
          500: '#d7b377',
          600: '#c2a16b',
          700: '#ac8f5f',
          800: '#977d52',
          900: '#816b46',
          950: '#6c593a',
        },
        accent: {
          50: '#f2f5f6',
          100: '#e1e9ec',
          200: '#c2d3d9',
          300: '#a3bdc6',
          400: '#84a7b3',
          500: '#658c99',
          600: '#456a76',
          700: '#385561',
          800: '#2b414c',
          900: '#1e2c37',
          950: '#111722',
        },
        success: {
          500: '#10b981',
          600: '#059669',
        },
        warning: {
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};