const { extend } = require('@react-three/fiber');
const { content, theme, plugins } = require('./tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
