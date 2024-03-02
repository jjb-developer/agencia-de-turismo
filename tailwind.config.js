/** @type {import('tailwindcss').Config} */
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
      },
      textShadow: {
        default: "2px 2px 4px rgba(245, 0, 0, 0.3)", // Ejemplo de sombra de texto
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

module.exports = tailwindConfig;
