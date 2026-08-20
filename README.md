# Agastya Elite Estate

A responsive, static real-estate advisory experience for Pune homebuyers. The project is designed for GitHub Pages or any standard static host.

## Run locally

```bash
pnpm install
pnpm dev
```

## Build for GitHub Pages

```bash
pnpm build
```

Deploy the generated `dist/public` directory using GitHub Pages. Before deployment, replace the placeholder URL in `client/public/robots.txt` and `client/public/sitemap.xml` with the final domain.

## Content configuration

Update `client/src/lib/siteConfig.ts` to change business details, hero content, property showcases, locations, and FAQ content. Contact information and formal MahaRERA registration details should be supplied and verified by the business before launch.

## Preview functionality

The consultation form provides an in-browser confirmation only. Connect it to an approved form service or Google Apps Script endpoint before a live launch.
