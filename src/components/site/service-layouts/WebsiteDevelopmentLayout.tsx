import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Layout } from "../Layout";
import { Breadcrumbs } from "../Breadcrumbs";
import { FAQ } from "../FAQ";
import { type ServicePageData, buildServiceLd, buildFaqLd } from "./types";

/**
 * WebsiteDevelopmentLayout
 * Editorial product / web agency feel.
 * Split hero with browser mockup, alt-image feature showcase,
 * mini-browser deliverable cards, horizontal numbered timeline, tech stack rail.
 */
export function WebsiteDevelopmentLayout(d: ServicePageData) {
  const accent = d.accent;
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 8%, transparent)`;
  const style = { ["--svc-accent" as any]: accent } as React.CSSProperties;

  return (
    <Layout>
      <article style={style} className="relative">
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />

        {/* HERO — split: copy left, browser mockup right */}
        <header className="relative pt-24 pb-20">
          <div className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full blur-[140px] opacity-30 pointer-events-none" style={{ background: accent }} />
          <div className="mx-auto max-w-7xl px-4 relative">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: d.serviceName, href: `/services/${d.slug}` }]} />
            <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center mt-8">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.3em] mb-6" style={{ color: accent }}>{d.eyebrow}</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">{d.h1}</h1>
                <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">{d.intro}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition cursor-pointer" style={{ background: accent }}>Start a Project <ArrowRight size={16} /></Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border hover:bg-white/5 transition cursor-pointer" style={{ borderColor: soft }}>Schedule a Consultation</Link>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                  {d.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl font-semibold tabular-nums" style={{ color: accent }}>{s.value}</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1 leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Browser mockup */}
              <BrowserMockup accent={accent} url={`jinadatech.com/${d.slug}`} />
            </div>
          </div>
        </header>

        {/* OVERVIEW — three editorial columns with vertical rules */}
        <section className="border-y" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-3 gap-10 md:divide-x" style={{}}>
            {[
              { label: "What's included", body: d.overview.includes },
              { label: "Who it's for", body: d.overview.audience },
              { label: "Problems it solves", body: d.overview.solves },
            ].map((b, i) => (
              <div key={b.label} className={i > 0 ? "md:pl-10" : "md:pr-10"}>
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>0{i + 1} — {b.label}</div>
                <p className="text-base leading-relaxed text-foreground/85">{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURE SHOWCASE — alternating image / text rows */}
        <section className="mx-auto max-w-7xl px-4 py-24">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-xl">Every site we build, fully equipped.</h2>
            <div className="text-sm font-mono text-muted-foreground">{d.included.length} core deliverables</div>
          </div>

          <div className="space-y-20">
            {d.included.map((item, i) => {
              const Icon = item.icon!;
              const reverse = i % 2 === 1;
              return (
                <div key={item.title} className={`grid md:grid-cols-2 gap-10 items-center ${reverse ? "md:[direction:rtl]" : ""}`}>
                  <div className="[direction:ltr]">
                    {/* Mini browser card */}
                    <div className="relative rounded-2xl border overflow-hidden bg-card/40 backdrop-blur" style={{ borderColor: soft }}>
                      <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: soft }}>
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                        <span className="ml-3 text-[10px] font-mono text-muted-foreground truncate">{item.title.toLowerCase().replace(/\s+/g, "-")}.jinadatech.com</span>
                      </div>
                      <div className="aspect-[16/10] p-6 grid place-items-center" style={{ background: `radial-gradient(circle at 50% 30%, ${softBg}, transparent 70%)` }}>
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-3" style={{ background: softBg, color: accent }}>
                          <Icon size={28} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[direction:ltr]">
                    <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>0{i + 1} / {String(d.included.length).padStart(2, "0")}</div>
                    <h3 className="text-3xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-lg">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* BENEFITS — editorial 2-col with large numbers */}
        <section className="border-t" style={{ borderColor: soft }}>
          <div className="mx-auto max-w-7xl px-4 py-24">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-12 max-w-2xl">Why businesses invest in website development.</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {d.benefits.map((b, i) => (
                <div key={b.title} className="flex gap-6">
                  <div className="text-5xl font-semibold tabular-nums leading-none" style={{ color: accent, opacity: 0.5 }}>{String(i + 1).padStart(2, "0")}</div>
                  <div className="border-l pl-6" style={{ borderColor: soft }}>
                    <h3 className="text-lg font-semibold">{b.title}</h3>
                    <p className="mt-2 text-muted-foreground">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS — horizontal timeline */}
        <section className="border-t" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-7xl px-4 py-24">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-16 text-center">From discovery to launch.</h2>
            <div className="relative">
              <div className="absolute left-0 right-0 top-3 h-px" style={{ background: soft }} />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
                {d.process.map((p, i) => (
                  <div key={p.title} className="relative">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: accent, boxShadow: `0 0 0 6px ${softBg}` }} />
                      <span className="font-mono text-xs" style={{ color: accent }}>{p.step}</span>
                    </div>
                    <h3 className="text-base font-semibold">{p.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
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

        {/* RELATED — pill rail */}
        <section className="border-t" style={{ borderColor: soft }}>
          <div className="mx-auto max-w-7xl px-4 py-12 flex flex-wrap items-center gap-3 justify-between">
            <div className="text-sm font-mono text-muted-foreground">Continue exploring →</div>
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

function BrowserMockup({ accent, url }: { accent: string; url: string }) {
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 10%, transparent)`;
  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-[2rem] blur-3xl opacity-40 pointer-events-none" style={{ background: accent }} />
      <div className="relative rounded-2xl border overflow-hidden bg-card/60 backdrop-blur shadow-2xl" style={{ borderColor: soft }}>
        {/* Chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: soft, background: softBg }}>
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-green-400/80" />
          <div className="flex-1 mx-3 px-3 py-1 rounded-md text-[11px] font-mono text-muted-foreground border" style={{ borderColor: soft, background: "rgba(255,255,255,0.02)" }}>
            <span style={{ color: accent }}>https://</span>{url}
          </div>
        </div>
        {/* Body */}
        <div className="aspect-[16/11] p-6 flex flex-col gap-4" style={{ background: `linear-gradient(180deg, transparent, ${softBg})` }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md" style={{ background: accent }} />
              <div className="w-20 h-2 rounded-full bg-foreground/20" />
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-2 rounded-full bg-foreground/10" />
              <div className="w-10 h-2 rounded-full bg-foreground/10" />
              <div className="w-10 h-2 rounded-full bg-foreground/10" />
              <div className="w-16 h-5 rounded-full" style={{ background: accent }} />
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <div className="h-3 w-3/4 rounded-full bg-foreground/30" />
            <div className="h-3 w-1/2 rounded-full bg-foreground/20" />
          </div>
          <div className="mt-auto grid grid-cols-3 gap-3">
            <div className="aspect-video rounded-lg border" style={{ borderColor: soft, background: softBg }} />
            <div className="aspect-video rounded-lg border" style={{ borderColor: soft, background: softBg }} />
            <div className="aspect-video rounded-lg border" style={{ borderColor: soft, background: softBg }} />
          </div>
        </div>
      </div>
    </div>
  );
}
