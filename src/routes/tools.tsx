import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  HeartPulse,
  AlertTriangle,
  FileText,
  Calculator,
  ShieldCheck,
  Building2,
  Clock,
  ArrowRight,
  Stethoscope,
  Sparkles,
  CreditCard,
  Microscope,
  PhoneCall,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";
import { AppointmentSection } from "@/components/appointment-form";

const pageTitle = `Specialized Hub & Decision Tools | Dr. Manish Aggarwal`;
const pageDescription = `Access all clinical decision tools, report decrypters, and specialized cardiology desks: Chest Pain Triage, 2D Echo Decrypter, Duke TMT Calculator, and Avoid Bypass Hub.`;
const pageUrl = `${siteConfig.siteUrl}/tools`;

interface ToolItem {
  id: string;
  category: "tool" | "guide" | "desk";
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  description: string;
  to: string;
  badge: string;
  features: string[];
}

const TOOLS_DATA: ToolItem[] = [
  {
    id: "chest-pain-triage",
    category: "tool",
    tag: "[Tool]",
    tagColor: "bg-rose-500/10 text-rose-600 border-rose-500/20",
    title: "Chest Pain: Heart Attack vs Acidity Triage",
    subtitle: "Emergency Clinical Symptom Stratification & Red-Flag Checker",
    description:
      "A 90-second clinical evaluator to differentiate benign acid reflux / GERD from acute coronary ischemia. Features cold sweat and breathlessness warning thresholds with 1-tap Yashoda 24/7 Cath Lab emergency access.",
    to: "/conditions/chest-pain-heart-attack-vs-acidity",
    badge: "90-Sec Triage",
    features: [
      "ESC Evidence-Based Symptom Scoring",
      "Red-flag cold sweat & dyspnea triggers",
      "1-Tap Door-to-Balloon <50 min hotline",
    ],
  },
  {
    id: "report-interpretation",
    category: "tool",
    tag: "[Tool]",
    tagColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    title: "Report Decrypter: 70%, 80%, 90% Blockages",
    subtitle: "Angiography & CT Scan Interpretation Guide",
    description:
      "Holding an angiography report? Understand what 70% vs 90% blockages in the LAD 'Widow Maker' mean, when an invasive stent is medically compulsory, and how FFR pressure wire testing prevents unnecessary procedures.",
    to: "/second-opinion/report-interpretation",
    badge: "Angiogram Decrypter",
    features: [
      "LAD, RCA & LCx artery location breakdown",
      "When is a stent truly required?",
      "FFR/iFR physiological testing protocol",
    ],
  },
  {
    id: "avoid-bypass-surgery",
    category: "guide",
    tag: "[Guide]",
    tagColor: "bg-rose-500/10 text-rose-600 border-rose-500/20",
    title: "Can You Avoid Open-Heart Bypass Surgery?",
    subtitle: "Complex Stenting (CHIP PCI) vs CABG Second Opinion Hub",
    description:
      "Told you need open-heart bypass surgery for triple vessel blockages? Learn how advanced catheter tools—Rotablation diamond burrs, Shockwave IVL, and CTO techniques—allow complete multi-vessel revascularization without cracking the chest.",
    to: "/second-opinion/avoid-bypass-surgery",
    badge: "High-Ticket Second Opinion",
    features: [
      "Rotablation & Shockwave IVL for calcified arteries",
      "SYNTAX Score assessment criteria",
      "48-hour discharge vs 8-week sternotomy recovery",
    ],
  },
  {
    id: "echo-report-decrypter",
    category: "tool",
    tag: "[Tool]",
    tagColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    title: "2D Echo Report Normal Values Decrypter",
    subtitle: "Interactive Ultrasound Heart Parameter Analyzer",
    description:
      "Decode ultrasound heart measurements in seconds. Adjust interactive sliders to understand your LVEF pumping %, Regional Wall Motion Abnormalities (RWMA), Aortic & Mitral valve gradients, and PASP pressure in plain English.",
    to: "/second-opinion/echo-report-decrypter",
    badge: "Interactive Sliders",
    features: [
      "LVEF % (Ejection Fraction) slider & classification",
      "RWMA artery territory blockage locator",
      "TAVI (Aortic) & MitraClip valve candidacy check",
    ],
  },
  {
    id: "cost-estimator",
    category: "tool",
    tag: "[Tool]",
    tagColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    title: "Interactive Cardiac Cost & Hospital Estimator",
    subtitle: "Transparent Package Pricing & NPPA Statutory Stent Caps",
    description:
      "Calculate realistic out-of-pocket costs and hospital package pricing across Angioplasty, TAVI, Pacemakers, and Daycare Angiography. Fully accounts for room category and cashless TPA insurance approvals.",
    to: "/costs",
    badge: "Cost Calculator",
    features: [
      "NPPA statutory drug-eluting stent cap: ₹38,265",
      "100% cashless pre-authorization timelines",
      "Comparison across General, Semi-Private & Deluxe rooms",
    ],
  },
  {
    id: "angioplasty-vs-bypass",
    category: "guide",
    tag: "[Guide]",
    tagColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    title: "Angioplasty vs Bypass Surgery (CABG) Guide",
    subtitle: "Step-by-Step Clinical Decision Framework",
    description:
      "Compare stents versus open-heart surgery based on clinical trial evidence. Evaluates long-term survival in diabetic patients, left main disease, surgical risks, and recovery timelines.",
    to: "/second-opinion/angioplasty-vs-bypass",
    badge: "5 Min Read",
    features: [
      "SYNTAX Score: Low vs Intermediate vs High Risk",
      "Diabetic revascularization evidence",
      "28+ years interventional surgical perspective",
    ],
  },
  {
    id: "max-fortis-second-opinion",
    category: "desk",
    tag: "[Desk]",
    tagColor: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
    title: "Max & Fortis Cardiac Second Opinion Desk",
    subtitle: "Direct Film Review for Currently Hospitalized Patients",
    description:
      "Consulted or admitted at Max Patparganj, Fortis Noida, or Apollo? Upload your Angiogram CD or mobile camera video for independent director-level evaluation before agreeing to hasty procedures.",
    to: "/second-opinion/max-fortis-cardiac-second-opinion",
    badge: "2-Hour Film Review",
    features: [
      "2-hour emergency film turnaround via WhatsApp",
      "Independent verification: Is surgery truly mandatory?",
      "Yashoda Medicity transfer logistics assistance",
    ],
  },
  {
    id: "positive-tmt-next-steps",
    category: "guide",
    tag: "[Guide]",
    tagColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    title: "Positive TMT Test: What It Means & Next Steps",
    subtitle: "Duke Treadmill Score (DTS) & False-Positive Protocol",
    description:
      "Received a positive treadmill stress test on your annual health checkup? Don't panic. Calculate your Duke Treadmill Score, understand false positives in women, and learn when non-invasive CT Angio is safer than a catheter.",
    to: "/second-opinion/positive-tmt-test-next-steps",
    badge: "DTS Calculator",
    features: [
      "Interactive Duke Treadmill Score (DTS) calculator",
      "35%+ false-positive rate in women explained",
      "CT Coronary Angiogram vs Radial Angiography roadmap",
    ],
  },
  {
    id: "daycare-radial-angiography",
    category: "desk",
    tag: "[Desk]",
    tagColor: "bg-teal-500/10 text-teal-600 border-teal-500/20",
    title: "Same-Day Daycare Radial Angiography",
    subtitle: "3-Hour Wrist Catheterization Protocol",
    description:
      "Zero groin bedrest. Under Dr. Manish Aggarwal's transradial technique, patients walk into the Cath Lab, undergo painless wrist angiography in 15 minutes, and are comfortably discharged home within 3 hours.",
    to: "/procedures/daycare-radial-angiography",
    badge: "3-Hour Daycare",
    features: [
      "98%+ wrist artery access (zero groin sandbagging)",
      "Instant post-procedure walking & normal meals",
      "Covered by 100% of insurance & CGHS/ECHS",
    ],
  },
  {
    id: "in-stent-restenosis",
    category: "desk",
    tag: "[Clinic]",
    tagColor: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    title: "In-Stent Restenosis (ISR) Recurrent Blockage Clinic",
    subtitle: "Advanced Re-Stenting & Drug-Coated Balloon (DCB) Hub",
    description:
      "Experiencing chest pain years after stent placement? Learn how high-resolution Optical Coherence Tomography (OCT) optical imaging identifies the exact cause of stent narrowing without blindly layering additional metal.",
    to: "/conditions/in-stent-restenosis-treatment",
    badge: "Specialized Clinic",
    features: [
      "10-micron OCT optical cross-section imaging",
      "Drug-Coated Balloon (DCB) 'no-metal' angioplasty",
      "Underexpansion vs neoatherosclerosis diagnosis",
    ],
  },
  {
    id: "cghs-cardiology",
    category: "desk",
    tag: "[Desk]",
    tagColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    title: "CGHS & ECHS Cashless Cardiology Fast-Track Desk",
    subtitle: "Government Beneficiary Admissions & Fixed Package Rates",
    description:
      "Complete facilitation desk for Central Government employees, pensioners, and ex-servicemen. Emergency STEMI heart attack admissions require zero advance approval under Ministry guidelines.",
    to: "/insurance/cghs-cardiology",
    badge: "Government Empanelment",
    features: [
      "Emergency cashless STEMI admission protocol",
      "OPD permission slip & e-referral roadmap",
      "NABH accredited Yashoda Medicity empanelment",
    ],
  },
  {
    id: "best-cardiologist-guide",
    category: "guide",
    tag: "[Guide]",
    tagColor: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
    title: "Top Cardiologist Selection Guide (Delhi NCR)",
    subtitle: "5 Clinical Benchmarks to Choose Your Heart Specialist",
    description:
      "How to evaluate an interventional cardiologist before procedure day. Reviews procedure volumes (10,000+ benchmark), transradial adoption, European structural fellowships, and Cath Lab infrastructure.",
    to: "/best-cardiologist-indirapuram-ghaziabad",
    badge: "Selection Criteria",
    features: [
      "Procedure volume: Why 12,500+ cases matter",
      "Transradial competency benchmark (>95%)",
      "Hybrid Cath Lab infrastructure standards",
    ],
  },
];

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "cardiac decision tools, heart attack triage checker, 2D echo report decrypter, avoid bypass surgery guide, Duke treadmill score calculator, cardiac second opinion tools Delhi NCR, Dr Manish Aggarwal specialized hub",
      },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
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
          "@type": "CollectionPage",
          name: pageTitle,
          description: pageDescription,
          url: pageUrl,
          author: {
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
              { "@type": "ListItem", position: 2, name: "Specialized Hub & Tools", item: pageUrl },
            ],
          },
        }),
      },
    ],
  }),
  component: ToolsHubRoute,
});

function ToolsHubRoute() {
  const [activeFilter, setActiveFilter] = useState<"all" | "tool" | "guide" | "desk">("all");

  const filteredTools =
    activeFilter === "all"
      ? TOOLS_DATA
      : TOOLS_DATA.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-background">
      <section className="px-6 pb-20 pt-8 md:px-12 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-[1400px]">
          {/* Hero Header */}
          <PageHeroHeader
            backLink={{ to: "/", label: "Back to Home" }}
            title="Specialized Clinical Hub & Decision Tools"
            subtitle={`Interactive Triage Engines · Report Decrypters · Second Opinion Desks · ${siteConfig.hospital}`}
            description="Empowering cardiac patients and families with radical diagnostic clarity. Use our validated clinical tools, interactive report decrypters, and expert decision guides to evaluate symptoms, decode numbers, and avoid unnecessary surgical procedures."
            badges={
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <Calculator className="h-3.5 w-3.5" /> 12 Clinical Decision Tools
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground">
                  ESC / ACC Evidence Standards
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600">
                  <Clock className="h-3.5 w-3.5" /> 2-Hour Film Turnaround
                </span>
              </>
            }
          />

          {/* Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-border pb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mr-2">
              Filter By Type:
            </span>
            {[
              { id: "all", label: `All Resources (${TOOLS_DATA.length})` },
              {
                id: "tool",
                label: `Interactive Tools (${TOOLS_DATA.filter((i) => i.category === "tool").length})`,
              },
              {
                id: "guide",
                label: `Decision Guides (${TOOLS_DATA.filter((i) => i.category === "guide").length})`,
              },
              {
                id: "desk",
                label: `Specialized Desks (${TOOLS_DATA.filter((i) => i.category === "desk").length})`,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  activeFilter === tab.id
                    ? "bg-primary text-white shadow-sm"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards Directory Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => (
              <div
                key={tool.id}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition duration-200 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="space-y-4">
                  {/* Top Bar with Tag and Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[11px] font-bold ${tool.tagColor}`}
                    >
                      {tool.tag}
                    </span>
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {tool.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition leading-snug">
                      <Link to={tool.to}>{tool.title}</Link>
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-primary/80">
                      {tool.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <ul className="space-y-1.5 pt-2 border-t border-border/50 text-[11px] text-muted-foreground">
                    {tool.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Button */}
                <div className="mt-6 pt-4 border-t border-border">
                  <Link
                    to={tool.to}
                    className="inline-flex w-full items-center justify-between rounded-xl bg-muted/60 px-4 py-2.5 text-xs font-semibold text-foreground transition group-hover:bg-primary group-hover:text-white"
                  >
                    <span>Launch Resource</span>
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Quick WhatsApp Film Review Banner */}
          <div className="mt-16 rounded-3xl border border-primary/20 bg-gradient-to-br from-navy via-slate-900 to-navy p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                Direct Case Evaluation
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-medium">
                Have an Angiography CD or Echo Report to Review?
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Send DICOM files, CD copies, or photos of your written conclusion report directly to Dr. Manish Aggarwal's clinical coordinator on WhatsApp. Receive an evidence-based clinical opinion within 2 hours.
              </p>
            </div>
            <a
              href={`https://wa.me/919348131276?text=${encodeURIComponent(
                "Hello Dr. Manish Aggarwal, I am on your Tools & Specialized Hub page and would like to share my cardiac report / angiogram CD for second opinion review."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-md"
            >
              <span>WhatsApp Reports for Triage</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </section>

      {/* Appointment Form Section */}
      <AppointmentSection />
    </div>
  );
}
