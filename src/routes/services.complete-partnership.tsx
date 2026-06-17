import { createFileRoute } from "@tanstack/react-router";
import { Handshake } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

const SITE = "https://jinadatech.com";
const SLUG = "complete-partnership";
const URL = `${SITE}/services/${SLUG}`;
const TITLE = "Complete Digital Partnership — Your All-In-One Tech Team | Jinada Tech";
const DESC = "One senior team across product, design, engineering, SEO, marketing and AI automation — your end-to-end digital partner so you can focus on the business.";

export const Route = createFileRoute("/services/complete-partnership")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:image", content: `${SITE}/jinada-mark.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: `${SITE}/jinada-mark.png` },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      slug={SLUG}
      icon={Handshake}
      eyebrow="Complete Partnership"
      h1={<>One <span style={{ color: "#EC4899" }}>senior team</span> for every part of your digital business</>}
      intro="From websites and apps to marketing, SEO and AI automation — we handle your entire digital stack as an embedded partner, so you stay focused on the business."
      accent="#EC4899"
      signature="All disciplines. One team. One invoice."
      stats={[
        { value: "5", label: "Disciplines under one roof" },
        { value: "10+ yrs", label: "Avg team experience" },
        { value: "24/7", label: "Dedicated support" },
      ]}
      serviceName="Complete Partnership"
      serviceDescription="An end-to-end digital partnership covering website and app development, SEO and marketing, and AI automation — delivered by a single senior team."
      outcomes={[
        { title: "Dedicated senior team", desc: "Same people across every discipline — no junior handoffs, no agency churn." },
        { title: "Strategy & roadmap", desc: "Quarterly planning that ties product, marketing and AI to real revenue goals." },
        { title: "One point of contact", desc: "A single account lead orchestrating design, engineering, growth and AI." },
        { title: "Predictable monthly cost", desc: "Flat retainer with clear scope — no surprise hourly invoices." },
        { title: "Ongoing iteration", desc: "We ship and refine continuously — your product never goes stale." },
        { title: "24/7 priority support", desc: "Fast response on anything critical — bugs, outages, urgent launches." },
      ]}
      process={[
        { step: "01", title: "Embed", desc: "We embed with your team — Slack, standups, shared roadmap, shared metrics." },
        { step: "02", title: "Plan", desc: "Quarterly OKRs across product, growth and AI — tied to business outcomes." },
        { step: "03", title: "Ship", desc: "Weekly releases across web, mobile, content, and automation in parallel." },
        { step: "04", title: "Compound", desc: "Monthly reviews and refinement — wins compound across every channel." },
      ]}
      stack={["Product strategy", "Design systems", "Web & Mobile", "SEO & Content", "Paid acquisition", "AI agents", "Analytics", "DevOps"]}
      faqs={[
        { q: "How is this different from hiring an agency?", a: "Agencies typically silo design, dev, and marketing across separate teams who never talk. Our partnership is one senior team working across every discipline — so your website, app, content and automations all move together." },
        { q: "Do we get dedicated people, or a rotating roster?", a: "Dedicated. You get a named lead plus a fixed pod across the disciplines you need. The same humans every week — no junior handoffs and no surprise replacements." },
        { q: "What does a partnership cost?", a: "Most partnerships run between $8k–$25k per month depending on scope and seniority. We size the pod to your goals and lock the price in a flat monthly retainer — no surprise invoices." },
        { q: "Can we start small and scale up?", a: "Yes. Many clients start with one discipline (e.g. website + SEO) and add mobile or AI as they grow. We adjust the pod each quarter based on your roadmap." },
        { q: "How long is the commitment?", a: "We ask for a 3‑month initial term so we can hit real outcomes. After that it's month‑to‑month — you can pause, scale, or end with 30 days' notice." },
        { q: "Do you replace our internal team?", a: "We augment, not replace. We work alongside your in-house team — sharing tools, code, and Notion docs — so capability stays with you." },
      ]}
      related={[
        { title: "Website Development", href: "/services/website-development" },
        { title: "SEO & Marketing", href: "/services/seo-marketing" },
        { title: "AI & Automation", href: "/services/ai-automation" },
      ]}
    />
  );
}
