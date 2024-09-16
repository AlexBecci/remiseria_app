/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gotham-black': ['Gotham-Black', 'sans-serif'],
        'gotham-book': ['Gotham-Book', 'sans-serif'],
        'gotham-medium': ['Gotham-Medium', 'sans-serif'],
      },
      colors: {
        main_cyan: '#8ecae6',
        main_cyan_hover: '#6ab0d3',
        main_skyblue: '#219ebc',
        main_skyblue_hover: '#1a7a99',
        main_blue: '#023047',
        main_blue_hover: '#012a36',
        main_yellow: '#ffb703',
        main_yellow_hover: '#e4a300',
        main_orange: '#fb8500',
        main_orange_hover: '#e57200',

      }
    },
  },
  plugins: [],
}