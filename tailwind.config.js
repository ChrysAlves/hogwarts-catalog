/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hp-dark-blue': '#001F3F',
        'hp-dark-gray': '#192730',
        'hp-light-paper': '#EAEBD0',
        'hp-light-gray': '#D9D9D9',
        'hp-gray': '#CBCBCB',
        'hp-gold': '#E6B83C',
        'hp-spell': '#55357E',
        'hp-gryffindor': '#CD5656',
        'hp-slytherin': '#659287',
        'hp-ravenclaw': '#295F98',
        'hp-hufflepuff': '#E9B63B',
      }
    },
    backgroundImage: {
        'hogwarts-castle': "url('/src/assets/images/hogwarts-background.jpg')",
      }
  },
  plugins: [],
}