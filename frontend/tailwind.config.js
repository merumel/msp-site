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
        sans: ['Karla', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': '/images/wave-haikei.svg',
      }
    },
  },
  plugins: [],
}
