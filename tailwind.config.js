/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      grey: '#8B97AE',
      blue: {
        dark: '#141927',
        current: '#212C42',
      }
    },
    extend: {},
  },
  plugins: [],
}