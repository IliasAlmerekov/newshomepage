import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import astro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";

export default [
  {
    ignores: [".astro/**/*", "dist/**/*", "node_modules/**/*"],
  },
  {
    languageOptions: {
      globals: {
        process: "readonly",
        Response: "readonly",
        Request: "readonly",
        Headers: "readonly",
        fetch: "readonly",
        document: "readonly",
        window: "readonly",
        console: "readonly",
      },
    },
  },

  js.configs.recommended,

  // Astro
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
          topLevelAwait: true,
        },
      },
    },
    plugins: {
      astro,
    },
    rules: {
      ...astro.configs.recommended.rules,
    },
  },

  // TypeScript + React
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...(tseslint.configs.recommended.rules ?? {}),
      ...(react.configs.recommended.rules ?? {}),
      ...(reactHooks.configs.recommended.rules ?? {}),
      ...(jsxA11y.configs.recommended.rules ?? {}),
      "@typescript-eslint/no-explicit-any": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
