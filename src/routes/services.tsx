import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section, SectionHeader } from "@/components/site/Section";
import { Code2, Smartphone, Brain, ShoppingBag, Search, Sparkles, Cloud, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Web, Mobile, AI, Shopify, SEO & Branding | 4NodeTech" },
      { name: "description", content: "Full-stack technology services: web and mobile development, AI solutions, Shopify, SEO and branding for modern businesses." },
      { property: "og:title", content: "Services | 4NodeTech" },
      { property: "og:description", content: "End-to-end product, AI and growth services from a senior team." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { icon: Code2, title: "Web Development", desc: "High-performance marketing sites, dashboards and SaaS platforms on Next.js, React and edge-native stacks.", points: ["Marketing sites & landing pages", "SaaS dashboards", "Headless CMS", "Core Web Vitals"] },
  { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform and native mobile apps with delightful UX and rock-solid release pipelines.", points: ["iOS & Android", "React Native / Expo", "Offline-first", "App Store launch"] },
  { icon: Brain, title: "AI Solutions & Automation", desc: "LLM agents, RAG systems, workflow automation and internal copilots tuned to your business.", points: ["Custom GPT agents", "RAG & vector search", "n8n / Zapier", "AI copilots"] },
  { icon: ShoppingBag, title: "Shopify Development", desc: "High-converting storefronts with custom themes, headless commerce and conversion optimization.", points: ["Custom themes", "Headless (Hydrogen)", "Subscriptions & upsells", "CRO & A/B testing"] },
  { icon: Search, title: "SEO & Digital Marketing", desc: "Technical SEO, programmatic content and growth experiments that compound month over month.", points: ["Technical audits", "Programmatic SEO", "Content & links", "Paid acquisition"] },
  { icon: Sparkles, title: "Branding & Lead Generation", desc: "Identity systems, positioning and lead pipelines built around your ideal customer.", points: ["Brand identity", "Pitch & sales decks", "Outbound systems", "Landing funnels"] },
  { icon: Cloud, title: "Cloud & DevOps Consulting", desc: "Production-grade cloud, CI/CD and observability so your team can ship without fear.", points: ["AWS / GCP / Cloudflare", "CI/CD pipelines", "Observability", "Cost optimization"] },
];

function Services() {
  return (
    <Layout>
      <Section>
        <SectionHeader
          eyebrow="Services"
          title={<>Everything you need to <span className="text-gradient-brand">build, automate</span> and scale</>}
          description="One senior team across product, engineering, AI and growth — engaged the way you need."
        />
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s) => (
            <div key={s.title} className="group relative glass rounded-2xl p-7 hover:border-white/20 transition">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl glass-strong text-[var(--neon-cyan)] group-hover:text-[var(--neon-magenta)] transition shrink-0">
                  <s.icon size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-foreground/90">
                        <Check size={14} className="text-[var(--neon-cyan)]" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
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
