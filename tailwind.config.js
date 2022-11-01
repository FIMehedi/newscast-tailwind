/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        'Oswald': "'Oswald', sans-serif",
      },
      height: {
        '22': '5.5rem',
      },
      maxWidth: {
        'xxs': '250px',
      },
      colors: {
        'primary': '#393939',
        'secondary': '#F65050',
      },
      backgroundColor: {
        'primary': '#393939',
        'secondary': '#F65050',
        'alt': '#E5E5E5;'
      },
      backgroundImage: {
        'ads-bg': "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/images/adsbg.png')",
      },
      boxShadow: {
        'custom': '0px 1px 10px rgba(246, 80, 80, 0.15)',
      }
    },
  },
  plugins: [],
};
