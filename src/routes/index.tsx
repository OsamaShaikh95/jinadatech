import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section, SectionHeader } from "@/components/site/Section";
import {
  ArrowRight, Code2, Smartphone, Brain, Search, Handshake,
  Zap, ShieldCheck, Rocket, Star,
} from "lucide-react";
import { InteractiveDots } from "@/components/site/InteractiveDots";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jinada Tech — Technology That Helps Your Business Work Smarter" },
      { name: "description", content: "We partner with startups and businesses to create fast, modern software that delivers real business results." },
      { property: "og:title", content: "Jinada Tech — Websites • Apps • AI Automation" },
      { property: "og:description", content: "We partner with startups and businesses to create fast, modern software that delivers real business results." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Code2, title: "Website Development", subtitle: "Website Build & Launch", desc: "We design custom websites to attract customers, showcase your brand and convert visitors into leads." },
  { icon: Smartphone, title: "App Development", subtitle: "App Development & Growth", desc: "End-to-end mobile app development, deployment, and growth strategies that help businesses scale." },
  { icon: Search, title: "SEO & Marketing", subtitle: "Traffic & Digital Growth", desc: "SEO, content marketing, and social media strategies designed to increase visibility, traffic, and conversions." },
  { icon: Brain, title: "AI & Automation", subtitle: "AI & Business Automation", desc: "Automate repetitive tasks, streamline operations, and boost productivity with custom AI-powered workflows." },
  { icon: Handshake, title: "Complete Partnership", subtitle: "Your All-In-One Digital Partner", desc: "From websites and apps to marketing, SEO, and automation—we handle your digital growth so you can focus on your business." },
];

const reasons = [
  { icon: Zap, title: "Fast Delivery", desc: "Projects delivered efficiently with clear communication." },
  { icon: Brain, title: "AI-Powered Solutions", desc: "Automation and AI integrated where it matters." },
  { icon: ShieldCheck, title: "Growth Focused", desc: "Built to generate leads, sales, and business growth." },
  { icon: Rocket, title: "Direct Partnership", desc: "Work directly with experienced developers and marketers." },
];

const advantages = [
  ["100% Custom Solutions", "Built around your business goals"],
  ["Transparent Pricing", "No hidden costs or surprises"],
  ["Direct Founder Access", "Speak directly with the people building your project"],
  ["Long-Term Partnership", "Support beyond launch"],
];

const testimonials = [
  { quote: "Jinada Tech rebuilt our platform and launched our AI agent in 6 weeks. Conversions doubled.", name: "Priya Shah", role: "Founder, Lumen Health" },
  { quote: "They feel like an in-house team. Strategy, design, engineering — all under one roof.", name: "Marcus Lee", role: "CTO, Northwind" },
  { quote: "Best partner we've worked with. Their automation work alone saved us 30 hours a week.", name: "Elena Garcia", role: "COO, Vela Studio" },
];

function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />
        <InteractiveDots size={1000} step={4} />
        <div className="absolute -top-96 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[var(--brand-blue)]/10 blur-[160px] animate-pulse-glow" />
        <div className="absolute top-40 right-10 w-[400px] h-[400px] rounded-full bg-[var(--brand-blue-soft)]/15 blur-[120px]" />
        <div className="absolute top-60 left-10 w-[400px] h-[400px] rounded-full bg-[var(--brand-blue)]/15 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-32 sm:pt-28 sm:pb-40 text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-foreground animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-blue)] animate-pulse-glow" />
            Websites • Apps • AI Automation
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] animate-fade-up">
            <span className="text-gradient-brand animate-gradient">Technology</span> That Helps<br className="hidden sm:block" />
            Your Business Work Smarter
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-foreground animate-fade-up">
            We partner with startups and businesses to create fast, modern software that delivers real business results.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up">
            <Link to="/contact" className="btn-primary-glow hover:[&]:btn-primary-glow-hover inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium">
              Start a Project <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="glass-strong inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition">
              Explore Services
            </Link>
          </div>

          <div className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-widest font-semibold text-muted-foreground">
            <span>Trusted by ambitious teams</span><span>·</span><span>Startups</span>
            <span>·</span><span>Local businesses</span><span>·</span><span>D2C brands</span><span>·</span><span>Enterprise</span>
          </div>
        </div>
      </section>

      <Section id="services">
        <SectionHeader
          eyebrow="What we do"
          title={<>End‑to‑end <span className="text-gradient-brand">technology partner</span></>}
          description="From first prototype to scaled product. Six disciplines, one senior team."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="group relative glass rounded-2xl p-6 hover:border-white/20 transition overflow-hidden">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[var(--brand-blue)]/0 via-[var(--brand-blue-soft)]/0 to-[var(--brand-blue)]/0 group-hover:from-[var(--brand-blue)]/20 group-hover:via-[var(--brand-blue-soft)]/15 group-hover:to-[var(--brand-blue)]/20 transition opacity-60 pointer-events-none" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl glass-strong text-[var(--brand-blue)] group-hover:text-[var(--brand-blue-soft)] transition">
                  <s.icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-[var(--brand-blue)]">{s.subtitle}</p>
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
          eyebrow="Why Jinada Tech"
          title={<>Technology, Marketing & <span className="text-gradient-brand">Growth Under One Roof</span></>}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((r) => (
            <div key={r.title} className="glass rounded-2xl p-6">
              <r.icon size={22} className="text-[var(--brand-blue)]" />
              <h3 className="mt-4 font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 glass-strong rounded-3xl p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {advantages.map(([title, text]) => (
            <div key={title}>
              <div className="text-lg sm:text-xl font-semibold text-gradient-brand">{title}</div>
              <div className="mt-2 text-sm text-muted-foreground">{text}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Testimonials" title={<>Loved by <span className="text-gradient-brand">founders</span> and operators</>} />
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6 flex flex-col">
              <div className="flex gap-0.5 text-[var(--brand-blue)]">
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
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--brand-blue)]/25 blur-[120px]" />
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
              Let's build your <span className="text-gradient-brand">next big thing.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Free 30‑minute strategy call. We'll map the fastest path from idea to launch.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-primary-glow hover:[&]:btn-primary-glow-hover inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium">
                Start a Project <ArrowRight size={16} />
              </Link>
              <a href="mailto:info@jinadatech.com" className="glass inline-flex items-center px-6 py-3 rounded-xl font-medium hover:bg-white/5 transition">
                info@jinadatech.com
              </a>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
