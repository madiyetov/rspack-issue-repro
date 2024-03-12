/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  plugins: [require('@tailwindcss/forms'), require('tailwindcss/nesting')],
};
