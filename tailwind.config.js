/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,njk}'],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald', "sans-serif"]
      },
    },
  },
  daisyui: {
    themes: [
      {
        basetheme: {

          "primary": "#823f80",

          "secondary": "#dfc1ce",

          "accent": "#c4b5fd",

          "neutral": "#44403c",

          "base-100": "#f5f5f4",

          "info": "#bae6fd",

          "success": "#6ee7b7",

          "warning": "#fecaca",

          "error": "#fda4af",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
