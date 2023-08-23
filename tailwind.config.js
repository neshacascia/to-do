/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs', './public'],
  theme: {
    extend: {
      colors: {
        greyPurple: '#494C6B',
      },
      backgroundImage: {
        bgMobileLight: "url('/images/bg-mobile-light.jpg')",
      },
      fontFamily: {
        body: ['Josefin Sans'],
      },
    },
  },
  plugins: [],
};
