import { createFileRoute } from "@tanstack/react-router";
import { Code2, Palette, Smartphone, Database, Search, BarChart3, Zap } from "lucide-react";
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
      h1={<>Websites built to <span style={{ color: "#3DA9FC" }}>grow your business</span></>}
      intro="We design and develop modern, high-performance websites that help businesses attract customers, build trust, and generate leads."
      accent="#3DA9FC"
      signature="Pixel-perfect. Lightning quick."
      stats={[
        { value: "98+", label: "Avg Lighthouse score" },
        { value: "3–6 wks", label: "Typical launch window" },
        { value: "100%", label: "Code & assets you own" },
      ]}
      serviceName="Website Development"
      serviceDescription="Custom website design and development, marketing sites, landing pages, and headless CMS builds with SEO and Core Web Vitals optimization."
      overview={{
        includes:
          "Discovery, custom UI design, responsive front-end development, CMS integration, SEO foundations, analytics, and deployment — delivered as a production-grade website you fully own.",
        audience:
          "Founders, marketing teams, and SMBs who need a fast, modern site that ranks, converts, and is easy to update — without wrestling with templates or page builders.",
        solves:
          "Outdated designs that lose trust, slow load times that kill conversions, weak SEO that buries your brand, and CMS chaos that makes the simplest edit a project.",
      }}
      included={[
        { title: "Custom Design", desc: "Bespoke UI in Figma — no templates, tuned to your brand and conversion goals.", icon: Palette },
        { title: "Responsive Development", desc: "Pixel-perfect on every screen — phone, tablet, laptop, ultrawide.", icon: Smartphone },
        { title: "CMS Integration", desc: "Headless CMS (Sanity, Contentful, Payload) so your team can ship content without devs.", icon: Database },
        { title: "SEO Foundations", desc: "Semantic markup, structured data, sitemap, robots, and Open Graph baked in.", icon: Search },
        { title: "Analytics Setup", desc: "GA4, Plausible, or PostHog wired up with conversion events and dashboards.", icon: BarChart3 },
        { title: "Performance Optimization", desc: "Core Web Vitals tuned: image pipelines, edge caching, font strategy, code-splitting.", icon: Zap },
      ]}
      benefits={[
        { title: "Generate more qualified leads", desc: "Conversion-focused layouts and copy structure turn organic traffic into booked calls and demos." },
        { title: "Build trust on first impression", desc: "A premium, modern design signals credibility before a prospect reads a single line." },
        { title: "Rank higher in Google", desc: "Technical SEO foundations and fast Core Web Vitals give your content a real shot in search." },
        { title: "Update content without devs", desc: "A friendly CMS lets your marketing team ship pages, posts, and case studies on their own." },
        { title: "Scale without rewrites", desc: "Modern component-driven architecture grows with you — add pages, products, and locales easily." },
        { title: "Own everything", desc: "100% of code, design files, and analytics live in your accounts — no vendor lock-in." },
      ]}
      process={[
        { step: "01", title: "Discovery", desc: "We learn your business, audience, and goals — and define what success looks like." },
        { step: "02", title: "Strategy", desc: "Sitemap, conversion paths, content plan, and tech stack decisions documented." },
        { step: "03", title: "Design", desc: "Custom UI in Figma, iterated with you until every screen is sign-off ready." },
        { step: "04", title: "Development", desc: "Production build with React, TanStack Start / Next.js, TypeScript, and Tailwind." },
        { step: "05", title: "Launch", desc: "QA, accessibility checks, DNS, deploy to edge — and a smooth go-live day." },
        { step: "06", title: "Optimization", desc: "Post-launch monitoring, A/B tests, and ongoing iteration based on real analytics." },
      ]}
      faqs={[
        { q: "How much does a website cost?", a: "Marketing sites typically range from $4k–$15k depending on page count, integrations, and content needs. Larger platforms with custom CMS or e-commerce run higher. We share a fixed quote after a free discovery call — no hidden fees." },
        { q: "How long does a website take to build?", a: "Most marketing sites launch in 3–6 weeks. Larger platforms with custom integrations or a full CMS typically take 6–10 weeks. We share a clear timeline before kickoff." },
        { q: "Will my website be mobile-friendly?", a: "Yes — every site is built mobile-first and rigorously tested across phones, tablets, and desktops. Responsive design is the baseline, not an upsell." },
        { q: "Can you redesign my existing website?", a: "Absolutely. We audit your current site, identify what's working and what isn't, and rebuild around your strongest pages so you don't lose existing SEO equity or traffic." },
        { q: "Will I be able to update the website myself?", a: "Yes. We integrate a headless CMS so your team can edit copy, swap images, publish blog posts, and add new pages without touching code or pinging us." },
      ]}
      related={[
        { title: "SEO & Marketing", href: "/services/seo-marketing" },
        { title: "Mobile App Development", href: "/services/mobile-app-development" },
        { title: "AI & Automation", href: "/services/ai-automation" },
        { title: "Complete Partnership", href: "/services/complete-partnership" },
      ]}
    />
  );
}
