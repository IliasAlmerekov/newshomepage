// @ts-check
import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
const env = loadEnv("", process.cwd(), "STORYBLOK");
import { loadEnv } from "vite";
import react from "@astrojs/react";
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      enableFallbackComponent: true,
      // customFallbackComponent: 'components/modules/content/CustomFallback',
      components: {
        stage: "components/modules/content/C1-Stage",
        newsTeaser: "components/modules/teaser/T1-Teaser",
        page: "templates/P1-Generic",
        Globals: "components/modules/function/F1-Header",
        articleTeaser: "components/modules/teaser/T2-ArticleTeaser",
        article: "templates/P2-Article",
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
