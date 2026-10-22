import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import {
  Award,
  Calendar,
  Phone,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  CreditCard,
  Building,
  Landmark,
  ArrowRight,
  Clock,
  Sparkles,
  PhoneCall,
  Info,
  HeartPulse,
} from "lucide-react";
import {
  procedureCosts,
  type CostTier,
  type CostBreakdownItem,
  type CostFactor,
} from "@/data/costs";
import { procedures } from "@/data/procedures";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";

interface CostConditionItem {
  slug: string;
  title: string;
  desc: string;
}

const COST_CONDITION_MAP: Record<string, CostConditionItem> = {
  "tavi-tavr-cost-india": {
    slug: "severe-aortic-stenosis",
    title: "Severe Aortic Stenosis & Valvular Disease",
    desc: "Understand natural life expectancy, peak aortic jet velocity (>4.0 m/s), and how pinhole TAVI avoids open-heart surgery.",
  },
  "angioplasty-cost-delhi-ncr": {
    slug: "coronary-artery-disease-calcification",
    title: "Coronary Artery Disease & Calcification",
    desc: "Understand high calcium scores (CAC > 400), chronic total occlusions (CTO), and how modern imaging guides stent placement.",
  },
  "pacemaker-implantation-cost": {
    slug: "arrhythmias-heart-block",
    title: "Arrhythmias, Complete Heart Block & Sick Sinus",
    desc: "Understand bradycardia, syncope blackouts, and clinical criteria for single vs. dual-chamber and CRT-D pacing.",
  },
};

const COST_SLUG_REDIRECTS: Record<string, string> = {
  "pacemaker-icd-crt": "pacemaker-implantation-cost",
};

export const Route = createFileRoute("/costs/$slug")({
  beforeLoad: ({ params }) => {
    const targetSlug = COST_SLUG_REDIRECTS[params.slug];
    if (targetSlug) {
      throw redirect({
        to: "/costs/$slug",
        params: { slug: targetSlug },
        statusCode: 301,
      });
    }
  },
  loader: ({ params }) => {
    const costGuide = procedureCosts.find((c) => c.slug === params.slug);
    if (!costGuide) throw notFound();
    return { costGuide };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.costGuide;
    if (!c) return { meta: [{ title: `Procedure Cost | ${siteConfig.name}` }] };
    const url = `${siteConfig.siteUrl}/costs/${c.slug}`;

    const schemas: Record<string, unknown>[] = [
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: c.procedureTitle,
        description: c.summary,
        url,
        lastReviewed: "2026-10-18",
        medicalSpecialty: "https://schema.org/Cardiovascular",
        reviewedBy: {
          "@type": "Physician",
          name: siteConfig.name,
          jobTitle: siteConfig.title,
          identifier: siteConfig.registration,
          url: `${siteConfig.siteUrl}/about`,
          medicalSpecialty: "https://schema.org/Cardiovascular",
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
            name: "Procedure Costs",
            item: `${siteConfig.siteUrl}/costs`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: c.shortTitle,
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

    const title = `${c.shortTitle} | ${siteConfig.name}`.slice(0, 60);
    const rawDesc = c.metaDescription || c.summary;
    const description =
      rawDesc.length > 155 ? rawDesc.slice(0, 152).replace(/\s+\S*$/, "") + "..." : rawDesc;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content: `${c.keywords}, ${siteConfig.name}, Yashoda Medicity cost guide`,
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
  component: CostDetailPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Cost Guide Not Found</h1>
      <Link
        to="/costs"
        className="mt-6 inline-flex rounded-full bg-navy px-5 py-2.5 text-sm text-navy-foreground transition hover:opacity-90"
      >
        View All Cost Guides
      </Link>
    </div>
  ),
});

function CostDetailPage() {
  const { costGuide } = Route.useLoaderData();

  // Find matching clinical procedure
  const clinicalProc = procedures.find((p) => p.slug === costGuide.relatedProcedureSlug);

  return (
    <article className="bg-background">
      {/* Hero Header */}
      <section className="px-6 pt-8 pb-4 md:px-12 md:pt-10">
        <div className="mx-auto max-w-[1200px]">
          <PageHeroHeader
            backLink={{ to: "/costs", label: "Back to All Cost Guides" }}
            title={costGuide.procedureTitle}
            subtitle={costGuide.heroTagline}
            description={costGuide.summary}
            badges={
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" /> NPPA Statutory Compliance
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
                <span className="rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  100% Cashless TPA
                </span>
              </>
            }
          />

          {/* E-E-A-T Clinical Authority & Transparency Badge */}
          <div className="mt-4 mb-8 flex flex-wrap items-center gap-2.5 rounded-2xl border border-border/80 bg-secondary/40 px-5 py-3 text-xs text-muted-foreground shadow-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
              <span className="font-semibold text-foreground">Verified Pricing Protocol:</span>
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
            <span className="text-foreground/80 font-medium">Last Verified: October 2026</span>
            <span className="hidden sm:inline text-border">•</span>
            <span className="inline-flex items-center gap-1 rounded bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary uppercase">
              Zero Hidden Charges Guarantee
            </span>
          </div>

          {/* Key Stats Strip */}
          <div className="mt-2 mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {costGuide.keyStats.map((st, idx) => (
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

      {/* Realistic Cost Ranges by Room Tier */}
      <section className="px-6 py-12 md:px-12 bg-cream/30 border-t border-b border-border">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Room Category Breakdown
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl text-foreground">
              Realistic Cost Ranges by Accommodation Tier
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              In Indian hospitals, package costs differ based on room category (which influences
              daily nursing and CCU bed charges). We provide transparent ranges rather than
              deceptive single-figure estimates:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {costGuide.roomTiers.map((tier: CostTier, idx: number) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm hover:border-primary/50 transition-colors"
              >
                <div>
                  <span className="text-xs font-semibold text-primary uppercase">
                    Tier {idx + 1}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-medium text-foreground">
                    {tier.roomType}
                  </h3>
                  <div className="mt-4 rounded-xl bg-secondary/70 p-3.5 border border-border/60">
                    <p className="text-[10px] uppercase font-semibold text-muted-foreground">
                      Estimated Range
                    </p>
                    <p className="font-display text-xl font-bold text-foreground mt-0.5">
                      {tier.estimatedRange}
                    </p>
                  </div>

                  <div className="mt-4 space-y-1 text-xs text-muted-foreground">
                    <p>
                      <strong>ICU Stay:</strong> {tier.icuStay}
                    </p>
                    <p>
                      <strong>Room Stay:</strong> {tier.roomStay}
                    </p>
                  </div>

                  <div className="mt-5 space-y-2 border-t border-border/60 pt-4">
                    <p className="text-[11px] font-semibold text-foreground uppercase tracking-wider">
                      Included in Package:
                    </p>
                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                      {tier.includes.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statutory NPPA Price Caps & Regulatory Details */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[900px] space-y-16">
          {/* Statutory Breakdown Box */}
          <div className="rounded-3xl border border-primary/20 bg-primary/[0.03] p-8 md:p-12">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-primary uppercase mb-2">
              <Landmark className="h-4 w-4" />
              <span>Statutory Regulatory Framework</span>
            </div>
            <h3 className="font-display text-2xl text-foreground md:text-3xl">
              {costGuide.nppaStatutoryBreakdown.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base text-pretty">
              {costGuide.nppaStatutoryBreakdown.description}
            </p>

            <div className="mt-6 space-y-4">
              {costGuide.nppaStatutoryBreakdown.statutoryCaps.map((cap, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border/80 bg-card p-5 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h4 className="font-display text-base font-semibold text-foreground">
                      {cap.component}
                    </h4>
                    <span className="font-display text-base font-bold text-primary">
                      {cap.ceilingPrice}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Regulatory Reference: {cap.nppaReference}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Where Does the Money Go? (Cost Share Breakdown) */}
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                Financial Breakdown
              </span>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl text-foreground">
                Itemized Expense Distribution
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Understand the proportionate distribution of hospital outlays for this intervention:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {costGuide.costBreakdown.map((item: CostBreakdownItem, idx: number) => (
                <div key={idx} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-semibold text-primary mb-2">
                    <span>{item.sharePercentage} of Total</span>
                  </div>
                  <h4 className="font-display text-lg font-medium text-foreground">
                    {item.category}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  {item.statutoryOrRegulatoryNote && (
                    <p className="mt-3 text-[11px] font-medium text-primary/80 border-t border-border/60 pt-2">
                      {item.statutoryOrRegulatoryNote}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Variable Cost Factors */}
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                Clinical Variables
              </span>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl text-foreground">
                Factors That Can Influence the Final Cost
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every heart is anatomically unique. Here are the three primary clinical variables
                that may alter the final billing:
              </p>
            </div>

            <div className="space-y-4">
              {costGuide.variableFactors.map((fac: CostFactor, idx: number) => (
                <div key={idx} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h4 className="font-display text-base font-semibold text-foreground">
                      {fac.factor}
                    </h4>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                      {fac.impact}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                    {fac.guidance}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 100% Cashless Insurance & TPA Guide */}
          <div className="rounded-3xl border border-border bg-cream/40 p-8 md:p-10">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Insurance Empanelment
            </span>
            <h3 className="mt-2 font-display text-2xl text-foreground md:text-3xl">
              100% Cashless Mediclaim &amp; Panel Coverage
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base text-pretty">
              {costGuide.insuranceCoverage.summary}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 text-xs text-foreground/85">
              <div className="rounded-2xl bg-card p-4 border border-border/60">
                <p className="font-semibold text-primary uppercase text-[11px]">
                  Empanelled Insurers
                </p>
                <p className="mt-1 text-muted-foreground leading-relaxed">
                  {costGuide.insuranceCoverage.acceptedInsurers.join(", ")}
                </p>
              </div>
              <div className="rounded-2xl bg-card p-4 border border-border/60">
                <p className="font-semibold text-primary uppercase text-[11px]">
                  Government Panels
                </p>
                <p className="mt-1 text-muted-foreground leading-relaxed">
                  {costGuide.insuranceCoverage.cghsEchsStatus}
                </p>
              </div>
              <div className="rounded-2xl bg-card p-4 border border-border/60">
                <p className="font-semibold text-primary uppercase text-[11px]">
                  Pre-Auth Duration
                </p>
                <p className="mt-1 text-muted-foreground leading-relaxed">
                  {costGuide.insuranceCoverage.preAuthDuration}
                </p>
              </div>
              <div className="rounded-2xl bg-card p-4 border border-border/60">
                <p className="font-semibold text-primary uppercase text-[11px]">
                  Out-of-Pocket Co-Pay
                </p>
                <p className="mt-1 text-muted-foreground leading-relaxed">
                  {costGuide.insuranceCoverage.coPayDetails}
                </p>
              </div>
            </div>
          </div>

          {/* FAQs Accordion */}
          {costGuide.faqs && costGuide.faqs.length > 0 && (
            <div>
              <div className="mb-6">
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  Financial Clarity
                </span>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl text-foreground">
                  Frequently Asked Questions on Pricing
                </h3>
              </div>
              <div className="space-y-4">
                {costGuide.faqs.map((faq, idx) => (
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

      {/* TOPIC TRIANGLE: Procedure Guide & Clinical Condition Hub Bridge */}
      <section className="px-6 py-14 bg-cream/30 md:px-12 border-t border-border">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Topic Cluster · Clinical &amp; Diagnostic Context
            </span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl text-foreground">
              Explore the Procedure Details &amp; Clinical Pathology
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
              Understand how catheter-based interventions avoid open-heart surgery, and read symptom
              guides for your diagnosis.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Card 1: Medical Procedure Guide */}
            {clinicalProc && (
              <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-7 sm:p-8 shadow-sm transition hover:border-primary/50 hover:shadow-md">
                <div>
                  <span className="text-[11px] font-semibold text-primary uppercase block mb-2">
                    Interventional Technique
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl font-medium text-foreground">
                    <Link
                      to="/procedures/$slug"
                      params={{ slug: clinicalProc.slug }}
                      className="hover:text-primary transition"
                    >
                      {clinicalProc.title}
                    </Link>
                  </h4>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {clinicalProc.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60">
                  <Link
                    to="/procedures/$slug"
                    params={{ slug: clinicalProc.slug }}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:underline underline-offset-4"
                  >
                    <span>Read Complete Procedural Protocol</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}

            {/* Card 2: Related Condition & Pathology Hub */}
            {COST_CONDITION_MAP[costGuide.slug] &&
              (() => {
                const condItem = COST_CONDITION_MAP[costGuide.slug];
                return (
                  <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-7 sm:p-8 shadow-sm transition hover:border-primary/50 hover:shadow-md">
                    <div>
                      <span className="text-[11px] font-semibold text-primary uppercase block mb-2">
                        Underlying Disease &amp; Symptoms
                      </span>
                      <h4 className="font-display text-xl sm:text-2xl font-medium text-foreground">
                        <Link
                          to="/conditions/$slug"
                          params={{ slug: condItem.slug }}
                          className="hover:text-primary transition"
                        >
                          {condItem.title}
                        </Link>
                      </h4>
                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {condItem.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border/60">
                      <Link
                        to="/conditions/$slug"
                        params={{ slug: condItem.slug }}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:underline underline-offset-4"
                      >
                        <span>Read Clinical Symptom Guide &amp; Criteria</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                );
              })()}
          </div>
        </div>
      </section>

      {/* Case Assessment & Financial Counselling CTA */}
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
            Get an Itemized Cost Estimate for Your Case
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-navy-foreground/75 md:text-base">
            Speak directly with our on-site TPA coordinators and clinical team at{" "}
            {siteConfig.hospital}, Indirapuram. Bring your diagnostic reports or angiogram CD for a
            personalized, transparent cost estimate.
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
            Registration: {siteConfig.registration} · Dedicated 24/7 TPA &amp; Cashless Desk
          </p>
        </div>
      </section>
    </article>
  );
}
