/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1d1d1f',
        snow: '#f5f5f7',
        graphite: '#86868b', // secondary text on black
        subtle: '#6e6e73', // secondary text on white and snow
        accent: {
          DEFAULT: '#2997ff', // links on black
          strong: '#0071e3', // links on white and snow, filled buttons
        },
      },
    },
  },
  plugins: [],
}

