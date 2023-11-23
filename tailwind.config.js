/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    minHeight: {
      "3/4": "75%",
    },
    extend: {
      colors: {
        veryDarkDesaturatedBlue: "hsl(238, 29%, 16%)",
        softRed: "hsl(14, 88%, 65%)",
        softViolet: "hsl(273, 75%, 66%)",
        softBlue: "hsl(240, 73%, 65%)",
        veryDarkGrayishBlue: "hsl(237, 12%, 33%)",
        darkGrayishBlue: "hsl(240, 6%, 50%)",
        lightGrayishBlue: "hsl(240, 5%, 91%)"
      },

      keyframes: {
        slidex: {
          "0%, 100%": { transform: "translateX(-20%)" },
          "50%": { transform: "translateX(0)" },
        },
      },

      animation: {
        slidex: "slidex 3s ease-in-out infinite",
      },

    },
  },
  plugins: [],
}

