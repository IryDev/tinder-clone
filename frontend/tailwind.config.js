/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPink: "#fd267a",
        coralRed: "#ff6036",
        darkRed: "#d6002f",
      },
      keyframes: {
        opacity: {
          "0%": { opacity: "100" },
          "90%": { opacity: "0" },
          "100%": { opacity: "0", display: "none" },
        },
      },
      backgroundImage: {
        home: "linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0.2)), url('./assets/img/background.webp')",
      },
    },
  },
  plugins: [],
};
