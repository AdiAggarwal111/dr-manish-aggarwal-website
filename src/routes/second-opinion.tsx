import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Disc,
  FileSearch,
  ArrowRight,
  MessageSquare,
  PhoneCall,
  CheckCircle2,
  Clock,
  HeartPulse,
  Activity,
  AlertCircle,
  FileText,
  Sparkles,
  HelpCircle,
  Stethoscope,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";
import { AppointmentSection } from "@/components/appointment-form";

const pageTitle = `Cardiac Second Opinion & Angiogram CD Review | ${siteConfig.name}`;
const pageDescription = `Independent digital second opinion on Angiogram CDs & 2D Echo reports. Evaluated personally by Dr. Manish Aggarwal. Avoid unnecessary bypass surgery or stents.`;

export const Route = createFileRoute("/second-opinion")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "cardiac second opinion Delhi NCR, review angiogram CD online, second opinion heart bypass surgery CABG, avoid unnecessary stent India, best cardiologist second opinion Ghaziabad, Dr Manish Aggarwal second opinion, heart surgery second opinion Yashoda Medicity",
      },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.siteUrl}/second-opinion` },
      { property: "og:image", content: `${siteConfig.siteUrl}/images/doctor-portrait.png` },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: pageTitle },
      { property: "twitter:description", content: pageDescription },
      { property: "twitter:image", content: `${siteConfig.siteUrl}/images/doctor-portrait.png` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.siteUrl}/second-opinion` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: pageTitle,
          description: pageDescription,
          url: `${siteConfig.siteUrl}/second-opinion`,
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
              { "@type": "ListItem", position: 2, name: "Cardiac Second Opinion & CD Review", item: `${siteConfig.siteUrl}/second-opinion` },
            ],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Why should I get a second opinion before undergoing bypass surgery (CABG) or stenting?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Cardiac second opinions frequently prevent unnecessary open-heart surgeries or redundant stent placements. Many patients told their blockages require open-heart surgery can be safely and effectively treated with complex radial angioplasty using advanced tools like Rotablation, Shockwave IVL, and IVUS imaging. Conversely, when surgery is genuinely necessary, an unbiased second opinion gives your family complete peace of mind.",
              },
            },
            {
              "@type": "Question",
              name: "How can I send my Angiogram CD or DICOM files for review?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can copy the files from the CD/Pen Drive to your computer and upload them to Google Drive, Dropbox, or WeTransfer and share the link via WhatsApp. Alternatively, you can send photos of your written Angiography Report and 2D Echo summary directly to our clinical coordinator on WhatsApp at +91 93481 31276.",
              },
            },
            {
              "@type": "Question",
              name: "How quickly will Dr. Manish Aggarwal review my case?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "For emergency cases where a patient is currently hospitalized in an ICU or cath lab holding area, Dr. Manish reviews the films within 2 hours. For elective case reviews, you will receive a detailed clinical response or OPD appointment slot within 12 to 24 hours.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: SecondOpinionPage,
});

function SecondOpinionPage() {
  const cleanPhone = siteConfig.phoneRaw.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hello Dr. Manish Aggarwal's clinical coordinator, I have an Angiogram CD / 2D Echo report and would like an urgent second opinion on my case.",
  )}`;

  return (
    <div className="bg-background">
      <section className="px-6 pb-20 pt-8 md:px-12 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-[1400px]">
          <PageHeroHeader
            title="Cardiac Second Opinion & Angiogram CD Review"
            subtitle={`Independent Case Evaluation · ${siteConfig.hospital}`}
            description="Radical diagnostic honesty before bypass surgery or multi-stent placement. Frame-by-frame DICOM analysis personally by European Structural Heart Fellow Dr. Manish Aggarwal."
            badges={
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <Disc className="h-3.5 w-3.5" /> Frame-by-Frame DICOM Review
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground">
                  2-Hour Emergency Turnaround
                </span>
                <a
                  href={siteConfig.hospitalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground transition hover:bg-secondary/80 hover:text-primary"
                  title="View Dr. Manish Aggarwal's Official Yashoda Medicity Profile"
                >
                  📍 {siteConfig.hospital}, Indirapuram ↗
                </a>
              </>
            }
          />

          {/* Diagnostic Honesty Manifesto */}
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-8 md:p-12 shadow-sm mb-16">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Director's Clinical Philosophy</span>
              <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                "The Most Expensive Stent is the One You Didn't Need."
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                In cardiovascular medicine, the pressure to make immediate decisions inside a hospital holding area can be overwhelming. Families are frequently told their loved one has "90% blockages" and must undergo emergency open-heart bypass surgery or 3 to 4 stents within the hour.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Unless a patient is actively suffering an acute ST-elevation myocardial infarction (active heart attack with ST elevation), guideline-directed medical therapy and physiological testing (FFR/IVUS) are essential before rushing into irreversible surgery. We provide completely independent, ethical, and evidence-based case assessments with zero corporate stent quotas.
              </p>
            </div>
          </div>

          {/* 3-Step Process for Sending Records */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Simple 3-Step Process</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-display font-medium text-foreground">
                How to Submit Your Angiography CD or Reports
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                You do not need to travel to the hospital to begin your second opinion. We review digital records for patients across Delhi NCR, Western UP, and internationally.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mb-4">
                  1
                </div>
                <h3 className="text-base font-semibold text-foreground">Send Summary or CD Files</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Photograph your Angiography Report and 2D Echo summary and send via WhatsApp. If you have the physical CD, copy the folder to Google Drive / WeTransfer or bring it to Yashoda Medicity OPD.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mb-4">
                  2
                </div>
                <h3 className="text-base font-semibold text-foreground">Frame-by-Frame Clinical Review</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Dr. Manish Aggarwal personally analyzes the raw angiographic run to evaluate SYNTAX score, vessel caliber, lesion calcification, and whether complex radial angioplasty can replace bypass surgery.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mb-4">
                  3
                </div>
                <h3 className="text-base font-semibold text-foreground">Clear, Unbiased Verdict</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Receive a structured case review within 2 hours for urgent hospitalized cases. If bypass surgery is truly safer, we will tell you honestly; if high-risk stenting is superior, we explain why.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-xs font-semibold text-white shadow-md hover:bg-emerald-700 transition"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Upload Angiogram Files on WhatsApp Now</span>
              </a>
            </div>
          </div>

          {/* Deep Clinical Comparison Callout */}
          <div className="mb-20 rounded-3xl border border-border bg-muted/40 p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Featured Clinical Guide</span>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                Told You Need Bypass Surgery (CABG)?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Discover the exact medical criteria (SYNTAX scores, diabetic status, left main lesions) used to decide whether you can safely receive minimally invasive radial stents or if open-heart surgery is genuinely necessary.
              </p>
            </div>
            <Link
              to="/second-opinion/angioplasty-vs-bypass"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-xs font-semibold text-primary-foreground shadow-md hover:opacity-90 transition"
            >
              <span>Read Angioplasty vs Bypass Guide</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* The 4 Questions We Answer */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground text-center mb-10">
              The 4 Questions Every Heart Second Opinion Must Answer
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    Q1
                  </div>
                  <h3 className="text-base font-semibold text-foreground">Is any procedure actually required right now?</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  In stable coronary artery disease, extensive international trials (such as the ISCHEMIA trial) demonstrate that optimal medical therapy with blood pressure and cholesterol control is often just as safe as rushing to place a stent in non-critical lesions.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    Q2
                  </div>
                  <h3 className="text-base font-semibold text-foreground">Can open-heart surgery be avoided with CHIP Angioplasty?</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Patients with severe calcium, total chronic occlusions (CTO), or bifurcation blockages are frequently told they have "no choice but bypass." With Rotablation and Shockwave IVL lithotripsy, Dr. Manish routinely stents lesions previously labeled inoperable.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    Q3
                  </div>
                  <h3 className="text-base font-semibold text-foreground">Do we have physiological proof (FFR or IVUS)?</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A 2D angiogram is just a silhouette. A blockage that looks 70% might actually allow 100% normal blood flow. We use Fractional Flow Reserve (FFR/iFR) to measure actual pressure gradients so you never pay for an unneeded stent.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    Q4
                  </div>
                  <h3 className="text-base font-semibold text-foreground">If surgery is necessary, what is the safest pathway?</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  When multi-vessel disease with high SYNTAX scores or severe diabetic microvascular involvement makes CABG genuinely the safer route for long-term survival, we tell you immediately and collaborate directly with senior cardiothoracic surgical teams.
                </p>
              </div>
            </div>
          </div>

          {/* Specialized Second Opinion Decision Portals */}
          <div className="mt-14 mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary uppercase">
                  Bypass Avoidance Desk
                </span>
                <h3 className="text-lg font-display font-medium text-foreground">
                  Advised Open-Heart Bypass (CABG)?
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Understand how advanced interventional technologies—Rotablation, Shockwave IVL, and CTO retrograde techniques—allow triple vessel stenting without cracking the breastbone.
                </p>
              </div>
              <Link
                to="/second-opinion/avoid-bypass-surgery"
                className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
              >
                <span>Explore Avoid Bypass Surgery Guide</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-bold text-muted-foreground uppercase">
                  Report Decrypter
                </span>
                <h3 className="text-lg font-display font-medium text-foreground">
                  Confused by 70%, 80%, or 90% Blockage Numbers?
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Learn when a stent is compulsory, why the LAD "Widow Maker" matters, and how FFR pressure wire testing prevents unnecessary procedures.
                </p>
              </div>
              <Link
                to="/second-opinion/report-interpretation"
                className="inline-flex items-center gap-2 text-xs font-semibold text-foreground hover:text-primary transition"
              >
                <span>Read Blockage Percentage Guide</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Cashless & Insurance Cross-Link */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-foreground">
                Worried About Mediclaim or TPA Cashless Approvals?
              </h3>
              <p className="text-xs text-muted-foreground">
                Learn about CGHS rates, pre-authorization under 60 minutes, and 10+ empanelled insurers at Yashoda Medicity.
              </p>
            </div>
            <Link
              to="/insurance"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-muted/60 px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-muted transition"
            >
              <span>Explore Cashless TPA Desk →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Appointment Booking */}
      <AppointmentSection />
    </div>
  );
}
