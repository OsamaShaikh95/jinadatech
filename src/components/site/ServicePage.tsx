import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check } from "lucide-react";
import { Layout } from "./Layout";
import { Section } from "./Section";
import { Breadcrumbs } from "./Breadcrumbs";
import { FAQ, type FAQItem } from "./FAQ";

const SITE = "https://jinadatech.com";

export type RelatedService = { title: string; href: string };

export function ServicePage(props: {
  slug: string;
  h1: React.ReactNode;
  eyebrow: string;
  intro: string;
  icon: LucideIcon;
  outcomes: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  stack: string[];
  faqs: FAQItem[];
  related: RelatedService[];
  serviceName: string;
  serviceDescription: string;
}) {
  const {
    slug, h1, eyebrow, intro, icon: Icon,
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
    provider: {
      "@type": "Organization",
      name: "Jinada Tech",
      url: SITE,
    },
    areaServed: "Worldwide",
  };

  return (
    <Layout>
      <Section>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: serviceName, href: `/services/${slug}` },
          ]}
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-foreground mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-blue)] animate-pulse-glow" />
              {eyebrow}
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]">{h1}</h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary-glow hover:[&]:btn-primary-glow-hover inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium">
                Start a project <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="glass inline-flex items-center px-6 py-3 rounded-xl font-medium hover:bg-white/5 transition">
                All services
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="glass-strong rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[var(--brand-blue)]/30 blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl glass-strong text-[var(--brand-blue)]">
                  <Icon size={26} />
                </div>
                <h2 className="mt-5 text-lg font-semibold">Tools & stack</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {stack.map((s) => (
                    <li key={s} className="glass rounded-full px-3 py-1 text-xs text-foreground/90">{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-10">What you get</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {outcomes.map((o) => (
            <div key={o.title} className="glass rounded-2xl p-6">
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg glass-strong text-[var(--brand-blue)]">
                <Check size={16} />
              </div>
              <h3 className="mt-4 font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-10">How we work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {process.map((p) => (
            <div key={p.title} className="glass rounded-2xl p-6">
              <div className="text-xs uppercase tracking-widest text-[var(--brand-blue)]">{p.step}</div>
              <h3 className="mt-2 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-12 sm:py-16">
        <FAQ items={faqs} />
      </Section>

      <Section className="py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-8">Related services</h2>
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {related.map((r) => (
            <Link key={r.href} to={r.href} className="glass rounded-2xl p-5 hover:border-white/20 transition flex items-center justify-between">
              <span className="font-medium text-sm">{r.title}</span>
              <ArrowRight size={14} className="text-[var(--brand-blue)]" />
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-14 text-center">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--brand-blue)]/25 blur-[120px]" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Ready to start your <span className="text-gradient-brand">{serviceName.toLowerCase()}</span> project?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Free 30‑minute strategy call. We'll map the fastest path from idea to launch.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-primary-glow hover:[&]:btn-primary-glow-hover inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium">
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
    </Layout>
  );
}
