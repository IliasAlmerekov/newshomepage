import { createRequire } from "module";
const require = createRequire(import.meta.url);
const astroPlugin = require("prettier-plugin-astro");

export default {
  semi: false,
  singleQuote: true,
  trailingComma: "all",
  printWidth: 100,
  tabWidth: 2,
  plugins: [astroPlugin],
};
