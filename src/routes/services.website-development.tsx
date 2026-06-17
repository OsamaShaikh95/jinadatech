import { createFileRoute } from "@tanstack/react-router";
import { Code2, Smartphone, Search, Zap, FileText, BarChart3, ShieldCheck } from "lucide-react";
import { WebsiteDevelopmentLayout } from "@/components/site/service-layouts/WebsiteDevelopmentLayout";

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
    <WebsiteDevelopmentLayout
      slug={SLUG}
      icon={Code2}
      eyebrow="Website Development"
      h1={<>Professional websites for <span style={{ color: "#3DA9FC" }}>growing businesses</span></>}
      intro="We design and build clean, modern websites that load fast, look great on any device, and are easy for your team to manage."
      accent="#3DA9FC"
      signature="Clear design. Honest work."
      stats={[
        { value: "98+", label: "Avg Lighthouse score" },
        { value: "3–6 wks", label: "Typical launch window" },
        { value: "100%", label: "Code & assets you own" },
      ]}
      serviceName="Website Development"
      serviceDescription="Custom website design and development for small and medium businesses — modern, fast, easy to manage, and built to last."
      overview={{
        includes:
          "Discovery, custom design, responsive development, CMS integration, SEO foundations, analytics, and a smooth launch — handed over as a website you fully own.",
        audience:
          "Founders, marketing teams, and small businesses who want a website that looks professional, ranks in search, and is genuinely easy to update.",
        solves:
          "Outdated designs that lose trust, slow pages that hurt conversions, weak SEO, and clunky CMS setups that make small edits feel like a project.",
      }}
      included={[
        { title: "Mobile-friendly design", desc: "Looks and works great on phones, tablets, and desktops out of the box.", icon: Smartphone },
        { title: "SEO-ready foundation", desc: "Clean structure, sitemaps, and meta tags so Google can find and rank your pages.", icon: Search },
        { title: "Fast loading pages", desc: "Optimized images, fonts, and code so visitors don't bounce while waiting.", icon: Zap },
        { title: "Easy content updates", desc: "A simple CMS so your team can edit text, swap images, and add pages without a developer.", icon: FileText },
        { title: "Analytics integration", desc: "GA4 or a privacy-friendly alternative set up with the conversion events that matter.", icon: BarChart3 },
        { title: "Secure hosting setup", desc: "SSL, backups, and a reliable host configured for you — no DIY server work.", icon: ShieldCheck },
      ]}
      benefits={[
        { title: "Generate more qualified leads", desc: "Clear layouts and calls-to-action turn visitors into booked calls and enquiries." },
        { title: "Build trust on first impression", desc: "A clean, modern design signals credibility before a prospect reads a single line." },
        { title: "Rank better in Google", desc: "Solid technical SEO and fast pages give your content a real chance in search." },
        { title: "Update content without devs", desc: "A friendly CMS lets your team publish pages, posts, and updates on their own." },
        { title: "Built to last", desc: "Modern, maintainable code that's easy to extend as your business grows." },
        { title: "Own everything", desc: "All code, design files, and accounts stay with you — no vendor lock-in." },
      ]}
      process={[
        { step: "01", title: "Initial Consultation", desc: "A friendly call to understand your business, goals, and what success looks like for the site." },
        { step: "02", title: "Proposal & Planning", desc: "A clear proposal with scope, timeline, and a fixed quote — no surprises." },
        { step: "03", title: "Design & Content", desc: "Custom design in Figma, reviewed with you, plus help structuring the content that goes on each page." },
        { step: "04", title: "Development", desc: "We build the site with modern, well-organized code that's easy to maintain." },
        { step: "05", title: "Review & Revisions", desc: "You walk through the site, share feedback, and we refine until it feels right." },
        { step: "06", title: "Launch & Ongoing Support", desc: "We handle the go-live, then stay available for tweaks, updates, and questions afterwards." },
      ]}
      faqs={[
        { q: "How much does a website cost?", a: "Pricing depends on project scope and requirements. We provide a custom quote after a short discovery call so it reflects what you actually need — no padded packages or hidden fees." },
        { q: "How long does a website take to build?", a: "Most websites launch in 3–6 weeks. Larger projects with custom integrations or a full CMS typically take a bit longer. We share a clear timeline before kickoff." },
        { q: "Will my website be mobile-friendly?", a: "Yes — every site is designed mobile-first and tested across phones, tablets, and desktops. Responsive design is the baseline, not an add-on." },
        { q: "Can you redesign my existing website?", a: "Absolutely. We review your current site, keep what's working, and rebuild around your strongest pages so you don't lose existing SEO or traffic." },
        { q: "Will I be able to update the website myself?", a: "Yes. We set up a simple CMS so your team can edit copy, swap images, and publish new pages without touching code." },
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
