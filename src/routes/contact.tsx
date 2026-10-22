import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/data/site-config";
import { ClinicContactCards, AppointmentForm } from "@/components/appointment-form";
import { LocationFaqSection } from "@/components/location-faq-section";

const pageTitle = `Book Appointment with ${siteConfig.name} | ${siteConfig.hospital}, Indirapuram`;
const pageDescription = `Schedule a cardiac consultation or urgent second opinion with ${siteConfig.name} at ${siteConfig.hospital}, Indirapuram, Ghaziabad. Same-week OPD slots available. Call ${siteConfig.phone}.`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content: `book cardiologist appointment Indirapuram, Dr Manish Aggarwal contact, Yashoda Medicity cardiologist phone, heart doctor Ghaziabad OPD`,
      },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.siteUrl}/contact` },
      { property: "og:image", content: `${siteConfig.siteUrl}/images/og-doctor.jpg` },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: pageTitle },
      { property: "twitter:description", content: pageDescription },
      { property: "twitter:image", content: `${siteConfig.siteUrl}/images/og-doctor.jpg` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.siteUrl}/contact` }],
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
              name: "Book Appointment & Contact",
              item: `${siteConfig.siteUrl}/contact`,
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: pageTitle,
          description: pageDescription,
          url: `${siteConfig.siteUrl}/contact`,
          mainEntity: {
            "@type": "MedicalClinic",
            name: `${siteConfig.hospital} | Interventional Cardiology Division`,
            telephone: siteConfig.phone,
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
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="text-xs font-medium tracking-[0.25em] text-muted-foreground uppercase">
              Consultation &amp; Appointments
            </p>
            <h1 className="mx-auto mt-4 max-w-4xl font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Book Consultation with {siteConfig.name}, Interventional Cardiologist at{" "}
              <a
                href={siteConfig.hospitalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition underline decoration-primary/40 underline-offset-4"
                title="View Dr. Manish Aggarwal's Official Yashoda Medicity Profile"
              >
                {siteConfig.hospital} ↗
              </a>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              Same-week OPD appointments and urgent case reviews available at {siteConfig.hospital},{" "}
              {siteConfig.location.split(",")[0]}.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <ClinicContactCards />
            </div>

            <div
              className="rounded-3xl border border-border bg-card p-8 md:p-10 lg:col-span-3"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Location Map & Strategic High-Intent FAQs */}
      <LocationFaqSection />
    </>
  );
}
