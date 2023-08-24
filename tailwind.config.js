/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs', './public'],
  theme: {
    extend: {
      colors: {
        lightGrey: '#9495A5',
        greyPurple: '#494C6B',
        bgBody: '#FAFAFA',
        completed: '#D1D2DA',
      },
      backgroundImage: {
        bgMobileLight: "url('/images/bg-mobile-light.jpg')",
      },
      fontFamily: {
        body: ['Josefin Sans'],
      },
      boxShadow: {
        small: '0px 35px 50px -15px rgba(194, 195, 214, 0.50)',
      },
    },
  },
  plugins: [],
};
