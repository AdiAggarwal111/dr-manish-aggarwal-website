import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  PhoneCall,
  MessageSquare,
  HelpCircle,
  Building2,
  Clock,
  Landmark,
  AlertTriangle,
  Award,
  ArrowRight,
  UserCheck,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";
import { AppointmentSection } from "@/components/appointment-form";

const pageTitle = `CGHS & ECHS Cardiology Fast-Track Desk | Yashoda Medicity | ${siteConfig.name}`;
const pageDescription = `Complete guide for CGHS & ECHS beneficiaries receiving cardiology care under Dr. Manish Aggarwal at Yashoda Medicity, Indirapuram. 100% cashless package rates, referral rules & emergency STEMI admissions.`;
const pageUrl = `${siteConfig.siteUrl}/insurance/cghs-cardiology`;

export const Route = createFileRoute("/insurance/cghs-cardiology")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "CGHS cardiology Yashoda Medicity Indirapuram, CGHS angioplasty rate delhi ncr, ECHS cardiology empanelled hospital Ghaziabad, CGHS stent cashless approval, central government pensioner heart treatment, Dr Manish Aggarwal CGHS",
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
              { "@type": "ListItem", position: 2, name: "Insurance & Panels", item: `${siteConfig.siteUrl}/insurance` },
              { "@type": "ListItem", position: 3, name: "CGHS & ECHS Desk", item: pageUrl },
            ],
          },
          mainEntity: {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is Dr. Manish Aggarwal at Yashoda Medicity empaneled with CGHS and ECHS?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Yashoda Medicity Indirapuram is fully empaneled for cardiology and interventional procedures under CGHS (Central Government Health Scheme) and ECHS (Ex-Servicemen Contributory Health Scheme). Patients can receive expert cardiac care, angiography, stenting, and pacemakers under approved cashless government rates.",
                },
              },
              {
                "@type": "Question",
                name: "Can a CGHS patient be admitted in an emergency without a dispensary referral?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Under statutory Ministry of Health & Family Welfare regulations, in an acute medical emergency such as an acute heart attack (STEMI), severe chest pain, or unstable angina, CGHS beneficiaries can be admitted directly to an empaneled private hospital without prior dispensary referral. The emergency certificate is issued by the hospital at admission.",
                },
              },
              {
                "@type": "Question",
                name: "What documents are required for planned cashless CGHS cardiology admission?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You will need: 1) Original CGHS plastic card of patient and primary cardholder, 2) Valid referral slip / prescription from the CGHS Wellness Centre CMO, 3) Aadhaar Card copy, and 4) Recent ECG / Angiography diagnostic reports.",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
  component: CGHSCardiologyPage,
});

function CGHSCardiologyPage() {
  const cleanPhone = siteConfig.phoneRaw.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hello Yashoda Medicity CGHS/ECHS Cardiology Desk, I am a central government beneficiary inquiry regarding cashless cardiac treatment with Dr. Manish Aggarwal.",
  )}`;

  return (
    <div className="bg-background">
      <section className="px-6 pb-20 pt-8 md:px-12 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-[1400px]">
          <PageHeroHeader
            backLink={{ to: "/insurance", label: "Back to Insurance & TPA Desk" }}
            title="CGHS & ECHS Cardiology Fast-Track Desk"
            subtitle={`Government Cashless Healthcare Services · Dr. Manish Aggarwal · ${siteConfig.hospital}`}
            description="Dedicated patient desk for Central Government employees, pensioners, armed forces veterans, and defense dependents seeking world-class cardiac intervention at statutory package ceiling rates."
            badges={
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <Landmark className="h-3.5 w-3.5" /> 100% Empaneled Hospital
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground">
                  Statutory Govt Ceiling Packages
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600">
                  <Clock className="h-3.5 w-3.5" /> 24/7 Emergency Exemption Desk
                </span>
              </>
            }
          />

          {/* Key Value Proposition */}
          <div className="mt-12 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Dedicated Government Empanelment
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                  World-Class Cardiology Without Bureaucratic Delays
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Central government pensioners and armed forces families in Indirapuram, Vaishali, Vasundhara, Noida, and Ghaziabad often struggle with complicated dispensary paperwork or fear unexpected out-of-pocket hospital bills.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Under <strong>Dr. Manish Aggarwal (Director of Interventional Cardiology)</strong> at Yashoda Medicity, our dedicated Government Panel Desk assists beneficiaries at every single step—from referral validation and cashless pre-authorization to discharge documentation—ensuring zero unauthorized out-of-pocket billing.
                </p>
              </div>

              <div className="lg:col-span-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-3">
                <div className="font-bold text-xs uppercase tracking-wider text-primary flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Beneficiary Coverage</span>
                </div>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <strong className="text-foreground">CGHS:</strong> Central Govt Employees &amp; Pensioners
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <strong className="text-foreground">ECHS:</strong> Ex-Servicemen Contributory Health Scheme
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <strong className="text-foreground">DGEHS:</strong> Delhi Govt Employees Health Scheme
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <strong className="text-foreground">PSU Panels:</strong> NTPC, BHEL, GAIL, Railways, ONGC
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-semibold text-primary-foreground hover:opacity-90 transition"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>WhatsApp CGHS Coordinator</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency vs Planned Admission Protocol */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {/* Planned Admission */}
            <div className="rounded-3xl border border-border bg-card p-6 md:p-8 space-y-4">
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-600">
                Route 1: Planned / Elective Procedures
              </span>
              <h3 className="text-xl font-display font-medium text-foreground">
                Elective Angiography, Stenting &amp; Pacemakers
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                For non-emergency cardiac checkups, planned stent procedures, or second opinions:
              </p>
              <ol className="space-y-3 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted font-bold text-[11px] text-foreground">1</span>
                  <span><strong>Dispensary CMO Referral:</strong> Visit your local CGHS Wellness Centre or ECHS Polyclinic and obtain a cardiologist consultation / procedure referral.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted font-bold text-[11px] text-foreground">2</span>
                  <span><strong>Yashoda Medicity Helpdesk:</strong> Bring the referral slip to Director Suite 210 for priority OPD review with Dr. Manish.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted font-bold text-[11px] text-foreground">3</span>
                  <span><strong>Cashless Admission:</strong> Our desk coordinates with your parent department for 100% cashless pre-authorization.</span>
                </li>
              </ol>
            </div>

            {/* Emergency Admission */}
            <div className="rounded-3xl border border-rose-500/25 bg-rose-500/5 p-6 md:p-8 space-y-4">
              <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-bold text-rose-600">
                Route 2: 24/7 Acute Heart Attack Emergency
              </span>
              <h3 className="text-xl font-display font-medium text-foreground">
                Emergency Exemption Rule (No Referral Needed)
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                In acute life-threatening situations, <strong>Ministry of Health rules do NOT require a dispensary referral:</strong>
              </p>
              <div className="space-y-3 text-xs text-muted-foreground">
                <div className="rounded-xl border border-rose-500/20 bg-card p-3.5 space-y-1">
                  <strong className="text-rose-600">Statutory CGHS / ECHS Rule:</strong>
                  <p className="text-[11px] leading-relaxed">
                    Beneficiaries suffering acute chest pain, heart attacks (STEMI), or acute coronary syndrome can be brought directly to Yashoda Medicity Emergency 24/7.
                  </p>
                </div>
                <p>
                  ✓ The hospital emergency physician issues an Emergency Certificate on spot.
                </p>
                <p>
                  ✓ Immediate primary angioplasty is performed to save heart muscle without waiting for prior permission.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-4 py-3 text-xs font-semibold text-white hover:bg-rose-500 transition"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>24/7 Cardiac Emergency: {siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Document Checklist */}
          <div className="mt-16 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm">
            <h3 className="text-xl md:text-2xl font-display font-medium text-foreground mb-6">
              Required Documents Checklist for CGHS / ECHS Cashless Admission
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-border bg-background p-4 space-y-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <UserCheck className="h-4 w-4" />
                </div>
                <h4 className="font-semibold text-xs text-foreground">CGHS / ECHS Plastic Card</h4>
                <p className="text-[11px] text-muted-foreground leading-snug">
                  Original plastic card of patient and primary cardholder with active validity index.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-4 space-y-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                  <FileText className="h-4 w-4" />
                </div>
                <h4 className="font-semibold text-xs text-foreground">Dispensary Referral Memo</h4>
                <p className="text-[11px] text-muted-foreground leading-snug">
                  Valid referral from your CGHS Wellness Centre CMO or ECHS Polyclinic doctor.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-4 space-y-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <h4 className="font-semibold text-xs text-foreground">Government Photo ID</h4>
                <p className="text-[11px] text-muted-foreground leading-snug">
                  Copy of Aadhaar Card or Voter ID matching the name on the beneficiary card.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-4 space-y-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600">
                  <HeartPulse className="h-4 w-4" />
                </div>
                <h4 className="font-semibold text-xs text-foreground">Medical Records</h4>
                <p className="text-[11px] text-muted-foreground leading-snug">
                  Recent 2D Echo, ECG, or previous Angiography CD for clinical case file attachment.
                </p>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="mt-16 max-w-3xl space-y-6">
            <h3 className="text-xl md:text-2xl font-display font-medium text-foreground">
              Frequently Asked Questions: CGHS &amp; ECHS Cardiology
            </h3>

            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-5 space-y-2">
                <h4 className="font-semibold text-sm text-foreground">
                  Are Drug-Eluting Stents 100% cashless for CGHS beneficiaries?
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Yes. Under CGHS notifications, coronary angioplasty with US-FDA and CE-approved Drug-Eluting Stents (DES) is billed according to fixed CGHS package ceiling rates. The hospital bills CGHS directly with zero unauthorized out-of-pocket charges to the beneficiary.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 space-y-2">
                <h4 className="font-semibold text-sm text-foreground">
                  How does room entitlement work for CGHS pensioners?
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Room category depends on the pay matrix level / basic pension listed on your CGHS plastic card: General ward (basic pay up to ₹47,600), Semi-Private / Twin-Sharing (basic pay ₹47,601 to ₹63,100), and Private ward (basic pay above ₹63,100).
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 space-y-2">
                <h4 className="font-semibold text-sm text-foreground">
                  Where is Yashoda Medicity located for CGHS beneficiaries?
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Yashoda Medicity is situated in Indirapuram, Ghaziabad, directly accessible via NH-9 and the Delhi-Meerut Expressway, making it conveniently reachable for beneficiaries from Noida, Ghaziabad, East Delhi, and Greater Noida.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <AppointmentSection />
    </div>
  );
}
