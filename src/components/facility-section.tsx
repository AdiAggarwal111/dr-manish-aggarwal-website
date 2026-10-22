import { Link } from "@tanstack/react-router";
import {
  Award,
  Building2,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Layers,
  Microscope,
  Shield,
  Sparkles,
  ArrowRight,
  MapPin,
  Calendar,
} from "lucide-react";
import { memo } from "react";
import hospitalExteriorAvif from "@/assets/yashoda-medicity-hero.avif";
import hospitalExteriorWebp from "@/assets/yashoda-medicity-hero.webp";
import hospitalExteriorJpg from "@/assets/yashoda-medicity-hero.jpg";

import cathLabSuiteAvif from "@/assets/cath-lab-suite.avif";
import cathLabSuiteWebp from "@/assets/cath-lab-suite.webp";
import cathLabSuiteJpg from "@/assets/cath-lab-suite.jpg";
import { facilityCapabilities, facilityStats, facilityFeatures } from "@/data/facility";
import { siteConfig } from "@/data/site-config";

const FEATURE_ICONS: Record<string, typeof Building2> = {
  "Institutional Scale": Building2,
  "Global Standards": Shield,
  "Interventional Robotics": Layers,
  "Critical Care": HeartHandshake,
  "Intravascular Imaging": Microscope,
  "Patient Experience": Sparkles,
};

export const FacilitySection = memo(function FacilitySection() {
  return (
    <section
      id="facility"
      aria-labelledby="facility-heading"
      className="scroll-mt-24 px-6 py-16 md:px-12 md:py-24 bg-background"
    >
      <div className="mx-auto max-w-[1360px]">
        {/* Section Header */}
        <header className="mb-14 text-center md:mb-20">
          <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
            Quaternary Medical Infrastructure
          </p>
          <h2
            id="facility-heading"
            className="mt-4 font-display text-3xl text-foreground sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] max-w-4xl mx-auto"
          >
            <a
              href={siteConfig.hospitalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition underline decoration-primary/30 underline-offset-8"
              title="View Dr. Manish Aggarwal's Official Yashoda Medicity Profile"
            >
              Yashoda Medicity, Indirapuram ↗
            </a>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A 1,200-bed greenfield medical landmark inaugurated by the President of India, Smt.
            Droupadi Murmu. Engineered to provide Dr. Manish Aggarwal with an uncompromised
            structural cardiology and hybrid surgical environment.
          </p>

          {/* Quick Badges Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {facilityFeatures.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/80 px-4 py-1.5 text-xs font-medium text-foreground/90 shadow-[var(--shadow-soft)]"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                {badge}
              </span>
            ))}
          </div>
        </header>

        {/* Cinematic Alternating Showcase */}
        <div className="space-y-16 lg:space-y-24">
          {/* Row 1: The Architectural Quaternary Campus */}
          <article className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className="lg:col-span-6 xl:col-span-7">
              <figure className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[var(--shadow-card)] aspect-[16/10]">
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
                    alt="Yashoda Medicity flagship greenfield quaternary care hospital exterior in Indirapuram, Delhi NCR"
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
                    <Building2 className="h-3.5 w-3.5" /> Flagship Greenfield Medical Campus
                  </span>
                  <p className="mt-2 text-sm font-medium text-white/95 sm:text-base">
                    1,200-bed quaternary care hospital anchored in Indirapuram, Ghaziabad (Delhi
                    NCR).
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="lg:col-span-6 xl:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-primary uppercase">
                <Shield className="h-4 w-4" /> Institutional Magnitude
              </div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-tight text-foreground">
                Built for India's Most Advanced Cardiac Care
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg text-justify-docs">
                Yashoda Medicity represents a multi-crore investment in clinical excellence. As
                Director of Interventional Cardiology &amp; Structural Heart, Dr. Manish Aggarwal
                operates within a medical ecosystem designed from the ground up to rival leading
                European centers.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base text-justify-docs">
                Spanning multi-acre facilities with JCI and NABH accreditations, the hospital
                integrates on-site cardiothoracic surgical backup, continuous renal replacement
                therapy (CRRT), multi-slice 3D CT angiography, and dedicated private recovery
                suites, ensuring complete clinical continuity for elderly, high-risk, and complex
                cardiac patients.
              </p>
              <div className="pt-2">
                <a
                  href={siteConfig.hospitalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                >
                  Explore Yashoda Medicity Infrastructure <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>

          {/* Row 2: Advanced Hybrid Cath Lab & Robotic Equipment */}
          <article className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className="lg:col-span-6 xl:col-span-5 order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-primary uppercase">
                <Microscope className="h-4 w-4" /> Hybrid Cath Lab &amp; Robotics
              </div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-tight text-foreground">
                The Technology Enabling European Structural Mastery
              </h3>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg text-justify-docs">
                Complex structural heart procedures cannot be performed in conventional cath labs.
                Dr. Manish Aggarwal utilizes state-of-the-art NABL-accredited catheterization
                laboratories equipped with ceiling-suspended robotic C-arms, zero-latency digital
                flat-panel fluoroscopy, and real-time hemodynamic integration.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base text-justify-docs">
                This environment enables Dr. Aggarwal to execute non-surgical valve replacements (
                <strong className="font-medium text-foreground">TAVI / TAVR</strong>), percutaneous
                mitral repairs (<strong className="font-medium text-foreground">MitraClip</strong>),
                and 160,000 RPM diamond-burr{" "}
                <strong className="font-medium text-foreground">rotablation</strong> for 100%
                blocked calcified arteries (CTOs) under the most rigorous European safety margins.
              </p>
              <ul className="space-y-3 pt-1">
                {[
                  "10-Micron Optical Coherence Tomography (OCT) & HD-IVUS",
                  "Laminar Positive-Pressure Airflow eliminating surgical infection risks",
                  "24/7 Cath Lab Mobilization with audited <90-minute Door-to-Balloon",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 xl:col-span-7 order-1 lg:order-2">
              <figure className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[var(--shadow-card)] aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11]">
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
                    alt="State of the art catheterization laboratory with robotic C-arm and sterile surgical lighting at Yashoda Medicity"
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
                    <Layers className="h-3.5 w-3.5" /> Robotic C-Arm &amp; Sterile Suite
                  </span>
                  <p className="mt-2 text-sm font-medium text-white/95 sm:text-base">
                    NABL-accredited cath lab suite configured for beating-heart structural
                    interventions and emergency angioplasty.
                  </p>
                </figcaption>
              </figure>
            </div>
          </article>
        </div>

        {/* 4-Stat Metric Strip */}
        <div className="mt-20 rounded-3xl border border-border/80 bg-card/60 p-8 shadow-[var(--shadow-soft)] md:p-12">
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

        {/* Detailed 6-Card Feature Grid */}
        <div className="mt-20">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Structural Asset Specifications
            </span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
              Core Technical Capabilities
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilityCapabilities.map((item) => {
              const Icon = FEATURE_ICONS[item.category] || Building2;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-border/70 bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
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

        {/* Consultation CTA Banner */}
        <div className="mt-20 rounded-3xl bg-navy px-8 py-12 text-center text-navy-foreground md:px-16 md:py-16 shadow-xl">
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-navy-foreground/60">
            <a
              href={siteConfig.hospitalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition inline-flex items-center gap-1.5"
            >
              Visit Yashoda Medicity ↗
            </a>
          </p>
          <h3 className="mx-auto mt-3 max-w-2xl font-display text-2xl md:text-3xl lg:text-4xl text-white">
            Experience World-Class Cardiology in Indirapuram
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-navy-foreground/80 md:text-base">
            Consult Dr. Manish Aggarwal at Yashoda Medicity's Director Suite. Bring your clinical
            reports or angiogram CDs for a definitive assessment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-navy transition hover:bg-white/90"
            >
              <Calendar className="h-4 w-4" /> Book Consultation
            </Link>
            <a
              href={siteConfig.hospitalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/30 px-7 py-3.5 text-sm font-medium text-navy-foreground transition hover:bg-white/10"
            >
              <MapPin className="h-4 w-4" /> Hospital Campus Tour
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});
