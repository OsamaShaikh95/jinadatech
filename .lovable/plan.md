# Rebrand cleanup: 4NodeTech → Jinada Tech

Most of the rebrand is already done. A scan of the codebase finds only two remaining categories of stale references — old email addresses and the old preview-domain sitemap URL. No other files (envs, manifest, structured data, OG tags, canonical, route titles, footer, logo, llms.txt headings) contain the old brand.

## Remaining references to replace

**Old email `info@4nodetech.com` → `info@jinadatech.com`** (both `href="mailto:"` and visible text)
- `src/components/site/Footer.tsx` (line 27)
- `src/routes/contact.tsx` (lines 134, 136, 154 — incl. the "Strategy call" mailto)
- `src/routes/index.tsx` (lines 170, 171)
- `public/llms.txt` (line 14)

**Old sitemap host `https://fournodetech.lovable.app/sitemap.xml` → `https://jinadatech.com/sitemap.xml`**
- `public/robots.txt` (line 4)

## What's already correct (no change needed)

- Company name, footer copyright, logo alt — already "Jinada Tech"
- Site title, meta description, OG title/description/site_name, theme-color — `src/routes/__root.tsx`
- JSON-LD Organization + WebSite (name, url, logo, sameAs) — `src/routes/__root.tsx`
- Per-route titles/descriptions/OG — about, contact, portfolio, services, index
- Canonical/og:url on contact — already `/contact` (relative)
- Sitemap `BASE_URL` — already `https://jinadatech.com`
- Footer external link — already `jinadatech.com`
- Favicon + apple-touch-icon — point to `/jinada-mark.png`
- `public/llms.txt` heading + website URL — already Jinada
- No `4node*` references in `.env`, `package.json`, vite config, `start.ts`, components, or any other source file
- No `manifest.json`, `metadata.ts`, or social-media link blocks exist in the project (nothing to update there)
- No Privacy/Terms route files exist yet (nothing to update there)

## Report after implementation

After applying the edits above, the final report will list:
- Files modified: `src/components/site/Footer.tsx`, `src/routes/contact.tsx`, `src/routes/index.tsx`, `public/llms.txt`, `public/robots.txt`
- Replacements: 5× `info@4nodetech.com` → `info@jinadatech.com`; 1× `fournodetech.lovable.app` → `jinadatech.com` in the `Sitemap:` directive
- Remaining manual review: none expected — a fresh `grep -ri '4node\|fournode'` should return no matches

## Note on preview domain

The Lovable preview URL (`*.lovable.app`) is unrelated to the brand and stays as-is; only the `Sitemap:` directive (intended for crawlers of the production site) is updated to `jinadatech.com`.
