import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Award,
  Clock,
  Compass,
  MapPin,
  Navigation,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Phone,
  Activity,
  ArrowRight,
} from "lucide-react";
import { locations, directionsUrl, type LocationFAQ } from "@/data/locations";
import { siteConfig } from "@/data/site-config";
import { AppointmentSection } from "@/components/appointment-form";
import { PageHeroHeader } from "@/components/page-hero-header";

const LOCAL_PROCEDURES = [
  {
    slug: "tavi-tavr",
    title: "TAVR / TAVI (Zero Sternotomy)",
    desc: "Percutaneous aortic valve replacement under conscious sedation for senior cardiac patients. No cracked breastbone, 48-hr discharge.",
    badge: "Structural Heart",
  },
  {
    slug: "complex-coronary",
    title: "Complex Angioplasty & CTO",
    desc: "Micro-catheter crossing and recanalization for 100% chronically blocked arteries previously deemed inoperable.",
    badge: "High-Risk PCI",
  },
  {
    slug: "emergency-angioplasty",
    title: "24×7 Emergency Primary PCI",
    desc: "Dedicated round-the-clock emergency catheterization lab activation with door-to-balloon times under 90 minutes for acute heart attacks.",
    badge: "24/7 Emergency",
  },
  {
    slug: "intravascular-imaging",
    title: "Rotablation & Shockwave IVL",
    desc: "High-speed diamond burr (160,000 RPM) and sonic pressure waves to crack rock-hard calcium prior to precision drug-eluting stent placement.",
    badge: "Calcified Lesions",
  },
] as const;

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }) => {
    const loc = locations.find((l) => l.slug === params.slug);
    if (!loc) throw notFound();
    return { loc };
  },
  head: ({ loaderData }) => {
    const l = loaderData?.loc;
    if (!l) return { meta: [{ title: `Location | ${siteConfig.name}` }] };
    const rawName = l.name.includes("/") ? l.name.split("/")[0].trim() : l.name;
    const cleanName = rawName.replace("Sectors ", "Sec ").replace("Extension", "Ext");
    const title = `Cardiologist in ${cleanName} | ${siteConfig.name}`;
    const rawDesc = `Cardiologist serving ${rawName}. ${siteConfig.name} at ${siteConfig.hospital}, Indirapuram. 28+ yrs exp, 12,500+ procedures. Call ${siteConfig.phone}.`;
    const description =
      rawDesc.length > 155 ? rawDesc.slice(0, 152).replace(/\s+\S*$/, "") + "..." : rawDesc;
    const url = `${siteConfig.siteUrl}/locations/${l.slug}`;

    const schemas: Record<string, unknown>[] = [
      {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        name: `${siteConfig.hospital} | Interventional Cardiology Division (Serving ${l.name})`,
        description: `Comprehensive interventional cardiology and structural heart care for ${l.name} by ${siteConfig.name} at ${siteConfig.hospital}, Indirapuram.`,
        telephone: siteConfig.phone,
        url,
        priceRange: "$$$",
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
          latitude: 28.6433,
          longitude: 77.3752,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: `${l.name}, Delhi NCR`,
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
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: siteConfig.rating.score,
          reviewCount: "370",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Physician",
        name: siteConfig.name,
        jobTitle: siteConfig.title,
        identifier: siteConfig.registration,
        telephone: siteConfig.phone,
        url,
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
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.streetAddress,
          addressLocality: siteConfig.locality,
          addressRegion: siteConfig.region,
          postalCode: siteConfig.postalCode,
          addressCountry: siteConfig.country,
        },
        areaServed: `${l.name}, Delhi NCR`,
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
            name: "Locations",
            item: `${siteConfig.siteUrl}/locations`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: l.name,
            item: url,
          },
        ],
      },
    ];

    if (l.faqs && l.faqs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: l.faqs.map((f) => ({
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
          content: `${l.keywords}, ${siteConfig.name}, best cardiologist ${l.name}`,
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
  component: LocationPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Location not found</h1>
      <Link
        to="/"
        className="mt-6 inline-flex rounded-full bg-navy px-5 py-2.5 text-sm text-navy-foreground transition hover:opacity-90"
      >
        Go home
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

function LocationPage() {
  const { loc } = Route.useLoaderData();

  return (
    <article className="bg-background">
      {/* Location Hero Header */}
      <section className="px-6 pt-8 pb-4 md:px-12 md:pt-10">
        <div className="mx-auto max-w-[1200px]">
          <PageHeroHeader
            backLink={{
              to: "/locations",
              label: "All Locations",
            }}
            title={`Cardiology in ${loc.name}`}
            subtitle={`${loc.positioning} · ${siteConfig.hospital}`}
            description={loc.hero}
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
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/80 px-3.5 py-1.5 text-xs font-semibold text-foreground">
                  <Clock className="h-3.5 w-3.5 text-primary" /> {loc.transitTime.split("via")[0]}
                </span>
                <a
                  href={directionsUrl(loc.primaryLandmark)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary hover:text-primary"
                >
                  <Navigation className="h-3.5 w-3.5 text-primary" /> Directions (
                  {loc.primaryLandmark.split(",")[0]})
                </a>
              </>
            }
          />

          {/* Rapid Transit & Access Blueprint Bar */}
          <div className="mt-2 mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border/80 bg-card p-5 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-2 text-primary text-xs font-semibold tracking-wider uppercase">
                <Clock className="h-4 w-4" /> Transit &amp; Ambulance Window
              </div>
              <p className="mt-2 text-sm font-semibold leading-snug text-foreground md:text-base">
                {loc.transitTime}
              </p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-card p-5 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-2 text-primary text-xs font-semibold tracking-wider uppercase">
                <Compass className="h-4 w-4" /> Highway Corridor
              </div>
              <p className="mt-2 text-sm font-semibold leading-snug text-foreground md:text-base">
                {loc.corridor}
              </p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-card p-5 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-2 text-primary text-xs font-semibold tracking-wider uppercase">
                <Activity className="h-4 w-4" /> Clinical Specialization
              </div>
              <p className="mt-2 text-sm font-semibold leading-snug text-foreground md:text-base">
                {loc.demographicFocus}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Clinical Narrative */}
      <section className="px-6 pb-20 pt-2 md:px-12 md:pb-28">
        <div className="mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-12">
          {/* Left Column: Local Identity & Reassurance */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.4em] uppercase text-primary">
                {loc.tagline}
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight tracking-[-0.02em] text-foreground sm:text-4xl">
                Why {loc.name} families choose {siteConfig.name}.
              </h2>
              <p className="mt-4 text-base italic leading-relaxed text-muted-foreground md:text-lg">
                &ldquo;{loc.intro}&rdquo;
              </p>
            </div>

            {/* Familiar Neighborhood Landmarks Card */}
            <div
              className="rounded-2xl border border-border bg-card p-6"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
                    Familiar Landmarks in {loc.name}
                  </p>
                  <ul className="mt-3 grid gap-2.5 text-sm text-foreground/85">
                    {loc.landmarks.map((lm: string) => (
                      <li key={lm} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {lm}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Localized Emergency Reassurance Note */}
            <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-primary uppercase">
                    Local Emergency &amp; Reassurance Protocol
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                    {loc.reassuranceNote}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth Differentiated Narrative & EEAT */}
          <div className="space-y-7 text-base leading-relaxed text-foreground/85 lg:col-span-7 md:text-lg text-pretty">
            {loc.body.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}

            {/* EEAT Authority Pillars */}
            <div className="mt-8 grid gap-3.5 sm:grid-cols-2 pt-4 border-t border-border/80">
              {[
                "European Fellowship in Structural Heart (Budapest)",
                `${siteConfig.experienceYears} Years Clinical Mastery · ${siteConfig.proceduresCount} Procedures`,
                "24×7 Door-to-Balloon Primary Angioplasty (<90 min)",
                "Radically Honest Second Opinions (Zero Stent Quotas)",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium text-foreground/90"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Direct Hospital Contact Callout */}
            <div className="mt-8 rounded-2xl bg-secondary/60 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                  Direct Line for {loc.name} Residents
                </p>
                <p className="text-lg font-display font-medium text-foreground">
                  Call {siteConfig.phone}
                </p>
              </div>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Clinical FAQs */}
      {loc.faqs && loc.faqs.length > 0 && (
        <section className="px-6 py-16 bg-cream/40 md:px-12 border-t border-border">
          <div className="mx-auto max-w-[900px]">
            <div className="mb-8 text-center">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                Regional Patient Inquiries
              </span>
              <h3 className="mt-2 font-display text-2xl text-foreground sm:text-3xl md:text-4xl">
                Frequently Asked Questions for {loc.name} Patients
              </h3>
            </div>
            <div className="space-y-4">
              {loc.faqs.map((faq: LocationFAQ, idx: number) => (
                <details
                  key={idx}
                  className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between font-display text-base md:text-lg text-foreground">
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
        </section>
      )}

      {/* Key Cardiac Procedures Requested in this Neighborhood */}
      <section className="px-6 py-20 md:px-12 bg-background border-t border-border">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                Specialized Interventions
              </p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
                Advanced Cardiac Procedures for {loc.name} Patients
              </h2>
              <p className="mt-2 text-sm text-muted-foreground md:text-base max-w-2xl">
                Residents of {loc.name} receive direct priority access to Dr. Manish Aggarwal’s
                quaternary cardiac suite, 24/7 emergency STEMI cath lab, and structural heart care
                at Yashoda Medicity:
              </p>
            </div>
            <Link
              to="/procedures"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline shrink-0"
            >
              Browse All 9 Clinical Protocols <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LOCAL_PROCEDURES.map((proc) => (
              <Link
                key={proc.slug}
                to="/procedures/$slug"
                params={{ slug: proc.slug }}
                className="group flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition hover:border-primary/50 hover:shadow-md"
              >
                <div>
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                    {proc.badge}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {proc.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{proc.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-primary group-hover:translate-x-0.5 transition-transform">
                  <span>View Full Protocol</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Directions Grid Band */}
      <section className="px-6 py-20 md:px-12 border-t border-border">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase text-primary">
            Get Directions
          </p>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
            Drive to{" "}
            <a
              href={siteConfig.hospitalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition underline decoration-primary/30 underline-offset-8"
              title="View Dr. Manish Aggarwal's Official Yashoda Medicity Profile"
            >
              {siteConfig.hospital} ↗
            </a>{" "}
            from any {loc.name} landmark.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base max-w-2xl">
            Click any local landmark below to launch instant GPS navigation directly to our
            emergency and OPD entrance at Yashoda Medicity, Indirapuram:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {loc.landmarks.map((lm: string) => (
              <a
                key={lm}
                href={directionsUrl(lm)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-2xl border border-border bg-card p-5 transition hover:border-primary hover:shadow-[var(--shadow-card)]"
              >
                <Navigation className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                    From
                  </p>
                  <p className="mt-1 font-display text-base text-foreground group-hover:text-primary transition-colors">
                    {lm}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <AppointmentSection
        heading={`Book your ${loc.name} consultation with ${siteConfig.name}`}
        sub={`Same-week consultations and emergency reviews for residents of ${loc.name} and surrounding Delhi NCR communities at ${siteConfig.hospital}, Indirapuram.`}
      />
    </article>
  );
}
