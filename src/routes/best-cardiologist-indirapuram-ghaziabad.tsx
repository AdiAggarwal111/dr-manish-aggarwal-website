import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  MessageSquare,
  PhoneCall,
  Clock,
  HeartPulse,
  Activity,
  Award,
  Star,
  MapPin,
  Building2,
  BadgeCheck,
  FileText,
  UserCheck,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";
import { AppointmentSection } from "@/components/appointment-form";

const pageTitle = `Best Cardiologist in Indirapuram & Ghaziabad: 5 Clinical Benchmarks | ${siteConfig.name}`;
const pageDescription = `Looking for the top interventional cardiologist in Indirapuram, Vaishali, or Ghaziabad? Learn how to evaluate procedure volume, Cath Lab tech, and clinical ethics.`;
const pageUrl = `${siteConfig.siteUrl}/best-cardiologist-indirapuram-ghaziabad`;

export const Route = createFileRoute("/best-cardiologist-indirapuram-ghaziabad")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "best cardiologist in indirapuram, top cardiologist in ghaziabad, best heart doctor near me vaishali, interventional cardiologist noida, Dr Manish Aggarwal reviews, angioplasty specialist indirapuram",
      },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "article" },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: `${siteConfig.siteUrl}/images/doctor-portrait.png` },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: pageTitle },
      { property: "twitter:description", content: pageDescription },
      { property: "twitter:image", content: `${siteConfig.siteUrl}/images/doctor-portrait.png` },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: pageTitle,
          description: pageDescription,
          url: pageUrl,
          reviewedBy: {
            "@type": "Physician",
            name: siteConfig.name,
            jobTitle: siteConfig.title,
            identifier: siteConfig.registration,
          },
          breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
              { "@type": "ListItem", position: 2, name: "Best Cardiologist Guide", item: pageUrl },
            ],
          },
          mainEntity: {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I choose the best cardiologist in Indirapuram or Ghaziabad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Always evaluate 5 objective clinical criteria: 1) Procedure volume (>10,000 cases), 2) Active Directorship of an advanced 24/7 Cath Lab, 3) International fellowship training (such as European Structural Heart credentials), 4) Low complication rate (<0.1%), and 5) Commitment to physiological FFR testing to avoid placing unnecessary stents.",
                },
              },
              {
                "@type": "Question",
                name: "Where does Dr. Manish Aggarwal practice in Indirapuram?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dr. Manish Aggarwal serves as Director & Head of Interventional Cardiology at Yashoda Medicity, Indirapuram, Ghaziabad. Consultations are available at Director Suite 210, Monday through Saturday, with 24/7 emergency primary angioplasty response.",
                },
              },
              {
                "@type": "Question",
                name: "What procedures does Dr. Manish Aggarwal specialize in?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dr. Manish specializes in transradial coronary angioplasty, complex multi-vessel CHIP PCI, Rotablation for calcified blockages, Shockwave IVL lithotripsy, TAVI/TAVR non-surgical aortic valve replacement, MitraClip, and Leadless Pacemakers.",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
  component: BestCardiologistIndirapuramPage,
});

function BestCardiologistIndirapuramPage() {
  const cleanPhone = siteConfig.phoneRaw.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hello Dr. Manish Aggarwal's clinic, I am looking to schedule a priority cardiology consultation at Yashoda Medicity, Indirapuram.",
  )}`;

  return (
    <div className="bg-background">
      <section className="px-6 pb-20 pt-8 md:px-12 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-[1400px]">
          <PageHeroHeader
            backLink={{ to: "/", label: "Back to Home" }}
            title="Choosing the Best Cardiologist in Indirapuram & Ghaziabad"
            subtitle={`5 Objective Clinical Benchmarks Every Family Should Verify · ${siteConfig.hospital}`}
            description="When dealing with chest pain or an abnormal heart report, paid search ads and generic review directories can be misleading. Here is how medical experts evaluate an interventional cardiologist's true skill and safety."
            badges={
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <Award className="h-3.5 w-3.5" /> 28+ Years Clinical Experience
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground">
                  12,500+ Interventions
                </span>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600 transition hover:bg-emerald-500/20"
                  title="View verified 4.9★ reviews on Google Maps"
                >
                  <Star className="h-3.5 w-3.5 fill-current" /> 4.9★ (370+ Google Reviews ↗)
                </a>
              </>
            }
          />

          {/* Core Guide: 5 Benchmarks */}
          <div className="mt-12 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm space-y-8">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                The Patient's Quality Checklist
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                5 Questions to Ask When Selecting a Heart Specialist
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Heart surgery and catheterization are high-stakes interventions. Always verify these five objective parameters before entrusting your heart to any practitioner:
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Benchmark 1 */}
              <div className="rounded-2xl border border-border bg-background p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-primary uppercase tracking-wider">Benchmark 1</span>
                  <Activity className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold text-base text-foreground">Procedure Volume &amp; Track Record</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  International cardiology registries consistently prove that operators with over 10,000 cases have significantly lower complication rates. <strong>Dr. Manish Aggarwal has performed over 12,500+ catheter-based procedures.</strong>
                </p>
              </div>

              {/* Benchmark 2 */}
              <div className="rounded-2xl border border-border bg-background p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-blue-600 uppercase tracking-wider">Benchmark 2</span>
                  <Award className="h-4 w-4 text-blue-600" />
                </div>
                <h3 className="font-semibold text-base text-foreground">Structural Heart Fellowship</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Advanced procedures like TAVI/TAVR (non-surgical valve replacement) and MitraClip require formal fellowship training. Dr. Manish trained at the <strong>Gottsegen Hungarian Institute of Cardiology, Budapest</strong>.
                </p>
              </div>

              {/* Benchmark 3 */}
              <div className="rounded-2xl border border-border bg-background p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-emerald-600 uppercase tracking-wider">Benchmark 3</span>
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-base text-foreground">Flagship Cath Lab Infrastructure</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A cardiologist is only as effective as the Cath Lab suite behind them. As Director at <strong>Yashoda Medicity</strong>, Dr. Manish operates in a Siemens Artis Q Biplane suite with full in-house Rotablation, Shockwave IVL, and OCT.
                </p>
              </div>

              {/* Benchmark 4 */}
              <div className="rounded-2xl border border-border bg-background p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-purple-600 uppercase tracking-wider">Benchmark 4</span>
                  <HeartPulse className="h-4 w-4 text-purple-600" />
                </div>
                <h3 className="font-semibold text-base text-foreground">Diagnostic Ethics &amp; FFR</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A great doctor knows when <em>not</em> to operate. Dr. Manish utilizes Fractional Flow Reserve (FFR) to measure physiological blood pressure across 70% lesions—saving patients from unnecessary stenting.
                </p>
              </div>

              {/* Benchmark 5 */}
              <div className="rounded-2xl border border-border bg-background p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-amber-600 uppercase tracking-wider">Benchmark 5</span>
                  <Star className="h-4 w-4 text-amber-600" />
                </div>
                <h3 className="font-semibold text-base text-foreground">Verified Local Patient Trust</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Trusted across Indirapuram, Vaishali, Vasundhara, and Noida with a verified <strong>4.9★ rating from 370+ patient reviews</strong>, recognized for compassionate family communication.
                </p>
              </div>

              {/* Quick Booking Box */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 flex flex-col justify-between space-y-4">
                <div>
                  <span className="font-bold text-xs text-primary uppercase tracking-wider">Consultation Suite</span>
                  <h3 className="font-semibold text-base text-foreground mt-1">Yashoda Medicity, Indirapuram</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Director Suite 210 · {siteConfig.opdHours}
                  </p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground hover:opacity-90 transition shadow-sm"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Book Appointment on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Doctor Profile Summary */}
          <div className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-navy via-navy to-slate-900 p-8 md:p-12 text-white shadow-xl">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                  Director Profile
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-medium">
                  {siteConfig.name}
                </h3>
                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  {siteConfig.title} · {siteConfig.hospital}
                </p>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  {siteConfig.credentials} · Delhi Medical Council Reg: {siteConfig.registration}. With over 28 years of clinical dedication and European Structural Heart fellowship training, Dr. Manish Aggarwal leads one of North India's most advanced tertiary cardiac catheterization programs.
                </p>
                <div className="flex flex-wrap gap-3 pt-2 text-xs">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-slate-200">
                    📍 {siteConfig.location}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-slate-200">
                    📞 {siteConfig.phoneDisplay}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-md"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp Priority Booking</span>
                </a>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-xs font-semibold text-white hover:bg-white/20 transition text-center"
                >
                  <span>Read Full Medical Biography</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <AppointmentSection />
    </div>
  );
}
