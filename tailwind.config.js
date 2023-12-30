/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/App.vue',
    './src/pages/**/*.{vue,html,js}',
    './src/components/**/*.{vue,html,js}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}

