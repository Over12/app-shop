/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'text': 'rgb(var(--text))',
        'background': 'rgb(var(--background))',
        'primary': 'rgb(var(--primary))',
        'secondary': 'rgb(var(--secondary))',
        'accent': 'rgb(var(--accent))',
      },
      fontFamily: {
        sans: ['Rubik', 'ui-sans-serif', 'system-ui'],
        kaisei: ['Kaisei Decol', 'serif']
      }
    },
  },
  plugins: [],
}

