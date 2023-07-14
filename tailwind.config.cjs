/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: { sans: "Noto Sans" },
			colors: {
				primary: "var(--color-primary)",
				"primary-light": "var(--color-primary-light)",
				"primary-dark": "var(--color-primary-dark)",
			},
			screens: {
				tablet: "768px",
				laptop: "1024px",
				desktop: "1280px",
				ultrawide: "1440px",
			},
			animation: {
				'bounce-slow': 'bounce 3s infinite',
			}
		},
	},
	safelist: [
		{ pattern: /bg-(sky|indigo|purple|red|pink|orange|green)-(500|600)/ },
		{ pattern: /^\-?m(\w?)-/ },
    	{ pattern: /^p(\w?)-/ },
	],
	plugins: [require("prettier-plugin-tailwindcss"), require('@tailwindcss/typography'), require("tailwind-scrollbar")({ nocompatible: true })],
};
