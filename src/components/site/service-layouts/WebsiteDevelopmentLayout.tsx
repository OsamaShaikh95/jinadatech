import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Globe, ShoppingBag, FileText, Layers, Newspaper, Building2 } from "lucide-react";
import { Layout } from "../Layout";
import { Breadcrumbs } from "../Breadcrumbs";
import { FAQ } from "../FAQ";
import { type ServicePageData, buildServiceLd, buildFaqLd } from "./types";

/**
 * WEBSITE DEVELOPMENT
 * Sections (unique to this page):
 *   1. Hero
 *   2. Interactive Browser Mockup
 *   3. Website Types Grid
 *   4. Technology Stack Section
 *   5. Website Showcase Gallery
 *   6. Development Process Timeline
 *   7. FAQ
 *   8. CTA
 */

const WEBSITE_TYPES = [
  { icon: Building2, title: "Corporate Sites", desc: "Brand-led marketing presence with credibility-first design." },
  { icon: ShoppingBag, title: "E-Commerce", desc: "Headless storefronts wired to Shopify, Stripe, or custom carts." },
  { icon: FileText, title: "Landing Pages", desc: "High-converting single-page campaigns for paid traffic." },
  { icon: Newspaper, title: "Editorial / Blog", desc: "Content-heavy publications with rich CMS workflows." },
  { icon: Layers, title: "SaaS Marketing", desc: "Product sites with docs, changelogs, and pricing logic." },
  { icon: Globe, title: "Multi-Region", desc: "i18n, localized routing, and CDN edge delivery." },
];

const TECH_STACK = [
  { group: "Frontend", items: ["React 19", "TanStack Start", "Next.js 15", "TypeScript", "Tailwind v4"] },
  { group: "CMS", items: ["Sanity", "Payload", "Contentful", "Storyblok"] },
  { group: "Backend", items: ["Node", "tRPC", "Hono", "Postgres", "Supabase"] },
  { group: "Infra", items: ["Vercel", "Cloudflare", "AWS", "Edge Functions"] },
];

export function WebsiteDevelopmentLayout(d: ServicePageData) {
  const accent = d.accent;
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 8%, transparent)`;
  const style = { ["--svc-accent" as any]: accent } as React.CSSProperties;

  return (
    <Layout>
      <article style={style} className="relative">
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />

        {/* 1. HERO */}
        <header className="relative pt-24 pb-12">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[760px] h-[560px] rounded-full blur-[140px] opacity-25 pointer-events-none" style={{ background: accent }} />
          <div className="mx-auto max-w-5xl px-4 text-center relative">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: d.serviceName, href: `/services/${d.slug}` }]} />
            <div className="text-[11px] font-mono uppercase tracking-[0.3em] mt-8 mb-6" style={{ color: accent }}>{d.eyebrow}</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">{d.h1}</h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">{d.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition cursor-pointer" style={{ background: accent }}>Start a Project <ArrowRight size={16} /></Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border hover:bg-white/5 transition cursor-pointer" style={{ borderColor: soft }}>Schedule a Consultation</Link>
            </div>
          </div>
        </header>

        {/* 2. INTERACTIVE BROWSER MOCKUP — full-bleed */}
        <section className="mx-auto max-w-6xl px-4 pb-24">
          <BigBrowserMockup accent={accent} url={`jinadatech.com/${d.slug}`} />
        </section>

        {/* 3. WEBSITE TYPES GRID */}
        <section className="border-y" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-7xl px-4 py-20">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl">Every kind of website we build.</h2>
              <p className="text-sm text-muted-foreground max-w-sm">From single-page launches to complex multi-region platforms.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden border" style={{ borderColor: soft, background: soft }}>
              {WEBSITE_TYPES.map((t) => {
                const Icon = t.icon;
                return (
                  <div key={t.title} className="p-8 bg-background hover:bg-card/60 transition group">
                    <Icon size={28} style={{ color: accent }} />
                    <h3 className="mt-5 text-lg font-semibold">{t.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. TECH STACK */}
        <section className="mx-auto max-w-7xl px-4 py-24">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>Technology</div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">A modern, boring-on-purpose stack.</h2>
              <p className="mt-4 text-muted-foreground">Battle-tested tools your team — or any future team — can actually maintain.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {TECH_STACK.map((g) => (
                <div key={g.group} className="rounded-2xl border p-6" style={{ borderColor: soft, background: softBg }}>
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: accent }}>{g.group}</div>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((i) => (
                      <span key={i} className="text-xs px-3 py-1.5 rounded-full border bg-background" style={{ borderColor: soft }}>{i}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. SHOWCASE GALLERY — masonry of browser frames */}
        <section className="border-t" style={{ borderColor: soft }}>
          <div className="mx-auto max-w-7xl px-4 py-24">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">Recent work, conceptually.</h2>
            <p className="text-muted-foreground mb-12 max-w-xl">Visual snapshots of the kinds of products we ship — each one tuned to its industry.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {d.included.slice(0, 6).map((item, i) => (
                <MiniBrowserTile key={item.title} accent={accent} title={item.title} desc={item.desc} variant={i % 3} />
              ))}
            </div>
          </div>
        </section>

        {/* 6. DEVELOPMENT TIMELINE — vertical with rail */}
        <section className="border-t" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-4xl px-4 py-24">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12 text-center">From kickoff to launch day.</h2>
            <ol className="relative border-l-2 space-y-10 pl-8" style={{ borderColor: soft }}>
              {d.process.map((p) => (
                <li key={p.title} className="relative">
                  <span className="absolute -left-[42px] top-0 w-6 h-6 rounded-full grid place-items-center text-[10px] font-mono font-semibold text-background" style={{ background: accent }}>{p.step}</span>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground">{p.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="border-t" style={{ borderColor: soft }}>
          <div className="mx-auto max-w-4xl px-4 py-24">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-10 text-center">Frequently asked.</h2>
            <FAQ items={d.faqs} title="" />
          </div>
        </section>

        {/* 8. CTA */}
        <section className="border-t relative overflow-hidden" style={{ borderColor: soft }}>
          <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 100%, ${accent}, transparent 60%)` }} />
          <div className="mx-auto max-w-3xl px-4 py-24 text-center relative">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Ready to build your next website?</h2>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition cursor-pointer" style={{ background: accent }}>
              Schedule a Free Consultation <ArrowRight size={16} />
            </Link>
            <div className="mt-10 flex flex-wrap gap-2 justify-center">
              {d.related.map((r) => (
                <Link key={r.href} to={r.href} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm hover:bg-white/5 transition cursor-pointer" style={{ borderColor: soft }}>
                  {r.title} <ArrowUpRight size={12} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceLd(d)) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqLd(d)) }} />
      </article>
    </Layout>
  );
}

function BigBrowserMockup({ accent, url }: { accent: string; url: string }) {
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 10%, transparent)`;
  return (
    <div className="relative">
      <div className="absolute -inset-10 rounded-[2.5rem] blur-3xl opacity-30 pointer-events-none" style={{ background: accent }} />
      <div className="relative rounded-2xl border overflow-hidden bg-card/60 backdrop-blur shadow-2xl" style={{ borderColor: soft }}>
        <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: soft, background: softBg }}>
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-green-400/80" />
          <div className="flex-1 mx-3 px-3 py-1.5 rounded-md text-[11px] font-mono text-muted-foreground border" style={{ borderColor: soft, background: "rgba(255,255,255,0.02)" }}>
            <span style={{ color: accent }}>https://</span>{url}
          </div>
        </div>
        <div className="aspect-[16/9] p-10 grid grid-cols-12 gap-6" style={{ background: `linear-gradient(180deg, transparent, ${softBg})` }}>
          <div className="col-span-7 flex flex-col justify-center gap-4">
            <div className="h-3 w-24 rounded-full" style={{ background: accent, opacity: 0.6 }} />
            <div className="h-8 w-4/5 rounded-lg bg-foreground/30" />
            <div className="h-8 w-3/5 rounded-lg bg-foreground/30" />
            <div className="h-3 w-3/4 rounded-full bg-foreground/15 mt-2" />
            <div className="h-3 w-2/3 rounded-full bg-foreground/15" />
            <div className="flex gap-3 mt-4">
              <div className="h-10 w-32 rounded-full" style={{ background: accent }} />
              <div className="h-10 w-32 rounded-full border" style={{ borderColor: soft }} />
            </div>
          </div>
          <div className="col-span-5 grid grid-rows-3 gap-3">
            <div className="rounded-xl border" style={{ borderColor: soft, background: softBg }} />
            <div className="rounded-xl border" style={{ borderColor: soft, background: softBg }} />
            <div className="rounded-xl border" style={{ borderColor: soft, background: softBg }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniBrowserTile({ accent, title, desc, variant }: { accent: string; title: string; desc: string; variant: number }) {
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 10%, transparent)`;
  return (
    <div className="rounded-2xl border overflow-hidden bg-card/40 backdrop-blur group hover:-translate-y-1 transition" style={{ borderColor: soft }}>
      <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ borderColor: soft }}>
        <span className="w-2 h-2 rounded-full bg-red-400/70" />
        <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
        <span className="w-2 h-2 rounded-full bg-green-400/70" />
      </div>
      <div className="aspect-[16/10] p-5 flex flex-col gap-2" style={{ background: `radial-gradient(circle at ${variant * 50}% 0%, ${softBg}, transparent 70%)` }}>
        <div className="h-2 w-20 rounded-full" style={{ background: accent, opacity: 0.7 }} />
        <div className="h-3 w-3/4 rounded-full bg-foreground/25" />
        <div className="h-3 w-1/2 rounded-full bg-foreground/15" />
        <div className="mt-auto grid grid-cols-3 gap-2">
          <div className="aspect-square rounded-md" style={{ background: softBg }} />
          <div className="aspect-square rounded-md" style={{ background: softBg }} />
          <div className="aspect-square rounded-md" style={{ background: softBg }} />
        </div>
      </div>
      <div className="p-5 border-t" style={{ borderColor: soft }}>
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{desc}</p>
      </div>
    </div>
  );
}
