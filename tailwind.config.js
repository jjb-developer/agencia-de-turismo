/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const tailwindConfig = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        roboto: ["Roboto", "sans-serif"],
        rubikBurned: ["Rubik Burned", "sans-serif"],
       
      },
      textShadow: {
        default: "2px 2px 4px rgba(245, 0, 0, 0.3)", // Ejemplo de sombra de texto
      },
      keyframes:{
        wiggle: {
          '0%': {
            filter: 'blur(5px)',
            zIndex: 0,
          },
          '10%': {
            transform: 'translateY(-15px)',
          },
          '50%': {
            transform: 'scale(50%)',
            transform: 'translateY(calc(2% + 75px))',
          },
          
          '100%': {
            opacity: 1,
            filter: 'blur(1px)',
            transform: 'scale(10%)'
          },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

module.exports = tailwindConfig;
