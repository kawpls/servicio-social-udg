/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        plum: {
          50: "#fcf7fc",
          100: "#f8eef9",
          200: "#f1dcf2",
          300: "#e6c0e7",
          400: "#d79ad8",
          500: "#c272c3",
          600: "#a653a5",
          700: "#823f80",
          800: "#70386d",
          900: "#5d325a",
          950: "#3b1739",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        basetheme: {
          primary: "#823f80",

          secondary: "#dfc1ce",

          accent: "#c4b5fd",

          neutral: "#f8eef9",

          "base-100": "#fcf7fc",

          info: "#bae6fd",

          success: "#6ee7b7",

          warning: "#fecaca",

          error: "#fda4af",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
