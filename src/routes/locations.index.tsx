import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, ArrowRight, ShieldCheck, Compass, HeartPulse } from "lucide-react";
import { locations } from "@/data/locations";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";
import { AppointmentSection } from "@/components/appointment-form";

const pageTitle = `Cardiology Clinics & Regional Locations | ${siteConfig.name} | ${siteConfig.hospital}`;
const pageDescription = `Explore ${siteConfig.name}'s 25 interventional cardiology and structural heart coverage zones across Indirapuram, Vaishali, Vasundhara, Noida, Greater Noida, East Delhi, and Western UP. Rapid door-to-balloon emergency access at ${siteConfig.hospital}.`;
const pageUrl = `${siteConfig.siteUrl}/locations`;

// Group the 25 micro-markets into clear geographic clusters
const ZONES = [
  {
    name: "Indirapuram & Ghaziabad Arterials",
    description:
      "Immediate township and arterial neighborhoods with 3 to 8-minute emergency transit.",
    slugs: [
      "indirapuram",
      "vaishali",
      "vasundhara",
      "kaushambi",
      "sahibabad",
      "pratap-vihar",
      "mohan-nagar",
      "vasundhara-extension",
    ],
  },
  {
    name: "Noida & Greater Noida West",
    description:
      "Direct connectivity via Model Town underpass, Electronic City corridor, and FNG expressway.",
    slugs: [
      "noida-sector-62",
      "noida-sectors-121-122",
      "noida-sector-50",
      "noida-sector-18",
      "greater-noida-west",
    ],
  },
  {
    name: "East Delhi & Transit Hubs",
    description: "Fast 12 to 18-minute signal-free access via the 14-lane Delhi-Meerut Expressway.",
    slugs: ["mayur-vihar", "patparganj", "anand-vihar", "preet-vihar", "shahdara"],
  },
  {
    name: "Western UP & Expressway Corridors",
    description:
      "Rapid ambulance and referral corridors connecting Western UP directly to Yashoda Medicity.",
    slugs: [
      "crossing-republik",
      "raj-nagar-extension",
      "govindpuram",
      "wave-city",
      "lal-kuan",
      "loni",
      "modinagar",
    ],
  },
] as const;

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "cardiologist Delhi NCR locations, heart clinic Indirapuram, cardiologist Noida, cardiologist Vaishali, best heart specialist Ghaziabad, Dr Manish Aggarwal Yashoda Medicity",
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
              name: "Cardiology Regional Locations",
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
            numberOfItems: locations.length,
            itemListElement: locations.map((loc, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              name: `Dr. Manish Aggarwal Cardiology | ${loc.name}`,
              url: `${siteConfig.siteUrl}/locations/${loc.slug}`,
              description: loc.intro,
            })),
          },
        }),
      },
    ],
  }),
  component: LocationsDirectoryPage,
});

function LocationsDirectoryPage() {
  const locationMap = new Map(locations.map((loc) => [loc.slug, loc]));

  return (
    <>
      <section className="px-6 pb-20 pt-8 md:px-12 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-[1400px]">
          {/* Header */}
          <PageHeroHeader
            title="Regional Coverage &amp; Neighborhood Hubs"
            subtitle={`Direct Access to European-Standard Cardiology · ${siteConfig.hospital}`}
            description="Explore transit times, signal-free expressway corridors, and hyper-localized cardiac care options across 25 residential and commercial micro-markets in Delhi NCR."
            badges={
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <MapPin className="h-3.5 w-3.5" /> 25 Regional Coverage Zones
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
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground">
                  <HeartPulse className="h-3.5 w-3.5 text-primary" /> 24/7 Cath Lab Mobilization
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold text-foreground/80">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> Door-to-Balloon &lt; 90
                  Mins
                </span>
              </>
            }
          />

          {/* Grouped Zones Directory */}
          <div className="mt-14 space-y-16">
            {ZONES.map((zone) => {
              const zoneLocations = zone.slugs
                .map((slug) => locationMap.get(slug))
                .filter((loc): loc is NonNullable<typeof loc> => loc !== undefined);

              return (
                <div key={zone.name} className="space-y-6">
                  {/* Zone Header */}
                  <div className="border-b border-border/70 pb-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                      <Compass className="h-4 w-4" />
                      <span>Regional Cluster</span>
                    </div>
                    <h2 className="mt-1 font-display text-2xl font-medium text-foreground sm:text-3xl">
                      {zone.name}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">{zone.description}</p>
                  </div>

                  {/* Location Cards Grid */}
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {zoneLocations.map((loc) => (
                      <Link
                        key={loc.slug}
                        to="/locations/$slug"
                        params={{ slug: loc.slug }}
                        className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-card)]"
                        style={{ boxShadow: "var(--shadow-soft)" }}
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                              {loc.name}
                            </h3>
                            <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                              {loc.positioning.split(" ")[0]}
                            </span>
                          </div>

                          <p className="mt-1 text-xs font-semibold text-primary/90">
                            {loc.tagline}
                          </p>

                          <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
                            <span className="truncate">
                              {loc.transitTime.split("via")[0].trim()}
                            </span>
                          </div>

                          <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                            {loc.intro}
                          </p>
                        </div>

                        <div className="mt-5 border-t border-border/60 pt-3 flex items-center justify-between text-xs font-semibold text-foreground/80 group-hover:text-primary transition-colors">
                          <span>View Route &amp; Clinic Care</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Module */}
      <AppointmentSection
        heading="Book Consultation from Any Neighborhood"
        sub="Priority same-week appointments and direct ambulance routing to Yashoda Medicity, Indirapuram."
      />
    </>
  );
}
