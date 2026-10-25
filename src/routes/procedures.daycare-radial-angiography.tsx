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
  Zap,
  Calendar,
  FileText,
  BadgeCheck,
  Disc,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";
import { AppointmentSection } from "@/components/appointment-form";

const pageTitle = `Same-Day Radial Angiography Desk: 3-Hour Discharge & Painless Wrist CAG | ${siteConfig.name}`;
const pageDescription = `Transradial coronary angiography under Dr. Manish Aggarwal at Yashoda Medicity. 99% wrist access, painless, walk in 2 hours, 3-hour daycare discharge & instant CD.`;
const pageUrl = `${siteConfig.siteUrl}/procedures/daycare-radial-angiography`;

export const Route = createFileRoute("/procedures/daycare-radial-angiography")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "same day angiography delhi ncr, radial wrist angiography ghaziabad, daycare coronary angiography indirapuram, painless angiogram yashoda medicity, angiography cost noida, Dr Manish Aggarwal angiogram",
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
            "@type": "Person",
            name: siteConfig.name,
            jobTitle: siteConfig.title,
            url: `${siteConfig.siteUrl}/about`,
          },
          breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
              { "@type": "ListItem", position: 2, name: "Procedures", item: `${siteConfig.siteUrl}/procedures` },
              { "@type": "ListItem", position: 3, name: "Same-Day Radial Angiography", item: pageUrl },
            ],
          },
          mainEntity: {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can I go home on the same day after a coronary angiography?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. With modern transradial (wrist) coronary angiography performed by Dr. Manish Aggarwal, over 99% of patients are discharged within 3 to 4 hours. You can walk immediately after the procedure and resume normal light desk activity the next morning.",
                },
              },
              {
                "@type": "Question",
                name: "Is a wrist angiography painful?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. A tiny local numbing injection is applied to the skin of the wrist, similar to a dental numbing injection. The actual movement of the microcatheter inside your blood vessels does not cause any sensation because arterial walls lack pain receptors.",
                },
              },
              {
                "@type": "Question",
                name: "Is same-day daycare angiography covered by cashless insurance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Under modern IRDAI regulations, daycare coronary angiography is covered by all corporate and retail health insurance policies without requiring a mandatory 24-hour hospital admission. Our on-site TPA desk secures cashless pre-authorization.",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
  component: DaycareRadialAngiographyPage,
});

function DaycareRadialAngiographyPage() {
  const cleanPhone = siteConfig.phoneRaw.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hello Dr. Manish Aggarwal's team, I would like to schedule a same-day painless radial angiography at Yashoda Medicity.",
  )}`;

  return (
    <div className="bg-background">
      <section className="px-6 pb-20 pt-8 md:px-12 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-[1400px]">
          <PageHeroHeader
            backLink={{ to: "/procedures", label: "Back to All Procedures" }}
            title="Same-Day Radial Angiography Desk"
            subtitle={`Painless Wrist Access · 3-Hour Daycare Discharge · ${siteConfig.hospital}`}
            description="Experience gold-standard cardiac diagnostics without overnight hospitalization. Over 99% performed via a 2mm wrist puncture, allowing you to walk, eat, and return home within 3 to 4 hours."
            badges={
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <BadgeCheck className="h-3.5 w-3.5" /> 99% Transradial Mastery
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground">
                  Zero Sandbag Bedrest
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600">
                  <Clock className="h-3.5 w-3.5" /> 3-Hour Discharge
                </span>
              </>
            }
          />

          {/* Key Differentiator Band */}
          <div className="mt-12 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Modern Daycare Diagnostics
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                  Why Suffer 12 Hours of Groin Sandbag Bedrest?
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Historically, coronary angiography was performed through the femoral artery in the groin, forcing patients to lie flat on their backs for 8 to 12 hours with heavy sandbags on their groin and high risks of painful hematoma or bleeding.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Under <strong>Dr. Manish Aggarwal</strong> at Yashoda Medicity, over <strong>99% of angiographies are performed via the radial artery in the right wrist</strong>. A specialized pneumatic wristband seals the tiny 2mm puncture within hours. You sit up immediately, walk to the bathroom, enjoy a light meal, and return home the very same afternoon.
                </p>
              </div>

              <div className="lg:col-span-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                  <Disc className="h-4 w-4" />
                  <span>Instant Diagnostic Package</span>
                </div>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <p>✓ <strong>Microscopic Wrist Puncture:</strong> No stitches, no visible scar.</p>
                  <p>✓ <strong>High-Definition Video CD:</strong> Full DICOM angiogram handed to you upon discharge.</p>
                  <p>✓ <strong>100% Cashless Covered:</strong> Approved by all TPAs &amp; CGHS/ECHS.</p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-semibold text-primary-foreground hover:opacity-90 transition shadow-sm"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Book Daycare Angiography</span>
                </a>
              </div>
            </div>
          </div>

          {/* Hour-by-Hour Timeline */}
          <div className="mt-16 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Your Daycare Journey
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                In by Morning, Home for Lunch: The 3-Hour Schedule
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Designed for busy working professionals and senior citizens who value their comfort.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-600">
                  09:00 AM
                </span>
                <h4 className="font-semibold text-base text-foreground">Arrival &amp; Fast-Track Prep</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Smooth registration at Director Suite 210, baseline vitals check, ECG, and cashless TPA clearance without waiting in long queues.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-600">
                  10:00 AM
                </span>
                <h4 className="font-semibold text-base text-foreground">15-Min Cath Lab Imaging</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Dr. Manish numbs your wrist and introduces the microscopic catheter into the Siemens Artis Q biplane system. Painless and complete in 15 minutes.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-600">
                  10:45 AM
                </span>
                <h4 className="font-semibold text-base text-foreground">Relaxation Lounge</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Rest comfortably in our modern daycare lounge. You are fully mobile, can read, use your phone, and have warm soup or tea.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600">
                  01:00 PM
                </span>
                <h4 className="font-semibold text-base text-foreground">Consultation &amp; Discharge</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Dr. Manish personally reviews the results with you and your family, hands over your official report and digital Angio CD, and you return home.
                </p>
              </div>
            </div>
          </div>

          {/* Radial vs Femoral Comparison */}
          <div className="mt-16 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm">
            <h3 className="text-xl md:text-2xl font-display font-medium text-foreground mb-6">
              Wrist (Radial) vs Groin (Femoral) Angiography: Clinical Comparison
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm">
                <thead className="border-b border-border bg-muted/40 font-semibold text-foreground">
                  <tr>
                    <th className="p-4">Clinical Feature</th>
                    <th className="p-4 text-emerald-600">Wrist Access (Radial — Dr. Manish)</th>
                    <th className="p-4 text-muted-foreground">Groin Access (Femoral — Traditional)</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-border text-muted-foreground">
                  <tr>
                    <td className="p-4 font-semibold text-foreground">Bedrest Duration</td>
                    <td className="p-4 font-medium text-emerald-700">Immediate sitting &amp; walking within 1–2 hours</td>
                    <td className="p-4">Strict flat bedrest for 8 to 12 hours</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-foreground">Bleeding &amp; Hematoma Risk</td>
                    <td className="p-4 font-medium text-emerald-700">&lt; 0.05% (Radial artery is easily compressed)</td>
                    <td className="p-4">Substantially higher risk of retroperitoneal bleed</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-foreground">Hospital Discharge</td>
                    <td className="p-4 font-medium text-emerald-700">Same-day discharge in 3 to 4 hours</td>
                    <td className="p-4">Often requires overnight hospital stay</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-foreground">Patient Comfort</td>
                    <td className="p-4 font-medium text-emerald-700">High comfort; zero backache, can use restroom freely</td>
                    <td className="p-4">Severe back pain from prolonged immobilized lying</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-navy via-navy to-slate-900 p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                Painless Diagnostics
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-medium">
                Schedule Your Same-Day Radial Angiography
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Clear all doubts about your heart health in a 3-hour visit under European Structural Heart Fellow Dr. Manish Aggarwal at Yashoda Medicity, Indirapuram.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-md"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Book on WhatsApp</span>
              </a>
              <Link
                to="/costs/$slug"
                params={{ slug: "angiography-cost-delhi-ncr" }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-xs font-semibold text-white hover:bg-white/20 transition"
              >
                <span>View Angiography Pricing</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <AppointmentSection />
    </div>
  );
}
