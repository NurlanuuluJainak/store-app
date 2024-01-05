/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        "custom-orange": "rgba(255, 172, 100, 0.22)",
        "custom-green": "rgba(9, 207, 172, 0.16);",
      },
      colors: {
        dark_gray: "#1E1D2F",
        white: "#FFFFFF",
        blue: "#3F74FB",
        black: "#1E1D2F",
        gray: "#F2F2F2",
      },
      screens: {
        s: "370px",
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1536px",
      },
      fontFamily: {
        sans: ["Graphik", "Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    base: false,
    utils: false,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};
