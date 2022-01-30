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
        sans: ['Electrolize', 'sans'],
      },
      backgroundImage: {
        'hero-pattern': '/images/wave-haikei.svg',
        'city-image': "url('../images/houston.jpg')"
      }
    },
  },
  plugins: [],
}
