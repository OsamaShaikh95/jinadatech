## Goal
Comprehensive SEO upgrade for Jinada Tech: structured data, dedicated service pages, FAQs, breadcrumbs, alt tags, and metadata polish.

## Changes

### 1. Root metadata (`src/routes/__root.tsx`)
- Add `LocalBusiness` JSON-LD with address (Hutto, TX, USA), phone (+1-512-387-1981), email, areaServed, sameAs.
- Expand `Organization` schema with `contactPoint`, `address`, `telephone`, `email`.
- Add `twitter:site`, `twitter:image` defaults.
- Keep canonical OUT of root (leaf-only rule).

### 2. Canonical + OG URL absolute
- Update all leaf routes (`/`, `/about`, `/services`, `/contact`) to use absolute `https://jinadatech.com/...` URLs in `canonical` and `og:url`.
- Add `og:image` and `twitter:image` to each leaf (using `/jinada-mark.png` for now — note: a proper 1200x630 share image is recommended later).

### 3. Dedicated service pages (NEW)
Create 4 routes + keep `/services` as overview hub linking to them:

- `src/routes/services.website-development.tsx` → `/services/website-development`
- `src/routes/services.mobile-app-development.tsx` → `/services/mobile-app-development`
- `src/routes/services.seo-marketing.tsx` → `/services/seo-marketing`
- `src/routes/services.ai-automation.tsx` → `/services/ai-automation`

Each page contains:
- Unique `<h1>`, meta title (<60 char), meta description (<160 char), OG/Twitter tags, canonical.
- Hero, "What you get" bullets, process steps, tech/tools, CTA.
- Breadcrumb nav (Home › Services › [Page]) + `BreadcrumbList` JSON-LD.
- `Service` JSON-LD (provider = Jinada Tech).
- FAQ section (4–6 Q&As, drafted) + `FAQPage` JSON-LD.
- Internal links to related services + Contact CTA.

Update `/services` hub:
- Convert each card into a `<Link>` to its dedicated page.
- Add BreadcrumbList JSON-LD (Home › Services).

### 4. Sitemap (`src/routes/sitemap[.]xml.tsx`)
Add the 4 new service URLs with `priority: 0.85`, `changefreq: monthly`.

### 5. robots.txt
Already correct — leave as-is.

### 6. Breadcrumb component
New `src/components/site/Breadcrumbs.tsx` — visual + emits matching JSON-LD via props. Used on About, Contact, Services, and all 4 service pages.

### 7. FAQ component
New `src/components/site/FAQ.tsx` — accordion-style Q&A list + emits `FAQPage` JSON-LD. Used on each service page and (optionally) Contact.

### 8. Heading hierarchy audit
Ensure exactly one `<h1>` per page:
- `/` — current hero is h1 ✓
- `/about`, `/services`, `/contact` — `SectionHeader as="h1"` already ✓
- Confirm no duplicate h1s sneak in via new components (FAQ/Breadcrumbs use h2/h3).

### 9. Image alt tags
Audit components: `Logo.tsx`, any `<img>` in Footer/Nav/InteractiveDots. Add descriptive `alt` where missing (e.g., logo → "Jinada Tech logo"). Decorative imgs get `alt=""`.

### 10. Core Web Vitals
- Add `rel="preload"` for the LCP element on `/` (hero is text, so preload the brand font subset already handled by `preconnect`).
- Add `fetchpriority="high"` to logo `<img>` in Nav, `loading="lazy"` to below-the-fold images.
- Verify no layout shift from `InteractiveDots` (already absolute-positioned).

### 11. Internal linking
- Services hub → 4 service pages.
- Each service page → 2 related service pages + Contact + About.
- About → Services hub + Contact.
- Home services grid → dedicated service pages (not just `/services`).
- Footer → add links to all 4 service pages.

### 12. Drafted FAQ topics (samples)
- **Website Development**: timeline, tech stack, ownership, CMS, SEO included, post-launch support.
- **Mobile App Development**: iOS/Android, React Native vs native, App Store submission, cost ranges, MVP timeline.
- **SEO & Marketing**: timeline to see results, included channels, reporting cadence, content production, local SEO.
- **AI Automation**: example use cases, integration with existing tools, data privacy, ongoing maintenance, cost model.

## Files touched
- Modified: `src/routes/__root.tsx`, `src/routes/index.tsx`, `src/routes/about.tsx`, `src/routes/services.tsx`, `src/routes/contact.tsx`, `src/routes/sitemap[.]xml.tsx`, `src/components/site/Nav.tsx`, `src/components/site/Footer.tsx`, `src/components/site/Logo.tsx`
- New: 4 service route files, `src/components/site/Breadcrumbs.tsx`, `src/components/site/FAQ.tsx`

## Out of scope
- A custom 1200×630 OG share image (recommend generating later).
- Blog/articles routes.
- Real-world Core Web Vitals measurement (would need Lighthouse run post-deploy).