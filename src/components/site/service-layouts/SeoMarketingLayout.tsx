import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, TrendingUp, Users, Target, MousePointerClick } from "lucide-react";
import { Layout } from "../Layout";
import { Breadcrumbs } from "../Breadcrumbs";
import { FAQ } from "../FAQ";
import { type ServicePageData, buildServiceLd, buildFaqLd } from "./types";

/**
 * SeoMarketingLayout
 * Growth-marketing agency vibe.
 * Hero with live "dashboard" mockup (KPI tiles + line + bar chart),
 * KPI overview tiles, asymmetric campaign cards,
 * conversion funnel diagram, results-focused sparkline section, FAQ.
 */
export function SeoMarketingLayout(d: ServicePageData) {
  const accent = d.accent;
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 8%, transparent)`;
  const style = { ["--svc-accent" as any]: accent } as React.CSSProperties;

  return (
    <Layout>
      <article style={style} className="relative">
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />

        {/* HERO — copy + dashboard */}
        <header className="relative pt-24 pb-20">
          <div className="absolute top-0 right-0 w-[700px] h-[600px] rounded-full blur-[160px] opacity-25 pointer-events-none" style={{ background: accent }} />
          <div className="mx-auto max-w-7xl px-4 relative">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: d.serviceName, href: `/services/${d.slug}` }]} />
            <div className="grid lg:grid-cols-2 gap-10 items-center mt-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-mono uppercase tracking-[0.25em] mb-6" style={{ borderColor: soft, color: accent }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} /> {d.eyebrow}
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">{d.h1}</h1>
                <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">{d.intro}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition cursor-pointer" style={{ background: accent }}>Start a Project <ArrowRight size={16} /></Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border hover:bg-white/5 transition cursor-pointer" style={{ borderColor: soft }}>Schedule a Consultation</Link>
                </div>
              </div>
              <DashboardMockup accent={accent} stats={d.stats} />
            </div>
          </div>
        </header>

        {/* KPI TILES */}
        <section className="border-y" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: TrendingUp, label: "Organic sessions", value: "+218%", trend: "vs last quarter" },
              { icon: Users, label: "Qualified leads", value: "+147%", trend: "blended channels" },
              { icon: Target, label: "Cost per lead", value: "−42%", trend: "after 6 months" },
              { icon: MousePointerClick, label: "Avg ROAS", value: "5.8×", trend: "paid campaigns" },
            ].map((k) => {
              const Icon = k.icon;
              return (
                <div key={k.label} className="rounded-xl border p-5 bg-background/60 backdrop-blur" style={{ borderColor: soft }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg" style={{ background: softBg, color: accent }}><Icon size={14} /></div>
                    <Sparkline accent={accent} />
                  </div>
                  <div className="text-2xl font-semibold tabular-nums" style={{ color: accent }}>{k.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{k.label}</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/70 mt-1">{k.trend}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* OVERVIEW — three metric panels */}
        <section className="mx-auto max-w-7xl px-4 py-24 grid md:grid-cols-3 gap-6">
          {[
            { label: "What's included", body: d.overview.includes },
            { label: "Who it's for", body: d.overview.audience },
            { label: "Problems it solves", body: d.overview.solves },
          ].map((b) => (
            <div key={b.label} className="relative rounded-2xl border p-7 bg-card/40 backdrop-blur" style={{ borderColor: soft }}>
              <div className="absolute top-0 left-7 -translate-y-1/2 px-2 text-[10px] font-mono uppercase tracking-[0.3em]" style={{ color: accent, background: "var(--background)" }}>
                {b.label}
              </div>
              <p className="text-base leading-relaxed text-foreground/85 mt-2">{b.body}</p>
            </div>
          ))}
        </section>

        {/* CAMPAIGNS — asymmetric grid */}
        <section className="border-t" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-7xl px-4 py-24">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-xl">Campaigns we run end-to-end.</h2>
              <div className="text-sm font-mono text-muted-foreground">{d.included.length} workstreams</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-5 auto-rows-[180px]">
              {d.included.map((item, i) => {
                const Icon = item.icon!;
                // asymmetric spans: first big, rest mixed
                const span =
                  i === 0 ? "md:col-span-3 md:row-span-2" :
                  i === 1 ? "md:col-span-3" :
                  i === 2 ? "md:col-span-2" :
                  i === 3 ? "md:col-span-2" :
                  i === 4 ? "md:col-span-2" :
                  "md:col-span-3";
                return (
                  <div key={item.title} className={`relative rounded-2xl border p-6 bg-background/70 overflow-hidden ${span}`} style={{ borderColor: soft }}>
                    <div className="absolute top-3 right-3 text-[10px] font-mono" style={{ color: accent }}>0{i + 1}</div>
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4" style={{ background: softBg, color: accent }}><Icon size={18} /></div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    {i === 0 && (
                      <div className="absolute bottom-4 left-6 right-6 opacity-80">
                        <BigChart accent={accent} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FUNNEL — benefits as conversion funnel */}
        <section className="border-t" style={{ borderColor: soft }}>
          <div className="mx-auto max-w-6xl px-4 py-24">
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: accent }}>Conversion funnel</div>
                <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Every benefit pushes the funnel.</h2>
                <p className="mt-4 text-muted-foreground">Each stage compounds the one above — that's the magic of a connected growth program.</p>
              </div>
              <div className="space-y-2">
                {d.benefits.map((b, i) => {
                  const width = 100 - i * 11;
                  return (
                    <div key={b.title} className="relative mx-auto rounded-md border py-4 px-6 transition" style={{ width: `${width}%`, borderColor: soft, background: `color-mix(in oklab, ${accent} ${4 + i * 2}%, transparent)` }}>
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs" style={{ color: accent }}>0{i + 1}</span>
                        <div>
                          <div className="font-semibold text-sm">{b.title}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{b.desc}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS — pipeline strip */}
        <section className="border-t" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-7xl px-4 py-20">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-10">Our growth pipeline.</h2>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {d.process.map((p, i) => (
                <div key={p.title} className="flex-1 min-w-[180px] relative">
                  <div className="rounded-lg border p-5 bg-background/70 h-full" style={{ borderColor: soft }}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ background: softBg, color: accent }}>{p.step}</span>
                      <div className="flex-1 h-px" style={{ background: soft }} />
                    </div>
                    <h3 className="font-semibold text-sm">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{p.desc}</p>
                  </div>
                  {i < d.process.length - 1 && (
                    <ArrowRight size={14} className="absolute -right-2 top-1/2 -translate-y-1/2 hidden md:block" style={{ color: accent }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t" style={{ borderColor: soft }}>
          <div className="mx-auto max-w-4xl px-4 py-24">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-10 text-center">Frequently asked.</h2>
            <FAQ items={d.faqs} title="" />
          </div>
        </section>

        {/* RELATED */}
        <section className="border-t" style={{ borderColor: soft }}>
          <div className="mx-auto max-w-7xl px-4 py-12 flex flex-wrap items-center gap-3 justify-between">
            <div className="text-sm font-mono text-muted-foreground">More services →</div>
            <div className="flex flex-wrap gap-2">
              {d.related.map((r) => (
                <Link key={r.href} to={r.href} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm hover:bg-white/5 transition cursor-pointer" style={{ borderColor: soft }}>
                  {r.title} <ArrowUpRight size={12} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t relative overflow-hidden" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-3xl px-4 py-24 text-center relative">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Ready to grow your business?</h2>
            <p className="mt-5 text-muted-foreground">Let's discuss your goals and build the right solution together.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition cursor-pointer" style={{ background: accent }}>
              Schedule a Free Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceLd(d)) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqLd(d)) }} />
      </article>
    </Layout>
  );
}

function Sparkline({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 80 24" className="w-16 h-6" preserveAspectRatio="none">
      <polyline fill="none" stroke={accent} strokeWidth="1.5" points="0,20 12,16 24,18 36,10 48,12 60,6 72,4 80,2" />
      <polyline fill={`color-mix(in oklab, ${accent} 18%, transparent)`} stroke="none" points="0,20 12,16 24,18 36,10 48,12 60,6 72,4 80,2 80,24 0,24" />
    </svg>
  );
}

function BigChart({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 300 80" className="w-full h-16" preserveAspectRatio="none">
      <polyline fill="none" stroke={accent} strokeWidth="2" points="0,70 30,60 60,65 90,40 120,48 150,30 180,35 210,18 240,22 270,10 300,5" />
      <polyline fill={`color-mix(in oklab, ${accent} 14%, transparent)`} stroke="none" points="0,70 30,60 60,65 90,40 120,48 150,30 180,35 210,18 240,22 270,10 300,5 300,80 0,80" />
    </svg>
  );
}

function DashboardMockup({ accent, stats }: { accent: string; stats: { value: string; label: string }[] }) {
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 10%, transparent)`;
  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-[2rem] blur-3xl opacity-40 pointer-events-none" style={{ background: accent }} />
      <div className="relative rounded-2xl border bg-card/60 backdrop-blur shadow-2xl p-6" style={{ borderColor: soft }}>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: accent }} />
            <span className="text-[11px] font-mono text-muted-foreground">live · last 30 days</span>
          </div>
          <div className="text-[10px] font-mono" style={{ color: accent }}>jinada / growth</div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {stats.slice(0, 3).map((s) => (
            <div key={s.label} className="rounded-lg p-3 border" style={{ borderColor: soft, background: softBg }}>
              <div className="text-base font-semibold tabular-nums" style={{ color: accent }}>{s.value}</div>
              <div className="text-[9px] uppercase tracking-widest text-muted-foreground mt-1 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border p-3 mb-3" style={{ borderColor: soft }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium">Organic traffic</span>
            <span className="text-[10px] font-mono" style={{ color: accent }}>+218%</span>
          </div>
          <BigChart accent={accent} />
        </div>
        <div className="grid grid-cols-7 gap-1 items-end h-16">
          {[40, 55, 35, 70, 50, 85, 60].map((h, i) => (
            <div key={i} className="rounded-t" style={{ height: `${h}%`, background: `color-mix(in oklab, ${accent} ${30 + i * 8}%, transparent)` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
