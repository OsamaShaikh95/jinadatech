import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section, SectionHeader } from "@/components/site/Section";
import { Mail, Globe, ArrowRight, Send, Phone } from "lucide-react";
import { useId, useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Let's build something together | Jinada Tech" },
      { name: "description", content: "Get in touch with Jinada Tech. Tell us about your project and we'll respond within one business day." },
      { property: "og:title", content: "Contact | Jinada Tech" },
      { property: "og:description", content: "Book a free strategy call or send us a project brief." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jinadatech.com/contact" },
      { property: "og:image", content: "https://jinadatech.com/jinada-mark.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact | Jinada Tech" },
      { name: "twitter:description", content: "Book a free strategy call or send us a project brief." },
      { name: "twitter:image", content: "https://jinadatech.com/jinada-mark.png" },
    ],
    links: [{ rel: "canonical", href: "https://jinadatech.com/contact" }],
  }),
  component: Contact,
});


function Field({ label, name, type = "text", placeholder, required = true }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={id}
        name={name} type={type} placeholder={placeholder} required={required}
        className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm bg-transparent outline-none focus:border-[var(--neon-cyan)]/60"
      />
    </div>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);
  const serviceId = useId();
  const messageId = useId();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setSending(true);

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const response = await fetch(
      "https://formspree.io/f/xjgdwjwj",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      toast.success(
        "Message sent! We'll be in touch within one business day."
      );
      form.reset();
    } else {
      toast.error("Failed to send message. Please try again.");
    }
  } catch {
    toast.error("Failed to send message. Please try again.");
  } finally {
    setSending(false);
  }
};

  return (
    <Layout>
      <Section>
        <SectionHeader
          as="h1"
          eyebrow="Contact"
          title={<>Let's build <span className="text-gradient-brand">something great</span></>}
          description="Tell us a bit about your project. We respond within one business day."
        />


        <div className="grid lg:grid-cols-5 gap-6">
          <form onSubmit={handleSubmit} className="lg:col-span-3 glass-strong rounded-3xl p-8 space-y-4">
            <input
              type="hidden"
              name="_subject"
              value="New Lead from Jinada Tech Website"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Your Name" />
              <Field label="Email" name="email" type="email" placeholder="Your Email" />
            </div>
            <Field label="Company" name="company" placeholder="Your Business" required={false} />
            <div>
              <label htmlFor={serviceId} className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Service</label>
              <select
                id={serviceId}
                name="service"
                className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm bg-transparent outline-none focus:border-[var(--brand-blue)]/60"
                defaultValue=""
              >
                <option value="" disabled className="bg-card">Select a service…</option>
                {["Web Development","Mobile App Development","AI Automation","SEO & Marketing","Social Media Management","Business Growth Consulting","Not sure yet"].map(s => (
                  <option key={s} value={s} className="bg-card">{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor={messageId} className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Project details</label>
              <textarea
                id={messageId}
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
            <p className="text-xs text-muted-foreground">
              Your information is kept private and will only be used to contact you about your project.
            </p>
          </form>

          <aside className="lg:col-span-2 space-y-4">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold">Reach us directly</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href="mailto:info@jinadatech.com" className="flex items-center gap-3 hover:text-[var(--neon-cyan)]">
                    <span className="w-9 h-9 rounded-xl glass-strong inline-flex items-center justify-center"><Mail size={16} /></span>
                    info@jinadatech.com
                  </a>
                </li>
                <li>
                  <a href="tel:+15123871981" className="flex items-center gap-3 hover:text-[var(--brand-blue)]">
                    <span className="w-9 h-9 rounded-xl glass-strong inline-flex items-center justify-center"><Phone size={16} /></span>
                    +1-512-387-1981
                  </a>
                </li>
                <li>
                  <a href="https://jinadatech.com" className="flex items-center gap-3 hover:text-[var(--brand-blue)]">
                    <span className="w-9 h-9 rounded-xl glass-strong inline-flex items-center justify-center"><Globe size={16} /></span>
                    jinadatech.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="relative overflow-hidden glass-strong rounded-2xl p-6">
              <div className="absolute -top-12 -right-10 w-48 h-48 rounded-full bg-[var(--neon-magenta)]/30 blur-3xl" />
              <h3 className="relative font-semibold">Prefer a call?</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">
                Schedule a free consultation to discuss your goals and explore the best solution for your business.
              </p>
              <a href="mailto:info@jinadatech.com?subject=Strategy%20call" className="relative mt-4 inline-flex items-center gap-2 text-sm text-foreground hover:text-[var(--neon-cyan)]">
                Schedule a call <ArrowRight size={14} />
              </a>
            </div>

            <div className="glass rounded-2xl p-6 text-sm text-muted-foreground">
              <strong className="text-foreground">Typical response time:</strong> Within 1 business day
            </div>
          </aside>
        </div>
      </Section>
    </Layout>
  );
}
