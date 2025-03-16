/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A9C9C",
          50: "#E6F7F7",
          100: "#CCF0F0",
          200: "#99E0E0",
          300: "#66D1D1",
          400: "#33C1C1",
          500: "#1A9C9C",
          600: "#147D7D",
          700: "#0F5E5E",
          800: "#0A3F3F",
          900: "#051F1F",
        },
        secondary: {
          DEFAULT: "#FF6B6B",
          50: "#FFEDED",
          100: "#FFDBDB",
          200: "#FFB7B7",
          300: "#FF9393",
          400: "#FF6F6F",
          500: "#FF6B6B",
          600: "#CC5656",
          700: "#994040",
          800: "#662B2B",
          900: "#331515",
        },
      },
      fontFamily: {
        sans: ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
