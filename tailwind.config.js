/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./asset/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        main: "#A7A7A7",
        sub: "#CCCCCCC",
      },
      fontSize: {
        base: ["20px", "1.75"],
        "sub-ttl": ["32px", "1.75"],
        "h2-ttl": ["48px", "1.75"],
        "pj-ttl": ["28px", "1.75"],
        "pj-txt": ["18px", "1.75"],
      },
      // fontWeight: {
      //   light: ["300"],
      //   regular: ["400"],
      //   medium: ["500"],
      //   bold: ["700"],
      // },
    },
  },
  plugins: [],
};
