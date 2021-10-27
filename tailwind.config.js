module.exports = {
	purge: ['./pages/*.js', './pages/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				72: '18rem',
				84: '21rem',
				96: '24rem',
			},
			fontFamily: {
				quicksand: "'Quicksand', serif",
			},
		},
	},
	variants: {
		extend: { backgroundColor: ['hover'] },
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
