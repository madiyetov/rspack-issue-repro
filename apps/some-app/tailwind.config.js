/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,tsx,ts}", "../shared/src/**/*.{html,js,jsx,tsx,ts}"],
    theme: {
        extend: {},
        colors: {
            white: '#ffffff',
            black: '#071222',
            main: {500: '#EF7F1A', 400: '#FCE5D1', 300: '#FFF9EF', 200: '#FFF9EF'},
            orange: {500: '#EF7F1A', 400: '#FCE5D1', 300: '#FFF9EF', 200: '#FFF9EF'},
            gray: {800: '#324054', 600: '#71839B', 500: '#B4B8BF', 400: '#7C8792',  300: '#E4E6ED', 200: '#E4E6ED'},
            sky: { 900: '#071222', 600: '#2E8BE0', 300: '#2E8BE0', 200: '#D3EEFF' },
            red: { 600: '#DB1516', 400: '#FFE4DF', 200: '#FFE4DF' },
            green: { 600: '#008E22', 400: '#61D34F', 200: '#E8F5E9' },
            purple: { 600: '#5E35B1', 200: '#D1C4E9' },
        },
    },
    plugins: [
        require('tailwindcss', require("@tailwindcss/forms"), require("tailwindcss/nesting")),
    ],
}
  