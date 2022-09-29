import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import astroI18next from "astro-i18next";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";
// import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	integrations: [astroI18next(), tailwind({ config: { applyBaseStyles: false } }), image()],
	output: "server",
	adapter: netlify(),
});
