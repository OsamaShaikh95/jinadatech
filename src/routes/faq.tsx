import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section, SectionHeader } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FAQ, type FAQItem } from "@/components/site/FAQ";
import { ArrowRight } from "lucide-react";

const SITE = "https://jinadatech.com";
const TITLE = "FAQ — Frequently Asked Questions | Jinada Tech";
const DESC = "Answers about our website development, mobile apps, SEO & marketing, and AI automation services — timelines, pricing, ownership, and process.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/faq` },
      { property: "og:image", content: `${SITE}/jinada-mark.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: `${SITE}/jinada-mark.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/faq` }],
  }),
  component: FAQPage,
});

const groups: { title: string; href: "/services/website-development" | "/services/mobile-app-development" | "/services/seo-marketing" | "/services/ai-automation"; items: FAQItem[] }[] = [
  {
    title: "Website Development",
    href: "/services/website-development",
    items: [
      { q: "How long does a website take to build?", a: "Most marketing sites launch in 3–6 weeks. Larger platforms with custom integrations or a CMS typically take 6–10 weeks. We share a clear timeline before kickoff." },
      { q: "What technology do you use?", a: "We default to React with TanStack Start or Next.js, TypeScript, and Tailwind CSS. For content, we recommend a headless CMS like Sanity or Contentful. Final stack depends on your goals." },
      { q: "Do I own the code and the website?", a: "Yes. You own 100% of the code, designs, and assets. Everything is delivered into your GitHub and hosting accounts." },
      { q: "Is SEO included?", a: "On-page technical SEO is included by default — semantic markup, structured data, sitemap, robots.txt, Open Graph tags, and Core Web Vitals optimization. Ongoing SEO and content campaigns are offered as a separate service." },
      { q: "Can you redesign my existing website?", a: "Absolutely. We audit your current site, identify what's working, and rebuild around your strongest pages so you don't lose existing SEO equity." },
      { q: "What does it cost?", a: "Marketing sites typically range from $4k–$15k depending on scope. We share a fixed quote after a free discovery call — no hidden fees, no surprises." },
    ],
  },
  {
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    items: [
      { q: "Do you build for iOS, Android, or both?", a: "Both — usually from one React Native or Expo codebase. We also build fully native in Swift or Kotlin when an app needs deep hardware integration or maximum performance." },
      { q: "How long does an MVP take?", a: "A focused MVP typically launches in 8–12 weeks. Larger apps with custom backends, payments, or social features take 3–6 months. We share a clear milestone plan before kickoff." },
      { q: "Will you submit the app to the App Store and Play Store?", a: "Yes. We handle the full submission process — provisioning, certificates, screenshots, listing copy, and resolving any review feedback." },
      { q: "What does an app cost?", a: "MVPs typically range from $15k–$40k. Production-grade apps with custom backends and integrations range from $40k–$120k. We give a fixed quote after a free discovery call." },
      { q: "Do I own the code?", a: "Yes — you own all source code, designs, and App Store / Play Store listings. Everything is transferred to your accounts." },
      { q: "Can you maintain the app after launch?", a: "Yes. Most clients keep us on a monthly retainer for bug fixes, OS updates, new features, and growth experiments." },
    ],
  },
  {
    title: "SEO & Marketing",
    href: "/services/seo-marketing",
    items: [
      { q: "How long does SEO take to show results?", a: "Technical wins (indexing, Core Web Vitals, structured data) often show up in 2–4 weeks. Content and keyword rankings typically take 3–6 months to move meaningfully. Competitive keywords can take 6–12 months." },
      { q: "What's included in your SEO service?", a: "Technical audit and fixes, on-page optimization, keyword strategy, content production, internal linking, link building, local SEO, and monthly reporting tied to business outcomes." },
      { q: "Do you do paid ads too?", a: "Yes — Google Ads and Meta Ads. We often combine paid and SEO so you get short-term traffic while organic compounds." },
      { q: "How is reporting handled?", a: "You get a monthly report covering rankings, traffic, leads, conversions, and what we shipped — plus a clear plan for the next month." },
      { q: "Do you write the content?", a: "Yes. We have a network of senior writers across most B2B and B2C niches. You review before anything publishes." },
      { q: "Do you offer local SEO?", a: "Yes — Google Business Profile optimization, local citations, location pages, and LocalBusiness schema. Great for service businesses targeting a city or region." },
    ],
  },
  {
    title: "AI & Automation",
    href: "/services/ai-automation",
    items: [
      { q: "What kinds of tasks can you automate?", a: "Common wins include lead qualification, customer support triage, document Q&A, report generation, data entry, content drafting, and internal knowledge search. If a person does it repeatedly from a screen, it's usually automatable." },
      { q: "Will AI replace my employees?", a: "No — it augments them. Our automations remove the repetitive parts of work so your team can focus on judgment, relationships, and creative work that humans do best." },
      { q: "How is my data kept private?", a: "We default to providers and configurations that don't train on your data, deploy in tenant-isolated infrastructure, and add audit logs. For sensitive workloads we can run open-source models in your cloud." },
      { q: "Can the AI use my company's documents and data?", a: "Yes — that's what RAG (retrieval-augmented generation) is for. We ingest your docs, knowledge base, or database and let the AI answer with cited sources from your data." },
      { q: "What does AI automation cost?", a: "Most projects start at $5k–$15k for a working pilot. Production rollouts and ongoing improvement typically run on a monthly retainer. We share a fixed quote after a free discovery call." },
      { q: "How do you measure success?", a: "Hours saved per week, tickets deflected, leads qualified, revenue influenced — whatever metric maps to real business outcomes for your team." },
    ],
  },
];

function FAQPage() {
  return (
    <Layout>
      <Section>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "FAQ", href: "/faq" },
          ]}
        />
        <SectionHeader
          as="h1"
          eyebrow="FAQ"
          title={<>Frequently asked <span className="text-gradient-brand">questions</span></>}
          description="Everything you need to know about working with us — timelines, pricing, ownership, and process."
        />

        <div className="space-y-12">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="flex items-end justify-between mb-4">
                <h2 className="text-xl sm:text-2xl font-semibold">{g.title}</h2>
                <Link to={g.href} className="text-sm text-[var(--brand-blue)] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                  Service details <ArrowRight size={14} />
                </Link>
              </div>
              <FAQ items={g.items} title="" />
            </div>
          ))}
        </div>

        <div className="mt-16 glass-strong rounded-3xl p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Still have a question?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            We usually reply within a few hours. Tell us about your project and we'll point you in the right direction.
          </p>
          <Link to="/contact" className="mt-6 btn-primary-glow hover:[&]:btn-primary-glow-hover inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium">
            Contact us <ArrowRight size={16} />
          </Link>
        </div>
      </Section>
    </Layout>
  );
}
