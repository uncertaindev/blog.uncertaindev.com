const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				logoPrimary: "#73C2FB",
				logoSecondary: "#fff",
			},
			fontFamily: {
				customLogoSerif: [
					"Titan One",
					...defaultTheme.fontFamily.serif,
				],
				customTitleSerif: [
					"Nunito",
					...defaultTheme.fontFamily.serif,
				],
				serif: [
					"Montserrat",
					...defaultTheme.fontFamily.serif
				]
			}
		},
	},
	plugins: [
		require("@tailwindcss/typography")
	],
};
