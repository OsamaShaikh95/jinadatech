import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import { Layout } from "../Layout";
import { Breadcrumbs } from "../Breadcrumbs";
import { FAQ } from "../FAQ";
import { type ServicePageData, buildServiceLd, buildFaqLd } from "./types";

/**
 * MobileAppLayout
 * Startup mobile-app agency vibe.
 * Centered hero with arc of phone mockups, vertical storytelling rows,
 * phone-shaped deliverable cards, iOS vs Android vs RN comparison table,
 * vertical launch timeline, FAQ.
 */
export function MobileAppLayout(d: ServicePageData) {
  const accent = d.accent;
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 8%, transparent)`;
  const style = { ["--svc-accent" as any]: accent } as React.CSSProperties;

  const platforms = [
    { name: "iOS", desc: "Native Swift / SwiftUI" },
    { name: "Android", desc: "Native Kotlin / Compose" },
    { name: "React Native", desc: "One codebase, two stores" },
  ];
  const matrix = [
    { row: "App Store + Play Store launch", v: [true, true, true] },
    { row: "Native UI performance", v: [true, true, false] },
    { row: "Single codebase", v: [false, false, true] },
    { row: "Fastest time to market", v: [false, false, true] },
    { row: "Deep OS integrations", v: [true, true, false] },
    { row: "Push notifications & payments", v: [true, true, true] },
  ];

  return (
    <Layout>
      <article style={style} className="relative">
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />

        {/* HERO — centered with phone arc below */}
        <header className="relative pt-24 pb-12 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[160px] opacity-30 pointer-events-none" style={{ background: accent }} />
          <div className="mx-auto max-w-5xl px-4 text-center relative">
            <div className="flex justify-center"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: d.serviceName, href: `/services/${d.slug}` }]} /></div>
            <div className="text-[11px] font-mono uppercase tracking-[0.3em] mt-4" style={{ color: accent }}>{d.eyebrow}</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95] mt-6 max-w-4xl mx-auto">{d.h1}</h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">{d.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition cursor-pointer" style={{ background: accent }}>Start a Project <ArrowRight size={16} /></Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border hover:bg-white/5 transition cursor-pointer" style={{ borderColor: soft }}>Schedule a Consultation</Link>
            </div>
          </div>

          {/* Arc of phones */}
          <div className="relative mt-16 h-[420px] sm:h-[480px]">
            <div className="absolute left-1/2 -translate-x-1/2 flex items-end gap-4 sm:gap-8">
              <PhoneMockup accent={accent} variant="left" label={d.stats[0]?.value} sub={d.stats[0]?.label} />
              <PhoneMockup accent={accent} variant="center" label={d.stats[1]?.value} sub={d.stats[1]?.label} />
              <PhoneMockup accent={accent} variant="right" label={d.stats[2]?.value} sub={d.stats[2]?.label} />
            </div>
          </div>
        </header>

        {/* OVERVIEW — vertical storytelling, phone on alternating side */}
        <section className="border-t" style={{ borderColor: soft }}>
          <div className="mx-auto max-w-6xl px-4 py-24 space-y-24">
            {[
              { label: "What's included", body: d.overview.includes, side: "left" as const },
              { label: "Who it's for", body: d.overview.audience, side: "right" as const },
              { label: "Problems it solves", body: d.overview.solves, side: "left" as const },
            ].map((b, i) => (
              <div key={b.label} className={`grid md:grid-cols-[260px_1fr] gap-12 items-center ${b.side === "right" ? "md:[direction:rtl]" : ""}`}>
                <div className="flex justify-center [direction:ltr]">
                  <MiniPhone accent={accent} index={i + 1} />
                </div>
                <div className="[direction:ltr]">
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>chapter 0{i + 1} — {b.label}</div>
                  <p className="text-2xl leading-snug font-medium text-foreground/90">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* APP FEATURES — phone-shaped cards */}
        <section className="border-t" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-7xl px-4 py-24">
            <div className="text-center mb-14">
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Inside every app we ship.</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {d.included.map((item, i) => {
                const Icon = item.icon!;
                return (
                  <div key={item.title} className="rounded-[2rem] border bg-card/60 backdrop-blur p-5 aspect-[9/16] flex flex-col" style={{ borderColor: soft }}>
                    <div className="mx-auto w-16 h-1.5 rounded-full bg-foreground/10 mb-4" />
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3" style={{ background: softBg, color: accent }}>
                      <Icon size={18} />
                    </div>
                    <div className="text-[10px] font-mono" style={{ color: accent }}>0{i + 1}</div>
                    <h3 className="text-sm font-semibold mt-1 leading-tight">{item.title}</h3>
                    <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed line-clamp-5">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PLATFORM COMPARISON */}
        <section className="border-t" style={{ borderColor: soft }}>
          <div className="mx-auto max-w-6xl px-4 py-24">
            <div className="max-w-2xl mb-10">
              <div className="text-[11px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>Platform comparison</div>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Pick the right stack for your product.</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-xl overflow-hidden" style={{ borderColor: soft }}>
                <thead>
                  <tr style={{ background: softBg }}>
                    <th className="text-left p-4 font-medium text-muted-foreground"> </th>
                    {platforms.map((p) => (
                      <th key={p.name} className="text-left p-4">
                        <div className="font-semibold" style={{ color: accent }}>{p.name}</div>
                        <div className="text-[11px] text-muted-foreground font-normal mt-1">{p.desc}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {matrix.map((m, idx) => (
                    <tr key={m.row} className="border-t" style={{ borderColor: soft }}>
                      <td className="p-4 text-foreground/85">{m.row}</td>
                      {m.v.map((v, i) => (
                        <td key={i} className="p-4">
                          {v ? <Check size={18} style={{ color: accent }} /> : <X size={18} className="text-muted-foreground/50" />}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* BENEFITS — full-width compact rows */}
        <section className="border-t" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-6xl px-4 py-24">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-12 max-w-2xl">Why founders ship mobile.</h2>
            <ul className="divide-y" style={{}}>
              {d.benefits.map((b, i) => (
                <li key={b.title} className="grid md:grid-cols-[100px_280px_1fr] gap-6 py-6 border-t" style={{ borderColor: soft }}>
                  <div className="font-mono text-sm" style={{ color: accent }}>0{i + 1}</div>
                  <div className="font-semibold text-lg">{b.title}</div>
                  <div className="text-muted-foreground">{b.desc}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* LAUNCH PROCESS — vertical timeline */}
        <section className="border-t" style={{ borderColor: soft }}>
          <div className="mx-auto max-w-3xl px-4 py-24">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-12 text-center">From idea to App Store.</h2>
            <ol className="relative border-l-2 pl-8 space-y-10" style={{ borderColor: soft }}>
              {d.process.map((p, i) => (
                <li key={p.title} className="relative">
                  <span className="absolute -left-[2.4rem] top-1 w-6 h-6 rounded-full grid place-items-center text-[11px] font-mono text-background" style={{ background: accent }}>
                    {i + 1}
                  </span>
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-1" style={{ color: accent }}>{p.step}</div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground">{p.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-4xl px-4 py-24">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-10 text-center">Frequently asked.</h2>
            <FAQ items={d.faqs} title="" />
          </div>
        </section>

        {/* RELATED */}
        <section className="border-t" style={{ borderColor: soft }}>
          <div className="mx-auto max-w-6xl px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {d.related.map((r) => (
              <Link key={r.href} to={r.href} className="group rounded-2xl border p-5 hover:bg-white/5 transition cursor-pointer flex items-center justify-between" style={{ borderColor: soft }}>
                <span className="font-medium">{r.title}</span>
                <ArrowUpRight size={16} className="opacity-50 group-hover:opacity-100 transition" style={{ color: accent }} />
              </Link>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t relative overflow-hidden" style={{ borderColor: soft }}>
          <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 0%, ${accent}, transparent 60%)` }} />
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

function PhoneMockup({ accent, variant, label, sub }: { accent: string; variant: "left" | "center" | "right"; label?: string; sub?: string }) {
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 12%, transparent)`;
  const rotate = variant === "left" ? "-rotate-6 translate-y-8" : variant === "right" ? "rotate-6 translate-y-8" : "z-10 scale-110";
  return (
    <div className={`relative transform ${rotate} transition`}>
      <div className="absolute -inset-6 rounded-[3rem] blur-3xl opacity-40 pointer-events-none" style={{ background: accent }} />
      <div className="relative w-[180px] sm:w-[210px] aspect-[9/19] rounded-[2.4rem] border-[6px] border-foreground/15 bg-background shadow-2xl overflow-hidden" style={{}}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-2 w-16 h-4 bg-foreground/80 rounded-full" />
        <div className="h-full p-4 flex flex-col" style={{ background: `linear-gradient(180deg, ${softBg}, transparent 60%)` }}>
          <div className="mt-8 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
            <span>9:41</span>
            <span style={{ color: accent }}>● ● ●</span>
          </div>
          <div className="mt-6 flex-1 flex flex-col items-center justify-center text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-3" style={{ background: accent }}>
              <span className="text-background font-bold">J</span>
            </div>
            {label && <div className="text-2xl font-semibold tabular-nums" style={{ color: accent }}>{label}</div>}
            {sub && <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1 px-2 leading-tight">{sub}</div>}
          </div>
          <div className="space-y-1.5 mb-2">
            <div className="h-1.5 rounded-full bg-foreground/10" />
            <div className="h-1.5 rounded-full bg-foreground/10 w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniPhone({ accent, index }: { accent: string; index: number }) {
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 12%, transparent)`;
  return (
    <div className="relative w-[200px] aspect-[9/18] rounded-[2.2rem] border-[5px] border-foreground/15 bg-background overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-2 w-14 h-3.5 bg-foreground/80 rounded-full" />
      <div className="h-full pt-10 px-4 pb-4 flex flex-col" style={{ background: `linear-gradient(180deg, ${softBg}, transparent)` }}>
        <div className="text-[9px] font-mono" style={{ color: accent }}>screen / 0{index}</div>
        <div className="mt-3 space-y-1.5">
          <div className="h-2 rounded bg-foreground/15 w-3/4" />
          <div className="h-2 rounded bg-foreground/10 w-1/2" />
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="aspect-square rounded-lg" style={{ background: softBg, border: `1px solid ${soft}` }} />
          <div className="aspect-square rounded-lg" style={{ background: softBg, border: `1px solid ${soft}` }} />
          <div className="aspect-square rounded-lg" style={{ background: softBg, border: `1px solid ${soft}` }} />
          <div className="aspect-square rounded-lg" style={{ background: accent, opacity: 0.8 }} />
        </div>
      </div>
    </div>
  );
}
