/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'yellow': '#F0EADA',
      'nd-yellow': '#FFCB45',
      'green': '#054F48',
      'gray': '#d7d1c2',
      'red': '#e91429'
    }
  },
  plugins: [],
}
