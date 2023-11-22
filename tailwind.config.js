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
      spacing: {
        '9.5': '2.375rem',
        15: '3.75rem',
        26: '6.5rem',
        84: '21rem',
        118: '29.5rem',
        128: '32rem',
        144: '36rem',
        160: '40rem'
      },
      maxWidth: {
        xs: '28rem'
      }
    },
  },
  plugins: [],
}

