const colors = require("tailwindcss/colors");

module.exports = {
  // mode: 'jit',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // false or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        c1: "#3C2E59",
        c2: "#536FA6",
        c3: "#A0B3D9",
        c4: "#E19ABF",
        c5: "#D9C5D4",
        c6: "#F9FAFC",
        separator: "#d7dfee",
        // Configure your color palette here
      },
      fontFamily: {
        Pacifico: ["Pacifico", "cursive"],
        sans: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        sm: ["12px", "14px"],
        base: ["15px", "17px"],
        lg: ["18px", "19px"],
        xl: ["20px", "22px"],
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
      // borderWidth: {
      //   d: "0.5px",
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
