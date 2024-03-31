/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveTo: {
          '0%, 100%': { transform: 'translate(0px)' },
          '50%': { transform: 'translate(-30px , -20px)' },
        },
        moveTilte: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
        moveTopTo: {
          '0%, 100%': { transform: 'translate(0px)' },
          '50%': { transform: 'translate(0px , 30px)' },
        },
      }
    },
  },
  plugins: [],
}

