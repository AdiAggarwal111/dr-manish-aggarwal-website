import { memo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  CreditCard,
  Building,
  CheckCircle2,
  Clock,
  FileText,
  PhoneCall,
  HelpCircle,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Landmark,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";

interface InsuranceProvider {
  name: string;
  category: "Private Insurer" | "TPA Administrator" | "Govt & PSU Panel";
  badge?: string;
}

const PROVIDERS: readonly InsuranceProvider[] = [
  // Private Health Insurers
  {
    name: "Star Health & Allied Insurance",
    category: "Private Insurer",
    badge: "Direct Empanelled",
  },
  {
    name: "Care Health Insurance (Religare)",
    category: "Private Insurer",
    badge: "Instant Approval",
  },
  { name: "HDFC ERGO General Insurance", category: "Private Insurer", badge: "Preferred Partner" },
  { name: "ICICI Lombard General Insurance", category: "Private Insurer", badge: "Fast-Track" },
  {
    name: "Niva Bupa (Max Bupa) Health Insurance",
    category: "Private Insurer",
    badge: "Preferred Partner",
  },
  { name: "Bajaj Allianz General Insurance", category: "Private Insurer" },
  { name: "Tata AIG General Insurance", category: "Private Insurer" },
  { name: "Aditya Birla Health Insurance", category: "Private Insurer" },
  { name: "SBI General Insurance", category: "Private Insurer" },
  // TPA Administrators
  { name: "Medi Assist TPA", category: "TPA Administrator", badge: "24/7 Digital Desk" },
  { name: "Paramount Health Services TPA", category: "TPA Administrator", badge: "Fast-Track" },
  { name: "MDIndia Healthcare Services TPA", category: "TPA Administrator" },
  { name: "Heritage Health TPA", category: "TPA Administrator" },
  { name: "Raksha Health Insurance TPA", category: "TPA Administrator" },
  { name: "Vidal Health TPA", category: "TPA Administrator" },
  { name: "Family Health Plan TPA (FHPL)", category: "TPA Administrator" },
  // Govt & PSU Panels
  {
    name: "CGHS (Central Government Health Scheme)",
    category: "Govt & PSU Panel",
    badge: "Empanelled",
  },
  {
    name: "ECHS (Ex-Servicemen Contributory Health Scheme)",
    category: "Govt & PSU Panel",
    badge: "Empanelled",
  },
  {
    name: "DGEHS (Delhi Govt Employees Scheme)",
    category: "Govt & PSU Panel",
    badge: "Empanelled",
  },
  {
    name: "Northern Railway Medical Beneficiaries",
    category: "Govt & PSU Panel",
    badge: "Empanelled",
  },
  { name: "NTPC & BHEL Corporate Panels", category: "Govt & PSU Panel" },
  {
    name: "The New India Assurance / United India / Oriental",
    category: "Govt & PSU Panel",
    badge: "Public Sector",
  },
] as const;

interface InsuranceFAQ {
  question: string;
  answer: string;
}

const INSURANCE_FAQS: readonly InsuranceFAQ[] = [
  {
    question: "Is TAVI / TAVR covered under cashless health insurance at Yashoda Medicity?",
    answer:
      "Yes. Under modern IRDAI clinical guidelines, minimally invasive percutaneous procedures such as TAVI (Transcatheter Aortic Valve Replacement) are covered by leading private health insurers and TPAs when recommended for patients with severe symptomatic aortic stenosis who are geriatric or at high surgical risk. Yashoda Medicity's 24/7 TPA Desk assists patients with prior authorization documentation, surgical risk scoring (STS/EuroSCORE), and clinical justification letters directly authored by Dr. Manish Aggarwal.",
  },
  {
    question:
      "How fast is emergency cashless pre-authorization for Primary Angioplasty (heart attack)?",
    answer:
      "In acute cardiac emergencies (ST-Elevation Myocardial Infarction / Heart Attack), patient survival depends on minimizing Door-to-Balloon delay (<90 minutes). At Yashoda Medicity, life-saving catheterization lab procedures are never delayed for financial paperwork. Our dedicated emergency TPA Desk initiates emergency provisional authorization immediately while the clinical team prepares the cath lab, securing provisional clearance within 60 minutes.",
  },
  {
    question:
      "Are Drug-Eluting Stents (DES), IVUS/OCT imaging, and Rotablation covered under cashless insurance?",
    answer:
      "Yes. US-FDA and CE-approved Drug-Eluting Stents (DES), high-resolution intravascular ultrasound (IVUS), Optical Coherence Tomography (OCT) catheters, and diamond-burr rotablation / Intravascular Lithotripsy (IVL) consumables are covered up to the approved policy sum insured, strictly conforming to the National Pharmaceutical Pricing Authority (NPPA) statutory price caps with zero hidden billing.",
  },
  {
    question:
      "Are CGHS and ECHS beneficiaries covered for planned cardiac procedures and consultations?",
    answer:
      "Yes. Yashoda Medicity Indirapuram is empanelled for CGHS (Central Government Health Scheme) and ECHS (Ex-Servicemen Contributory Health Scheme) beneficiaries. With a valid referral permission letter from your CGHS Wellness Centre or ECHS Polyclinic, patients can undergo OPD consultations, diagnostic coronary angiographies, complex angioplasties, and permanent pacemaker implantations under Dr. Manish Aggarwal with 100% cashless coverage.",
  },
  {
    question:
      "What documents should I carry for smooth planned cashless admission at Yashoda Medicity?",
    answer:
      "Please carry: (1) Patient's Health Insurance Card / Policy Schedule copy; (2) Government Photo ID (Aadhaar Card, Voter ID, or Passport); (3) Corporate Employee ID (for group insurance); (4) Dr. Manish Aggarwal's OPD Consultation Prescription and admission recommendation; and (5) Recent diagnostic reports (ECG, 2D Echo, Blood tests, or previous Angiography CD).",
  },
] as const;

const STEPS = [
  {
    step: "01",
    title: "Document Desk Verification",
    desc: "Present your health card, Aadhaar, and Dr. Aggarwal's admission advice at our Ground Floor TPA Desk.",
  },
  {
    step: "02",
    title: "Digital Pre-Auth Dispatch",
    desc: "Our on-site TPA coordinators transmit digital pre-authorization forms and clinical notes directly to your insurer.",
  },
  {
    step: "03",
    title: "Provisional Approval (<60 Min)",
    desc: "Receive initial cashless sanction; immediate provisional clearance in acute emergencies with zero delay.",
  },
  {
    step: "04",
    title: "Seamless Zero-Cash Discharge",
    desc: "Final claim settled directly between hospital and insurer; transparent adherence to NPPA statutory stent pricing.",
  },
] as const;

export const InsuranceTpaSection = memo(function InsuranceTpaSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories = ["All", "Private Insurer", "TPA Administrator", "Govt & PSU Panel"] as const;

  const filteredProviders =
    activeCategory === "All" ? PROVIDERS : PROVIDERS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="insurance-tpa"
      className="px-6 py-20 md:px-12 md:py-28 bg-card border-t border-b border-border/80"
    >
      <div className="mx-auto max-w-[1360px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <ShieldCheck className="h-4 w-4" />
            <span>Cashless Hospitalization &amp; Mediclaim Assistance</span>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground">
            100% Cashless TPA &amp; Insurance Coverage at{" "}
            <a
              href={siteConfig.hospitalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition underline decoration-primary/30 underline-offset-8"
              title="View Dr. Manish Aggarwal's Official Yashoda Medicity Profile"
            >
              {siteConfig.hospital} ↗
            </a>
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            Fast-track pre-authorization, zero-delay emergency approvals, and direct on-campus
            empanelment with over 30+ leading private health insurers, TPAs, and central government
            health schemes.
          </p>
        </div>

        {/* 4 Feature Value Props */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-border/70 bg-background p-6 shadow-[var(--shadow-soft)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-medium text-foreground">
              Emergency Pre-Auth &lt;60 Min
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Immediate provisional authorization for acute heart attack interventions (Primary PCI)
              with zero delay to catheterization lab entry.
            </p>
          </div>

          <div className="rounded-3xl border border-border/70 bg-background p-6 shadow-[var(--shadow-soft)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5">
              <Building className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-medium text-foreground">
              30+ Insurers &amp; TPAs
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Direct campus desk integration with Star Health, Care, HDFC ERGO, ICICI Lombard, Medi
              Assist, Paramount, and all major TPAs.
            </p>
          </div>

          <div className="rounded-3xl border border-border/70 bg-background p-6 shadow-[var(--shadow-soft)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5">
              <Landmark className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-medium text-foreground">
              CGHS &amp; ECHS Empanelled
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Comprehensive cashless coverage for central government employees, retired defence
              personnel (ECHS), DGEHS, and Railway staff.
            </p>
          </div>

          <div className="rounded-3xl border border-border/70 bg-background p-6 shadow-[var(--shadow-soft)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-medium text-foreground">
              Transparent NPPA Pricing
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Strict statutory compliance with government price caps on drug-eluting stents and
              balloons, ensuring zero hidden out-of-pocket charges.
            </p>
          </div>
        </div>

        {/* Cashless Workflow Steps */}
        <div className="mt-16 rounded-3xl border border-border/80 bg-cream/30 p-8 md:p-12">
          <div className="max-w-2xl mb-8">
            <p className="text-xs font-semibold tracking-widest text-primary uppercase">
              The Protocol
            </p>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl text-foreground">
              4 Simple Steps to Seamless Cashless Care
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
              >
                <span className="font-display text-2xl font-bold text-primary/40">{s.step}</span>
                <h4 className="mt-2 font-display text-base font-semibold text-foreground">
                  {s.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Providers Showcase with Filter Pills */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                Empanelled Partners
              </p>
              <h3 className="mt-1 font-display text-2xl text-foreground">
                Accepted Insurers, TPAs &amp; Schemes
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary/80 text-secondary-foreground hover:bg-secondary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProviders.map((prov) => (
              <div
                key={prov.name}
                className="flex items-center justify-between rounded-2xl border border-border/80 bg-background p-4.5 transition hover:border-primary/40 hover:shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <CreditCard className="h-4 w-4 text-primary shrink-0" />
                  <div>
                    <p className="font-display text-sm font-medium text-foreground leading-snug">
                      {prov.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground">{prov.category}</p>
                  </div>
                </div>
                {prov.badge && (
                  <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                    {prov.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground text-center">
            * And 15+ additional corporate tie-ups and regional health plans. If your insurer is not
            listed above, our 24/7 TPA Desk can immediately check reciprocal empanelment.
          </p>
        </div>

        {/* Insurance FAQs Accordion */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Financial &amp; Coverage Clarity
            </span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl text-foreground">
              Frequently Asked Questions on Insurance &amp; TPA
            </h3>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {INSURANCE_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-background p-5 transition-all hover:border-primary/40"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="flex w-full items-center justify-between text-left font-display text-base md:text-lg text-foreground focus:outline-none"
                  aria-expanded={openFaq === idx}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground border-t border-border/60 pt-4">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated 24/7 TPA Desk Callout */}
        <div className="mt-16 rounded-3xl bg-navy p-8 md:p-12 text-navy-foreground shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-navy-foreground/70">
                Direct Hospital Support
              </span>
              <h4 className="mt-2 font-display text-2xl md:text-3xl font-medium">
                Questions About Your Health Insurance Coverage?
              </h4>
              <p className="mt-2 text-sm text-navy-foreground/80 max-w-xl">
                Speak directly with the Yashoda Medicity 24/7 Insurance &amp; TPA Helpdesk for
                real-time pre-authorization verification or query resolution before admission.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white/90"
              >
                <PhoneCall className="h-4 w-4" /> Call TPA Desk ({siteConfig.phone})
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Schedule Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
