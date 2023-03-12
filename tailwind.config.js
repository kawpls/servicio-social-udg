/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,liquid,njk}'],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
