/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./asset/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'main': '#A7A7A7',
        'sub': '#CCCCCCC',
      },
      fontSize: {
        'base': ['20px', '1.75']
      }
      
    },
  },
  plugins: [],
}
