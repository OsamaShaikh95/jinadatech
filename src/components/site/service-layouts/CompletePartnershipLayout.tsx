import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Users, Calendar, Sparkles, Code2, Search, Cpu, Smartphone, Check } from "lucide-react";
import { Layout } from "../Layout";
import { Breadcrumbs } from "../Breadcrumbs";
import { FAQ } from "../FAQ";
import { type ServicePageData, buildServiceLd, buildFaqLd } from "./types";

/**
 * COMPLETE PARTNERSHIP
 * Sections:
 *   1. Hero
 *   2. Team Structure Diagram
 *   3. Monthly Engagement Model
 *   4. Strategic Roadmap (quarterly)
 *   5. Service Ecosystem Visualization (radial pillars)
 *   6. Long-Term Partnership Benefits
 *   7. FAQ
 *   8. CTA
 */

const TEAM = [
  { role: "Partner / Strategy Lead", initials: "JD", desc: "Quarterly planning, exec alignment, KPIs." },
  { role: "Product Designer", initials: "MR", desc: "UI, UX, design system, prototyping." },
  { role: "Senior Engineer", initials: "AK", desc: "Architecture, code reviews, complex builds." },
  { role: "Full-stack Developer", initials: "LP", desc: "Feature delivery, integrations, bug fixes." },
  { role: "SEO & Growth Lead", initials: "ST", desc: "Search, content strategy, analytics." },
  { role: "Project Manager", initials: "EV", desc: "Sprints, async standups, delivery." },
];

const ENGAGEMENT = [
  { label: "Monthly retainer", value: "From $6k", note: "Flexible scope, no overage surprises." },
  { label: "Dedicated team", value: "4–6 specialists", note: "Embedded in your Slack & tools." },
  { label: "Async cadence", value: "Daily updates", note: "Weekly call + monthly review." },
  { label: "Minimum term", value: "3 months", note: "Pause or cancel with 30 days notice." },
];

const PILLARS = [
  { icon: Code2, label: "Web" },
  { icon: Smartphone, label: "Mobile" },
  { icon: Search, label: "SEO" },
  { icon: Cpu, label: "AI" },
];

export function CompletePartnershipLayout(d: ServicePageData) {
  const accent = d.accent;
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 10%, transparent)`;
  const style = { ["--svc-accent" as any]: accent } as React.CSSProperties;

  return (
    <Layout>
      <article style={style} className="relative">
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />

        {/* 1. HERO */}
        <header className="relative pt-24 pb-16">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[180px] opacity-20 pointer-events-none" style={{ background: accent }} />
          <div className="mx-auto max-w-6xl px-4 relative">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: d.serviceName, href: `/services/${d.slug}` }]} />
            <div className="mt-10 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] mb-6 px-3 py-1 rounded-full border" style={{ color: accent, borderColor: soft, background: softBg }}>
                <Sparkles size={12} /> {d.eyebrow}
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">{d.h1}</h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">{d.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition cursor-pointer" style={{ background: accent }}>Become a Partner <ArrowRight size={16} /></Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border hover:bg-white/5 transition cursor-pointer" style={{ borderColor: soft }}>Schedule a Call</Link>
              </div>
            </div>
          </div>
        </header>

        {/* 2. TEAM STRUCTURE DIAGRAM */}
        <section className="border-y" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-7xl px-4 py-20">
            <div className="text-center mb-12">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>Your team</div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">An external tech department, fully staffed.</h2>
            </div>

            {/* You at center, team around */}
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-12 items-center max-w-5xl mx-auto">
              <div className="space-y-3">
                {TEAM.slice(0, 3).map((m) => <TeamRow key={m.role} {...m} accent={accent} align="right" />)}
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-3xl opacity-50" style={{ background: accent }} />
                <div className="relative w-40 h-40 rounded-full border-2 grid place-items-center text-center bg-background" style={{ borderColor: accent }}>
                  <div>
                    <Users size={28} className="mx-auto mb-2" style={{ color: accent }} />
                    <div className="font-semibold text-sm">Your Business</div>
                    <div className="text-[10px] text-muted-foreground mt-1">Founder / CTO</div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {TEAM.slice(3).map((m) => <TeamRow key={m.role} {...m} accent={accent} align="left" />)}
              </div>
            </div>
          </div>
        </section>

        {/* 3. MONTHLY ENGAGEMENT MODEL */}
        <section className="mx-auto max-w-7xl px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>Engagement</div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">A simple monthly model.</h2>
              <p className="mt-4 text-muted-foreground max-w-lg">One predictable retainer, one dedicated team, one Slack channel. Scope flexes month-to-month based on what your business actually needs.</p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border hover:bg-white/5 transition cursor-pointer" style={{ borderColor: soft }}>
                Request Pricing <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {ENGAGEMENT.map((e) => (
                <div key={e.label} className="rounded-2xl border p-6" style={{ borderColor: soft, background: softBg }}>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{e.label}</div>
                  <div className="text-2xl font-semibold mt-3" style={{ color: accent }}>{e.value}</div>
                  <div className="text-xs text-muted-foreground mt-2">{e.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. STRATEGIC ROADMAP — quarterly timeline */}
        <section className="border-t" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-7xl px-4 py-24">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">A year of strategic work.</h2>
            <p className="text-muted-foreground mb-12 max-w-xl">What a typical partnership delivers over 12 months.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {d.process.slice(0, 4).map((p, i) => (
                <div key={p.title} className="relative">
                  <div className="rounded-2xl border p-6 h-full bg-background" style={{ borderColor: soft }}>
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar size={14} style={{ color: accent }} />
                      <span className="text-xs font-mono uppercase tracking-widest" style={{ color: accent }}>Q{i + 1}</span>
                    </div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. SERVICE ECOSYSTEM — radial pillars */}
        <section className="mx-auto max-w-7xl px-4 py-24">
          <div className="text-center mb-12">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>Ecosystem</div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Every service. One team.</h2>
          </div>
          <div className="relative max-w-3xl mx-auto aspect-square">
            {/* Concentric rings */}
            <div className="absolute inset-0 rounded-full border" style={{ borderColor: soft }} />
            <div className="absolute inset-[15%] rounded-full border" style={{ borderColor: soft }} />
            <div className="absolute inset-[30%] rounded-full border" style={{ borderColor: soft }} />
            {/* Center */}
            <div className="absolute inset-[35%] rounded-full grid place-items-center text-background font-semibold text-center" style={{ background: accent }}>
              Complete<br />Partnership
            </div>
            {/* Pillars positioned around */}
            {PILLARS.map((p, i) => {
              const angle = (i * 90 - 45) * (Math.PI / 180);
              const r = 42; // %
              const x = 50 + r * Math.cos(angle);
              const y = 50 + r * Math.sin(angle);
              const Icon = p.icon;
              return (
                <div key={p.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
                  <div className="w-24 h-24 rounded-2xl border-2 grid place-items-center bg-background text-center" style={{ borderColor: accent }}>
                    <div>
                      <Icon size={24} className="mx-auto mb-1" style={{ color: accent }} />
                      <div className="text-xs font-semibold">{p.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. LONG-TERM BENEFITS */}
        <section className="border-t" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-7xl px-4 py-24">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12 max-w-2xl">Why partnerships compound.</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {d.benefits.map((b, i) => (
                <div key={b.title} className="rounded-2xl border p-6 bg-background flex gap-5" style={{ borderColor: soft }}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full grid place-items-center text-background font-mono text-xs" style={{ background: accent }}>{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="font-semibold flex items-center gap-2">{b.title} <Check size={14} style={{ color: accent }} /></h3>
                    <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Let's build something long-term.</h2>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition cursor-pointer" style={{ background: accent }}>
              Schedule a Partnership Call <ArrowRight size={16} />
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

function TeamRow({ role, initials, desc, accent, align }: { role: string; initials: string; desc: string; accent: string; align: "left" | "right" }) {
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 10%, transparent)`;
  return (
    <div className={`flex items-center gap-4 rounded-xl border p-4 bg-background ${align === "right" ? "flex-row-reverse text-right" : ""}`} style={{ borderColor: soft }}>
      <div className="w-12 h-12 rounded-full grid place-items-center font-mono text-sm flex-shrink-0" style={{ background: softBg, color: accent }}>{initials}</div>
      <div>
        <div className="text-sm font-semibold">{role}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{desc}</div>
      </div>
    </div>
  );
}
