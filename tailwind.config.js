/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        "0.25": "1px",
      },
      colors: {
        'charcoal': '#264653',
        'persianGreen': '#7fa79d',
        'saffron': '#338493',
        'sandyBrown': '#F4A261',
        'burntSienna': '#E76F51',
        'white': '#efedd0',
      },
      borderWidth: {
        "1": "1px"
      }
    },
    fontFamily: {
      'oswald': ['Oswald', 'sans-serif'],
    },
    minHeight: {
			"10v": "10vh",
			"20v": "20vh",
			"30v": "30vh",
			"40v": "40vh",
			"50v": "50vh",
			"60v": "60vh",
			"70v": "70vh",
			"80v": "80vh",
			"85v": "85vh",
			"90v": "90vh",
			"100v": "100vh",
		},
  },
  plugins: [],
}
