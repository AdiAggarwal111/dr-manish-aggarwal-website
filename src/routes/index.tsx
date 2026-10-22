import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { procedures } from "@/data/procedures";
import { siteConfig } from "@/data/site-config";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import { HeroSection } from "@/components/hero-section";
import { TimelineSection } from "@/components/timeline-section";
import { ProcedureCard } from "@/components/procedure-card";
import { SecondOpinionBanner } from "@/components/second-opinion-banner";
import { HomeConditionsSection } from "@/components/home-conditions-section";

// Below-the-fold components dynamically code-split for minimal initial bundle
const ReviewsSection = lazy(() =>
  import("@/components/reviews-section").then((m) => ({ default: m.ReviewsSection })),
);
const FacilitySection = lazy(() =>
  import("@/components/facility-section").then((m) => ({ default: m.FacilitySection })),
);
const AppointmentSection = lazy(() =>
  import("@/components/appointment-form").then((m) => ({ default: m.AppointmentSection })),
);
const LocationFaqSection = lazy(() =>
  import("@/components/location-faq-section").then((m) => ({ default: m.LocationFaqSection })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: siteConfig.meta.defaultTitle },
      { name: "description", content: siteConfig.meta.defaultDescription },
      { name: "keywords", content: siteConfig.meta.keywords },
      { property: "og:title", content: siteConfig.meta.defaultTitle },
      { property: "og:description", content: siteConfig.meta.defaultDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.siteUrl}/` },
      { property: "og:image", content: `${siteConfig.siteUrl}/images/og-doctor.jpg` },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: siteConfig.meta.defaultTitle },
      { property: "twitter:description", content: siteConfig.meta.defaultDescription },
      { property: "twitter:image", content: `${siteConfig.siteUrl}/images/og-doctor.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${siteConfig.siteUrl}/` },
      {
        rel: "preload",
        as: "image",
        type: "image/avif",
        fetchPriority: "high",
        imageSrcSet:
          "/images/doctor-portrait-500.avif 500w, /images/doctor-portrait-800.avif 800w, /images/doctor-portrait-1200.avif 1200w, /images/doctor-portrait.avif 1856w",
        imageSizes: "(max-width: 640px) 340px, (max-width: 1024px) 520px, 600px",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  useScrollReveal();

  return (
    <>
      {/* Editorial Hero Section */}
      <HeroSection />

      {/* Split Canvas: Career Timeline & Clinical Narrative */}
      <TimelineSection />

      {/* Specialized Interventional & Structural Procedures */}
      <section className="bg-cream px-6 py-20 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="text-xs font-medium tracking-[0.25em] text-muted-foreground uppercase">
              Specialised Procedures
            </p>
            <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
              World-class interventional &amp; structural heart care
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Each procedure performed with European-trained precision and the latest imaging
              technology.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {procedures.map((p) => (
              <ProcedureCard key={p.slug} procedure={p} isReveal />
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Second Opinion on Angiogram CD Banner */}
      <SecondOpinionBanner />

      {/* Curated Conditions & Symptoms Diagnostic Hub */}
      <HomeConditionsSection />

      {/* Patient Stories & Verified Ratings */}
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <ReviewsSection />
      </Suspense>

      {/* Hospital Infrastructure & Cath Lab Technology */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <FacilitySection />
      </Suspense>

      {/* Consultation Booking */}
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <AppointmentSection />
      </Suspense>

      {/* Interactive Location Map & Strategic High-Intent FAQs */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <LocationFaqSection />
      </Suspense>
    </>
  );
}
