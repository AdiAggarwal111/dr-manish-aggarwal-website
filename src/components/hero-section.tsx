import { memo, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Calendar, ArrowRight, Star } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export const HeroSection = memo(function HeroSection() {
  const portraitRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      // Gate subtle parallax to desktop to prevent mobile touch momentum stutter
      if (window.innerWidth < 1024) return;
      if (raf) return;

      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = portraitRef.current;
        if (!el) return;
        const y = window.scrollY;
        el.style.transform = `translate3d(0, ${y * -0.06}px, 0)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      className="relative -mt-[calc(env(safe-area-inset-top,0px)+76px)] overflow-hidden pt-[calc(env(safe-area-inset-top,0px)+88px)] sm:-mt-[88px] sm:pt-[104px] md:-mt-[84px] md:pt-[104px] md:min-h-[100dvh] bg-gradient-to-r from-[#dce9fa] to-[#bcd3eb]"
      aria-label="Introduction"
    >
      {/* High-resolution Yashoda Medicity exterior background extending to top viewport edge */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <picture>
          <source
            type="image/avif"
            srcSet="/images/yashoda-medicity-hero-480.avif 480w, /images/yashoda-medicity-hero-640.avif 640w, /images/yashoda-medicity-hero.avif 1024w"
            sizes="(max-width: 640px) 480px, (max-width: 1024px) 640px, 100vw"
          />
          <source
            type="image/webp"
            srcSet="/images/yashoda-medicity-hero-480.webp 480w, /images/yashoda-medicity-hero-640.webp 640w, /images/yashoda-medicity-hero.webp 1024w"
            sizes="(max-width: 640px) 480px, (max-width: 1024px) 640px, 100vw"
          />
          <img
            src="/images/yashoda-medicity-hero.jpg"
            alt=""
            width={1024}
            height={571}
            loading="eager"
            fetchPriority="low"
            decoding="async"
            className="h-full w-full object-cover object-[center_top] sm:object-[center_35%] md:object-[center_20%]"
          />
        </picture>
      </div>

      {/* Uniform wash overlay across the entire canvas: ensures even, balanced background clarity from left to right */}
      <div className="absolute inset-0 bg-white/20" aria-hidden="true" />

      {/* Subtle white/cream faded gradient merger into the following section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 md:h-24 bg-gradient-to-t from-background via-background/60 to-transparent"
        aria-hidden="true"
      />

      {/* Hero content grid / vertical mobile stack */}
      <div className="relative z-10 mx-auto flex flex-col items-center gap-3.5 px-4 pb-6 pt-0.5 sm:gap-6 sm:px-6 sm:pb-8 sm:pt-3 md:grid md:grid-cols-2 md:items-start md:gap-10 md:px-12 md:pb-6 md:pt-4 lg:gap-14 max-w-[1400px]">
        {/* Left Column wrapper: contents on mobile so children participate in parent flex ordering; md:flex on desktop */}
        <div className="contents md:flex md:flex-col md:justify-start text-center md:text-left">
          {/* Mobile Order 1: Eyebrow, Main Headline, Subtitle, and Primary CTAs */}
          <div className="relative order-1 flex w-full flex-col items-center text-center md:order-none md:items-start md:text-left">
            {/* Subtle localized desktop backlight strictly behind headline & subheadline only (stops before building signage, extends down to fully contain the descriptive paragraph) */}
            <div
              className="pointer-events-none absolute -left-5 -top-3 w-full max-w-[470px] h-[330px] hidden rounded-3xl bg-[radial-gradient(ellipse_at_35%_52%,_rgba(255,255,255,0.94)_0%,_rgba(255,255,255,0.82)_45%,_rgba(240,246,255,0.45)_68%,_transparent_82%)] blur-2xl lg:block"
              aria-hidden="true"
            />

            <p className="relative text-[10px] font-bold uppercase tracking-[0.18em] text-foreground sm:text-[11px] sm:tracking-[0.25em] md:text-xs md:tracking-[0.35em]">
              DIRECTOR OF INTERVENTIONAL CARDIOLOGY
            </p>

            <h1
              className="relative mt-1.5 font-display font-medium text-3xl leading-[1.15] tracking-[-0.02em] text-foreground sm:mt-4 sm:text-4xl sm:leading-[1.1] md:text-[2.75rem] md:leading-[1.08] lg:text-[3.25rem] lg:leading-[1.06] xl:text-[3.6rem] xl:leading-[1.04]"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.08)" }}
            >
              <span className="block whitespace-nowrap">A Lifetime Dedicated</span>
              <span className="block whitespace-nowrap">
                to the <em className="font-medium italic">Human Heart.</em>
              </span>
            </h1>

            <p
              className="relative mx-auto mt-1.5 max-w-[460px] text-sm font-normal leading-relaxed text-[#111827] sm:mt-4 sm:text-[15px] md:mx-0 md:text-[17px] md:leading-[1.6] [text-wrap:balance] text-balance lg:mb-7"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.06)" }}
            >
              {siteConfig.name} · Interventional Cardiologist &amp; Structural Heart Specialist.{" "}
              {siteConfig.experienceYears} years of experience and {siteConfig.proceduresCount}{" "}
              successful cardiac procedures across Delhi NCR.
            </p>

            {/* Primary Action buttons: shifted upward on mobile to sit above the Yashoda Medicity building sign */}
            <div className="relative mt-2.5 flex w-full max-w-[340px] gap-2.5 sm:mt-5 sm:max-w-none sm:gap-3 sm:items-center sm:justify-center md:justify-start lg:mt-0">
              <Link
                to="/contact"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-navy px-3.5 py-2.5 text-xs font-medium text-navy-foreground transition hover:opacity-90 sm:flex-initial sm:px-6 sm:py-3 sm:text-sm"
              >
                <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Book Appointment
              </Link>

              <Link
                to="/procedures"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-2.5 text-xs font-medium text-foreground transition hover:bg-secondary sm:flex-initial sm:px-6 sm:py-3 sm:text-sm"
              >
                Explore Procedures <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>
            </div>
          </div>

          {/* Mobile Order 3: Yashoda Medicity Badge & Stats Bar */}
          <div className="order-3 mt-3 flex w-full flex-col items-center sm:mt-4 md:mt-4 md:order-none md:items-start lg:mt-6">
            {/* External Hospital Link / Upper Yashoda Pill Badge */}
            <a
              href={siteConfig.hospitalUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Yashoda Medicity official hospital page for Dr. Manish Aggarwal (opens in a new tab)"
              className="mx-auto mt-0 flex w-full max-w-[340px] items-center justify-center gap-2 rounded-full border border-white/50 bg-white/65 px-4 py-2.5 text-xs font-semibold tracking-[0.10em] uppercase text-foreground shadow-sm backdrop-blur-md transition hover:bg-white/80 sm:mt-0 sm:max-w-[440px] sm:px-5 sm:tracking-[0.12em] md:mx-0 md:max-w-[500px] lg:mt-0 lg:max-w-[530px] xl:max-w-[550px]"
            >
              <span className="text-sm">🏥</span>
              <span>{siteConfig.hospital.toUpperCase()}</span>
            </a>

            {/* Single Elegant Horizontal Glassmorphic Stats Bar matching exact width of upper Yashoda badge */}
            <div className="mx-auto mt-2.5 flex w-full max-w-[340px] items-center justify-between rounded-2xl border border-white/50 bg-white/65 px-3 py-2.5 shadow-sm backdrop-blur-md sm:mt-3 sm:max-w-[440px] sm:px-5 sm:py-3 md:mx-0 md:max-w-[500px] md:px-6 md:py-3.5 lg:mt-3 lg:max-w-[530px] lg:px-7 lg:py-4 xl:max-w-[550px]">
              {/* Stat 1 */}
              <div className="flex flex-1 flex-col items-center justify-center px-1 text-center">
                <span className="font-sans text-base font-bold tracking-tight text-primary tabular-nums sm:text-xl md:text-2xl lg:text-[1.7rem] lg:leading-tight">
                  {siteConfig.experienceYears}
                </span>
                <span className="mt-0.5 text-[9px] font-semibold tracking-normal uppercase text-[#111827]/85 sm:text-[10px] sm:tracking-wider md:text-[11px]">
                  Years Experience
                </span>
              </div>

              {/* Divider 1 */}
              <div
                className="h-6 w-px shrink-0 bg-foreground/15 sm:h-7 md:h-8"
                aria-hidden="true"
              />

              {/* Stat 2 */}
              <div className="flex flex-1 flex-col items-center justify-center px-1 text-center">
                <span className="font-sans text-base font-bold tracking-tight text-primary tabular-nums sm:text-xl md:text-2xl lg:text-[1.7rem] lg:leading-tight">
                  {siteConfig.proceduresCount}
                </span>
                <span className="mt-0.5 text-[9px] font-semibold tracking-normal uppercase text-[#111827]/85 sm:text-[10px] sm:tracking-wider md:text-[11px]">
                  Successful Procedures
                </span>
              </div>

              {/* Divider 2 */}
              <div
                className="h-6 w-px shrink-0 bg-foreground/15 sm:h-7 md:h-8"
                aria-hidden="true"
              />

              {/* Stat 3 */}
              <div className="flex flex-1 flex-col items-center justify-center px-1 text-center">
                <span className="font-sans text-base font-bold tracking-tight text-primary tabular-nums sm:text-xl md:text-2xl lg:text-[1.7rem] lg:leading-tight">
                  {siteConfig.credentials.split(",").pop()?.trim() || "FESC"}
                </span>
                <span className="mt-0.5 text-[9px] font-semibold tracking-normal uppercase text-[#111827]/85 sm:text-[10px] sm:tracking-wider md:text-[11px]">
                  Certified
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column / Mobile Order 2: Doctor's Editorial Portrait & Trust Rating */}
        <div className="order-2 mx-auto mt-6 flex w-full max-w-[340px] flex-col items-center sm:mt-0 sm:max-w-[380px] md:order-none md:mt-5 md:max-w-[520px] lg:mt-7 lg:max-w-[560px] xl:max-w-[600px]">
          <picture className="w-full flex justify-center">
            <source
              type="image/avif"
              srcSet="/images/doctor-portrait-500.avif 500w, /images/doctor-portrait-800.avif 800w, /images/doctor-portrait-1200.avif 1200w, /images/doctor-portrait.avif 1856w"
              sizes="(max-width: 640px) 340px, (max-width: 1024px) 520px, 600px"
            />
            <source
              type="image/webp"
              srcSet="/images/doctor-portrait-500.webp 500w, /images/doctor-portrait-800.webp 800w, /images/doctor-portrait-1200.webp 1200w, /images/doctor-portrait.webp 1856w"
              sizes="(max-width: 640px) 340px, (max-width: 1024px) 520px, 600px"
            />
            <img
              ref={portraitRef}
              src="/images/doctor-portrait.webp"
              alt={`${siteConfig.name}, Interventional Cardiologist & Structural Heart Specialist, Delhi NCR`}
              width={1856}
              height={2304}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-[34vh] max-h-[320px] w-full object-contain object-top transition-transform duration-100 will-change-transform sm:h-[44vh] sm:max-h-[420px] md:h-auto md:w-full aspect-[1856/2304]"
            />
          </picture>

          <div className="mt-2.5 flex w-full max-w-[272px] items-center justify-center gap-2 rounded-2xl bg-card px-3.5 py-2.5 text-xs font-medium shadow-[var(--shadow-card)] sm:mt-3 sm:max-w-[304px] sm:px-4 sm:py-3 sm:text-sm md:mt-3.5 md:max-w-[364px] lg:mt-4 lg:max-w-[348px] lg:rounded-full lg:py-2.5 lg:text-sm">
            <Star className="h-3.5 w-3.5 fill-gold text-gold shrink-0 sm:h-4 sm:w-4" />
            <span className="truncate">
              {siteConfig.rating.score} · {siteConfig.rating.reviewCount} verified Google reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
});
