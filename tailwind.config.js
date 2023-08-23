/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs', './public'],
  theme: {
    extend: {
      backgroundImage: {
        bgMobileLight: "url('/images/bg-mobile-light.jpg')",
      },
    },
  },
  plugins: [],
};
