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
		},
	},
	safelist: [
		{
			pattern: /bg-(sky|indigo|purple|red|pink|orange|green)-(500|600)/,
		},
		{
			pattern: /mb-(2|4|8|16|32|48|64|96)/,
		}
	],
	plugins: [require("prettier-plugin-tailwindcss"), require("tailwind-scrollbar")({ nocompatible: true })],
};
