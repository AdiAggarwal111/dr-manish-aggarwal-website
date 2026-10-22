import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Layers,
  MapPin,
  Microscope,
  Phone,
  Shield,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import hospitalExteriorAvif from "@/assets/yashoda-medicity-hero.avif";
import hospitalExteriorWebp from "@/assets/yashoda-medicity-hero.webp";
import hospitalExteriorJpg from "@/assets/yashoda-medicity-hero.jpg";

import cathLabSuiteAvif from "@/assets/cath-lab-suite.avif";
import cathLabSuiteWebp from "@/assets/cath-lab-suite.webp";
import cathLabSuiteJpg from "@/assets/cath-lab-suite.jpg";
import { facilityCapabilities, facilityStats, facilityFeatures } from "@/data/facility";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";
import { AppointmentSection } from "@/components/appointment-form";
import { InsuranceTpaSection } from "@/components/insurance-tpa-section";

const pageTitle = `Hospital Facility & Cath Labs | ${siteConfig.name}`;
const pageDescription = `Yashoda Medicity Indirapuram 1,200-bed hospital: hybrid cath labs, IVUS/OCT imaging, dedicated cardiac ICUs & 100% cashless TPA mediclaim empanelment.`;

export const Route = createFileRoute("/facility")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "Yashoda Medicity Indirapuram, Dr Manish Aggarwal cath lab, hybrid catheterization lab Delhi NCR, 1200 bed hospital Ghaziabad, JCI accredited cardiology Delhi NCR, cashless cardiac insurance Yashoda Medicity, TPA desk Indirapuram, CGHS empanelled cardiologist Ghaziabad, Star Health angioplasty claim, ECHS heart hospital Delhi NCR",
      },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.siteUrl}/facility` },
      { property: "og:image", content: `${siteConfig.siteUrl}/images/yashoda-medicity-hero.jpg` },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: pageTitle },
      { property: "twitter:description", content: pageDescription },
      {
        property: "twitter:image",
        content: `${siteConfig.siteUrl}/images/yashoda-medicity-hero.jpg`,
      },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.siteUrl}/facility` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Hospital", "MedicalClinic"],
          name: `${siteConfig.hospital} | Interventional Cardiology`,
          description: pageDescription,
          url: `${siteConfig.siteUrl}/facility`,
          telephone: siteConfig.phone,
          paymentAccepted: [
            "Cash",
            "Credit Card",
            "Debit Card",
            "Cashless Health Insurance",
            "TPA",
            "CGHS",
            "ECHS",
          ],
          currenciesAccepted: "INR",
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
          medicalSpecialty: [
            "https://schema.org/CardiovascularExam",
            "Interventional Cardiology",
            "Structural Heart",
          ],
        }),
      },
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
              name: "The Facility",
              item: `${siteConfig.siteUrl}/facility`,
            },
          ],
        }),
      },
    ],
  }),
  component: FacilityPage,
});

const FEATURE_ICONS: Record<string, typeof Building2> = {
  "Institutional Scale": Building2,
  "Global Standards": Shield,
  "Interventional Robotics": Layers,
  "Critical Care": HeartHandshake,
  "Intravascular Imaging": Microscope,
  "Patient Experience": Sparkles,
};

function FacilityPage() {
  return (
    <article className="bg-background">
      {/* Hero Header */}
      <section className="px-6 pt-8 pb-4 md:px-12 md:pt-10">
        <div className="mx-auto max-w-[1360px]">
          <PageHeroHeader
            backLink={{
              to: "/",
              label: "Back to Home",
            }}
            title="The Flagship Facility at Yashoda Medicity"
            subtitle={`1,200-Bed Quaternary Campus & Advanced Hybrid Cath Labs · ${siteConfig.hospital}`}
            description="A multi-crore greenfield medical landmark anchored in Indirapuram, Ghaziabad, engineered to deliver European-standard structural heart interventions, 24/7 primary angioplasty, and millimetric surgical precision under elite safety standards."
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
                >
                  📍 {siteConfig.hospital}, Indirapuram ↗
                </a>
                <span className="rounded-full bg-secondary/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase text-foreground">
                  1,200-Bed Quaternary Infrastructure
                </span>
                <span className="rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  NABH &amp; JCI Accredited
                </span>
              </>
            }
          />

          {/* Quick Badges Strip */}
          <div className="mt-2 mb-12 flex flex-wrap items-center gap-2.5">
            {facilityFeatures.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card px-4 py-1.5 text-xs font-medium text-foreground shadow-[var(--shadow-soft)]"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Showcase Section */}
      <section className="px-6 pb-20 pt-2 md:px-12 md:pb-28">
        <div className="mx-auto max-w-[1360px] space-y-20 lg:space-y-28">
          {/* Card 1: Architectural Campus Landmark */}
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className="lg:col-span-7">
              <figure className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-[var(--shadow-card)] aspect-[16/10]">
                <picture>
                  <source
                    type="image/avif"
                    srcSet={`${hospitalExteriorAvif} 1024w`}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  <source
                    type="image/webp"
                    srcSet={`${hospitalExteriorWebp} 1024w`}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  <img
                    src={hospitalExteriorJpg}
                    alt="Flagship greenfield hospital building of Yashoda Medicity in Indirapuram, Ghaziabad"
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={571}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </picture>
                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <figcaption className="hidden md:block absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    <Building2 className="h-3.5 w-3.5" /> Flagship Greenfield Medical Landmark
                  </span>
                  <p className="mt-2 text-sm font-medium text-white/95 sm:text-base">
                    Inaugurated by the President of India, Smt. Droupadi Murmu · Indirapuram, Delhi
                    NCR.
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-primary uppercase">
                <Shield className="h-4 w-4" /> Quaternary Campus Scale
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-tight text-foreground">
                A 1,200-Bed Medical Landmark in Indirapuram
              </h2>
              <p className="text-base leading-relaxed text-foreground/85 md:text-lg">
                Yashoda Medicity is not merely a hospital; it is a multi-crore quaternary healthcare
                ecosystem built to establish new global benchmarks for cardiovascular medicine in
                North India.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Anchored strategically in Indirapuram with direct connectivity to the Delhi-Meerut
                Expressway and Hindon Elevated Road, the campus integrates 1,200 inpatient beds,
                full NABH and JCI accreditation, on-site cardiothoracic operating theatres,
                multi-slice CT angiography, and dedicated private suites.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <a
                  href={siteConfig.hospitalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                >
                  Visit Official Yashoda Medicity Profile <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Advanced Cath Lab Technology */}
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-primary uppercase">
                <Microscope className="h-4 w-4" /> Hybrid Cath Lab &amp; Robotics
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-tight text-foreground">
                Multi-Crore Infrastructure Built for Structural Precision
              </h2>
              <p className="text-base leading-relaxed text-foreground/85 md:text-lg">
                Complex structural heart interventions and chronic coronary occlusions demand
                technological superiority. Under Dr. Manish Aggarwal, our catheterization laboratory
                operates as a beating-heart surgical suite.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Featuring ceiling-suspended robotic C-arms, zero-latency digital flat-panel
                detectors, and laminar positive-pressure air filtration, the suite allows Dr.
                Aggarwal to perform non-surgical{" "}
                <strong className="font-medium text-foreground">TAVI/TAVR</strong>, percutaneous{" "}
                <strong className="font-medium text-foreground">MitraClip</strong>, and 160,000 RPM
                diamond-burr <strong className="font-medium text-foreground">rotablation</strong>{" "}
                under maximum clinical safety.
              </p>
              <ul className="space-y-3 pt-1">
                {[
                  "10-Micron Near-Infrared Optical Coherence Tomography (OCT)",
                  "High-Definition 360° Intravascular Ultrasound (IVUS)",
                  "Dedicated 24/7 Cath Lab Mobilization with <90 Min Door-to-Balloon",
                  "Intra-Aortic Balloon Pump (IABP) and ECMO Hemodynamic Backup",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <figure className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-[var(--shadow-card)] aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11]">
                <picture>
                  <source
                    type="image/avif"
                    srcSet={`${cathLabSuiteAvif} 768w`}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  <source
                    type="image/webp"
                    srcSet={`${cathLabSuiteWebp} 768w`}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  <img
                    src={cathLabSuiteJpg}
                    alt="Advanced catheterization laboratory equipment with robotic C-arm and surgical lighting at Yashoda Medicity"
                    loading="lazy"
                    decoding="async"
                    width={768}
                    height={1024}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </picture>
                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent" />
                <figcaption className="hidden md:block absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    <Layers className="h-3.5 w-3.5" /> High-Definition Robotic Suite
                  </span>
                  <p className="mt-2 text-sm font-medium text-white/95 sm:text-base">
                    NABL-accredited cath lab suite configured for beating-heart structural valve
                    repairs and complex coronary interventions.
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* 4-Stat Metric Strip */}
        <div className="mx-auto mt-24 max-w-[1360px] rounded-3xl border border-border/80 bg-card p-8 shadow-[var(--shadow-soft)] md:p-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {facilityStats.map((stat, idx) => (
              <div key={idx} className="space-y-1 text-center md:text-left">
                <p className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-primary">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.subtext}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Grid: Core Technical Capabilities */}
        <div className="mx-auto mt-24 max-w-[1360px]">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Institutional Specifications
            </span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
              Core Technical Capabilities
            </h3>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              Engineered to support high-risk coronary interventions, geriatric structural valve
              replacements, and 24/7 cardiac emergencies.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilityCapabilities.map((item) => {
              const Icon = FEATURE_ICONS[item.category] || Building2;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-border/70 bg-card p-8 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-muted-foreground">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="mt-5 font-display text-xl text-foreground leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 100% Cashless TPA & Mediclaim Insurance Support */}
      <InsuranceTpaSection />

      {/* Appointment Consultation Section */}
      <AppointmentSection
        heading="Consult Dr. Manish Aggarwal at Yashoda Medicity"
        sub="Same-week outpatient appointments and emergency evaluations at Yashoda Medicity, Indirapuram. Bring your angiograms or echo reports for a direct clinical review."
      />
    </article>
  );
}
