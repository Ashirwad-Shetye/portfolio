/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      ginebra: ["Ginebra", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      colors: {
        coffee: "#f5ebe0",
        darkcoffee: "#2c1309",
        midcoffee: "#603808",
        lightcoffee: "#a47148",
      },
    },
  },
  plugins: [],
};
