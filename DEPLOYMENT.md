# La Parada del Arriero — Astro Migration Status & Deployment Plan

## What Was Done (Migration — COMPLETE)

The restaurant website was migrated from a 2012 static site (Bootstrap 2.x, jQuery, no responsive design) to **Astro v6 + Tailwind CSS v4**.

### Completed Work
- **28 pages** generated: 9 pages x 3 languages (ES/EN/DE) + 1 root redirect
- **Tech stack**: Astro v6, Tailwind CSS v4 (via `@tailwindcss/vite`), GLightbox
- **Dark theme preserved** with `#09C` accent, dark backgrounds
- **Fully responsive**: mobile hamburger menu, sticky phone bar, desktop slideshow
- **i18n**: `/es/`, `/en/`, `/de/` prefixes, auto-redirect from `/` via `navigator.language`
- **CSS-only slideshow** (replaces jQuery Vegas), `<details>/<summary>` menu accordion (replaces jQuery accordion)
- **Google Maps iframe** (no API key), GLightbox gallery (replaces prettyPhoto)
- **GitHub Actions deploy workflow** at `.github/workflows/deploy.yml`
- **Build verified**: `npm run build` succeeds, all 28 routes resolve, `dist/CNAME` present

### Key File Locations
| Area | Path |
|------|------|
| Astro config | `astro.config.mjs` |
| Tailwind theme | `src/styles/global.css` |
| Layouts | `src/layouts/BaseLayout.astro`, `src/layouts/PageLayout.astro` |
| Components | `src/components/` (Navbar, Footer, Slideshow, Gallery, etc.) |
| i18n strings | `src/i18n/ui.ts`, `src/i18n/utils.ts` |
| Content (ES) | `src/i18n/content/es/index.ts` |
| Content (EN) | `src/i18n/content/en/index.ts` |
| Content (DE) | `src/i18n/content/de/index.ts` |
| Spanish pages | `src/pages/es/*.astro` |
| English pages | `src/pages/en/*.astro` |
| German pages | `src/pages/de/*.astro` |
| Root redirect | `src/pages/index.astro` |
| Deploy workflow | `.github/workflows/deploy.yml` |
| Images | `public/images/` (slideshow/, gallery/, entorno/) |
| CNAME | `public/CNAME` → `www.laparadadelarriero.es` |
| Middleware | `src/middleware.ts` (no-op, required by Astro manual i18n routing) |

### Local Development
```bash
npm install    # Install dependencies (first time only)
npm run dev    # Dev server with hot reload
npm run build  # Build to dist/
npm run preview # Preview built site
```

---

## What Remains (Deployment — NOT YET DONE)

### Phase 1: Pre-deployment Review & Testing
1. **Preview locally**: `npm run build && npm run preview` — visually check all pages
2. **Test mobile**: check at 375px width in browser devtools
3. **Test i18n**: change browser language and verify redirect works
4. **Test gallery**: verify GLightbox opens/closes
5. **Test map**: verify Google Maps iframe loads on contacto page

### Phase 2: Legacy File Cleanup
Before deploying, remove old files from the repo (they bloat it; git history preserves them):

**Files/dirs to delete from master:**
- `static/` (old Bootstrap, jQuery, CSS, JS)
- `media/` (old Django Filer images — already copied to `public/images/`)
- `el-restaurante/index.html`
- `carta/index.html`
- `galeria-de-imagnes/index.html`
- `nuestro-entorno/index.html`
- `informacion-y-reservas/index.html`
- `enlaces-interes/index.html`
- `aviso-legal/index.html`
- `planderecuperacion/index.html`
- Root `index.html` (replaced by `src/pages/index.astro`)
- Root `CNAME` (replaced by `public/CNAME`)
- Root `robots.txt` (Astro can generate this)
- Root `sitemap.xml` (Astro can generate this)
- Root `.nojekyll` (not needed with GitHub Actions deploy)

**Optionally preserve first:**
```bash
git checkout -b legacy   # create backup branch
git push origin legacy
git checkout master
# then delete old files
```

### Phase 3: Deploy

#### Step 1: Change GitHub Pages source (one-time, manual in browser)
1. Go to repo on GitHub: **Settings → Pages**
2. Under **"Build and deployment" → Source**, change from **"Deploy from a branch"** to **"GitHub Actions"**

#### Step 2: Commit and push
```bash
git add -A
git commit -m "Migrate to Astro + Tailwind with i18n (ES/EN/DE)"
git push origin master
```

#### Step 3: Verify deployment
1. Go to repo **Actions** tab — workflow should trigger automatically
2. Wait for green checkmark (< 1 minute)
3. Visit `https://www.laparadadelarriero.es` — should redirect to `/es/`
4. Visit `https://www.laparadadelarriero.es/en/` — English version
5. Visit `https://www.laparadadelarriero.es/de/` — German version

### How It Works (for reference)
GitHub Pages supports **GitHub Actions deployment** — the workflow at `.github/workflows/deploy.yml` runs:
```
push to master → checkout → npm ci → npm run build → upload dist/ → deploy to Pages
```
Fully automatic. No need to build locally or manage `dist/`. Every push to `master` auto-deploys.

---

## Future Improvements (Optional, not planned)
- Add Google Analytics GA4 (legacy `_gaq` was removed; no GA4 tag added yet)
- Optimize images (WebP conversion, srcset for responsive images)
- Add Open Graph / social media meta tags
- Add sitemap.xml (Astro has `@astrojs/sitemap` integration)
- Add 404 page (`src/pages/404.astro`)
