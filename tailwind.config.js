module.exports = {
  content: ["./public/**/*.{html,js}", "./index.html"],
  theme: {
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
};
