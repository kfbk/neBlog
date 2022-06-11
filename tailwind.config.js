/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",       // これを追記
    "./components/**/*.{js,ts,jsx,tsx}",  // これを追記
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
