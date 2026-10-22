import { memo, useState } from "react";
import { siteConfig } from "@/data/site-config";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: readonly FAQItem[] = [
  {
    category: "Emergency & Consultation",
    question:
      "How can I book an urgent consultation or emergency admission with Dr. Manish Aggarwal at Yashoda Medicity?",
    answer:
      "Outpatient consultations can be scheduled in advance by calling +91-9871183181 or booking directly through the clinic portal for same-week appointments at Yashoda Medicity, Indirapuram. For acute cardiac emergencies (sudden chest pain, heart attack / STEMI, pulmonary edema), Dr. Manish Aggarwal's emergency triage team operates 24/7 with dedicated Door-to-Balloon mobilization under 90 minutes. In an emergency, immediately call the hospital triage helpline or arrive directly at the Yashoda Medicity Emergency Bay for zero-delay catheterization lab activation.",
  },
  {
    category: "Hospital Infrastructure",
    question:
      "What are the hospital facilities available for advanced structural heart procedures like TAVI/TAVR?",
    answer:
      "Yashoda Medicity Indirapuram is a 1,200-bed greenfield quaternary care landmark engineered to support European-standard structural heart interventions without open-heart surgery. Facilities include dedicated hybrid catheterization laboratories equipped with ceiling-suspended robotic C-arms, 10-micron near-infrared Optical Coherence Tomography (OCT), high-definition Intravascular Ultrasound (IVUS), 3D transesophageal echocardiography (TEE), dedicated Cardiac Critical Care Units (CCU), laminar airflow sterile operating suites, and on-site ECMO and intra-aortic balloon pump (IABP) hemodynamic support.",
  },
  {
    category: "Ambulance & Coverage",
    question: "Which areas in Delhi NCR are covered for emergency cardiac ambulance transfers?",
    answer:
      "Our 24/7 advanced cardiac life support (ACLS) ambulance network provides rapid mobilization across Indirapuram, Vaishali, Vasundhara, Kaushambi, Sahibabad, Noida (Sectors 62, 50, 18, 121, 122), Greater Noida West (Noida Extension), Crossing Republik, Raj Nagar Extension, and East Delhi (Mayur Vihar, Patparganj, Preet Vihar, Anand Vihar). In addition, direct transit access via the Delhi-Meerut Expressway enables emergency transfer referrals from Ghaziabad, Modinagar, Meerut, and Muzaffarnagar.",
  },
  {
    category: "Second Opinions & CTO",
    question:
      "Is Dr. Manish Aggarwal available for second opinions on complex coronary blockages and CTO?",
    answer:
      "Yes. Dr. Manish Aggarwal provides an uncompromising 'Radically Honest' second opinion service for patients told that emergency open-heart bypass surgery (CABG) or multiple stents are their only option. Families are encouraged to bring coronary angiogram CDs and echocardiography reports. Dr. Aggarwal evaluates whether minimally invasive micro-catheter Chronic Total Occlusion (CTO) crossing or diamond-burr 160,000 RPM rotablation can restore complete vessel patency safely without open surgery, or whether medical therapy is the most prudent long-term choice.",
  },
] as const;

const TRANSIT_CORRIDORS = [
  {
    name: "Delhi-Meerut Expressway (NH-24 / NH-9)",
    time: "12–18 mins",
    origin: "Mayur Vihar, Patparganj & East Delhi",
    detail: "14-lane high-speed signal-free corridor with direct descent into Indirapuram.",
  },
  {
    name: "Hindon Elevated Road Corridor",
    time: "10–14 mins",
    origin: "Raj Nagar Extension & Govindpuram",
    detail: "Rapid elevated route bypassing city congestion directly to CISF / Kanawani gate.",
  },
  {
    name: "Noida & Greater Noida West (FNG / Sec 62)",
    time: "8–12 mins",
    origin: "Noida Sectors 62, 50, 18 & Gaur City",
    detail: "Seamless connection via Model Town underpass and Electronic City corridor.",
  },
  {
    name: "Vaishali, Vasundhara & Kaushambi",
    time: "5–8 mins",
    origin: "Immediate Neighborhoods",
    detail:
      "Direct arterial access via Link Road and Maharaja Agrasen Marg for rapid ambulance transit.",
  },
] as const;

export const LocationFaqSection = memo(function LocationFaqSection() {
  const localClinicSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    name: `Dr. Manish Aggarwal — Interventional Cardiology Suite at ${siteConfig.hospital}`,
    image: `${siteConfig.siteUrl}/images/yashoda-medicity-hero.jpg`,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    priceRange: "$$",
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
    medicalSpecialty: [
      "https://schema.org/CardiovascularExam",
      "Interventional Cardiology",
      "Structural Heart",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="location-and-faqs"
      aria-label="Location Map, Transit Routes and Frequently Asked Questions"
      className="bg-background px-6 py-20 md:px-12 md:py-28 border-t border-border/80"
    >
      {/* Schema Injection for Local SEO & Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localClinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-[1360px] space-y-24">
        {/* ========================================================================= */}
        {/* 1. INTERACTIVE LOCATION MAP & TRANSIT BLUEPRINT */}
        {/* ========================================================================= */}
        <div>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              Accessibility &amp; Local Transit Blueprint
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground leading-[1.15]">
              Reaching Yashoda Medicity, Indirapuram
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg leading-relaxed">
              Situated on the central arterial corridor connecting East Delhi, Noida, and Ghaziabad
              with signal-free expressway connectivity for zero-delay emergency arrivals.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            {/* Interactive Map Column (7 Cols on Desktop) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-[var(--shadow-card)] aspect-[16/11] sm:aspect-[16/10] w-full">
                {/* Responsive Embedded Map */}
                <iframe
                  title="Yashoda Medicity Indirapuram Location Map"
                  src="https://maps.google.com/maps?q=Yashoda%20Medicity%20Indirapuram%20Ghaziabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  className="h-full w-full border-0 filter contrast-[1.02] saturate-[1.05]"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-hidden="false"
                />

                {/* Floating Hospital Badge Overlay */}
                <a
                  href={siteConfig.hospitalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto absolute top-4 left-4 right-4 sm:right-auto flex items-center gap-2.5 rounded-2xl border border-navy-foreground/20 bg-navy/90 px-4 py-2 text-xs font-semibold text-white shadow-md backdrop-blur-md transition hover:bg-navy"
                  title="View Dr. Manish Aggarwal's Official Yashoda Medicity Profile"
                >
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{siteConfig.hospital} · 24/7 Cath Lab Bay ↗</span>
                </a>
              </div>

              {/* Action Buttons beneath Map */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=Yashoda+Medicity+Indirapuram+Ghaziabad`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-xs font-semibold text-white transition hover:opacity-90 shadow-sm"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  <span>Open in Google Maps Directions</span>
                </a>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-5 py-3 text-xs font-semibold text-foreground transition hover:bg-secondary"
                >
                  <svg
                    className="h-4 w-4 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>24/7 Ambulance Dispatch: {siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Transit Accessibility Column (5 Cols on Desktop) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>Strategic High-Speed Corridors</span>
                </div>
                <p className="mt-2 text-sm text-foreground/85 leading-relaxed">
                  Direct highway routes ensure door-to-balloon response under 90 minutes from across
                  Delhi NCR.
                </p>
              </div>

              {/* Transit Cards List */}
              <div className="space-y-3">
                {TRANSIT_CORRIDORS.map((c) => (
                  <div
                    key={c.name}
                    className="rounded-2xl border border-border/80 bg-card p-4 transition-all hover:border-primary/40 hover:shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">{c.name}</h3>
                        <p className="mt-0.5 text-xs font-medium text-primary">{c.origin}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-bold text-foreground">
                        {c.time}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{c.detail}</p>
                  </div>
                ))}
              </div>

              {/* Metro & Transit Hub Reference */}
              <div className="rounded-2xl border border-border/70 bg-cream/60 p-4 text-xs text-muted-foreground">
                <p>
                  <strong className="text-foreground font-semibold">Metro Connectivity:</strong>{" "}
                  Vaishali Metro Station (Blue Line, 6 mins) &amp; Noida Electronic City (8 mins).
                  Anand Vihar Terminal (15 mins).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. STRATEGIC HIGH-INTENT FAQ SECTION */}
        {/* ========================================================================= */}
        <div id="faqs" className="scroll-mt-24 pt-4">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
              Clinical Clarity &amp; Patient Inquiries
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground leading-[1.15]">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Transparent answers regarding emergency admissions, non-surgical structural
              interventions, ambulance logistics, and second opinions with Dr. Manish Aggarwal.
            </p>
          </div>

          {/* Isolated Interactive Accordion (prevents iframe re-renders) */}
          <FaqAccordion faqs={FAQS} />
        </div>
      </div>
    </section>
  );
});

const FaqAccordion = memo(function FaqAccordion({ faqs }: { faqs: readonly FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question}
            className={`rounded-3xl border transition-all duration-200 ${
              isOpen
                ? "border-primary/50 bg-card shadow-[var(--shadow-card)] ring-1 ring-primary/20"
                : "border-border/80 bg-card/70 hover:border-border hover:bg-card"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-6 text-left focus:outline-none"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                  {faq.category}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-medium text-foreground leading-snug">
                  {faq.question}
                </h3>
              </div>

              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                  isOpen ? "bg-primary text-white rotate-180" : "bg-secondary text-muted-foreground"
                }`}
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </button>

            {isOpen && (
              <div className="border-t border-border/60 px-6 pb-6 pt-4 animate-in fade-in duration-200">
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
});
