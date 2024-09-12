/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "light",
  theme: {
    extend: {
      colors: {
        bg_primary: '#003373',
        bg_primary_light: '#e6ebf1',
        bg_primary_hover: '#002e68',


        bg_secondary: '#d30021',
        bg_secondary_light: '#fbe6e9',
        bg_secondary_hover: '#be001e',
        bg_secondary_darker: '#4a000c',
        bg_secondary_light_active: '#f1b0ba',


        bg_tertiary: '#fbbf24',
        bg_tertiary_light: '#fff9e9',
        bg_tertiary_hover: '#e2ac20',

      }
    },
  },
  plugins: [require('daisyui')],
}

