## sastraxi.com

My personal website. [Check out the deployed version](https://sastraxi.com).

Static site built with [Eleventy](https://www.11ty.dev/). No client-side
framework — just Nunjucks templates, one stylesheet, and a sprinkle of vanilla
JS for the animated hero.

### Develop

```sh
npm install
npm start      # eleventy --serve, live reload at http://localhost:8080
```

### Build

```sh
npm run build  # outputs static site to ./_site
```

### Layout

- `src/index.njk` — home page
- `src/resume.njk` — Resume
- `src/_includes/base.njk` — shared HTML shell
- `src/_includes/hero-banner.njk` — static ASCII fallback for the hero
- `src/css/style.css` — the whole theme (dark default, light + print via media queries)
- `src/js/hero.js` — animated "matrix" hero (decorative, respects `prefers-reduced-motion`)

### Deploy

Netlify is configured via `netlify.toml` (build `npm run build`, publish `_site`).
