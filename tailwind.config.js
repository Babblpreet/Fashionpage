/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          'lightorange': "#f57e5d"
        },
        gray: {
          "lightgray": "#78909c",
          "medgray": "#546e7a",
          "highgray": "#455a64",
          "darkgray": "#37474f",
        },
      },
    },
  },
  plugins: [],
}