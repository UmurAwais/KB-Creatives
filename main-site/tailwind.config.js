/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#F5B419',
      },
      fontFamily: {
        'sans': ['Outfit', 'sans-serif'],
        'teko': ['Teko', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      maxWidth: {
        'site': '1400px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInFromTop: {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInFromBottom: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in-out',
        slideInFromTop: 'slideInFromTop 0.3s ease-out',
        slideInFromBottom: 'slideInFromBottom 0.4s ease-out',
        scaleIn: 'scaleIn 0.3s ease-out',
        fadeInScale: 'fadeInScale 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
