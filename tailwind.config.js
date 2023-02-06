/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      teal: {
        50: "#EEF6F6",
        100: "#D0E6E5",
        200: "#B2D6D4",
        300: "#94C7C3",
        400: "#76B7B2",
        500: "#58A7A1",
        600: "#468681",
        700: "#356461",
        800: "#234340",
        900: "#122120",
      },
    },
  },
  plugins: [],
};
