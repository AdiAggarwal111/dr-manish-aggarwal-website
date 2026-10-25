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
  AlertTriangle,
  Microscope,
  Layers,
  Sparkles,
  FileText,
  BadgeCheck,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageHeroHeader } from "@/components/page-hero-header";
import { AppointmentSection } from "@/components/appointment-form";

const pageTitle = `In-Stent Restenosis (ISR) Clinic: Chest Pain After Stent & DCB Treatment | ${siteConfig.name}`;
const pageDescription = `Experiencing chest tightness months or years after angioplasty? Learn how In-Stent Restenosis is diagnosed with OCT imaging and treated with Drug-Coated Balloons (DCB).`;
const pageUrl = `${siteConfig.siteUrl}/conditions/in-stent-restenosis-treatment`;

export const Route = createFileRoute("/conditions/in-stent-restenosis-treatment")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "chest pain after angioplasty, in stent restenosis treatment delhi ncr, can heart stent get blocked again, drug coated balloon DCB angioplasty ghaziabad, repeat blockage stent treatment, Dr Manish Aggarwal restenosis",
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
              { "@type": "ListItem", position: 2, name: "Conditions", item: `${siteConfig.siteUrl}/conditions` },
              { "@type": "ListItem", position: 3, name: "In-Stent Restenosis Clinic", item: pageUrl },
            ],
          },
          mainEntity: {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can a heart stent get blocked again after angioplasty?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. While modern Drug-Eluting Stents have a low re-blockage rate (3% to 7%), in-stent restenosis (ISR) can occur due to excessive scar tissue growth, stent under-expansion during original implantation, or new cholesterol plaque buildup. It is fully treatable without open surgery.",
                },
              },
              {
                "@type": "Question",
                name: "What is a Drug-Coated Balloon (DCB) and why is it preferred over a second stent?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Drug-Coated Balloon delivers an antiproliferative medication (like Paclitaxel or Sirolimus) directly to the vessel wall in 60 seconds to suppress scar tissue growth. It is then deflated and removed completely, following the 'Leave Nothing Behind' philosophy to avoid stacking multiple metal stent layers inside your artery.",
                },
              },
              {
                "@type": "Question",
                name: "If my stent is blocked, do I have to undergo open-heart bypass surgery?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In the vast majority of cases, no. Under intravascular imaging guidance (OCT/IVUS) and ultra-high pressure scoring balloons or rotablation, Dr. Manish Aggarwal successfully recanalizes blocked stents in the Cath Lab without median sternotomy surgery.",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
  component: InStentRestenosisPage,
});

function InStentRestenosisPage() {
  const cleanPhone = siteConfig.phoneRaw.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hello Dr. Manish Aggarwal, I had an angioplasty previously and am experiencing recurrent chest pain / shortness of breath. I would like a consultation on in-stent restenosis.",
  )}`;

  return (
    <div className="bg-background">
      <section className="px-6 pb-20 pt-8 md:px-12 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-[1400px]">
          <PageHeroHeader
            backLink={{ to: "/conditions", label: "Back to All Conditions" }}
            title="In-Stent Restenosis & Blocked Stent Clinic"
            subtitle={`Chest Pain After Previous Angioplasty · DCB 'Leave Nothing Behind' Protocol · ${siteConfig.hospital}`}
            description="If you felt great after your stent surgery but are now noticing chest heaviness, breathlessness on stairs, or early morning angina, learn how advanced OCT imaging and Drug-Coated Balloons fix failed stents without adding another permanent metal cage."
            badges={
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <Layers className="h-3.5 w-3.5" /> DCB "Leave Nothing Behind"
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground">
                  10-Micron OCT Diagnostics
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600">
                  <ShieldCheck className="h-3.5 w-3.5" /> Avoid Repeat Metal Stents
                </span>
              </>
            }
          />

          {/* Emotional Context */}
          <div className="mt-12 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  The Frustrating Patient Reality
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                  "I Already Had a Stent Placed. Why Am I Having Chest Heaviness Again?"
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Patients often believe a heart stent is a permanent, indestructible shield. But 6 months, 2 years, or 5 years later, walking up a slight incline triggers familiar chest burning, arm ache, or unusual breathlessness.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This condition is called <strong>In-Stent Restenosis (ISR)</strong>. The good news: you do <em>not</em> need to undergo open-heart surgery, nor do you need a second bulky stent crammed inside the first one. Modern precision cardiology uses high-definition light cameras (OCT) and <strong>Drug-Coated Balloons (DCB)</strong> to permanently reopen the original stent with zero extra foreign metal.
                </p>
              </div>

              <div className="lg:col-span-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="h-4 w-4" />
                  <span>Dr. Manish Aggarwal's Protocol</span>
                </div>
                <div className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                  <p>✓ <strong>Optical Coherence Tomography (OCT):</strong> Pinpoints why the original stent failed.</p>
                  <p>✓ <strong>Drug-Coated Balloons (DCB):</strong> Delivers medication to melt scar tissue without adding metal.</p>
                  <p>✓ <strong>Avoid Bypass Surgery:</strong> Over 95% of restenosis cases resolved in Cath Lab.</p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-semibold text-primary-foreground hover:opacity-90 transition shadow-sm"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Consult on Chest Pain After Stent</span>
                </a>
              </div>
            </div>
          </div>

          {/* 3 Reasons Why Stents Fail */}
          <div className="mt-16 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Scientific Diagnosis
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                The 3 Root Causes of In-Stent Restenosis
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Before treating a blocked stent, we must find out exactly why it failed in the first place.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                  <Layers className="h-5 w-5" />
                </div>
                <h4 className="font-display text-lg font-medium text-foreground">
                  1. Stent Under-Expansion
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  During original implantation, if intravascular imaging wasn't used, the stent may not have opened to 100% of the artery's width. Blood slows down in narrow pockets, causing premature blockage.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                  <Microscope className="h-5 w-5" />
                </div>
                <h4 className="font-display text-lg font-medium text-foreground">
                  2. Neointimal Hyperplasia
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Your body treats the metal stent like a scratch, producing aggressive healing scar tissue. In hyper-reactive patients or diabetics, this smooth muscle scar tissue overgrows and chokes the inner tube.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h4 className="font-display text-lg font-medium text-foreground">
                  3. Neoatherosclerosis
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Years after stenting, new cholesterol plaque can develop inside the stent lining if LDL cholesterol and blood pressure are not aggressively managed, creating a fresh blockage.
                </p>
              </div>
            </div>
          </div>

          {/* The Drug-Coated Balloon Solution */}
          <div className="mt-16 rounded-3xl border border-emerald-500/25 bg-emerald-500/5 p-6 md:p-10 space-y-6">
            <div className="max-w-3xl space-y-3">
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-700 uppercase">
                Breakthrough Therapy
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                Drug-Coated Balloons (DCB): The "Leave Nothing Behind" Solution
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                In the past, doctors treated a blocked stent by putting a second stent inside it ("stent-in-stent"). This created a rigid, bulky, double-metal sandwich that frequently clotted again.
              </p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Today, Dr. Manish utilizes <strong>Drug-Coated Balloon (DCB) angioplasty</strong>:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 pt-2">
              <div className="rounded-2xl border border-border bg-card p-5 space-y-2">
                <div className="font-bold text-xs text-emerald-600 uppercase">Step 1</div>
                <h4 className="font-semibold text-sm text-foreground">Ultra-High Pressure Prep</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Scoring and cutting balloons fracture the dense scar tissue inside the old stent to open the channel.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 space-y-2">
                <div className="font-bold text-xs text-emerald-600 uppercase">Step 2</div>
                <h4 className="font-semibold text-sm text-foreground">60-Second Drug Delivery</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The DCB balloon is inflated for 60 seconds, releasing therapeutic Paclitaxel or Sirolimus directly into the scar tissue cells.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 space-y-2">
                <div className="font-bold text-xs text-emerald-600 uppercase">Step 3</div>
                <h4 className="font-semibold text-sm text-foreground">Zero Added Metal</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The balloon is completely deflated and removed. The medication halts future cell division, leaving the artery clear.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-navy via-navy to-slate-900 p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                Specialized Stent Clinic
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-medium">
                Experiencing Recurrent Chest Pain?
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Do not ignore chest burning or heaviness after an angioplasty. Bring your previous discharge summary and Angio CD for high-resolution evaluation by Dr. Manish Aggarwal at Yashoda Medicity.
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
                <span>WhatsApp Previous Summary</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-xs font-semibold text-white hover:bg-white/20 transition"
              >
                <span>Book Clinic OPD</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <AppointmentSection />
    </div>
  );
}
