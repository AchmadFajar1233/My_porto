/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./public/script.js"],
  theme: {
    extend: {
      colors: {
        primary: "#030712",
        secondary: "#e2f0ff",
        abuAabu: "#32343c",
        kuning: "#d8a31a",
        optional: "#063648"

      },
      gridTemplateColumns: {
        header: '1fr, 2fr, 2fr, 2fr 2fr'
      },
      animation : {
        scrollInfinite : "scrollInfinite 8s linear infinite"
      },
      keyframes : {
        scrollInfinite : {
          '0%, 100%' : {transform: 'translateX(0%)'},
          '100%' : {transform: 'translateX(-120%)'}
        }
      }
    },
  },
  plugins: [],
}

