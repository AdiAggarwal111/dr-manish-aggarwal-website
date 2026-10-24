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
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";
import { AppointmentSection } from "@/components/appointment-form";

const pageTitle = `Angioplasty vs Bypass Surgery (CABG): Which is Right for You? | ${siteConfig.name}`;
const pageDescription = `Clinical comparison between Stents (Angioplasty) vs Open-Heart Bypass Surgery (CABG). Recovery time, SYNTAX score, diabetic risks, and expert second opinions.`;

export const Route = createFileRoute("/second-opinion/angioplasty-vs-bypass")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "angioplasty vs bypass surgery, CABG vs stent success rate, can bypass be avoided, SYNTAX score calculator heart, left main stenosis stent or bypass, diabetic heart blockage treatment, Dr Manish Aggarwal second opinion",
      },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${siteConfig.siteUrl}/second-opinion/angioplasty-vs-bypass` },
      { property: "og:image", content: `${siteConfig.siteUrl}/images/doctor-portrait.png` },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: pageTitle },
      { property: "twitter:description", content: pageDescription },
      { property: "twitter:image", content: `${siteConfig.siteUrl}/images/doctor-portrait.png` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.siteUrl}/second-opinion/angioplasty-vs-bypass` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: pageTitle,
          description: pageDescription,
          url: `${siteConfig.siteUrl}/second-opinion/angioplasty-vs-bypass`,
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
              { "@type": "ListItem", position: 3, name: "Angioplasty vs Bypass", item: `${siteConfig.siteUrl}/second-opinion/angioplasty-vs-bypass` },
            ],
          },
        }),
      },
    ],
  }),
  component: AngioplastyVsBypassPage,
});

function AngioplastyVsBypassPage() {
  const cleanPhone = siteConfig.phoneRaw.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hello Dr. Manish Aggarwal, I have been advised bypass surgery (CABG) and would like an expert second opinion on whether angioplasty is possible.",
  )}`;

  return (
    <div className="bg-background">
      <section className="px-6 pb-20 pt-8 md:px-12 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-[1400px]">
          <PageHeroHeader
            title="Angioplasty vs Bypass Surgery (CABG)"
            subtitle={`Clinical Decision Matrix · Stent vs Surgery · ${siteConfig.hospital}`}
            description="Understanding when minimally invasive radial stenting is clinically equivalent to open-heart surgery, and when bypass remains the safer long-term choice."
            badges={
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <Activity className="h-3.5 w-3.5" /> Evidence-Based Cardiology
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground">
                  SYNTAX Score Evaluation
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

          {/* Executive Overview */}
          <div className="max-w-3xl mb-14 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">The Crucial Decision</span>
            <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground">
              Making an Informed Choice Before Irreversible Surgery
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              When an angiogram demonstrates multi-vessel coronary artery disease or a high-grade blockage in the Left Anterior Descending (LAD) artery, patients and their families are thrust into an agonizing decision: <strong>Percutaneous Coronary Intervention (Angioplasty with Drug-Eluting Stents)</strong> or <strong>Coronary Artery Bypass Grafting (CABG Open-Heart Surgery)</strong>.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Neither procedure is universally "better." The correct answer depends entirely on lesion anatomy, SYNTAX score complexity, presence of diabetes, and the patient's biological age.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="mb-20 overflow-x-auto rounded-3xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="border-b border-border bg-muted/50 font-semibold text-foreground">
                <tr>
                  <th className="p-4 md:p-5">Clinical Factor</th>
                  <th className="p-4 md:p-5 text-primary">Coronary Angioplasty (PTCA / Stents)</th>
                  <th className="p-4 md:p-5 text-rose-500">Coronary Bypass Surgery (CABG)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr>
                  <td className="p-4 md:p-5 font-medium text-foreground">Invasiveness</td>
                  <td className="p-4 md:p-5">Minimally invasive; needle puncture through wrist (radial artery)</td>
                  <td className="p-4 md:p-5">Major surgery; breastbone opened (median sternotomy) or robotic mini-CABG</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 font-medium text-foreground">Anesthesia</td>
                  <td className="p-4 md:p-5">Local anesthesia; patient is awake and talking with the team</td>
                  <td className="p-4 md:p-5">General anesthesia with ventilator support</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 font-medium text-foreground">Hospital Stay</td>
                  <td className="p-4 md:p-5">24 to 48 hours</td>
                  <td className="p-4 md:p-5">6 to 8 days (including 2 to 3 days in cardiac ICU)</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 font-medium text-foreground">Return to Normal Routine</td>
                  <td className="p-4 md:p-5">3 to 5 days</td>
                  <td className="p-4 md:p-5">6 to 12 weeks for complete breastbone healing</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 font-medium text-foreground">Elderly / High-Risk Patients</td>
                  <td className="p-4 md:p-5">Excellent option for frail, elderly (&gt;70 yrs), or COPD patients</td>
                  <td className="p-4 md:p-5">High operative risk in elderly or patients with kidney failure</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 font-medium text-foreground">SYNTAX Score Range</td>
                  <td className="p-4 md:p-5">Low to intermediate (0 – 22; up to 32 with Rotablation/IVUS)</td>
                  <td className="p-4 md:p-5">High (&gt;33) or complex multi-vessel diabetic disease</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 font-medium text-foreground">Statutory Price Cap</td>
                  <td className="p-4 md:p-5">DES stents capped at ₹38,265 by NPPA</td>
                  <td className="p-4 md:p-5">Hospital surgical package based on ICU stay and graft count</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Clinical Decision Framework: When is Angioplasty Preferred? */}
          <div className="grid gap-8 lg:grid-cols-2 mb-20">
            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4" />
                <span>When Angioplasty is the Superior Choice</span>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-medium text-foreground">
                Candidates for Complex Stenting (CHIP)
              </h3>
              <ul className="space-y-3 text-xs md:text-sm text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Single or Double Vessel Disease:</strong> Lesions in the LAD or circumflex artery without severe diffuse branching.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Elderly Patients (&gt;65 years):</strong> Minimizing systemic stress, blood transfusions, and prolonged ICU recovery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Severe Calcified Blockages:</strong> Lesions previously declared "unstentable" that can be safely cracked using Rotablation or Shockwave IVL lithotripsy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Active Heart Attack (STEMI):</strong> Immediate emergency primary angioplasty restores blood flow in minutes, saving heart muscle.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-rose-500/20 bg-rose-500/5 p-8 space-y-4">
              <div className="flex items-center gap-2 text-rose-500 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>When Bypass Surgery (CABG) is Safer</span>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-medium text-foreground">
                When Open-Heart Surgery is the Honest Answer
              </h3>
              <ul className="space-y-3 text-xs md:text-sm text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>Complex Triple Vessel Disease in Diabetics:</strong> Long-term clinical trials show CABG with internal mammary artery (LIMA) grafts offers superior 10-year survival.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>SYNTAX Score &gt; 33:</strong> Diffuse, tortuous, total blockages where stenting would require 5 or more long stents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>Unfavorable Left Main Bifurcation:</strong> When bifurcation angles are high-risk and heart ejection fraction is poor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>Co-existing Valve Disease:</strong> Patients who require simultaneous surgical valve replacement and coronary revascularization.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Second Opinion Call to Action */}
          <div className="rounded-3xl border border-border bg-gradient-to-br from-navy via-navy to-slate-900 p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">Unbiased Case Review</span>
              <h3 className="text-2xl md:text-3xl font-display font-medium">
                Upload Your Angiography CD for Frame-by-Frame Evaluation
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Dr. Manish Aggarwal personally reviews DICOM films to verify your SYNTAX score, fractional flow reserve, and whether complex radial angioplasty can safely prevent surgery.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-md"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp CD Report</span>
              </a>
              <Link
                to="/second-opinion"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-xs font-semibold text-white hover:bg-white/20 transition"
              >
                <span>Second Opinion Protocol</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <AppointmentSection />
    </div>
  );
}
