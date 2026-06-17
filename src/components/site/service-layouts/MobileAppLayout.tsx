import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Apple, Smartphone, Check, Download, Star } from "lucide-react";
import { Layout } from "../Layout";
import { Breadcrumbs } from "../Breadcrumbs";
import { FAQ } from "../FAQ";
import { type ServicePageData, buildServiceLd, buildFaqLd } from "./types";

/**
 * MOBILE APP DEVELOPMENT
 * Sections:
 *   1. Hero
 *   2. Phone Mockups (trio arc)
 *   3. App Screens Carousel (horizontal scroll)
 *   4. iOS vs Android Comparison
 *   5. Development Roadmap (vertical zigzag)
 *   6. Launch & App Store Section
 *   7. FAQ
 *   8. CTA
 */

const PLATFORM_MATRIX = [
  { row: "Language", ios: "Swift / SwiftUI", android: "Kotlin / Compose", cross: "TypeScript / React Native" },
  { row: "Performance", ios: "Native", android: "Native", cross: "Near-native" },
  { row: "Time to market", ios: "Slowest", android: "Slowest", cross: "Fastest" },
  { row: "Code reuse", ios: "0%", android: "0%", cross: "~90%" },
  { row: "Best for", ios: "Premium / hardware-heavy", android: "Mass market / Asia", cross: "Most products" },
];

export function MobileAppLayout(d: ServicePageData) {
  const accent = d.accent;
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 10%, transparent)`;
  const style = { ["--svc-accent" as any]: accent } as React.CSSProperties;

  return (
    <Layout>
      <article style={style} className="relative">
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />

        {/* 1. HERO + 2. PHONE MOCKUPS */}
        <header className="relative pt-24 pb-32 overflow-hidden">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full blur-[160px] opacity-25 pointer-events-none" style={{ background: accent }} />
          <div className="mx-auto max-w-7xl px-4 relative">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: d.serviceName, href: `/services/${d.slug}` }]} />
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center mt-8">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.3em] mb-6" style={{ color: accent }}>{d.eyebrow}</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">{d.h1}</h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">{d.intro}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition cursor-pointer" style={{ background: accent }}>Start a Project <ArrowRight size={16} /></Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border hover:bg-white/5 transition cursor-pointer" style={{ borderColor: soft }}>Book a Demo</Link>
                </div>
                <div className="mt-10 flex items-center gap-6">
                  <div className="flex items-center gap-2 text-sm"><Apple size={18} /> iOS</div>
                  <div className="flex items-center gap-2 text-sm"><Smartphone size={18} /> Android</div>
                  <div className="flex items-center gap-2 text-sm" style={{ color: accent }}><span className="w-2 h-2 rounded-full" style={{ background: accent }} /> React Native</div>
                </div>
              </div>

              {/* Phone trio */}
              <div className="relative h-[540px] hidden lg:block">
                <Phone accent={accent} className="absolute left-0 top-10 -rotate-12" />
                <Phone accent={accent} className="absolute left-1/2 -translate-x-1/2 top-0 z-10 scale-110" featured />
                <Phone accent={accent} className="absolute right-0 top-10 rotate-12" />
              </div>
            </div>
          </div>
        </header>

        {/* 3. APP SCREENS CAROUSEL */}
        <section className="border-y" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-7xl px-4 py-20">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl">Crafted screen by screen.</h2>
              <p className="text-sm text-muted-foreground">Swipe to explore deliverables →</p>
            </div>
          </div>
          <div className="overflow-x-auto pb-16 -mt-6">
            <div className="flex gap-6 px-4 lg:px-12 snap-x snap-mandatory" style={{ width: "max-content" }}>
              {d.included.map((item, i) => (
                <ScreenCard key={item.title} accent={accent} index={i + 1} total={d.included.length} title={item.title} desc={item.desc} />
              ))}
            </div>
          </div>
        </section>

        {/* 4. iOS vs ANDROID COMPARISON */}
        <section className="mx-auto max-w-7xl px-4 py-24">
          <div className="max-w-2xl mb-12">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>Platform Strategy</div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">iOS, Android, or both?</h2>
            <p className="mt-4 text-muted-foreground">Three honest paths — we'll recommend the one that fits your audience, budget, and timeline.</p>
          </div>
          <div className="rounded-2xl border overflow-hidden" style={{ borderColor: soft }}>
            <div className="grid grid-cols-4 text-sm font-mono uppercase tracking-wider text-xs" style={{ background: softBg }}>
              <div className="p-4 border-r" style={{ borderColor: soft }}>Dimension</div>
              <div className="p-4 border-r flex items-center gap-2" style={{ borderColor: soft }}><Apple size={14} /> iOS Native</div>
              <div className="p-4 border-r flex items-center gap-2" style={{ borderColor: soft }}><Smartphone size={14} /> Android Native</div>
              <div className="p-4 flex items-center gap-2" style={{ color: accent }}><span className="w-2 h-2 rounded-full" style={{ background: accent }} /> React Native</div>
            </div>
            {PLATFORM_MATRIX.map((r, i) => (
              <div key={r.row} className={`grid grid-cols-4 text-sm border-t`} style={{ borderColor: soft, background: i % 2 ? "transparent" : softBg }}>
                <div className="p-4 border-r font-medium" style={{ borderColor: soft }}>{r.row}</div>
                <div className="p-4 border-r text-muted-foreground" style={{ borderColor: soft }}>{r.ios}</div>
                <div className="p-4 border-r text-muted-foreground" style={{ borderColor: soft }}>{r.android}</div>
                <div className="p-4" style={{ color: accent }}>{r.cross}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. DEVELOPMENT ROADMAP — zigzag */}
        <section className="border-t" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-5xl px-4 py-24">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-16 text-center">Your roadmap to launch.</h2>
            <div className="space-y-10">
              {d.process.map((p, i) => (
                <div key={p.title} className={`flex gap-6 items-start ${i % 2 ? "flex-row-reverse text-right" : ""}`}>
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl border-2 grid place-items-center font-mono text-sm" style={{ borderColor: accent, color: accent }}>{p.step}</div>
                  <div className={`flex-1 rounded-2xl border p-6 ${i % 2 ? "" : ""}`} style={{ borderColor: soft, background: "rgba(255,255,255,0.02)" }}>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. LAUNCH & APP STORE */}
        <section className="border-t" style={{ borderColor: soft }}>
          <div className="mx-auto max-w-7xl px-4 py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>Launch Day</div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">From TestFlight to Top Charts.</h2>
              <p className="mt-4 text-muted-foreground max-w-lg">We handle the full submission process — App Store Connect, Google Play Console, ASO copy, screenshots, review responses, and post-launch updates.</p>
              <ul className="mt-8 space-y-3">
                {d.benefits.slice(0, 5).map((b) => (
                  <li key={b.title} className="flex gap-3 items-start">
                    <Check size={18} className="flex-shrink-0 mt-0.5" style={{ color: accent }} />
                    <div>
                      <div className="font-medium">{b.title}</div>
                      <div className="text-sm text-muted-foreground">{b.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <StoreCard accent={accent} icon={<Apple size={22} />} store="App Store" rating="4.8" reviews="2.3k" />
              <StoreCard accent={accent} icon={<Smartphone size={22} />} store="Google Play" rating="4.7" reviews="5.1k" />
              <div className="sm:col-span-2 rounded-2xl border p-6" style={{ borderColor: soft, background: softBg }}>
                <div className="flex items-center gap-3 mb-3">
                  <Download size={20} style={{ color: accent }} />
                  <div className="font-semibold">Post-launch support included</div>
                </div>
                <p className="text-sm text-muted-foreground">OS updates, crash monitoring, analytics dashboards, and quarterly feature releases.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="border-t" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-4xl px-4 py-24">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-10 text-center">Frequently asked.</h2>
            <FAQ items={d.faqs} title="" />
          </div>
        </section>

        {/* 8. CTA */}
        <section className="border-t relative overflow-hidden" style={{ borderColor: soft }}>
          <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 100%, ${accent}, transparent 60%)` }} />
          <div className="mx-auto max-w-3xl px-4 py-24 text-center relative">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Have a mobile app idea?</h2>
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

function Phone({ accent, className = "", featured = false }: { accent: string; className?: string; featured?: boolean }) {
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 10%, transparent)`;
  return (
    <div className={`w-[220px] h-[440px] rounded-[3rem] border-[10px] border-foreground/80 bg-background overflow-hidden shadow-2xl ${className}`}>
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-foreground/80 z-10" />
      <div className="w-full h-full p-4 flex flex-col gap-3" style={{ background: `linear-gradient(180deg, ${softBg}, transparent)` }}>
        <div className="h-2 w-12 rounded-full bg-foreground/30 mt-3" />
        <div className="h-5 w-28 rounded-md bg-foreground/40" />
        <div className="grid grid-cols-2 gap-2 mt-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-xl border" style={{ borderColor: soft, background: featured && i === 2 ? accent : softBg }} />
          ))}
        </div>
        <div className="mt-auto h-10 rounded-xl flex items-center justify-center text-[10px] font-medium text-background" style={{ background: accent }}>Get Started</div>
      </div>
    </div>
  );
}

function ScreenCard({ accent, index, total, title, desc }: { accent: string; index: number; total: number; title: string; desc: string }) {
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 10%, transparent)`;
  return (
    <div className="snap-start w-[280px] flex-shrink-0">
      <div className="w-full h-[400px] rounded-[2.5rem] border-[8px] border-foreground/80 bg-background overflow-hidden shadow-xl relative">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-foreground/80 z-10" />
        <div className="w-full h-full p-5 flex flex-col gap-3" style={{ background: `radial-gradient(circle at 50% 0%, ${softBg}, transparent 70%)` }}>
          <div className="text-[10px] font-mono mt-2" style={{ color: accent }}>0{index} / 0{total}</div>
          <div className="h-6 w-3/4 rounded-md bg-foreground/40" />
          <div className="h-2 w-1/2 rounded-full bg-foreground/15" />
          <div className="mt-3 space-y-2">
            <div className="h-12 rounded-xl border" style={{ borderColor: soft, background: softBg }} />
            <div className="h-12 rounded-xl border" style={{ borderColor: soft, background: softBg }} />
            <div className="h-12 rounded-xl border" style={{ borderColor: soft, background: softBg }} />
          </div>
          <div className="mt-auto h-10 rounded-xl" style={{ background: accent }} />
        </div>
      </div>
      <h3 className="mt-5 font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{desc}</p>
    </div>
  );
}

function StoreCard({ accent, icon, store, rating, reviews }: { accent: string; icon: React.ReactNode; store: string; rating: string; reviews: string }) {
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  return (
    <div className="rounded-2xl border p-6" style={{ borderColor: soft }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">{icon}<span className="font-semibold">{store}</span></div>
        <Download size={16} style={{ color: accent }} />
      </div>
      <div className="mt-6 flex items-baseline gap-2">
        <Star size={16} className="fill-current" style={{ color: accent }} />
        <span className="text-3xl font-semibold tabular-nums">{rating}</span>
        <span className="text-xs text-muted-foreground">/ 5.0</span>
      </div>
      <div className="text-xs text-muted-foreground mt-1">{reviews} reviews</div>
    </div>
  );
}
