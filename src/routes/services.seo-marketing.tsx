import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, Search, FileText, Share2, MousePointerClick, LineChart, Wrench } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

const SITE = "https://jinadatech.com";
const SLUG = "seo-marketing";
const URL = `${SITE}/services/${SLUG}`;
const TITLE = "SEO & Digital Marketing Services — Rank, Reach, Convert | Jinada Tech";
const DESC = "Technical SEO, content strategy, social media, and Google Ads that compound. Track real revenue, not vanity metrics, with monthly performance reporting.";

export const Route = createFileRoute("/services/seo-marketing")({
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
      icon={TrendingUp}
      eyebrow="SEO & Marketing"
      h1={<>Traffic that <span style={{ color: "#22C55E" }}>compounds</span>. Revenue you can track.</>}
      intro="Technical SEO, content strategy, social media, and paid acquisition — built around one north star: qualified leads and tracked revenue for your business."
      accent="#22C55E"
      signature="Compounding traffic. Tracked revenue."
      stats={[
        { value: "3.4×", label: "Avg organic traffic in 12 months" },
        { value: "ROAS", label: "Every channel tied to revenue" },
        { value: "Monthly", label: "Transparent reporting" },
      ]}
      serviceName="SEO & Digital Marketing"
      serviceDescription="Technical SEO audits, keyword research, content strategy, social media management, Google Ads, and monthly performance reporting."
      overview={{
        includes:
          "Technical SEO audit, keyword research, content roadmap, on-page optimization, link building, social media management, Google Ads management, and monthly executive reporting.",
        audience:
          "Service businesses, SaaS, and DTC brands that already have a website but aren't seeing the organic traffic or paid ROI they need — and want one team accountable for results.",
        solves:
          "Invisible in Google search, blog posts that don't rank, ads that burn budget, social channels that don't drive leads, and reporting that hides what's actually working.",
      }}
      included={[
        { title: "Technical SEO", desc: "Site audit, Core Web Vitals, indexation, schema, internal linking, and crawl fixes.", icon: Wrench },
        { title: "Keyword Research", desc: "Search intent mapped to your funnel — quick wins, pillar topics, and long-tail clusters.", icon: Search },
        { title: "Content Strategy", desc: "Editorial calendar, briefs, and on-page optimization tuned to rank and convert.", icon: FileText },
        { title: "Social Media Marketing", desc: "Channel strategy, content production, scheduling, and community management.", icon: Share2 },
        { title: "Google Ads", desc: "Search, Performance Max, and retargeting campaigns built around tracked conversions.", icon: MousePointerClick },
        { title: "Performance Reporting", desc: "Monthly dashboards tying rankings, traffic, leads, and spend to actual revenue.", icon: LineChart },
      ]}
      benefits={[
        { title: "Compounding organic traffic", desc: "SEO is the only channel that gets cheaper per lead over time — every ranked page works 24/7." },
        { title: "Lower customer acquisition cost", desc: "A balanced mix of SEO, content, and paid drives blended CAC down as organic does more of the heavy lifting." },
        { title: "Predictable lead pipeline", desc: "Forecastable monthly traffic and conversion volume — so sales knows what's coming." },
        { title: "Brand authority", desc: "Ranking for the questions your buyers ask positions you as the obvious expert in your category." },
        { title: "Every dollar tied to revenue", desc: "Server-side conversion tracking and attribution show exactly which campaigns earned the sale." },
        { title: "One accountable team", desc: "SEO, content, social, and paid in one pod — no finger-pointing between agencies." },
      ]}
      process={[
        { step: "01", title: "Discovery", desc: "Audit current performance — rankings, traffic, conversions, paid spend, and competitors." },
        { step: "02", title: "Strategy", desc: "Channel mix, keyword targets, content roadmap, and KPI tree tied to revenue." },
        { step: "03", title: "Design", desc: "Editorial templates, landing page wireframes, and ad creative concepts." },
        { step: "04", title: "Development", desc: "On-page fixes, content production, ad build-out, and tracking pipeline." },
        { step: "05", title: "Launch", desc: "Publish, ship, and turn campaigns live — with conversion tracking validated end-to-end." },
        { step: "06", title: "Optimization", desc: "Monthly reviews, A/B tests, and reallocation toward what's actually moving revenue." },
      ]}
      faqs={[
        { q: "How long does SEO take?", a: "Early wins (technical fixes, long-tail keywords) typically appear in 60–90 days. Compounding growth on competitive terms usually takes 6–12 months. We share leading indicators every month so you see momentum, not just final rankings." },
        { q: "Do you guarantee rankings?", a: "No reputable SEO can guarantee a #1 ranking — search algorithms don't allow it. What we guarantee is a transparent process, measurable KPIs, and accountability against the targets we agree on together." },
        { q: "Do you manage social media?", a: "Yes. We handle channel strategy, content production, scheduling, community management, and reporting across LinkedIn, Instagram, TikTok, X, and YouTube — focused on the channels that actually matter for your audience." },
        { q: "Can you run Google Ads campaigns?", a: "Yes — Google Search, Performance Max, YouTube, and retargeting. We build campaigns around tracked conversions and ROAS, not impressions or clicks." },
        { q: "How is success measured?", a: "Every engagement starts by defining what success means for you — qualified leads, demo bookings, signups, or revenue. We report monthly against those KPIs with full transparency into spend, traffic, and pipeline impact." },
      ]}
      related={[
        { title: "Website Development", href: "/services/website-development" },
        { title: "AI & Automation", href: "/services/ai-automation" },
        { title: "Mobile App Development", href: "/services/mobile-app-development" },
        { title: "Complete Partnership", href: "/services/complete-partnership" },
      ]}
    />
  );
}
