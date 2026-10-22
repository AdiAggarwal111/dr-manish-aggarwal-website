import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, MapPin, Award } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { CareerTimeline, DirectorNarrative } from "@/components/timeline-section";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { PageHeroHeader } from "@/components/page-hero-header";

const pageTitle = `About ${siteConfig.name} | Interventional Cardiologist & Structural Heart Specialist at ${siteConfig.hospital}`;
const pageDescription = `Learn about ${siteConfig.name}, Director of Interventional Cardiology & Structural Heart at ${siteConfig.hospital}, Indirapuram. 28 years of clinical mastery, ${siteConfig.proceduresCount} cardiac procedures, European structural heart fellowship in Budapest.`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "about Dr Manish Aggarwal, interventional cardiologist Delhi NCR, structural heart specialist Indirapuram, TAVR Budapest fellowship, CTO rotablation, Yashoda Medicity cardiology director",
      },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${siteConfig.siteUrl}/about` },
      { property: "og:image", content: `${siteConfig.siteUrl}/images/og-doctor.jpg` },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: pageTitle },
      { property: "twitter:description", content: pageDescription },
      { property: "twitter:image", content: `${siteConfig.siteUrl}/images/og-doctor.jpg` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.siteUrl}/about` }],
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
              name: "About Dr. Manish Aggarwal",
              item: `${siteConfig.siteUrl}/about`,
            },
          ],
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useScrollReveal();

  return (
    <section className="px-6 pb-20 pt-8 md:px-12 md:pt-10 md:pb-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Clean, Horizontal Two-Line Hero Header */}
        <PageHeroHeader
          title={siteConfig.name}
          subtitle={`Director of Interventional Cardiology & Structural Heart Specialist · ${siteConfig.hospital}`}
          description={`${siteConfig.experienceYears} years of clinical excellence, over ${siteConfig.proceduresCount} successful cardiac procedures, and European fellowship training in non-surgical valve replacements across Delhi NCR.`}
          badges={
            <>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                <Award className="h-3.5 w-3.5" /> Registration: {siteConfig.registration}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground">
                {siteConfig.credentials}
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

        {/* Split Canvas: Pedigree Timeline & Director's Narrative */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 lg:divide-x lg:divide-border">
          {/* LEFT: Pedigree & Career Timeline */}
          <aside className="lg:col-span-5 xl:col-span-4">
            <CareerTimeline isSticky />
          </aside>

          {/* RIGHT: Narrative & Direct Case CTA */}
          <div className="lg:col-span-7 xl:col-span-8 lg:pl-14">
            <DirectorNarrative />

            {/* Consultation CTA Card */}
            <div
              className="mt-16 rounded-3xl border border-border bg-card p-8 md:p-10"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3 className="font-display text-2xl md:text-3xl">Discuss your case directly.</h3>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Same-week consultations at {siteConfig.hospital},{" "}
                {siteConfig.location.split(",")[0]}. Bring your reports and leave with a clear,
                verified treatment plan.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-navy-foreground transition hover:opacity-90"
                >
                  <Calendar className="h-4 w-4" /> Book Appointment
                </Link>
                <a
                  href={siteConfig.hospitalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-secondary"
                >
                  <MapPin className="h-4 w-4" /> Official Yashoda Medicity Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
