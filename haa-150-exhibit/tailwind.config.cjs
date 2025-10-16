/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{ts,tsx}',
		'../site/src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
		serif: ['"DM Serif Display"', 'serif'],
      },
    },
  },
  plugins: [],
}