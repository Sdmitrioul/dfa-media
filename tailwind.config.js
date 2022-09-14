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
      greyOther: '#707D96',
      blue: {
        dark: '#141927',
        current: '#212C42',
        bright: '#6781F7',
      }
    },
    fontSize: {
      xs: ['8px', '10px'],
      lg: ["20px", "24px"]
    },
    extend: {
      boxShadow: {
        main: '0 4px 4px rgba(0, 0, 0, 0.25)',
        card: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      },
      gridTemplateColumns: {
        my: 'repeat(auto-fill, 120px);'
      }
    },
  },
  plugins: [],
}
