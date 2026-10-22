import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Award,
  Calendar,
  Phone,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Clock,
  Activity,
  HeartPulse,
  HelpCircle,
  Stethoscope,
  CreditCard,
} from "lucide-react";
import { conditions, type ConditionSection } from "@/data/conditions";
import { procedures } from "@/data/procedures";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";

interface ConditionCostBridge {
  costSlug: string;
  costTitle: string;
  estimatedRange: string;
  nppaHighlight: string;
  insuranceNote: string;
}

const CONDITION_COST_MAP: Record<string, ConditionCostBridge> = {
  "severe-aortic-stenosis": {
    costSlug: "tavi-tavr-cost-india",
    costTitle: "TAVI / TAVR Procedure Cost Guide (India)",
    estimatedRange: "₹18,00,000 – ₹26,00,000",
    nppaHighlight:
      "US-FDA Approved Balloon-Expandable & Self-Expanding Valves with NPPA-compliant delivery systems.",
    insuranceNote:
      "Covered by CGHS, ECHS, and private mediclaim under clinical high-risk indications at Yashoda Medicity.",
  },
  "coronary-artery-disease-calcification": {
    costSlug: "angioplasty-cost-delhi-ncr",
    costTitle: "Coronary Angioplasty & Complex Stenting Cost",
    estimatedRange: "₹1,40,000 – ₹2,80,000",
    nppaHighlight:
      "Strict NPPA ceiling price cap of ₹38,265 on Drug-Eluting Stents (DES) with zero consumable overbilling.",
    insuranceNote:
      "100% cashless empanelment for CGHS, ECHS, corporate TPAs, and all leading private insurers.",
  },
  "heart-attack-stemi-nstemi": {
    costSlug: "angioplasty-cost-delhi-ncr",
    costTitle: "Primary Emergency Angioplasty Cost Breakdown",
    estimatedRange: "₹1,40,000 – ₹2,60,000",
    nppaHighlight:
      "NPPA capped DES stents and balloon catheters. Emergency provisional cashless approval within 60 minutes.",
    insuranceNote:
      "Zero advance delay in acute cardiac emergencies at Yashoda Medicity's 24/7 primary cath lab.",
  },
  "arrhythmias-heart-block": {
    costSlug: "pacemaker-implantation-cost",
    costTitle: "Permanent Pacemaker Implantation Cost Guide",
    estimatedRange: "₹1,85,000 – ₹5,50,000",
    nppaHighlight:
      "Government statutory price caps on pulse generators and transvenous lead systems.",
    insuranceNote:
      "100% cashless sanction under CGHS, ECHS, and private mediclaim with documented ECG/Holter proof.",
  },
  "left-main-coronary-artery-disease": {
    costSlug: "angioplasty-cost-delhi-ncr",
    costTitle: "Left Main Bifurcation Stenting (DK-Crush) Cost",
    estimatedRange: "₹1,80,000 – ₹3,40,000",
    nppaHighlight:
      "Statutory stent caps with high-definition IVUS / OCT precision imaging consumables itemized transparently.",
    insuranceNote:
      "Substantially lower out-of-pocket and ICU downtime compared to multi-vessel open CABG surgery.",
  },
  "mitral-regurgitation-mitraclip": {
    costSlug: "tavi-tavr-cost-india",
    costTitle: "MitraClip / TEER Structural Intervention Cost",
    estimatedRange: "₹22,00,000 – ₹30,00,000",
    nppaHighlight:
      "Transcatheter edge-to-edge repair system package, femoral venous delivery, and 48-hour recovery stay.",
    insuranceNote:
      "Cashless authorization coordinated directly with specialized medical boards and corporate insurers.",
  },
  "heart-failure-reduced-ejection-fraction": {
    costSlug: "pacemaker-implantation-cost",
    costTitle: "CRT-D & Physiological Pacing Cost Guide",
    estimatedRange: "₹4,50,000 – ₹9,50,000",
    nppaHighlight:
      "Biventricular resynchronization defibrillator hardware capped under modern regulatory standards.",
    insuranceNote:
      "Approved for 100% cashless hospitalization across private mediclaim and government ex-servicemen panels.",
  },
  "resistant-hypertension-renal-denervation": {
    costSlug: "angioplasty-cost-delhi-ncr",
    costTitle: "Catheter-Based Interventional Cardiology Packages",
    estimatedRange: "₹1,60,000 – ₹2,90,000",
    nppaHighlight:
      "Transparent cath lab consumables, day-care to 24-hour observation room categories, and guideline billing.",
    insuranceNote:
      "Inpatient admission and diagnostic workup covered under comprehensive cardiovascular mediclaim.",
  },
  "peripheral-artery-disease-carotid-stenting": {
    costSlug: "angioplasty-cost-delhi-ncr",
    costTitle: "Endovascular & Carotid Stenting Cost Guide",
    estimatedRange: "₹1,75,000 – ₹3,20,000",
    nppaHighlight:
      "Neurovascular embolic protection filters and self-expanding nitinol stents capped under healthcare ceilings.",
    insuranceNote:
      "Direct cashless coverage for stroke prevention and limb salvage procedures at Yashoda Medicity.",
  },
  "aortic-aneurysm-tevar": {
    costSlug: "tavi-tavr-cost-india",
    costTitle: "TEVAR Endovascular Aortic Repair Cost Guide",
    estimatedRange: "₹8,50,000 – ₹16,00,000",
    nppaHighlight:
      "Modular stent-graft delivery systems avoiding open thoracotomy with minimal blood transfusion requirements.",
    insuranceNote:
      "Pre-authorized cashless admission with dedicated Yashoda Medicity TPA desk support.",
  },
  "hypertrophic-cardiomyopathy-septal-ablation": {
    costSlug: "angioplasty-cost-delhi-ncr",
    costTitle: "Percutaneous Septal Ablation Cost Guide",
    estimatedRange: "₹1,50,000 – ₹2,60,000",
    nppaHighlight:
      "Minimally invasive catheter laboratory stay, pressure wire gradients, and cardiac ICU monitoring.",
    insuranceNote:
      "Full cashless mediclaim support avoiding the extensive financial burden of open surgical myectomy.",
  },
  "adult-congenital-heart-defects-device-closure": {
    costSlug: "tavi-tavr-cost-india",
    costTitle: "ASD / VSD / PDA Device Closure Cost Guide",
    estimatedRange: "₹1,80,000 – ₹3,20,000",
    nppaHighlight:
      "Transcatheter nitinol double-disc occluder devices and intraprocedural transesophageal echo guidance.",
    insuranceNote:
      "100% cashless approval under CGHS, ECHS, and corporate health plans for adult congenital defects.",
  },
  "in-stent-restenosis-repeat-blockage": {
    costSlug: "angioplasty-cost-delhi-ncr",
    costTitle: "Drug-Coated Balloon (DCB) Recanalization Cost",
    estimatedRange: "₹1,50,000 – ₹2,90,000",
    nppaHighlight:
      "Statutory paclitaxel/sirolimus-coated balloon caps avoiding unnecessary permanent metal stent stacking.",
    insuranceNote:
      "Covered under repeat coronary revascularization benefits across all recognized health insurance panels.",
  },
  "microvascular-angina-syndrome-x": {
    costSlug: "angioplasty-cost-delhi-ncr",
    costTitle: "Coronary Function Testing & Diagnostics Cost",
    estimatedRange: "₹35,000 – ₹75,000",
    nppaHighlight:
      "Microvascular resistance (IMR) and coronary flow reserve testing with zero unplanned surgical markups.",
    insuranceNote:
      "Diagnostic day-care angiography covered across all major cashless mediclaim policies.",
  },
};

export const Route = createFileRoute("/conditions/$slug")({
  loader: ({ params }) => {
    const cond = conditions.find((c) => c.slug === params.slug);
    if (!cond) throw notFound();
    return { cond };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.cond;
    if (!c) return { meta: [{ title: `Condition — ${siteConfig.name}` }] };
    const url = `${siteConfig.siteUrl}/conditions/${c.slug}`;

    const schemas: Record<string, unknown>[] = [
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: c.title,
        description: c.summary,
        url,
        lastReviewed: "2026-10-18",
        aspect: ["Symptoms", "Diagnosis", "Treatment Options", "Prognosis", "Emergency Indicators"],
        specialty: "https://schema.org/Cardiovascular",
        reviewedBy: {
          "@type": "Physician",
          name: siteConfig.name,
          jobTitle: siteConfig.title,
          identifier: siteConfig.registration,
          url: `${siteConfig.siteUrl}/about`,
          medicalSpecialty: [
            "https://schema.org/CardiovascularExam",
            "Interventional Cardiology",
            "Structural Heart",
          ],
          alumniOf: "Gottsegen György Hungarian Institute of Cardiology, Budapest",
          worksFor: {
            "@type": "Hospital",
            name: siteConfig.hospital,
          },
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Conditions Library",
            item: `${siteConfig.siteUrl}/conditions`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: c.title,
            item: url,
          },
        ],
      },
    ];

    if (c.faqs && c.faqs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: c.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      });
    }

    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDescription },
        {
          name: "keywords",
          content: `${c.keywords}, ${siteConfig.name}, Yashoda Medicity cardiology`,
        },
        { property: "og:title", content: c.metaTitle },
        { property: "og:description", content: c.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: `${siteConfig.siteUrl}/images/og-doctor.jpg` },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:title", content: c.metaTitle },
        { property: "twitter:description", content: c.metaDescription },
        { property: "twitter:image", content: `${siteConfig.siteUrl}/images/og-doctor.jpg` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: schemas.map((schema) => ({
        type: "application/ld+json",
        children: JSON.stringify(schema),
      })),
    };
  },
  component: ConditionDetailPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Condition Guide Not Found</h1>
      <Link
        to="/conditions"
        className="mt-6 inline-flex rounded-full bg-navy px-5 py-2.5 text-sm text-navy-foreground transition hover:opacity-90"
      >
        View All Conditions
      </Link>
    </div>
  ),
});

function ConditionDetailPage() {
  const { cond } = Route.useLoaderData();

  // Map related procedures
  const relatedProcs = procedures.filter((p) => cond.relatedProcedureSlugs.includes(p.slug));

  return (
    <article className="bg-background">
      {/* Hero Header */}
      <section className="px-6 pt-8 pb-4 md:px-12 md:pt-10">
        <div className="mx-auto max-w-[1200px]">
          <PageHeroHeader
            backLink={{ to: "/conditions", label: "Back to Conditions Library" }}
            title={cond.title}
            subtitle={cond.subtitle}
            description={cond.summary}
            badges={
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <HeartPulse className="h-3.5 w-3.5" /> {cond.heroBadge}
                </span>
                <a
                  href={siteConfig.hospitalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground transition hover:bg-secondary/80 hover:text-primary"
                  title="View Dr. Manish Aggarwal's Official Yashoda Medicity Profile"
                >
                  📍 {siteConfig.hospital}, Indirapuram ↗
                </a>
              </>
            }
          />

          {/* E-E-A-T Clinical Authority & Reviewer Badge */}
          <div className="mt-4 mb-8 flex flex-wrap items-center gap-2.5 rounded-2xl border border-border/80 bg-secondary/40 px-5 py-3 text-xs text-muted-foreground shadow-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
              <span className="font-semibold text-foreground">
                Clinically Authored &amp; Reviewed:
              </span>
              <Link to="/about" className="font-medium text-primary hover:underline">
                Dr. Manish Aggarwal, MD, DM, FESC
              </Link>
            </div>
            <span className="hidden sm:inline text-border">•</span>
            <span className="text-foreground/80">
              Director, Interventional Cardiology ({siteConfig.hospital})
            </span>
            <span className="hidden sm:inline text-border">•</span>
            <span className="text-foreground/80 font-medium">Last Reviewed: October 2026</span>
            <span className="hidden sm:inline text-border">•</span>
            <span className="inline-flex items-center gap-1 rounded bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary uppercase">
              ESC &amp; ACC Aligned
            </span>
          </div>

          {/* Key Clinical Stats Strip */}
          <div className="mt-2 mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cond.keyStats.map((st, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/80 bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:border-primary/40"
              >
                <p className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                  {st.label}
                </p>
                <p className="mt-2 font-display text-xl font-semibold leading-snug text-foreground md:text-2xl">
                  {st.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{st.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hallmark Symptoms & Urgency Indicators */}
      <section className="px-6 py-12 md:px-12 bg-cream/30 border-t border-b border-border">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Symptom Triage
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl text-foreground">
              Recognizing Hallmark Symptoms &amp; Warning Signs
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Prevalence: {cond.prevalence} | Triage Level: {cond.urgencyLevel}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {cond.symptoms.map((sym, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-lg font-medium text-foreground">{sym.name}</h3>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase ${
                        sym.urgency === "Emergency"
                          ? "bg-red-500/10 text-red-600 border border-red-500/20"
                          : sym.urgency === "Urgent Evaluation"
                            ? "bg-amber-500/10 text-amber-600 border border-amber-500/20"
                            : "bg-blue-500/10 text-blue-600 border border-blue-500/20"
                      }`}
                    >
                      {sym.urgency}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{sym.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Clinical Narrative */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[900px] space-y-16">
          {cond.sections.map((sec: ConditionSection, i: number) => (
            <div key={i} className="space-y-6">
              <h2 className="font-display text-2xl leading-tight text-foreground sm:text-3xl md:text-4xl">
                {sec.heading}
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-foreground/85 md:text-lg">
                {sec.paragraphs.map((p: string, j: number) => (
                  <p key={j}>{p}</p>
                ))}
              </div>

              {sec.bullets && sec.bullets.length > 0 && (
                <ul className="space-y-3.5 rounded-2xl border border-border/60 bg-muted/30 p-6 md:p-8">
                  {sec.bullets.map((b: string, j: number) => (
                    <li key={j} className="flex items-start gap-3 text-base text-foreground/85">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {sec.callout && (
                <figure className="rounded-2xl border-l-4 border-primary bg-primary/[0.04] p-6 italic md:p-8">
                  <blockquote className="font-display text-lg text-foreground md:text-xl">
                    "{sec.callout.quote}"
                  </blockquote>
                  {sec.callout.attribution && (
                    <figcaption className="mt-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase not-italic">
                      — {sec.callout.attribution}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          ))}

          {/* Diagnostic Protocol Checklist */}
          <div className="rounded-3xl border border-primary/20 bg-primary/[0.03] p-8 md:p-12">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Clinical Investigation Protocol
            </span>
            <h3 className="mt-2 font-display text-2xl text-foreground md:text-3xl">
              Definitive Diagnostic Tests Required
            </h3>
            <ul className="mt-6 space-y-3.5">
              {cond.diagnosticChecklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base text-foreground/90">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatment Comparison Matrix */}
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                Clinical Decision Matrix
              </span>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl text-foreground">
                Treatment Approaches Compared
              </h3>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60 text-xs font-semibold tracking-wider uppercase text-foreground">
                  <tr>
                    <th className="p-4">Approach</th>
                    <th className="p-4">Ideal Suitability</th>
                    <th className="p-4">Hospital Stay</th>
                    <th className="p-4">Recovery Time</th>
                    <th className="p-4">Dr. Manish Aggarwal's Protocol</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {cond.treatmentComparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-muted/20">
                      <td className="p-4 font-semibold text-foreground">{row.approach}</td>
                      <td className="p-4 text-muted-foreground">{row.suitability}</td>
                      <td className="p-4 text-foreground/80">{row.hospitalStay}</td>
                      <td className="p-4 text-foreground/80">{row.recoveryTime}</td>
                      <td className="p-4 text-primary font-medium">{row.drAggarwalAdvantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* High-Volume Search Query Answers (Targeting Exact Patient Questions) */}
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                Frequently Researched Patient Queries
              </span>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl text-foreground">
                Exact Clinical Answers to High-Volume Inquiries
              </h3>
            </div>
            <div className="space-y-4">
              {cond.highVolumeQueries.map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h4 className="font-display text-lg font-medium text-foreground">
                    "{item.query}"
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.answer}
                  </p>
                  <div className="mt-4 pt-3 border-t border-border/60 flex items-center gap-2 text-xs font-medium text-primary">
                    <ShieldCheck className="h-4 w-4 shrink-0" />
                    <span>Clinical Takeaway: {item.clinicalSignificance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs Accordion */}
          {cond.faqs && cond.faqs.length > 0 && (
            <div>
              <div className="mb-6">
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  Patient Inquiries
                </span>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl text-foreground">
                  Frequently Asked Questions
                </h3>
              </div>
              <div className="space-y-4">
                {cond.faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between font-display text-lg text-foreground">
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base border-t border-border/60 pt-4">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Procedures Cross-Linking Mesh */}
      {relatedProcs.length > 0 && (
        <section className="px-6 py-16 bg-cream/30 md:px-12 border-t border-border">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  Procedural Interventions
                </span>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl text-foreground">
                  Treatments Performed by Dr. Manish Aggarwal for This Condition
                </h3>
              </div>
              <Link
                to="/procedures"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                All 9 Procedures <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProcs.map((p) => (
                <Link
                  key={p.slug}
                  to="/procedures/$slug"
                  params={{ slug: p.slug }}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:border-primary/50 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-primary uppercase">
                      {p.focus.split("·")[0]}
                    </span>
                    <h4 className="mt-2 font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      {p.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-primary group-hover:translate-x-0.5 transition-transform">
                    <span>Clinical Protocol</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TOPIC TRIANGLE: Estimated Cost & Cashless Insurance Breakdown */}
      {CONDITION_COST_MAP[cond.slug] &&
        (() => {
          const costInfo = CONDITION_COST_MAP[cond.slug];
          return (
            <section className="px-6 py-14 bg-background border-t border-border md:px-12">
              <div className="mx-auto max-w-[1200px]">
                <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/[0.04] via-card to-card p-8 sm:p-10 shadow-sm">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6 border-b border-border/60">
                    <div className="max-w-2xl">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-3">
                        <CreditCard className="h-3.5 w-3.5" />
                        <span>Statutory Price Transparency &amp; TPA Pre-Auth</span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-medium text-foreground">
                        Estimated Procedure Cost &amp; Cashless Insurance for{" "}
                        {cond.shortTitle || cond.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Transparent cost expectations, government price ceilings (NPPA), and
                        cashless panel empanelment at Yashoda Medicity, Indirapuram.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 text-center lg:text-right shrink-0">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block">
                        Estimated Procedure Range
                      </span>
                      <span className="font-display text-2xl sm:text-3xl font-bold text-foreground block mt-1">
                        {costInfo.estimatedRange}
                      </span>
                      <span className="text-[11px] text-muted-foreground block mt-0.5">
                        Subject to room tier &amp; cashless co-pay
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2 pt-2">
                    <div className="rounded-2xl bg-secondary/50 p-5 border border-border/50">
                      <span className="font-semibold text-foreground text-xs uppercase tracking-wide block mb-1.5">
                        Statutory Regulatory Standards:
                      </span>
                      <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {costInfo.nppaHighlight}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-secondary/50 p-5 border border-border/50">
                      <span className="font-semibold text-foreground text-xs uppercase tracking-wide block mb-1.5">
                        Cashless Insurance &amp; Panels:
                      </span>
                      <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {costInfo.insuranceNote}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-border/60">
                    <p className="text-xs text-muted-foreground">
                      Empanelled for CGHS, ECHS, Star Health, Care Health, HDFC ERGO, ICICI Lombard,
                      Niva Bupa &amp; Medi Assist.
                    </p>
                    <Link
                      to="/costs/$slug"
                      params={{ slug: costInfo.costSlug }}
                      className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-2.5 text-xs font-semibold text-white shadow transition hover:opacity-90 shrink-0"
                    >
                      <span>Read Full Statutory Cost Breakdown &amp; Room Packages</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })()}

      {/* Case Assessment CTA */}
      <section className="px-6 pb-28 md:px-12 md:pb-36">
        <div className="mx-auto max-w-[1000px] rounded-3xl bg-navy px-8 py-16 text-center text-navy-foreground md:px-16 md:py-20 shadow-xl">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase text-navy-foreground/60">
            <a
              href={siteConfig.hospitalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition inline-flex items-center gap-1.5"
            >
              Director's Cardiac Suite · Yashoda Medicity ↗
            </a>
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight md:text-4xl lg:text-5xl">
            Discuss Your Case for {cond.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-navy-foreground/75 md:text-base">
            Same-week outpatient consultations and urgent second opinions with Dr. Manish Aggarwal
            at {siteConfig.hospital}, Indirapuram. Bring your 2D Echo or Angiogram CD for an
            unpressured clinical review.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-navy transition hover:bg-white/90"
            >
              <Calendar className="h-4 w-4" /> Book Consultation
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/30 px-7 py-3.5 text-sm font-medium text-navy-foreground transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> Call {siteConfig.phone}
            </a>
          </div>
          <p className="mt-6 text-xs text-navy-foreground/50">
            Registration: {siteConfig.registration} · Dedicated 24/7 Cath Lab &amp; CCU
          </p>
        </div>
      </section>
    </article>
  );
}
