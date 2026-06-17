import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href: string };

const SITE = "https://jinadatech.com";

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE}${c.href}`,
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.href} className="inline-flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="text-foreground">{c.label}</span>
              ) : (
                <Link to={c.href} className="hover:text-foreground transition-colors">{c.label}</Link>
              )}
              {!last && <ChevronRight size={12} className="opacity-60" />}
            </li>
          );
        })}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </nav>
  );
}
