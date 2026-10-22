import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Lock,
  FileText,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";

const pageTitle = `Privacy Policy & Patient Data Protection | ${siteConfig.name}`;
const pageDescription = `Statutory Privacy Policy compliant with India's Digital Personal Data Protection Act, 2023 (DPDP Act) and IT Act 2000. Learn how Dr. Manish Aggarwal protects patient confidentiality and medical diagnostic records.`;

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "Dr Manish Aggarwal privacy policy, DPDP Act 2023 patient privacy, cardiac medical data confidentiality, Yashoda Medicity patient data protection, health record privacy Delhi NCR",
      },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.siteUrl}/privacy` },
      { property: "og:image", content: `${siteConfig.siteUrl}/images/og-doctor.jpg` },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: pageTitle },
      { property: "twitter:description", content: pageDescription },
      { property: "twitter:image", content: `${siteConfig.siteUrl}/images/og-doctor.jpg` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.siteUrl}/privacy` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: siteConfig.siteUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Privacy Policy",
              item: `${siteConfig.siteUrl}/privacy`,
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: pageTitle,
          description: pageDescription,
          url: `${siteConfig.siteUrl}/privacy`,
          publisher: {
            "@type": "Physician",
            name: siteConfig.name,
            url: siteConfig.siteUrl,
          },
        }),
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <article className="bg-background">
      <PageHeroHeader
        title="Privacy Policy & Medical Data Confidentiality"
        subtitle="Digital Personal Data Protection Act, 2023 (DPDP Act) & Medical Confidentiality"
        description="Full statutory compliance with India's Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000, and National Medical Commission (NMC) ethical confidentiality standards."
        badges={
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            <ShieldCheck className="h-3.5 w-3.5" /> DPDP Act 2023 &amp; NMC Compliant
          </span>
        }
      />

      <section className="px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-4xl space-y-10 text-foreground text-pretty">
          {/* Executive Summary Card */}
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-6 sm:p-8">
            <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-400 font-semibold text-lg">
              <ShieldCheck className="h-6 w-6 shrink-0" />
              <span>Our Radical Medical Confidentiality Pledge</span>
            </div>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
              At the clinical practice of <strong>{siteConfig.name}</strong> (Director of
              Interventional Cardiology at {siteConfig.hospital}, Indirapuram), patient trust and
              diagnostic privacy are inviolable. We treat your personal details, consultation
              requests, and cardiac imaging records (Angiogram CDs, Echocardiograms, ECGs) with the
              highest tier of medical discretion.{" "}
              <strong>
                We do not sell, rent, monetize, or trade patient information with any commercial
                advertiser or third-party marketing broker.
              </strong>
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-emerald-800 dark:text-emerald-300">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" /> Zero Third-Party Advertising Trackers
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" /> 256-Bit TLS End-to-End Encryption
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" /> DPDP Act 2023 Compliant Handling
              </span>
            </div>
          </div>

          {/* Section 1: Statutory Framework */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              1. Statutory Framework &amp; Regulatory Scope
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              This Privacy Policy governs the collection, processing, storage, and protection of
              personal data and Sensitive Personal Data or Information (SPDI) through the official
              website <strong>{siteConfig.siteUrl}</strong>, operated for {siteConfig.name} (Delhi
              Medical Council Registration No. {siteConfig.registration}).
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Our data processing practices adhere strictly to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
              <li>
                <strong>The Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> of the
                Republic of India.
              </li>
              <li>
                <strong>The Information Technology Act, 2000</strong> (including Section 43A and the
                IT Reasonable Security Practices and Procedures and Sensitive Personal Data or
                Information Rules, 2011).
              </li>
              <li>
                <strong>National Medical Commission (NMC)</strong> Code of Medical Ethics and Delhi
                Medical Council standards regarding professional doctor-patient privilege.
              </li>
              <li>
                <strong>Telemedicine Practice Guidelines</strong> issued by the Board of Governors
                in supersession of the Medical Council of India (MoHFW).
              </li>
            </ul>
          </div>

          {/* Section 2: Information We Collect */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              2. Information We Collect &amp; Process
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We only collect data that is strictly necessary for triaging clinical consultations,
              appointment scheduling, and evaluating cardiac diagnostic second opinions:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 mt-3">
              <div className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-display text-base font-medium text-foreground flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" /> Personal Identity Details
                </h3>
                <ul className="mt-2 text-xs leading-relaxed text-muted-foreground space-y-1.5">
                  <li>• Patient Full Legal Name</li>
                  <li>• Contact Phone / Mobile Number</li>
                  <li>• Email Address</li>
                  <li>• Preferred Appointment Date &amp; Time Window</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-display text-base font-medium text-foreground flex items-center gap-2">
                  <Lock className="h-4 w-4 text-primary" /> Clinical &amp; Diagnostic Records
                </h3>
                <ul className="mt-2 text-xs leading-relaxed text-muted-foreground space-y-1.5">
                  <li>• Reported Cardiac Symptoms (e.g., exertional chest pain, syncope)</li>
                  <li>• Clinical Procedure of Interest (e.g., TAVI, CTO Angioplasty)</li>
                  <li>• Diagnostic Reports voluntarily shared (Echo EF, Angiogram CD clips)</li>
                  <li>• Cashless Insurance / TPA coverage status</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Purpose of Data Usage */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              3. Purpose of Clinical Data Processing
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your data is collected and processed exclusively for the following lawful clinical
              purposes:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-muted-foreground">
              <li>
                <strong>Clinical Appointment Coordination:</strong> Enabling our clinical desk at
                Yashoda Medicity to confirm, coordinate, and register your consultation slot with{" "}
                {siteConfig.name}.
              </li>
              <li>
                <strong>Pre-Procedure Case Review:</strong> Reviewing reported coronary blockages,
                valve gradients, and ejection fractions before outpatient consultation to ensure
                appropriate diagnostic equipment and cath lab availability.
              </li>
              <li>
                <strong>Cashless Insurance Verification:</strong> Facilitating pre-authorization
                inquiries with Yashoda Medicity's on-site TPA coordinators (CGHS, ECHS, Star Health,
                Care Health, HDFC ERGO, etc.).
              </li>
              <li>
                <strong>Appointment Receipts &amp; Reminders:</strong> Dispatching confirmation
                emails and SMS/WhatsApp notifications containing clinic directions and consultation
                reference IDs.
              </li>
            </ol>
          </div>

          {/* Section 4: Non-Disclosure */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              4. Strict Non-Disclosure &amp; Zero Monetization
            </h2>
            <div className="rounded-2xl border border-border bg-secondary/30 p-5 space-y-3">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Absolute Commercial Prohibition:</strong> We
                will never sell, lease, transfer, or disclose your personal or medical data to data
                brokers, pharmaceutical sales representatives, marketing agencies, or social media
                advertising platforms.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Data is shared strictly with authorized healthcare personnel directly involved in
                your clinical management at <strong>Yashoda Medicity, Indirapuram</strong>, or when
                mandated by statutory judicial process under applicable Indian law.
              </p>
            </div>
          </div>

          {/* Section 5: Data Security & Technical Measures */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              5. Data Security Safeguards &amp; Storage
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We employ military-grade physical, administrative, and technological security
              controls:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
              <li>
                <strong>End-to-End Encryption in Transit:</strong> All communications between your
                web browser and our edge servers are encrypted using modern Transport Layer Security
                (TLS 1.3 / 256-bit AES encryption) verified with HTTPS.
              </li>
              <li>
                <strong>Zero Insecure Web Database Exposure:</strong> Consultation requests are
                routed directly to authenticated clinical mailboxes via enterprise email
                infrastructure with zero unencrypted exposure on public databases.
              </li>
              <li>
                <strong>Role-Based Access Control:</strong> Only accredited clinical coordinators
                bound by medical non-disclosure agreements have access to submitted patient
                histories.
              </li>
              <li>
                <strong>Edge Security Shield:</strong> Continuous DDoS protection, Web Application
                Firewall (WAF) inspections, and automated rate limiting powered by Cloudflare's
                secure infrastructure.
              </li>
            </ul>
          </div>

          {/* Section 6: Patient Rights under DPDP Act */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              6. Your Rights under the DPDP Act, 2023
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              As a data principal under Indian data protection law, you possess explicit statutory
              rights:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 text-xs text-muted-foreground">
              <div className="rounded-xl border border-border bg-card p-4">
                <strong className="text-foreground block text-sm mb-1">Right to Access</strong>
                You may request a summary of the personal and contact data maintained in relation to
                your consultation request.
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <strong className="text-foreground block text-sm mb-1">Right to Correction</strong>
                You may request correction of any inaccurate, incomplete, or outdated personal or
                clinical details.
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <strong className="text-foreground block text-sm mb-1">Right to Erasure</strong>
                You may request the permanent deletion of your inquiry contact details, subject to
                statutory medical record retention obligations.
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <strong className="text-foreground block text-sm mb-1">
                  Right to Grievance Redressal
                </strong>
                You have the right to register concerns with our designated Clinical Data Privacy
                Officer.
              </div>
            </div>
          </div>

          {/* Section 7: Data Protection Officer Contact */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" /> 7. Data Privacy Officer &amp;
              Grievance Redressal
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              For any questions regarding this Privacy Policy, your medical confidentiality rights,
              or to submit a data erasure request, please contact our designated Practice
              Administrator:
            </p>

            <div className="grid gap-4 sm:grid-cols-3 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-foreground">Email Privacy Desk</span>
                  <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-foreground">Direct Practice Phone</span>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="text-foreground hover:text-primary"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-foreground">Clinical Location</span>
                  <span className="text-muted-foreground">
                    {siteConfig.hospital}, {siteConfig.locality}, Delhi NCR (201014)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 text-center text-xs text-muted-foreground border-t border-border">
            <span>
              Last Updated &amp; Effective Date: October 2026 · Compliant with DPDP Act 2023 &amp;
              NMC Medical Code
            </span>
          </div>
        </div>
      </section>
    </article>
  );
}
