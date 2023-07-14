import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import basicSsl from "@vitejs/plugin-basic-ssl";
import storyblok from "@storyblok/astro";
import VitePluginBrowserSync from "vite-plugin-browser-sync";
import { loadEnv } from "vite";
import vercel from '@astrojs/vercel/static';
const env = loadEnv("", process.cwd(), "STORYBLOK");


// https://astro.build/config
export default defineConfig({
	output: "static",
	adapter: vercel({
		analytics: true,
	}),
	site: "https://alexisdechiara.geekly.blog",
	integrations: [tailwind({
		applyBaseStyles: false
	}), image({
	serviceEntryPoint: "@astrojs/image/sharp"
	}), storyblok({
		accessToken: env.STORYBLOK_TOKEN,
		components: {
			page: "storyblok/Page",
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
			form: "storyblok/Form",
			iconsContainer: "storyblok/IconsContainer",
			socialIcon: "storyblok/SocialIcon",
			wave: "storyblok/Wave",
			simpleFooter: "storyblok/SimpleFooter",
			servicesContainer: "storyblok/ServicesContainer",
			service: "storyblok/Service",
			item: "storyblok/Item",
			projectsContainer: "storyblok/ProjectsContainer",
			project: "storyblok/Project",
			backNavigation: "storyblok/BackNavigation",
			simplePage: "storyblok/SimplePage",
			legalNotice: "storyblok/LegalNotice",
			licenses: "storyblok/Licenses",
			callToAction: "storyblok/CallToAction",
			error: "storyblok/Error"
		}
	}), partytown(), sitemap(), compress()],
	vite: {
		plugins: [basicSsl(), VitePluginBrowserSync({
			bs: {
			ui: {
				port: 3000
			}
			}
		})],
		server: {
			https: true
		}
	}
});