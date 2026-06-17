import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, MessageCircle, Users, Handshake } from "lucide-react";
import { Layout } from "../Layout";
import { Breadcrumbs } from "../Breadcrumbs";
import { FAQ } from "../FAQ";
import { type ServicePageData, buildServiceLd, buildFaqLd } from "./types";

/**
 * WEBSITE DEVELOPMENT — human, trust-first redesign.
 * Sections:
 *   1. Hero
 *   2. Project Examples (realistic showcase tiles)
 *   3. What You Get (outcomes, not tech)
 *   4. Who You'll Work With (trust section)
 *   5. Our Process (client-friendly)
 *   6. Technology (lower, for technical buyers)
 *   7. FAQ
 *   8. CTA
 */

const PROJECTS = [
  {
    industry: "Dental Clinic",
    name: "Northside Dental",
    blurb: "Booking-focused site with clear pricing, team bios, and an online appointment request form.",
    tags: ["Marketing site", "Booking form", "Local SEO"],
    palette: { bg: "#e8f4fb", ink: "#0b2540", accent: "#3DA9FC" },
  },
  {
    industry: "B2B SaaS",
    name: "Loop Analytics",
    blurb: "Product marketing site with pricing tiers, docs, and a customer story section.",
    tags: ["SaaS", "Pricing page", "Docs"],
    palette: { bg: "#0f172a", ink: "#e2e8f0", accent: "#60a5fa" },
  },
  {
    industry: "Boutique Café",
    name: "Maple & Oat",
    blurb: "Warm, image-led site with menu, opening hours, and an Instagram-driven gallery.",
    tags: ["Small business", "Menu", "Instagram feed"],
    palette: { bg: "#f5efe6", ink: "#3b2a1a", accent: "#b8732d" },
  },
  {
    industry: "Law Firm",
    name: "Hartley & Co.",
    blurb: "Credibility-first site with practice areas, attorney profiles, and a secure intake form.",
    tags: ["Professional services", "Intake form", "Bios"],
    palette: { bg: "#10182a", ink: "#e7ecf3", accent: "#c9a96a" },
  },
  {
    industry: "E-commerce",
    name: "Ridge Goods",
    blurb: "Headless storefront connected to Shopify with a custom-designed product page template.",
    tags: ["Shopify", "Headless", "Product pages"],
    palette: { bg: "#fbf7f2", ink: "#1d1d1d", accent: "#2f6b4f" },
  },
  {
    industry: "Fitness Studio",
    name: "Form Studio",
    blurb: "Class schedule, trainer profiles, and a membership signup flow integrated with Stripe.",
    tags: ["Bookings", "Stripe", "Schedule"],
    palette: { bg: "#0b0b0d", ink: "#fafafa", accent: "#e94f3a" },
  },
];

const TECH_STACK = [
  { group: "Frontend", items: ["React", "TanStack Start", "Next.js", "TypeScript", "Tailwind"] },
  { group: "CMS", items: ["Sanity", "Payload", "Contentful", "Storyblok"] },
  { group: "Backend", items: ["Node", "Postgres", "Supabase", "Stripe"] },
  { group: "Hosting", items: ["Vercel", "Cloudflare", "AWS"] },
];

export function WebsiteDevelopmentLayout(d: ServicePageData) {
  const accent = d.accent;
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 8%, transparent)`;
  const style = { ["--svc-accent" as any]: accent } as React.CSSProperties;

  return (
    <Layout>
      <article style={style} className="relative">
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />

        {/* 1. HERO */}
        <header className="relative pt-24 pb-16">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[760px] h-[560px] rounded-full blur-[140px] opacity-25 pointer-events-none" style={{ background: accent }} />
          <div className="mx-auto max-w-5xl px-4 text-center relative">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: d.serviceName, href: `/services/${d.slug}` }]} />
            <div className="text-[11px] font-mono uppercase tracking-[0.3em] mt-8 mb-6" style={{ color: accent }}>{d.eyebrow}</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">{d.h1}</h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">{d.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition cursor-pointer" style={{ background: accent }}>Get a Free Quote <ArrowRight size={16} /></Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border hover:bg-white/5 transition cursor-pointer" style={{ borderColor: soft }}>Book a Discovery Call</Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              {d.stats.map((s) => (
                <span key={s.label} className="inline-flex items-center gap-2">
                  <span className="font-semibold text-foreground">{s.value}</span> {s.label}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* 2. PROJECT EXAMPLES */}
        <section className="mx-auto max-w-7xl px-4 pb-24">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>Example Projects</div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl">The kinds of websites we build.</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">A snapshot of typical projects across different industries — each tailored to the business behind it.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.name} project={p} soft={soft} />
            ))}
          </div>
        </section>

        {/* 3. WHAT YOU GET */}
        <section className="border-y" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-7xl px-4 py-20">
            <div className="max-w-2xl mb-12">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>What You Get</div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Everything included in a typical build.</h2>
              <p className="mt-4 text-muted-foreground">No surprise add-ons. These are part of every website we deliver.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {d.included.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border p-6 bg-background hover:bg-card/60 transition" style={{ borderColor: soft }}>
                    <div className="flex items-center gap-3 mb-3">
                      {Icon && <Icon size={20} style={{ color: accent }} />}
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. WHO YOU'LL WORK WITH */}
        <section className="mx-auto max-w-6xl px-4 py-24">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>Who You'll Work With</div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">A small team. Direct communication. No middle layers.</h2>
              <p className="mt-5 text-muted-foreground">
                You'll work directly with the people building your project — not an account manager passing notes back to a hidden team. That means faster answers, clearer decisions, and a website that actually reflects what you asked for.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Talk to the designer and developer who build your site",
                  "One shared chat for questions, drafts, and feedback",
                  "Honest scope and timelines — we say no when a feature isn't worth it",
                  "Long-term relationship, not a one-off handover",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="mt-0.5 flex-shrink-0" style={{ color: accent }} />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <TrustCard icon={Users} title="Small team" desc="Two to four people on each project — no overhead, no silos." soft={soft} accent={accent} />
              <TrustCard icon={MessageCircle} title="Direct chat" desc="Slack or WhatsApp with the people doing the work." soft={soft} accent={accent} />
              <TrustCard icon={Handshake} title="Personal approach" desc="We learn your business properly before suggesting anything." soft={soft} accent={accent} />
              <TrustCard icon={Check} title="Honest scope" desc="Clear fixed quotes. No surprise change orders." soft={soft} accent={accent} />
            </div>
          </div>
        </section>

        {/* 5. PROCESS */}
        <section className="border-t" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-4xl px-4 py-24">
            <div className="text-center mb-14">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>How We Work</div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">From first chat to launch day.</h2>
            </div>
            <ol className="relative border-l-2 space-y-10 pl-8" style={{ borderColor: soft }}>
              {d.process.map((p) => (
                <li key={p.title} className="relative">
                  <span className="absolute -left-[42px] top-0 w-6 h-6 rounded-full grid place-items-center text-[10px] font-mono font-semibold text-background" style={{ background: accent }}>{p.step}</span>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground">{p.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 6. TECH STACK — for technical buyers */}
        <section className="mx-auto max-w-6xl px-4 py-24">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>For the technically curious</div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">The tools we tend to reach for.</h2>
              <p className="mt-4 text-muted-foreground">Well-supported, widely-used tools your team — or any future developer — can maintain. We pick what fits the project, not what's trendy.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {TECH_STACK.map((g) => (
                <div key={g.group} className="rounded-2xl border p-6" style={{ borderColor: soft, background: softBg }}>
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-4" style={{ color: accent }}>{g.group}</div>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((i) => (
                      <span key={i} className="text-xs px-3 py-1.5 rounded-full border bg-background" style={{ borderColor: soft }}>{i}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="border-t" style={{ borderColor: soft }}>
          <div className="mx-auto max-w-4xl px-4 py-24">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-10 text-center">Common questions.</h2>
            <FAQ items={d.faqs} title="" />
          </div>
        </section>

        {/* 8. CTA */}
        <section className="border-t relative overflow-hidden" style={{ borderColor: soft }}>
          <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 100%, ${accent}, transparent 60%)` }} />
          <div className="mx-auto max-w-3xl px-4 py-24 text-center relative">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Have a project in mind?</h2>
            <p className="mt-4 text-muted-foreground">Tell us a bit about your business and we'll come back with thoughts, a rough timeline, and a fair quote.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition cursor-pointer" style={{ background: accent }}>
              Let's Discuss Your Project <ArrowRight size={16} />
            </Link>
            <div className="mt-10 flex flex-wrap gap-2 justify-center">
              {d.related.map((r) => (
                <Link key={r.href} to={r.href} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm hover:bg-white/5 transition cursor-pointer" style={{ borderColor: soft }}>
                  {r.title} <ArrowUpRight size={12} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceLd(d)) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqLd(d)) }} />
      </article>
    </Layout>
  );
}

type Project = {
  industry: string;
  name: string;
  blurb: string;
  tags: string[];
  palette: { bg: string; ink: string; accent: string };
};

function ProjectCard({ project, soft }: { project: Project; soft: string }) {
  const { bg, ink, accent } = project.palette;
  const initials = project.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="rounded-2xl border overflow-hidden bg-card/40 backdrop-blur group hover:-translate-y-1 transition flex flex-col" style={{ borderColor: soft }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b text-[10px] text-muted-foreground" style={{ borderColor: soft }}>
        <span className="w-2 h-2 rounded-full bg-red-400/70" />
        <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
        <span className="w-2 h-2 rounded-full bg-green-400/70" />
        <span className="ml-2 font-mono truncate">{project.name.toLowerCase().replace(/[^a-z]/g, "")}.com</span>
      </div>
      {/* Realistic preview */}
      <div className="aspect-[16/10] p-5 flex flex-col" style={{ background: bg, color: ink }}>
        <div className="flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md grid place-items-center font-semibold text-[10px]" style={{ background: accent, color: bg }}>
              {initials}
            </div>
            <span className="font-semibold tracking-tight">{project.name}</span>
          </div>
          <div className="flex gap-3 opacity-70">
            <span>About</span>
            <span>Services</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="mt-5 flex-1 flex flex-col justify-center">
          <div className="text-[11px] uppercase tracking-widest opacity-60" style={{ color: accent }}>{project.industry}</div>
          <div className="mt-1 text-sm font-semibold leading-tight">{project.blurb.split(" ").slice(0, 6).join(" ")}…</div>
          <div className="mt-3 flex gap-2">
            <span className="text-[9px] px-2 py-1 rounded-full font-medium" style={{ background: accent, color: bg }}>Book now</span>
            <span className="text-[9px] px-2 py-1 rounded-full border opacity-70" style={{ borderColor: ink }}>Learn more</span>
          </div>
        </div>
      </div>
      {/* Meta */}
      <div className="p-5 border-t" style={{ borderColor: soft }}>
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="font-semibold text-sm">{project.name}</h3>
          <span className="text-[10px] text-muted-foreground">{project.industry}</span>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2">{project.blurb}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border text-muted-foreground" style={{ borderColor: soft }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TrustCard({ icon: Icon, title, desc, soft, accent }: { icon: any; title: string; desc: string; soft: string; accent: string }) {
  return (
    <div className="rounded-2xl border p-5 bg-card/40" style={{ borderColor: soft }}>
      <Icon size={20} style={{ color: accent }} />
      <h3 className="mt-3 font-semibold text-sm">{title}</h3>
      <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
    </div>
  );
}
