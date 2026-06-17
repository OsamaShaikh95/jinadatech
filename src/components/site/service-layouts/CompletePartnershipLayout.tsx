import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, User } from "lucide-react";
import { Layout } from "../Layout";
import { Breadcrumbs } from "../Breadcrumbs";
import { FAQ } from "../FAQ";
import { type ServicePageData, buildServiceLd, buildFaqLd } from "./types";

/**
 * CompletePartnershipLayout
 * "Hire an external technology department" feel.
 * Hero with central radial ecosystem diagram, dedicated-team avatar row,
 * hub-and-spoke service ecosystem, quarterly roadmap timeline,
 * collaboration grid, FAQ.
 */
export function CompletePartnershipLayout(d: ServicePageData) {
  const accent = d.accent;
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 8%, transparent)`;
  const style = { ["--svc-accent" as any]: accent } as React.CSSProperties;

  const teamRoles = [
    { initials: "AL", role: "Account Lead" },
    { initials: "PM", role: "Product Manager" },
    { initials: "DS", role: "Design Lead" },
    { initials: "EN", role: "Senior Engineer" },
    { initials: "GR", role: "Growth Lead" },
    { initials: "AI", role: "AI Engineer" },
  ];

  const quarters = [
    { q: "Q1", title: "Embed & audit", points: ["Onboard pod into your tools", "Audit web, growth, AI", "Set quarterly OKRs"] },
    { q: "Q2", title: "Foundation", points: ["Ship core web & SEO", "Launch paid campaigns", "Pilot first AI workflow"] },
    { q: "Q3", title: "Compound", points: ["Mobile or platform expansion", "Content engine at scale", "Automation across ops"] },
    { q: "Q4", title: "Optimize", points: ["A/B everything that moves revenue", "Refactor and retire debt", "Plan next year's roadmap"] },
  ];

  return (
    <Layout>
      <article style={style} className="relative">
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />

        {/* HERO — split: copy + ecosystem diagram */}
        <header className="relative pt-24 pb-20 overflow-hidden">
          <div className="absolute top-10 right-10 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 pointer-events-none" style={{ background: accent }} />
          <div className="mx-auto max-w-7xl px-4 relative">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: d.serviceName, href: `/services/${d.slug}` }]} />
            <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center mt-8">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.3em] mb-6" style={{ color: accent }}>{d.eyebrow}</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">{d.h1}</h1>
                <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">{d.intro}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition cursor-pointer" style={{ background: accent }}>Start a Project <ArrowRight size={16} /></Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border hover:bg-white/5 transition cursor-pointer" style={{ borderColor: soft }}>Schedule a Consultation</Link>
                </div>
              </div>
              <EcosystemDiagram accent={accent} items={d.included.slice(0, 6)} />
            </div>
          </div>
        </header>

        {/* DEDICATED TEAM AVATARS */}
        <section className="border-y" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-7xl px-4 py-14">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-2" style={{ color: accent }}>your dedicated pod</div>
                <h2 className="text-3xl font-semibold tracking-tight">Same humans. Every week.</h2>
              </div>
              <div className="text-sm text-muted-foreground max-w-md">A named senior team across product, engineering, design, growth and AI — embedded in your Slack, your standups, your roadmap.</div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {teamRoles.map((t) => (
                <div key={t.role} className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full grid place-items-center border-2 font-semibold mb-2" style={{ borderColor: accent, background: softBg, color: accent }}>
                    {t.initials}
                  </div>
                  <div className="text-xs font-medium">{t.role}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12">
              {d.stats.map((s) => (
                <div key={s.label} className="text-center border-l pl-4" style={{ borderColor: soft }}>
                  <div className="text-3xl font-semibold tabular-nums" style={{ color: accent }}>{s.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OVERVIEW — memo / executive summary style */}
        <section className="mx-auto max-w-5xl px-4 py-24">
          <div className="border-l-2 pl-8 space-y-10" style={{ borderColor: accent }}>
            {[
              { label: "Engagement scope", body: d.overview.includes },
              { label: "Who we partner with", body: d.overview.audience },
              { label: "What we replace", body: d.overview.solves },
            ].map((b, i) => (
              <div key={b.label}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs" style={{ color: accent }}>MEMO 0{i + 1}</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">— {b.label}</span>
                </div>
                <p className="text-xl leading-relaxed text-foreground/90">{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICE ECOSYSTEM — disciplines list */}
        <section className="border-t" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-7xl px-4 py-24">
            <div className="text-center mb-14">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>disciplines</div>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">One ecosystem. Six disciplines.</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {d.included.map((item, i) => {
                const Icon = item.icon!;
                return (
                  <div key={item.title} className="relative rounded-2xl border p-7 bg-background/70 backdrop-blur" style={{ borderColor: soft }}>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl" style={{ background: softBg, color: accent }}><Icon size={20} /></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                          <span className="font-mono text-[10px]" style={{ color: accent }}>0{i + 1}</span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* QUARTERLY ROADMAP TIMELINE */}
        <section className="border-t" style={{ borderColor: soft }}>
          <div className="mx-auto max-w-7xl px-4 py-24">
            <div className="mb-10">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>year one roadmap</div>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">A roadmap, not a backlog.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-px" style={{ background: soft }}>
              {quarters.map((qd) => (
                <div key={qd.q} className="bg-background p-6">
                  <div className="flex items-center justify-between mb-4 pb-4 border-b" style={{ borderColor: soft }}>
                    <span className="font-mono text-2xl font-semibold" style={{ color: accent }}>{qd.q}</span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{qd.title}</span>
                  </div>
                  <ul className="space-y-3">
                    {qd.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
                        <span className="text-foreground/85">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Operating process strip below */}
            <div className="mt-10 rounded-xl border p-6" style={{ borderColor: soft, background: softBg }}>
              <div className="text-xs font-mono uppercase tracking-widest mb-4 text-muted-foreground">Operating cadence</div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {d.process.map((p) => (
                  <div key={p.title}>
                    <div className="text-[10px] font-mono" style={{ color: accent }}>{p.step}</div>
                    <div className="font-semibold mt-1 text-sm">{p.title}</div>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS — collaboration grid */}
        <section className="border-t" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-7xl px-4 py-24">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-12 max-w-2xl">Why teams hire us as their digital department.</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {d.benefits.map((b, i) => (
                <div key={b.title} className="relative p-6 rounded-2xl border bg-background/70" style={{ borderColor: soft }}>
                  <div className="absolute -top-3 left-6 px-2 text-[10px] font-mono" style={{ background: "var(--background)", color: accent }}>BENEFIT 0{i + 1}</div>
                  <h3 className="font-semibold text-lg mt-2">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
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
        <section className="border-t" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-7xl px-4 py-12 flex flex-wrap items-center gap-3 justify-between">
            <div className="text-sm font-mono text-muted-foreground">Individual services →</div>
            <div className="flex flex-wrap gap-2">
              {d.related.map((r) => (
                <Link key={r.href} to={r.href} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm hover:bg-white/5 transition cursor-pointer" style={{ borderColor: soft, background: "var(--background)" }}>
                  {r.title} <ArrowUpRight size={12} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t relative overflow-hidden" style={{ borderColor: soft }}>
          <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 100%, ${accent}, transparent 60%)` }} />
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

function EcosystemDiagram({ accent, items }: { accent: string; items: { title: string }[] }) {
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 12%, transparent)`;
  const count = items.length;
  const radius = 150;
  return (
    <div className="relative aspect-square max-w-md mx-auto">
      <div className="absolute -inset-8 rounded-full blur-3xl opacity-40 pointer-events-none" style={{ background: accent }} />
      {/* Ring */}
      <svg className="absolute inset-0 w-full h-full" viewBox="-200 -200 400 400">
        <circle cx="0" cy="0" r={radius} fill="none" stroke={soft} strokeDasharray="3 5" />
        {items.map((_, i) => {
          const a = (i / count) * Math.PI * 2 - Math.PI / 2;
          const x = Math.cos(a) * radius;
          const y = Math.sin(a) * radius;
          return <line key={i} x1="0" y1="0" x2={x} y2={y} stroke={soft} />;
        })}
      </svg>
      {/* Center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full grid place-items-center border-2 text-center" style={{ borderColor: accent, background: "var(--background)", boxShadow: `0 0 60px -10px ${accent}` }}>
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest" style={{ color: accent }}>your</div>
          <div className="font-semibold">Business</div>
        </div>
      </div>
      {/* Satellites */}
      {items.map((it, i) => {
        const a = (i / count) * Math.PI * 2 - Math.PI / 2;
        const left = 50 + (Math.cos(a) * radius) / 4;
        const top = 50 + (Math.sin(a) * radius) / 4;
        return (
          <div
            key={it.title}
            className="absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full border text-[11px] font-mono whitespace-nowrap"
            style={{ left: `${left}%`, top: `${top}%`, borderColor: soft, background: softBg, color: accent }}
          >
            {it.title}
          </div>
        );
      })}
    </div>
  );
}
