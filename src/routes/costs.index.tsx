import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Clock,
  Landmark,
  Building,
  PhoneCall,
  Calendar,
  Sparkles,
} from "lucide-react";
import { procedureCosts } from "@/data/costs";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";
import { AppointmentSection } from "@/components/appointment-form";

const pageTitle = `Procedure Costs & Packages | ${siteConfig.name}`;
const pageDescription = `Transparent costs for TAVI, Angioplasty & Pacemakers at Yashoda Medicity, Indirapuram. Statutory NPPA price caps & 100% cashless insurance empanelment.`;
const pageUrl = `${siteConfig.siteUrl}/costs`;

export const Route = createFileRoute("/costs/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "cardiac surgery cost Delhi NCR, TAVI cost India, angioplasty cost Ghaziabad, pacemaker price Indirapuram, heart stent NPPA price cap, cashless mediclaim Yashoda Medicity, Dr Manish Aggarwal",
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
              name: "Procedure Costs & Financial Transparency",
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
            numberOfItems: procedureCosts.length,
            itemListElement: procedureCosts.map((c, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              name: c.procedureTitle,
              url: `${siteConfig.siteUrl}/costs/${c.slug}`,
              description: c.summary,
            })),
          },
        }),
      },
    ],
  }),
  component: CostsIndexPage,
});

function CostsIndexPage() {
  return (
    <article className="bg-background">
      {/* Editorial Page Hero */}
      <section className="px-6 pt-8 pb-4 md:px-12 md:pt-10">
        <div className="mx-auto max-w-[1360px]">
          <PageHeroHeader
            backLink={{ to: "/", label: "Back to Home" }}
            title="Procedure Costs & Financial Transparency"
            subtitle={`Realistic Cost Ranges, Statutory NPPA Caps & Cashless Insurance · ${siteConfig.hospital}`}
            description="Medical financial anxiety should never compound the stress of a cardiac diagnosis. We believe patients and families deserve upfront, realistic price ranges based on room tiers, hardware specifications, and government NPPA statutory price caps without hidden surgical markups."
            badges={
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" /> NPPA Statutory Price Capped
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
                  100% Cashless TPA Empanelled
                </span>
              </>
            }
          />
        </div>
      </section>

      {/* Main Cost Guides Cards */}
      <section className="px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-8 lg:grid-cols-3">
            {procedureCosts.map((guide) => (
              <div
                key={guide.slug}
                className="group flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-8 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-card)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {guide.shortTitle}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">2026 Updated</span>
                  </div>

                  <h2 className="font-display text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                    <Link to="/costs/$slug" params={{ slug: guide.slug }}>
                      {guide.procedureTitle.split("(")[0].trim()}
                    </Link>
                  </h2>
                  <p className="mt-1 text-xs font-semibold text-primary">{guide.heroTagline}</p>

                  {/* Highlighted Price Range Box */}
                  <div className="mt-6 rounded-2xl bg-secondary/60 p-4 border border-border/60">
                    <p className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                      Realistic Cost Range
                    </p>
                    <p className="mt-1 font-display text-2xl font-bold text-foreground">
                      {guide.overallPriceRange}
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground leading-snug">
                      {guide.statutoryHighlight}
                    </p>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                    {guide.summary}
                  </p>

                  {/* Highlights Grid */}
                  <div className="mt-6 grid grid-cols-2 gap-2.5 pt-4 border-t border-border/60">
                    {guide.keyStats.slice(0, 4).map((st, i) => (
                      <div
                        key={i}
                        className="rounded-xl bg-background p-2.5 border border-border/60"
                      >
                        <p className="font-display text-sm font-semibold text-foreground">
                          {st.value}
                        </p>
                        <p className="text-[10px] text-muted-foreground">{st.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-border/80 flex items-center justify-between">
                  <Link
                    to="/costs/$slug"
                    params={{ slug: guide.slug }}
                    className="inline-flex items-center gap-2 font-display text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Room Tiers &amp; Statutory Breakdown</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statutory NPPA Price Caps & Financial Integrity Band */}
      <section className="px-6 py-16 bg-cream/40 md:px-12 border-t border-b border-border">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                <Landmark className="h-3.5 w-3.5" />
                <span>Statutory Government Rate Protection</span>
              </div>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl text-foreground font-medium">
                NPPA Price Caps: How India Protects Cardiac Patients
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                In 2017, the National Pharmaceutical Pricing Authority (NPPA), Ministry of Chemicals
                and Fertilizers, Government of India, capped the prices of coronary stents to
                protect families from catastrophic out-of-pocket health expenditure.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 text-sm text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    <strong>Drug-Eluting Stents Capped at ₹38,260 (+ GST):</strong> Every US-FDA and
                    CE-approved drug-eluting stent (DES) is billed strictly under the statutory
                    price ceiling across all room categories.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    <strong>Bare Metal Stents Capped at ₹10,509 (+ GST):</strong> Absolute statutory
                    compliance with zero markup on stent hardware.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    <strong>Pre-Admission Itemized Transparency:</strong> Patients receive a written
                    cost estimate itemizing cath lab time, hardware, and expected room stay before
                    any procedure is scheduled.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-card)]">
                <h4 className="font-display text-lg font-medium text-foreground">
                  Need a Financial Estimate for Your Case?
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Our on-site TPA coordinators and financial counsellors can verify your health
                  insurance policy, check room rent caps, and calculate your exact out-of-pocket
                  expenditure within 2 hours.
                </p>
                <div className="mt-6 space-y-3">
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="flex items-center justify-between rounded-xl bg-primary p-4 text-primary-foreground transition hover:opacity-95"
                  >
                    <div className="flex items-center gap-3">
                      <PhoneCall className="h-5 w-5" />
                      <div>
                        <p className="text-xs uppercase tracking-wider font-semibold opacity-80">
                          24/7 TPA Desk
                        </p>
                        <p className="text-sm font-semibold">{siteConfig.phone}</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    to="/contact"
                    className="flex items-center justify-between rounded-xl border border-border bg-background p-4 text-foreground transition hover:border-primary/40"
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                          Book Consultation
                        </p>
                        <p className="text-sm font-medium">OPD &amp; Financial Review</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Consultation Section */}
      <AppointmentSection
        heading="Consult Dr. Manish Aggarwal at Yashoda Medicity"
        sub="Bring your recent diagnostic reports or angiogram CD for a transparent clinical review and customized cost estimate at Yashoda Medicity, Indirapuram."
      />
    </article>
  );
}
