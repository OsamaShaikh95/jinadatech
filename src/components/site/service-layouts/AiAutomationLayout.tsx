import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Terminal, Zap, CircleDot } from "lucide-react";
import { Layout } from "../Layout";
import { Breadcrumbs } from "../Breadcrumbs";
import { FAQ } from "../FAQ";
import { type ServicePageData, buildServiceLd, buildFaqLd } from "./types";

/**
 * AiAutomationLayout
 * Futuristic automation feel.
 * Hero with workflow node diagram backdrop, terminal-style stat strip,
 * hex/clipped use-case cards, before-vs-after split,
 * vertical flowchart for process, FAQ.
 */
export function AiAutomationLayout(d: ServicePageData) {
  const accent = d.accent;
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 8%, transparent)`;
  const style = { ["--svc-accent" as any]: accent } as React.CSSProperties;

  return (
    <Layout>
      <article style={style} className="relative font-[450]">
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />

        {/* HERO with workflow diagram backdrop */}
        <header className="relative pt-24 pb-24 overflow-hidden">
          <WorkflowBackdrop accent={accent} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 40%, transparent, var(--background) 75%)` }} />
          <div className="mx-auto max-w-5xl px-4 relative text-center">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: d.serviceName, href: `/services/${d.slug}` }]} />
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-mono uppercase tracking-[0.3em] mt-4" style={{ borderColor: soft, color: accent, background: "var(--background)" }}>
              <Terminal size={11} /> {d.eyebrow}
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95] mt-6">{d.h1}</h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">{d.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition cursor-pointer" style={{ background: accent }}>Start a Project <ArrowRight size={16} /></Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border hover:bg-white/5 transition cursor-pointer" style={{ borderColor: soft }}>Schedule a Consultation</Link>
            </div>
          </div>
        </header>

        {/* TERMINAL STAT STRIP */}
        <section className="border-y" style={{ borderColor: soft, background: "rgba(0,0,0,0.25)" }}>
          <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
            {d.stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="text-xs" style={{ color: accent }}>$ stat.{i + 1} →</span>
                <div className="flex-1 truncate">
                  <span className="text-lg font-semibold tabular-nums" style={{ color: accent }}>{s.value}</span>
                  <span className="text-xs text-muted-foreground ml-3">{s.label.toLowerCase()}</span>
                </div>
                <span className="w-1.5 h-3 animate-pulse" style={{ background: accent }} />
              </div>
            ))}
          </div>
        </section>

        {/* OVERVIEW — bracketed sci-fi cards */}
        <section className="mx-auto max-w-6xl px-4 py-24 grid md:grid-cols-3 gap-6">
          {[
            { label: "INCLUDES", body: d.overview.includes },
            { label: "AUDIENCE", body: d.overview.audience },
            { label: "SOLVES", body: d.overview.solves },
          ].map((b) => (
            <div key={b.label} className="relative p-6 border" style={{ borderColor: soft, background: softBg }}>
              <Corners accent={accent} />
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>// {b.label}</div>
              <p className="text-sm leading-relaxed text-foreground/85">{b.body}</p>
            </div>
          ))}
        </section>

        {/* USE CASES — hex/clipped cards */}
        <section className="border-t" style={{ borderColor: soft }}>
          <div className="mx-auto max-w-7xl px-4 py-24">
            <div className="mb-12">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>// use_cases.deployed</div>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl">Automations we build into production.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: soft }}>
              {d.included.map((item, i) => {
                const Icon = item.icon!;
                return (
                  <div key={item.title} className="bg-background p-7 relative group hover:bg-[color-mix(in_oklab,var(--svc-accent)_5%,var(--background))] transition">
                    <div className="flex items-start justify-between mb-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 border" style={{ borderColor: soft, background: softBg, color: accent }}>
                        <Icon size={20} />
                      </div>
                      <span className="font-mono text-xs" style={{ color: accent }}>0{i + 1}/0{d.included.length}</span>
                    </div>
                    <h3 className="text-lg font-semibold font-mono">{item.title.toLowerCase().replace(/\s+/g, "_")}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
                      <CircleDot size={10} style={{ color: accent }} /> agent.active
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BEFORE vs AFTER */}
        <section className="border-t" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-6xl px-4 py-24">
            <div className="text-center mb-12">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>// state.diff</div>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Before vs after automation.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg border p-7" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-4 text-muted-foreground">// before</div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {beforeList.map((x) => (
                    <li key={x} className="flex gap-3"><span className="text-muted-foreground/50">−</span><span>{x}</span></li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border p-7 relative" style={{ borderColor: soft, background: softBg, boxShadow: `0 0 60px -20px ${accent}` }}>
                <Corners accent={accent} />
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: accent }}>// after</div>
                <ul className="space-y-3 text-sm">
                  {afterList.map((x) => (
                    <li key={x} className="flex gap-3"><span style={{ color: accent }}>+</span><span className="text-foreground">{x}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS — compact mono grid */}
        <section className="border-t" style={{ borderColor: soft }}>
          <div className="mx-auto max-w-6xl px-4 py-24">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-10 font-mono">// benefits.list</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: soft }}>
              {d.benefits.map((b, i) => (
                <div key={b.title} className="bg-background p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap size={14} style={{ color: accent }} />
                    <span className="text-[10px] font-mono" style={{ color: accent }}>0{i + 1}</span>
                  </div>
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS — vertical flowchart */}
        <section className="border-t" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-3xl px-4 py-24">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12 text-center font-mono">// pipeline.run</h2>
            <div className="space-y-3">
              {d.process.map((p, i) => (
                <div key={p.title}>
                  <div className="relative p-5 border bg-background" style={{ borderColor: soft }}>
                    <Corners accent={accent} small />
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 border grid place-items-center font-mono text-xs" style={{ borderColor: soft, color: accent }}>{p.step}</div>
                      <div>
                        <h3 className="font-semibold font-mono text-sm">{p.title.toLowerCase()}()</h3>
                        <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                  {i < d.process.length - 1 && (
                    <div className="flex justify-center my-1">
                      <ArrowRight size={14} className="rotate-90" style={{ color: accent }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t" style={{ borderColor: soft }}>
          <div className="mx-auto max-w-4xl px-4 py-24">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-10 text-center font-mono">// frequently.asked</h2>
            <FAQ items={d.faqs} title="" />
          </div>
        </section>

        {/* RELATED */}
        <section className="border-t" style={{ borderColor: soft }}>
          <div className="mx-auto max-w-6xl px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: soft }}>
            {d.related.map((r) => (
              <Link key={r.href} to={r.href} className="group bg-background p-5 hover:bg-[color-mix(in_oklab,var(--svc-accent)_6%,var(--background))] transition flex items-center justify-between cursor-pointer">
                <span className="font-mono text-sm">{r.title}</span>
                <ArrowUpRight size={14} style={{ color: accent }} />
              </Link>
            ))}
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

const beforeList = [
  "Reps stuck on data entry & inbox triage",
  "Leads wait hours (or days) for a reply",
  "Tools that don't talk to each other",
  "Reports stitched together by hand",
  "Knowledge buried in PDFs and docs",
  "Support tickets pile up overnight",
];

const afterList = [
  "Agents handle the busywork 24/7",
  "Leads get an instant qualified reply",
  "Every tool synced through one pipeline",
  "Reports compile themselves on schedule",
  "Internal AI answers in seconds",
  "Tickets triaged before the team logs in",
];

function Corners({ accent, small }: { accent: string; small?: boolean }) {
  const s = small ? "w-2 h-2" : "w-3 h-3";
  return (
    <>
      <span className={`absolute top-0 left-0 ${s} border-l border-t`} style={{ borderColor: accent }} />
      <span className={`absolute top-0 right-0 ${s} border-r border-t`} style={{ borderColor: accent }} />
      <span className={`absolute bottom-0 left-0 ${s} border-l border-b`} style={{ borderColor: accent }} />
      <span className={`absolute bottom-0 right-0 ${s} border-r border-b`} style={{ borderColor: accent }} />
    </>
  );
}

function WorkflowBackdrop({ accent }: { accent: string }) {
  const dim = `color-mix(in oklab, ${accent} 40%, transparent)`;
  return (
    <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <pattern id="grid-ai" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" stroke={`color-mix(in oklab, ${accent} 12%, transparent)`} strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="800" height="500" fill="url(#grid-ai)" />
      {/* nodes */}
      {[
        [100, 250, "input"], [300, 140, "agent"], [300, 360, "tools"], [550, 250, "rules"], [720, 250, "output"],
      ].map(([x, y, label], i) => (
        <g key={i}>
          <rect x={(x as number) - 38} y={(y as number) - 16} width="76" height="32" rx="6" fill="var(--background)" stroke={dim} />
          <text x={x as number} y={(y as number) + 4} textAnchor="middle" fill={accent} fontSize="10" fontFamily="ui-monospace, monospace">{label}</text>
        </g>
      ))}
      <g stroke={dim} strokeDasharray="4 4">
        <path d="M 138 250 L 262 150" />
        <path d="M 138 250 L 262 350" />
        <path d="M 338 150 L 512 250" />
        <path d="M 338 350 L 512 250" />
        <path d="M 588 250 L 682 250" />
      </g>
    </svg>
  );
}
