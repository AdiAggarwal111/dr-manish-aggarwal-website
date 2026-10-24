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
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";
import { AppointmentSection } from "@/components/appointment-form";
import { EchoReportDecrypter } from "@/components/echo-report-decrypter";

const pageTitle = `2D Echo Report Normal Values Decrypter | LVEF, RWMA, Valves Explained | ${siteConfig.name}`;
const pageDescription = `Holding a 2D Echo or Color Doppler report? Decode your LVEF ejection fraction %, RWMA wall motion abnormalities, valve stenosis, and PASP pressure in plain English.`;
const pageUrl = `${siteConfig.siteUrl}/second-opinion/echo-report-decrypter`;

export const Route = createFileRoute("/second-opinion/echo-report-decrypter")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "2D echo normal values report, LVEF 40 percent meaning, RWMA anterior wall hypokinesia, grade 1 diastolic dysfunction meaning, aortic valve stenosis echo normal range, PASP pulmonary pressure normal echo, Dr Manish Aggarwal echo review, 2D echo second opinion Delhi NCR",
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
              { "@type": "ListItem", position: 3, name: "2D Echo Report Decrypter", item: pageUrl },
            ],
          },
          mainEntity: {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Does an LVEF of 60% mean I have a 40% heart blockage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No! This is the single most common misunderstanding among cardiac patients. LVEF (Left Ventricular Ejection Fraction) measures pumping percentage, NOT blockage. A healthy human heart naturally pumps out roughly 55% to 70% of the blood inside it with every beat (no heart pumps 100%). A 60% LVEF is completely normal and healthy. Blockages inside arteries are measured separately via Coronary Angiography.",
                },
              },
              {
                "@type": "Question",
                name: "What does RWMA (Regional Wall Motion Abnormality) mean on an Echo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The left ventricle consists of different muscular segments (anterior, inferior, lateral, septal). Normally, all walls contract inwards together with equal strength. If one wall moves weakly (hypokinesia) or does not move at all (akinesia), it is termed an RWMA. This occurs because the specific coronary artery delivering oxygenated blood to that segment is critically narrowed or blocked.",
                },
              },
              {
                "@type": "Question",
                name: "Is Grade 1 Diastolic Dysfunction dangerous?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In the vast majority of cases, no. Grade 1 diastolic dysfunction represents 'impaired relaxation,' which is a normal physiological age-related change seen in over 70% of adults aged 50 and above. It reflects slight stiffness of the heart muscle, often associated with mild long-term blood pressure or aging. It does not cause sudden heart attacks.",
                },
              },
              {
                "@type": "Question",
                name: "What is normal PASP on a 2D Echo report?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Normal Pulmonary Artery Systolic Pressure (PASP) is typically under 30 to 35 mmHg. A PASP between 36 and 45 mmHg indicates mild pulmonary hypertension, while values above 50 mmHg indicate significant pulmonary hypertension that requires evaluation for valve disease, left heart dysfunction, or lung disorders.",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
  component: EchoReportDecrypterRoute,
});

function EchoReportDecrypterRoute() {
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
            backLink={{ to: "/second-opinion", label: "Back to Specialized Hub & Tools" }}
            title="2D Echo Report Normal Values Decrypter"
            subtitle={`Demystifying LVEF Pumping %, Wall Motion (RWMA) & Valves · ${siteConfig.hospital}`}
            description="Decode ultrasound heart measurements in seconds. Demystify LVEF pumping percentage, RWMA regional wall motion abnormalities, valve gradients, and chamber dimensions without medical jargon."
            badges={
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold text-blue-600">
                  <Activity className="h-3.5 w-3.5" /> Diagnostic Report Decrypter
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground">
                  ASE &amp; EACVI Clinical Standards
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Instant Parameter Analysis
                </span>
              </>
            }
          />

          <div className="mt-12 space-y-16">
            
            {/* INTERACTIVE TOOL */}
            <section className="scroll-mt-24" id="echo-decrypter-tool">
              <EchoReportDecrypter />
            </section>

        {/* CLINICAL NORMAL RANGE REFERENCE TABLE */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Standard Echocardiographic Reference Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy mt-1">
              Standard 2D Echo Normal Ranges (Adult Clinical Standards)
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Reference intervals aligned with the European Association of Cardiovascular Imaging (EACVI) and American Society of Echocardiography (ASE).
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="p-4 font-bold text-slate-900">Echo Parameter</th>
                  <th className="p-4 font-bold text-slate-900">What It Measures</th>
                  <th className="p-4 font-bold text-emerald-800 bg-emerald-50/50">Normal Range</th>
                  <th className="p-4 font-bold text-amber-800 bg-amber-50/50">Borderline / Mild</th>
                  <th className="p-4 font-bold text-rose-800 bg-rose-50/50">Abnormal / Critical</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/30">LVEF (Ejection Fraction)</td>
                  <td className="p-4 text-slate-600">% of blood pumped out per contraction</td>
                  <td className="p-4 text-emerald-900 font-semibold bg-emerald-50/20">55% – 70%</td>
                  <td className="p-4 text-amber-900 bg-amber-50/20">45% – 54%</td>
                  <td className="p-4 text-rose-900 font-semibold bg-rose-50/20">&lt; 35% (Heart Failure Risk)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/30">LVIDd (LV Internal Diastole)</td>
                  <td className="p-4 text-slate-600">Pumping chamber diameter when relaxed</td>
                  <td className="p-4 text-emerald-900 font-semibold bg-emerald-50/20">3.5 – 5.3 cm</td>
                  <td className="p-4 text-amber-900 bg-amber-50/20">5.4 – 5.8 cm</td>
                  <td className="p-4 text-rose-900 font-semibold bg-rose-50/20">&gt; 5.9 cm (Chamber Dilation)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/30">IVSd (Interventricular Septum)</td>
                  <td className="p-4 text-slate-600">Thickness of wall between heart chambers</td>
                  <td className="p-4 text-emerald-900 font-semibold bg-emerald-50/20">0.6 – 1.0 cm</td>
                  <td className="p-4 text-amber-900 bg-amber-50/20">1.1 – 1.3 cm (Mild LVH)</td>
                  <td className="p-4 text-rose-900 font-semibold bg-rose-50/20">&gt; 1.4 cm (Severe Hypertrophy)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/30">RWMA (Wall Motion)</td>
                  <td className="p-4 text-slate-600">Symmetry of chamber contraction</td>
                  <td className="p-4 text-emerald-900 font-semibold bg-emerald-50/20">None (Global normokinesia)</td>
                  <td className="p-4 text-amber-900 bg-amber-50/20">Borderline hypokinesia</td>
                  <td className="p-4 text-rose-900 font-semibold bg-rose-50/20">Akinesia / Aneurysm (Blockage)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/30">PASP (Pulmonary Pressure)</td>
                  <td className="p-4 text-slate-600">Systolic pressure inside lung arteries</td>
                  <td className="p-4 text-emerald-900 font-semibold bg-emerald-50/20">18 – 30 mmHg</td>
                  <td className="p-4 text-amber-900 bg-amber-50/20">35 – 45 mmHg (Mild PAH)</td>
                  <td className="p-4 text-rose-900 font-semibold bg-rose-50/20">&gt; 50 mmHg (Severe PAH)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/30">Aortic Valve Area (AVA)</td>
                  <td className="p-4 text-slate-600">Opening aperture of main outflow valve</td>
                  <td className="p-4 text-emerald-900 font-semibold bg-emerald-50/20">3.0 – 4.0 cm²</td>
                  <td className="p-4 text-amber-900 bg-amber-50/20">1.0 – 1.5 cm² (Moderate AS)</td>
                  <td className="p-4 text-rose-900 font-semibold bg-rose-50/20">&lt; 1.0 cm² (Severe AS → TAVI)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CLINICAL DEEP DIVE: LVEF MYTH VS REALITY */}
        <section className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
              <HeartPulse className="h-3.5 w-3.5" />
              Cardiology Clarification
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy">
              The #1 Myth: &ldquo;My EF is 60%, does that mean 40% is blocked?&rdquo;
            </h2>
            <div className="prose prose-slate text-sm sm:text-base leading-relaxed text-slate-600 space-y-3">
              <p>
                We encounter this panic daily in our outpatient clinic. <strong>Ejection Fraction has NOTHING to do with coronary artery blockage percentages.</strong>
              </p>
              <p>
                The human heart is an elastic muscular pump. When it fills with blood, say 100 mL, it squeezes and expels approximately 60 mL into the aorta with each beat. That means 60% of the volume was ejected (EF = 60%). The remaining 40 mL stays inside the chamber to keep the heart primed for the next cycle.
              </p>
              <p className="font-semibold text-navy">
                A person can have an LVEF of 65% (superb pumping power) and still have a 95% critical blockage inside their LAD coronary artery. That is why an Echo alone cannot rule out coronary artery disease.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-5">
            <h3 className="text-lg font-bold text-navy flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              <span>How RWMA Reveals Blocked Arteries on Echo</span>
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              While 2D Echo cannot visualize the coronary arteries directly, it acts like an earthquake sensor detecting regional muscle weakness:
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                <div className="font-bold text-slate-900">Anterior Wall &amp; Apex Weakness (Hypokinesia)</div>
                <div className="text-slate-600">Points directly to the <strong>LAD (Left Anterior Descending)</strong> artery, supplying the front of the heart.</div>
              </div>
              <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                <div className="font-bold text-slate-900">Inferior Wall Weakness</div>
                <div className="text-slate-600">Corresponds to the <strong>RCA (Right Coronary Artery)</strong>, which runs along the bottom of the heart.</div>
              </div>
              <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                <div className="font-bold text-slate-900">Lateral Wall Weakness</div>
                <div className="text-slate-600">Points to the <strong>LCx (Left Circumflex)</strong> artery, which wraps around the left side.</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/second-opinion/report-interpretation"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-primary-dark transition"
              >
                <span>Read our companion guide on 70% vs 90% Angiogram Blockages</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* STRUCTURAL VALVE EXPERTISE: TAVI & MITRACLIP */}
        <section className="rounded-2xl bg-gradient-to-br from-navy via-slate-900 to-navy text-white p-8 md:p-12 space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
              Director-Level Structural Heart Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display mt-1">
              When 2D Echo Detects Severe Valve Disease: TAVI &amp; MitraClip
            </h2>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Dr. Manish Aggarwal completed advanced European fellowship training in structural heart interventions at the Gottsegen György Hungarian Institute of Cardiology. Advanced valve conditions no longer require open-heart sternotomy.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-3">
              <h3 className="text-lg font-bold text-emerald-300 flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Severe Aortic Stenosis (AVA &lt; 1.0 cm²) → TAVI</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                When the aortic valve calcifies and narrows, patients experience breathlessness, syncope, or angina. Through <strong>TAVI (Transcatheter Aortic Valve Implantation)</strong>, a new biological heart valve is deployed through a tiny pinhole in the groin—without open surgery or a heart-lung bypass machine.
              </p>
              <Link
                to="/procedures/tavi"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 hover:text-white transition"
              >
                <span>Explore TAVI Eligibility &amp; Procedure Guide →</span>
              </Link>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-3">
              <h3 className="text-lg font-bold text-blue-300 flex items-center gap-2">
                <HeartPulse className="h-5 w-5" />
                <span>Severe Mitral Regurgitation (Grade 3/4) → MitraClip</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                When the mitral valve fails to close tightly, blood flows backward into the lungs, causing acute breathlessness and heart enlargement. <strong>MitraClip (TEER)</strong> clips the leaky leaflets together through a catheter, restoring normal one-way blood flow.
              </p>
              <Link
                to="/procedures/$slug"
                params={{ slug: "mitraclip-procedure-india" }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 hover:text-white transition"
              >
                <span>Explore Non-Surgical MitraClip Repair →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Patient Questions Answered
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy mt-1">
              Frequently Asked Questions on 2D Echo Reports
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {[
              {
                q: "Does an LVEF of 60% mean I have a 40% heart blockage?",
                a: "No! LVEF (Left Ventricular Ejection Fraction) measures pumping percentage, NOT blockage. A healthy human heart naturally pumps out roughly 55% to 70% of the blood inside it with every beat. An EF of 60% is completely normal and healthy. Arterial blockages are evaluated separately via Coronary Angiography.",
              },
              {
                q: "What does RWMA (Regional Wall Motion Abnormality) mean on an Echo?",
                a: "The left ventricle consists of different muscular segments (anterior, inferior, lateral, septal). Normally, all walls contract inwards together with equal strength. If one wall moves weakly (hypokinesia) or does not move at all (akinesia), it is termed an RWMA. This occurs because the specific coronary artery delivering blood to that segment is critically narrowed or blocked.",
              },
              {
                q: "Is Grade 1 Diastolic Dysfunction dangerous?",
                a: "In the vast majority of cases, no. Grade 1 diastolic dysfunction represents 'impaired relaxation,' which is a normal physiological age-related change seen in over 70% of adults aged 50 and above. It reflects slight stiffness of the heart muscle and does not cause sudden heart attacks.",
              },
              {
                q: "What is normal PASP on a 2D Echo report?",
                a: "Normal Pulmonary Artery Systolic Pressure (PASP) is typically under 30 to 35 mmHg. A PASP between 36 and 45 mmHg indicates mild pulmonary hypertension, while values above 50 mmHg indicate significant pulmonary hypertension that requires evaluation for valve disease or lung disorders.",
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
