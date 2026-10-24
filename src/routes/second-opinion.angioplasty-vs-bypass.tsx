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
  UserCheck,
  Disc,
  Stethoscope,
  ChevronRight,
  Compass,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";
import { AppointmentSection } from "@/components/appointment-form";

const pageTitle = `Angioplasty vs Bypass Surgery (CABG): Patient & Family Decision Guide | ${siteConfig.name}`;
const pageDescription = `A step-by-step decision guide for families advised open-heart bypass surgery. Learn what your angiography report means, when stenting avoids surgery, and how to get an expert second opinion.`;
const pageUrl = `${siteConfig.siteUrl}/second-opinion/angioplasty-vs-bypass`;

export const Route = createFileRoute("/second-opinion/angioplasty-vs-bypass")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "angioplasty vs bypass surgery guide, CABG vs stent decision, can bypass surgery be avoided, advised bypass surgery second opinion, SYNTAX score explained simply, diabetic heart blockage treatment, Dr Manish Aggarwal second opinion",
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
            "@type": "Physician",
            name: siteConfig.name,
            jobTitle: siteConfig.title,
            identifier: siteConfig.registration,
          },
          breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
              { "@type": "ListItem", position: 2, name: "Second Opinion", item: `${siteConfig.siteUrl}/second-opinion` },
              { "@type": "ListItem", position: 3, name: "Angioplasty vs Bypass Guide", item: pageUrl },
            ],
          },
          mainEntity: {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "My doctor advised open-heart bypass surgery yesterday. Is this an immediate emergency?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In over 90% of cases, no. Unless a patient is having an active heart attack in an emergency room with cardiogenic shock, multi-vessel blockages develop over months or years. You almost always have 7 to 14 days to collect your angiogram CD, calm down, and obtain an independent second opinion before scheduling surgery.",
                },
              },
              {
                "@type": "Question",
                name: "Can triple vessel disease (3 blockages) be cleared with stents instead of open surgery?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. In modern interventional cardiology, advanced tools like Rotablation (diamond drilling for calcified arteries) and Intravascular Ultrasound (IVUS) allow experienced operators to place drug-eluting stents in multi-vessel disease safely without cutting the chest open.",
                },
              },
              {
                "@type": "Question",
                name: "When is open-heart bypass surgery (CABG) genuinely the safer choice?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bypass surgery is the medically honest choice when a patient has severe diffuse small-vessel disease combined with long-standing diabetes, or an unfavorable Left Main bifurcation that would require 5 or more stents with high re-narrowing risk.",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
  component: AngioplastyVsBypassPage,
});

function AngioplastyVsBypassPage() {
  const cleanPhone = siteConfig.phoneRaw.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hello Dr. Manish Aggarwal, I have been advised bypass surgery (CABG) and would like an expert second opinion on whether angioplasty is possible.",
  )}`;

  return (
    <div className="bg-background">
      <section className="px-6 pb-20 pt-8 md:px-12 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-[1400px]">
          <PageHeroHeader
            backLink={{ to: "/second-opinion", label: "Back to Second Opinion Desk" }}
            title="Angioplasty vs Bypass Surgery (CABG)"
            subtitle={`The Patient & Family Decision Guide · Plain English Breakdown · ${siteConfig.hospital}`}
            description="A step-by-step roadmap for families told that their loved one needs open-heart surgery. Learn how to read the report, compare both paths in simple language, and know your rights before making an irreversible choice."
            badges={
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <Compass className="h-3.5 w-3.5" /> Step-by-Step Decision Roadmap
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground">
                  Plain English (Zero Jargon)
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600">
                  <Clock className="h-3.5 w-3.5" /> 24-Hr CD Second Opinion
                </span>
              </>
            }
          />

          {/* STEP 1: The First 24 Hours Guide (Emergency vs Elective) */}
          <div className="mt-12 rounded-3xl border border-primary/20 bg-primary/5 p-6 md:p-10 space-y-6">
            <div className="max-w-3xl space-y-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase">
                Step 1: First 24 Hours
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                Take a Deep Breath: You Almost Always Have Time to Decide
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                When a hospital doctor says: <em>"There are 3 blockages and we need to schedule open-heart surgery tomorrow,"</em> families freeze in sheer panic. But here is the medical truth every family deserves to hear:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 pt-2">
              <div className="rounded-2xl border border-border bg-card p-5 space-y-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 font-bold text-xs">
                  01
                </div>
                <h3 className="font-semibold text-sm text-foreground">It is Rarely an Emergency Today</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Unless the patient is in the ICU with an ongoing, active heart attack, stable multi-vessel blockages built up over 10–20 years. Waiting 5 to 10 days to get a 2nd opinion will not cause harm.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 space-y-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 font-bold text-xs">
                  02
                </div>
                <h3 className="font-semibold text-sm text-foreground">Demand the Physical CD (DICOM)</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The hospital must legally give you the digital Angiography CD. A typed paper summary is not enough—independent specialists need the actual video frames to check if stents can work.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 space-y-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 font-bold text-xs">
                  03
                </div>
                <h3 className="font-semibold text-sm text-foreground">Get an Independent Heart Team View</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A cardiac surgeon naturally leans toward surgery; an aggressive cardiologist may push stents. Always seek a senior interventionalist who evaluates both paths with complete diagnostic honesty.
                </p>
              </div>
            </div>
          </div>

          {/* STEP 2: Plain-English Translation Box (De-jargonizing the Report) */}
          <div className="mt-16 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm space-y-6">
            <div className="max-w-3xl space-y-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-bold text-muted-foreground uppercase">
                Step 2: Decode the Jargon
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                What the Doctor Wrote vs What It Actually Means
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground">
                Common phrases in your angiogram report translated into simple human terms:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-muted/30 p-5 space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Doctor Wrote:</span>
                <div className="font-semibold text-sm text-foreground">"Triple Vessel Disease (TVD)"</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Plain English:</strong> There is cholesterol narrowing in all 3 main arteries supplying the heart muscle. It does <em>not</em> automatically mean open-heart surgery—many TVD patients are successfully treated with stents.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-muted/30 p-5 space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Doctor Wrote:</span>
                <div className="font-semibold text-sm text-foreground">"Heavy Calcification / Rock-Hard Plaque"</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Plain English:</strong> Calcium has hardened the blockage like limestone. Normal balloons cannot stretch it, but diamond-drilling tools like <strong>Rotablation</strong> and soundwave <strong>Shockwave IVL</strong> can crack it safely in the cath lab without bypass.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-muted/30 p-5 space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Doctor Wrote:</span>
                <div className="font-semibold text-sm text-foreground">"SYNTAX Score (Low, Mid, High)"</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Plain English:</strong> A score measuring how twisted, long, and complex the blockages are. Scores under 22 favor stents; 23 to 32 can be stented with advanced tools; scores above 33 often favor surgical bypass.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-muted/30 p-5 space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Doctor Wrote:</span>
                <div className="font-semibold text-sm text-foreground">"Left Main (LMCA) Disease"</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Plain English:</strong> Blockage at the root trunk where the main artery splits. Stenting Left Main requires high expertise and intravascular ultrasound (IVUS) guidance, but is widely performed today.
                </p>
              </div>
            </div>
          </div>

          {/* STEP 3: The Reality of Both Procedures (What Actually Happens) */}
          <div className="mt-16 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-bold text-muted-foreground uppercase">
                Step 3: Procedure Reality
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                What Actually Happens During Stents vs Bypass?
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground">
                An honest look at anesthesia, incision, hospital stay, and recovery time.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Option A: Angioplasty */}
              <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-6 md:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-700">
                    Option A: Coronary Angioplasty (Stents)
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">Minimally Invasive</span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-medium text-foreground">
                  Cleared via a Pinhole Wrist Needle Puncture
                </h3>
                <ul className="space-y-3 text-xs md:text-sm text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Anesthesia:</strong> Local numbing on the wrist only. The patient is awake, comfortable, and chatting with Dr. Manish throughout.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Chest Incision:</strong> Zero cuts on the chest. No broken bones. Done via a 2mm puncture in the radial wrist artery.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Hospital Stay:</strong> 24 to 48 hours total (including 1 night in cardiac care).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Return to Routine:</strong> Walking within 4 hours; back to light desk work in 3 to 5 days.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Best For:</strong> Elderly patients (&gt;65–70 yrs), those who fear major surgery, COPD/asthma patients, or single/double vessel disease.</span>
                  </li>
                </ul>
              </div>

              {/* Option B: Bypass */}
              <div className="rounded-3xl border border-rose-500/30 bg-rose-500/5 p-6 md:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-bold text-rose-700">
                    Option B: Bypass Surgery (CABG)
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">Major Open Surgery</span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-medium text-foreground">
                  Surgical Rerouting via Chest Opening
                </h3>
                <ul className="space-y-3 text-xs md:text-sm text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                    <span><strong>Anesthesia:</strong> Full general anesthesia with breathing tube intubation on a ventilator and heart-lung bypass machine.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                    <span><strong>Chest Incision:</strong> 6-to-8 inch vertical incision; the sternum breastbone is sawed open and held by steel wires after surgery.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                    <span><strong>Hospital Stay:</strong> 7 to 10 days (including 2 to 4 days in surgical ICU with chest tubes).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                    <span><strong>Return to Routine:</strong> 8 to 12 weeks of restricted activity while the breastbone fuses. No lifting weights or driving for 2 months.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                    <span><strong>Best For:</strong> Younger diabetic patients with diffuse blockages across all 3 vessels where long-term internal mammary artery grafts offer superior 10-year durability.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* STEP 4: The 5-Point Patient Self-Check */}
          <div className="mt-16 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm space-y-6">
            <div className="max-w-3xl space-y-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-bold text-muted-foreground uppercase">
                Step 4: Decision Checklist
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                5 Factors That Determine Stent vs Bypass Suitability
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground">
                Review these five clinical questions to understand which option fits your parent or loved one:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-border bg-background p-5 space-y-2">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Factor 1</span>
                <h4 className="font-semibold text-sm text-foreground">Patient Age &amp; Frailty</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  In patients aged 70 or older, open surgery carries high risks of memory confusion, kidney strain, and chest non-healing. <strong>Angioplasty is strongly favored.</strong>
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-5 space-y-2">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Factor 2</span>
                <h4 className="font-semibold text-sm text-foreground">Diabetes Status</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Diabetics with extensive disease in all 3 vessels often experience better 10-year survival with surgical bypass grafts. However, if surgical risk is too high, stents remain viable.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-5 space-y-2">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Factor 3</span>
                <h4 className="font-semibold text-sm text-foreground">Kidney Function (Creatinine)</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The heart-lung machine in bypass can push borderline kidneys into dialysis. Ultra-low contrast angioplasty with radial access protects kidney health.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-5 space-y-2">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Factor 4</span>
                <h4 className="font-semibold text-sm text-foreground">Calcification Complexity</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Do the blockages have rock-hard calcium? With modern <strong>Rotablation</strong> and <strong>Shockwave IVL</strong>, Dr. Manish can clear calcified blockages that other centers refuse to stent.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-5 space-y-2">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Factor 5</span>
                <h4 className="font-semibold text-sm text-foreground">Heart Pumping Power (LVEF)</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  If the heart's ejection fraction is weak (under 35%), major surgery carries elevated mortality. Stents under hemodynamic support (Impella/IABP) offer a gentler recovery.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 flex flex-col justify-between space-y-3">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Action Step</span>
                <h4 className="font-semibold text-sm text-foreground">Need a Definitive Case Assessment?</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Have Dr. Manish evaluate all 5 factors frame-by-frame on your angiography CD.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground hover:opacity-90 transition"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp CD for Review</span>
                </a>
              </div>
            </div>
          </div>

          {/* STEP 5: 5 Questions to Ask Your Doctor */}
          <div className="mt-16 rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10 space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <FileText className="h-4 w-4" />
              <span>Step 5: Patient Empowerment</span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-medium text-foreground">
              5 Questions to Ask Before Agreeing to Open-Heart Surgery
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Print or save these 5 questions and ask both the surgeon and cardiologist:
            </p>

            <div className="grid gap-3 sm:grid-cols-2 pt-2 text-xs text-muted-foreground leading-relaxed">
              <div className="rounded-xl border border-border bg-card p-4 space-y-1">
                <strong className="text-foreground">1. "Can my blockages be treated with complex angioplasty using Rotablation or IVL?"</strong>
                <p>Find out if they are refusing stents because it is medically impossible, or simply because their hospital lacks specialized plaque-drilling equipment.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 space-y-1">
                <strong className="text-foreground">2. "What is my exact calculated surgical risk score (EuroSCORE / STS score)?"</strong>
                <p>Demand an objective numerical percentage of operative risk rather than vague reassurance.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 space-y-1">
                <strong className="text-foreground">3. "If we do bypass, what is my patient's specific risk of stroke or kidney injury?"</strong>
                <p>Senior patients have elevated stroke risks on heart-lung bypass pumps.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 space-y-1">
                <strong className="text-foreground">4. "How many stents would be needed if we avoid bypass?"</strong>
                <p>If stenting requires 6 or 7 long overlapping stents, bypass surgery may genuinely be the more durable long-term answer.</p>
              </div>
            </div>
          </div>

          {/* STEP 6: The Angiography CD Second Opinion Action Box */}
          <div className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-navy via-navy to-slate-900 p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                Step 6: Get Your CD Evaluated
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-medium">
                Send Your Angiography CD for Dr. Manish's Second Opinion
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Before consenting to breastbone-splitting open heart surgery, upload your DICOM files or WhatsApp your report to Dr. Manish Aggarwal (Director of Interventional Cardiology, Yashoda Medicity). You will receive an honest, unbiased clinical recommendation within 24 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-md"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp CD Report</span>
              </a>
              <Link
                to="/second-opinion"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-xs font-semibold text-white hover:bg-white/20 transition"
              >
                <span>Full Second Opinion Protocol</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <AppointmentSection />
    </div>
  );
}
