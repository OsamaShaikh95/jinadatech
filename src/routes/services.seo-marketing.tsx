import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

const SITE = "https://jinadatech.com";
const SLUG = "seo-marketing";
const URL = `${SITE}/services/${SLUG}`;
const TITLE = "SEO & Digital Marketing Services — Traffic & Growth | Jinada Tech";
const DESC = "SEO, content, and social media marketing that drive traffic and revenue. Technical audits, link building, local SEO, and paid acquisition for growing businesses.";

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
      icon={Search}
      eyebrow="SEO & Marketing"
      h1={<>SEO and marketing that <span style={{ color: "#22C55E" }}>drives real revenue</span></>}
      intro="We grow your traffic, leads, and sales through technical SEO, content marketing, and social — built around the keywords and channels your customers actually use."
      accent="#22C55E"
      signature="Compounding traffic. Tracked revenue."
      stats={[
        { value: "3.5×", label: "Avg organic traffic lift" },
        { value: "30+", label: "Keywords ranked / quarter" },
        { value: "100%", label: "Reporting tied to revenue" },
      ]}
      serviceName="SEO & Marketing"
      serviceDescription="Technical SEO audits, content marketing, link building, local SEO, and paid acquisition to grow qualified traffic and revenue."
      outcomes={[
        { title: "Technical SEO audit", desc: "Crawl, indexing, schema, Core Web Vitals — fixed at the root, not patched." },
        { title: "Keyword & content strategy", desc: "Research grounded in real search volume, intent, and competition." },
        { title: "On-page optimization", desc: "Titles, meta, headings, internal linking, and structured data across every page." },
        { title: "Link building", desc: "Editorial outreach and digital PR — no spammy networks, ever." },
        { title: "Local SEO", desc: "Google Business Profile, citations, and local schema for brick-and-mortar growth." },
        { title: "Monthly reporting", desc: "Clear dashboards: rankings, traffic, conversions — and what we're doing next." },
      ]}
      process={[
        { step: "01", title: "Audit", desc: "Technical, content, and competitor analysis. We find the biggest gaps first." },
        { step: "02", title: "Strategy", desc: "Keyword map, content calendar, and a 90-day action plan." },
        { step: "03", title: "Execute", desc: "Content production, on-page fixes, outreach, and paid campaigns." },
        { step: "04", title: "Measure", desc: "Monthly reports tied to revenue — not vanity metrics." },
      ]}
      stack={["Semrush", "Ahrefs", "Google Search Console", "GA4", "Google Ads", "Meta Ads", "Schema.org", "Posthog"]}
      faqs={[
        { q: "How long does SEO take to show results?", a: "Technical wins (indexing, Core Web Vitals, structured data) often show up in 2–4 weeks. Content and keyword rankings typically take 3–6 months to move meaningfully. Competitive keywords can take 6–12 months." },
        { q: "What's included in your SEO service?", a: "Technical audit and fixes, on-page optimization, keyword strategy, content production, internal linking, link building, local SEO, and monthly reporting tied to business outcomes." },
        { q: "Do you do paid ads too?", a: "Yes — Google Ads and Meta Ads. We often combine paid and SEO so you get short-term traffic while organic compounds." },
        { q: "How is reporting handled?", a: "You get a monthly report covering rankings, traffic, leads, conversions, and what we shipped — plus a clear plan for the next month." },
        { q: "Do you write the content?", a: "Yes. We have a network of senior writers across most B2B and B2C niches. You review before anything publishes." },
        { q: "Do you offer local SEO?", a: "Yes — Google Business Profile optimization, local citations, location pages, and LocalBusiness schema. Great for service businesses targeting a city or region." },
      ]}
      related={[
        { title: "Website Development", href: "/services/website-development" },
        { title: "AI & Automation", href: "/services/ai-automation" },
        { title: "Mobile App Development", href: "/services/mobile-app-development" },
      ]}
    />
  );
}
