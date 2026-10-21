# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for "La Parada del Arriero", a restaurant located at Puerto del Pico (Spain). Hosted on GitHub Pages at `www.laparadadelarriero.es` (configured via CNAME).

## Architecture

Built with **Astro v6 + Tailwind CSS v4**. Generates 28 static pages: 9 pages × 3 languages (ES/EN/DE) + 1 root redirect.

### Tech Stack
- **Astro v6** — static site generator
- **Tailwind CSS v4** — via `@tailwindcss/vite` plugin
- **GLightbox** — lightbox gallery (replaces legacy prettyPhoto)
- **No jQuery, no Bootstrap** — CSS-only slideshow, `<details>/<summary>` accordion

### Key Directories
| Area | Path |
|------|------|
| Astro config | `astro.config.mjs` |
| Tailwind theme | `src/styles/global.css` |
| Layouts | `src/layouts/BaseLayout.astro`, `src/layouts/PageLayout.astro` |
| Components | `src/components/` (Navbar, Footer, Slideshow, Gallery, etc.) |
| i18n strings | `src/i18n/ui.ts`, `src/i18n/utils.ts` |
| Content (ES/EN/DE) | `src/i18n/content/{es,en,de}/index.ts` |
| Pages | `src/pages/{es,en,de}/*.astro` + `src/pages/index.astro` (redirect) |
| Deploy workflow | `.github/workflows/deploy.yml` |
| Images | `public/images/` (slideshow/, gallery/, entorno/) |
| CNAME | `public/CNAME` |

### i18n
- URL structure: `/es/`, `/en/`, `/de/` prefixes
- Root `/` auto-redirects based on `navigator.language`
- UI strings in `src/i18n/ui.ts`, page content in `src/i18n/content/{lang}/index.ts`
- Astro manual i18n routing (middleware at `src/middleware.ts`)

### Design
- Dark theme with `#09C` accent color
- Fully responsive: mobile hamburger menu, sticky phone bar
- CSS-only background slideshow on homepage

## Development

```bash
npm install      # Install dependencies (first time)
npm run dev      # Dev server with hot reload
npm run build    # Build to dist/
npm run preview  # Preview built site
```

## Deployment

**IMPORTANT: Deployment has NOT been completed yet. See `DEPLOYMENT.md` for the full deployment plan.**

The deploy workflow (`.github/workflows/deploy.yml`) will auto-deploy on push to `master` once GitHub Pages source is changed to "GitHub Actions" in repo settings. Legacy files still need cleanup before deploying — see `DEPLOYMENT.md` Phase 2.

## Legacy Files (to be removed)

The repo still contains old static site files from before the Astro migration. These are **not used** by the Astro build but remain in the repo:
- `static/` — old Bootstrap 2.x, jQuery, CSS, JS
- `media/` — old Django Filer images (copied to `public/images/`)
- `index.html`, `el-restaurante/`, `carta/`, `galeria-de-imagnes/`, `nuestro-entorno/`, `informacion-y-reservas/`, `enlaces-interes/`, `aviso-legal/`, `planderecuperacion/` — old HTML pages

These should be deleted before deploying. See `DEPLOYMENT.md` Phase 2 for details.

## Key Conventions

- Content is in Spanish (primary), English, and German
- All pages share layouts: `BaseLayout.astro` (HTML shell) → `PageLayout.astro` (navbar + footer)
- Images are in `public/images/` and referenced as `/images/...` in components
