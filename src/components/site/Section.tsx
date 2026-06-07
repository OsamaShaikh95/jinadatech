import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-14`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground mb-4`}>
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-cyan)] animate-pulse-glow" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground text-base sm:text-lg">{description}</p>}
    </div>
  );
}
