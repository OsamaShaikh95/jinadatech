import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FAQItem = { q: string; a: string };

export function FAQ({ items, title = "Frequently asked questions" }: { items: FAQItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8 text-center">{title}</h2>
      <div className="max-w-3xl mx-auto space-y-3">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={it.q} className="glass rounded-2xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-sm sm:text-base">{it.q}</span>
                {isOpen ? <Minus size={16} className="shrink-0 text-[var(--brand-blue)]" /> : <Plus size={16} className="shrink-0 text-[var(--brand-blue)]" />}
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{it.a}</div>
              )}
            </div>
          );
        })}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </div>
  );
}
