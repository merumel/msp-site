module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#b0a8a5',
        'custom-green': '#c4cc74',
        'custom-pale': '#ded5d1'
      },
      fontFamily:{
        sans: ['"Chakra Petch"', 'sans'],
      },
      backgroundImage: {
        'shiba-laptop': "url('../images/shiblaptop.png')",
        'city-image': "url('../images/houston.jpg')",
        'shiba-business': "url('../images/officeshib.jpg')"
      }
    },
  },
  plugins: [],
}
