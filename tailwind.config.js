/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customWhite: '#FFFFFF',
        customGray: '#C9C9C9',
      },
      fontFamily: {
        cultive: ['Cutive Mono'],
        nunito: ['Nunito'],
        workSans: ['Work Sans'],
        varela: ['Varela Round'],
      },
    },
  },
  plugins: [],
}
