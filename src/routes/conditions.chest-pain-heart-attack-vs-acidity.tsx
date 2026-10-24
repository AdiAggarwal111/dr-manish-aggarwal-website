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
  Flame,
  Zap,
  ChevronDown,
  Building2,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";
import { AppointmentSection } from "@/components/appointment-form";
import { ChestPainTriageTool } from "@/components/chest-pain-triage-tool";

const pageTitle = `Chest Pain: Heart Attack vs Acidity | Interactive Triage & Clinical Guide | ${siteConfig.name}`;
const pageDescription = `Can't tell if your chest pain is acidity or a heart attack? Use our evidence-based clinical triage tool to evaluate your symptoms, understand red flags, and know when to seek emergency care.`;
const pageUrl = `${siteConfig.siteUrl}/conditions/chest-pain-heart-attack-vs-acidity`;

export const Route = createFileRoute("/conditions/chest-pain-heart-attack-vs-acidity")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "chest pain acidity or heart attack, gas problem vs heart attack symptoms, chest burning sensations reasons, left side chest pain triage, heart attack pain location, silent heart attack diabetes symptoms, Dr Manish Aggarwal chest pain emergency, cardiologist Yashoda Medicity Indirapuram",
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
              { "@type": "ListItem", position: 2, name: "Conditions", item: `${siteConfig.siteUrl}/conditions` },
              { "@type": "ListItem", position: 3, name: "Chest Pain: Heart Attack vs Acidity", item: pageUrl },
            ],
          },
          mainEntity: {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How can I tell if my chest pain is acidity or a heart attack?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Acidity typically produces a sharp burning sensation behind the breastbone that worsens when lying flat, is often accompanied by sour regurgitation or belching, and improves with antacids within 15 minutes. In contrast, a heart attack causes crushing heaviness or pressure ('an elephant sitting on the chest') that may radiate to the left arm, neck, or jaw, is triggered or worsened by exertion, is accompanied by cold sweating and shortness of breath, and does NOT respond to antacids.",
                },
              },
              {
                "@type": "Question",
                name: "Can a heart attack feel like gas or indigestion?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Many heart attacks—especially in individuals with diabetes, elderly patients, and women—present as epigastric fullness, bloating, nausea, or a burning sensation that closely mimics acidity. In medical terminology, this is called an 'inferior wall myocardial infarction' (IWMI) because the blocked coronary artery supplies the bottom surface of the heart which rests right above the stomach.",
                },
              },
              {
                "@type": "Question",
                name: "How long should I wait after taking an antacid before going to the hospital?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Never wait more than 15 to 20 minutes. If severe chest discomfort, pressure, or burning does not completely disappear within 15 minutes of taking an antacid—or if it is accompanied by cold sweat, breathlessness, dizziness, or arm pain—proceed immediately to the nearest hospital emergency room for an ECG.",
                },
              },
              {
                "@type": "Question",
                name: "What tests are performed at the hospital to rule out a heart attack?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The emergency protocol begins with a 12-lead ECG within 10 minutes of arrival, followed by a quantitative High-Sensitivity Troponin-I blood test to detect damaged heart muscle cells. A bedside 2D Echocardiogram is performed to check heart pumping and regional wall motion, and if ischemia is suspected, a coronary angiography is performed to visualize the arteries directly.",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
  component: ChestPainAcidityRoute,
});

function ChestPainAcidityRoute() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-background">
      <section className="px-6 pb-20 pt-8 md:px-12 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-[1400px]">
          {/* Hero Header */}
          <PageHeroHeader
            backLink={{ to: "/conditions", label: "Back to Heart Conditions" }}
            title="Chest Pain: Heart Attack vs Acidity"
            subtitle={`Clinical Symptom Triage · Is It Gas or Myocardial Ischemia? · ${siteConfig.hospital}`}
            description="Every year in India, over 40% of avoidable cardiac complications occur because patients mistake acute arterial blockages for ordinary gastric reflux. Use our clinical triage checker to evaluate your symptoms immediately."
            badges={
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3.5 py-1.5 text-xs font-semibold text-rose-600">
                  <AlertTriangle className="h-3.5 w-3.5" /> Emergency Triage Protocol
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground">
                  ESC Clinical Guideline Matrix
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600">
                  <Clock className="h-3.5 w-3.5" /> 90-Second Symptom Score
                </span>
              </>
            }
          />

          {/* Main Content Area */}
          <div className="mt-12 space-y-16">
            
            {/* INTERACTIVE TRIAGE TOOL */}
            <section className="scroll-mt-24" id="triage-tool">
              <ChestPainTriageTool />
            </section>

        {/* COMPARISON MATRIX SECTION */}
        <section className="scroll-mt-24 space-y-6" id="comparison-matrix">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Clinical Differentiators
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy mt-1">
              Side-by-Side Comparison: Acidity vs Angina vs Heart Attack
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Understanding how pain quality, location, and triggers differ can save critical heart muscle during the golden hour.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="p-4 font-bold text-slate-900 w-1/4">Feature</th>
                  <th className="p-4 font-bold text-emerald-800 bg-emerald-50/50 w-1/4">
                    Gastroesophageal Reflux (Acidity)
                  </th>
                  <th className="p-4 font-bold text-amber-800 bg-amber-50/50 w-1/4">
                    Stable Angina (Partial Blockage)
                  </th>
                  <th className="p-4 font-bold text-rose-800 bg-rose-50/50 w-1/4">
                    Acute Heart Attack (STEMI / NSTEMI)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/30">Pain Character</td>
                  <td className="p-4 text-slate-700">Sharp burning, hot fire in food pipe or behind sternum</td>
                  <td className="p-4 text-slate-700">Dull constricting ache, tight band, heaviness</td>
                  <td className="p-4 text-slate-700 font-semibold text-rose-900">Crushing pressure, &ldquo;elephant on chest&rdquo;, agonizing vise grip</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/30">Primary Location</td>
                  <td className="p-4 text-slate-700">Upper abdomen, throat, or mouth with sour liquid</td>
                  <td className="p-4 text-slate-700">Central retrosternal, diffuse (covers palm of hand)</td>
                  <td className="p-4 text-slate-700">Diffuse central chest, radiates to left/both arms, jaw, back</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/30">Triggers</td>
                  <td className="p-4 text-slate-700">Heavy spicy meals, fried snacks, lying down after eating</td>
                  <td className="p-4 text-slate-700">Physical effort (stairs, walking), cold weather, stress</td>
                  <td className="p-4 text-slate-700 font-semibold text-rose-900">Can occur at rest, early morning, or after exertion</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/30">Duration</td>
                  <td className="p-4 text-slate-700">Minutes to hours; continuous until acid clears</td>
                  <td className="p-4 text-slate-700">Usually 2 to 10 minutes; subsides with rest</td>
                  <td className="p-4 text-slate-700 font-semibold text-rose-900">&gt; 20 minutes; continuous and unrelenting</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/30">Relief By</td>
                  <td className="p-4 text-slate-700">Antacids (Digene/Gelusil), cold milk, belching, water</td>
                  <td className="p-4 text-slate-700">Stopping activity, resting quietly, sublingual nitrate</td>
                  <td className="p-4 text-slate-700 font-semibold text-rose-900">Does NOT respond to antacids or simple rest</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/30">Critical Red Flags</td>
                  <td className="p-4 text-slate-700">Sour throat, acidic taste, bloating</td>
                  <td className="p-4 text-slate-700">Mild breathlessness during exertion</td>
                  <td className="p-4 text-slate-700 font-semibold text-rose-900">Cold drenching sweat, extreme dyspnea, vomiting, syncope</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CLINICAL DEEP DIVE: THE DANGEROUS GAS MYTH */}
        <section className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-800">
              <AlertTriangle className="h-3.5 w-3.5" />
              Critical Cardiology Fact
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy">
              Why the &ldquo;Gas Myth&rdquo; is India&apos;s Leading Cardiac Killer
            </h2>
            <div className="prose prose-slate text-sm sm:text-base leading-relaxed text-slate-600 space-y-3">
              <p>
                In North India, cultural conditioning leads nearly 50% of patients experiencing an acute coronary occlusion to believe they have <em>&ldquo;gas chadh gayi hai&rdquo;</em> (gas trapped in the chest). Family members often spend 3 to 4 precious hours preparing herbal concoctions, antacid tablets, or waiting for morning before calling a doctor.
              </p>
              <p>
                <strong>The Anatomy Behind the Confusion:</strong> The heart and the esophagus share the same embryonic nerve pathways (vagal and sympathetic networks via T1–T4 thoracic roots). When the bottom surface of the heart (inferior wall) is deprived of oxygen due to a blocked Right Coronary Artery (RCA), the brain frequently perceives the pain as originating in the stomach or food pipe.
              </p>
              <p className="font-semibold text-navy">
                Every 30-minute delay from symptom onset to artery reopening increases the 1-year relative mortality rate by 7.5%.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-5">
            <h3 className="text-lg font-bold text-navy flex items-center gap-2">
              <Zap className="h-5 w-5 text-amber-500" />
              <span>The Ischemic Heart Muscle Timeline</span>
            </h3>
            
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 font-bold">
                  0m
                </div>
                <div>
                  <div className="font-bold text-slate-900">0 – 20 Minutes: Cellular Ischemia</div>
                  <div className="text-slate-600">Artery occludes. Heart muscle runs out of oxygen but remains viable. Immediate treatment prevents permanent necrosis.</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-800 font-bold">
                  1h
                </div>
                <div>
                  <div className="font-bold text-slate-900">The Golden Hour (Under 60 Mins)</div>
                  <div className="text-slate-600">Primary Angioplasty (PCI) within 60 minutes salvages up to 90% of the threatened myocardium, preserving full pumping power (LVEF).</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-800 font-bold">
                  4h+
                </div>
                <div>
                  <div className="font-bold text-slate-900">4 – 6+ Hours: Transmural Scarring</div>
                  <div className="text-slate-600">Heart muscle cells permanently die and turn into non-contractile fibrotic scar tissue, leading to chronic heart failure (reduced EF) or fatal ventricular arrhythmias.</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-4 text-xs text-rose-950 flex items-start gap-2.5">
              <ShieldCheck className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
              <span>
                <strong>Golden Rule:</strong> In an adult over 35 with risk factors, any central chest pain or severe epigastric discomfort must be treated as a <em>heart attack until proven otherwise by an ECG</em>.
              </span>
            </div>
          </div>
        </section>

        {/* DIABETIC & FEMALE ATYPICAL PARADOX */}
        <section className="rounded-2xl bg-gradient-to-br from-navy via-slate-900 to-navy text-white p-8 md:p-12 space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
              Specialized Diagnostic Advisory
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display mt-1">
              Silent Heart Attacks in Diabetics &amp; Women
            </h2>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Not every heart attack comes with crushing pain. Certain patient populations have altered pain perception pathways that make reliance on &ldquo;classic pain&rdquo; dangerous.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-3">
              <h3 className="text-lg font-bold text-amber-300 flex items-center gap-2">
                <Stethoscope className="h-5 w-5" />
                <span>Diabetic Cardiac Autonomic Neuropathy (CAN)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Prolonged high blood sugar damages the sensory autonomic nerves that transmit ischemic pain signals from the heart to the spinal cord. As a result, up to <strong>30% of diabetic patients feel zero chest pain</strong> during a major heart attack.
              </p>
              <div className="rounded-lg bg-black/20 p-3 text-xs text-amber-200">
                <strong>Watch for:</strong> Sudden unexplained extreme fatigue, nausea, cold sweats, or slight breathlessness on minimal exertion.
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-3">
              <h3 className="text-lg font-bold text-rose-300 flex items-center gap-2">
                <HeartPulse className="h-5 w-5" />
                <span>Atypical Presentations in Women</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Women are significantly more likely than men to present with microvascular disease rather than single large vessel occlusions. They often experience symptoms that seem completely unrelated to the heart.
              </p>
              <div className="rounded-lg bg-black/20 p-3 text-xs text-rose-200">
                <strong>Watch for:</strong> Aching in both arms, deep soreness between the shoulder blades, sudden lightheadedness, or feeling like you have a heavy flu.
              </div>
            </div>
          </div>
        </section>

        {/* 24/7 EMERGENCY CATH LAB CAPABILITIES */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Immediate Emergency Response
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy">
                Yashoda Medicity 24/7 Emergency Cath Lab Protocol
              </h2>
            </div>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-rose-700 transition"
            >
              <PhoneCall className="h-4 w-4 animate-pulse" />
              <span>Call Emergency Hotline: {siteConfig.phoneDisplay}</span>
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-5 space-y-2">
              <Clock className="h-6 w-6 text-primary" />
              <div className="font-bold text-slate-900 text-sm">Door-to-Balloon &lt;50 Mins</div>
              <p className="text-xs text-slate-600">
                Well below the international benchmark of 90 minutes. Artery reopened with immediate radial angioplasty.
              </p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-5 space-y-2">
              <Award className="h-6 w-6 text-blue-600" />
              <div className="font-bold text-slate-900 text-sm">12,500+ Interventions</div>
              <p className="text-xs text-slate-600">
                Headed personally by Dr. Manish Aggarwal, Director of Interventional Cardiology &amp; Structural Heart.
              </p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-5 space-y-2">
              <Activity className="h-6 w-6 text-emerald-600" />
              <div className="font-bold text-slate-900 text-sm">Same-Day Radial Access</div>
              <p className="text-xs text-slate-600">
                Pioneering 98%+ wrist-based catheter access with zero groin immobilization and instant post-procedure mobility.
              </p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-5 space-y-2">
              <ShieldCheck className="h-6 w-6 text-indigo-600" />
              <div className="font-bold text-slate-900 text-sm">60-Min Cashless TPA</div>
              <p className="text-xs text-slate-600">
                Direct cashless pre-auth with Star Health, HDFC Ergo, Care, ICICI Lombard, CGHS &amp; ECHS emergency desks.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Patient Clarifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy mt-1">
              Frequently Asked Questions on Chest Pain
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {[
              {
                q: "How can I tell if my chest pain is acidity or a heart attack?",
                a: "Acidity typically produces a sharp burning sensation behind the breastbone that worsens when lying flat, is often accompanied by sour regurgitation or belching, and improves with antacids within 15 minutes. In contrast, a heart attack causes crushing heaviness or pressure ('an elephant sitting on the chest') that may radiate to the left arm, neck, or jaw, is triggered or worsened by exertion, is accompanied by cold sweating and shortness of breath, and does NOT respond to antacids.",
              },
              {
                q: "Can a heart attack feel like gas or indigestion?",
                a: "Yes. Many heart attacks—especially in individuals with diabetes, elderly patients, and women—present as epigastric fullness, bloating, nausea, or a burning sensation that closely mimics acidity. In medical terminology, this is called an 'inferior wall myocardial infarction' (IWMI) because the blocked coronary artery supplies the bottom surface of the heart which rests right above the stomach.",
              },
              {
                q: "How long should I wait after taking an antacid before going to the hospital?",
                a: "Never wait more than 15 to 20 minutes. If severe chest discomfort, pressure, or burning does not completely disappear within 15 minutes of taking an antacid—or if it is accompanied by cold sweat, breathlessness, dizziness, or arm pain—proceed immediately to the nearest hospital emergency room for an ECG.",
              },
              {
                q: "What emergency tests are performed at the hospital to rule out a heart attack?",
                a: "The emergency protocol begins with a 12-lead ECG within 10 minutes of arrival, followed by a quantitative High-Sensitivity Troponin-I blood test to detect damaged heart muscle cells. A bedside 2D Echocardiogram is performed to check heart pumping and regional wall motion, and if ischemia is suspected, a coronary angiography is performed to visualize the arteries directly.",
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

      </div>
    </div>
  </section>

  {/* APPOINTMENT FORM SECTION */}
  <AppointmentSection />
</div>
);
}
