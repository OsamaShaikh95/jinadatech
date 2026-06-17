import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Layout } from "./Layout";
import { Section } from "./Section";
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
  /** CSS color string (any valid color or var(--token)) used as the page accent */
  accent: string;
  /** Short signature line shown under the hero — should differ per service */
  signature: string;
  /** 3 metrics shown as a stat strip in the hero */
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

  // CSS variable so children can read --svc-accent in arbitrary classes
  const accentStyle = { "--svc-accent": accent } as React.CSSProperties;

  return (
    <Layout>
      <div style={accentStyle}>
        <Section>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: serviceName, href: `/services/${slug}` },
            ]}
          />

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 relative">
              <div
                className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full blur-[120px] opacity-40 pointer-events-none"
                style={{ background: "var(--svc-accent)" }}
              />
              <div className="relative">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium mb-6 border"
                  style={{
                    borderColor: "color-mix(in oklab, var(--svc-accent) 40%, transparent)",
                    color: "var(--svc-accent)",
                    background: "color-mix(in oklab, var(--svc-accent) 10%, transparent)",
                  }}
                >
                  <Sparkles size={12} /> {eyebrow}
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">{h1}</h1>
                <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl">{intro}</p>
                <p
                  className="mt-4 text-sm font-medium uppercase tracking-[0.2em]"
                  style={{ color: "var(--svc-accent)" }}
                >
                  {signature}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-background transition hover:opacity-90"
                    style={{ background: "var(--svc-accent)" }}
                  >
                    Start a project <ArrowRight size={16} />
                  </Link>
                  <Link to="/services" className="glass inline-flex items-center px-6 py-3 rounded-xl font-medium hover:bg-white/5 transition">
                    All services
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="relative rounded-3xl p-8 border overflow-hidden bg-background/40 backdrop-blur-sm"
                style={{ borderColor: "color-mix(in oklab, var(--svc-accent) 25%, transparent)" }}
              >
                <div
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-40"
                  style={{ background: "var(--svc-accent)" }}
                />
                <div className="relative">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5"
                    style={{
                      background: "color-mix(in oklab, var(--svc-accent) 18%, transparent)",
                      color: "var(--svc-accent)",
                    }}
                  >
                    <Icon size={30} />
                  </div>
                  <h2 className="text-lg font-semibold">Tools & stack</h2>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-full px-3 py-1 text-xs font-medium border"
                        style={{
                          borderColor: "color-mix(in oklab, var(--svc-accent) 30%, transparent)",
                          color: "color-mix(in oklab, var(--svc-accent) 80%, var(--foreground))",
                          background: "color-mix(in oklab, var(--svc-accent) 6%, transparent)",
                        }}
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div
            className="mt-14 grid grid-cols-1 sm:grid-cols-3 rounded-2xl overflow-hidden border bg-background/30"
            style={{ borderColor: "color-mix(in oklab, var(--svc-accent) 20%, transparent)" }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`p-6 ${i > 0 ? "sm:border-l border-t sm:border-t-0" : ""}`}
                style={{ borderColor: "color-mix(in oklab, var(--svc-accent) 20%, transparent)" }}
              >
                <div className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: "var(--svc-accent)" }}>
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section className="py-12 sm:py-16">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What you get</h2>
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--svc-accent)" }}>Outcomes</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl p-6 border bg-background/40 hover:bg-background/60 transition"
                style={{ borderColor: "color-mix(in oklab, var(--svc-accent) 18%, transparent)" }}
              >
                <div
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg"
                  style={{
                    background: "color-mix(in oklab, var(--svc-accent) 18%, transparent)",
                    color: "var(--svc-accent)",
                  }}
                >
                  <Check size={16} />
                </div>
                <h3 className="mt-4 font-semibold">{o.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{o.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section className="py-12 sm:py-16">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How we work</h2>
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--svc-accent)" }}>Process</span>
          </div>
          <div className="relative">
            <div
              className="hidden lg:block absolute left-0 right-0 top-6 h-px"
              style={{ background: "color-mix(in oklab, var(--svc-accent) 30%, transparent)" }}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {process.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl p-6 border bg-background/40"
                  style={{ borderColor: "color-mix(in oklab, var(--svc-accent) 18%, transparent)" }}
                >
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full text-xs font-semibold text-background"
                    style={{ background: "var(--svc-accent)" }}
                  >
                    {p.step}
                  </div>
                  <h3 className="mt-4 font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section className="py-12 sm:py-16">
          <FAQ items={faqs} />
        </Section>

        <Section className="py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-8">Related services</h2>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {related.map((r) => (
              <Link
                key={r.href}
                to={r.href}
                className="rounded-2xl p-5 border bg-background/40 hover:bg-background/60 transition flex items-center justify-between cursor-pointer"
                style={{ borderColor: "color-mix(in oklab, var(--svc-accent) 18%, transparent)" }}
              >
                <span className="font-medium text-sm">{r.title}</span>
                <ArrowRight size={14} style={{ color: "var(--svc-accent)" }} />
              </Link>
            ))}
          </div>
        </Section>

        <Section>
          <div
            className="relative overflow-hidden rounded-3xl p-10 sm:p-14 text-center border bg-background/40"
            style={{ borderColor: "color-mix(in oklab, var(--svc-accent) 25%, transparent)" }}
          >
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-40"
              style={{ background: "var(--svc-accent)" }}
            />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                Ready to start your <span style={{ color: "var(--svc-accent)" }}>{serviceName.toLowerCase()}</span> project?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Free 30‑minute strategy call. We'll map the fastest path from idea to launch.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-background hover:opacity-90 transition"
                  style={{ background: "var(--svc-accent)" }}
                >
                  Get a quote <ArrowRight size={16} />
                </Link>
                <Link to="/about" className="glass inline-flex items-center px-6 py-3 rounded-xl font-medium hover:bg-white/5 transition">
                  About Jinada Tech
                </Link>
              </div>
            </div>
          </div>
        </Section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      </div>
    </Layout>
  );
}
