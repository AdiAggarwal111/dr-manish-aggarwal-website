import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Stethoscope,
  ShieldCheck,
  Scale,
  PhoneCall,
  Clock,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";

const pageTitle = `Terms of Consultation | ${siteConfig.name}`;
const pageDescription = `Terms of clinical consultation, second opinion scope, telemedicine guidelines & emergency care disclaimers under NMC regulations for ${siteConfig.name}.`;

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "Dr Manish Aggarwal terms of consultation, medical disclaimer cardiology, emergency heart attack disclaimer, second opinion angiogram terms, telemedicine cardiology Delhi NCR",
      },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.siteUrl}/terms` },
      { property: "og:image", content: `${siteConfig.siteUrl}/images/og-doctor.jpg` },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: pageTitle },
      { property: "twitter:description", content: pageDescription },
      { property: "twitter:image", content: `${siteConfig.siteUrl}/images/og-doctor.jpg` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.siteUrl}/terms` }],
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
              name: "Terms of Consultation",
              item: `${siteConfig.siteUrl}/terms`,
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
          url: `${siteConfig.siteUrl}/terms`,
          publisher: {
            "@type": "Physician",
            name: siteConfig.name,
            url: siteConfig.siteUrl,
          },
        }),
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="bg-background">
      <PageHeroHeader
        title="Terms of Clinical Consultation & Legal Notice"
        subtitle="National Medical Commission Regulations & Delhi Medical Council Standards"
        description="Clinical terms, telemedicine scope, diagnostic second opinion protocols, and statutory patient notices under National Medical Commission (NMC) regulations and Delhi Medical Council standards."
        badges={
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            <CheckCircle2 className="h-3.5 w-3.5" /> NMC &amp; Delhi Medical Council Compliant
          </span>
        }
      />

      <section className="px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-4xl space-y-10 text-foreground text-pretty">
          {/* CRITICAL EMERGENCY WARNING BANNER */}
          <div className="rounded-3xl border border-red-500/40 bg-red-500/10 p-6 sm:p-8">
            <div className="flex items-center gap-3 text-red-600 dark:text-red-400 font-semibold text-lg">
              <AlertTriangle className="h-6 w-6 shrink-0" />
              <span>CRITICAL EMERGENCY MEDICAL NOTICE</span>
            </div>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-red-950 dark:text-red-200 font-medium">
              This website, its online appointment booking forms, and its WhatsApp consultation desk
              are strictly intended for{" "}
              <strong>
                elective outpatient scheduling, second opinions, and medical information
              </strong>
              . They are NOT equipped for real-time emergency triage.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-red-900/80 dark:text-red-300/80 leading-relaxed">
              If you or a loved one is experiencing{" "}
              <strong>
                acute crushing chest pain, cold sweating, shortness of breath, unexplained
                dizziness, or symptoms of an active heart attack
              </strong>
              , do not wait for an online reply. Call our 24/7 Acute Cardiac Emergency Hotline
              immediately at{" "}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="font-bold underline text-red-600 dark:text-red-400"
              >
                {siteConfig.phoneDisplay}
              </a>{" "}
              or proceed without delay to the nearest 24-hour emergency room or catheterization
              laboratory.
            </p>
          </div>

          {/* Section 1: Doctor Identity & Accreditation */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              1. Professional Identity &amp; Statutory Medical Registration
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              This clinical portal is maintained for <strong>{siteConfig.name}</strong>, Director
              &amp; Department Head of Interventional Cardiology &amp; Structural Heart Specialist
              at <strong>{siteConfig.hospital}</strong>, Indirapuram, Ghaziabad, Uttar Pradesh
              (Delhi NCR).
            </p>
            <div className="rounded-2xl border border-border bg-card p-5 space-y-2 text-xs text-muted-foreground">
              <div>
                • <strong>Medical Qualifications:</strong> {siteConfig.credentials} (MBBS, MD
                General Medicine, DNB Cardiology, European Fellowship in Structural Heart
                Interventions, Budapest)
              </div>
              <div>
                • <strong>Statutory Licensure:</strong> Delhi Medical Council Registration No.{" "}
                <strong>{siteConfig.registration}</strong>
              </div>
              <div>
                • <strong>Professional Memberships:</strong> Fellow of the European Society of
                Cardiology (FESC), Cardiological Society of India (CSI), Delhi Medical Council (DMC)
              </div>
              <div>
                • <strong>Institutional Practice:</strong> {siteConfig.hospital}, Sector 9,
                Indirapuram, Ghaziabad, Delhi NCR, PIN: 201014
              </div>
            </div>
          </div>

          {/* Section 2: Educational Nature of Content */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              2. Educational Nature of Medical Content (No Self-Diagnosis)
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              All clinical overviews, condition explanations (such as Aortic Stenosis, Left Main
              CAD, Heart Failure with low ejection fraction), procedure descriptions (TAVI,
              Rotablation, Bifurcation Stenting, Pacemakers), and transparent pricing breakdowns
              published on this website are authored for{" "}
              <strong>patient educational and informational purposes only</strong> under National
              Medical Commission guidelines.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Nothing on this website constitutes a definitive medical diagnosis, clinical treatment
              prescription, or surgical guarantee. Every patient's coronary anatomy, calcification
              burden, and comorbidities are unique; therapeutic decisions require formal clinical
              evaluation, physical auscultation, 12-lead ECG, Echocardiography, and invasive
              coronary angiography.
            </p>
          </div>

          {/* Section 3: Physician-Patient Relationship */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              3. Establishment of the Physician-Patient Relationship
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Visiting this website, submitting an appointment inquiry, or corresponding through
              digital messaging does <strong>not</strong> automatically establish a formal legal or
              fiduciary physician-patient relationship.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A formal physician-patient relationship is established strictly upon:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
              <li>
                In-person clinical registration, history taking, and examination at{" "}
                <strong>{siteConfig.hospital}, Indirapuram</strong>, or
              </li>
              <li>
                A verified, authenticated Telemedicine consultation conducted in strict compliance
                with the <strong>Telemedicine Practice Guidelines of India</strong>.
              </li>
            </ul>
          </div>

          {/* Section 4: Angiogram CD Second Opinions */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              4. Scope of Independent Second Opinions on Angiogram CDs
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {siteConfig.name} offers independent diagnostic reviews of coronary angiogram CDs and
              echocardiography summaries for patients previously advised open-heart bypass surgery
              (CABG) or complex multi-vessel interventions:
            </p>
            <div className="rounded-2xl border border-border bg-secondary/30 p-5 space-y-3 text-xs leading-relaxed text-muted-foreground">
              <p>
                • <strong>Advisory Nature:</strong> An online or remote second opinion based solely
                on DICOM files, video clips, or written reports represents an advisory clinical
                assessment of anatomical feasibility (e.g., assessing whether transradial
                angioplasty, rotablation, or intravascular lithotripsy is viable versus surgical
                bypass).
              </p>
              <p>
                • <strong>Diagnostic Limits:</strong> A remote review does not replace direct
                clinical examination, bedside hemodynamic evaluation, or fractional flow reserve
                (FFR) physiological pressure testing performed inside the catheterization
                laboratory.
              </p>
              <p>
                • <strong>Integrity of Imaging:</strong> The accuracy of a second opinion depends
                entirely on the clarity, completeness, and clinical accuracy of the DICOM records,
                frame rates, and clinical summaries provided by the patient.
              </p>
            </div>
          </div>

          {/* Section 5: Telemedicine Practice Guidelines Compliance */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              5. Telemedicine &amp; Remote Consultation Guidelines (MoHFW)
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              All virtual and remote consultations coordinated through this portal strictly comply
              with the <strong>Telemedicine Practice Guidelines (2020)</strong> published by the
              Board of Governors in supersession of the Medical Council of India:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
              <li>
                <strong>Patient Identification:</strong> Patients must verify their legal identity
                and age prior to virtual clinical consultations.
              </li>
              <li>
                <strong>Explicit Consent:</strong> Initiating an appointment request constitutes
                voluntary consent to communicate with our clinical coordinators.
              </li>
              <li>
                <strong>Clinical Discretion:</strong> The consulting specialist reserves full
                clinical discretion to advise an immediate in-person physical consultation or
                emergency hospital transfer whenever remote assessment is clinically insufficient.
              </li>
            </ul>
          </div>

          {/* Section 6: Statutory Stent Pricing (NPPA Compliance) */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              6. Statutory Pricing Transparency &amp; NPPA Compliance
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              All coronary angioplasty and cardiac catheterization procedures conducted under{" "}
              {siteConfig.name}'s care strictly comply with the ceiling price regulations mandated
              by the{" "}
              <strong>National Pharmaceutical Pricing Authority (NPPA), Government of India</strong>
              :
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs text-muted-foreground">
              <li>
                • All Drug-Eluting Stents (DES) and bioresorbable scaffolds are billed strictly
                within statutory NPPA price caps.
              </li>
              <li>
                • Cost guides provided on this website are transparent clinical estimates based on
                standard room categories and do not constitute binding commercial quotations.
              </li>
              <li>
                • Actual hospitalization expenses depend on underlying comorbidities, ICU duration,
                specialized hardware (IVUS, OCT, Shockwave IVL balloons, Rotablation burrs), and
                cashless insurance scheme terms (CGHS, ECHS, or private TPAs).
              </li>
            </ul>
          </div>

          {/* Section 7: Jurisdiction & Dispute Resolution */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              7. Governing Law &amp; Jurisdiction
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              These terms, your use of this website, and any non-contractual obligations arising out
              of or in connection with it are governed exclusively by the laws of the{" "}
              <strong>Republic of India</strong>. Any dispute, claim, or controversy arising from
              website usage or clinical scheduling shall be subject to the exclusive jurisdiction of
              the competent courts in <strong>Ghaziabad / Delhi NCR, India</strong>.
            </p>
          </div>

          {/* Contact Box */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 space-y-3">
            <h3 className="font-display text-lg font-medium text-foreground flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" /> Questions Regarding Clinical Terms
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              If you require clarification on these clinical consultation terms or have specific
              inquiries about OPD appointments, please contact our clinical coordinator at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                {siteConfig.email}
              </a>{" "}
              or call{" "}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="text-foreground font-semibold hover:text-primary"
              >
                {siteConfig.phoneDisplay}
              </a>
              .
            </p>
          </div>

          <div className="pt-4 text-center text-xs text-muted-foreground border-t border-border">
            <span>
              Last Updated: October 2026 · Compliant with National Medical Commission Ethics Code
              &amp; MoHFW Telemedicine Regulations
            </span>
          </div>
        </div>
      </section>
    </article>
  );
}
