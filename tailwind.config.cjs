/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#49BBBD',
        secondary: '#00FFF0',
        pinky: '#D8587E'
      }
    },
  },
  plugins: [],
}