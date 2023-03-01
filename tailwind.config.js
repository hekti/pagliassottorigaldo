/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./nuxt.config.{js,ts}",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'darkGreen': '#33474a',
        'lightGreen': '#798684',
        'darkYellow': '#dddac8',
        'lightYellow': '#dcded5',
        'textDark': '#1e3032',
        'textLight': '#ffffff',
        'menuBackground': '#000000',
      },
      fontFamily: {
        'serif': ['Cormorant', 'serif'],
        fabada: ["Fabada", "sans-serif"],
        calibri: ["Calibri", "sans-serif"],
      }
    },
  },
  plugins: [],
}