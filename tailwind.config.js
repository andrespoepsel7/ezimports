/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, jsx, ts, tsx}'],
  theme: {
    extend: {
      colors:{
        'c1':'#1F0149',
        'c2':'#F2B735',
      },
      fontFamily:{
        'f1':['Bebas Neue', 'cursive']
      },
      backgroundImage:{
        'pattern': "url('./Assets/FondoWeb.png')"
      }
    },
    
  },
  plugins: [],
}


