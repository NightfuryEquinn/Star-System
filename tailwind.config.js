/**
 * @type { import( 'tailwindcss' ).Config } 
 **/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "red": "#C1115A",
      "light-pink": "#E13A6A",
      "pale-pink": "#E46A87",
      "pink": "#F72585",
      "dark-purple": "#4D004F",
      "purple": "#7209B7",
      "dark-blue": "#08173d",
      "deep-blue": "#03274c",
      "blue": "#3A0CA3",
      "light-blue": "#4361EE",
      "sky-blue": "#4CC9F0",
      "black": "#161A1D",
      "white": "#DEE2E6",
    },
    fontFamily: {
      "dm-mono": ["DM Mono Regular"],
      "dm-mono-medium": ["DM Mono Medium"],
      "dm-mono-light": ["DM Mono Light"],
      "dm-mono-italic": ["DM Mono Italic Regular"],
      "dm-mono-italic-medium": ["DM Mono Italic Medium"],
      "dm-mono-italic-light": ["DM Mono Italic Light"]
    },
    extend: {
      screens: {
        "3xl": "1920px"
      }
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}