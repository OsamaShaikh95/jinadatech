import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, TrendingUp, Users, MousePointerClick, Target, Search, BarChart3 } from "lucide-react";
import { Layout } from "../Layout";
import { Breadcrumbs } from "../Breadcrumbs";
import { FAQ } from "../FAQ";
import { type ServicePageData, buildServiceLd, buildFaqLd } from "./types";

/**
 * SEO & MARKETING
 * Sections:
 *   1. Hero
 *   2. Traffic Analytics Dashboard
 *   3. SEO Services Grid
 *   4. Marketing Funnel Visualization
 *   5. Growth Metrics Section
 *   6. Campaign Examples
 *   7. FAQ
 *   8. CTA
 */

const FUNNEL = [
  { stage: "Awareness", pct: 100, channel: "SEO • Content • Social", color: 1 },
  { stage: "Interest", pct: 62, channel: "Landing Pages • Lead Magnets", color: 2 },
  { stage: "Consideration", pct: 34, channel: "Email • Retargeting", color: 3 },
  { stage: "Decision", pct: 18, channel: "Sales • Demos", color: 4 },
  { stage: "Customer", pct: 9, channel: "Onboarding • LTV", color: 5 },
];

const CAMPAIGNS = [
  { type: "SEO", title: "Organic Traffic Surge", metric: "+412%", note: "12-mo organic sessions, B2B SaaS" },
  { type: "PPC", title: "Google Ads Overhaul", metric: "−47%", note: "CPL reduction, e-commerce" },
  { type: "Content", title: "Editorial Authority", metric: "1.2M", note: "Annual reach, fintech blog" },
  { type: "Local", title: "Local SEO Sweep", metric: "#1", note: "Map pack rankings, services" },
];

export function SeoMarketingLayout(d: ServicePageData) {
  const accent = d.accent;
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 10%, transparent)`;
  const style = { ["--svc-accent" as any]: accent } as React.CSSProperties;

  return (
    <Layout>
      <article style={style} className="relative">
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />

        {/* 1. HERO */}
        <header className="relative pt-24 pb-12">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[160px] opacity-20 pointer-events-none" style={{ background: accent }} />
          <div className="mx-auto max-w-5xl px-4 relative">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: d.serviceName, href: `/services/${d.slug}` }]} />
            <div className="mt-8 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] mb-6 px-3 py-1 rounded-full border" style={{ color: accent, borderColor: soft, background: softBg }}>
                <TrendingUp size={12} /> {d.eyebrow}
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">{d.h1}</h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{d.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition cursor-pointer" style={{ background: accent }}>Get a Free Audit <ArrowRight size={16} /></Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border hover:bg-white/5 transition cursor-pointer" style={{ borderColor: soft }}>See Case Studies</Link>
              </div>
            </div>
          </div>
        </header>

        {/* 2. TRAFFIC ANALYTICS DASHBOARD */}
        <section className="mx-auto max-w-7xl px-4 pb-20">
          <div className="rounded-3xl border overflow-hidden bg-card/40 backdrop-blur" style={{ borderColor: soft }}>
            <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: soft, background: softBg }}>
              <div className="flex items-center gap-3">
                <BarChart3 size={18} style={{ color: accent }} />
                <span className="font-mono text-sm">analytics.jinadatech.com</span>
              </div>
              <div className="flex gap-2 text-xs">
                {["7D", "30D", "90D", "12M"].map((p) => (
                  <span key={p} className={`px-3 py-1 rounded-full ${p === "90D" ? "" : "text-muted-foreground"}`} style={p === "90D" ? { background: accent, color: "var(--background)" } : {}}>{p}</span>
                ))}
              </div>
            </div>
            <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Users, label: "Organic Sessions", val: "284,512", delta: "+38%" },
                { icon: MousePointerClick, label: "CTR", val: "4.7%", delta: "+1.2pt" },
                { icon: Search, label: "Keywords ranking", val: "12,041", delta: "+2.1k" },
                { icon: Target, label: "Conversions", val: "8,317", delta: "+62%" },
              ].map((k) => {
                const Icon = k.icon;
                return (
                  <div key={k.label} className="rounded-2xl border p-5" style={{ borderColor: soft, background: softBg }}>
                    <div className="flex items-center justify-between">
                      <Icon size={16} style={{ color: accent }} />
                      <span className="text-xs font-mono" style={{ color: accent }}>{k.delta}</span>
                    </div>
                    <div className="text-2xl font-semibold tabular-nums mt-4">{k.val}</div>
                    <div className="text-xs text-muted-foreground mt-1">{k.label}</div>
                  </div>
                );
              })}
            </div>
            {/* Sparkline chart */}
            <div className="px-6 pb-6">
              <Sparkline accent={accent} />
            </div>
          </div>
        </section>

        {/* 3. SEO SERVICES GRID */}
        <section className="border-y" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-7xl px-4 py-20">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl">A full-stack growth program.</h2>
              <p className="text-sm font-mono text-muted-foreground">{d.included.length} services</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {d.included.map((item, i) => {
                const Icon = item.icon!;
                return (
                  <div key={item.title} className="rounded-2xl border p-6 bg-background hover:border-opacity-100 transition" style={{ borderColor: soft }}>
                    <div className="flex items-start justify-between">
                      <div className="w-11 h-11 rounded-xl grid place-items-center" style={{ background: softBg, color: accent }}>
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-5 font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. MARKETING FUNNEL */}
        <section className="mx-auto max-w-7xl px-4 py-24">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>The Funnel</div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">From strangers to revenue.</h2>
              <p className="mt-4 text-muted-foreground">We measure and optimize every stage — not just top-of-funnel vanity metrics.</p>
            </div>
            <div className="space-y-3">
              {FUNNEL.map((f) => (
                <div key={f.stage} className="relative">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold">{f.stage}</span>
                    <span className="font-mono text-muted-foreground">{f.channel}</span>
                  </div>
                  <div className="relative h-12 rounded-lg overflow-hidden border" style={{ borderColor: soft, background: softBg }}>
                    <div
                      className="absolute inset-y-0 left-0 flex items-center pl-4 text-sm font-mono font-semibold"
                      style={{
                        width: `${f.pct}%`,
                        background: `linear-gradient(90deg, ${accent}, color-mix(in oklab, ${accent} 60%, transparent))`,
                        color: "var(--background)",
                      }}
                    >
                      {f.pct}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. GROWTH METRICS — bento */}
        <section className="border-t" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-7xl px-4 py-24">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12 max-w-2xl">Growth metrics that matter.</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {d.benefits.slice(0, 6).map((b, i) => (
                <div key={b.title} className={`rounded-2xl border p-6 bg-background ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`} style={{ borderColor: soft }}>
                  <div className="text-3xl font-semibold tabular-nums" style={{ color: accent }}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 className={`mt-4 font-semibold ${i === 0 ? "text-2xl" : "text-base"}`}>{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CAMPAIGN EXAMPLES */}
        <section className="mx-auto max-w-7xl px-4 py-24">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">Real campaigns, real outcomes.</h2>
          <p className="text-muted-foreground mb-10 max-w-xl">A snapshot of the kinds of wins we engineer for clients across industries.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CAMPAIGNS.map((c) => (
              <div key={c.title} className="rounded-2xl border p-6 group hover:-translate-y-1 transition" style={{ borderColor: soft, background: softBg }}>
                <div className="text-[10px] font-mono uppercase tracking-widest" style={{ color: accent }}>{c.type}</div>
                <div className="text-4xl font-semibold tabular-nums mt-4">{c.metric}</div>
                <h3 className="mt-3 font-semibold text-sm">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.note}</p>
              </div>
            ))}
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
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Ready to grow predictably?</h2>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition cursor-pointer" style={{ background: accent }}>
              Get a Free SEO Audit <ArrowRight size={16} />
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

function Sparkline({ accent }: { accent: string }) {
  const pts = [10, 18, 14, 26, 22, 34, 30, 42, 38, 52, 48, 64, 60, 76, 88];
  const max = 100;
  const w = 100;
  const h = 30;
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${(i / (pts.length - 1)) * w} ${h - (p / max) * h}`).join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  return (
    <div className="rounded-xl border p-4" style={{ borderColor: `color-mix(in oklab, ${accent} 22%, transparent)`, background: "rgba(255,255,255,0.02)" }}>
      <div className="flex items-center justify-between text-xs mb-2">
        <span className="font-mono text-muted-foreground">Organic Sessions — 90 days</span>
        <span className="font-mono" style={{ color: accent }}>↗ +38%</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-24" preserveAspectRatio="none">
        <defs>
          <linearGradient id="spark-grad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.4" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#spark-grad)" />
        <path d={path} fill="none" stroke={accent} strokeWidth="0.6" />
      </svg>
    </div>
  );
}
