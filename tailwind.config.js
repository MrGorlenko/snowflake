/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			keyframes: {
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
			animation: {
				"fade-in": "fade-in .45s ease-in-out",
			},
		},
		fontFamily: {
			"recoleta-regular": ["RecoletaRegular", "sans-serif"],
			"recoleta-bold": ["RecoletaBold", "sans-serif"],
			"futura-bold": ["FuturaBold", "sans-serif"],
			"futura-regular": ["FuturaRegular", "sans-serif"],
		},
		colors: {
			beige: "#F0EADC",
			black: "#303036",
			brown: {
				100: "#b1654a",
				200: "#b16e4a",
				300: "#b1764a",
				400: "#B17F4A",
				500: "#b1884a",
				600: "#b1904a",
				700: "#b1994a",
			},
			white: "#FAFAF6",
			gray: "#FDFDFB",
			"dark-gray": "#6A6968",
			green: "#46A46B",
			red: "#D83B2F",
		},
	},
	plugins: [],
};
