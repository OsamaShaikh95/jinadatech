import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const serviceLinks = [
  { to: "/services/website-development", label: "Website Development", desc: "Marketing sites, landing pages, CMS" },
  { to: "/services/mobile-app-development", label: "Mobile App Development", desc: "iOS, Android, React Native" },
  { to: "/services/seo-marketing", label: "SEO & Marketing", desc: "Traffic, content, paid ads" },
  { to: "/services/ai-automation", label: "AI & Automation", desc: "Agents, RAG, workflows" },
  { to: "/services/complete-partnership", label: "Complete Partnership", desc: "Your all‑in‑one digital team" },
] as const;

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className={`${scrolled ? "bg-background border border-border shadow-lg" : "glass"} rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-300`}>
          <Logo />
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors"
              activeProps={{ className: "text-foreground bg-white/5" }}
              activeOptions={{ exact: true }}
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={scheduleClose}
            >
              <Link
                to="/services"
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors inline-flex items-center gap-1 cursor-pointer"
                activeProps={{ className: "text-foreground bg-white/5" }}
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </Link>

              {servicesOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[22rem]"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleClose}
                  role="menu"
                >
                  <div className="bg-popover rounded-2xl p-2 border border-border shadow-2xl">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        onClick={() => setServicesOpen(false)}
                        className="block rounded-xl px-3 py-2.5 hover:bg-white/5 transition-colors cursor-pointer"
                        activeProps={{ className: "bg-white/5" }}
                      >
                        <div className="text-sm font-medium text-foreground">{s.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{s.desc}</div>
                      </Link>
                    ))}
                    <div className="mt-1 border-t border-border pt-1">
                      <Link
                        to="/services"
                        onClick={() => setServicesOpen(false)}
                        className="block rounded-xl px-3 py-2 text-xs text-[var(--brand-blue)] hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        View all services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {links.filter((l) => l.to !== "/").map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors"
                activeProps={{ className: "text-foreground bg-white/5" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/contact"
              className="btn-primary-glow hover:[&]:btn-primary-glow-hover px-4 py-2 rounded-xl text-sm font-medium"
            >
              Get a Quote
            </Link>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground p-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden glass mt-2 rounded-2xl p-4 animate-fade-up">
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg"
                activeProps={{ className: "text-foreground bg-white/5" }}
                activeOptions={{ exact: true }}
              >
                Home
              </Link>

              <div className="rounded-lg">
                <div className="flex items-center">
                  <Link
                    to="/services"
                    onClick={() => setOpen(false)}
                    className="flex-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg"
                    activeProps={{ className: "text-foreground bg-white/5" }}
                  >
                    Services
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="p-2 text-muted-foreground hover:text-foreground"
                    aria-label="Toggle services submenu"
                    aria-expanded={mobileServicesOpen}
                  >
                    <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
                {mobileServicesOpen && (
                  <div className="ml-3 mt-1 border-l border-border pl-3 flex flex-col gap-1">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                        className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg"
                        activeProps={{ className: "text-foreground bg-white/5" }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {links.filter((l) => l.to !== "/").map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg"
                  activeProps={{ className: "text-foreground bg-white/5" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 btn-primary-glow text-center px-4 py-2 rounded-xl text-sm font-medium">
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
