/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const tailwindConfig = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        indie: ["Indie Flower", "cursive"],
        playfair: ["Playfair Display", "serif"],
        roboto: ["Roboto", "sans-serif"],
        rubikBurned: ["Rubik Burned", "sans-serif"],
        rubikDoodleShadow: ["Rubik Doodle Shadow", "sans-serif"],
        rubikGlitchPop: ["Rubik Glitch Pop", "sans-serif"],
        zeyada: ["Zeyada", "cursive"],
        arialBlack: ["arial-black"],
      },
      textShadow: {
        default: "2px 2px 4px rgba(245, 0, 0, 0.3)", // Ejemplo de sombra de texto
      },
      keyframes: {
        show: {
          "0%": {
            filter: "blur(10px)",
            transform: "translateY(calc(100% - 75px))",
          },
          "50%": {
            filter: "blur(5px)",
            transform: "translateY(calc(50% - 75px))",
          },
          "100%": {
            opacity: 1,
            filter: "blur(0)",
          },
        },
      },
      animation: {
        show: "show 1.5s linear 0.1s forwards",
      },
      transitionDuration: {
        300: "1s", // Duración de la transición de opacidad
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addVariant }) {
      addVariant("first-child", "&:nth-child(1)");
      addVariant("second-child", "&:nth-child(2)");
      addVariant("third-child", "&:nth-child(3)");
      addVariant("fourth-child", "&:nth-child(4)");
      addVariant("fifth-child", "&:nth-child(5)");
      addVariant("sixth-child", "&:nth-child(6)");
      addVariant("seventh-child", "&:nth-child(7)");
      addVariant("eighth-child", "&:nth-child(8)");
      addVariant("nth-of-type(2)", "&:nth-of-type(2)");
    }),
  ],
};

module.exports = tailwindConfig;
