import { createFileRoute } from "@tanstack/react-router";
import { Handshake, Users, Code2, Megaphone, TrendingUp, Bot, LifeBuoy } from "lucide-react";
import { CompletePartnershipLayout } from "@/components/site/service-layouts/CompletePartnershipLayout";

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
    <CompletePartnershipLayout
      slug={SLUG}
      icon={Handshake}
      eyebrow="Complete Partnership"
      h1={<>One <span style={{ color: "#EC4899" }}>senior team</span> for every part of your digital business</>}
      intro="Development, marketing, SEO, and AI automation — handled by a single embedded team that knows your business inside out. The simplicity of an in-house team without the overhead."
      accent="#EC4899"
      signature="All disciplines. One team. One invoice."
      stats={[
        { value: "5", label: "Disciplines under one roof" },
        { value: "10+ yrs", label: "Avg team experience" },
        { value: "24/7", label: "Priority support" },
      ]}
      serviceName="Complete Digital Partnership"
      serviceDescription="An end-to-end digital partnership covering web and mobile development, SEO and marketing, and AI automation — delivered by a single dedicated senior team."
      overview={{
        includes:
          "A dedicated senior pod across product, engineering, design, SEO, marketing, and AI — with quarterly strategy, weekly releases, monthly reporting, and 24/7 priority support.",
        audience:
          "Founders and growing businesses who need real velocity across every digital surface but don't want to hire, manage, and retain a full in-house tech and marketing team.",
        solves:
          "Agency hand-offs that drop the ball, siloed vendors that don't talk, the cost and risk of hiring full-time talent, and slow execution that lets competitors out-ship you.",
      }}
      included={[
        { title: "Dedicated Team", desc: "A named senior pod — same humans every week, not a rotating roster.", icon: Users },
        { title: "Development", desc: "Web and mobile shipped continuously — features, fixes, refactors, infrastructure.", icon: Code2 },
        { title: "Marketing", desc: "Content production, social, paid acquisition, and lifecycle campaigns under one strategy.", icon: Megaphone },
        { title: "SEO", desc: "Technical SEO, content optimization, link building, and reporting compounded month over month.", icon: TrendingUp },
        { title: "AI Automation", desc: "Internal copilots, chatbots, and workflow automations that scale ops without scaling headcount.", icon: Bot },
        { title: "Ongoing Support", desc: "Priority Slack channel, incident response, and a single account lead orchestrating everything.", icon: LifeBuoy },
      ]}
      benefits={[
        { title: "One team, one invoice, zero finger-pointing", desc: "Strategy, build, growth, and AI move as one pod — no agency hand-offs, no silos, no blame between vendors." },
        { title: "Senior talent without the hiring cost", desc: "Get a 10+ year team across five disciplines for less than the loaded cost of two senior hires." },
        { title: "Velocity that compounds", desc: "Weekly ships across web, mobile, content, and automation mean wins stack on top of each other." },
        { title: "Strategic alignment", desc: "Quarterly OKRs tie product, marketing, and AI to the same business goals — not isolated dashboards." },
        { title: "Predictable monthly cost", desc: "Flat retainer with clear scope — no surprise hourly invoices or scope-creep change orders." },
        { title: "Scale up or down with your roadmap", desc: "Adjust the pod each quarter as priorities shift — add mobile, pause paid, double down on AI." },
      ]}
      process={[
        { step: "01", title: "Discovery", desc: "Deep dive into your business, customers, current stack, and growth goals." },
        { step: "02", title: "Strategy", desc: "Quarterly roadmap across product, growth, and AI — tied to clear business outcomes." },
        { step: "03", title: "Design", desc: "Design system, brand foundations, and visual language unified across every surface." },
        { step: "04", title: "Development", desc: "Weekly releases across web, mobile, content, and automation in parallel sprints." },
        { step: "05", title: "Launch", desc: "Campaigns, products, and features go live with shared metrics and shared accountability." },
        { step: "06", title: "Optimization", desc: "Monthly reviews and refinement — wins on one channel compound across the others." },
      ]}
      faqs={[
        { q: "What does a dedicated partnership include?", a: "A named senior pod across the disciplines you need — typically engineering, design, SEO, marketing, and AI. Plus a dedicated account lead, quarterly strategy, weekly releases, monthly reporting, and a priority Slack channel for day-to-day collaboration." },
        { q: "Can you handle both development and marketing?", a: "Yes — that's the whole point. Most clients waste enormous time and money coordinating a dev shop, a marketing agency, and a freelancer. We unify all of it under one team with shared roadmap, shared metrics, and one invoice." },
        { q: "How do communication and reporting work?", a: "You get a shared Slack channel, weekly stand-ups, a shared roadmap in Linear or Notion, and a monthly executive report tying every workstream to business KPIs. Your account lead is one message away." },
        { q: "Is there a long-term contract?", a: "We ask for a 3-month initial term so we can hit real outcomes (you can't fix SEO or ship a meaningful product in 30 days). After that it's month-to-month — pause, scale, or end with 30 days' notice." },
        { q: "Can services be adjusted as we grow?", a: "Absolutely. We re-scope the pod every quarter based on your roadmap. Start with web + SEO, add mobile in Q2, lean into AI automation in Q3 — whatever the business needs." },
      ]}
      related={[
        { title: "Website Development", href: "/services/website-development" },
        { title: "Mobile App Development", href: "/services/mobile-app-development" },
        { title: "SEO & Marketing", href: "/services/seo-marketing" },
        { title: "AI & Automation", href: "/services/ai-automation" },
      ]}
    />
  );
}
