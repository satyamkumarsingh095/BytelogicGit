// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'my-gradient': 'linear-gradient(180deg, #F9F9FB 0%, #EAEFF9 100%)',
      'my-gradient1': 'linear-gradient(180deg, #F9F9FB 0%, #F1EDFB 100%)',
      'my-gradient2': 'linear-gradient(180deg, #F9F9FB 0%, #F7EEEF 100%)',
      'my-gradient3': 'linear-gradient(180deg, #F9F9FB 0%, #EDF7F8 100%)',
      'my-gradient4': ' linear-gradient(180deg, #F9F9FB 0%, #F2F8EF 100%)',
      'my-gradient5': ' linear-gradient(180deg, #F9F9FB 0%, #EEF0F8 100%)',

    },
    extend: {
      // backgroundImage: {
      //   'info': "url('../src/assets/info.png')", // Add your custom background image
      // },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          recoleta: ['Recoleta', 'sans-serif'],
          ephesis: ['Ephesis', 'cursive'],
          poppins: ['Poppins', 'sans-serif'],
          righteous: ['Righteous', 'cursive'],
          helvetica: ['Helvetica', 'Arial', 'sans-serif'],
          outfit: ['Outfit', 'sans-serif'], // Add the Outfit font
        },
    },
  },
  plugins: [],
};
