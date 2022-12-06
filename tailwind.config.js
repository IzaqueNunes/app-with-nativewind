/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/screens/*.tsx',
    './src/components/*.tsx',
  ],
  theme: {
    extend: {
      colors:{
        'gray' : {
          200: '#c4c4cc',
          900: '#121214',
        },
        'green':{
          500: '#015f43'
        }
      }
    },
  },
  plugins: [],
}
