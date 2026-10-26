import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar } from "lucide-react";
import { procedures } from "@/data/procedures";
import { siteConfig } from "@/data/site-config";
import { ProcedureCard } from "@/components/procedure-card";
import { PageHeroHeader } from "@/components/page-hero-header";

const pageTitle = `Cardiac Procedures & Angioplasty · Dr. Manish Aggarwal`;
const pageDescription = `Advanced interventional procedures at Yashoda Medicity by Dr. Manish Aggarwal: Angiography, Stenting, TAVR, Rotablation, Pacemakers. Cashless CGHS/TPA.`;

export const Route = createFileRoute("/procedures/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "cardiac procedures Delhi NCR, TAVR Delhi, MitraClip India, primary angioplasty Ghaziabad, Dr Manish Aggarwal, Yashoda Medicity cath lab, rotablation cardiologist",
      },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.siteUrl}/procedures` },
      { property: "og:image", content: `${siteConfig.siteUrl}/images/og-doctor.jpg` },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: pageTitle },
      { property: "twitter:description", content: pageDescription },
      { property: "twitter:image", content: `${siteConfig.siteUrl}/images/og-doctor.jpg` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.siteUrl}/procedures` }],
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
              name: "Specialised Procedures",
              item: `${siteConfig.siteUrl}/procedures`,
            },
          ],
        }),
      },
    ],
  }),
  component: ProceduresPage,
});

function ProceduresPage() {
  return (
    <section className="px-6 pb-20 pt-8 md:px-12 md:pt-10 md:pb-24">
      <div className="mx-auto max-w-[1400px]">
        <PageHeroHeader
          title="Specialised Cardiac Procedures"
          subtitle={`Interventional & Structural Heart Care · ${siteConfig.hospital}`}
          description={`Each procedure performed with European-trained precision and latest 3D mapping and intravascular imaging by ${siteConfig.name} at ${siteConfig.hospital}, ${siteConfig.location.split(",")[0]}.`}
          badges={
            <>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                {procedures.length} Advanced Procedures
              </span>
              <a
                href={siteConfig.hospitalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground transition hover:bg-secondary/80 hover:text-primary"
                title="View Dr. Manish Aggarwal's Official Yashoda Medicity Profile"
              >
                Cath Lab: {siteConfig.hospital} ↗
              </a>
            </>
          }
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {procedures.map((p) => (
            <ProcedureCard key={p.slug} procedure={p} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-navy-foreground transition hover:opacity-90"
          >
            <Calendar className="h-4 w-4" /> Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
