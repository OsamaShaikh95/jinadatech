## Rebrand to Jinada Tech

Full visual + copy rebrand across the site. No structural/route changes.

### 1. Logo & favicon
- Use the uploaded logo as the new brand mark.
- Save via Lovable Assets from `/mnt/user-uploads/WhatsApp_Image_2026-06-11_at_8.58.48_PM.jpeg` → `src/assets/jinada-logo.png.asset.json`.
- Also generate a **square transparent-PNG mark** (wing-only, no text) for the nav `Logo` component and favicon, saved to `public/jinada-mark.png` so it's served at a stable URL.
- Update `Logo.tsx` to use the new mark + render wordmark "Jinada<span>Tech</span>".
- Replace `public/4node-logo.png` references; set favicon link in `__root.tsx` head.

### 2. Color palette (src/styles.css)
Swap the existing oklch neon palette for the new spec:
- `--background`: #050816
- `--foreground`: #FFFFFF
- `--primary`: #1E6FFF (electric blue)
- Accent glow: soft blue (`rgba(30, 111, 255, 0.5)`)
- Retire magenta/purple neon tokens — replace `--neon-cyan/magenta/purple` with blue-only variants (`--brand-blue`, `--brand-blue-soft`, `--brand-blue-glow`) so all existing utilities (`glow-cyan`, `text-gradient-brand`, `btn-primary-glow`) keep working but render in the new blue-on-dark scheme.
- `--gradient-brand`: linear-gradient(135deg, #1E6FFF 0%, #5B9BFF 100%) — drop the magenta stop.
- Update radial background washes in `body` to blue-only.
- Light mode tokens updated to match (kept, but tuned to blue).

### 3. Typography
- Keep Space Grotesk (display) + Inter (body) — already matches "clean modern sans-serif, large bold headlines". No font swap needed.

### 4. Copy changes
- **Global**: every "4NodeTech" → "Jinada Tech"; "4nodetech.com" links/text → "jinadatech.com" placeholder (keep `info@4nodetech.com` mailto unless you want it changed — flagged below).
- **Hero (`src/routes/index.tsx`)**:
  - Badge: "Build. Automate. Scale."
  - H1: "Building Digital Products, AI Solutions, and Growth Systems for Modern Businesses."
  - Sub: "We help businesses launch, automate, and scale through websites, mobile apps, AI, SEO, and digital marketing."
  - Primary CTA: "Start a Project" → /contact
  - Secondary CTA: "Explore Services" → /services
- **Services page**: trim/rename to the 6 requested services (Web Dev, Mobile Apps, AI Automation, SEO & Marketing, Social Media Management, Business Growth Consulting). Drops Shopify, Branding, Cloud/DevOps cards.
- **About page**: rewrite positioning paragraph — "Jinada Tech is a technology partner helping startups and local businesses grow online through modern digital solutions."
- **Footer**: new tagline, updated nav, updated company name in copyright.
- **Nav CTA**: "Get a Free Quote" → "Start a Project".
- **All `head()` meta titles/descriptions** across routes updated to Jinada Tech.

### 5. Files touched
- `src/styles.css` (palette + gradients)
- `src/components/site/Logo.tsx`
- `src/components/site/Nav.tsx` (CTA label)
- `src/components/site/Footer.tsx`
- `src/components/site/BackToTop.tsx` (glow color)
- `src/routes/__root.tsx` (favicon + default meta)
- `src/routes/index.tsx` (hero + sections)
- `src/routes/services.tsx` (6 services)
- `src/routes/about.tsx`
- `src/routes/contact.tsx`
- `src/routes/portfolio.tsx`
- `src/routes/sitemap[.]xml.tsx` (domain refs if any)
- `public/jinada-mark.png` (new) + asset pointer for full logo
- `package.json` `name` field

### Questions before I build
1. **Email**: keep `info@4nodetech.com` as the contact inbox, or switch to a new Jinada address (e.g. `info@jinadatech.com`)? The form-to-email setup we did earlier is tied to whichever address you confirm.
2. **Domain references** (footer link, sitemap, SEO canonicals): use `jinadatech.com` as placeholder, or do you have the actual domain?
3. **Logo mark**: use the uploaded wing mark cropped from your image, or want me to generate a fresh clean vector-style PNG of the same concept (transparent background, optimized for small sizes / favicon)?
