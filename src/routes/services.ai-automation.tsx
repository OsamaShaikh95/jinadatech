import { createFileRoute } from "@tanstack/react-router";
import { Bot, MessageSquare, Workflow, Plug, BrainCircuit, Target, Cog } from "lucide-react";
import { AiAutomationLayout } from "@/components/site/service-layouts/AiAutomationLayout";

const SITE = "https://jinadatech.com";
const SLUG = "ai-automation";
const URL = `${SITE}/services/${SLUG}`;
const TITLE = "AI & Automation Services — Chatbots, Workflows & AI Agents | Jinada Tech";
const DESC = "AI chatbots, workflow automation, CRM integrations, and internal AI assistants. Cut repetitive work, qualify leads automatically, and scale operations without scaling headcount.";

export const Route = createFileRoute("/services/ai-automation")({
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
    <AiAutomationLayout
      slug={SLUG}
      icon={Bot}
      eyebrow="AI & Automation"
      h1={<>AI that actually <span style={{ color: "#F59E0B" }}>runs your operations</span></>}
      intro="From AI chatbots and lead qualification to internal copilots and CRM workflows — we build practical automations that cut busywork and let your team focus on higher-value work."
      accent="#F59E0B"
      signature="Quiet automations. Loud results."
      stats={[
        { value: "40–70%", label: "Hours saved on routine tasks" },
        { value: "<24h", label: "Lead-response time after AI" },
        { value: "GPT / Claude / Gemini", label: "Best model per use case" },
      ]}
      serviceName="AI & Automation"
      serviceDescription="Custom AI chatbots, workflow automation, CRM integrations, internal AI assistants, lead qualification, and business process automation."
      overview={{
        includes:
          "AI opportunity audit, custom chatbot and agent development, workflow automation, CRM and tool integrations, internal AI assistants, and ongoing model + prompt tuning.",
        audience:
          "Operations leaders, founders, and revenue teams drowning in repetitive tasks — manual data entry, inbox triage, lead qualification, customer support, and report generation.",
        solves:
          "Slow lead response, repetitive data entry, support tickets that pile up, sales reps stuck on admin instead of selling, and tools that don't talk to each other.",
      }}
      included={[
        { title: "AI Chatbots", desc: "Branded chat agents on your site or in WhatsApp / Slack — trained on your docs and data.", icon: MessageSquare },
        { title: "Workflow Automation", desc: "Multi-step automations across the tools you already use — no more copy-paste between apps.", icon: Workflow },
        { title: "CRM Integrations", desc: "HubSpot, Salesforce, Pipedrive, Zoho — connected to your website, ads, and AI agents.", icon: Plug },
        { title: "Internal AI Assistants", desc: "Custom copilots trained on your SOPs, wikis, and data — answer questions in seconds.", icon: BrainCircuit },
        { title: "Lead Qualification", desc: "AI-powered scoring, enrichment, and routing — sales only sees leads worth their time.", icon: Target },
        { title: "Business Process Automation", desc: "End-to-end automation of quotes, invoicing, onboarding, reporting, and back-office ops.", icon: Cog },
      ]}
      benefits={[
        { title: "Save dozens of hours per week", desc: "Routine work — data entry, formatting, triage, summaries — shifts from humans to agents that run 24/7." },
        { title: "Faster response times", desc: "AI chat and routing reply to leads and customers in seconds, even outside business hours." },
        { title: "Scale without hiring", desc: "Absorb more volume — leads, tickets, orders — without proportional growth in headcount." },
        { title: "Better data, better decisions", desc: "Automated capture and enrichment means your CRM and dashboards are finally accurate." },
        { title: "Higher conversion rates", desc: "Instant follow-up, personalized outreach, and qualified routing turn more leads into customers." },
        { title: "Happier employees", desc: "Your team stops doing soul-crushing busywork and focuses on the work they were hired for." },
      ]}
      process={[
        { step: "01", title: "Discovery", desc: "Workshop with your team to map workflows and identify the highest-ROI automation candidates." },
        { step: "02", title: "Strategy", desc: "Prioritized automation roadmap, tool stack, model selection, and success metrics." },
        { step: "03", title: "Design", desc: "Conversation flows, agent prompts, integration architecture, and human-in-the-loop checkpoints." },
        { step: "04", title: "Development", desc: "Build, integrate, and test agents and workflows against real data in a sandbox environment." },
        { step: "05", title: "Launch", desc: "Phased rollout with monitoring, fallbacks, and team training so adoption actually sticks." },
        { step: "06", title: "Optimization", desc: "Prompt tuning, model upgrades, new use cases — your AI gets smarter every month." },
      ]}
      faqs={[
        { q: "What business processes can be automated?", a: "Almost anything repetitive with structured inputs: lead capture and qualification, customer support, data entry, invoicing, onboarding, reporting, content generation, meeting notes, CRM updates, and inter-tool sync. We start with the highest-ROI workflows for your business." },
        { q: "Do I need AI for my business?", a: "If your team spends hours per week on routine tasks, slow lead response is costing you deals, or your tools don't talk to each other — yes. The bigger question is which workflows to automate first, which we figure out together in discovery." },
        { q: "Can AI integrate with existing systems?", a: "Yes. We integrate with HubSpot, Salesforce, Pipedrive, Slack, Notion, Google Workspace, Microsoft 365, Zapier, Make, custom APIs — and most things in between. If it has an API or webhook, it can talk to your AI." },
        { q: "Will automation replace employees?", a: "No — it removes the worst parts of their day. Our automations are designed to handle the repetitive busywork so your team can focus on strategic, creative, and customer-facing work that actually requires a human." },
        { q: "How long does implementation take?", a: "A focused first automation typically ships in 2–4 weeks. Larger multi-system rollouts take 6–12 weeks. We always start with a single high-impact workflow so you see ROI quickly before scaling." },
      ]}
      related={[
        { title: "Website Development", href: "/services/website-development" },
        { title: "SEO & Marketing", href: "/services/seo-marketing" },
        { title: "Mobile App Development", href: "/services/mobile-app-development" },
        { title: "Complete Partnership", href: "/services/complete-partnership" },
      ]}
    />
  );
}
