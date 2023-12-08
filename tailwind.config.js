/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "azulMarca": "#003D55",
        "azulClaro": "#20c7dd"
      },
      fontFamily: {
        russo: ["Russo One"],
        Montserrat: ["Montserrat"]
      },
      dropShadow: {
        "corta": "-4px 4px 3px rgba(0,0,0,0.36)",
      }
    },
  },
  plugins: [],
}

