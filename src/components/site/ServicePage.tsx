import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Layout } from "./Layout";
import { Breadcrumbs } from "./Breadcrumbs";
import { FAQ, type FAQItem } from "./FAQ";

const SITE = "https://jinadatech.com";

export type RelatedService = { title: string; href: string };
export type ServiceStat = { value: string; label: string };

export function ServicePage(props: {
  slug: string;
  h1: React.ReactNode;
  eyebrow: string;
  intro: string;
  icon: LucideIcon;
  accent: string;
  signature: string;
  stats: ServiceStat[];
  outcomes: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  stack: string[];
  faqs: FAQItem[];
  related: RelatedService[];
  serviceName: string;
  serviceDescription: string;
}) {
  const {
    slug, h1, eyebrow, intro, icon: Icon, accent, signature, stats,
    outcomes, process, stack, faqs, related,
    serviceName, serviceDescription,
  } = props;

  const url = `${SITE}/services/${slug}`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    url,
    provider: { "@type": "Organization", name: "Jinada Tech", url: SITE },
    areaServed: "Worldwide",
  };

  const accentStyle = { "--svc-accent": accent } as React.CSSProperties;
  const softBorder = "color-mix(in oklab, var(--svc-accent) 22%, transparent)";
  const softBg = "color-mix(in oklab, var(--svc-accent) 8%, transparent)";

  return (
    <Layout>
      <article style={accentStyle} className="relative">
        {/* Top accent rule */}
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
        />

        {/* HERO — editorial split with index column */}
        <header className="relative pt-32 pb-20 overflow-hidden">
          <div
            className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full blur-[140px] opacity-30 pointer-events-none"
            style={{ background: "var(--svc-accent)" }}
          />
          <div className="mx-auto max-w-6xl px-4 relative">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: serviceName, href: `/services/${slug}` },
              ]}
            />

            <div className="grid grid-cols-12 gap-6 mt-10">
              {/* Index column */}
              <div className="col-span-12 md:col-span-2 md:border-r md:pr-6" style={{ borderColor: softBorder }}>
                <div className="flex md:flex-col items-start gap-3">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl"
                    style={{ background: softBg, color: "var(--svc-accent)" }}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Service</div>
                    <div className="text-sm font-mono mt-1" style={{ color: "var(--svc-accent)" }}>
                      0{Math.max(1, related.length > 0 ? 1 : 1)} / 05
                    </div>
                  </div>
                </div>
              </div>

              {/* Headline column */}
              <div className="col-span-12 md:col-span-10">
                <div
                  className="text-[11px] font-mono uppercase tracking-[0.3em] mb-6"
                  style={{ color: "var(--svc-accent)" }}
                >
                  {eyebrow}
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
                  {h1}
                </h1>
                <div className="mt-8 grid md:grid-cols-12 gap-8 items-start">
                  <p className="md:col-span-7 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    {intro}
                  </p>
                  <div
                    className="md:col-span-5 md:pl-6 md:border-l text-sm italic leading-relaxed"
                    style={{ borderColor: softBorder, color: "color-mix(in oklab, var(--svc-accent) 70%, var(--foreground))" }}
                  >
                    “{signature}”
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition"
                    style={{ background: "var(--svc-accent)" }}
                  >
                    Start a project <ArrowRight size={16} />
                  </Link>
                  <a
                    href="#process"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border hover:bg-white/5 transition"
                    style={{ borderColor: softBorder }}
                  >
                    See our process
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* STATS — full-bleed ticker style */}
        <section
          className="border-y"
          style={{ borderColor: softBorder, background: softBg }}
        >
          <div className="mx-auto max-w-6xl px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-4">
                <div className="text-4xl sm:text-5xl font-semibold tracking-tight tabular-nums" style={{ color: "var(--svc-accent)" }}>
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground leading-tight max-w-[140px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OUTCOMES — editorial numbered list */}
        <section className="mx-auto max-w-6xl px-4 py-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <div className="md:sticky md:top-32">
                <div className="text-[11px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: "var(--svc-accent)" }}>
                  01 — Outcomes
                </div>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
                  What you actually get from this engagement.
                </h2>
                <p className="mt-4 text-muted-foreground text-sm">
                  Concrete deliverables — not vague promises.
                </p>
              </div>
            </div>
            <ol className="md:col-span-8 space-y-0">
              {outcomes.map((o, i) => (
                <li
                  key={o.title}
                  className="grid grid-cols-[auto_1fr] gap-6 py-7 border-t"
                  style={{ borderColor: softBorder }}
                >
                  <div className="font-mono text-sm pt-1" style={{ color: "var(--svc-accent)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{o.title}</h3>
                    <p className="mt-2 text-muted-foreground">{o.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PROCESS — horizontal timeline */}
        <section id="process" className="border-t" style={{ borderColor: softBorder }}>
          <div className="mx-auto max-w-6xl px-4 py-24">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: "var(--svc-accent)" }}>
                  02 — Process
                </div>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl">
                  How a {serviceName.toLowerCase()} engagement runs, week by week.
                </h2>
              </div>
            </div>

            <div className="relative grid md:grid-cols-4 gap-px" style={{ background: softBorder }}>
              {process.map((p, i) => (
                <div key={p.title} className="bg-background p-8 relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm" style={{ color: "var(--svc-accent)" }}>{p.step}</span>
                    {i < process.length - 1 && (
                      <ArrowRight size={14} className="hidden md:block text-muted-foreground" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STACK — inline chip row */}
        <section className="border-t" style={{ borderColor: softBorder }}>
          <div className="mx-auto max-w-6xl px-4 py-20">
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-4">
                <div className="text-[11px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: "var(--svc-accent)" }}>
                  03 — Tools
                </div>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                  The stack we reach for.
                </h2>
                <p className="mt-4 text-muted-foreground text-sm">
                  Boring tech where it should be, sharp tools where it matters.
                </p>
              </div>
              <div className="md:col-span-8 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full px-4 py-2 text-sm font-medium border"
                    style={{
                      borderColor: softBorder,
                      color: "color-mix(in oklab, var(--svc-accent) 80%, var(--foreground))",
                      background: softBg,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — embedded on the service page */}
        <section className="border-t" style={{ borderColor: softBorder }}>
          <div className="mx-auto max-w-6xl px-4 py-24">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-4">
                <div className="md:sticky md:top-32">
                  <div className="text-[11px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: "var(--svc-accent)" }}>
                    04 — Questions
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                    Frequently asked about {serviceName.toLowerCase()}.
                  </h2>
                  <p className="mt-4 text-muted-foreground text-sm">
                    Specific to this service. Other questions? Just message us.
                  </p>
                </div>
              </div>
              <div className="md:col-span-8">
                <FAQ items={faqs} title="" />
              </div>
            </div>
          </div>
        </section>

        {/* RELATED — minimal list */}
        <section className="border-t" style={{ borderColor: softBorder }}>
          <div className="mx-auto max-w-6xl px-4 py-20">
            <div className="text-[11px] font-mono uppercase tracking-[0.3em] mb-8" style={{ color: "var(--svc-accent)" }}>
              05 — Continue exploring
            </div>
            <div className="divide-y" style={{ borderColor: softBorder }}>
              {related.map((r) => (
                <Link
                  key={r.href}
                  to={r.href}
                  className="flex items-center justify-between py-6 group cursor-pointer border-t first:border-t-0"
                  style={{ borderColor: softBorder }}
                >
                  <span className="text-2xl sm:text-3xl font-semibold tracking-tight group-hover:opacity-70 transition">
                    {r.title}
                  </span>
                  <ArrowUpRight
                    size={28}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    style={{ color: "var(--svc-accent)" }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t" style={{ borderColor: softBorder }}>
          <div className="mx-auto max-w-6xl px-4 py-24 text-center relative overflow-hidden">
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] opacity-30 pointer-events-none"
              style={{ background: "var(--svc-accent)" }}
            />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl mx-auto">
                Let's build your <span style={{ color: "var(--svc-accent)" }}>{serviceName.toLowerCase()}</span> project together.
              </h2>
              <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
                Free 30-minute strategy call. No pitch, no pressure — just a clear path forward.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition"
                  style={{ background: "var(--svc-accent)" }}
                >
                  Get a quote <ArrowRight size={16} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium border hover:bg-white/5 transition"
                  style={{ borderColor: softBorder }}
                >
                  Back to services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      </article>
    </Layout>
  );
}
