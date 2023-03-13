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
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
