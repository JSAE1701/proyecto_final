/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'svg_cruces_azul_verde': "url('../public/img/cruces_azul_verde.svg')",
      'thumbs_up': "url('../public/img/thumbs_up.jpg')",
      }
    },
  },
  plugins: [],
}
