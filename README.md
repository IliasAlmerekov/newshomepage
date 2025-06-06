# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Purpose

This repository contains an Astro-based implementation of the News Homepage challenge. It also serves as a minimal reference project showing how to combine Astro with the [Storyblok](https://www.storyblok.com) headless CMS for dynamic content.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Setup](#setup)
- [Storyblok integration](#storyblok-integration)
- [Available commands](#available-commands)
- [Environment variables](#environment-variables)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [License](#license)
- [Contributing](#contributing)
- [Author](#author)
- [Common Commit Types (Conventional Commits)](#common-commit-types-conventional-commits)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./public/images/desktop-design.jpg)

### Links

- Live Site URL: [newshomepage](https://newshomepage-gamma.vercel.app/)

## Setup

1. Ensure you are using **Node.js 20** or newer.
2. Clone the repository and install dependencies:

   ```bash
   npm install
   ```

3. Create an `.env` file based on the variables described in [Environment variables](#environment-variables).
4. Start the development server:

   ```bash
   npm run dev
   ```

The site will be available at <https://localhost:4321/> by default.

## Storyblok integration

This project uses the `@storyblok/astro` package to fetch content from Storyblok. Components defined in the `astro.config.mjs` file map Storyblok blocks to local Astro components so editors can manage the content in Storyblok while the frontend is built with Astro.

## Available commands

```bash
npm run dev       # Start a local development server
npm run build     # Build the production version of the site
npm run preview   # Preview the production build locally
npm run eslint    # Lint TypeScript/JavaScript files
npm run stylelint # Lint CSS files
```

## Environment variables

The following variables must be present in an `.env` file in the project root:

- `STORYBLOK_TOKEN` – API token from your Storyblok space
- `STORYBLOK_IS_PREVIEW` – set to `yes` to enable preview mode

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This project helped me improve my layout skills and responsive design techniques. I practiced using grid and flexbox to structure components and applied a clean, semantic HTML structure.

### Continued development

I want to improve my accessibility knowledge and ensure my projects meet WCAG standards.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)

## License

This project is released under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request. Commit messages should follow the [Conventional Commits](https://www.conventionalcommits.org) specification.

## Author

- GitHub - [@IliasAlmerekov](https://github.com/IliasAlmerekov)
- Frontend Mentor - [@IliasAlmerekov](https://www.frontendmentor.io/profile/IliasAlmerekov)

## Common Commit Types (Conventional Commits)

Use the following types for your commit messages:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes only
- **style**: Code style changes (formatting, no logic changes)
- **refactor**: Code restructuring without changing functionality
- **test**: Adding or updating tests
- **chore**: Maintenance tasks (e.g., configs, build tools)
