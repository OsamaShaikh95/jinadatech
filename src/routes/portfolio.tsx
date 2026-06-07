import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section, SectionHeader } from "@/components/site/Section";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Selected work & case studies | 4NodeTech" },
      { name: "description", content: "A selection of products, platforms and AI systems we've shipped for startups, brands and enterprises." },
      { property: "og:title", content: "Portfolio | 4NodeTech" },
      { property: "og:description", content: "Case studies and selected work from the 4NodeTech team." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const projects = [
  { name: "Lumen Health", tag: "AI · Healthcare", desc: "AI triage assistant and patient portal that cut intake time by 62%.", metric: "+118% conversions", grad: "from-[var(--neon-cyan)] to-[var(--neon-purple)]" },
  { name: "Northwind Commerce", tag: "Shopify · D2C", desc: "Headless Shopify rebuild with custom CMS and subscriptions.", metric: "3.4x AOV growth", grad: "from-[var(--neon-purple)] to-[var(--neon-magenta)]" },
  { name: "Vela Studio", tag: "Web · Branding", desc: "End-to-end rebrand and product site for a creative studio.", metric: "12s → 1.2s LCP", grad: "from-[var(--neon-magenta)] to-[var(--neon-cyan)]" },
  { name: "Atlas DevOps", tag: "Cloud · SaaS", desc: "Internal observability platform with custom dashboards and alerts.", metric: "−42% MTTR", grad: "from-[var(--neon-cyan)] to-[var(--neon-magenta)]" },
  { name: "Orbit Mobile", tag: "iOS · Android", desc: "Cross-platform fitness app with offline sync and AI coach.", metric: "4.8★ App Store", grad: "from-[var(--neon-purple)] to-[var(--neon-cyan)]" },
  { name: "Pulse Marketing", tag: "SEO · Growth", desc: "Programmatic SEO engine generating 18k organic visits/mo.", metric: "+412% organic", grad: "from-[var(--neon-magenta)] to-[var(--neon-purple)]" },
];

function Portfolio() {
  return (
    <Layout>
      <Section>
        <SectionHeader
          eyebrow="Selected work"
          title={<>Products we've <span className="text-gradient-brand">shipped</span></>}
          description="A snapshot of recent work across product, AI and growth. Detailed case studies available on request."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <article key={p.name} className="group relative overflow-hidden glass rounded-2xl">
              <div className={`relative aspect-[16/9] bg-gradient-to-br ${p.grad} overflow-hidden`}>
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <svg className="absolute inset-0 w-full h-full opacity-80 mix-blend-screen" viewBox="0 0 400 225" fill="none">
                  <polygon points="80,40 200,90 120,180" stroke="white" strokeOpacity="0.7" strokeWidth="1.5" fill="white" fillOpacity="0.05" />
                  <polygon points="200,60 320,120 240,200" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" fill="white" fillOpacity="0.05" />
                  <polygon points="140,100 260,140 200,200" stroke="white" strokeOpacity="0.5" strokeWidth="1" fill="white" fillOpacity="0.04" />
                </svg>
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs">{p.tag}</div>
              </div>
              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-3 inline-flex items-center text-xs font-medium text-gradient-brand">{p.metric}</div>
                </div>
                <button className="shrink-0 glass-strong w-10 h-10 rounded-xl inline-flex items-center justify-center group-hover:text-[var(--neon-magenta)] transition">
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 glass-strong rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 sm:p-14">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Featured case study</div>
              <h3 className="mt-3 text-2xl sm:text-3xl font-semibold">
                How <span className="text-gradient-brand">Lumen Health</span> launched an AI triage product in 6 weeks
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">
                We partnered with Lumen's founding team to design, build and launch a HIPAA‑aware
                triage assistant and patient portal. The result: faster intake, higher conversions and
                a clear path to Series A.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                <li>• Discovery & product strategy</li>
                <li>• Custom LLM agent with retrieval</li>
                <li>• Patient portal & admin dashboard</li>
                <li>• Launch, analytics & ongoing iteration</li>
              </ul>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-[var(--neon-cyan)]">
                Request the full case study <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className="relative min-h-[300px] bg-gradient-to-br from-[var(--neon-purple)] via-[var(--neon-magenta)] to-[var(--neon-cyan)]">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <svg className="absolute inset-0 w-full h-full opacity-80 mix-blend-screen" viewBox="0 0 400 400" fill="none">
                <polygon points="100,80 260,150 160,320" stroke="white" strokeOpacity="0.7" strokeWidth="1.5" fill="white" fillOpacity="0.05" />
                <polygon points="220,100 340,200 240,340" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" fill="white" fillOpacity="0.05" />
              </svg>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
