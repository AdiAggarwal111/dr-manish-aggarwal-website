import { memo } from "react";
import { Link } from "@tanstack/react-router";
import {
  PhoneCall,
  MessageSquare,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  ArrowUpRight,
  HeartPulse,
  Activity,
  CreditCard,
  Calendar,
  ChevronRight,
  ArrowUp,
  Stethoscope,
  Building2,
  CheckCircle2,
  FileText,
  Phone,
  Sparkles,
} from "lucide-react";
import { locations } from "@/data/locations";
import { siteConfig } from "@/data/site-config";
import { conditions } from "@/data/conditions";
import { procedureCosts } from "@/data/costs";
import { procedures } from "@/data/procedures";

export const SiteFooter = memo(function SiteFooter() {
  const cleanPhone = siteConfig.phoneRaw.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hello Dr. Manish Aggarwal's clinical coordinator, I would like to inquire about an appointment / second opinion review.",
  )}`;

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#071120] text-slate-300 border-t border-white/10 selection:bg-primary selection:text-white">
      {/* Decorative ambient background accents */}
      <div
        className="pointer-events-none absolute left-1/4 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-10 bottom-1/3 -z-10 h-96 w-96 rounded-full bg-emerald-500/5 blur-[160px]"
        aria-hidden="true"
      />

      {/* =========================================================================
          SECTION 1: FAST-ACTION TRIAGE & CLINICAL HELPLINE PAVILION
          ========================================================================= */}
      <div className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* 1. 24/7 Cardiac Emergency Hotline */}
            <div className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/15 via-red-950/20 to-transparent p-5 transition hover:border-red-400/50 hover:bg-red-500/20 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/20 text-red-300 border border-red-400/30">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-300">
                    24/7 Emergency Helpline
                  </span>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="block font-mono text-base font-bold text-white hover:text-red-200 transition"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
              <p className="mt-2.5 text-[11px] leading-relaxed text-red-200/80">
                Direct primary angioplasty triage &amp; Golden Hour door-to-balloon cath lab
                response.
              </p>
            </div>

            {/* 2. WhatsApp Angiogram CD Review */}
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 via-emerald-950/20 to-transparent p-5 transition hover:border-emerald-400/50 hover:bg-emerald-500/20 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    Second Opinion Desk
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-display text-base font-semibold text-white hover:text-emerald-200 transition"
                  >
                    WhatsApp Angiogram CD ↗
                  </a>
                </div>
              </div>
              <p className="mt-2.5 text-[11px] leading-relaxed text-emerald-200/80">
                Frame-by-frame review before open CABG. Radical diagnostic honesty with zero stent
                quotas.
              </p>
            </div>

            {/* 3. Yashoda Medicity Flagship OPD */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.05] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-blue-300 border border-primary/30">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    OPD Consultations
                  </span>
                  <a
                    href={siteConfig.hospitalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-display text-base font-semibold text-white hover:text-blue-200 transition underline decoration-white/20 underline-offset-2"
                    title="View Dr. Manish Aggarwal's Official Yashoda Medicity Profile"
                  >
                    {siteConfig.hospital} ↗
                  </a>
                </div>
              </div>
              <p className="mt-2.5 text-[11px] leading-relaxed text-slate-400">
                {siteConfig.opdHours} · Suite 210, Indirapuram, Ghaziabad, Delhi NCR.
              </p>
            </div>

            {/* 4. 100% Cashless TPA Desk */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.05] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/20 text-purple-300 border border-purple-400/30">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Cashless Empanelment
                  </span>
                  <Link
                    to="/facility"
                    hash="insurance-tpa"
                    className="block font-display text-base font-semibold text-white hover:text-purple-200 transition"
                  >
                    CGHS, ECHS &amp; TPAs →
                  </Link>
                </div>
              </div>
              <p className="mt-2.5 text-[11px] leading-relaxed text-slate-400">
                NPPA statutory price cap compliance. Fast-track cashless pre-auth under 60 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 2: 5-COLUMN HIGH-AUTHORITY CLINICAL DIRECTORY
          ========================================================================= */}
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Doctor Credentials & Institutional Anchor (3 cols) */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-5">
            <Link to="/" className="inline-block group focus:outline-none">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-blue-500 text-white shadow-md">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <div>
                  <span className="font-display text-2xl font-medium tracking-tight text-white group-hover:text-blue-200 transition">
                    {siteConfig.name}
                  </span>
                  <span className="block text-[10px] font-bold tracking-[0.2em] text-blue-300 uppercase">
                    Interventional Cardiologist
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Director &amp; Department Head of Interventional Cardiology &amp; Structural Heart
              Specialist at{" "}
              <a
                href={siteConfig.hospitalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline underline-offset-2"
                title="View Official Yashoda Medicity Profile"
              >
                {siteConfig.hospital}
              </a>
              . Over {siteConfig.experienceYears} years of procedural mastery, European Structural
              Heart Fellowship (Gottsegen Institute, Budapest), and {siteConfig.proceduresCount}{" "}
              catheter-based interventions.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Award className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Credentials:</strong> MBBS, MD (Medicine), DNB
                  (Cardiology), Fellow Structural Heart (ESC Budapest)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-blue-400 shrink-0" />
                <span>
                  <strong className="text-white">Registration:</strong> {siteConfig.registration}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-blue-400 shrink-0" />
                <span>
                  <strong className="text-white">Memberships:</strong> CSI (Cardiological Society of
                  India), ESC
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <a
                  href={siteConfig.hospitalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition underline decoration-white/20"
                >
                  {siteConfig.hospital}, Nyay Khand 1, Indirapuram, Ghaziabad, UP 201014 ↗
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-navy transition hover:bg-slate-100 shadow-sm"
              >
                <Calendar className="h-3.5 w-3.5 text-navy" />
                <span>Book Consultation</span>
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-medium text-white transition hover:bg-white/10"
              >
                <Phone className="h-3.5 w-3.5 text-blue-300" />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>

          {/* Column 2: Specialized Procedures (9 procedures - 2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 font-display text-xs font-bold tracking-[0.2em] uppercase text-white/90 flex items-center gap-2">
              <Activity className="h-3.5 w-3.5 text-primary" />
              <span>Procedures</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              {procedures.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/procedures/$slug"
                    params={{ slug: p.slug }}
                    className="hover:text-white transition flex items-center justify-between group py-0.5"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {p.title}
                    </span>
                    <span className="text-[10px] text-slate-600 group-hover:text-primary transition-colors">
                      →
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <Link
                  to="/procedures"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 hover:text-white transition"
                >
                  <span>Explore All 9 Procedures</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Heart Conditions & Symptoms Hub (14 conditions - 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 font-display text-xs font-bold tracking-[0.2em] uppercase text-white/90 flex items-center gap-2">
              <HeartPulse className="h-3.5 w-3.5 text-rose-400" />
              <span>Conditions Library</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2 text-xs text-slate-400">
              {conditions.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/conditions/$slug"
                    params={{ slug: c.slug }}
                    className="hover:text-white transition flex items-center justify-between group py-0.5"
                  >
                    <span className="truncate group-hover:translate-x-0.5 transition-transform">
                      {c.shortTitle || c.title.split("&")[0].trim()}
                    </span>
                    <span className="text-[10px] text-slate-600 group-hover:text-rose-400 transition-colors">
                      →
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10 sm:col-span-2 lg:col-span-1">
                <Link
                  to="/conditions"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-300 hover:text-white transition"
                >
                  <span>All 14 Condition Hubs (MitraClip, CTO, RDN)</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Transparent Cost Guides & Statutory Caps (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 font-display text-xs font-bold tracking-[0.2em] uppercase text-white/90 flex items-center gap-2">
              <CreditCard className="h-3.5 w-3.5 text-emerald-400" />
              <span>Cost Guides</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {procedureCosts.map((g) => (
                <li key={g.slug}>
                  <Link
                    to="/costs/$slug"
                    params={{ slug: g.slug }}
                    className="hover:text-white transition block group py-0.5"
                  >
                    <span className="font-medium text-slate-200 group-hover:text-emerald-300 transition">
                      {g.shortTitle}
                    </span>
                    <span className="block text-[10px] text-emerald-400/80 mt-0.5">
                      {g.overallPriceRange}
                    </span>
                  </Link>
                </li>
              ))}

              <li className="rounded-xl border border-white/10 bg-white/[0.02] p-2.5 text-[11px] text-slate-400 leading-snug">
                <span className="font-semibold text-white block mb-0.5">
                  Statutory NPPA Price Cap:
                </span>
                Drug-Eluting Stents (DES) capped at ₹38,265 (+GST). Zero hidden billing.
              </li>

              <li className="pt-1">
                <Link
                  to="/costs"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 hover:text-white transition"
                >
                  <span>View All Package Guides</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Institutional & Quick Resources (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 font-display text-xs font-bold tracking-[0.2em] uppercase text-white/90 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>Explore Portal</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Dr. Manish Aggarwal
                </Link>
              </li>
              <li>
                <Link to="/facility" className="hover:text-white transition">
                  Yashoda Medicity Quaternary Lab
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-white transition">
                  Patient Reviews &amp; 4.9★ Ratings
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-white transition">
                  Locations Directory (25 Corridors)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact &amp; OPD Booking Desk
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.hospitalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition inline-flex items-center gap-1 text-slate-300"
                >
                  <span>Official Hospital Profile</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 3: REGIONAL FEEDER CORRIDORS (25 DELHI NCR LOCATIONS)
          ========================================================================= */}
      <div id="locations" className="border-t border-white/10 bg-black/20 scroll-mt-20">
        <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-0.5 text-xs font-semibold text-blue-300 mb-2 border border-blue-500/20">
                <MapPin className="h-3 w-3" />
                <span>Geographic Feeder Network</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-medium text-white">
                Regions Served Across Delhi NCR &amp; Western Uttar Pradesh
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Rapid arterial connectivity and Door-to-Balloon emergency transit routes to Yashoda
                Medicity, Indirapuram.
              </p>
            </div>

            <Link
              to="/locations"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 hover:text-white transition shrink-0"
            >
              <span>View Interactive Locations Hub</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-xs">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to="/locations/$slug"
                params={{ slug: loc.slug }}
                className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2 text-slate-400 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                <span className="truncate">{loc.name}</span>
                <span className="font-mono text-[10px] text-slate-600 group-hover:text-blue-300 transition-colors ml-1.5 shrink-0">
                  {loc.transitTime.split(" ")[0]}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 4: ACCREDITATIONS & STATUTORY TRUST STRIP
          ========================================================================= */}
      <div className="border-t border-white/10 bg-white/[0.01]">
        <div className="mx-auto max-w-[1400px] px-6 py-6 md:px-12">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4 text-[11px] text-slate-400">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>Delhi Medical Council Reg: {siteConfig.registration}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>European Structural Heart Fellow (Budapest)</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>100% Cashless CGHS, ECHS &amp; TPA Empanelled</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>NPPA Statutory Stent Pricing Compliant</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>DPDP Act 2023 &amp; NMC Ethics Compliant</span>
              </span>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 hover:bg-white/10 hover:text-white transition"
              title="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 5: COPYRIGHT, STATUTORY LEGAL LINKS & MEDICAL DISCLAIMER
          ========================================================================= */}
      <div className="border-t border-white/10 bg-black/40 px-6 py-6 text-center text-xs text-slate-400">
        <div className="mx-auto max-w-[1200px] space-y-3">
          <p className="text-slate-300">
            © {new Date().getFullYear()} {siteConfig.name}. Director of Interventional Cardiology
            &amp; Structural Heart Specialist,{" "}
            <a
              href={siteConfig.hospitalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              {siteConfig.hospital}
            </a>
            , Indirapuram, Ghaziabad, Delhi NCR.
          </p>

          {/* Statutory Legal & Compliance Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400 py-1">
            <Link
              to="/privacy"
              className="hover:text-white transition underline underline-offset-4 decoration-white/20"
            >
              Privacy Policy (DPDP Act 2023)
            </Link>
            <span className="text-white/20" aria-hidden="true">
              •
            </span>
            <Link
              to="/terms"
              className="hover:text-white transition underline underline-offset-4 decoration-white/20"
            >
              Terms of Clinical Consultation &amp; NMC Notice
            </Link>
            <span className="text-white/20" aria-hidden="true">
              •
            </span>
            <span className="text-slate-400">
              Delhi Medical Council Reg. #{siteConfig.registration}
            </span>
          </div>

          <p className="text-[11px] text-slate-500 leading-relaxed max-w-4xl mx-auto">
            Clinical Disclaimer: Medical information, procedural descriptions, and cost estimates
            presented on this website are authored for patient education under Medical Council
            guidelines. They do not constitute formal medical diagnosis or replace an in-person
            clinical consultation. In the event of acute chest pain, breathlessness, or suspected
            heart attack, immediately call our 24/7 Helpline (+91-9871183181) or report to the
            nearest emergency cath lab.
          </p>
        </div>
      </div>
    </footer>
  );
});
