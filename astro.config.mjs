import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import basicSsl from "@vitejs/plugin-basic-ssl";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
	site: "https://alexisdechiara.geekly.blog",
	integrations: [tailwind({
		applyBaseStyles: false
	}), image({
		serviceEntryPoint: "@astrojs/image/sharp"
	}),
	storyblok({
    	accessToken: env.STORYBLOK_TOKEN,
		components: {
			page: "storyblok/Page",
			header: "storyblok/Header",
			main: "storyblok/Main",
			navigation: "storyblok/Navigation",
			hero: "storyblok/Hero",
			banner: "storyblok/Banner",
			table: "storyblok/Table",
			column: "storyblok/Column",
			cell: "storyblok/Cell",
			text: "storyblok/Text",
			timeline: "storyblok/Timeline",
			emptyLine: "storyblok/EmptyLine",
			line: "storyblok/Line",
			feature: "storyblok/Feature",
			margin: "storyblok/Margin",
			contact: "storyblok/Contact",
			form: "storyblok/Form",
			iconsContainer: "storyblok/IconsContainer",
			socialIcon: "storyblok/socialIcon",
			wave: "storyblok/Wave",
			simpleFooter: "storyblok/SimpleFooter",
			servicesContainer: "storyblok/ServicesContainer",
			service: "storyblok/Service",
			item: "storyblok/Item",
			projectsContainer: "storyblok/ProjectsContainer",
			project: "storyblok/Project",
		},
    }), partytown(), sitemap(), compress()],
	vite: {
		plugins: [basicSsl()],
		server: {
			https: true,
		},
	},
});