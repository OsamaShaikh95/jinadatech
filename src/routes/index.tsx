import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section, SectionHeader } from "@/components/site/Section";
import {
  ArrowRight, Code2, Smartphone, Brain, ShoppingBag, Search, Sparkles,
  Zap, ShieldCheck, Rocket, Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "4NodeTech — Building Digital Products, AI Solutions & Growth Engines" },
      { name: "description", content: "We help startups and businesses launch, automate, and scale through technology, design, and AI." },
      { property: "og:title", content: "4NodeTech — Building Digital Products & AI" },
      { property: "og:description", content: "Software, AI and digital growth agency for modern businesses." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Code2, title: "Web Development", desc: "Blazing-fast websites and web apps built on modern stacks." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native-feeling iOS and Android products that scale." },
  { icon: Brain, title: "AI Solutions", desc: "LLM agents, automation and intelligent workflows." },
  { icon: ShoppingBag, title: "Shopify", desc: "High-converting commerce stores with bespoke themes." },
  { icon: Search, title: "SEO & Marketing", desc: "Technical SEO and content engines that compound." },
  { icon: Sparkles, title: "Branding & Leads", desc: "Identity systems and pipelines that drive growth." },
];

const reasons = [
  { icon: Zap, title: "Velocity", desc: "Ship in weeks, not quarters. Senior engineers, no handoffs." },
  { icon: Brain, title: "AI-native", desc: "Automation and AI baked into every product we deliver." },
  { icon: ShieldCheck, title: "Production-grade", desc: "Secure, observable, and built to scale from day one." },
  { icon: Rocket, title: "Growth-focused", desc: "We measure outcomes — revenue, retention, conversions." },
];

const testimonials = [
  { quote: "4NodeTech rebuilt our platform and launched our AI agent in 6 weeks. Conversions doubled.", name: "Priya Shah", role: "Founder, Lumen Health" },
  { quote: "They feel like an in-house team. Strategy, design, engineering — all under one roof.", name: "Marcus Lee", role: "CTO, Northwind" },
  { quote: "Best agency we've worked with. Their automation work alone saved us 30 hours a week.", name: "Elena Garcia", role: "COO, Vela Studio" },
];

function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[var(--neon-purple)]/20 blur-[140px] animate-pulse-glow" />
        <div className="absolute top-40 right-10 w-[400px] h-[400px] rounded-full bg-[var(--neon-magenta)]/15 blur-[120px]" />
        <div className="absolute top-60 left-10 w-[400px] h-[400px] rounded-full bg-[var(--neon-cyan)]/15 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-32 sm:pt-28 sm:pb-40 text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-cyan)] animate-pulse-glow" />
            Now booking projects for Q3 2026
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] animate-fade-up">
            Building <span className="text-gradient-brand animate-gradient">Digital Products,</span><br className="hidden sm:block" />
            AI Solutions, and Growth Engines<br className="hidden sm:block" />
            for Modern Businesses.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground animate-fade-up">
            We help startups and businesses launch, automate, and scale through technology, design, and AI.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up">
            <Link to="/contact" className="btn-primary-glow hover:[&]:btn-primary-glow-hover inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium">
              Start a project <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="glass-strong inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition">
              Explore services
            </Link>
          </div>

          <div className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-widest text-muted-foreground/70">
            <span>Trusted by ambitious teams</span><span>·</span><span>YC backed</span>
            <span>·</span><span>Series A startups</span><span>·</span><span>D2C brands</span><span>·</span><span>Enterprise</span>
          </div>
        </div>
      </section>

      <Section id="services">
        <SectionHeader
          eyebrow="What we do"
          title={<>End‑to‑end <span className="text-gradient-brand">technology partner</span></>}
          description="From first prototype to scaled product. Six disciplines, one team."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="group relative glass rounded-2xl p-6 hover:border-white/20 transition overflow-hidden">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[var(--neon-cyan)]/0 via-[var(--neon-purple)]/0 to-[var(--neon-magenta)]/0 group-hover:from-[var(--neon-cyan)]/20 group-hover:via-[var(--neon-purple)]/20 group-hover:to-[var(--neon-magenta)]/20 transition opacity-60 pointer-events-none" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl glass-strong text-[var(--neon-cyan)] group-hover:text-[var(--neon-magenta)] transition">
                  <s.icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            See all services <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Why 4NodeTech"
          title={<>Built like a <span className="text-gradient-brand">product team,</span> priced like an agency</>}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((r) => (
            <div key={r.title} className="glass rounded-2xl p-6">
              <r.icon size={22} className="text-[var(--neon-cyan)]" />
              <h3 className="mt-4 font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 glass-strong rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[["80+","Products shipped"],["6 wks","Avg. time to launch"],["3.4x","Average ROI delivered"],["24/7","Support & monitoring"]].map(([n, l]) => (
            <div key={l}>
              <div className="text-3xl sm:text-4xl font-semibold text-gradient-brand">{n}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Testimonials" title={<>Loved by <span className="text-gradient-brand">founders</span> and operators</>} />
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6 flex flex-col">
              <div className="flex gap-0.5 text-[var(--neon-cyan)]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="mt-4 text-sm text-foreground/90 flex-1">"{t.quote}"</p>
              <div className="mt-6">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-16 text-center">
          <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--neon-purple)]/25 blur-[120px]" />
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
              Let's build your <span className="text-gradient-brand">next big thing.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Free 30‑minute strategy call. We'll map the fastest path from idea to launch.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-primary-glow hover:[&]:btn-primary-glow-hover inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium">
                Book a call <ArrowRight size={16} />
              </Link>
              <a href="mailto:info@4nodetech.com" className="glass inline-flex items-center px-6 py-3 rounded-xl font-medium hover:bg-white/5 transition">
                info@4nodetech.com
              </a>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
