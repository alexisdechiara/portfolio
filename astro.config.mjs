import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
	site: "https://alexisdechiara.geekly.blog",
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
		partytown(),
		sitemap(),
		compress(),
	],
});