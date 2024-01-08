/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#EBE7DC',
        'coffee': '#8A431F',
        'home-bg': '#E3DFD4'
      }, 
      backgroundImage: {
        'CoffeeImage' : 'url("src/Images/B63072A1-BE2B-4966-A5F4-1265046AD235.jpeg")'
      },
      textColor: ['hover']
    },
  },
  darkMode: 'class',
  plugins: [],
}

