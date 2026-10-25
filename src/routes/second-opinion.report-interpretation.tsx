import { useState, useId } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  MessageSquare,
  PhoneCall,
  Clock,
  HeartPulse,
  Activity,
  Award,
  AlertTriangle,
  FileText,
  Stethoscope,
  Microscope,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";
import { AppointmentSection } from "@/components/appointment-form";

const pageTitle = `Heart Blockage Report Guide: 70%, 80%, 90% Blockages Explained | ${siteConfig.name}`;
const pageDescription = `Holding an Angiography or Echo report? Understand what 70%, 80%, or 90% LAD blockages mean, when a stent is compulsory, and how FFR prevents unnecessary procedures.`;
const pageUrl = `${siteConfig.siteUrl}/second-opinion/report-interpretation`;

export const Route = createFileRoute("/second-opinion/report-interpretation")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "90 percent heart blockage stent necessary, 70 percent blockage treatment medicine, LAD artery blockage widow maker, coronary angiography report explained, FFR heart test delhi ncr, Dr Manish Aggarwal angiography review",
      },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "article" },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: `${siteConfig.siteUrl}/images/doctor-portrait.png` },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: pageTitle },
      { property: "twitter:description", content: pageDescription },
      { property: "twitter:image", content: `${siteConfig.siteUrl}/images/doctor-portrait.png` },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: pageTitle,
          description: pageDescription,
          url: pageUrl,
          reviewedBy: {
            "@type": "Person",
            name: siteConfig.name,
            jobTitle: siteConfig.title,
            url: `${siteConfig.siteUrl}/about`,
          },
          breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
              { "@type": "ListItem", position: 2, name: "Second Opinion", item: `${siteConfig.siteUrl}/second-opinion` },
              { "@type": "ListItem", position: 3, name: "Report Interpretation", item: pageUrl },
            ],
          },
          mainEntity: {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is a stent compulsory for a 70% heart blockage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not always. A 70% blockage is borderline. International cardiology guidelines advise physiological testing using Fractional Flow Reserve (FFR). If FFR is greater than 0.80, blood flow is sufficient and the patient can safely be managed with medical therapy and lifestyle changes without an invasive stent.",
                },
              },
              {
                "@type": "Question",
                name: "Why is an LAD blockage called the 'Widow Maker'?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Left Anterior Descending (LAD) artery supplies over 50% of the heart's left ventricle muscle mass. A sudden 100% occlusion at the ostium or proximal LAD abruptly halts blood flow to the main pumping chamber, which can cause catastrophic cardiac arrest if not treated urgently.",
                },
              },
              {
                "@type": "Question",
                name: "What does an Ejection Fraction (LVEF) of 35% mean?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Normal LVEF is 55% to 70%. An EF of 35% indicates heart failure with reduced ejection fraction, meaning the heart muscle is weakened. Revascularizing blocked arteries and modern guideline-directed medical therapy (GDMT) can often restore EF significantly.",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
  component: ReportInterpretationPage,
});

function ReportInterpretationPage() {
  const [selectedBlockage, setSelectedBlockage] = useState("80-90");
  const [selectedSymptoms, setSelectedSymptoms] = useState("exertion");
  const blockageSelectId = useId();
  const symptomsSelectId = useId();

  const cleanPhone = siteConfig.phoneRaw.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `Hello Dr. Manish Aggarwal's clinical coordinator, I have a cardiac report showing ${selectedBlockage}% blockage with symptoms during ${selectedSymptoms}. I would like Dr. Manish to review my report.`,
  )}`;

  return (
    <div className="bg-background">
      <section className="px-6 pb-20 pt-8 md:px-12 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-[1400px]">
          <PageHeroHeader
            backLink={{ to: "/second-opinion", label: "Back to Second Opinion Desk" }}
            title="Heart Blockage Report Guide: Decoded"
            subtitle={`What 70%, 80%, or 90% Blockages Mean · When Stenting is Truly Compulsory · ${siteConfig.hospital}`}
            description="If you just opened an Angiography, CT Calcium, or 2D Echo report and feel overwhelmed by numbers and medical terminology, this clinical guide explains what your report means and how to prevent unnecessary procedures."
            badges={
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <Stethoscope className="h-3.5 w-3.5" /> Evidence-Based Cardiology
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground">
                  FFR / iFR Physiologic Testing
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600">
                  <Clock className="h-3.5 w-3.5" /> 2-Hour Report Triage
                </span>
              </>
            }
          />

          {/* Interactive Report Urgency Triage Tool */}
          <div className="mt-12 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Instant Report Triage Checker
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                What Does Your Angiography or CT Scan Show?
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground">
                Select your reported blockage percentage and current symptom level to understand recommended clinical steps.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-12">
              <div className="space-y-4 lg:col-span-7">
                <div>
                  <label htmlFor={blockageSelectId} className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    1. Reported Blockage Severity in Major Artery
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: "under-50", label: "<50%", sub: "Mild Plaque" },
                      { id: "50-70", label: "50%–70%", sub: "Borderline" },
                      { id: "80-90", label: "80%–90%", sub: "High Grade" },
                      { id: "95-100", label: "95%–100%", sub: "Critical / CTO" },
                    ].map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setSelectedBlockage(b.id)}
                        className={`rounded-xl border p-3 text-center transition text-xs ${
                          selectedBlockage === b.id
                            ? "border-primary bg-primary/5 text-primary font-bold ring-1 ring-primary"
                            : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                        }`}
                      >
                        <div className="text-sm font-bold text-foreground">{b.label}</div>
                        <div className="text-[10px] text-muted-foreground mt-0.5">{b.sub}</div>
                      </button>
                    ))}
                  </div>
                  <select
                    id={blockageSelectId}
                    value={selectedBlockage}
                    onChange={(e) => setSelectedBlockage(e.target.value)}
                    className="sr-only"
                    aria-label="Reported Blockage Severity in Major Artery"
                  >
                    {[
                      { id: "under-50", label: "<50% Mild Plaque" },
                      { id: "50-70", label: "50%–70% Borderline" },
                      { id: "80-90", label: "80%–90% High Grade" },
                      { id: "95-100", label: "95%–100% Critical / CTO" },
                    ].map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor={symptomsSelectId} className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    2. Patient's Current Symptom Status
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "none", label: "No Symptoms", sub: "Discovered on routine checkup" },
                      { id: "exertion", label: "Angina on Walking", sub: "Chest heaviness on stairs/walking" },
                      { id: "rest", label: "Chest Pain at Rest", sub: "Pain while sitting or sleeping" },
                    ].map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedSymptoms(s.id)}
                        className={`rounded-xl border p-3 text-left transition text-xs ${
                          selectedSymptoms === s.id
                            ? "border-primary bg-primary/5 text-primary font-bold ring-1 ring-primary"
                            : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                        }`}
                      >
                        <div className="font-semibold text-foreground">{s.label}</div>
                        <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{s.sub}</div>
                      </button>
                    ))}
                  </div>
                  <select
                    id={symptomsSelectId}
                    value={selectedSymptoms}
                    onChange={(e) => setSelectedSymptoms(e.target.value)}
                    className="sr-only"
                    aria-label="Patient's Current Symptom Status"
                  >
                    {[
                      { id: "none", label: "No Symptoms - Discovered on routine checkup" },
                      { id: "exertion", label: "Angina on Walking - Chest heaviness on stairs/walking" },
                      { id: "rest", label: "Chest Pain at Rest - Pain while sitting or sleeping" },
                    ].map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Triage Output Box (5 Cols) */}
              <div className="lg:col-span-5 rounded-2xl border border-border bg-muted/40 p-5 space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  Clinical Assessment Recommendation
                </span>

                {selectedSymptoms === "rest" ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                      <AlertTriangle className="h-4 w-4" />
                      <span>URGENT: Emergency ER Triage Required</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Chest pain or burning occurring at rest is an unstable cardiac symptom (Unstable Angina or Non-STEMI). Proceed immediately to the nearest Emergency Cath Lab or call Yashoda Medicity 24/7 ER: <strong>{siteConfig.phoneDisplay}</strong>.
                    </p>
                  </div>
                ) : selectedBlockage === "under-50" ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Stent is NOT Recommended</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Plaques under 50% do not significantly impede resting coronary blood flow. International guidelines strictly recommend high-intensity statin therapy, blood pressure control, and lifestyle modification rather than stent placement.
                    </p>
                  </div>
                ) : selectedBlockage === "50-70" ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                      <Activity className="h-4 w-4" />
                      <span>Physiological FFR Testing Advised</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      A 50% to 70% lesion is borderline. Do not rush into stenting. Dr. Manish performs Fractional Flow Reserve (FFR/iFR) in the Cath Lab. If the pressure ratio is above 0.80, you can safely continue medicines without a stent.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                      <Clock className="h-4 w-4" />
                      <span>High-Grade Stenosis: Stent Evaluation</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      An 80% to 100% blockage poses a significant risk of myocardial infarction. A drug-eluting stent (DES) placed under IVUS imaging guidance restores natural vessel lumen and protects heart muscle.
                    </p>
                  </div>
                )}

                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-xs font-semibold text-white hover:bg-emerald-500 transition shadow-sm"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>WhatsApp Your Report for Dr. Manish's Review</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Coronary Anatomy Deep-Dive: LAD, RCA, LCx */}
          <div className="mt-16 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Coronary Anatomy
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                Which Artery Does Your Report Mention?
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                The location of the blockage matters just as much as the percentage.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {/* LAD */}
              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <span className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-600">
                  Left Anterior Descending (LAD)
                </span>
                <h4 className="font-display text-lg font-medium text-foreground">
                  The "Front Wall" Main Artery
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Supplies over 50% of the left ventricle heart muscle. Blockages in the "proximal" or "ostial" LAD carry the highest clinical priority because they nourish the heart's main pumping chamber.
                </p>
              </div>

              {/* LCx */}
              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-600">
                  Left Circumflex (LCx)
                </span>
                <h4 className="font-display text-lg font-medium text-foreground">
                  The "Side &amp; Back Wall" Branch
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Curves around the back of the heart supplying the lateral wall and obtuse marginal (OM) branches. Often causes atypical back pain, jaw ache, or breathlessness rather than classic chest heaviness.
                </p>
              </div>

              {/* RCA */}
              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-600">
                  Right Coronary Artery (RCA)
                </span>
                <h4 className="font-display text-lg font-medium text-foreground">
                  The "Bottom Wall &amp; Electrical Node" Artery
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Supplies the inferior heart muscle and the sinoatrial (SA) electrical node. Blockages here often trigger severe dizziness, slow pulse (bradycardia), or complete heart blocks requiring temporary pacing.
                </p>
              </div>
            </div>
          </div>

          {/* FFR Section: Avoiding Unnecessary Stents */}
          <div className="mt-16 rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                  <Microscope className="h-3.5 w-3.5" />
                  <span>Physiological Precision Cardiology</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                  Why Dr. Manish Tests With FFR / iFR to Prevent Unnecessary Stenting
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Many patients are terrified that every visual narrowing seen on an X-ray requires a stent. This is medical myth. 
                </p>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  In intermediate 50% to 70% blockages, Dr. Manish introduces a microscopic sensor wire across the blockage to calculate the exact pressure ratio before and after the narrowing. If the <strong>Fractional Flow Reserve (FFR) is &gt;0.80</strong>, the vessel is delivering sufficient blood even during maximum cardiac demand, and you can safely walk away on medical therapy without an implant.
                </p>
              </div>

              <div className="lg:col-span-4 rounded-2xl border border-border bg-card p-6 text-center space-y-3">
                <div className="text-3xl font-display font-bold text-primary">&gt; 0.80</div>
                <div className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Safe Without Stent
                </div>
                <p className="text-[11px] text-muted-foreground">
                  Proven by FAME-2 and ISCHEMIA clinical trials: medical management is equal to stenting when FFR is negative.
                </p>
              </div>
            </div>
          </div>

          {/* Related Diagnostic Decrypter Tools */}
          <div className="mt-16 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Related Diagnostic Decrypters
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                Understand Your Other Cardiac Test Reports
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <Link
                to="/second-opinion/echo-report-decrypter"
                className="group rounded-2xl border border-border bg-card p-6 space-y-3 transition hover:border-primary/50 hover:shadow-md block"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                  <Activity className="h-5 w-5" />
                </div>
                <h4 className="font-display text-base font-bold text-foreground group-hover:text-primary transition">
                  2D Echo Report Decrypter →
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Decode your LVEF pumping %, RWMA wall motion abnormalities, and valve leakage findings in plain English.
                </p>
              </Link>

              <Link
                to="/second-opinion/positive-tmt-test-next-steps"
                className="group rounded-2xl border border-border bg-card p-6 space-y-3 transition hover:border-primary/50 hover:shadow-md block"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <h4 className="font-display text-base font-bold text-foreground group-hover:text-primary transition">
                  Positive TMT Test Guide →
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Understand false positives, calculate your Duke Treadmill Score, and know when you need a CT Angio.
                </p>
              </Link>

              <Link
                to="/conditions/chest-pain-heart-attack-vs-acidity"
                className="group rounded-2xl border border-border bg-card p-6 space-y-3 transition hover:border-primary/50 hover:shadow-md block"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h4 className="font-display text-base font-bold text-foreground group-hover:text-primary transition">
                  Chest Pain Triage Checker →
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Evaluate whether chest discomfort or burning is acid reflux or a heart attack requiring emergency care.
                </p>
              </Link>
            </div>
          </div>

          {/* WhatsApp Direct Report Review Banner */}
          <div className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-navy via-navy to-slate-900 p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                Digital Report Desk
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-medium">
                Unsure About Your Angiography or Echo Numbers?
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Take a clear photo of your angiography or 2D Echo report conclusion page. Dr. Manish Aggarwal's clinical coordinator will triage it with Dr. Manish within 2 hours.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-md"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Report for Free Triage</span>
            </a>
          </div>

        </div>
      </section>

      <AppointmentSection />
    </div>
  );
}
