// @ts-check
import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
const env = loadEnv("", process.cwd(), "STORYBLOK");
import { loadEnv } from "vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      enableFallbackComponent: true,
      // customFallbackComponent: 'components/modules/content/CustomFallback',
      components: {
        stage: "components/Stage",
        newsTeaser: "components/Teaser",
        page: "templates/page",
        Header: "components/Header",
        articleTeaser: "components/ArticleTeaser",
      },
    }),
  ],
});
