import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section, SectionHeader } from "@/components/site/Section";
import { Mail, Globe, ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Let's build something together | 4NodeTech" },
      { name: "description", content: "Get in touch with 4NodeTech. Tell us about your project and we'll respond within one business day." },
      { property: "og:title", content: "Contact | 4NodeTech" },
      { property: "og:description", content: "Book a free strategy call or send us a project brief." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Field({ label, name, type = "text", placeholder, required = true }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name} type={type} placeholder={placeholder} required={required}
        className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm bg-transparent outline-none focus:border-[var(--neon-cyan)]/60"
      />
    </div>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll be in touch within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <Layout>
      <Section>
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's build <span className="text-gradient-brand">something great</span></>}
          description="Tell us a bit about your project. We respond within one business day."
        />

        <div className="grid lg:grid-cols-5 gap-6">
          <form onSubmit={handleSubmit} className="lg:col-span-3 glass-strong rounded-3xl p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" />
            </div>
            <Field label="Company" name="company" placeholder="Acme Inc." required={false} />
            <div>
              <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Service</label>
              <select
                name="service"
                className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm bg-transparent outline-none focus:border-[var(--neon-cyan)]/60"
                defaultValue=""
              >
                <option value="" disabled className="bg-card">Select a service…</option>
                {["Web Development","Mobile App","AI Solutions","Shopify","SEO & Marketing","Branding","Cloud & DevOps","Not sure yet"].map(s => (
                  <option key={s} value={s} className="bg-card">{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Project details</label>
              <textarea
                name="message" rows={5} required
                placeholder="What are you building? What's the goal?"
                className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm bg-transparent outline-none focus:border-[var(--neon-cyan)]/60 resize-none"
              />
            </div>
            <button
              type="submit" disabled={sending}
              className="btn-primary-glow hover:[&]:btn-primary-glow-hover inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium disabled:opacity-60"
            >
              {sending ? "Sending…" : <>Send message <Send size={16} /></>}
            </button>
          </form>

          <aside className="lg:col-span-2 space-y-4">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold">Reach us directly</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href="mailto:info@4nodetech.com" className="flex items-center gap-3 hover:text-[var(--neon-cyan)]">
                    <span className="w-9 h-9 rounded-xl glass-strong inline-flex items-center justify-center"><Mail size={16} /></span>
                    info@4nodetech.com
                  </a>
                </li>
                <li>
                  <a href="https://4nodetech.com" className="flex items-center gap-3 hover:text-[var(--neon-cyan)]">
                    <span className="w-9 h-9 rounded-xl glass-strong inline-flex items-center justify-center"><Globe size={16} /></span>
                    4nodetech.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="relative overflow-hidden glass-strong rounded-2xl p-6">
              <div className="absolute -top-12 -right-10 w-48 h-48 rounded-full bg-[var(--neon-magenta)]/30 blur-3xl" />
              <h3 className="relative font-semibold">Prefer a call?</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">
                Book a free 30‑minute strategy session. We'll map the fastest path from idea to launch.
              </p>
              <a href="mailto:info@4nodetech.com?subject=Strategy%20call" className="relative mt-4 inline-flex items-center gap-2 text-sm text-foreground hover:text-[var(--neon-cyan)]">
                Schedule a call <ArrowRight size={14} />
              </a>
            </div>

            <div className="glass rounded-2xl p-6 text-sm text-muted-foreground">
              <strong className="text-foreground">Typical response time:</strong> Under 24 hours, Mon–Fri.
            </div>
          </aside>
        </div>
      </Section>
    </Layout>
  );
}
