import { memo } from "react";
import { Link } from "@tanstack/react-router";
import {
  PhoneCall,
  MessageSquare,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  HeartPulse,
  Activity,
  CreditCard,
  Calendar,
  ChevronRight,
  ArrowUp,
  Building2,
  CheckCircle2,
  FileText,
  Phone,
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
    <footer className="bg-[#091322] text-slate-300 border-t border-white/10 selection:bg-primary selection:text-white">
      
      {/* =========================================================================
          TOP TRIAGE STRIP: FAST EMERGENCY & PATIENT ASSISTANCE DESKS
          ========================================================================= */}
      <div className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-[1400px] px-6 py-8 md:px-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* 1. 24/7 Acute Cardiac Emergency */}
            <div className="rounded-xl border border-red-500/25 bg-red-950/20 p-4 transition hover:border-red-400/40">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/20 text-red-300 border border-red-500/30">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-300">
                    24/7 Emergency Line
                  </span>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="block font-mono text-sm font-bold text-white hover:text-red-200 transition"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
              <p className="mt-2 text-[11px] text-slate-400 leading-snug">
                Immediate door-to-balloon primary angioplasty triage for acute chest pain &amp; STEMI.
              </p>
            </div>

            {/* 2. Digital Angiogram CD Desk */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/20">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    Second Opinion Desk
                  </span>
                  <Link
                    to="/second-opinion"
                    className="block font-medium text-sm text-white hover:text-emerald-200 transition"
                  >
                    Angiogram CD Review →
                  </Link>
                </div>
              </div>
              <p className="mt-2 text-[11px] text-slate-400 leading-snug">
                Independent evaluation before open CABG or multi-stents. 2-hour report turnaround.
              </p>
            </div>

            {/* 3. Cashless TPA & CGHS Desk */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/20">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                    Cashless Empanelment
                  </span>
                  <Link
                    to="/insurance"
                    className="block font-medium text-sm text-white hover:text-blue-200 transition"
                  >
                    Cashless TPA &amp; CGHS →
                  </Link>
                </div>
              </div>
              <p className="mt-2 text-[11px] text-slate-400 leading-snug">
                Pre-authorization under 60 minutes for Star Health, HDFC Ergo, Care, CGHS &amp; ECHS.
              </p>
            </div>

            {/* 4. Yashoda Medicity OPD */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/20">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                    Director Suite 210
                  </span>
                  <Link
                    to="/contact"
                    className="block font-medium text-sm text-white hover:text-amber-200 transition"
                  >
                    Yashoda Medicity OPD →
                  </Link>
                </div>
              </div>
              <p className="mt-2 text-[11px] text-slate-400 leading-snug">
                {siteConfig.opdHours} · Indirapuram, Ghaziabad, Delhi NCR.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN CLINICAL DIRECTORY: 5 COLUMNS
          ========================================================================= */}
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          
          {/* Column 1: Doctor Profile & Credentials (3 cols) */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-4">
            <Link to="/" className="inline-block group focus:outline-none">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-display text-xl font-medium tracking-tight text-white group-hover:text-blue-200 transition">
                    {siteConfig.name}
                  </span>
                  <span className="block text-[10px] font-bold tracking-[0.15em] text-blue-300 uppercase">
                    Interventional Cardiologist
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Director &amp; Department Head of Interventional Cardiology &amp; Structural Heart Specialist at{" "}
              <a
                href={siteConfig.hospitalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                {siteConfig.hospital}
              </a>
              . Over {siteConfig.experienceYears} years of clinical mastery, European Structural Heart Fellowship (Budapest), and {siteConfig.proceduresCount} catheter-based interventions.
            </p>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Award className="h-3.5 w-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Credentials:</strong> MBBS, MD, DNB (Cardiology), FESC
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                <span>
                  <strong className="text-white">DMC Reg:</strong> {siteConfig.registration}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-blue-400 shrink-0 mt-0.5" />
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition underline decoration-white/20"
                >
                  {siteConfig.hospital}, Indirapuram, Ghaziabad, UP 201014 ↗
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-navy transition hover:bg-slate-100 shadow-sm"
              >
                <Calendar className="h-3.5 w-3.5 text-navy" />
                <span>Book Appointment</span>
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3.5 py-2 text-xs font-medium text-white transition hover:bg-white/10"
              >
                <Phone className="h-3.5 w-3.5 text-blue-300" />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>

          {/* Column 2: Advanced Procedures (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="mb-3 text-xs font-bold tracking-[0.15em] uppercase text-white flex items-center gap-2">
              <Activity className="h-3.5 w-3.5 text-primary" />
              <span>Procedures</span>
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {procedures.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/procedures/$slug"
                    params={{ slug: p.slug }}
                    className="hover:text-white transition block py-0.5"
                  >
                    {p.title.split("(")[0].trim()}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <Link
                  to="/procedures"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-300 hover:text-white transition"
                >
                  <span>All Procedures &amp; Imaging</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Heart Conditions Library (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="mb-3 text-xs font-bold tracking-[0.15em] uppercase text-white flex items-center gap-2">
              <HeartPulse className="h-3.5 w-3.5 text-rose-400" />
              <span>Heart Conditions</span>
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {conditions.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/conditions/$slug"
                    params={{ slug: c.slug }}
                    className="hover:text-white transition block py-0.5 truncate"
                  >
                    {c.shortTitle || c.title.split("&")[0].trim()}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <Link
                  to="/conditions"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-rose-300 hover:text-white transition"
                >
                  <span>All 14 Condition Hubs</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Transparent Cost Guides (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="mb-3 text-xs font-bold tracking-[0.15em] uppercase text-white flex items-center gap-2">
              <CreditCard className="h-3.5 w-3.5 text-emerald-400" />
              <span>Cost &amp; Hardware</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link
                  to="/costs/stent-brands-comparison"
                  className="text-white hover:text-emerald-300 transition block py-0.5 font-medium"
                >
                  <span className="block truncate">Which Stent is Best? (Onyx vs Xience)</span>
                  <span className="text-[10px] text-emerald-400/80">NPPA Cap ₹38,265</span>
                </Link>
              </li>
              <li>
                <a
                  href="/costs#cost-estimator"
                  className="text-emerald-300 hover:text-white transition block py-0.5 font-medium"
                >
                  <span className="block truncate">Interactive Cost Estimator ↗</span>
                  <span className="text-[10px] text-slate-400">Calculate Hospital Package</span>
                </a>
              </li>
              {procedureCosts.slice(0, 4).map((g) => (
                <li key={g.slug}>
                  <Link
                    to="/costs/$slug"
                    params={{ slug: g.slug }}
                    className="hover:text-white transition block py-0.5"
                  >
                    <span className="font-medium text-slate-200 block truncate">
                      {g.shortTitle}
                    </span>
                    <span className="text-[10px] text-emerald-400/80">
                      {g.overallPriceRange}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <Link
                  to="/costs"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-300 hover:text-white transition"
                >
                  <span>View All Cost Guides</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Patient Services & Specialized Hub (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="mb-3 text-xs font-bold tracking-[0.15em] uppercase text-white flex items-center gap-2">
              <Building2 className="h-3.5 w-3.5 text-blue-400" />
              <span>Specialized Hub &amp; Tools</span>
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link
                  to="/conditions/chest-pain-heart-attack-vs-acidity"
                  className="text-white hover:text-rose-300 transition font-medium block py-0.5"
                >
                  <span className="text-rose-400 font-semibold">[Tool]</span> Chest Pain: Acidity vs Heart Attack
                </Link>
              </li>
              <li>
                <Link
                  to="/second-opinion/report-interpretation"
                  className="text-white hover:text-blue-300 transition font-medium block py-0.5"
                >
                  <span className="text-blue-400 font-semibold">[Tool]</span> Report Decrypter: 70%–90% Blockage
                </Link>
              </li>
              <li>
                <Link
                  to="/second-opinion/avoid-bypass-surgery"
                  className="text-white hover:text-rose-300 transition font-medium block py-0.5"
                >
                  <span className="text-rose-300 font-semibold">[Guide]</span> Avoid Bypass Surgery (CABG) Hub
                </Link>
              </li>
              <li>
                <Link
                  to="/second-opinion/echo-report-decrypter"
                  className="text-white hover:text-blue-300 transition font-medium block py-0.5"
                >
                  <span className="text-blue-400 font-semibold">[Tool]</span> 2D Echo Report Normal Decrypter
                </Link>
              </li>
              <li>
                <Link
                  to="/second-opinion/angioplasty-vs-bypass"
                  className="text-slate-200 hover:text-amber-300 transition font-medium block py-0.5"
                >
                  <span className="text-amber-400 font-semibold">[Guide]</span> Angioplasty vs Bypass (CABG) Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/second-opinion/max-fortis-cardiac-second-opinion"
                  className="text-white hover:text-cyan-300 transition font-medium block py-0.5"
                >
                  <span className="text-cyan-400 font-semibold">[Desk]</span> Max &amp; Fortis 2nd Opinion
                </Link>
              </li>
              <li>
                <Link
                  to="/second-opinion/positive-tmt-test-next-steps"
                  className="text-white hover:text-amber-300 transition font-medium block py-0.5"
                >
                  <span className="text-amber-400 font-semibold">[Guide]</span> Positive TMT Test: Next Steps
                </Link>
              </li>
              <li>
                <Link
                  to="/procedures/daycare-radial-angiography"
                  className="text-white hover:text-teal-300 transition font-medium block py-0.5"
                >
                  <span className="text-teal-400 font-semibold">[Desk]</span> Same-Day Radial Angiography
                </Link>
              </li>
              <li>
                <Link
                  to="/conditions/in-stent-restenosis-treatment"
                  className="text-white hover:text-purple-300 transition font-medium block py-0.5"
                >
                  <span className="text-purple-400 font-semibold">[Clinic]</span> Blocked Stent (ISR) Clinic
                </Link>
              </li>
              <li>
                <Link
                  to="/insurance/cghs-cardiology"
                  className="text-slate-200 hover:text-emerald-300 transition font-medium block py-0.5"
                >
                  <span className="text-emerald-400 font-semibold">[Desk]</span> CGHS &amp; ECHS Fast-Track Desk
                </Link>
              </li>
              <li>
                <Link
                  to="/best-cardiologist-indirapuram-ghaziabad"
                  className="text-white hover:text-indigo-300 transition font-medium block py-0.5"
                >
                  <span className="text-indigo-400 font-semibold">[Guide]</span> Top Cardiologist Selection Guide
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* =========================================================================
          REGIONAL DELHI NCR ACCESS CORRIDORS
          ========================================================================= */}
      <div className="border-t border-white/10 bg-white/[0.01]">
        <div className="mx-auto max-w-[1400px] px-6 py-8 md:px-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Delhi NCR &amp; Western UP Patient Catchment (25 Localities)
            </span>
            <Link
              to="/locations"
              className="text-xs font-semibold text-blue-300 hover:text-white transition"
            >
              Browse Full Locations Directory →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-xs">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to="/locations/$slug"
                params={{ slug: loc.slug }}
                className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1.5 text-slate-400 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                <span className="truncate">{loc.name}</span>
                <span className="font-mono text-[10px] text-slate-500 ml-1.5 shrink-0">
                  {loc.transitTime.split(" ")[0]}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          STATUTORY COMPLIANCE & LEGAL STRIP
          ========================================================================= */}
      <div className="border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-[1400px] px-6 py-6 md:px-12">
          <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-400">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="https://delhimedicalcouncil.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition"
                title="Verify Delhi Medical Council registration"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>Delhi Medical Council Reg: {siteConfig.registration} (Verify ↗)</span>
              </a>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition"
                title="View verified 370+ patient reviews on Google Maps"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" />
                <span>Google Rating: 4.9★ ({siteConfig.rating.reviewCount} Verified Reviews ↗)</span>
              </a>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>100% Cashless CGHS, ECHS &amp; TPA Empanelled</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>NPPA Stent Price Cap Compliant (₹38,265 + GST)</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>DPDP Act 2023 &amp; NMC Ethics Compliant</span>
              </span>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
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
          COPYRIGHT & CLINICAL DISCLAIMER
          ========================================================================= */}
      <div className="border-t border-white/5 bg-black/60 px-6 py-6 text-center text-xs text-slate-400">
        <div className="mx-auto max-w-4xl space-y-2">
          <p className="text-slate-300">
            © {new Date().getFullYear()} {siteConfig.name}. Director of Interventional Cardiology &amp; Structural Heart Specialist,{" "}
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

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400 py-1">
            <Link to="/privacy" className="hover:text-white transition underline underline-offset-4 decoration-white/20">
              Privacy Policy (DPDP Act 2023)
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/terms" className="hover:text-white transition underline underline-offset-4 decoration-white/20">
              Terms of Clinical Consultation
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/insurance" className="hover:text-white transition underline underline-offset-4 decoration-white/20">
              Cashless TPA Desk
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/second-opinion" className="hover:text-white transition underline underline-offset-4 decoration-white/20">
              Second Opinion Desk
            </Link>
          </div>

          <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
            Clinical Disclaimer: Medical information, procedural overviews, and cost estimations presented on this website are authored for patient education under Medical Council guidelines. They do not constitute formal medical diagnosis or replace an in-person clinical consultation. In the event of acute chest pain or suspected heart attack, immediately call our 24/7 Helpline ({siteConfig.phoneDisplay}) or report to the nearest emergency cath lab.
          </p>
        </div>
      </div>

    </footer>
  );
});
