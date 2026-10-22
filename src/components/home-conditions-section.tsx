import { memo } from "react";
import { Link } from "@tanstack/react-router";
import {
  HeartPulse,
  Activity,
  Zap,
  ArrowRight,
  ShieldAlert,
  Layers,
  Heart,
  ChevronRight,
  CheckCircle2,
  Stethoscope,
} from "lucide-react";

interface CuratedCondition {
  slug: string;
  badge: string;
  title: string;
  metric: string;
  symptoms: string;
  percutaneousSolution: string;
  icon: typeof HeartPulse;
}

const CURATED_CONDITIONS: readonly CuratedCondition[] = [
  {
    slug: "severe-aortic-stenosis",
    badge: "Valvular Heart Disease",
    title: "Severe Aortic Stenosis & TAVI",
    metric: "50% 2-Yr Mortality If Untreated · Valve Area < 1.0 cm²",
    symptoms:
      "Progressive breathlessness climbing stairs, sudden fainting spells (syncope), heavy chest tightness, fatigue.",
    percutaneousSolution:
      "Transcatheter Aortic Valve Implantation (TAVI / TAVR) via pinhole groin puncture under conscious sedation, without cracked ribs or a bypass machine.",
    icon: HeartPulse,
  },
  {
    slug: "left-main-coronary-artery-disease",
    badge: "Complex Coronary · High-Risk PCI",
    title: "Left Main Disease & Bifurcation (DK-Crush)",
    metric: "Supplies >75% of Left Ventricular Myocardium",
    symptoms:
      "Severe retrosternal squeezing, breathlessness upon mild walking, or an alarming angiography report advising open CABG.",
    percutaneousSolution:
      "Double-Kissing Crush (DK-Crush) bifurcation stenting guided by high-definition IVUS / OCT imaging as a safe, proven percutaneous alternative to bypass.",
    icon: Layers,
  },
  {
    slug: "heart-failure-reduced-ejection-fraction",
    badge: "Heart Failure · Rhythm Therapy",
    title: "Low Ejection Fraction (LVEF 30–35%) & CRT-D",
    metric: "Severe Systolic Dysfunction · Normal LVEF 55–65%",
    symptoms:
      "Inability to walk without gasping, waking up breathless at night (PND), ankle edema, persistent dry cardiac cough.",
    percutaneousSolution:
      "Physiological CRT-D (Biventricular Pacing) & Conduction System Pacing (CSP) to resynchronize sluggish ventricles, boost EF, and prevent cardiac arrest.",
    icon: Zap,
  },
  {
    slug: "mitral-regurgitation-mitraclip",
    badge: "Mitral Valve · Structural Heart",
    title: "Severe Mitral Regurgitation & MitraClip (TEER)",
    metric: "Grade 3+ / 4+ Regurgitation · High Surgical Risk",
    symptoms:
      "Severe pulmonary congestion, exhaustion lying flat, sudden fluid accumulation, palpitations from secondary atrial fibrillation.",
    percutaneousSolution:
      "Transcatheter Edge-to-Edge Repair (MitraClip / TEER) via femoral vein access. Clips leaking leaflets together without heart-lung machine bypass.",
    icon: Heart,
  },
  {
    slug: "heart-attack-stemi-nstemi",
    badge: "Acute Coronary Syndrome · Golden Hour",
    title: "Acute Heart Attack (STEMI vs. NSTEMI)",
    metric: "Door-to-Balloon Time < 90 Min · 24/7 Primary Cath Lab",
    symptoms:
      "Crushing chest pressure radiating to left jaw or arm, cold sweats, unexplained nausea, atypical jaw/back pain in women & diabetics.",
    percutaneousSolution:
      "Immediate Primary Transradial Angioplasty (wrist access). Restores blood flow within the Golden Hour to salvage living heart muscle.",
    icon: ShieldAlert,
  },
  {
    slug: "in-stent-restenosis-repeat-blockage",
    badge: "Prior Stent Failure · Advanced Recanalization",
    title: "In-Stent Restenosis & Repeat Blockage",
    metric: "Zero Metal-in-Metal Stacking · Drug-Coated Balloons",
    symptoms:
      "Recurrent exertional chest discomfort or shortness of breath returning months or years after a previous stent procedure.",
    percutaneousSolution:
      "OCT-guided Drug-Coated Balloons (DCB) and scoring catheters. Delivers anti-proliferative medicine into old stents without locking extra metal inside.",
    icon: Activity,
  },
] as const;

export const HomeConditionsSection = memo(function HomeConditionsSection() {
  return (
    <section className="bg-background px-6 py-20 md:px-12 border-b border-border/80">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-border/60">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              Clinical Symptom &amp; Diagnostic Directory
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground">
              Understand Your Diagnosis &amp; Non-Surgical Options
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Before undergoing invasive open-chest surgery, explore modern catheter-based treatment
              alternatives practiced by Dr. Manish Aggarwal at Yashoda Medicity, Indirapuram.
            </p>
          </div>

          <Link
            to="/conditions"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-secondary hover:border-primary/40 transition shrink-0 shadow-sm"
          >
            <span>Explore All 14 Condition Hubs</span>
            <ArrowRight className="h-4 w-4 text-primary" />
          </Link>
        </div>

        {/* 6 Curated Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CURATED_CONDITIONS.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.slug}
                className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-sm transition duration-300 hover:border-primary/50 hover:shadow-md"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-2 pb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/80 px-3 py-1 text-[11px] font-semibold text-foreground">
                      <Stethoscope className="h-3 w-3 text-primary" />
                      {c.badge}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl font-medium text-foreground group-hover:text-primary transition leading-snug">
                    <Link
                      to="/conditions/$slug"
                      params={{ slug: c.slug }}
                      className="focus:outline-none"
                    >
                      {c.title}
                    </Link>
                  </h3>

                  {/* Key Metric Indicator */}
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-xl bg-amber-500/10 px-2.5 py-1 text-[11px] font-medium text-amber-900 dark:text-amber-300 border border-amber-500/20">
                    <CheckCircle2 className="h-3 w-3 shrink-0 text-amber-600 dark:text-amber-400" />
                    <span>{c.metric}</span>
                  </div>

                  {/* Warning Symptoms */}
                  <div className="mt-4 pt-3 border-t border-border/60 text-xs">
                    <span className="font-semibold text-foreground block mb-1">
                      Warning Signs &amp; Symptoms:
                    </span>
                    <p className="text-muted-foreground leading-relaxed text-justify-docs">
                      {c.symptoms}
                    </p>
                  </div>

                  {/* Interventional Alternative */}
                  <div className="mt-3 rounded-2xl bg-secondary/40 p-3 text-xs border border-border/40">
                    <span className="font-semibold text-primary block mb-1">
                      Minimally Invasive Catheter Solution:
                    </span>
                    <p className="text-foreground/90 leading-relaxed text-justify-docs">
                      {c.percutaneousSolution}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-6 pt-4 border-t border-border/60">
                  <Link
                    to="/conditions/$slug"
                    params={{ slug: c.slug }}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-primary group-hover:underline underline-offset-4"
                  >
                    <span>Read Complete Clinical Guide</span>
                    <ChevronRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Directory Footer Strip */}
        <div className="mt-12 rounded-2xl border border-border bg-card p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-center sm:text-left">
            <p className="font-display text-base sm:text-lg font-medium text-foreground">
              Diagnosed with a different cardiac condition or holding an abnormal echo?
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Read comprehensive clinical guides for CTO Blockages, Microvascular Angina, Adult ASD
              Device Closure, Renal Denervation &amp; Carotid Stenting.
            </p>
          </div>

          <Link
            to="/conditions"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-2.5 text-xs font-semibold text-white shadow hover:opacity-90 transition shrink-0"
          >
            <span>View All 14 Cardiology Hubs</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
});
