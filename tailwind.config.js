/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0066FF',
        'deep-navy': '#0A1628',
        'slate': '#1E2B3C',
        'ice-blue': '#E8F1FF',
        'pure-white': '#FFFFFF',
        'steel': '#64748B',
        'success-green': '#10B981',
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
