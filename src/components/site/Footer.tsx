import { Link } from "@tanstack/react-router";
import { Mail, Globe, Phone } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--brand-blue)]/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Jinada Tech is a modern technology partner helping startups and local businesses launch, automate, and scale through websites, mobile apps, AI, SEO, and digital marketing.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services/website-development" className="hover:text-foreground">Website Development</Link></li>
            <li><Link to="/services/mobile-app-development" className="hover:text-foreground">Mobile App Development</Link></li>
            <li><Link to="/services/seo-marketing" className="hover:text-foreground">SEO &amp; Marketing</Link></li>
            <li><Link to="/services/ai-automation" className="hover:text-foreground">AI &amp; Automation</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:info@jinadatech.com" className="flex items-center gap-2 hover:text-foreground"><Mail size={14} className="text-[var(--brand-blue)]" /> info@jinadatech.com</a></li>
            <li><a href="tel:+15123871981" className="flex items-center gap-2 hover:text-foreground"><Phone size={14} className="text-[var(--brand-blue)]" /> +1-512-387-1981</a></li>
            <li><a href="https://jinadatech.com" className="flex items-center gap-2 hover:text-foreground"><Globe size={14} className="text-[var(--brand-blue)]" /> jinadatech.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Jinada Tech. Websites • Apps • AI Automation
      </div>
    </footer>
  );
}
