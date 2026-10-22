import { memo } from "react";
import { Link } from "@tanstack/react-router";
import { ShieldCheck, Disc, FileSearch, ArrowRight, MessageSquare, PhoneCall } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export const SecondOpinionBanner = memo(function SecondOpinionBanner() {
  const cleanPhone = siteConfig.phoneRaw.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hello Dr. Manish Aggarwal's team, I have an Angiogram CD / 2D Echo report and would like an expert second opinion on my case.",
  )}`;

  return (
    <section className="px-6 py-14 md:px-12 bg-card border-y border-border/80">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy/95 to-slate-900 p-8 text-white sm:p-12 lg:p-16 shadow-2xl">
          {/* Subtle background glow */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-emerald-300 backdrop-blur-md uppercase">
                <ShieldCheck className="h-4 w-4" />
                <span>Radical Diagnostic Honesty · Zero Stent Quotas</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-white">
                Have an Angiogram CD or Echo Report? <br className="hidden sm:inline" />
                <span className="text-emerald-300">Get an Independent Second Opinion.</span>
              </h2>

              <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-200 text-pretty text-justify-docs">
                Before undergoing open-heart bypass surgery (CABG) or multi-stent placement, let Dr.
                Manish Aggarwal review your angiography CD. We practice radical diagnostic honesty,
                evaluating whether your blockages can be safely treated through minimally invasive
                transradial angioplasty, or if bypass surgery is genuinely necessary for your
                long-term health.
              </p>

              {/* Trust Value Points */}
              <div className="grid gap-4 sm:grid-cols-3 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <Disc className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white block font-medium">Digital CD Review</strong>
                    Frame-by-frame analysis of bifurcation &amp; CTO lesions.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <FileSearch className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white block font-medium">Zero Quotas</strong>
                    Guideline-directed advice: no unnecessary stenting.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white block font-medium">Heart Team Consensus</strong>
                    Honest referral when bypass surgery is genuinely superior.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-4 flex flex-col gap-4 justify-center bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <div className="text-center sm:text-left">
                <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                  Fast-Track Consultation
                </p>
                <p className="mt-1 font-display text-lg text-white font-medium">
                  Direct Case Review at Yashoda Medicity
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy transition hover:bg-slate-100 shadow-md"
              >
                <span>Book CD Second Opinion</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/20 px-6 py-3.5 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/30"
              >
                <MessageSquare className="h-4 w-4 text-emerald-400" />
                <span>WhatsApp Angiogram File</span>
              </a>

              <p className="text-center text-[11px] text-slate-400">
                📞 Emergency Angiogram Triage:{" "}
                <a href={`tel:${siteConfig.phoneRaw}`} className="text-white font-medium underline">
                  {siteConfig.phoneDisplay}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
