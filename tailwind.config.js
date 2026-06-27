/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B0E14',
        surface: '#12161F',
        card: '#161B26',
        line: '#232938',
        muted: '#8B92A3',
        signal: {
          DEFAULT: '#4C8BF5',
          dim: '#2A4571',
        },
        terminal: {
          DEFAULT: '#34D399',
          dim: '#1B5E48',
        },
        amber: '#F5A623',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

