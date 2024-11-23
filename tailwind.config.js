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

    },
    fontFamily: {

    },
    extend: {
      screens: {
        "3xl": "1920px"
      }
    }
  },
  plugins: [
    require( 'tailwindcss-animated' )
  ],
}