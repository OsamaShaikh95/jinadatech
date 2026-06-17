import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section, SectionHeader } from "@/components/site/Section";
import { Code2, Smartphone, Brain, Search, Handshake, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Web, Mobile, AI & Growth | Jinada Tech" },
      { name: "description", content: "Website and app development, SEO and marketing, AI automation, and complete digital partnership for modern businesses." },
      { property: "og:title", content: "Services | Jinada Tech" },
      { property: "og:description", content: "End-to-end product, AI and growth services from a senior team." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { icon: Code2, title: "Website Development", subtitle: "Website Build & Launch", desc: "We design custom websites to attract customers, showcase your brand and convert visitors into leads.", points: ["Marketing sites & landing pages", "Custom design systems", "Headless CMS", "Core Web Vitals & SEO-ready"] },
  { icon: Smartphone, title: "App Development", subtitle: "App Development & Growth", desc: "End-to-end mobile app development, deployment, and growth strategies that help businesses scale.", points: ["iOS & Android", "React Native / Expo", "App Store launch", "Post-launch growth"] },
  { icon: Search, title: "SEO & Marketing", subtitle: "Traffic & Digital Growth", desc: "SEO, content marketing, and social media strategies designed to increase visibility, traffic, and conversions.", points: ["Technical SEO audits", "Content & link building", "Social media management", "Paid acquisition"] },
  { icon: Brain, title: "AI & Automation", subtitle: "AI & Business Automation", desc: "Automate repetitive tasks, streamline operations, and boost productivity with custom AI-powered workflows.", points: ["Custom AI agents", "RAG & vector search", "Workflow automation", "Internal copilots"] },
  { icon: Handshake, title: "Complete Partnership", subtitle: "Your All-In-One Digital Partner", desc: "From websites and apps to marketing, SEO, and automation—we handle your digital growth so you can focus on your business.", points: ["Dedicated senior team", "Strategy & roadmap", "Ongoing iteration", "24/7 support"] },
];

function Services() {
  return (
    <Layout>
      <Section>
        <SectionHeader
          as="h1"
          eyebrow="Services"
          title={<>Everything you need to <span className="text-gradient-brand">build, automate</span> and scale</>}
          description="One senior team across product, engineering, AI and growth — engaged the way you need."
        />
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s, i) => {
            const isLast = i === services.length - 1;
            return (
              <div key={s.title} className={`group relative glass rounded-2xl p-7 hover:border-white/20 transition ${isLast ? "md:col-span-2" : ""}`}>
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl glass-strong text-[var(--brand-blue)] group-hover:text-[var(--brand-blue-soft)] transition shrink-0">
                    <s.icon size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <p className="mt-1 text-xs uppercase tracking-widest text-[var(--brand-blue)]">{s.subtitle}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                    <ul className={`mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 ${isLast ? "md:grid-cols-4" : ""}`}>
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-foreground/90">
                          <Check size={14} className="text-[var(--brand-blue)]" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 glass-strong rounded-3xl p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold">Not sure where to start?</h3>
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
