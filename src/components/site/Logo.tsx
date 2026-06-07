import logoAsset from "@/assets/4node-logo.png.asset.json";
import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-[var(--neon-purple)]/40 blur-xl group-hover:bg-[var(--neon-magenta)]/50 transition-colors" />
        <img
          src={logoAsset.url}
          alt="4NodeTech"
          className="relative h-9 w-9 object-contain"
        />
      </div>
      <span className="font-display text-lg font-semibold tracking-tight">
        4Node<span className="text-gradient-brand">Tech</span>
      </span>
    </Link>
  );
}
