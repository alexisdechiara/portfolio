/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: { sans: "Noto Sans" },
		},
	},
	plugins: [require("prettier-plugin-tailwindcss"), require("tailwind-scrollbar")({ nocompatible: true })],
};
