import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  MessageSquare,
  PhoneCall,
  Clock,
  HeartPulse,
  Activity,
  Award,
  Layers,
  Sparkles,
  AlertCircle,
  FileText,
  BadgeCheck,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";
import { AppointmentSection } from "@/components/appointment-form";

const pageTitle = `Which Stent is Best for Heart in India? Brand Comparison & NPPA Pricing | ${siteConfig.name}`;
const pageDescription = `Independent doctor-reviewed comparison of Abbott Xience, Medtronic Resolute Onyx, Boston Scientific Synergy & Indian DES. Strut thickness, polymer safety, and NPPA statutory price caps.`;
const pageUrl = `${siteConfig.siteUrl}/costs/stent-brands-comparison`;

export const Route = createFileRoute("/costs/stent-brands-comparison")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "best stent for heart in india, resolute onyx vs xience stent, drug eluting stent brands india, american stent vs indian stent price, NPPA stent price cap 2025 2026, Dr Manish Aggarwal angioplasty",
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
              { "@type": "ListItem", position: 2, name: "Costs & Transparency", item: `${siteConfig.siteUrl}/costs` },
              { "@type": "ListItem", position: 3, name: "Stent Brands Comparison", item: pageUrl },
            ],
          },
          mainEntity: {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Which is the best drug-eluting stent (DES) in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Leading US FDA-approved third-generation Drug-Eluting Stents include the Medtronic Resolute Onyx (known for flexibility in tortuous calcified arteries) and the Abbott Xience family (known for low stent thrombosis rates backed by millions of clinical cases). Top Indian stents like Meril BioMime and SMT Supraflex Cruz also demonstrate excellent clinical safety in randomized trials.",
                },
              },
              {
                "@type": "Question",
                name: "How much does a drug-eluting stent cost in India after NPPA price capping?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Under statutory NPPA regulations by the Government of India, all Drug-Eluting Stents (whether imported American stents or Indian stents) have a statutory ceiling price capped at ₹38,265 (+ applicable 5% GST). Hospitals cannot legally charge more for the stent hardware itself.",
                },
              },
              {
                "@type": "Question",
                name: "Why does strut thickness matter when choosing a heart stent?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Thinner stent struts (60 to 81 microns) cause significantly less vascular trauma to the arterial endothelium. This leads to faster natural vessel healing, reduced blood turbulent flow, and lowers the risk of late stent thrombosis and in-stent restenosis.",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
  component: StentBrandsComparisonPage,
});

function StentBrandsComparisonPage() {
  const cleanPhone = siteConfig.phoneRaw.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hello Dr. Manish Aggarwal, I have a query regarding stent selection and pricing for an upcoming angioplasty.",
  )}`;

  return (
    <div className="bg-background">
      <section className="px-6 pb-20 pt-8 md:px-12 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-[1400px]">
          <PageHeroHeader
            backLink={{ to: "/costs", label: "Back to Cost Guides" }}
            title="Which Stent is Best for Heart in India?"
            subtitle={`Independent Brand Comparison · Engineering Specs · NPPA Price Caps · ${siteConfig.hospital}`}
            description="When an angioplasty is scheduled, families are frequently overwhelmed with choices between imported US-FDA stents, Indian stents, and varying price tiers. Here is a physician's unbiased breakdown of how modern drug-eluting stents compare."
            badges={
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" /> 3rd-Gen Drug-Eluting Stents
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground">
                  Statutory NPPA Price Cap: ₹38,265
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600">
                  <BadgeCheck className="h-3.5 w-3.5" /> US FDA &amp; CE Approved
                </span>
              </>
            }
          />

          {/* The NPPA Truth Band */}
          <div className="mt-12 rounded-3xl border border-emerald-500/25 bg-emerald-500/5 p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4" />
              <span>Government Regulation You Must Know</span>
            </div>
            <h2 className="text-xl md:text-2xl font-display font-medium text-foreground">
              All Drug-Eluting Stents in India Have a Statutory Government Ceiling Price
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Before 2017, private hospitals in India frequently charged ₹1.2 to ₹1.8 Lakhs for imported American stents. Today, under the <strong>National Pharmaceutical Pricing Authority (NPPA)</strong>, the statutory ceiling price for ANY Drug-Eluting Stent (DES)—including top American brands like Abbott and Medtronic—is capped at <strong>₹38,265 (+ 5% GST)</strong> across all private hospitals.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Differences in total hospital angioplasty bills depend on room rent categories, cath lab consumables, and physician surgical expertise—<strong>never on inflated stent hardware markups</strong>.
            </p>
          </div>

          {/* 3 Pillars of Stent Technology */}
          <div className="mt-16 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Engineering Science
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                What Actually Makes One Stent Better Than Another?
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Marketing names matter less than these three core scientific benchmarks.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <span className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-600">
                  Benchmark 1
                </span>
                <h4 className="font-display text-lg font-medium text-foreground">
                  Ultra-Thin Strut Thickness
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Older bare-metal stents were over 120 microns thick, causing severe blood turbulence and high clotting risk. Modern 3rd-generation DES feature microscopic struts between <strong>60 to 81 microns</strong>, enabling rapid endothelial cellular coverage within weeks.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600">
                  Benchmark 2
                </span>
                <h4 className="font-display text-lg font-medium text-foreground">
                  Polymer Biocompatibility
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The polymer holds the antiproliferative medication on the stent frame. Modern platforms use either <strong>fluoropolymer coatings</strong> (which naturally resist blood clot adhesion) or <strong>bioresorbable polymers</strong> that fully dissolve into water and carbon dioxide after 3 to 4 months.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <span className="inline-block rounded-full bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-600">
                  Benchmark 3
                </span>
                <h4 className="font-display text-lg font-medium text-foreground">
                  Antiproliferative Drugs
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Drugs such as <strong>Everolimus, Zotarolimus, and Sirolimus</strong> prevent scar tissue from overgrowing inside the stent (restenosis). Third-generation DES have reduced the re-blockage rate to under 3%–4% at 5 years.
                </p>
              </div>
            </div>
          </div>

          {/* Stent Brand Comparison Table */}
          <div className="mt-16 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm">
            <h3 className="text-xl md:text-2xl font-display font-medium text-foreground mb-6">
              Major Drug-Eluting Stents Used in India: Side-by-Side Comparison
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm">
                <thead className="border-b border-border bg-muted/40 font-semibold text-foreground">
                  <tr>
                    <th className="p-4">Stent Model &amp; Origin</th>
                    <th className="p-4">Strut Thickness</th>
                    <th className="p-4">Polymer &amp; Drug</th>
                    <th className="p-4">Key Clinical Strength</th>
                    <th className="p-4">Statutory Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-muted-foreground">
                  <tr>
                    <td className="p-4 font-semibold text-foreground">
                      Medtronic Resolute Onyx™<br />
                      <span className="text-[10px] text-muted-foreground font-normal">USA (US FDA Approved)</span>
                    </td>
                    <td className="p-4 font-mono font-medium text-foreground">81 µm</td>
                    <td className="p-4">BioLinx™ Biocompatible + Zotarolimus</td>
                    <td className="p-4">Single wire core with platinum iridium center; exceptional visibility &amp; deliverability in tortuous vessels.</td>
                    <td className="p-4 font-semibold text-emerald-600">NPPA Capped (~₹38,265)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-foreground">
                      Abbott Xience Sierra / Xpedition™<br />
                      <span className="text-[10px] text-muted-foreground font-normal">USA (US FDA Approved)</span>
                    </td>
                    <td className="p-4 font-mono font-medium text-foreground">81 µm</td>
                    <td className="p-4">Fluorocoating + Everolimus</td>
                    <td className="p-4">Most clinically tested DES globally (&gt;15 million implants); lowest documented rate of late stent thrombosis.</td>
                    <td className="p-4 font-semibold text-emerald-600">NPPA Capped (~₹38,265)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-foreground">
                      Boston Scientific Synergy™<br />
                      <span className="text-[10px] text-muted-foreground font-normal">USA (US FDA Approved)</span>
                    </td>
                    <td className="p-4 font-mono font-medium text-foreground">74 µm</td>
                    <td className="p-4">Bioresorbable Polymer + Everolimus</td>
                    <td className="p-4">Ultra-thin platinum chromium frame; polymer completely resorbs within 3 months leaving a bare stent.</td>
                    <td className="p-4 font-semibold text-emerald-600">NPPA Capped (~₹38,265)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-foreground">
                      Meril BioMime / SMT Supraflex Cruz<br />
                      <span className="text-[10px] text-muted-foreground font-normal">India (CE Approved &amp; Global Trials)</span>
                    </td>
                    <td className="p-4 font-mono font-medium text-foreground">60 µm</td>
                    <td className="p-4">Bioresorbable PLLA + Sirolimus</td>
                    <td className="p-4">Among the thinnest strut profiles globally; highly competitive clinical equivalence demonstrated in European trials (TALENT trial).</td>
                    <td className="p-4 font-semibold text-emerald-600">NPPA Capped (~₹38,265)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 5 Questions Checklist */}
          <div className="mt-16 rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10 space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <FileText className="h-4 w-4" />
              <span>Patient Empowerment Checklist</span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-medium text-foreground">
              5 Questions to Ask Your Doctor Before an Angioplasty
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 text-xs text-muted-foreground leading-relaxed pt-2">
              <div className="rounded-xl border border-border bg-card p-4 space-y-1">
                <strong className="text-foreground">1. Which specific brand and model of stent will be used?</strong>
                <p>Ensure it is a verified 3rd-generation Drug-Eluting Stent with published safety trials.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 space-y-1">
                <strong className="text-foreground">2. Will you use IVUS or OCT imaging?</strong>
                <p>Intravascular imaging confirms optimal stent expansion, reducing repeat blockage risk by over 50%.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 space-y-1">
                <strong className="text-foreground">3. What is the stent's diameter and length?</strong>
                <p>Sizing must match the natural tapering of your artery precisely.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 space-y-1">
                <strong className="text-foreground">4. How long must I take blood thinners?</strong>
                <p>Modern DES often allow shorter DAPT duration (1 to 6 months) in patients at high bleeding risk.</p>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-navy via-navy to-slate-900 p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                Physician Consultation
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-medium">
                Discuss Stent Selection with Dr. Manish Aggarwal
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Every coronary lesion is anatomically unique. Schedule a consultation at Yashoda Medicity to discuss personalized stent sizing and imaging-guided precision.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-md"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp Query</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-xs font-semibold text-white hover:bg-white/20 transition"
              >
                <span>Book OPD Clinic</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <AppointmentSection />
    </div>
  );
}
