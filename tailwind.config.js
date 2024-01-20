/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        bebas: "'Bebas Neue', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        main: "#3C3C3C",
        oneYellow: "#FABE4C",
        oneGreen: "#A4BC46",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

