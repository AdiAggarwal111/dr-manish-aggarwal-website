import { memo, useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, PhoneCall } from "lucide-react";
import { siteConfig } from "@/data/site-config";

interface NavItem {
  to: "/" | "/about" | "/procedures" | "/conditions" | "/facility" | "/reviews" | "/contact";
  label: string;
  hash?: string;
}

const NAV_ITEMS: readonly NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/procedures", label: "Procedures" },
  { to: "/conditions", label: "Conditions" },
  { to: "/facility", label: "Facility" },
  { to: "/reviews", label: "Reviews" },
] as const;

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

export const SiteHeader = memo(function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Automatically close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-2 sm:top-4 z-50 mx-auto w-full max-w-[1400px] px-3 sm:px-4 pt-[env(safe-area-inset-top,0px)]">
      {/* Main Floating Header Pill */}
      <div
        className="flex items-center justify-between rounded-full bg-navy px-5 py-3 text-navy-foreground md:px-8 md:py-4"
        style={{ boxShadow: "var(--shadow-nav)" }}
      >
        <Link
          to="/"
          className="flex flex-col leading-tight focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <span className="font-display text-xl md:text-2xl">{siteConfig.name}</span>
          <span className="text-[10px] tracking-[0.2em] text-navy-foreground/60 md:text-xs">
            INTERVENTIONAL CARDIOLOGIST
          </span>
        </Link>

        {/* Desktop Navigation: Responsive gap & emergency helpline */}
        <nav
          aria-label="Main Navigation"
          className="hidden items-center gap-3.5 lg:gap-5 xl:gap-6 md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className="text-sm text-navy-foreground/85 transition hover:text-navy-foreground"
              activeProps={{ className: "text-navy-foreground font-medium" }}
              activeOptions={{ exact: item.to === "/" && !item.hash }}
            >
              {item.label}
            </Link>
          ))}

          {/* 24/7 Cardiac Emergency Helpline Pill */}
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-500/20 px-3.5 py-2 text-xs font-semibold text-red-200 transition hover:bg-red-500/30 hover:text-white shrink-0 shadow-sm"
            title="24/7 Acute Cardiac Emergency Helpline (Golden Hour Primary Angioplasty)"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <PhoneCall className="h-3.5 w-3.5 text-red-300" />
            <span className="hidden lg:inline text-red-100">24/7 Helpline:</span>
            <span className="font-mono text-white">{siteConfig.phoneDisplay}</span>
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-navy transition hover:bg-white/90 shrink-0 shadow-sm"
          >
            <CalendarIcon className="h-4 w-4" />
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Header Controls: Compact 1-Tap Emergency Call & Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden shrink-0">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            aria-label={`Call 24/7 Cardiac Emergency Helpline (${siteConfig.phoneDisplay})`}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-red-400/40 bg-red-500/20 text-red-200 transition hover:bg-red-500/30 active:scale-95 focus:outline-none"
            title={`24/7 Emergency Helpline: ${siteConfig.phoneDisplay}`}
          >
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <PhoneCall className="h-4 w-4 text-red-200 animate-pulse" />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isOpen && (
        <div className="mt-2.5 overflow-hidden rounded-3xl border border-white/15 bg-navy/95 p-4 text-navy-foreground shadow-[var(--shadow-nav)] backdrop-blur-2xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {/* 24/7 Emergency Quick Action Banner */}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center justify-between rounded-2xl border border-red-500/40 bg-red-500/20 p-3 text-xs text-red-100 transition hover:bg-red-500/30 mb-2"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                  <PhoneCall className="h-3.5 w-3.5 animate-pulse" />
                </div>
                <div>
                  <span className="font-semibold block text-white">24/7 Cardiac Emergency</span>
                  <span className="text-[11px] text-red-200 font-mono">
                    {siteConfig.phoneDisplay}
                  </span>
                </div>
              </div>
              <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold tracking-wider text-red-700 uppercase">
                Call Now
              </span>
            </a>

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-navy-foreground/90 transition hover:bg-white/10 hover:text-white"
              activeProps={{ className: "bg-white/10 text-white font-semibold" }}
              activeOptions={{ exact: true }}
            >
              <span>Home</span>
              <span className="text-xs text-white/40">→</span>
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-navy-foreground/90 transition hover:bg-white/10 hover:text-white"
              activeProps={{ className: "bg-white/10 text-white font-semibold" }}
            >
              <span>About</span>
              <span className="text-xs text-white/40">→</span>
            </Link>

            <Link
              to="/procedures"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-navy-foreground/90 transition hover:bg-white/10 hover:text-white"
              activeProps={{ className: "bg-white/10 text-white font-semibold" }}
            >
              <span>Procedures</span>
              <span className="text-xs text-white/40">→</span>
            </Link>

            <Link
              to="/conditions"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-navy-foreground/90 transition hover:bg-white/10 hover:text-white"
              activeProps={{ className: "bg-white/10 text-white font-semibold" }}
            >
              <span>Conditions Library</span>
              <span className="text-xs text-white/40">→</span>
            </Link>

            <Link
              to="/locations"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-navy-foreground/90 transition hover:bg-white/10 hover:text-white"
              activeProps={{ className: "bg-white/10 text-white font-semibold" }}
            >
              <span>Locations</span>
              <span className="text-xs text-white/40">→</span>
            </Link>

            <Link
              to="/facility"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-navy-foreground/90 transition hover:bg-white/10 hover:text-white"
              activeProps={{ className: "bg-white/10 text-white font-semibold" }}
            >
              <span>Facility</span>
              <span className="text-xs text-white/40">→</span>
            </Link>

            <Link
              to="/reviews"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-navy-foreground/90 transition hover:bg-white/10 hover:text-white"
              activeProps={{ className: "bg-white/10 text-white font-semibold" }}
            >
              <span>Reviews</span>
              <span className="text-xs text-white/40">→</span>
            </Link>

            {/* Direct Book Navigation Link */}
            <div className="pt-2 border-t border-white/10 mt-1">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:bg-white/90 shadow-sm"
              >
                <CalendarIcon className="h-4 w-4" />
                <span>Book Appointment</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
});
