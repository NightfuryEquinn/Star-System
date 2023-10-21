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
      'white': '#dee2e6',
      'black': '#161a1d',
      'darkred': '#970005',
      'red': '#ed0101',
      'darkblue': '#000052',
      'blue': '#0c44ac'
    },
    fontFamily: {
      'wormbox': [ 'Wormbox' ],
      'made-light': [ 'Made Light' ],
      'made-regular': [ 'Made Regular' ],
      'made-bold': [ 'Made Bold' ],
      'stray': [ 'Stray' ]
    },
    extend: {
      screens: {
        '3xl': '1920px'
      },
      transitionTimingFunction: {
        'open': 'cubic-bezier( 0, .81, .16, 1 )'
      }
    }
  },
  plugins: [
    require( 'tailwindcss-animated' )
  ],
}