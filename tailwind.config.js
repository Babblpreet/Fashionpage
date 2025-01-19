/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      mulish_regular: ['"Mulish_regular"', 'serif'],
      mulish_medium: ['"Mulish_medium"', 'serif'],
      mulish_semibold: ['"Mulish_semibold"', 'serif'],
      mulish_bold: ['"Mulish_bold"', 'serif'],
      mulish_extrabold: ['"Mulish_extrabold"', 'serif'],
      mulish_black: ['"Mulish_black"', 'serif'],
    },

    extend: {
      colors: {
        orange: {
          'lightorange': "#f57e5d"
        },
        gray: {
          "lightgray": "#78909c",
          "medgray": "#546e7a",
          "midgray": "#607D8B",
          "highgray": "#455a64",
          "darkgray": "#37474f",

        },
      },
    },
  },
  plugins: [],
}