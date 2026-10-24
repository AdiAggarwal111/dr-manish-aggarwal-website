import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  PhoneCall,
  Clock,
  HeartPulse,
  Activity,
  Award,
  AlertTriangle,
  FileText,
  Stethoscope,
  ChevronDown,
  Calculator,
  Info,
  Check,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";
import { AppointmentSection } from "@/components/appointment-form";

const pageTitle = `Positive TMT Test: What It Means & Next Steps | ${siteConfig.name}`;
const pageDescription = `Received a positive Treadmill Test (TMT / Stress ECG)? Don't panic. Learn about false positives in women, calculate your Duke Treadmill Score, and know when you need a CT Angio vs Radial Angiography.`;
const pageUrl = `${siteConfig.siteUrl}/second-opinion/positive-tmt-test-next-steps`;

export const Route = createFileRoute("/second-opinion/positive-tmt-test-next-steps")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "positive TMT test next steps, stress test positive for inducible ischemia meaning, false positive TMT in women, Duke treadmill score calculator, TMT positive is angiography compulsory, positive stress test stent needed, Dr Manish Aggarwal TMT review Yashoda Medicity",
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
              { "@type": "ListItem", position: 3, name: "Positive TMT Test Next Steps", item: pageUrl },
            ],
          },
          mainEntity: {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Does a positive TMT test mean I have a 100% heart blockage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. A Treadmill Test (TMT) detects exercise-induced electrical changes (ST-segment depression), suggesting that blood supply to the heart muscle may be restricted during peak exertion. It does not measure the exact percentage of blockage or prove a 100% occlusion. Many patients with positive TMT tests have moderate 50%–70% blockages, and some have completely clear arteries (false positives).",
                },
              },
              {
                "@type": "Question",
                name: "Can a TMT test be a false positive?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, false positives are surprisingly common. In women, false-positive TMT rates range between 30% and 40% due to microvascular reactivity and estrogen-related repolarization changes. Resting ECG variations (such as baseline ST-T changes, left ventricular hypertrophy, or MVP) also frequently cause false-positive results in individuals with completely normal coronary arteries.",
                },
              },
              {
                "@type": "Question",
                name: "Is Angiography compulsory after a positive TMT?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not always immediately. Cardiologists first calculate your clinical risk using the Duke Treadmill Score (DTS) and assess your symptoms. If you achieved a high workload (Stage 4 or 5) without chest pain, a non-invasive CT Coronary Angiogram or stress echocardiography may be performed first. An invasive catheter angiography is generally reserved for patients who developed ST changes early (Stage 1 or 2), had angina during the test, or have high-risk clinical features.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between a CT Angiogram and a regular Catheter Angiogram?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A CT Coronary Angiogram is a non-invasive, 15-minute CT scan that takes 3D pictures of the coronary arteries without any arterial puncture or hospital admission; it is excellent for ruling out blockages in low-to-intermediate risk patients. A conventional Catheter Angiogram involves inserting a thin micro-catheter via the wrist (radial artery) into the heart arteries; it remains the gold standard because if a critical blockage is found, an angioplasty and stent can be performed in the same sitting.",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
  component: PositiveTmtNextStepsRoute,
});

function PositiveTmtNextStepsRoute() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // DTS Calculator State
  const [exerciseTime, setExerciseTime] = useState<number>(8); // in minutes
  const [stDepression, setStDepression] = useState<number>(1.5); // in mm
  const [anginaIndex, setAnginaIndex] = useState<number>(0); // 0 = none, 1 = non-limiting, 2 = stopped test

  // DTS = Time - (5 * ST) - (4 * Angina)
  const dts = Number((exerciseTime - 5 * stDepression - 4 * anginaIndex).toFixed(1));

  let dtsRisk: { label: string; color: string; desc: string; recommendation: string };
  if (dts >= 5) {
    dtsRisk = {
      label: "Low Risk (Duke Score ≥ +5)",
      color: "border-emerald-300 bg-emerald-50 text-emerald-950",
      desc: "5-year cardiac survival rate > 99%. Low risk of major adverse cardiac events.",
      recommendation:
        "Invasive catheter angiography can usually be avoided. Guideline-directed medical management, lifestyle optimization, or non-invasive CT Angio is typically recommended.",
    };
  } else if (dts >= -10) {
    dtsRisk = {
      label: "Moderate Risk (Duke Score -10 to +4)",
      color: "border-amber-300 bg-amber-50 text-amber-950",
      desc: "Annual cardiac event risk approximately 2% – 3%. Intermediate probability of significant coronary artery disease.",
      recommendation:
        "Further anatomical clarification required. A Non-Invasive CT Coronary Angiogram or Stress Echo is advised. If symptoms are present, a daycare radial angiogram provides definitive clarity.",
    };
  } else {
    dtsRisk = {
      label: "High Risk (Duke Score < -10)",
      color: "border-rose-300 bg-rose-50 text-rose-950",
      desc: "Annual cardiac mortality risk > 5%. High clinical suspicion of severe multi-vessel disease or proximal LAD occlusion.",
      recommendation:
        "Formal Conventional Coronary Angiography (Daycare Radial) is strongly recommended without delay to visualize the arterial anatomy and evaluate for revascularization.",
    };
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <PageHeroHeader
        badge="Clinical Guidance & Second Opinion"
        title="Positive TMT Test: What It Means & Next Steps"
        description="Holding a Treadmill Stress Test report showing 'Positive for Inducible Ischemia'? Do not panic. Discover the truth about false positives, calculate your Duke Treadmill Score, and understand when you truly need an Angiogram."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Second Opinion", href: "/second-opinion" },
          { label: "Positive TMT Next Steps" },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
        
        {/* INTERACTIVE DUKE TREADMILL SCORE (DTS) CALCULATOR */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden text-slate-800">
          <div className="bg-gradient-to-r from-navy via-slate-900 to-navy p-6 md:p-8 text-white">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <Calculator className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                    Validated Clinical Risk Model
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold font-display text-white">
                    Interactive Duke Treadmill Score (DTS) Calculator
                  </h2>
                </div>
              </div>
              <div className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs text-slate-200 border border-white/10">
                International ESC / ACC Standard
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-300 max-w-3xl leading-relaxed">
              Cardiologists do not evaluate a TMT as a simple &ldquo;pass or fail&rdquo;. The Duke Treadmill Score balances your total exercise duration against the extent of ECG ST-depression and symptoms to determine your true prognosis.
            </p>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            <div className="grid gap-6 md:grid-cols-3">
              
              {/* Variable 1: Exercise Duration */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase text-primary">Parameter 1</span>
                  <span className="text-lg font-bold text-navy bg-white px-2.5 py-0.5 rounded border border-slate-200">
                    {exerciseTime} Mins
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">Total Exercise Duration (Bruce Protocol)</h3>
                <input
                  type="range"
                  min="2"
                  max="15"
                  step="0.5"
                  value={exerciseTime}
                  onChange={(e) => setExerciseTime(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[11px] text-slate-600">
                  <span>2 Mins (Stage 1)</span>
                  <span>7 Mins (Stage 3)</span>
                  <span>15 Mins (Stage 5)</span>
                </div>
              </div>

              {/* Variable 2: ST Depression (mm) */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase text-rose-600">Parameter 2</span>
                  <span className="text-lg font-bold text-navy bg-white px-2.5 py-0.5 rounded border border-slate-200">
                    {stDepression} mm
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">Max ST-Segment Depression</h3>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="0.5"
                  value={stDepression}
                  onChange={(e) => setStDepression(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
                />
                <div className="flex justify-between text-[11px] text-slate-600">
                  <span>0 mm (Normal)</span>
                  <span>1.5 mm (Moderate)</span>
                  <span>4.0 mm (Severe)</span>
                </div>
              </div>

              {/* Variable 3: Angina Index */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
                <span className="text-xs font-bold uppercase text-slate-600">Parameter 3</span>
                <h3 className="text-sm font-bold text-slate-900">Chest Discomfort During Test</h3>
                <div className="space-y-1.5 text-xs">
                  {[
                    { val: 0, label: "No chest discomfort (Index = 0)" },
                    { val: 1, label: "Mild discomfort, completed test (Index = 1)" },
                    { val: 2, label: "Discomfort caused test termination (Index = 2)" },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.val}
                      onClick={() => setAnginaIndex(item.val)}
                      className={`w-full p-2 rounded-lg border text-left font-medium transition ${
                        anginaIndex === item.val
                          ? "border-primary bg-primary/10 text-slate-900 font-semibold"
                          : "border-slate-200 bg-white hover:bg-slate-100 text-slate-700"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* DTS Result Display */}
            <div className={`rounded-xl border p-6 space-y-4 ${dtsRisk.color}`}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700">Calculated Duke Score</div>
                  <div className="text-2xl sm:text-3xl font-bold font-display text-slate-950 mt-0.5">
                    {dts >= 0 ? `+${dts}` : dts} — {dtsRisk.label}
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-semibold rounded-lg bg-white/80 px-3.5 py-1.5 border border-slate-300">
                  {dtsRisk.desc}
                </div>
              </div>

              <div className="rounded-lg bg-white/90 p-4 border border-slate-200 text-xs sm:text-sm space-y-1.5 text-slate-800">
                <div className="font-bold text-slate-900">Clinical Recommendation:</div>
                <p className="leading-relaxed">{dtsRisk.recommendation}</p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/919348131276?text=${encodeURIComponent(
                    `Hello Dr. Manish Aggarwal, I have a Positive TMT report. My Duke Treadmill Score is ${dts} (Exercise time: ${exerciseTime} min, ST depression: ${stDepression} mm). I would like a second opinion.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition"
                >
                  <Activity className="h-4 w-4" />
                  <span>Send TMT Graph to Dr. Manish for Second Opinion</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5 VITAL CHECKPOINTS BEFORE RUSHING INTO ANGIOGRAPHY */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Clinical Assessment Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy mt-1">
              5 Critical Questions Before Deciding on Angiography
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              A positive TMT does not automatically mean a catheter or a stent. Dr. Manish Aggarwal uses these 5 clinical benchmarks to prevent unnecessary procedures.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-bold">
                1
              </div>
              <h3 className="text-base font-bold text-navy">What Stage Did Changes Occur?</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If ST depression appeared in <strong>Stage 1 or 2 (under 6 minutes)</strong>, it suggests high-grade multi-vessel or proximal LAD blockage. If you completed 9 to 12 minutes (Stage 4 or 5) before slight changes appeared, the functional reserve of your heart is excellent.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 font-bold">
                2
              </div>
              <h3 className="text-base font-bold text-navy">Did You Experience Chest Symptoms?</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A test that is positive on ECG traces alone without any chest heaviness, choking, or left arm ache carries a significantly lower short-term event risk than a test accompanied by classic angina pain.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 font-bold">
                3
              </div>
              <h3 className="text-base font-bold text-navy">Are You a Female Patient? (False Positives)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Up to <strong>35% of positive TMTs in premenopausal and peri-menopausal women are false positives</strong> due to microvascular vasomotion and estrogen repolarization differences. Never rush a female patient into an invasive angiogram based on TMT alone without a CT scan.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 font-bold">
                4
              </div>
              <h3 className="text-base font-bold text-navy">How Did Blood Pressure Behave?</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Normally, systolic BP rises progressively with treadmill incline (e.g., from 120 to 170 mmHg). If systolic BP dropped or flatlined during exercise, it is a high-risk indicator of extensive ischemic myocardial dysfunction.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 font-bold">
                5
              </div>
              <h3 className="text-base font-bold text-navy">Did Changes Clear Rapidly in Recovery?</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ST-segment depressions that revert to normal within 1 to 2 minutes of resting indicate mild transient ischemia. Depressions that persist for 5 to 8 minutes into recovery indicate more substantial myocardial oxygen debt.
              </p>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Director Consultation</span>
                <h3 className="text-base font-bold text-navy mt-1">Get Your TMT Graph Evaluated</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  Avoid guesswork. Dr. Manish Aggarwal personally reviews your speed, METs, lead-by-lead traces, and recovery slope to formulate your exact care pathway.
                </p>
              </div>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition"
              >
                <span>Call OPD Desk: {siteConfig.phoneDisplay} →</span>
              </a>
            </div>

          </div>
        </section>

        {/* CT ANGIOGRAM VS CONVENTIONAL ANGIOGRAM COMPARISON */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Next-Step Diagnostic Pathways
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy mt-1">
              CT Coronary Angiogram vs Catheter Angiography
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Which test should you undergo after a positive TMT? Here is the clinical guideline:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            
            {/* CT Angiogram */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs">
                  CT
                </span>
                <h3 className="text-lg font-bold text-navy">Non-Invasive CT Coronary Angiogram</h3>
              </div>
              
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Best for:</strong> Low-to-moderate Duke score, asymptomatic corporate health checkup positives, and female patients.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Procedure:</strong> 15-minute CT scan, no hospital stay, contrast injected via simple IV in arm.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Power:</strong> 99% Negative Predictive Value—if CT is clear, you are 100% safe from heart attacks for years.</span>
                </li>
              </ul>
            </div>

            {/* Catheter Angiogram */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold text-xs">
                  PCI
                </span>
                <h3 className="text-lg font-bold text-navy">Daycare Radial Catheter Angiography</h3>
              </div>
              
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Best for:</strong> High-risk Duke score (&lt; -10), early Stage 1/2 changes, chest pain during exercise, or diabetics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Procedure:</strong> Performed via wrist (radial artery) in 15–20 minutes. Discharge in 3 hours. Zero groin immobilization.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Advantage:</strong> Both diagnostic and therapeutic. If a critical 90% blockage is seen, angioplasty can be completed immediately.</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-2 text-center">
            <Link
              to="/procedures/daycare-radial-angiography"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-primary-dark transition"
            >
              <span>Explore Dr. Manish&apos;s Same-Day Radial Angiography Protocol at Yashoda Medicity</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Patient Clarifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy mt-1">
              Frequently Asked Questions on Positive TMT
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {[
              {
                q: "Does a positive TMT test mean I have a 100% heart blockage?",
                a: "No. A Treadmill Test (TMT) detects exercise-induced electrical changes (ST-segment depression), suggesting that blood supply to the heart muscle may be restricted during peak exertion. It does not measure the exact percentage of blockage or prove a 100% occlusion. Many patients with positive TMT tests have moderate 50%–70% blockages, and some have completely clear arteries (false positives).",
              },
              {
                q: "Can a TMT test be a false positive?",
                a: "Yes, false positives are surprisingly common. In women, false-positive TMT rates range between 30% and 40% due to microvascular reactivity and estrogen-related repolarization changes. Resting ECG variations (such as baseline ST-T changes, left ventricular hypertrophy, or MVP) also frequently cause false-positive results in individuals with completely normal coronary arteries.",
              },
              {
                q: "Is Angiography compulsory after a positive TMT?",
                a: "Not always immediately. Cardiologists first calculate your clinical risk using the Duke Treadmill Score (DTS) and assess your symptoms. If you achieved a high workload (Stage 4 or 5) without chest pain, a non-invasive CT Coronary Angiogram or stress echocardiography may be performed first. An invasive catheter angiography is generally reserved for patients who developed ST changes early (Stage 1 or 2), had angina during the test, or have high-risk clinical features.",
              },
              {
                q: "What is the difference between a CT Angiogram and a regular Catheter Angiogram?",
                a: "A CT Coronary Angiogram is a non-invasive, 15-minute CT scan that takes 3D pictures of the coronary arteries without any arterial puncture or hospital admission; it is excellent for ruling out blockages in low-to-intermediate risk patients. A conventional Catheter Angiogram involves inserting a thin micro-catheter via the wrist (radial artery) into the heart arteries; it remains the gold standard because if a critical blockage is found, an angioplasty and stent can be performed in the same sitting.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-slate-900 hover:bg-slate-50 transition text-sm sm:text-base"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${
                      openFaq === idx ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* APPOINTMENT FORM SECTION */}
        <AppointmentSection />

      </div>
    </div>
  );
}
