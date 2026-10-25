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
  Zap,
  Layers,
  FileCheck2,
  AlertTriangle,
  FileText,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";
import { AppointmentSection } from "@/components/appointment-form";

const pageTitle = `Can You Avoid Bypass Surgery (CABG)? Triple Vessel Stenting & High-Risk PCI | ${siteConfig.name}`;
const pageDescription = `Advised open-heart bypass surgery? Learn how complex angioplasty with Rotablation, Shockwave IVL, and CTO techniques treats triple vessel disease without opening the chest.`;
const pageUrl = `${siteConfig.siteUrl}/second-opinion/avoid-bypass-surgery`;

export const Route = createFileRoute("/second-opinion/avoid-bypass-surgery")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "avoid bypass surgery delhi ncr, triple vessel disease angioplasty, can bypass surgery be avoided, alternative to CABG heart surgery, chronic total occlusion CTO PCI, rotablation yashoda medicity, Dr Manish Aggarwal second opinion",
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
              { "@type": "ListItem", position: 3, name: "Avoid Bypass Surgery", item: pageUrl },
            ],
          },
          mainEntity: {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can triple vessel disease (3 blockages) be treated with stents instead of bypass?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, in many patients triple vessel coronary disease can be safely revascularized using complex angioplasty (CHIP PCI). With intravascular imaging (IVUS/OCT) and plaque modification (Rotablation / Shockwave IVL), stents can match the safety of surgery while avoiding median sternotomy chest splitting.",
                },
              },
              {
                "@type": "Question",
                name: "What makes a patient eligible to avoid CABG bypass surgery?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Eligibility depends on the coronary anatomy SYNTAX score, vessel caliber (>2.5 mm), location of blockages, absence of diffuse distal disease, and patient co-morbidities. Elderly patients, those with previous stroke, COPD, or high surgical risk are often superior candidates for complex angioplasty.",
                },
              },
              {
                "@type": "Question",
                name: "What is the recovery time difference between multi-stenting and bypass?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Radial angioplasty requires 24 to 48 hours of hospital stay and patients return to normal routine within 3 to 5 days. CABG bypass surgery requires 7 to 10 days in the hospital and 6 to 12 weeks for the sternum breastbone to fuse.",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
  component: AvoidBypassSurgeryPage,
});

function AvoidBypassSurgeryPage() {
  const cleanPhone = siteConfig.phoneRaw.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hello Dr. Manish Aggarwal, I have been advised open-heart bypass surgery (CABG) for multi-vessel disease. I would like a second opinion on whether complex stenting is possible for my case.",
  )}`;

  return (
    <div className="bg-background">
      <section className="px-6 pb-20 pt-8 md:px-12 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-[1400px]">
          <PageHeroHeader
            backLink={{ to: "/second-opinion", label: "Back to Second Opinion Desk" }}
            title="Can You Avoid Open-Heart Bypass Surgery?"
            subtitle={`Complex Multi-Vessel Stenting (CHIP PCI) vs CABG · ${siteConfig.hospital}`}
            description="If you or your parent was recently advised coronary bypass surgery (CABG) after an angiography, learn how advanced interventional technologies—Rotablation, Shockwave IVL, and CTO techniques—allow safe multi-vessel stenting without cracking the chest."
            badges={
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" /> High-Risk PCI (CHIP Specialist)
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground">
                  SYNTAX Score Assessment
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600">
                  <Clock className="h-3.5 w-3.5" /> 24-Hour CD Review
                </span>
              </>
            }
          />

          {/* Emotional Context & Overview */}
          <div className="mt-12 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  The Agonizing Family Dilemma
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                  "The Doctor Said 3 Blockages and Told Us to Prepare for Open-Heart Surgery"
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Hearing that a loved one needs open-heart bypass surgery (CABG)—having their breastbone split open, being connected to a heart-lung machine, and facing weeks in surgical ICU—is terrifying. 
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Historically, anyone with blockages in all three arteries (Triple Vessel Disease) or the Left Main trunk was automatically referred to a cardiac surgeon. Today, <strong>international cardiology guidelines (ESC / ACC)</strong> recognize that advances in catheter technology, diamond-tipped plaque drilling, and intravascular ultrasound enable experienced interventionalists to safely stent complex disease that was previously considered "inoperable without bypass."
                </p>
              </div>

              <div className="lg:col-span-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                  <Award className="h-4 w-4" />
                  <span>Dr. Manish Aggarwal's Approach</span>
                </div>
                <div className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                  <p>
                    ✓ <strong>10,000+ Interventions Performed:</strong> Extensive experience in complex higher-risk indicated patients (CHIP).
                  </p>
                  <p>
                    ✓ <strong>Physiological Testing (FFR):</strong> We test whether every 70% lesion actually restricts blood flow before implanting a stent.
                  </p>
                  <p>
                    ✓ <strong>Honest Surgical Triage:</strong> If bypass surgery is truly safer for your long-term survival, we tell you directly without hesitation.
                  </p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-semibold text-primary-foreground hover:opacity-90 transition"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp Angio CD for Review</span>
                </a>
              </div>
            </div>
          </div>

          {/* 4 Technologies That Make Bypass Avoidable */}
          <div className="mt-16 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Advanced Catheterization
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                How Modern Technology Makes Multi-Vessel Stenting Possible
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Why blockages that used to require open-heart surgery 10 years ago can now be cleared via a tiny needle puncture in the wrist.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Tech 1: Rotablation */}
              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                  <Zap className="h-5 w-5" />
                </div>
                <h4 className="font-display text-lg font-medium text-foreground">
                  Rotablation (Atherectomy)
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A miniature diamond-coated burr spinning at 160,000 RPM micro-pulverizes rock-hard calcium deposits into microscopic particles, allowing stents to expand fully in vessels that balloons cannot open.
                </p>
              </div>

              {/* Tech 2: Shockwave IVL */}
              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <Activity className="h-5 w-5" />
                </div>
                <h4 className="font-display text-lg font-medium text-foreground">
                  Shockwave Lithotripsy (IVL)
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Emits sonic pressure waves directly inside the artery to crack deep, eccentric calcium without tearing the fragile arterial wall—ideal for elderly, calcified vessels.
                </p>
              </div>

              {/* Tech 3: IVUS & OCT Imaging */}
              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                  <Layers className="h-5 w-5" />
                </div>
                <h4 className="font-display text-lg font-medium text-foreground">
                  Intravascular Imaging (IVUS/OCT)
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  High-definition ultrasound and optical cameras inside the vessel eliminate guesswork, ensuring the stent is sized with micron precision and fully apposed against the wall.
                </p>
              </div>

              {/* Tech 4: CTO PCI */}
              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <h4 className="font-display text-lg font-medium text-foreground">
                  CTO Recanalization
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Specialized micro-catheters and retrograde routing allow 100% chronically closed arteries (blocked for months or years) to be reopened without surgical grafting.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Matrix: Stent vs CABG */}
          <div className="mt-16 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm">
            <h3 className="text-xl md:text-2xl font-display font-medium text-foreground mb-6">
              Clinical Suitability: Who Should Consider Stents Over Bypass?
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm">
                <thead className="border-b border-border bg-muted/40 font-semibold text-foreground">
                  <tr>
                    <th className="p-4">Patient Scenario</th>
                    <th className="p-4 text-emerald-600">Complex Angioplasty (Stents)</th>
                    <th className="p-4 text-rose-600">Open-Heart Bypass (CABG)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-muted-foreground">
                  <tr>
                    <td className="p-4 font-semibold text-foreground">Elderly Patients (&gt;65–70 Years)</td>
                    <td className="p-4 text-emerald-700 font-medium">✓ Highly Preferred: Avoids ventilator trauma, memory loss, and high surgical mortality.</td>
                    <td className="p-4">Higher complication risk due to sternal non-union and prolonged ICU stay.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-foreground">Kidney Disease / Low eGFR</td>
                    <td className="p-4 text-emerald-700 font-medium">✓ Preferred: Ultra-low contrast PCI prevents dialysis; avoids cardiopulmonary bypass pump stress.</td>
                    <td className="p-4">Significantly elevated risk of post-op dialysis on heart-lung machine.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-foreground">Severe Calcified Blockages</td>
                    <td className="p-4 text-emerald-700 font-medium">✓ Treatable: Rotablation / IVL cracks calcium safely in the Cath Lab.</td>
                    <td className="p-4">Traditionally recommended, but no longer the only option.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-foreground">Diabetic with SYNTAX &gt; 33</td>
                    <td className="p-4">Feasible only if surgical risk is prohibitively high.</td>
                    <td className="p-4 text-rose-700 font-medium">✓ Recommended: CABG with internal mammary grafts offers superior 10-year durability.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-foreground">Recovery &amp; Downtime</td>
                    <td className="p-4 text-emerald-700 font-medium">24–48 hours hospital stay; back to office in 4–5 days.</td>
                    <td className="p-4">7–10 days hospital stay; 8–12 weeks of bone healing restrictions.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 3-Step Protocol to Get Your Angiography CD Evaluated */}
          <div className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-navy via-navy to-slate-900 p-8 md:p-12 text-white shadow-xl">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                Independent Second Opinion Desk
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-medium">
                Get Your Angiography CD Reviewed by Dr. Manish Aggarwal
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Before agreeing to open-heart surgery, confirm whether your blockages can be safely resolved with complex catheter-based stenting.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-2">
                <span className="inline-block rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-bold text-emerald-300">
                  Step 1
                </span>
                <h4 className="font-semibold text-sm">Send CD / DICOM</h4>
                <p className="text-xs text-slate-400">
                  Upload the digital DICOM folder or WhatsApp photos of your formal angiography summary report.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-2">
                <span className="inline-block rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-bold text-emerald-300">
                  Step 2
                </span>
                <h4 className="font-semibold text-sm">Frame-by-Frame Review</h4>
                <p className="text-xs text-slate-400">
                  Dr. Manish analyzes vessel caliber, bifurcation angles, and calculates your anatomical SYNTAX score.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-2">
                <span className="inline-block rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-bold text-emerald-300">
                  Step 3
                </span>
                <h4 className="font-semibold text-sm">Clear Clinical Roadmap</h4>
                <p className="text-xs text-slate-400">
                  Receive a written assessment outlining whether stenting is equivalent or if bypass is genuinely necessary.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-md"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp Angiography CD for Review</span>
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-semibold text-white hover:bg-white/20 transition"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Call Coordinator: {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Clinical FAQs */}
          <div className="mt-16 max-w-3xl space-y-6">
            <h3 className="text-xl md:text-2xl font-display font-medium text-foreground">
              Frequently Asked Questions on Avoiding Bypass Surgery
            </h3>

            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-5 space-y-2">
                <h4 className="font-semibold text-sm text-foreground">
                  Can 100% blocked arteries be opened without surgery?
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Yes. These are known as Chronic Total Occlusions (CTO). With dedicated microcatheters, dual-access retrograde wires, and rotablation burrs, specialized interventionalists successfully recanalize over 85–90% of chronic total occlusions without open surgery.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 space-y-2">
                <h4 className="font-semibold text-sm text-foreground">
                  What is a SYNTAX Score and how does it determine my surgery?
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The SYNTAX score is an objective clinical rating calculated from your angiogram measuring the number, tortuosity, and calcification of blockages. A score under 22 indicates angioplasty is equal or superior to CABG; intermediate scores (23–32) can be safely stented with modern imaging and debulking; scores above 33 often favor surgical bypass.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 space-y-2">
                <h4 className="font-semibold text-sm text-foreground">
                  Does Dr. Manish Aggarwal ever recommend surgery instead of stents?
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Yes, absolutely. Medical ethics and patient longevity are paramount. If an angiogram reveals severe diffuse small-vessel disease in a young diabetic with poor target beds, Dr. Manish will personally recommend CABG with an experienced cardiothoracic surgical team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppointmentSection />
    </div>
  );
}
