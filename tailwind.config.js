/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // A teal-and-orange colour grade: cool shadows, warm tungsten highlights.
        night: '#061013',
        deep: '#0c1d21',
        teal: { DEFAULT: '#1f5a60', soft: '#6fa8a6' },
        tungsten: { DEFAULT: '#ff9d4d', soft: '#ffd2a1' },
        paper: '#efe6d6',
        fog: '#9fb3b1',
        rec: '#e5462f',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Georgia', 'serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
