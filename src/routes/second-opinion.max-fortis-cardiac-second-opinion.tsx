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
  Building2,
  Scale,
  FileText,
  BadgeCheck,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";
import { AppointmentSection } from "@/components/appointment-form";

const pageTitle = `Cardiac Second Opinion: Advised Angioplasty or CABG at Max, Fortis, or Apollo? | ${siteConfig.name}`;
const pageDescription = `Holding an angiography CD or surgical estimate from Max Vaishali, Fortis Noida, or Apollo? Get an independent clinical evaluation from Dr. Manish Aggarwal at Yashoda Medicity before consenting.`;
const pageUrl = `${siteConfig.siteUrl}/second-opinion/max-fortis-cardiac-second-opinion`;

export const Route = createFileRoute("/second-opinion/max-fortis-cardiac-second-opinion")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "Max hospital angioplasty cost vs Yashoda, Fortis Noida cardiac second opinion, Apollo hospital angioplasty review, bypass surgery second opinion Max Vaishali, Dr Manish Aggarwal angiography review",
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
              { "@type": "ListItem", position: 2, name: "Second Opinion", item: `${siteConfig.siteUrl}/second-opinion` },
              { "@type": "ListItem", position: 3, name: "Max & Fortis Second Opinion", item: pageUrl },
            ],
          },
          mainEntity: {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can I get an independent review of an Angiography CD done at Max Vaishali or Fortis Noida?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Patients have a legal and ethical right to their complete diagnostic records. Dr. Manish Aggarwal personally provides frame-by-frame DICOM evaluations of angiograms performed at any hospital in Delhi NCR, verifying whether open-heart surgery is genuinely necessary or if complex stenting can avoid bypass.",
                },
              },
              {
                "@type": "Question",
                name: "How does the angioplasty cost at Yashoda Medicity compare to corporate chains?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "All Drug-Eluting Stents in India are legally capped by the NPPA at ₹38,265. However, total hospital packages at Yashoda Medicity Indirapuram are typically 25% to 35% more cost-effective than private corporate chains due to transparent room tariffs and zero hidden catheter surcharges, while maintaining top-tier infrastructure like the Siemens Artis Q Biplane Cath Lab.",
                },
              },
              {
                "@type": "Question",
                name: "How quickly can Dr. Manish Aggarwal review my case?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For urgent cases where a hospital is pressing for surgery within 24 to 48 hours, Dr. Manish's clinical team provides rapid report triage over WhatsApp within 2 hours, and a full written DICOM assessment within 24 hours.",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
  component: MaxFortisSecondOpinionPage,
});

function MaxFortisSecondOpinionPage() {
  const cleanPhone = siteConfig.phoneRaw.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hello Dr. Manish Aggarwal's clinical coordinator, I have been advised cardiac intervention/bypass at another NCR hospital and would like an urgent independent second opinion.",
  )}`;

  return (
    <div className="bg-background">
      <section className="px-6 pb-20 pt-8 md:px-12 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-[1400px]">
          <PageHeroHeader
            backLink={{ to: "/second-opinion", label: "Back to Second Opinion Desk" }}
            title="Advised Angioplasty or Bypass at Max, Fortis, or Apollo?"
            subtitle={`Independent Clinical & Financial Second Opinion · ${siteConfig.hospital}`}
            description="If you were handed a ₹3.5L to ₹5L surgical estimate or told that open-heart bypass is the only choice, take a step back. Get an objective, frame-by-frame DICOM review before making an irreversible medical decision."
            badges={
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <Scale className="h-3.5 w-3.5" /> 100% Unbiased Clinical Review
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground">
                  NPPA Statutory Price Cap Protection
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600">
                  <Clock className="h-3.5 w-3.5" /> 2-Hour Report Triage
                </span>
              </>
            }
          />

          {/* The Dilemma Context */}
          <div className="mt-12 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  The Regional Patient Dilemma
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                  You Have the Legal &amp; Medical Right to a Second Opinion
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Every week, dozens of families in Indirapuram, Vaishali, Vasundhara, and Noida visit neighboring hospital chains like <strong>Max Super Speciality (Vaishali)</strong>, <strong>Fortis (Noida Sector 62)</strong>, or <strong>Apollo</strong>, only to be overwhelmed by high-pressure surgical recommendations and massive financial estimates.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  As Director of Interventional Cardiology at Yashoda Medicity, <strong>Dr. Manish Aggarwal</strong> provides completely independent, objective second opinions. We examine your actual angiogram video frames to answer three vital questions:
                </p>
                <div className="space-y-2 text-xs md:text-sm text-foreground/90 font-medium">
                  <p>1. Is an invasive procedure truly compulsory, or can this be safely treated with medical therapy?</p>
                  <p>2. Can open-heart bypass surgery be safely avoided using complex stenting (Rotablation/IVL)?</p>
                  <p>3. Is the hospital billing transparent and compliant with statutory government NPPA caps?</p>
                </div>
              </div>

              <div className="lg:col-span-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                  <BadgeCheck className="h-4 w-4" />
                  <span>Immediate Case Review</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Send photos of your angiography report or upload your DICOM CD folder. Our clinical team reviews it directly with Dr. Manish.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-semibold text-primary-foreground hover:opacity-90 transition shadow-sm"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp Angiography for Review</span>
                </a>
                <div className="text-center">
                  <a href={`tel:${siteConfig.phoneRaw}`} className="text-xs text-muted-foreground hover:underline font-mono">
                    Direct Coordinator: {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Infrastructure & Technology Comparison */}
          <div className="mt-16 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Infrastructure Excellence
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                World-Class Cath Lab Technology at Yashoda Medicity
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                How our clinical setup matches or exceeds major corporate hospitals in Delhi NCR.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                  <Activity className="h-5 w-5" />
                </div>
                <h4 className="font-display text-lg font-medium text-foreground">
                  Siemens Artis Q Biplane Cath Lab
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Ultra-low radiation flat-panel detectors with clear real-time 3D reconstruction, reducing contrast volume to protect elderly kidney function.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h4 className="font-display text-lg font-medium text-foreground">
                  Rotapro &amp; Shockwave IVL
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Full in-house plaque debulking capabilities—diamond-burr rotablation and sonic lithotripsy—allowing calcified arteries to be stented without surgery.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <Scale className="h-5 w-5" />
                </div>
                <h4 className="font-display text-lg font-medium text-foreground">
                  Transparent Hospital Billing
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Strict adherence to NPPA stent caps (₹38,265/DES) and 100% cashless pre-authorization for all major TPAs, Star Health, HDFC Ergo, and CGHS/ECHS.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Steps to Transfer Your Care */}
          <div className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-navy via-navy to-slate-900 p-8 md:p-12 text-white shadow-xl">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                Smooth &amp; Dignified Transition
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-medium">
                How to Transfer Your Angiography CD for Second Opinion
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                You do not need to confront your current doctor. The hospital is legally required to hand you your digital DICOM CD upon discharge or request.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-2">
                <span className="font-bold text-xs text-emerald-300 uppercase">Step 1</span>
                <h4 className="font-semibold text-sm">Ask for the "Angio CD"</h4>
                <p className="text-xs text-slate-400">
                  Simply inform the billing counter: <em>"We need the physical DICOM CD for our family records."</em>
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-2">
                <span className="font-bold text-xs text-emerald-300 uppercase">Step 2</span>
                <h4 className="font-semibold text-sm">Send to Dr. Manish</h4>
                <p className="text-xs text-slate-400">
                  WhatsApp the report or courier the CD to Yashoda Medicity, Indirapuram (Director Suite 210).
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-2">
                <span className="font-bold text-xs text-emerald-300 uppercase">Step 3</span>
                <h4 className="font-semibold text-sm">Unbiased Recommendation</h4>
                <p className="text-xs text-slate-400">
                  Receive a written assessment and telephone consultation on whether stenting or surgery is truly safer.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-md"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp CD Report for Review</span>
              </a>
              <Link
                to="/second-opinion/angioplasty-vs-bypass"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-xs font-semibold text-white hover:bg-white/20 transition"
              >
                <span>Read Stent vs Bypass Guide</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <AppointmentSection />
    </div>
  );
}
