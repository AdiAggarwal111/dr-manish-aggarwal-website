import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import {
  Award,
  Calendar,
  Phone,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Clock,
  ArrowRight,
  MapPin,
  ExternalLink,
  HeartPulse,
  CreditCard,
} from "lucide-react";
import { procedures, type ProcedureSection } from "@/data/procedures";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";

const REGIONAL_HUBS = [
  {
    slug: "indirapuram",
    name: "Indirapuram",
    time: "3–5 Mins",
    corridor: "Kala Patthar Rd / Flagship Hub",
    note: "Direct 5-minute township arterial access to Yashoda Medicity.",
  },
  {
    slug: "vaishali",
    name: "Vaishali",
    time: "7–10 Mins",
    corridor: "CISF Road & Mahamaya Stadium",
    note: "Signal-free connectivity for Sectors 1–9 and Metro line.",
  },
  {
    slug: "vasundhara",
    name: "Vasundhara",
    time: "5–8 Mins",
    corridor: "Atal Path / Mewar Institute",
    note: "Rapid transit across all 19 sectors via Atal Path.",
  },
  {
    slug: "noida-sector-62",
    name: "Noida Sector 62",
    time: "8–12 Mins",
    corridor: "Model Town Underpass Corridor",
    note: "Direct underpass route from IT Hub & residential towers.",
  },
  {
    slug: "greater-noida-west",
    name: "Greater Noida West",
    time: "12–15 Mins",
    corridor: "Gaur City & Kisan Chowk",
    note: "Expressway link to Yashoda Medicity for 300k+ residents.",
  },
  {
    slug: "mayur-vihar",
    name: "Mayur Vihar",
    time: "14–18 Mins",
    corridor: "Delhi-Meerut Expressway",
    note: "Direct 14-lane signal-free drive from East Delhi.",
  },
  {
    slug: "kaushambi",
    name: "Kaushambi",
    time: "8–12 Mins",
    corridor: "Anand Vihar ISBT Corridor",
    note: "Fast arterial route for senior and executive patients.",
  },
  {
    slug: "crossing-republik",
    name: "Crossings Republik",
    time: "10–14 Mins",
    corridor: "NH-24 Expressway Link",
    note: "Seamless expressway transit for township families.",
  },
] as const;

interface TopicMeshItem {
  conditionSlug: string;
  conditionName: string;
  conditionBadge: string;
  conditionSummary: string;
  costSlug: string;
  costName: string;
  costRange: string;
  costHighlight: string;
}

const PROCEDURE_TOPIC_MESH: Record<string, TopicMeshItem> = {
  tavi: {
    conditionSlug: "severe-aortic-stenosis",
    conditionName: "Severe Aortic Stenosis & Valvular Disease",
    conditionBadge: "Underlying Pathology",
    conditionSummary:
      "Aortic valve orifice narrowing (< 1.0 cm²) restricting systemic circulation. Symptomatic severe stenosis carries a 50% 2-year mortality if untreated.",
    costSlug: "tavi-tavr-cost-india",
    costName: "TAVI / TAVR Procedure Cost & Package Guide",
    costRange: "₹18,00,000 – ₹26,00,000",
    costHighlight:
      "100% Cashless CGHS/ECHS & Private TPA coverage. Valve costs conforming to NPPA ceiling guidelines with 48h hospital stay.",
  },
  "tavi-tavr": {
    conditionSlug: "severe-aortic-stenosis",
    conditionName: "Severe Aortic Stenosis & Valvular Disease",
    conditionBadge: "Underlying Pathology",
    conditionSummary:
      "Aortic valve orifice narrowing (< 1.0 cm²) restricting systemic circulation. Symptomatic severe stenosis carries a 50% 2-year mortality if untreated.",
    costSlug: "tavi-tavr-cost-india",
    costName: "TAVI / TAVR Procedure Cost & Package Guide",
    costRange: "₹18,00,000 – ₹26,00,000",
    costHighlight:
      "100% Cashless CGHS/ECHS & Private TPA coverage. Valve costs conforming to NPPA ceiling guidelines with 48h hospital stay.",
  },
  mitraclip: {
    conditionSlug: "mitral-regurgitation-mitraclip",
    conditionName: "Severe Mitral Regurgitation & TEER",
    conditionBadge: "Underlying Pathology",
    conditionSummary:
      "Grade 3+ / 4+ mitral valve leakage causing pulmonary congestion and left atrial volume overload without opening the chest.",
    costSlug: "tavi-tavr-cost-india",
    costName: "Structural Heart & Valve Repair Cost Guide",
    costRange: "₹22,00,000 – ₹30,00,000",
    costHighlight:
      "Percutaneous TEER catheter packages, ICU telemetry monitoring, and cashless corporate insurance pre-authorization.",
  },
  "emergency-angioplasty": {
    conditionSlug: "heart-attack-stemi-nstemi",
    conditionName: "Acute Heart Attack (STEMI vs. NSTEMI)",
    conditionBadge: "Emergency Triage",
    conditionSummary:
      "Acute plaque rupture occluding coronary artery blood flow. Door-to-balloon primary angioplasty saves living heart muscle within the 90-minute Golden Hour.",
    costSlug: "angioplasty-cost-delhi-ncr",
    costName: "Emergency Angioplasty Cost & Statutory DES Caps",
    costRange: "₹1,40,000 – ₹2,80,000",
    costHighlight:
      "Zero-delay emergency cashless admission. NPPA capped Drug-Eluting Stents (₹38,265/stent) with 24/7 cath lab triage.",
  },
  "complex-coronary": {
    conditionSlug: "left-main-coronary-artery-disease",
    conditionName: "Left Main Disease & Calcified Bifurcations",
    conditionBadge: "Complex Anatomy",
    conditionSummary:
      "High-risk anatomy supplying >75% of left ventricular myocardium. Advanced DK-Crush stenting, Rotablation, and IVL shockwave therapy avoid open-heart CABG.",
    costSlug: "angioplasty-cost-delhi-ncr",
    costName: "Complex Coronary Angioplasty & Rotablation Cost",
    costRange: "₹1,80,000 – ₹3,40,000",
    costHighlight:
      "IVUS/OCT high-definition imaging catheters, diamond-burr rotablation consumables, and cashless panel claims at Yashoda Medicity.",
  },
  pacemakers: {
    conditionSlug: "arrhythmias-heart-block",
    conditionName: "Arrhythmias, Complete Heart Block & Sick Sinus",
    conditionBadge: "Conduction Pathology",
    conditionSummary:
      "Electrical conduction dissociation, symptomatic bradycardia (<40 BPM), and syncope blackouts requiring physiological pacing.",
    costSlug: "pacemaker-implantation-cost",
    costName: "Pacemaker & CRT-D Implantation Cost Guide",
    costRange: "₹1,85,000 – ₹9,50,000",
    costHighlight:
      "Single chamber, dual chamber, and biventricular CRT-D packages with 100% cashless CGHS, ECHS & private mediclaim approval.",
  },
  "rhythm-care": {
    conditionSlug: "arrhythmias-heart-block",
    conditionName: "Cardiac Conduction Disorders & Syncope",
    conditionBadge: "Electrophysiology",
    conditionSummary:
      "Evaluation of dizziness, sudden fainting spells, and bundle branch blocks with Holter telemetry and conduction system pacing.",
    costSlug: "pacemaker-implantation-cost",
    costName: "Pacemaker & Leadless Device Cost Guide",
    costRange: "₹1,85,000 – ₹5,50,000",
    costHighlight:
      "Full coverage of transvenous and conduction pacing hardware under statutory healthcare schemes and corporate policies.",
  },
  "intravascular-imaging": {
    conditionSlug: "coronary-artery-disease-calcification",
    conditionName: "Coronary Calcification & High CAC Scores",
    conditionBadge: "Precision Diagnostics",
    conditionSummary:
      "Severe plaque mineralization and chronic total occlusions requiring micron-level IVUS and Optical Coherence Tomography (OCT) guidance.",
    costSlug: "angioplasty-cost-delhi-ncr",
    costName: "Angioplasty & Imaging Consumables Cost Guide",
    costRange: "₹1,60,000 – ₹3,10,000",
    costHighlight:
      "Transparent itemization of diagnostic imaging catheters, cutting balloons, and government capped drug-eluting stents.",
  },
  "second-opinion": {
    conditionSlug: "left-main-coronary-artery-disease",
    conditionName: "Severe Multi-Vessel CAD (Angioplasty vs. CABG)",
    conditionBadge: "Diagnostic Review",
    conditionSummary:
      "Radical diagnostic honesty for patients advised bypass surgery. Frame-by-frame digital angiography review to determine if transradial stenting is viable.",
    costSlug: "angioplasty-cost-delhi-ncr",
    costName: "Comparative Stenting vs. Bypass Cost Guide",
    costRange: "₹1,40,000 – ₹2,80,000",
    costHighlight:
      "Transparent financial counselling comparing multi-stent percutaneous costs against open surgical CABG hospital packages.",
  },
  "heart-checkup": {
    conditionSlug: "coronary-artery-disease-calcification",
    conditionName: "Silent Coronary Artery Disease & Ischemia",
    conditionBadge: "Preventive Cardiology",
    conditionSummary:
      "Early detection of subclinical coronary atherosclerosis, lipid plaque vulnerability, and calcium score abnormalities before heart attacks occur.",
    costSlug: "angioplasty-cost-delhi-ncr",
    costName: "Preventive Diagnostics & Intervention Costs",
    costRange: "Comprehensive Packages",
    costHighlight:
      "Outpatient diagnostic coronary angiography and non-invasive stress testing covered under preventive checkup panels.",
  },
};

const PROCEDURE_SLUG_REDIRECTS: Record<string, string> = {
  "tavi-tavr": "tavi",
  "tavr": "tavi",
  "angiography": "coronary-angiography",
  "pacemaker": "pacemakers",
  "complex-angioplasty": "complex-coronary",
  "complex-angioplasty-cto": "complex-coronary",
  "rotablation-atherectomy": "intravascular-imaging",
  "pacemaker-icd-crt": "pacemakers",
  "cardiac-imaging-physiology": "intravascular-imaging",
  "second-opinion-cath-review": "second-opinion",
};

export const Route = createFileRoute("/procedures/$slug")({
  beforeLoad: ({ params }) => {
    const targetSlug = PROCEDURE_SLUG_REDIRECTS[params.slug];
    if (targetSlug) {
      throw redirect({
        to: "/procedures/$slug",
        params: { slug: targetSlug },
        statusCode: 301,
      });
    }
  },
  loader: ({ params }) => {
    const proc = procedures.find((p) => p.slug === params.slug);
    if (!proc) throw notFound();
    return { proc };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.proc;
    if (!p) return { meta: [{ title: `Procedure | ${siteConfig.name}` }] };
    const shortNames: Record<string, string> = {
      tavi: "TAVR / TAVI",
      "tavi-tavr": "TAVR / TAVI",
      mitraclip: "MitraClip (TEER)",
      "emergency-angioplasty": "Emergency Angioplasty",
      "complex-coronary": "Complex Angioplasty & CTO",
      "heart-checkup": "Executive Heart Check-Up",
      pacemakers: "Pacemakers & ICDs",
      "second-opinion": "Cardiology Second Opinion",
      "intravascular-imaging": "Intravascular Imaging",
      "rhythm-care": "Arrhythmia & Rhythm Care",
    };
    const procTitle = shortNames[p.slug] || p.title.split("(")[0].trim();
    const title = `${procTitle} | ${siteConfig.name}`.slice(0, 60);
    const rawDesc = `${p.title} at ${siteConfig.hospital} by ${siteConfig.name}. ${p.desc}`;
    const description =
      rawDesc.length > 155 ? rawDesc.slice(0, 152).replace(/\s+\S*$/, "") + "..." : rawDesc;
    const url = `${siteConfig.siteUrl}/procedures/${p.slug}`;

    const schemas: Record<string, unknown>[] = [
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        name: p.title,
        description: p.desc,
        procedureType: "Percutaneous Procedure",
        performer: {
          "@type": "Person",
          name: siteConfig.name,
          jobTitle: siteConfig.title,
          identifier: siteConfig.registration,
          url: `${siteConfig.siteUrl}/about`,
        },
        location: {
          "@type": "Hospital",
          name: siteConfig.hospital,
          address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.streetAddress,
            addressLocality: siteConfig.locality,
            addressRegion: siteConfig.region,
            postalCode: siteConfig.postalCode,
            addressCountry: siteConfig.country,
          },
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: `${p.title} | Procedural Overview & Clinical Indications`,
        description: p.desc,
        url,
        lastReviewed: "2026-10-18",
        medicalSpecialty: "https://schema.org/Cardiovascular",
        reviewedBy: {
          "@type": "Person",
          name: siteConfig.name,
          jobTitle: siteConfig.title,
          url: `${siteConfig.siteUrl}/about`,
        },
        about: {
          "@type": "MedicalProcedure",
          name: p.title,
          procedureType: "https://schema.org/PercutaneousProcedure",
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
            name: "Procedures",
            item: `${siteConfig.siteUrl}/procedures`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: p.title,
            item: url,
          },
        ],
      },
    ];

    if (p.faqs && p.faqs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: p.faqs.map((f) => ({
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
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content: `${p.keywords}, ${siteConfig.name}, ${siteConfig.hospital} cardiology`,
        },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: `${siteConfig.siteUrl}/images/og-doctor.jpg` },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:title", content: title },
        { property: "twitter:description", content: description },
        { property: "twitter:image", content: `${siteConfig.siteUrl}/images/og-doctor.jpg` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: schemas.map((schema) => ({
        type: "application/ld+json",
        children: JSON.stringify(schema),
      })),
    };
  },
  component: ProcedurePage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Procedure not found</h1>
      <Link
        to="/procedures"
        className="mt-6 inline-flex rounded-full bg-navy px-5 py-2.5 text-sm text-navy-foreground transition hover:opacity-90"
      >
        See all procedures
      </Link>
    </div>
  ),
  errorComponent: ({ error }: { error: unknown }) => (
    <div className="mx-auto max-w-xl px-6 py-32 text-center">
      <h1 className="font-display text-3xl">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">
        {error instanceof Error ? error.message : "An unexpected error occurred."}
      </p>
    </div>
  ),
});

function ProcedurePage() {
  const { proc } = Route.useLoaderData();

  return (
    <article className="bg-background">
      {/* Hero Header */}
      <section className="px-6 pt-8 pb-4 md:px-12 md:pt-10">
        <div className="mx-auto max-w-[1200px]">
          <PageHeroHeader
            backLink={{
              to: "/procedures",
              label: "Back to All Procedures",
            }}
            title={proc.title}
            subtitle={proc.tagline}
            description={proc.desc}
            badges={
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <Award className="h-3.5 w-3.5" /> Registration: {siteConfig.registration}
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
                <span className="rounded-full bg-secondary/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase text-foreground">
                  {proc.focus}
                </span>
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
              <Link
                to="/about"
                className="font-medium text-primary underline underline-offset-2 hover:opacity-80"
              >
                Dr. Manish Aggarwal, MD, DM, FESC
              </Link>
            </div>
            <span className="hidden sm:inline text-border">•</span>
            <span className="text-foreground/80">
              Director, Interventional Cardiology ({siteConfig.hospital})
            </span>
            <span className="hidden sm:inline text-border">•</span>
            <span className="text-foreground/80">DMC Reg: {siteConfig.registration}</span>
            <span className="hidden sm:inline text-border">•</span>
            <span className="text-foreground/80 font-medium">Last Reviewed: October 2026</span>
            <span className="hidden sm:inline text-border">•</span>
            <span className="inline-flex items-center gap-1 rounded bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary uppercase">
              ESC &amp; ACC/AHA Aligned
            </span>
          </div>

          {/* Clinical Highlights Strip */}
          {proc.highlights && proc.highlights.length > 0 && (
            <div className="mt-2 mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {proc.highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border/80 bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:border-primary/40"
                >
                  <p className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                    {h.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-snug text-foreground md:text-base">
                    {h.value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Clinical Narrative */}
      <section className="px-6 pb-20 pt-2 md:px-12 md:pb-28">
        <div className="mx-auto max-w-[900px] space-y-16">
          {proc.sections.map((s: ProcedureSection, i: number) => (
            <div key={i} className="space-y-6">
              {s.heading && (
                <h2 className="font-display text-2xl leading-tight tracking-[-0.02em] text-foreground sm:text-3xl md:text-4xl">
                  {s.heading}
                </h2>
              )}
              {s.paragraphs.length > 0 && (
                <div className="space-y-5 text-base leading-relaxed text-foreground/85 md:text-lg text-pretty">
                  {s.paragraphs.map((p: string, j: number) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              )}
              {s.bullets && s.bullets.length > 0 && (
                <ul className="space-y-3.5 rounded-2xl border border-border/60 bg-muted/30 p-6 md:p-8">
                  {s.bullets.map((b: string, j: number) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-base leading-relaxed text-foreground/85 md:text-lg"
                    >
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.callout && (
                <figure className="rounded-2xl border-l-4 border-primary bg-primary/[0.04] p-6 italic md:p-8">
                  <blockquote className="font-display text-lg text-foreground md:text-xl">
                    "{s.callout.quote}"
                  </blockquote>
                  {s.callout.attribution && (
                    <figcaption className="mt-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase not-italic">
                      · {s.callout.attribution}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          ))}

          {/* Clinical Indications & Candidacy */}
          {proc.patientProfile && proc.patientProfile.length > 0 && (
            <div className="rounded-3xl border border-primary/20 bg-primary/[0.03] p-8 md:p-12">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  Clinical Triage &amp; Candidacy
                </span>
                <h3 className="mt-2 font-display text-2xl text-foreground md:text-3xl">
                  Who Is an Ideal Candidate for {proc.title}?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground md:text-base">
                  Patients meeting these diagnostic and clinical profiles receive targeted
                  evaluations under Dr. Manish Aggarwal at Yashoda Medicity:
                </p>
              </div>
              <ul className="mt-6 space-y-3.5">
                {proc.patientProfile.map((item: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-base leading-relaxed text-foreground/90"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Frequently Asked Questions */}
          {proc.faqs && proc.faqs.length > 0 && (
            <div>
              <div className="mb-8">
                <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  Patient Inquiries &amp; Clarity
                </span>
                <h3 className="mt-2 font-display text-2xl text-foreground md:text-3xl">
                  Frequently Asked Questions
                </h3>
              </div>
              <div className="space-y-4">
                {proc.faqs.map((faq, idx) => (
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

      {/* TOPIC TRIANGLE: Condition Hub & Transparent Cost Guide Cross-Links */}
      {PROCEDURE_TOPIC_MESH[proc.slug] &&
        (() => {
          const mesh = PROCEDURE_TOPIC_MESH[proc.slug];
          return (
            <section className="px-6 py-16 bg-background border-t border-border md:px-12">
              <div className="mx-auto max-w-[1200px]">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                  <div>
                    <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                      Topic Cluster · Clinical &amp; Financial Transparency
                    </span>
                    <h3 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
                      Understand the Underlying Condition &amp; Treatment Costs
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground md:text-base max-w-2xl">
                      Comprehensive patient education connecting pathology, catheter-based
                      alternatives to bypass surgery, and transparent statutory pricing.
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Card 1: Related Clinical Condition & Symptom Hub */}
                  <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-7 sm:p-8 shadow-sm transition hover:border-primary/50 hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between text-xs font-semibold text-primary mb-3">
                        <span className="rounded-full bg-primary/10 px-3 py-1">
                          {mesh.conditionBadge}
                        </span>
                        <span className="text-muted-foreground flex items-center gap-1.5 font-medium">
                          <HeartPulse className="h-3.5 w-3.5 text-primary" /> Condition Guide
                        </span>
                      </div>

                      <h4 className="font-display text-xl sm:text-2xl font-medium text-foreground">
                        <Link
                          to="/conditions/$slug"
                          params={{ slug: mesh.conditionSlug }}
                          className="hover:text-primary transition"
                        >
                          {mesh.conditionName}
                        </Link>
                      </h4>

                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {mesh.conditionSummary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/60">
                      <Link
                        to="/conditions/$slug"
                        params={{ slug: mesh.conditionSlug }}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:underline underline-offset-4"
                      >
                        <span>Read Complete Clinical Condition Hub</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Card 2: Transparent Procedure Cost & Statutory Guidelines */}
                  <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-7 sm:p-8 shadow-sm transition hover:border-emerald-500/50 hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-3">
                        <span className="rounded-full bg-emerald-500/10 px-3 py-1">
                          Statutory NPPA Caps
                        </span>
                        <span className="text-muted-foreground flex items-center gap-1.5 font-medium">
                          <CreditCard className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />{" "}
                          Transparent Pricing
                        </span>
                      </div>

                      <h4 className="font-display text-xl sm:text-2xl font-medium text-foreground">
                        <Link
                          to="/costs/$slug"
                          params={{ slug: mesh.costSlug }}
                          className="hover:text-emerald-700 dark:hover:text-emerald-400 transition"
                        >
                          {mesh.costName}
                        </Link>
                      </h4>

                      <div className="mt-3 inline-flex items-center gap-1.5 rounded-xl bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
                        <span>Estimated Range: {mesh.costRange}</span>
                      </div>

                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {mesh.costHighlight}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/60">
                      <Link
                        to="/costs/$slug"
                        params={{ slug: mesh.costSlug }}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:underline underline-offset-4"
                      >
                        <span>Explore Statutory Cost Breakdown &amp; Room Tiers</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Patient Desks: Cashless Insurance & Second Opinion Cross-Links */}
                <div className="mt-8 rounded-3xl border border-border bg-card p-6 md:p-8 grid gap-6 md:grid-cols-2 shadow-sm">
                  <div className="space-y-2 border-b md:border-b-0 md:border-r border-border pb-5 md:pb-0 md:pr-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Cashless Mediclaim &amp; TPA
                    </span>
                    <h5 className="font-display text-lg font-medium text-foreground">
                      Planning Admission Under Insurance?
                    </h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Pre-authorization cleared under 60 minutes. Empanelled with 10+ TPAs, Star Health, HDFC ERGO, Care, plus full cashless CGHS &amp; ECHS coverage.
                    </p>
                    <div className="pt-2">
                      <Link
                        to="/insurance"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        <span>Check Cashless TPA &amp; CGHS Guidelines →</span>
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-2 md:pl-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      Unbiased Clinical Review
                    </span>
                    <h5 className="font-display text-lg font-medium text-foreground">
                      Advised Surgery or Multiple Stents?
                    </h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Upload your Angiography CD or Echo report for a frame-by-frame independent review by European Structural Heart Fellow Dr. Manish Aggarwal.
                    </p>
                    <div className="pt-2">
                      <Link
                        to="/second-opinion"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                      >
                        <span>Request Digital Angiogram Second Opinion →</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })()}

      {/* Regional Accessibility & Delhi NCR Feeder Corridors */}
      <section className="px-6 pb-20 md:px-12 md:pb-24 border-t border-border pt-16 bg-cream/30">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                Regional Access &amp; Transit
              </p>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
                Feeder Corridors for {proc.title} at Yashoda Medicity
              </h3>
              <p className="mt-2 text-sm text-muted-foreground md:text-base max-w-2xl">
                Patients and families travel from across Delhi NCR and Western UP for specialized
                procedures under Dr. Manish Aggarwal. Select your neighborhood for transit
                corridors, driving directions, and local emergency guidance:
              </p>
            </div>
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline shrink-0"
            >
              View All 25 Regional Guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {REGIONAL_HUBS.map((hub) => (
              <Link
                key={hub.slug}
                to="/locations/$slug"
                params={{ slug: hub.slug }}
                className="group rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all hover:border-primary/50 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-primary mb-2">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {hub.time}
                    </span>
                    <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px]">
                      Transit Route
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {hub.name}
                  </h4>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    Via {hub.corridor}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground/90">
                    {hub.note}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-primary group-hover:translate-x-0.5 transition-transform">
                  <span>Neighborhood Guide</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
            Discuss Your Case for {proc.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-navy-foreground/75 md:text-base">
            Same-week outpatient consultations and urgent emergency reviews at {siteConfig.hospital}
            , {siteConfig.location.split(",")[0]}. Bring your angiogram CD or echocardiography
            reports for a direct, uncompromised assessment.
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
