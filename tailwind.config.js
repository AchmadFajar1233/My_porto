/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./public/script.js"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#e2e8f0",
      },
      fontFamily: {
        notable: ['Notable', 'sans-serif'],
        maguntia: ["UnifrakturMaguntia", "cursive"],
        limeLight: ["Limelight", "sans-serif"]
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

