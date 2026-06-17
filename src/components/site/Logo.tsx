import { Link } from "@tanstack/react-router";

const logoSrc = "/jinada-mark.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-[var(--brand-blue)]/40 blur-xl group-hover:bg-[var(--brand-blue-soft)]/50 transition-colors" />
        <img
          src={logoSrc}
          alt="Jinada Tech logo"
          width={36}
          height={36}
          fetchPriority="high"
          decoding="async"
          className="relative h-9 w-9 object-contain"
        />

      </div>
      <span className="font-display text-lg font-semibold tracking-tight">
        Jinada<span className="text-gradient-brand">Tech</span>
      </span>
    </Link>
  );
}
