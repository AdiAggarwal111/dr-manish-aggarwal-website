import { useState, useId } from "react";
import {
  AlertTriangle,
  Flame,
  HeartPulse,
  PhoneCall,
  Activity,
  CheckCircle2,
  HelpCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Info,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";

interface QuestionOption {
  label: string;
  sublabel: string;
  score: number; // Positive = Cardiac, Negative = Acidity
  isRedFlag?: boolean;
}

interface Question {
  id: string;
  title: string;
  category: string;
  options: QuestionOption[];
}

const QUESTIONS: Question[] = [
  {
    id: "nature",
    title: "1. What does the pain or discomfort feel like?",
    category: "Pain Character",
    options: [
      {
        label: "Sharp burning or heat in center of chest / food pipe",
        sublabel: "Feels like acid rising up, worse when lying flat or bending forward",
        score: -3,
      },
      {
        label: "Vague fullness, bloating, or uncomfortable gas pressure",
        sublabel: "Comes and goes, feels like trapped air or heavy fullness",
        score: 0,
      },
      {
        label: "Heavy crushing tightness, constriction, or weight on chest",
        sublabel: "Feels like an elephant sitting on chest, tight band, or squeezing fist",
        score: 5,
        isRedFlag: true,
      },
    ],
  },
  {
    id: "trigger",
    title: "2. When did the discomfort start or worsen?",
    category: "Trigger & Exertion",
    options: [
      {
        label: "After eating a heavy, oily, or spicy meal (or while lying down)",
        sublabel: "Started 30-90 minutes after food, especially late night dinner",
        score: -3,
      },
      {
        label: "Sharp stabbing twinge when turning body, breathing deeply, or pressing ribs",
        sublabel: "Pain can be reproduced with finger pressure on chest wall or muscle twist",
        score: -2,
      },
      {
        label: "During physical exertion (walking briskly, climbing stairs, carrying loads)",
        sublabel: "Began or aggravated by physical effort, cold weather, or emotional stress",
        score: 5,
        isRedFlag: true,
      },
    ],
  },
  {
    id: "radiation",
    title: "3. Where does the pain radiate or spread?",
    category: "Pain Radiation",
    options: [
      {
        label: "Confined to center of chest, throat, or mouth with sour taste",
        sublabel: "Burning sensation rises upward toward neck/mouth without arm spread",
        score: -2,
      },
      {
        label: "Pinpoint spot on left or right breastbone (can touch with 1 finger)",
        sublabel: "Very localized, does not travel anywhere else in the body",
        score: -2,
      },
      {
        label: "Spreads to left shoulder, left arm, inner wrist, neck, jaw, or upper back",
        sublabel: "Classic ischemic radiation to arm, lower jaw teeth, or interscapular region",
        score: 5,
        isRedFlag: true,
      },
    ],
  },
  {
    id: "relief",
    title: "4. What provides relief from the pain?",
    category: "Relief Mechanism",
    options: [
      {
        label: "Antacids, cold milk, drinking water, or passing gas / burping",
        sublabel: "Pain visibly decreases within 10–20 minutes of taking Gelusil / Digene / Pantoprazole",
        score: -4,
      },
      {
        label: "Changing body posture, stretching, or shallow breathing",
        sublabel: "Relieved when changing sitting position or using pain balm",
        score: -2,
      },
      {
        label: "Ceasing physical exertion / resting quietly (or sublingual sorbitrate)",
        sublabel: "Antacids did NOT help; settles down within 5–10 minutes of complete resting",
        score: 5,
        isRedFlag: true,
      },
    ],
  },
  {
    id: "duration",
    title: "5. How long has this continuous episode lasted?",
    category: "Duration",
    options: [
      {
        label: "Fleeting momentary twinges lasting only 2 to 5 seconds",
        sublabel: "Sharp electric shocks that vanish instantly",
        score: -2,
      },
      {
        label: "Continuous mild burn for multiple hours or days with sour throat",
        sublabel: "Chronic smoldering reflux, constant for hours without emergency distress",
        score: -2,
      },
      {
        label: "Continuous severe pressure lasting more than 15 to 20 minutes without easing",
        sublabel: "Unrelenting heavy pressure that is not abating with rest",
        score: 5,
        isRedFlag: true,
      },
    ],
  },
];

const RED_FLAG_SYMPTOMS = [
  { id: "sweat", label: "Cold profuse sweating (diaphoresis / clammy skin)", score: 5, critical: true },
  { id: "breath", label: "Sudden breathlessness or gasping for air", score: 4, critical: true },
  { id: "dizzy", label: "Severe dizziness, lightheadedness, or feeling faint", score: 4, critical: true },
  { id: "nausea", label: "Nausea or sudden unexplained vomiting", score: 3 },
  { id: "palp", label: "Rapid irregular racing heartbeat (palpitations)", score: 3 },
];

const RISK_FACTORS = [
  { id: "age", label: "Age: Male >40 or Female >50", score: 2 },
  { id: "diabetes", label: "Diagnosed Diabetes (High risk of silent heart attacks)", score: 3 },
  { id: "bp_smoker", label: "High Blood Pressure or active cigarette/beedi smoking", score: 2 },
  { id: "history", label: "Past history of Angioplasty, Stent, Bypass, or Heart Attack", score: 4 },
  { id: "family", label: "Strong family history of premature heart disease (parents/siblings <55)", score: 2 },
];

export function ChestPainTriageTool() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedRisks, setSelectedRisks] = useState<string[]>([]);
  const [hasCalculated, setHasCalculated] = useState(false);

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const toggleRisk = (id: string) => {
    setSelectedRisks((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === QUESTIONS.length;

  // Calculate score
  let cardiacScore = 0;
  let hasCriticalRedFlag = false;

  Object.values(answers).forEach((score) => {
    cardiacScore += score;
  });

  RED_FLAG_SYMPTOMS.forEach((sym) => {
    if (selectedSymptoms.includes(sym.id)) {
      cardiacScore += sym.score;
      if (sym.critical) hasCriticalRedFlag = true;
    }
  });

  RISK_FACTORS.forEach((risk) => {
    if (selectedRisks.includes(risk.id)) {
      cardiacScore += risk.score;
    }
  });

  const isEmergency = cardiacScore >= 10 || hasCriticalRedFlag;
  const isModerate = !isEmergency && cardiacScore >= 3;
  const isLowRisk = !isEmergency && !isModerate;

  const handleReset = () => {
    setAnswers({});
    setSelectedSymptoms([]);
    setSelectedRisks([]);
    setHasCalculated(false);
  };

  const triggerCalculate = () => {
    setHasCalculated(true);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden text-slate-800">
      {/* Tool Header */}
      <div className="bg-gradient-to-r from-navy via-slate-900 to-navy p-6 md:p-8 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30">
              <HeartPulse className="h-6 w-6 animate-pulse" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-300">
                Clinical Symptom Evaluator
              </span>
              <h2 className="text-xl md:text-2xl font-bold font-display text-white">
                Chest Pain: Heart Attack vs Acidity Triage Tool
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs text-slate-200 backdrop-blur-sm border border-white/10">
            <Clock className="h-3.5 w-3.5 text-amber-300" />
            <span>Takes 90 Seconds · Clinical Protocol</span>
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-300 max-w-3xl leading-relaxed">
          In India, over 40% of critical heart attack treatment delays happen because patients assume chest pain is &ldquo;just gas or acidity&rdquo;. Use this evidence-based assessment to check your symptoms against classic cardiac ischemic patterns.
        </p>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        {/* Step Progress */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="text-sm font-semibold text-slate-700">
            Step 1 of 3: Core Pain Characteristics ({answeredCount} of {QUESTIONS.length} answered)
          </div>
          <div className="h-2 w-32 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(answeredCount / QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Core Questions */}
        <div className="space-y-6">
          {QUESTIONS.map((q) => (
            <div key={q.id} className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-200/70 px-2.5 py-0.5 rounded">
                  {q.category}
                </span>
                {answers[q.id] !== undefined && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-800">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Answered
                  </span>
                )}
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-3">{q.title}</h3>
              <div className="grid gap-2.5 sm:grid-cols-1">
                {q.options.map((opt, idx) => {
                  const isSelected = answers[q.id] === opt.score;
                  return (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.score }))}
                      className={`text-left p-3.5 rounded-lg border transition text-sm flex items-start gap-3 ${
                        isSelected
                          ? opt.score > 0
                            ? "border-rose-500 bg-rose-50/70 text-rose-950 font-medium ring-1 ring-rose-400"
                            : "border-primary bg-primary/5 text-slate-900 font-medium ring-1 ring-primary"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/80 text-slate-700"
                      }`}
                    >
                      <div
                        className={`mt-0.5 h-4 w-4 shrink-0 rounded-full border flex items-center justify-center ${
                          isSelected
                            ? opt.score > 0
                              ? "border-rose-600 bg-rose-600 text-white"
                              : "border-primary bg-primary text-white"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{opt.label}</div>
                        <div className="text-xs text-slate-700 mt-0.5">{opt.sublabel}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Step 2: Red Flag Symptoms */}
        <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-5">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-4 w-4 text-rose-500" />
            <h3 className="text-base font-semibold text-slate-900">
              Step 2: Are you experiencing any accompanying warning signs?
            </h3>
          </div>
          <p className="text-xs text-slate-700 mb-4">
            Select all that apply. In cardiac ischemia, these autonomic symptoms are decisive indicators.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {RED_FLAG_SYMPTOMS.map((s) => {
              const isChecked = selectedSymptoms.includes(s.id);
              return (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => toggleSymptom(s.id)}
                  className={`text-left p-3 rounded-lg border text-xs sm:text-sm flex items-center gap-3 transition ${
                    isChecked
                      ? "border-rose-500 bg-rose-50 text-rose-950 font-medium"
                      : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                  }`}
                >
                  <div
                    className={`h-4 w-4 shrink-0 rounded border flex items-center justify-center ${
                      isChecked ? "border-rose-600 bg-rose-600 text-white" : "border-slate-300"
                    }`}
                  >
                    {isChecked && <CheckCircle2 className="h-3.5 w-3.5" />}
                  </div>
                  <span>{s.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Cardiac Risk Profile */}
        <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Stethoscope className="h-4 w-4 text-blue-600" />
            <h3 className="text-base font-semibold text-slate-900">
              Step 3: Background Medical Risk Profile
            </h3>
          </div>
          <p className="text-xs text-slate-700 mb-4">
            Pre-existing conditions dramatically multiply the probability of acute arterial blockages.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {RISK_FACTORS.map((r) => {
              const isChecked = selectedRisks.includes(r.id);
              return (
                <button
                  type="button"
                  key={r.id}
                  onClick={() => toggleRisk(r.id)}
                  className={`text-left p-3 rounded-lg border text-xs sm:text-sm flex items-center gap-3 transition ${
                    isChecked
                      ? "border-primary bg-primary/5 text-slate-900 font-medium"
                      : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                  }`}
                >
                  <div
                    className={`h-4 w-4 shrink-0 rounded border flex items-center justify-center ${
                      isChecked ? "border-primary bg-primary text-white" : "border-slate-300"
                    }`}
                  >
                    {isChecked && <CheckCircle2 className="h-3.5 w-3.5" />}
                  </div>
                  <span>{r.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <button
            type="button"
            onClick={triggerCalculate}
            disabled={!isComplete}
            className={`inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold shadow-md transition ${
              isComplete
                ? "bg-primary text-white hover:bg-primary-dark cursor-pointer ring-2 ring-primary/20"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
          >
            <Activity className="h-4 w-4" />
            <span>Generate Triage Assessment</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          {(answeredCount > 0 || hasCalculated) && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 transition"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Reset Assessment</span>
            </button>
          )}
        </div>

        {/* TRIAGE RESULT PANEL */}
        {hasCalculated && (
          <div
            id="triage-result"
            className={`rounded-2xl border p-6 md:p-8 animate-in fade-in duration-300 ${
              isEmergency
                ? "border-rose-300 bg-rose-50/90 text-rose-950"
                : isModerate
                ? "border-amber-300 bg-amber-50/90 text-amber-950"
                : "border-emerald-300 bg-emerald-50/90 text-emerald-950"
            }`}
          >
            {/* High Emergency */}
            {isEmergency && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-600 text-white animate-bounce shadow-md">
                    <AlertTriangle className="h-6 w-6" />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-800">
                      🚨 Red Alert · High Risk of Acute Cardiac Event
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-display text-rose-950">
                      Do NOT Wait for Antacids. Immediate Emergency Evaluation Advised.
                    </h3>
                  </div>
                </div>

                <div className="rounded-xl border border-rose-200 bg-white p-5 text-sm text-slate-700 space-y-3 shadow-sm">
                  <p className="font-semibold text-rose-900">
                    Your answers show strong markers of myocardial ischemia (coronary artery blockage or acute coronary syndrome):
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                    <li>Symptoms are consistent with heart muscle oxygen deprivation, especially with radiation, exertion triggers, or cold sweating.</li>
                    <li>
                      <strong className="text-rose-900">Golden Hour Rule:</strong> Coronary angioplasty (primary PCI) within 60–90 minutes of symptom onset preserves 90%+ of heart muscle.
                    </li>
                    <li>Do NOT drive yourself. Have someone take you immediately to an emergency hospital with an active 24/7 Cath Lab.</li>
                  </ul>
                </div>

                {/* Emergency Hotline Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-600/30 hover:bg-rose-700 transition"
                  >
                    <PhoneCall className="h-4 w-4 animate-pulse" />
                    <span>Call Yashoda 24/7 Emergency ({siteConfig.phoneDisplay})</span>
                  </a>
                  <a
                    href="tel:112"
                    className="inline-flex items-center gap-2 rounded-xl border border-rose-300 bg-white px-5 py-3.5 text-sm font-semibold text-rose-900 hover:bg-rose-100/50 transition"
                  >
                    <span>Dial 112 (National Ambulance)</span>
                  </a>
                </div>
              </div>
            )}

            {/* Moderate / Ambiguous Risk */}
            {isModerate && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white shadow-md">
                    <Info className="h-6 w-6" />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                      ⚠️ Borderline / Atypical Risk Warning
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-display text-amber-950">
                      Cardiac Origin Cannot Be Safely Ruled Out
                    </h3>
                  </div>
                </div>

                <div className="rounded-xl border border-amber-200 bg-white p-5 text-sm text-slate-700 space-y-3 shadow-sm">
                  <p className="font-semibold text-amber-900">
                    Your responses include mixed markers (such as acid-like symptoms combined with risk factors like diabetes, age &gt;40, or hypertension).
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>The Diabetic Exception:</strong> Diabetic patients frequently experience &ldquo;atypical angina&rdquo;—feeling only burning, heaviness, or slight breathlessness without severe chest pain due to nerve desensitization.
                    </li>
                    <li>
                      <strong>Immediate Protocol:</strong> Obtain a baseline 12-lead ECG and high-sensitivity Troponin-I blood test within 2 to 4 hours to verify heart muscle enzymes.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={`https://wa.me/919348131276?text=${encodeURIComponent(
                      "Hello Dr. Manish Aggarwal, I have chest discomfort with mixed acidity/cardiac symptoms and would like an urgent review / ECG evaluation."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition"
                  >
                    <Activity className="h-4 w-4" />
                    <span>WhatsApp Symptoms to Dr. Manish&apos;s Desk</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-white px-5 py-3.5 text-sm font-semibold text-amber-900 hover:bg-amber-100/50 transition"
                  >
                    <PhoneCall className="h-4 w-4 text-amber-700" />
                    <span>Call OPD: {siteConfig.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            )}

            {/* Low Risk / Likely Acidity */}
            {isLowRisk && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md">
                    <CheckCircle2 className="h-6 w-6" />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      ✓ Low Acute Cardiac Probability
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-display text-emerald-950">
                      High Likelihood of Gastroesophageal Reflux (GERD) or Musculoskeletal Strain
                    </h3>
                  </div>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-white p-5 text-sm text-slate-700 space-y-3 shadow-sm">
                  <p className="font-semibold text-emerald-900">
                    Your pain pattern aligns predominantly with acid reflux, gastric distension, or chest wall tenderness:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                    <li>Pain is burning, responsive to antacids, or related to meals / posture without radiation or sweating.</li>
                    <li>
                      <strong>Important Safety Rule:</strong> If this burning ever shifts to constriction, starts getting triggered by walking/stairs, or persists despite antacids, re-triage immediately.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="#comparison-matrix"
                    className="inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-slate-800 transition"
                  >
                    <span>Read Full Acidity vs Heart Attack Matrix Below ↓</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Medical Disclaimer Footer */}
      <div className="border-t border-slate-100 bg-slate-50 p-4 px-6 text-xs text-slate-700 flex items-start gap-2.5">
        <Info className="h-4 w-4 text-slate-600 shrink-0 mt-0.5" />
        <div>
          <strong>Clinical Disclaimer:</strong> This triage tool provides risk stratification based on European Society of Cardiology (ESC) guidelines but does NOT replace an in-person emergency physical examination or 12-lead ECG. If you have sudden crushing chest pain, cold sweating, or breathlessness, call emergency services immediately.
        </div>
      </div>
    </div>
  );
}
