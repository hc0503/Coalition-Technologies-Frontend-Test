/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#01F0D0',
        'gray': {
          500: '#F6F7F8',
          400: '#CBC8D4'
        },
        
        'pink': '#E66FD2',
        'purple': '#8C6FE6',
        'blue': '#F4F0FE',
      },
    },
  },
  plugins: [],
}

