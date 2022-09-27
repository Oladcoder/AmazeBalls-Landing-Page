/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'typo':'#AC3B61', 
      'white':'white'

    },
    screens:{
      'sm': {'max': '480px'}

    },
    extend: {
      spacing:{
        '5vh':'50vh', 
        '7vh':'70vh',
        '9vh':'90vh',
        '8vh':'80vh',
        '10vh':'100vh',
        '12vh':'120vh',
        '5vw':'50vw', 
        '7vw':'70vw',
        '9vw':'90vw',
        '10vw':'100vw'
      }
    },
  },
  plugins: [],
}
