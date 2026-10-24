import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  CreditCard,
  Building2,
  CheckCircle2,
  Clock,
  FileText,
  PhoneCall,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Landmark,
  MessageSquare,
  AlertTriangle,
  BadgeCheck,
  Check,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";
import { AppointmentSection } from "@/components/appointment-form";

const pageTitle = `Cashless Mediclaim & Cardiac TPA Insurance Desk | ${siteConfig.name}`;
const pageDescription = `Complete cashless health insurance & TPA desk at Yashoda Medicity. CGHS & ECHS empanelled, 10+ TPAs, Star Health, HDFC Ergo, pre-auth under 60 mins.`;

export const Route = createFileRoute("/insurance")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "cashless cardiac insurance Delhi NCR, Yashoda Medicity TPA desk, Star Health angioplasty claim, CGHS empanelled cardiologist Ghaziabad, ECHS heart hospital Indirapuram, TAVR insurance coverage India, cashless mediclaim heart stent, Care health insurance pre auth, HDFC Ergo cardiac claim, Medi Assist cashless Yashoda",
      },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.siteUrl}/insurance` },
      { property: "og:image", content: `${siteConfig.siteUrl}/images/yashoda-medicity-hero.jpg` },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: pageTitle },
      { property: "twitter:description", content: pageDescription },
      { property: "twitter:image", content: `${siteConfig.siteUrl}/images/yashoda-medicity-hero.jpg` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.siteUrl}/insurance` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: pageTitle,
          description: pageDescription,
          url: `${siteConfig.siteUrl}/insurance`,
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
              { "@type": "ListItem", position: 2, name: "Insurance & Cashless TPA Desk", item: `${siteConfig.siteUrl}/insurance` },
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
              name: "Is TAVI / TAVR valve replacement covered under cashless health insurance in India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Under modern IRDAI clinical guidelines, minimally invasive percutaneous procedures such as TAVI (Transcatheter Aortic Valve Replacement) are covered by private insurers and TPAs when recommended for severe symptomatic aortic stenosis in patients at high surgical risk. Yashoda Medicity's 24/7 TPA Desk assists with prior authorization scoring and clinical letters from Dr. Manish Aggarwal.",
              },
            },
            {
              "@type": "Question",
              name: "How fast is emergency cashless approval for Primary Angioplasty (heart attack)?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "In acute cardiac emergencies (ST-Elevation Myocardial Infarction / Heart Attack), patient survival depends on minimizing Door-to-Balloon delay (<90 minutes). Life-saving catheterization is never delayed for paperwork. The emergency TPA Desk initiates provisional authorization immediately while preparing the cath lab, securing approval within 60 minutes.",
              },
            },
            {
              "@type": "Question",
              name: "Are CGHS and ECHS beneficiaries covered for cashless heart surgery and stenting at Yashoda Medicity?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Yashoda Medicity is fully empanelled for CGHS and ECHS beneficiaries. With a valid referral letter from your CGHS Wellness Centre or ECHS Polyclinic, admissions, angiography, angioplasty, and pacemaker implantations are processed 100% cashless at statutory government rates.",
              },
            },
            {
              "@type": "Question",
              name: "What documents are required to initiate cashless hospitalization for heart treatment?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You will need: 1) Patient's Health Insurance Card or Policy Schedule, 2) Patient's Aadhaar Card and PAN Card, 3) Doctor's OPD Prescription or Admission Advice, and 4) Recent diagnostic reports (ECG, 2D Echo, or Angiogram CD report).",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: InsurancePage,
});

const TPA_PROVIDERS = [
  { name: "Medi Assist TPA", badge: "24/7 Digital Desk", desc: "Fastest digital pre-auth for corporate & retail policies" },
  { name: "Paramount Health TPA", badge: "Preferred Partner", desc: "Dedicated institutional processing desk at Yashoda" },
  { name: "MDIndia Healthcare Services", badge: "Fast-Track", desc: "Wide coverage across PSU and corporate mediclaim" },
  { name: "Heritage Health TPA", badge: "Direct Panel", desc: "Specialized cashless processing for cardiac interventions" },
  { name: "Family Health Plan (FHPL)", badge: "Instant Approval", desc: "Integrated digital settlement for acute admissions" },
  { name: "Vidal Health TPA", badge: "Direct Panel", desc: "Smooth claim coordination for senior citizen policies" },
  { name: "Raksha Health TPA", badge: "Active Panel", desc: "Comprehensive inpatient claim support" },
];

const PRIVATE_INSURERS = [
  { name: "Star Health & Allied Insurance", badge: "Direct Empanelled", desc: "Cardiac Care & Comprehensive Health policies" },
  { name: "Care Health Insurance (Religare)", badge: "Instant Approval", desc: "Care Heart & critical illness policy coverage" },
  { name: "HDFC ERGO General Insurance", badge: "Preferred Partner", desc: "Optima Restore & My:Health Medisure cashless desk" },
  { name: "ICICI Lombard General Insurance", badge: "Fast-Track", desc: "Complete hospitalization & day-care angio coverage" },
  { name: "Niva Bupa (Max Bupa)", badge: "Preferred Partner", desc: "ReAssure & Health Companion cashless processing" },
  { name: "Bajaj Allianz Health", badge: "Direct Panel", desc: "Global Health & Health Guard cashless facility" },
  { name: "Tata AIG General Insurance", badge: "Active Panel", desc: "MediCare & Critical Illness cashless clearance" },
  { name: "Aditya Birla Health Insurance", badge: "Active Panel", desc: "Activ Health & Chronic Management policies" },
];

const GOVT_PANELS = [
  { name: "CGHS (Central Govt Health Scheme)", badge: "Fully Empanelled", desc: "Cashless cardiac procedures with official Wellness Centre referral" },
  { name: "ECHS (Ex-Servicemen Contributory Scheme)", badge: "Fully Empanelled", desc: "Honoring military veterans with zero out-of-pocket expenses" },
  { name: "DGEHS (Delhi Govt Employees)", badge: "Empanelled", desc: "Cashless inpatient coverage for Delhi government employees" },
  { name: "Northern Railway Medical Beneficiaries", badge: "Empanelled", desc: "Direct cashless referrals for railway employees and retirees" },
  { name: "NTPC & BHEL Corporate Panels", badge: "Corporate PSU", desc: "Direct institutional billing for public sector enterprise staff" },
];

function InsurancePage() {
  const cleanPhone = siteConfig.phoneRaw.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hello Dr. Manish Aggarwal's team, I would like to check cashless insurance coverage and pre-auth eligibility for a cardiac procedure.",
  )}`;

  return (
    <div className="bg-background">
      <PageHeroHeader
        badge={{
          icon: <ShieldCheck className="h-4 w-4 text-emerald-400" />,
          text: "Yashoda Medicity 24/7 TPA Desk",
        }}
        title="Cashless Mediclaim & Cardiac Insurance Desk"
        subtitle="100% cashless pre-authorization, statutory NPPA stent pricing, CGHS/ECHS empanelment, and zero out-of-pocket surprises under Director of Cardiology Dr. Manish Aggarwal."
        primaryAction={{
          label: "Check Cashless Eligibility on WhatsApp",
          href: whatsappUrl,
        }}
        secondaryAction={{
          label: "Call Emergency TPA Helpline",
          href: `tel:${siteConfig.phoneRaw}`,
        }}
      />

      {/* Main Content Pavilion */}
      <section className="py-16 px-6 md:px-12 border-b border-border/80">
        <div className="mx-auto max-w-7xl">
          
          {/* Fast-Track Emergency Banner */}
          <div className="mb-14 rounded-2xl border border-red-500/30 bg-red-500/10 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                <span>Acute Heart Attack (STEMI) TPA Protocol</span>
              </div>
              <h2 className="text-xl md:text-2xl font-display font-medium text-foreground">
                Life-Saving Primary Angioplasty is Never Delayed for Paperwork
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Under Dr. Manish Aggarwal’s Golden Hour door-to-balloon protocol, cath lab intervention commences immediately upon emergency arrival. Our dedicated 24/7 TPA coordination desk secures provisional emergency cashless clearance within 60 minutes while the patient is being stabilized.
              </p>
            </div>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-700"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call TPA Desk: {siteConfig.phoneDisplay}</span>
            </a>
          </div>

          {/* 4-Step Cashless Process */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Simple &amp; Transparent</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-display font-medium text-foreground">
                How Cashless Hospitalization Works at Yashoda Medicity
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                From initial admission advice to final bill settlement, our full-time insurance liaison team handles the entire pre-authorization process.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm relative">
                <span className="text-3xl font-display font-bold text-primary/30">01</span>
                <h3 className="mt-3 text-base font-semibold text-foreground">Admission Advice</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Dr. Manish Aggarwal issues an official admission note detailing the clinical diagnosis, recommended procedure (e.g. CAG, PTCA, TAVR), and estimated hospital stay.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm relative">
                <span className="text-3xl font-display font-bold text-primary/30">02</span>
                <h3 className="mt-3 text-base font-semibold text-foreground">Document Submission</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Provide your health insurance card, Aadhaar, PAN, and investigation reports to our dedicated TPA desk located inside the hospital lobby.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm relative">
                <span className="text-3xl font-display font-bold text-primary/30">03</span>
                <h3 className="mt-3 text-base font-semibold text-foreground">Pre-Auth Approval</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Our team submits the digital pre-authorization request. Emergency approvals are cleared within 60 minutes; planned elective procedures in 2 to 4 hours.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm relative">
                <span className="text-3xl font-display font-bold text-primary/30">04</span>
                <h3 className="mt-3 text-base font-semibold text-foreground">Cashless Discharge</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Upon procedure completion and clinical stabilization, the final hospital bill is settled directly by your insurer. You only settle non-medical consumables.
                </p>
              </div>
            </div>
          </div>

          {/* Insurer Directories Grid */}
          <div className="space-y-16">
            
            {/* 1. Private Insurers */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h2 className="text-xl md:text-2xl font-display font-medium text-foreground">
                  Leading Private Health Insurance Partners
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {PRIVATE_INSURERS.map((ins) => (
                  <div key={ins.name} className="rounded-xl border border-border bg-card p-5 shadow-sm hover:border-primary/50 transition">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full mb-2">
                      {ins.badge}
                    </span>
                    <h3 className="text-sm font-semibold text-foreground">{ins.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{ins.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. TPA Administrators */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="h-6 w-6 text-emerald-500" />
                <h2 className="text-xl md:text-2xl font-display font-medium text-foreground">
                  Empanelled Third-Party Administrators (TPAs)
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {TPA_PROVIDERS.map((tpa) => (
                  <div key={tpa.name} className="rounded-xl border border-border bg-card p-5 shadow-sm hover:border-emerald-500/50 transition">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full mb-2">
                      {tpa.badge}
                    </span>
                    <h3 className="text-sm font-semibold text-foreground">{tpa.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{tpa.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Government & PSU Panels */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Landmark className="h-6 w-6 text-purple-500" />
                <h2 className="text-xl md:text-2xl font-display font-medium text-foreground">
                  Government &amp; Public Sector Panels (CGHS &amp; ECHS)
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {GOVT_PANELS.map((pnl) => (
                  <div key={pnl.name} className="rounded-xl border border-border bg-card p-5 shadow-sm hover:border-purple-500/50 transition">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full mb-2">
                      {pnl.badge}
                    </span>
                    <h3 className="text-sm font-semibold text-foreground">{pnl.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{pnl.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Procedure-Specific Insurance Rules */}
          <div className="mt-20 rounded-3xl border border-border bg-muted/30 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground text-center mb-8">
              Procedure-Specific Cashless Coverage Rules
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  Coronary Angioplasty (PTCA)
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Covered by 100% of retail and group policies. Drug-Eluting Stents (DES) are billed strictly according to statutory NPPA caps (₹38,265 + GST). Catheterization, IVUS imaging, and post-procedure ICU care are included up to your sum insured.
                </p>
                <Link to="/costs/angioplasty-cost-delhi-ncr" className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                  <span>View Angioplasty Cost Breakdown →</span>
                </Link>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  TAVI / TAVR Valve Replacement
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Under the 2019 IRDAI Modern Treatment guidelines, percutaneous valve therapies are covered when surgery is deemed high risk (STS score &gt; 4% or age &gt; 65). Dr. Manish Aggarwal provides official Heart Team clinical scoring for smooth clearance.
                </p>
                <Link to="/costs/tavr-cost-delhi-ncr" className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                  <span>View TAVR Valve Cost Guide →</span>
                </Link>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  Coronary Angiography (CAG)
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Radial angiography is covered under Daycare Procedures by all insurers without requiring a mandatory 24-hour hospitalization. Most patients arrive in the morning, undergo radial imaging, and are discharged within 3 hours.
                </p>
                <Link to="/costs/angiography-cost-delhi-ncr" className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                  <span>View Angiography Cost Guide →</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Checklist for Cashless Admission */}
          <div className="mt-20 grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Required Paperwork</span>
              <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                Document Checklist for Hassle-Free Cashless Admission
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To guarantee zero delays during admission, please ensure your family brings the following physical or digital documents to the Yashoda Medicity TPA desk:
              </p>
              <ul className="space-y-3 pt-2 text-sm text-foreground">
                <li className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>Original Patient Aadhaar Card &amp; PAN Card</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>Health Insurance E-Card / Physical Card / Policy Schedule with TPA ID</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>Doctor’s Prescription &amp; OPD Consultation Paper from Dr. Manish Aggarwal</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>Diagnostic Film Reports (ECG, 2D Echo, Blood reports, or Angiogram CD)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>For CGHS/ECHS: Valid referral memo from respective wellness center / polyclinic</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-8 shadow-md">
              <h3 className="text-xl font-display font-medium text-foreground">
                Check Your Cashless Eligibility Before Admission
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Planning an elective angiography, stent placement, or valve repair? Send a photograph of your health insurance card over WhatsApp. Our hospital insurance coordinator will verify your room rent limit, co-payment clause, and cashless pre-approval timeline within 30 minutes.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp Mediclaim Card</span>
                </a>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-xs font-semibold text-foreground hover:bg-muted transition"
                >
                  <PhoneCall className="h-4 w-4 text-primary" />
                  <span>Call TPA Coordinator</span>
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Got Questions?</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-display font-medium text-foreground">
                Frequently Asked Insurance Questions
              </h2>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground">
                  Is TAVI / TAVR valve replacement covered under cashless health insurance in India?
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Yes. Under IRDAI guidelines, minimally invasive percutaneous procedures such as TAVI (Transcatheter Aortic Valve Replacement) are covered by leading private insurers when recommended for severe symptomatic aortic stenosis in patients who are geriatric or at elevated surgical risk. Yashoda Medicity's 24/7 TPA Desk assists with prior authorization scoring and clinical letters from Dr. Manish Aggarwal.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground">
                  How fast is emergency cashless approval for Primary Angioplasty (heart attack)?
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  In acute cardiac emergencies (ST-Elevation Myocardial Infarction / Heart Attack), patient survival depends on minimizing Door-to-Balloon delay (&lt;90 minutes). Life-saving catheterization is never delayed for paperwork. The emergency TPA Desk initiates provisional authorization immediately while preparing the cath lab, securing approval within 60 minutes.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground">
                  Are CGHS and ECHS beneficiaries covered for cashless heart surgery and stenting at Yashoda Medicity?
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Yes, Yashoda Medicity is fully empanelled for CGHS and ECHS beneficiaries. With a valid referral letter from your CGHS Wellness Centre or ECHS Polyclinic, admissions, angiography, angioplasty, and pacemaker implantations are processed 100% cashless at statutory government rates.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground">
                  What if my cashless claim is initially queried or rejected?
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Our hospital features a dedicated Medical Grievance &amp; Escalation liaison. If an insurer raises queries regarding medical necessity, Dr. Manish Aggarwal personally provides angiographic film snapshots, pressure gradient measurements, and Heart Team clinical justifications to overturn unwarranted queries.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Booking Form Integration */}
      <AppointmentSection />
    </div>
  );
}
