import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Cpu, Database, MessageSquare, Workflow, Zap, Brain, X, Check } from "lucide-react";
import { Layout } from "../Layout";
import { Breadcrumbs } from "../Breadcrumbs";
import { FAQ } from "../FAQ";
import { type ServicePageData, buildServiceLd, buildFaqLd } from "./types";

/**
 * AI & AUTOMATION
 * Sections:
 *   1. Hero
 *   2. Workflow Diagram (connected nodes)
 *   3. Automation Use Cases
 *   4. Before vs After Comparison
 *   5. AI Agent Architecture
 *   6. Integration Showcase
 *   7. FAQ
 *   8. CTA
 */

const WORKFLOW_NODES = [
  { icon: MessageSquare, label: "Trigger", sub: "Email / Form / API" },
  { icon: Brain, label: "AI Reasoning", sub: "Classify • Extract • Decide" },
  { icon: Database, label: "Data Lookup", sub: "CRM • Postgres • Docs" },
  { icon: Workflow, label: "Action", sub: "Reply • Update • Notify" },
];

const BEFORE_AFTER = [
  { before: "Manual data entry into CRM after every call", after: "Calls auto-transcribed, summarized, and synced to records" },
  { before: "Support team drowning in repetitive tickets", after: "AI agent resolves 70% of L1 tickets autonomously" },
  { before: "Reports stitched together by hand each week", after: "Live dashboards regenerated on a schedule" },
  { before: "Leads sit untouched until a human can qualify", after: "Inbound leads scored and routed in under 60 seconds" },
];

const INTEGRATIONS = [
  "OpenAI", "Anthropic", "Gemini", "Slack", "HubSpot", "Salesforce",
  "Zapier", "n8n", "Postgres", "Stripe", "Notion", "Gmail",
];

export function AiAutomationLayout(d: ServicePageData) {
  const accent = d.accent;
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  const softBg = `color-mix(in oklab, ${accent} 10%, transparent)`;
  const style = { ["--svc-accent" as any]: accent } as React.CSSProperties;

  return (
    <Layout>
      <article style={style} className="relative">
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />

        {/* 1. HERO */}
        <header className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `linear-gradient(${accent} 1px, transparent 1px), linear-gradient(90deg, ${accent} 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[180px] opacity-20 pointer-events-none" style={{ background: accent }} />
          <div className="mx-auto max-w-6xl px-4 relative">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: d.serviceName, href: `/services/${d.slug}` }]} />
            <div className="mt-10 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] mb-6 px-3 py-1 rounded-full border" style={{ color: accent, borderColor: soft, background: softBg }}>
                <Cpu size={12} /> {d.eyebrow}
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">{d.h1}</h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">{d.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition cursor-pointer" style={{ background: accent }}>Automate Something <ArrowRight size={16} /></Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border hover:bg-white/5 transition cursor-pointer" style={{ borderColor: soft }}>Book a Discovery Call</Link>
              </div>
            </div>
          </div>
        </header>

        {/* 2. WORKFLOW DIAGRAM */}
        <section className="border-y" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-7xl px-4 py-20">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3 text-center" style={{ color: accent }}>How it works</div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-16">A typical automation flow.</h2>
            <div className="relative">
              <div className="grid md:grid-cols-4 gap-6 lg:gap-2 items-stretch relative">
                {WORKFLOW_NODES.map((n, i) => {
                  const Icon = n.icon;
                  return (
                    <div key={n.label} className="relative flex items-center">
                      <div className="flex-1 rounded-2xl border p-6 bg-background relative z-10" style={{ borderColor: soft }}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl grid place-items-center" style={{ background: softBg, color: accent }}>
                            <Icon size={18} />
                          </div>
                          <span className="text-[10px] font-mono" style={{ color: accent }}>0{i + 1}</span>
                        </div>
                        <h3 className="font-semibold">{n.label}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{n.sub}</p>
                      </div>
                      {i < WORKFLOW_NODES.length - 1 && (
                        <div className="hidden md:flex items-center justify-center w-6 flex-shrink-0">
                          <ArrowRight size={18} style={{ color: accent }} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 3. USE CASES — hex-style cards */}
        <section className="mx-auto max-w-7xl px-4 py-24">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">Where AI earns its keep.</h2>
          <p className="text-muted-foreground mb-12 max-w-xl">High-leverage automations we deploy across teams.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {d.included.map((item) => {
              const Icon = item.icon!;
              return (
                <div key={item.title} className="relative rounded-2xl border p-6 bg-card/40 overflow-hidden group" style={{ borderColor: soft }}>
                  <div className="absolute top-0 right-0 w-32 h-32 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition" style={{ background: accent }} />
                  <div className="relative">
                    <Icon size={24} style={{ color: accent }} />
                    <h3 className="mt-4 font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. BEFORE vs AFTER */}
        <section className="border-t" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-6xl px-4 py-24">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12 text-center">Before & after.</h2>
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
              <div className="rounded-2xl border p-6" style={{ borderColor: "color-mix(in oklab, red 25%, transparent)", background: "color-mix(in oklab, red 4%, transparent)" }}>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-6" style={{ color: "color-mix(in oklab, red 70%, white)" }}><X size={14} /> Manual</div>
                <ul className="space-y-4">
                  {BEFORE_AFTER.map((b) => (
                    <li key={b.before} className="text-sm text-muted-foreground border-b pb-4 last:border-0" style={{ borderColor: soft }}>{b.before}</li>
                  ))}
                </ul>
              </div>
              <div className="flex md:flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full grid place-items-center text-background" style={{ background: accent }}>
                  <ArrowRight size={20} className="md:rotate-0 rotate-90" />
                </div>
              </div>
              <div className="rounded-2xl border p-6" style={{ borderColor: soft, background: softBg }}>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-6" style={{ color: accent }}><Check size={14} /> Automated</div>
                <ul className="space-y-4">
                  {BEFORE_AFTER.map((b) => (
                    <li key={b.after} className="text-sm border-b pb-4 last:border-0" style={{ borderColor: soft }}>{b.after}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. AI AGENT ARCHITECTURE */}
        <section className="mx-auto max-w-7xl px-4 py-24">
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>Architecture</div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12 max-w-2xl">Inside a Jinada AI agent.</h2>
          <div className="rounded-3xl border p-8 lg:p-12 relative overflow-hidden" style={{ borderColor: soft, background: `radial-gradient(circle at 50% 0%, ${softBg}, transparent 60%)` }}>
            <div className="grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 items-center">
              <ArchBlock accent={accent} title="Inputs" items={["User message", "API event", "Scheduled trigger"]} />
              <ArrowRight className="hidden lg:block mx-auto" style={{ color: accent }} />
              <div className="rounded-2xl border-2 p-6 text-center" style={{ borderColor: accent, background: softBg }}>
                <Brain size={32} className="mx-auto mb-3" style={{ color: accent }} />
                <div className="font-semibold">LLM Core</div>
                <div className="text-xs text-muted-foreground mt-1">GPT-5 • Claude • Gemini</div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] font-mono">
                  <div className="px-2 py-1 rounded border" style={{ borderColor: soft }}>Memory</div>
                  <div className="px-2 py-1 rounded border" style={{ borderColor: soft }}>Tools</div>
                  <div className="px-2 py-1 rounded border" style={{ borderColor: soft }}>Guardrails</div>
                  <div className="px-2 py-1 rounded border" style={{ borderColor: soft }}>Logs</div>
                </div>
              </div>
              <ArrowRight className="hidden lg:block mx-auto" style={{ color: accent }} />
              <ArchBlock accent={accent} title="Outputs" items={["Response", "DB write", "Notification"]} />
            </div>
          </div>
        </section>

        {/* 6. INTEGRATIONS */}
        <section className="border-t" style={{ borderColor: soft, background: softBg }}>
          <div className="mx-auto max-w-7xl px-4 py-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">Plays nicely with your stack.</h2>
            <p className="text-muted-foreground mb-12 max-w-xl mx-auto">Connect to the tools your team already uses.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {INTEGRATIONS.map((name) => (
                <div key={name} className="px-5 py-3 rounded-xl border font-mono text-sm bg-background hover:bg-card transition" style={{ borderColor: soft }}>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="border-t" style={{ borderColor: soft }}>
          <div className="mx-auto max-w-4xl px-4 py-24">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-10 text-center">Frequently asked.</h2>
            <FAQ items={d.faqs} title="" />
          </div>
        </section>

        {/* 8. CTA */}
        <section className="border-t relative overflow-hidden" style={{ borderColor: soft }}>
          <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 100%, ${accent}, transparent 60%)` }} />
          <div className="mx-auto max-w-3xl px-4 py-24 text-center relative">
            <Zap size={32} className="mx-auto mb-6" style={{ color: accent }} />
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">What should we automate first?</h2>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background hover:opacity-90 transition cursor-pointer" style={{ background: accent }}>
              Book a Discovery Call <ArrowRight size={16} />
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

function ArchBlock({ accent, title, items }: { accent: string; title: string; items: string[] }) {
  const soft = `color-mix(in oklab, ${accent} 22%, transparent)`;
  return (
    <div className="space-y-2">
      <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-2 text-center" style={{ color: accent }}>{title}</div>
      {items.map((it) => (
        <div key={it} className="rounded-lg border px-4 py-3 text-sm font-mono text-center bg-background" style={{ borderColor: soft }}>{it}</div>
      ))}
    </div>
  );
}
