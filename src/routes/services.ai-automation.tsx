import { createFileRoute } from "@tanstack/react-router";
import { Brain } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

const SITE = "https://jinadatech.com";
const SLUG = "ai-automation";
const URL = `${SITE}/services/${SLUG}`;
const TITLE = "AI Automation Services — Custom AI Agents & Workflows | Jinada Tech";
const DESC = "Custom AI automation for your business: AI agents, RAG, workflow automation, and internal copilots that save hours and scale operations.";

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
    <ServicePage
      slug={SLUG}
      icon={Brain}
      eyebrow="AI & Automation"
      h1={<>AI automation that <span className="text-gradient-brand">saves hours</span> every week</>}
      intro="We build custom AI agents, RAG systems, and workflow automations that plug into your existing tools — so your team spends time on what matters, not on busywork."
      serviceName="AI & Automation"
      serviceDescription="Custom AI agents, RAG and vector search, workflow automation, and internal copilots integrated with your existing tools and data."
      outcomes={[
        { title: "Custom AI agents", desc: "Purpose-built agents for sales, support, ops, and internal tooling." },
        { title: "RAG & vector search", desc: "Answer questions over your docs, knowledge base, and product data — accurately." },
        { title: "Workflow automation", desc: "Connect CRM, email, Slack, sheets, and APIs. The repetitive stuff runs itself." },
        { title: "Internal copilots", desc: "Domain-specific assistants for your team — trained on how you actually work." },
        { title: "Secure by design", desc: "Your data stays yours. Tenant isolation, audit logs, and privacy-first model choices." },
        { title: "Measurable ROI", desc: "We track hours saved and revenue moved — not model benchmarks." },
      ]}
      process={[
        { step: "01", title: "Map", desc: "Identify the highest-leverage workflows to automate first." },
        { step: "02", title: "Prototype", desc: "Build a working demo in 1–2 weeks so you can feel the impact early." },
        { step: "03", title: "Integrate", desc: "Wire into your stack: CRM, email, Slack, databases, APIs." },
        { step: "04", title: "Operate", desc: "Monitoring, evals, and iteration so quality keeps improving." },
      ]}
      stack={["OpenAI", "Anthropic", "LangChain", "Pinecone", "Supabase", "n8n", "Zapier", "Vercel AI SDK"]}
      faqs={[
        { q: "What kinds of tasks can you automate?", a: "Common wins include lead qualification, customer support triage, document Q&A, report generation, data entry, content drafting, and internal knowledge search. If a person does it repeatedly from a screen, it's usually automatable." },
        { q: "Will AI replace my employees?", a: "No — it augments them. Our automations remove the repetitive parts of work so your team can focus on judgment, relationships, and creative work that humans do best." },
        { q: "How is my data kept private?", a: "We default to providers and configurations that don't train on your data, deploy in tenant-isolated infrastructure, and add audit logs. For sensitive workloads we can run open-source models in your cloud." },
        { q: "Can the AI use my company's documents and data?", a: "Yes — that's what RAG (retrieval-augmented generation) is for. We ingest your docs, knowledge base, or database and let the AI answer with cited sources from your data." },
        { q: "What does AI automation cost?", a: "Most projects start at $5k–$15k for a working pilot. Production rollouts and ongoing improvement typically run on a monthly retainer. We share a fixed quote after a free discovery call." },
        { q: "How do you measure success?", a: "Hours saved per week, tickets deflected, leads qualified, revenue influenced — whatever metric maps to real business outcomes for your team." },
      ]}
      related={[
        { title: "Website Development", href: "/services/website-development" },
        { title: "Mobile App Development", href: "/services/mobile-app-development" },
        { title: "SEO & Marketing", href: "/services/seo-marketing" },
      ]}
    />
  );
}
