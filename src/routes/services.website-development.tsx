import { createFileRoute } from "@tanstack/react-router";
import { Code2 } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

const SITE = "https://jinadatech.com";
const SLUG = "website-development";
const URL = `${SITE}/services/${SLUG}`;
const TITLE = "Website Development Services — Modern, Fast & SEO-Ready | Jinada Tech";
const DESC = "Custom website development that converts. Modern stack, SEO-ready, fast Core Web Vitals. Marketing sites, landing pages, and headless CMS builds.";

export const Route = createFileRoute("/services/website-development")({
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
      icon={Code2}
      eyebrow="Website Development"
      h1={<>Websites that <span className="text-gradient-brand">attract, convert</span> and scale</>}
      intro="We design and build custom websites that load fast, rank well, and turn visitors into customers — from marketing sites and landing pages to headless CMS-powered platforms."
      serviceName="Website Development"
      serviceDescription="Custom website design and development, marketing sites, landing pages, and headless CMS builds with SEO and Core Web Vitals optimization."
      outcomes={[
        { title: "Conversion-focused design", desc: "Layouts and copy structured to turn traffic into qualified leads and sales." },
        { title: "Lightning-fast performance", desc: "Optimized for Core Web Vitals, mobile-first, and excellent Lighthouse scores." },
        { title: "SEO foundations baked in", desc: "Semantic HTML, structured data, sitemap, and metadata on every page." },
        { title: "Headless CMS", desc: "Edit content without touching code — Sanity, Contentful, or your CMS of choice." },
        { title: "Analytics & tracking", desc: "GA4, Plausible, or Posthog wired up so you can see what's actually working." },
        { title: "Post-launch support", desc: "We don't disappear after launch. Ongoing iteration, fixes, and improvements." },
      ]}
      process={[
        { step: "01", title: "Discover", desc: "We learn your business, audience, and goals — and define what success looks like." },
        { step: "02", title: "Design", desc: "Custom UI in Figma. No templates. Iterated until you're happy before any code is written." },
        { step: "03", title: "Build", desc: "Modern stack: React, TanStack Start, Tailwind. Fully typed, fully tested." },
        { step: "04", title: "Launch & grow", desc: "Deploy, monitor, and iterate based on real analytics and user feedback." },
      ]}
      stack={["React", "TanStack Start", "Next.js", "TypeScript", "Tailwind CSS", "Sanity", "Vercel", "Cloudflare"]}
      faqs={[
        { q: "How long does a website take to build?", a: "Most marketing sites launch in 3–6 weeks. Larger platforms with custom integrations or a CMS typically take 6–10 weeks. We share a clear timeline before kickoff." },
        { q: "What technology do you use?", a: "We default to React with TanStack Start or Next.js, TypeScript, and Tailwind CSS. For content, we recommend a headless CMS like Sanity or Contentful. Final stack depends on your goals." },
        { q: "Do I own the code and the website?", a: "Yes. You own 100% of the code, designs, and assets. Everything is delivered into your GitHub and hosting accounts." },
        { q: "Is SEO included?", a: "On-page technical SEO is included by default — semantic markup, structured data, sitemap, robots.txt, Open Graph tags, and Core Web Vitals optimization. Ongoing SEO and content campaigns are offered as a separate service." },
        { q: "Can you redesign my existing website?", a: "Absolutely. We audit your current site, identify what's working, and rebuild around your strongest pages so you don't lose existing SEO equity." },
        { q: "What does it cost?", a: "Marketing sites typically range from $4k–$15k depending on scope. We share a fixed quote after a free discovery call — no hidden fees, no surprises." },
      ]}
      related={[
        { title: "Mobile App Development", href: "/services/mobile-app-development" },
        { title: "SEO & Marketing", href: "/services/seo-marketing" },
        { title: "AI & Automation", href: "/services/ai-automation" },
      ]}
    />
  );
}
