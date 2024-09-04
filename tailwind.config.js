/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/*.{js,jsx,ts,tsx}",
    "./components/*/**.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: "#FFF1C6",
        tertiary: "#FEE189",
        green: "#449D48",
        background: "#FFF8E1"
      },
    },
  },
  plugins: [],
}