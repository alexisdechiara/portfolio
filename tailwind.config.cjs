/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: { sans: "Noto Sans" },
		},
		extend: {
			colors: {
				primary: "var(--color-primary)",
				"primary-light": "var(--color-primary-light)",
				"primary-dark": "var(--color-primary-dark)",
			},
		},
	},
	safelist: [
		{
			pattern: /bg-(sky|indigo|purple|red|pink|orange|green)-(500|600)/,
		},
	],
	plugins: [require("prettier-plugin-tailwindcss"), require("tailwind-scrollbar")({ nocompatible: true })],
};
