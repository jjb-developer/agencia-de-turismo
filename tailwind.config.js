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
      keyframes:{
        wiggle: {
          '0%': {
            filter: 'blur(5px)',
            transform: 'translateY(calc(-10% + 75px))',
          },
          '25%': {
            transform: 'scale(50%)',
            transform: 'translateY(calc(2% + 75px))',
          },
          '80%': {
            transform: 'translateY(calc(-100% ))',
            transform: 'scale(300%)',
          },
          '100%': {
            opacity: 1,
            filter: 'blur(0)',
            transform: 'scale(400%)'
          },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in forwards',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

module.exports = tailwindConfig;
