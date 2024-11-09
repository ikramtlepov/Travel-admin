/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInUp: 'fadeInUp 0.5s forwards', // Animation
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px) scale(0.8)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
      },
      colors: {
        primary: {
          500: '#0077B6', // Your primary color
          400: '#00B4D8',
          300: '#48CAE4',
        },
      },
    },
  },
  plugins: [],
}


