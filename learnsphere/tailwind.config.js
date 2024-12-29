/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          500: '#800000', // You can use the color code for maroon
        },
      },
    },
  },
  plugins: [],
};
