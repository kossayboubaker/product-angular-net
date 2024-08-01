/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],  // Include TypeScript files if using Angular
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities, addComponents, e, config }) {
      // Add custom utilities or components if needed
    }
  ],
}
