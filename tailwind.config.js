/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "light",
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

