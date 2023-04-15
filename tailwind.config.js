/**
 * @type {import('tailwindcss').Config} 
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
      'dune': ['Dune Rise'],
      'stellar-light': ['Stellar Light'],
      'stellar-regular': ['Stellar Regular'],
      'stellar-medium': ['Stellar Medium']
    }
  },
  plugins: [],
}

