import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Layout } from "./Layout";
import { Breadcrumbs } from "./Breadcrumbs";
import { FAQ, type FAQItem } from "./FAQ";

const SITE = "https://jinadatech.com";

export type RelatedService = { title: string; href: string };
export type ServiceStat = { value: string; label: string };
export type IncludedItem = { title: string; desc: string; icon?: LucideIcon };
export type Benefit = { title: string; desc: string };
export type OverviewBlock = { label: string; body: string };

export function ServicePage(props: {
  slug: string;
  h1: React.ReactNode;
  eyebrow: string;
  intro: string;
  icon: LucideIcon;
  accent: string;
  signature: string;
  stats: ServiceStat[];
  overview: { includes: string; audience: string; solves: string };
  included: IncludedItem[];
  benefits: Benefit[];
  process: { step: string; title: string; desc: string }[];
  faqs: FAQItem[];
  related: RelatedService[];
  serviceName: string;
  serviceDescription: string;
}) {
  const {
    slug, h1, eyebrow, intro, icon: Icon, accent, signature, stats,
    overview, included, benefits, process, faqs, related,
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${serviceName} deliverables`,
      itemListElement: included.map((i) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: i.title, description: i.desc },
      })),
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
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

        {/* HERO */}
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
                      {serviceName}
                    </div>
                  </div>
                </div>
              </div>

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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition cursor-pointer"
                    style={{ background: "var(--svc-accent)" }}
                  >
                    Start a Project <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border hover:bg-white/5 transition cursor-pointer"
                    style={{ borderColor: softBorder }}
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* STATS */}
        <section className="border-y" style={{ borderColor: softBorder, background: softBg }}>
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

        {/* OVERVIEW */}
        <section className="mx-auto max-w-6xl px-4 py-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <div className="md:sticky md:top-32">
                <div className="text-[11px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: "var(--svc-accent)" }}>
                  01 — Overview
                </div>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
                  What this service is — and who it's for.
                </h2>
              </div>
            </div>
            <div className="md:col-span-8 space-y-10">
              {[
                { label: "What's included", body: overview.includes },
                { label: "Who it's for", body: overview.audience },
                { label: "Problems it solves", body: overview.solves },
              ].map((b) => (
                <div key={b.label} className="border-t pt-6" style={{ borderColor: softBorder }}>
                  <div className="text-xs font-mono uppercase tracking-[0.25em] mb-3" style={{ color: "var(--svc-accent)" }}>
                    {b.label}
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED — cards */}
        <section className="border-t" style={{ borderColor: softBorder }}>
          <div className="mx-auto max-w-6xl px-4 py-24">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: "var(--svc-accent)" }}>
                  02 — Deliverables
                </div>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl">
                  What you actually get.
                </h2>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {included.map((item) => {
                const ItemIcon = item.icon ?? Check;
                return (
                  <div
                    key={item.title}
                    className="group relative rounded-2xl border p-6 hover:-translate-y-0.5 transition bg-card/40 backdrop-blur"
                    style={{ borderColor: softBorder }}
                  >
                    <div
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-5"
                      style={{ background: softBg, color: "var(--svc-accent)" }}
                    >
                      <ItemIcon size={18} />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    <div
                      className="absolute inset-x-6 bottom-0 h-px opacity-0 group-hover:opacity-100 transition"
                      style={{ background: "var(--svc-accent)" }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="border-t" style={{ borderColor: softBorder }}>
          <div className="mx-auto max-w-6xl px-4 py-24">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-4">
                <div className="md:sticky md:top-32">
                  <div className="text-[11px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: "var(--svc-accent)" }}>
                    03 — Benefits
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                    Why businesses invest in this service.
                  </h2>
                  <p className="mt-4 text-muted-foreground text-sm">
                    Business outcomes, not just deliverables.
                  </p>
                </div>
              </div>
              <ol className="md:col-span-8 space-y-0">
                {benefits.map((b, i) => (
                  <li key={b.title} className="grid grid-cols-[auto_1fr] gap-6 py-7 border-t" style={{ borderColor: softBorder }}>
                    <div className="font-mono text-sm pt-1" style={{ color: "var(--svc-accent)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{b.title}</h3>
                      <p className="mt-2 text-muted-foreground">{b.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="border-t" style={{ borderColor: softBorder }}>
          <div className="mx-auto max-w-6xl px-4 py-24">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: "var(--svc-accent)" }}>
                  04 — Process
                </div>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl">
                  How we work — step by step.
                </h2>
              </div>
            </div>

            <div className="relative grid md:grid-cols-3 lg:grid-cols-6 gap-px" style={{ background: softBorder }}>
              {process.map((p, i) => (
                <div key={p.title} className="bg-background p-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm" style={{ color: "var(--svc-accent)" }}>{p.step}</span>
                    {i < process.length - 1 && (
                      <ArrowRight size={14} className="hidden lg:block text-muted-foreground" />
                    )}
                  </div>
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t" style={{ borderColor: softBorder }}>
          <div className="mx-auto max-w-6xl px-4 py-24">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-4">
                <div className="md:sticky md:top-32">
                  <div className="text-[11px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: "var(--svc-accent)" }}>
                    05 — Questions
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

        {/* RELATED */}
        <section className="border-t" style={{ borderColor: softBorder }}>
          <div className="mx-auto max-w-6xl px-4 py-20">
            <div className="text-[11px] font-mono uppercase tracking-[0.3em] mb-8" style={{ color: "var(--svc-accent)" }}>
              06 — Continue exploring
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

        {/* FINAL CTA */}
        <section className="border-t" style={{ borderColor: softBorder }}>
          <div className="mx-auto max-w-6xl px-4 py-24 text-center relative overflow-hidden">
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] opacity-30 pointer-events-none"
              style={{ background: "var(--svc-accent)" }}
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-mono uppercase tracking-widest mb-6"
                style={{ borderColor: softBorder, color: "var(--svc-accent)" }}>
                <Sparkles size={12} /> Free consultation
              </div>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl mx-auto">
                Ready to <span style={{ color: "var(--svc-accent)" }}>grow your business</span>?
              </h2>
              <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
                Let's discuss your goals and build the right solution together.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition cursor-pointer"
                  style={{ background: "var(--svc-accent)" }}
                >
                  Schedule a Free Consultation <ArrowRight size={16} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium border hover:bg-white/5 transition cursor-pointer"
                  style={{ borderColor: softBorder }}
                >
                  Back to services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </article>
    </Layout>
  );
}
