import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HeartPulse,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Activity,
  Sparkles,
  ChevronRight,
  Clock,
  PhoneCall,
  Calendar,
} from "lucide-react";
import { conditions } from "@/data/conditions";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";
import { AppointmentSection } from "@/components/appointment-form";

const pageTitle = `Heart Conditions & Symptoms Library — Dr. Manish Aggarwal | Yashoda Medicity`;
const pageDescription = `Clinical patient guides to 14 complex heart conditions: Left Main disease, severe aortic stenosis (TAVI), MitraClip for mitral regurgitation, heart failure (LVEF 30-35%), resistant hypertension (RDN), carotid stenting, aortic aneurysms (TEVAR), and adult congenital heart defects by Dr. Manish Aggarwal at Yashoda Medicity, Indirapuram.`;
const pageUrl = `${siteConfig.siteUrl}/conditions`;

export const Route = createFileRoute("/conditions/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "heart conditions symptoms, left main coronary artery disease, MitraClip India, severe aortic stenosis TAVI, heart failure CRT-D low EF, renal denervation hypertension, carotid stenting stroke prevention, TEVAR aortic aneurysm, adult ASD device closure, in-stent restenosis DCB, Dr Manish Aggarwal Yashoda Medicity",
      },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: `${siteConfig.siteUrl}/images/og-doctor.jpg` },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: pageTitle },
      { property: "twitter:description", content: pageDescription },
      { property: "twitter:image", content: `${siteConfig.siteUrl}/images/og-doctor.jpg` },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
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
              name: "Conditions & Symptoms Library",
              item: pageUrl,
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: pageTitle,
          description: pageDescription,
          url: pageUrl,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: conditions.length,
            itemListElement: conditions.map((c, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              name: c.title,
              url: `${siteConfig.siteUrl}/conditions/${c.slug}`,
              description: c.summary,
            })),
          },
        }),
      },
    ],
  }),
  component: ConditionsIndexPage,
});

function ConditionsIndexPage() {
  return (
    <article className="bg-background">
      {/* Editorial Page Hero */}
      <section className="px-6 pt-8 pb-4 md:px-12 md:pt-10">
        <div className="mx-auto max-w-[1360px]">
          <PageHeroHeader
            backLink={{ to: "/", label: "Back to Home" }}
            title="Heart Conditions & Symptoms Library"
            subtitle={`Evidence-Based Forensic Guidance · Authored by ${siteConfig.name}`}
            description="When cardiac symptoms arise or an alarming diagnosis is delivered, families need clear, unvarnished clinical truth. Explore in-depth guides covering disease mechanisms, surgical vs. non-surgical survival outcomes, and when urgent intervention is necessary."
            badges={
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" /> ESC &amp; ACC Guideline Aligned
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
                  Director's Review
                </span>
              </>
            }
          />
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-8 md:grid-cols-2">
            {conditions.map((cond) => (
              <div
                key={cond.slug}
                className="group flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-8 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-card)]"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {cond.heroBadge.split("·")[0].trim()}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" /> Updated Oct 2026
                    </span>
                  </div>

                  <h2 className="font-display text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                    <Link to="/conditions/$slug" params={{ slug: cond.slug }}>
                      {cond.title}
                    </Link>
                  </h2>
                  <p className="mt-1 text-xs font-semibold text-primary">{cond.subtitle}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {cond.summary}
                  </p>

                  {/* Key Stats Pills */}
                  <div className="mt-6 grid grid-cols-2 gap-3 pt-4 border-t border-border/60">
                    {cond.keyStats.slice(0, 2).map((st, i) => (
                      <div key={i} className="rounded-2xl bg-secondary/50 p-3">
                        <p className="font-display text-base font-semibold text-foreground">
                          {st.value}
                        </p>
                        <p className="text-[11px] text-muted-foreground">{st.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Hallmark Symptoms */}
                  <div className="mt-5 space-y-2">
                    <p className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                      Hallmark Symptoms
                    </p>
                    <ul className="space-y-1.5 text-xs text-foreground/80">
                      {cond.symptoms.slice(0, 3).map((sym, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span>{sym.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-border/80 flex items-center justify-between">
                  <Link
                    to="/conditions/$slug"
                    params={{ slug: cond.slug }}
                    className="inline-flex items-center gap-2 font-display text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Full Clinical Protocol &amp; FAQs</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Volume Patient Inquiry Callout Banner */}
      <section className="px-6 py-16 bg-cream/40 md:px-12 border-t border-b border-border">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Immediate Patient Clarity
            </span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
              Frequently Researched Cardiac Questions
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Direct clinical answers from Dr. Manish Aggarwal on critical cardiac thresholds and
              emergency indicators.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="text-xs font-semibold text-primary uppercase">Emergency Triage</span>
              <h4 className="mt-2 font-display text-base font-semibold text-foreground">
                Left Side Chest Pain Radiating to Arm
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Classic sign of coronary ischemia sharing dermatomal pathways (C7–T4). If sustained
                &gt;10 minutes with sweating, proceed immediately to the nearest 24/7 cath lab.
              </p>
              <Link
                to="/conditions/$slug"
                params={{ slug: "heart-attack-stemi-nstemi" }}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                Heart Attack Guide <ChevronRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="text-xs font-semibold text-primary uppercase">
                Diagnostic Reading
              </span>
              <h4 className="mt-2 font-display text-base font-semibold text-foreground">
                How to Read an Angiogram (70% vs. 90%)
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Blockages between 50%–70% are intermediate and require FFR/RFR pressure testing
                before stenting. Never rush into stenting non-ischemic blockages.
              </p>
              <Link
                to="/conditions/$slug"
                params={{ slug: "coronary-artery-disease-calcification" }}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                CAD &amp; CTO Guide <ChevronRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="text-xs font-semibold text-primary uppercase">
                Geriatric Structural
              </span>
              <h4 className="mt-2 font-display text-base font-semibold text-foreground">
                Severe Aortic Stenosis Survival
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Untreated severe aortic stenosis carries a 50% 2-year mortality once symptomatic.
                Modern pinhole TAVI restores normal life expectancy without chest surgery.
              </p>
              <Link
                to="/conditions/$slug"
                params={{ slug: "severe-aortic-stenosis" }}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                Aortic Valve Guide <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Consultation Section */}
      <AppointmentSection
        heading="Discuss Your Diagnosis with Dr. Manish Aggarwal"
        sub="Bring your 2D Echocardiogram, Angiogram CD, or Holter reports for a direct, unpressured clinical assessment at Yashoda Medicity, Indirapuram."
      />
    </article>
  );
}
