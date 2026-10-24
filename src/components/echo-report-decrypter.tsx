import { useState } from "react";
import {
  HeartPulse,
  Activity,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  FileText,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Info,
  RefreshCw,
  Sliders,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function EchoReportDecrypter() {
  const [lvef, setLvef] = useState<number>(60);
  const [rwma, setRwma] = useState<string>("none");
  const [aorticValve, setAorticValve] = useState<string>("normal");
  const [mitralValve, setMitralValve] = useState<string>("normal");
  const [diastolic, setDiastolic] = useState<string>("normal");
  const [pasp, setPasp] = useState<number>(26);

  // EF classification
  let efStatus: { label: string; color: string; desc: string; severity: "normal" | "mild" | "moderate" | "severe" };
  if (lvef >= 55) {
    efStatus = {
      label: "Normal Heart Pumping (Preserved EF)",
      color: "text-emerald-700 bg-emerald-50 border-emerald-300",
      desc: "Your heart's main pumping chamber is contracting normally and ejecting an optimal fraction of blood with each contraction.",
      severity: "normal",
    };
  } else if (lvef >= 45) {
    efStatus = {
      label: "Mildly Reduced EF (45% – 54%)",
      color: "text-amber-800 bg-amber-50 border-amber-300",
      desc: "Mild pumping weakness. Frequently seen in early coronary artery disease, controlled hypertension, or post-viral states. Highly reversible with early medication.",
      severity: "mild",
    };
  } else if (lvef >= 35) {
    efStatus = {
      label: "Moderately Reduced EF (35% – 44%)",
      color: "text-orange-800 bg-orange-50 border-orange-300",
      desc: "Significant pumping impairment. High clinical suspicion of compromised blood supply (coronary ischemia). Coronary angiography is strongly indicated to check for arterial blockages.",
      severity: "moderate",
    };
  } else {
    efStatus = {
      label: "Severely Reduced EF (< 35% - Heart Failure Risk)",
      color: "text-rose-800 bg-rose-50 border-rose-300",
      desc: "Critical pumping weakness. Heart muscle requires immediate expert evaluation for guideline-directed medical therapy (GDMT), revascularization (Angioplasty/CABG), and device check (AICD/CRT).",
      severity: "severe",
    };
  }

  // RWMA Interpretation
  let rwmaDesc = "";
  let rwmaIschemic = false;
  if (rwma === "anterior") {
    rwmaDesc = "Regional Wall Motion Abnormality in Anterior Wall / Apex strongly points to compromised blood flow in the Left Anterior Descending (LAD) coronary artery ('Widow-Maker' territory).";
    rwmaIschemic = true;
  } else if (rwma === "inferior") {
    rwmaDesc = "Inferior wall RWMA indicates ischemia or previous silent infarction in the Right Coronary Artery (RCA) vascular territory.";
    rwmaIschemic = true;
  } else if (rwma === "lateral") {
    rwmaDesc = "Lateral / Posterior wall hypokinesia indicates reduced blood perfusion in the Left Circumflex (LCx) coronary artery territory.";
    rwmaIschemic = true;
  } else if (rwma === "global") {
    rwmaDesc = "Global hypokinesia suggests diffuse multi-vessel coronary blockages or dilated non-ischemic cardiomyopathy.";
    rwmaIschemic = true;
  } else {
    rwmaDesc = "No regional wall motion abnormality detected. All myocardial segments contract symmetrically.";
  }

  // Valve summary
  const hasSevereValve = aorticValve === "severe_as" || mitralValve === "severe_mr";
  const hasModValve = aorticValve === "mod_as" || mitralValve === "mod_mr";

  // Pulmonary pressure
  const isHighPasp = pasp > 38;

  const handleReset = () => {
    setLvef(60);
    setRwma("none");
    setAorticValve("normal");
    setMitralValve("normal");
    setDiastolic("normal");
    setPasp(26);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden text-slate-800">
      {/* Tool Header */}
      <div className="bg-gradient-to-r from-navy via-slate-900 to-navy p-6 md:p-8 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
              <Activity className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300">
                Diagnostic Report Decrypter
              </span>
              <h2 className="text-xl md:text-2xl font-bold font-display text-white">
                2D Echo Report Normal Values Decrypter
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs text-slate-200 backdrop-blur-sm border border-white/10">
            <Sliders className="h-3.5 w-3.5 text-emerald-300" />
            <span>Interactive Parameter Analyzer</span>
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-300 max-w-3xl leading-relaxed">
          Holding a 2D Echocardiography &amp; Color Doppler report? Enter the key values written by the sonologist to instantly understand what your Ejection Fraction, Wall Motion (RWMA), and Valve findings mean in plain English.
        </p>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        
        {/* PARAMETER INPUTS */}
        <div className="grid gap-6 md:grid-cols-2">
          
          {/* Parameter 1: LVEF % */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Core Metric #1
                </span>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                  <span>LVEF (Ejection Fraction)</span>
                  <span className="text-xs font-normal text-slate-500">(Normal: 55% - 70%)</span>
                </h3>
              </div>
              <div className="text-2xl font-bold font-display text-navy bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-sm">
                {lvef}%
              </div>
            </div>

            <div className="space-y-2">
              <input
                type="range"
                min="20"
                max="75"
                value={lvef}
                onChange={(e) => setLvef(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[11px] text-slate-600 font-medium">
                <span className="text-rose-700">20% (Severe)</span>
                <span className="text-orange-700">35% (Moderate)</span>
                <span className="text-amber-700">50% (Mild)</span>
                <span className="text-emerald-700">60% (Normal)</span>
                <span>75%</span>
              </div>
            </div>

            <div className={`p-3 rounded-lg border text-xs leading-relaxed ${efStatus.color}`}>
              <div className="font-bold mb-0.5">{efStatus.label}</div>
              <p>{efStatus.desc}</p>
            </div>
          </div>

          {/* Parameter 2: RWMA */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                Core Metric #2
              </span>
              <h3 className="text-base font-bold text-slate-900">
                RWMA (Regional Wall Motion Abnormality)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Checks if heart walls contract symmetrically or if an artery is blocked.
              </p>
            </div>

            <div className="grid gap-2">
              {[
                { id: "none", label: "No RWMA (Normal Global Contractility)" },
                { id: "anterior", label: "Anterior Wall / Apical Hypokinesia (LAD Artery Territory)" },
                { id: "inferior", label: "Inferior Wall Hypokinesia (RCA Artery Territory)" },
                { id: "lateral", label: "Lateral / Posterior Hypokinesia (LCx Artery Territory)" },
                { id: "global", label: "Global Hypokinesia (Diffuse / Multi-vessel / CMP)" },
              ].map((opt) => (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => setRwma(opt.id)}
                  className={`text-left p-2.5 rounded-lg border text-xs sm:text-sm transition flex items-center gap-2.5 ${
                    rwma === opt.id
                      ? opt.id === "none"
                        ? "border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold"
                        : "border-rose-500 bg-rose-50 text-rose-950 font-semibold"
                      : "border-slate-200 bg-white hover:bg-slate-100/70 text-slate-700"
                  }`}
                >
                  <div
                    className={`h-3.5 w-3.5 shrink-0 rounded-full border ${
                      rwma === opt.id
                        ? opt.id === "none"
                          ? "border-emerald-600 bg-emerald-600"
                          : "border-rose-600 bg-rose-600"
                        : "border-slate-300"
                    }`}
                  />
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Parameter 3: Aortic Valve (Stenosis check) */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Valve Metric #1
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Aortic Valve (Aortic Stenosis / Sclerosis)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Crucial for elderly patients experiencing fatigue, chest heaviness, or fainting.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { id: "normal", label: "Normal / Tracing" },
                { id: "mild_as", label: "Mild AS / Sclerosis" },
                { id: "mod_as", label: "Moderate AS" },
                { id: "severe_as", label: "Severe AS (TAVI Candidate)" },
              ].map((v) => (
                <button
                  type="button"
                  key={v.id}
                  onClick={() => setAorticValve(v.id)}
                  className={`p-2.5 rounded-lg border text-left font-medium transition ${
                    aorticValve === v.id
                      ? v.id === "severe_as"
                        ? "border-rose-500 bg-rose-50 text-rose-950 ring-1 ring-rose-400"
                        : "border-primary bg-primary/10 text-slate-900"
                      : "border-slate-200 bg-white hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Parameter 4: Mitral Valve (Leakage / Regurgitation) */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                Valve Metric #2
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Mitral Valve (Mitral Regurgitation - MR)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Measures backward leakage of blood into lungs during contraction.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { id: "normal", label: "Trace / Normal MR" },
                { id: "mild_mr", label: "Mild MR (Grade 1)" },
                { id: "mod_mr", label: "Moderate MR (Grade 2)" },
                { id: "severe_mr", label: "Severe MR (MitraClip / Repair)" },
              ].map((v) => (
                <button
                  type="button"
                  key={v.id}
                  onClick={() => setMitralValve(v.id)}
                  className={`p-2.5 rounded-lg border text-left font-medium transition ${
                    mitralValve === v.id
                      ? v.id === "severe_mr"
                        ? "border-purple-500 bg-purple-50 text-purple-950 ring-1 ring-purple-400"
                        : "border-primary bg-primary/10 text-slate-900"
                      : "border-slate-200 bg-white hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Parameter 5: Diastolic Dysfunction */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Chamber Compliance
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Diastolic Function (Relaxation)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Measures how comfortably the heart muscle relaxes to fill with blood.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { id: "normal", label: "Normal Diastolic Function" },
                { id: "grade1", label: "Grade I (Impaired Relaxation)" },
                { id: "grade2", label: "Grade II (Pseudonormal)" },
                { id: "grade3", label: "Grade III (Restrictive Pattern)" },
              ].map((d) => (
                <button
                  type="button"
                  key={d.id}
                  onClick={() => setDiastolic(d.id)}
                  className={`p-2.5 rounded-lg border text-left font-medium transition ${
                    diastolic === d.id
                      ? "border-primary bg-primary/10 text-slate-900"
                      : "border-slate-200 bg-white hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Parameter 6: PASP Pressure */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                  Lung Artery Metric
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  PASP (Pulmonary Artery Pressure)
                </h3>
              </div>
              <div className="text-xl font-bold font-display text-navy bg-white px-3 py-1 rounded-lg border border-slate-200">
                {pasp} mmHg
              </div>
            </div>

            <input
              type="range"
              min="15"
              max="70"
              value={pasp}
              onChange={(e) => setPasp(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
            />
            <div className="flex justify-between text-[11px] text-slate-600 font-medium">
              <span className="text-emerald-700">&lt;30 (Normal)</span>
              <span className="text-amber-700">35-45 (Mild/Mod PAH)</span>
              <span className="text-rose-700">&gt;50 (Severe PAH)</span>
            </div>
          </div>

        </div>

        {/* CLINICAL DECRYPTER SYNTHESIS REPORT */}
        <div className="rounded-2xl border border-slate-300 bg-gradient-to-br from-slate-50 to-white p-6 md:p-8 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Clinical Synthesis
                </span>
                <h3 className="text-lg md:text-xl font-bold font-display text-navy">
                  Your 2D Echo Report Decryption Summary
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Reset Values</span>
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Box 1: Pumping Power */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2">
              <div className="text-xs font-bold uppercase text-slate-600">Left Ventricular Ejection Fraction</div>
              <div className="text-xl font-bold text-navy">{lvef}% — {efStatus.label.split("(")[0].trim()}</div>
              <p className="text-xs text-slate-600">{efStatus.desc}</p>
            </div>

            {/* Box 2: Artery Ischemia & RWMA */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2">
              <div className="text-xs font-bold uppercase text-slate-600">Regional Wall Motion (Coronary Flow)</div>
              <div className={`text-xl font-bold ${rwmaIschemic ? "text-rose-600" : "text-emerald-600"}`}>
                {rwmaIschemic ? "Ischemic Territory Detected" : "Normal Symmetrical Motion"}
              </div>
              <p className="text-xs text-slate-600">{rwmaDesc}</p>
            </div>

            {/* Box 3: Structural Heart & Valves */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2">
              <div className="text-xs font-bold uppercase text-slate-600">Heart Valve &amp; Structural Status</div>
              <div className={`text-xl font-bold ${hasSevereValve ? "text-purple-600" : hasModValve ? "text-amber-600" : "text-emerald-600"}`}>
                {hasSevereValve
                  ? "Severe Valvular Disease"
                  : hasModValve
                  ? "Moderate Valvular Disease"
                  : "Normal / Mild Valve Findings"}
              </div>
              <p className="text-xs text-slate-600">
                {aorticValve === "severe_as"
                  ? "Severe Aortic Stenosis requires immediate evaluation for TAVI (Transcatheter Aortic Valve Replacement)."
                  : mitralValve === "severe_mr"
                  ? "Severe Mitral Regurgitation may qualify for MitraClip (transcatheter edge-to-edge valve repair)."
                  : "No critical transcatheter valve replacement indicators detected on this profile."}
              </p>
            </div>

          </div>

          {/* Recommendation Banner */}
          <div className={`rounded-xl border p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
            rwmaIschemic || efStatus.severity === "severe" || hasSevereValve
              ? "border-rose-200 bg-rose-50/80 text-rose-950"
              : "border-blue-200 bg-blue-50/80 text-blue-950"
          }`}>
            <div className="space-y-1">
              <div className="font-bold text-sm flex items-center gap-2">
                {rwmaIschemic || efStatus.severity === "severe" || hasSevereValve ? (
                  <>
                    <AlertTriangle className="h-4 w-4 text-rose-600" />
                    <span>Specialist Second Opinion Strongly Advised</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="h-4 w-4 text-blue-600" />
                    <span>Reassuring Echo Findings · Annual Follow-Up Advised</span>
                  </>
                )}
              </div>
              <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                {rwmaIschemic
                  ? "Wall motion abnormalities on an Echo report represent indirect evidence of coronary blockages. A Coronary Angiogram or CT Angiography is typically recommended to confirm the exact lesion percentage."
                  : hasSevereValve
                  ? "Severe valve stenosis or leakage must not be delayed, as it causes irreversible myocardial strain. Structural heart consultation with Dr. Manish Aggarwal recommended."
                  : "Always correlate Echo findings with symptoms such as chest tightness or breathlessness on exertion."}
              </p>
            </div>

            <a
              href={`https://wa.me/919348131276?text=${encodeURIComponent(
                `Hello Dr. Manish Aggarwal, I used your 2D Echo Decrypter tool. My report shows LVEF: ${lvef}%, RWMA: ${rwma}, Aortic: ${aorticValve}, Mitral: ${mitralValve}. I would like your expert opinion.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition shrink-0"
            >
              <span>WhatsApp Echo Report to Dr. Manish</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>

      </div>

      {/* Footer Disclaimer */}
      <div className="border-t border-slate-100 bg-slate-50 p-4 px-6 text-xs text-slate-700 flex items-start gap-2.5">
        <Info className="h-4 w-4 text-slate-600 shrink-0 mt-0.5" />
        <div>
          <strong>Physician Note:</strong> 2D Echocardiography measurements depend on acoustic windows, ultrasound probe alignment, and sonologist experience. Always have your original DICOM imaging or printed report reviewed in full clinical context.
        </div>
      </div>
    </div>
  );
}
