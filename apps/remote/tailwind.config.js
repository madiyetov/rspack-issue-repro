/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,tsx,ts}',
    '../**/src/**/*.{html,js,jsx,tsx,ts}',
  ],
  plugins: [
    require("tailwindcss", require("@tailwindcss/forms"), require("tailwindcss/nesting")),
  ],
};
