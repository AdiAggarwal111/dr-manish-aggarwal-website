import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  Calendar,
  Phone,
  CheckCircle2,
  Shield,
  HeartHandshake,
  Sparkles,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { reviewAggregate } from "@/data/reviews";
import { PageHeroHeader } from "@/components/page-hero-header";
import { ReviewsSection } from "@/components/reviews-section";
import { AppointmentSection } from "@/components/appointment-form";

const pageTitle = `Patient Reviews & Testimonials | ${siteConfig.name}`;
const pageDescription = `Verified patient reviews and recovery stories for ${siteConfig.name}, Cardiology Director at Yashoda Medicity, Indirapuram. Rated 4.9/5 from 370+ reviews.`;

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "Dr Manish Aggarwal reviews, cardiologist patient testimonials Indirapuram, angioplasty reviews Yashoda Medicity, Vidit Aren review, heart specialist patient ratings Delhi NCR, best cardiologist reviews Ghaziabad",
      },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.siteUrl}/reviews` },
      { property: "og:image", content: `${siteConfig.siteUrl}/images/og-doctor.jpg` },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: pageTitle },
      { property: "twitter:description", content: pageDescription },
      { property: "twitter:image", content: `${siteConfig.siteUrl}/images/og-doctor.jpg` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.siteUrl}/reviews` }],
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
              name: "Patient Reviews & Testimonials",
              item: `${siteConfig.siteUrl}/reviews`,
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          "@id": `${siteConfig.siteUrl}/#physician`,
          name: siteConfig.name,
          jobTitle: siteConfig.title,
          url: `${siteConfig.siteUrl}/reviews`,
          image: `${siteConfig.siteUrl}/images/doctor-portrait.png`,
          telephone: siteConfig.phone,
          priceRange: "$$$",
          currenciesAccepted: "INR",
          paymentAccepted: [
            "Cash",
            "Credit Card",
            "Debit Card",
            "Cashless Health Insurance",
            "TPA",
            "CGHS",
            "ECHS",
          ],
          identifier: siteConfig.registration,
          medicalSpecialty: [
            "https://schema.org/CardiovascularExam",
            "Interventional Cardiology",
            "Structural Heart Disease",
          ],
          knowsAbout: [
            "Interventional Cardiology",
            "TAVI / TAVR",
            "Complex Angioplasty & Stenting",
            "Rotablation",
            "Permanent Pacemakers",
            "हृदय रोग विशेषज्ञ (Cardiologist)",
            "एंजियोप्लास्टी (Angioplasty)",
            "स्टेंट प्रत्यारोपण (Stent Placement)",
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.streetAddress,
            addressLocality: siteConfig.locality,
            addressRegion: siteConfig.region,
            postalCode: siteConfig.postalCode,
            addressCountry: siteConfig.country,
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 28.6464,
            longitude: 77.3775,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "10:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "00:00",
              closes: "23:59",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: siteConfig.rating.score,
            bestRating: "5",
            worstRating: "1",
            ratingCount: siteConfig.rating.reviewCount.replace(/[^0-9]/g, ""),
            reviewCount: siteConfig.rating.reviewCount.replace(/[^0-9]/g, ""),
          },
          review: [
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Vidit Aren",
                homeLocation: "Delhi NCR",
              },
              datePublished: "2026-03-15",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
                worstRating: "1",
              },
              reviewBody:
                "Three years of trusted care, complex case foresight, and a smooth angioplasty for my father under Dr. Manish Aggarwal.",
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Patient Family",
                homeLocation: "Muzaffarnagar, Western Uttar Pradesh",
              },
              datePublished: "2026-05-10",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
                worstRating: "1",
              },
              reviewBody:
                "Late-night emergency response from Muzaffarnagar, rapid stent placement at Yashoda Medicity, and continuous WhatsApp availability.",
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Senior Cardiac Patient & Family",
                homeLocation: "Noida, Uttar Pradesh",
              },
              datePublished: "2026-08-20",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
                worstRating: "1",
              },
              reviewBody:
                "Saved from severe complications and pericardial fluid accumulation after a botched PPI at Fortis Noida, calling Dr. Aggarwal a 'Rod of Asclepius'.",
            },
          ],
        }),
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <article className="bg-background">
      {/* Editorial Page Hero Header */}
      <section className="px-6 pt-8 pb-4 md:px-12 md:pt-10">
        <div className="mx-auto max-w-[1360px]">
          <PageHeroHeader
            backLink={{
              to: "/",
              label: "Back to Home",
            }}
            title="Patient Reviews & Verified Outcomes"
            subtitle={`Unfiltered Accounts of Trust, Foresight & Life Restored · ${siteConfig.hospital}`}
            description="Choosing a cardiologist for someone you love is among the most consequential decisions a family can make. Read genuine, unedited accounts from patients who placed their hearts in the care of Dr. Manish Aggarwal across Delhi NCR and Western Uttar Pradesh."
            badges={
              <>
                <a
                  href="https://delhimedicalcouncil.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary transition hover:bg-primary/20"
                  title="Verify registration on the Delhi Medical Council Official Portal"
                >
                  <Award className="h-3.5 w-3.5" /> DMC Reg: 26547 (Verify ↗)
                </a>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground transition hover:bg-secondary/80 hover:text-primary"
                  title="View verified 4.9★ reviews directly on Google Maps"
                >
                  ⭐ {reviewAggregate.score} Google Score ({reviewAggregate.reviewCount} Reviews ↗)
                </a>
                <a
                  href={siteConfig.hospitalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-secondary/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase text-foreground transition hover:bg-secondary hover:text-primary"
                  title="View Dr. Manish Aggarwal's Official Yashoda Medicity Profile"
                >
                  📍 {siteConfig.hospital}, Indirapuram ↗
                </a>
                <span className="rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  100% Documented Clinical Cases
                </span>
              </>
            }
          />
        </div>
      </section>

      {/* Main Reviews Showcase with Verified Photos, Summaries & Toggles */}
      {/* Independent Verification & Clinical Registries Bar */}
      <section className="px-6 pt-2 pb-6 md:px-12">
        <div className="mx-auto max-w-[1360px]">
          <div className="rounded-2xl border border-primary/20 bg-muted/30 p-5 sm:p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Independent Medical Council &amp; Public Registry Verification
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  All clinical credentials, hospital appointments, and patient review metrics are independently verifiable on public registries and official hospital directories.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary hover:text-primary shadow-sm"
                >
                  <span>Google Maps Reviews (370+) ↗</span>
                </a>
                <a
                  href={siteConfig.hospitalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary hover:text-primary shadow-sm"
                >
                  <span>Yashoda Faculty Profile ↗</span>
                </a>
                <a
                  href="https://delhimedicalcouncil.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary hover:text-primary shadow-sm"
                  title="Delhi Medical Council Registration No. 26547"
                >
                  <span>DMC Reg. #26547 ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />

      {/* Clinical Pillars of Patient Trust */}
      <section className="px-6 py-16 md:px-12 md:py-24 bg-card border-t border-b border-border/80">
        <div className="mx-auto max-w-[1360px]">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              The Architecture of Care
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground">
              Why Families Place Their Trust in Dr. Aggarwal
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Every review reflects a repeatable clinical standard: unhurried diagnostic forensic
              precision, European procedural mastery, and round-the-clock emergency dedication.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-border/70 bg-background p-8 shadow-[var(--shadow-soft)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground">
                Case Foresight &amp; Caution
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                In complex cases and high-risk anatomies, Dr. Aggarwal evaluates every risk factor,
                anatomical contingency, and safety margin beforehand. Caution gives families
                confidence.
              </p>
            </div>

            <div className="rounded-3xl border border-border/70 bg-background p-8 shadow-[var(--shadow-soft)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground">
                Radical Diagnostic Honesty
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Patients told they need open-heart bypass or multiple urgent stents receive
                unvarnished second opinions. If medical therapy or minimal intervention is safer,
                Dr. Aggarwal advocates for it unequivocally.
              </p>
            </div>

            <div className="rounded-3xl border border-border/70 bg-background p-8 shadow-[var(--shadow-soft)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground">
                24/7 Dedicated Availability
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                From answering late-night emergency transfer calls from across Western UP to
                continuous post-op WhatsApp support, care never ends when the patient leaves the
                cath lab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Patient Trust & Feeder Corridors across Western UP & Delhi NCR */}
      <section className="px-6 py-16 md:px-12 md:py-20 bg-background">
        <div className="mx-auto max-w-[1360px]">
          <div className="rounded-3xl border border-border/80 bg-cream/40 p-8 md:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>क्षेत्रीय मरीज़ों का विश्वास · Regional Patient Trust</span>
                </div>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl text-foreground font-medium">
                  A Referral Lifeline for Families Across Western UP &amp; Delhi NCR
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
                  Over 40% of Dr. Manish Aggarwal’s acute cardiac interventions and complex second
                  opinions originate from feeder districts outside immediate Ghaziabad, including{" "}
                  <strong className="text-foreground font-semibold">
                    Muzaffarnagar, Meerut, Moradabad, Bareilly, Hapur, Bulandshahr, Noida, and East
                    Delhi
                  </strong>
                  .
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>
                      <strong>Direct Express Emergency Transit:</strong> Yashoda Medicity sits
                      directly off the 14-lane Delhi-Meerut Expressway and NH-24, eliminating city
                      traffic delays for critical ambulance transfers.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>
                      <strong>Tele-Angiogram Triage:</strong> Families facing emergency stent
                      recommendations elsewhere can send angiogram CDs and reports for an immediate
                      preliminary review before initiating travel.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>
                      <strong>100% Cashless TPA &amp; Mediclaim:</strong> Complete cashless
                      assistance for all major private insurance policies and government panels
                      (CGHS, ECHS).
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-card)]">
                  <h3 className="font-display text-lg font-medium text-foreground">
                    Regional Referral &amp; Transfer Helpdesk
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    If you or a loved one is in an ICU or hospital in Western UP or Delhi NCR and
                    requires an urgent cardiology opinion or emergency transfer:
                  </p>
                  <div className="mt-5 space-y-3">
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="flex items-center justify-between rounded-xl bg-primary p-4 text-primary-foreground transition hover:opacity-95"
                    >
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5" />
                        <div>
                          <p className="text-xs uppercase tracking-wider font-semibold opacity-80">
                            24/7 Cardiac Hotline
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
                          <p className="text-sm font-medium">OPD &amp; Second Opinion Slot</p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Consultation Section */}
      <AppointmentSection />
    </article>
  );
}
