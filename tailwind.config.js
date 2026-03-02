/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
    "./dist/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003d99',    // Deep Blue
        secondary: '#0066cc',  // Royal Blue
        accent: '#FFD700',     // Gold
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
