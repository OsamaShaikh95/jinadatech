import type { LucideIcon } from "lucide-react";
import type { FAQItem } from "@/components/site/FAQ";

export type RelatedService = { title: string; href: string };
export type ServiceStat = { value: string; label: string };
export type IncludedItem = { title: string; desc: string; icon?: LucideIcon };
export type Benefit = { title: string; desc: string };

export type ServicePageData = {
  slug: string;
  h1: React.ReactNode;
  eyebrow: string;
  intro: string;
  icon: LucideIcon;
  accent: string;
  signature: string;
  stats: ServiceStat[];
  overview: { includes: string; audience: string; solves: string };
  included: IncludedItem[];
  benefits: Benefit[];
  process: { step: string; title: string; desc: string }[];
  faqs: FAQItem[];
  related: RelatedService[];
  serviceName: string;
  serviceDescription: string;
};

export const SITE = "https://jinadatech.com";

export function buildServiceLd(d: ServicePageData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: d.serviceName,
    description: d.serviceDescription,
    url: `${SITE}/services/${d.slug}`,
    provider: { "@type": "Organization", name: "Jinada Tech", url: SITE },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${d.serviceName} deliverables`,
      itemListElement: d.included.map((i) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: i.title, description: i.desc },
      })),
    },
  };
}

export function buildFaqLd(d: ServicePageData) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
