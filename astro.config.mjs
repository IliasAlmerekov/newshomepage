// @ts-check
import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
const env = loadEnv("", process.cwd(), "STORYBLOK");
import { loadEnv } from "vite";
import react from "@astrojs/react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import P1Article from "./src/templates/P1-Article.astro";

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
        Globals: "components/Header",
        articleTeaser: "components/ArticleTeaser",
        article: "templates/P1-Article",
      },
    }),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      // @ts-ignore
      https: true,
    },
  },
});
