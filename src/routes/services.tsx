import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section, SectionHeader } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Code2, Smartphone, Brain, Search, Handshake, ArrowRight, Check } from "lucide-react";

const SITE = "https://jinadatech.com";
const TITLE = "Services — Web, Mobile, AI & Growth | Jinada Tech";
const DESC = "Website and app development, SEO and marketing, AI automation, and complete digital partnership for modern businesses.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/services` },
      { property: "og:image", content: `${SITE}/jinada-mark.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: `${SITE}/jinada-mark.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/services` }],
  }),
  component: Services,
});

type ServiceCard = {
  icon: typeof Code2;
  title: string;
  subtitle: string;
  desc: string;
  points: string[];
  href?: "/services/website-development" | "/services/mobile-app-development" | "/services/seo-marketing" | "/services/ai-automation";
};

const services: ServiceCard[] = [
  { icon: Code2, title: "Website Development", subtitle: "Website Build & Launch", desc: "We design custom websites to attract customers, showcase your brand and convert visitors into leads.", points: ["Marketing sites & landing pages", "Custom design systems", "Headless CMS", "Core Web Vitals & SEO-ready"], href: "/services/website-development" },
  { icon: Smartphone, title: "App Development", subtitle: "App Development & Growth", desc: "End-to-end mobile app development, deployment, and growth strategies that help businesses scale.", points: ["iOS & Android", "React Native / Expo", "App Store launch", "Post-launch growth"], href: "/services/mobile-app-development" },
  { icon: Search, title: "SEO & Marketing", subtitle: "Traffic & Digital Growth", desc: "SEO, content marketing, and social media strategies designed to increase visibility, traffic, and conversions.", points: ["Technical SEO audits", "Content & link building", "Social media management", "Paid acquisition"], href: "/services/seo-marketing" },
  { icon: Brain, title: "AI & Automation", subtitle: "AI & Business Automation", desc: "Automate repetitive tasks, streamline operations, and boost productivity with custom AI-powered workflows.", points: ["Custom AI agents", "RAG & vector search", "Workflow automation", "Internal copilots"], href: "/services/ai-automation" },
  { icon: Handshake, title: "Complete Partnership", subtitle: "Your All-In-One Digital Partner", desc: "From websites and apps to marketing, SEO, and automation—we handle your digital growth so you can focus on your business.", points: ["Dedicated senior team", "Strategy & roadmap", "Ongoing iteration", "24/7 support"] },
];

function Services() {
  return (
    <Layout>
      <Section>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
          ]}
        />
        <SectionHeader
          as="h1"
          eyebrow="Services"
          title={<>Everything you need to <span className="text-gradient-brand">build, automate</span> and scale</>}
          description="One senior team across product, engineering, AI and growth — engaged the way you need."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((s) => {
            const Card = (
              <div className="group relative glass rounded-2xl p-6 hover:border-white/20 transition flex flex-col h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl glass-strong text-[var(--brand-blue)] group-hover:text-[var(--brand-blue-soft)] transition shrink-0">
                  <s.icon size={22} />
                </div>
                <h2 className="mt-4 text-lg font-semibold leading-snug min-h-[3.5rem]">{s.title}</h2>
                <p className="mt-1 text-xs uppercase tracking-widest text-[var(--brand-blue)] leading-snug min-h-[2.25rem]">{s.subtitle}</p>
                <p className="mt-2 text-sm text-muted-foreground min-h-[6.5rem]">{s.desc}</p>
                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-foreground/90">
                      <Check size={14} className="text-[var(--brand-blue)] shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
                {s.href && (
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-[var(--brand-blue)] group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                )}
              </div>
            );
            return s.href ? (
              <Link key={s.title} to={s.href} className="block cursor-pointer">
                {Card}
              </Link>
            ) : (
              <div key={s.title}>{Card}</div>
            );
          })}
        </div>

        <div className="mt-16 glass-strong rounded-3xl p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Not sure where to start?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Tell us about your goals. We'll recommend the fastest path — even if it isn't with us.
          </p>
          <Link to="/contact" className="mt-6 btn-primary-glow hover:[&]:btn-primary-glow-hover inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium">
            Talk to our team <ArrowRight size={16} />
          </Link>
        </div>
      </Section>
    </Layout>
  );
}
