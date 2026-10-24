import { useState, useId } from "react";
import { Link } from "@tanstack/react-router";
import {
  Calculator,
  ShieldCheck,
  CheckCircle2,
  FileText,
  PhoneCall,
  MessageSquare,
  HelpCircle,
  Building2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";

interface ProcedureOption {
  id: string;
  name: string;
  category: string;
  stentCount: number;
  baseCathLab: number;
  baseStayDays: number;
  isNppaCapped: boolean;
  notes: string;
}

const PROCEDURES: ProcedureOption[] = [
  {
    id: "angiography",
    name: "Coronary Angiography (Daycare Radial)",
    category: "Diagnostic",
    stentCount: 0,
    baseCathLab: 16000,
    baseStayDays: 1,
    isNppaCapped: false,
    notes: "Daycare radial wrist puncture, 4-6 hour discharge. CD provided.",
  },
  {
    id: "single-des",
    name: "Single Stent Angioplasty (1 DES)",
    category: "Intervention",
    stentCount: 1,
    baseCathLab: 145000,
    baseStayDays: 2,
    isNppaCapped: true,
    notes: "Includes 1 US FDA approved Drug-Eluting Stent, Cath Lab suite & 1 day ICU.",
  },
  {
    id: "double-des",
    name: "Double Stent Angioplasty (2 DES)",
    category: "Intervention",
    stentCount: 2,
    baseCathLab: 220000,
    baseStayDays: 2,
    isNppaCapped: true,
    notes: "Includes 2 Drug-Eluting Stents, balloon dilation, Cath Lab & ICU care.",
  },
  {
    id: "complex-rotablation",
    name: "Complex Angioplasty with Rotablation / IVL",
    category: "Advanced PCI",
    stentCount: 1,
    baseCathLab: 295000,
    baseStayDays: 3,
    isNppaCapped: true,
    notes: "For rock-hard calcified blockages. Includes diamond burr/IVL catheter + DES.",
  },
  {
    id: "pacemaker-dual",
    name: "Permanent Pacemaker (Dual Chamber DDDR)",
    category: "Electrophysiology",
    stentCount: 0,
    baseCathLab: 210000,
    baseStayDays: 2,
    isNppaCapped: false,
    notes: "Includes MRI-compatible dual chamber pulse generator and transvenous leads.",
  },
  {
    id: "micra-leadless",
    name: "Micra Leadless Pacemaker (Transcatheter)",
    category: "Structural / EP",
    stentCount: 0,
    baseCathLab: 750000,
    baseStayDays: 2,
    isNppaCapped: false,
    notes: "Miniature capsule placed inside heart chamber. No chest incisions or wire leads.",
  },
];

const ROOM_TIERS = [
  { id: "economy", name: "Economy / General Ward", multiplier: 1.0, bedPerDay: 2500 },
  { id: "twin", name: "Twin-Sharing Room", multiplier: 1.15, bedPerDay: 4500 },
  { id: "single", name: "Single Deluxe Room", multiplier: 1.35, bedPerDay: 8500 },
  { id: "suite", name: "Executive Suite", multiplier: 1.6, bedPerDay: 14000 },
];

const PAYER_TYPES = [
  {
    id: "insurance",
    name: "Private Cashless Mediclaim (TPA)",
    badge: "30-Min Pre-Auth",
    coverageDesc: "Typically 90% – 100% cashless approval (subject to deductible & room rent co-pay).",
  },
  {
    id: "cghs",
    name: "CGHS / ECHS / Central Govt",
    badge: "Fixed Govt Ceiling",
    coverageDesc: "100% Cashless package coverage at approved government ceiling rates with valid referral or emergency.",
  },
  {
    id: "selfpay",
    name: "Self-Pay (Cash / Card / UPI)",
    badge: "Fixed Price Guarantee",
    coverageDesc: "Transparent itemized estimate with NPPA-capped hardware and zero surprise add-ons.",
  },
];

// NPPA Statutory Capped Price per Drug-Eluting Stent (DES) in India
const NPPA_STENT_PRICE = 38265;

export function CardiacCostEstimator() {
  const [selectedProcedureId, setSelectedProcedureId] = useState("single-des");
  const [selectedRoomId, setSelectedRoomId] = useState("twin");
  const [selectedPayerId, setSelectedPayerId] = useState("insurance");
  const procedureSelectId = useId();
  const roomSelectId = useId();
  const payerSelectId = useId();

  const procedure = PROCEDURES.find((p) => p.id === selectedProcedureId) || PROCEDURES[1];
  const room = ROOM_TIERS.find((r) => r.id === selectedRoomId) || ROOM_TIERS[1];
  const payer = PAYER_TYPES.find((p) => p.id === selectedPayerId) || PAYER_TYPES[0];

  // Dynamic calculation
  const stentCost = procedure.stentCount * NPPA_STENT_PRICE;
  const hospitalServiceCost = Math.round(procedure.baseCathLab * room.multiplier);
  const roomStayCost = room.bedPerDay * procedure.baseStayDays;
  const estimatedMinTotal = Math.round((hospitalServiceCost + roomStayCost) * 0.95);
  const estimatedMaxTotal = Math.round((hospitalServiceCost + roomStayCost) * 1.1);

  const cleanPhone = siteConfig.phoneRaw.replace(/[^0-9]/g, "");
  const whatsappEstimatorUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `Hello Dr. Manish Aggarwal's billing desk, I generated an estimate for ${procedure.name} (${room.name}) under ${payer.name}. Please assist me with cashless pre-authorization and required documentation.`,
  )}`;

  return (
    <div id="cost-estimator" className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600">
            <Calculator className="h-3.5 w-3.5" />
            <span>NPPA-Compliant 2025/2026 Price Transparency</span>
          </div>
          <h3 className="mt-2 text-2xl md:text-3xl font-display font-medium text-foreground">
            Interactive Cardiac Procedure &amp; Stent Cost Estimator
          </h3>
          <p className="mt-1 text-xs md:text-sm text-muted-foreground">
            Calculate your estimated hospital bill, NPPA statutory hardware cap, and cashless insurance coverage at {siteConfig.hospital}.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-medium text-muted-foreground">Location:</span>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-xs font-semibold text-foreground">
            <Building2 className="h-3.5 w-3.5 text-primary" />
            {siteConfig.hospital}, Indirapuram
          </span>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        {/* Left Side: Selectors (7 Cols) */}
        <div className="space-y-6 lg:col-span-7">
          {/* Step 1: Procedure */}
          <div>
            <label htmlFor={procedureSelectId} className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
              1. Select Clinical Procedure
            </label>
            <div className="grid gap-2 sm:grid-cols-2">
              {PROCEDURES.map((p) => {
                const isSelected = p.id === selectedProcedureId;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedProcedureId(p.id)}
                    className={`text-left rounded-xl border p-3.5 transition text-xs ${
                      isSelected
                        ? "border-primary bg-primary/5 text-foreground shadow-sm ring-1 ring-primary"
                        : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    <div className="font-semibold text-foreground">{p.name}</div>
                    <div className="mt-1 text-[11px] text-muted-foreground line-clamp-1">{p.notes}</div>
                  </button>
                );
              })}
            </div>
            <select
              id={procedureSelectId}
              value={selectedProcedureId}
              onChange={(e) => setSelectedProcedureId(e.target.value)}
              className="sr-only"
              aria-label="Select Clinical Procedure"
            >
              {PROCEDURES.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          {/* Step 2: Room Category */}
          <div>
            <label htmlFor={roomSelectId} className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
              2. Select Room / Stay Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {ROOM_TIERS.map((r) => {
                const isSelected = r.id === selectedRoomId;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setSelectedRoomId(r.id)}
                    className={`rounded-xl border p-3 text-center transition text-xs ${
                      isSelected
                        ? "border-primary bg-primary/5 text-primary font-semibold ring-1 ring-primary"
                        : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    <div className="font-medium text-foreground">{r.name.split("/")[0]}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">₹{r.bedPerDay.toLocaleString("en-IN")}/day</div>
                  </button>
                );
              })}
            </div>
            <select
              id={roomSelectId}
              value={selectedRoomId}
              onChange={(e) => setSelectedRoomId(e.target.value)}
              className="sr-only"
              aria-label="Select Room Stay Category"
            >
              {ROOM_TIERS.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          {/* Step 3: Payment / Insurance Mode */}
          <div>
            <label htmlFor={payerSelectId} className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
              3. Payment Channel / Insurance Scheme
            </label>
            <div className="grid gap-2 sm:grid-cols-3">
              {PAYER_TYPES.map((pt) => {
                const isSelected = pt.id === selectedPayerId;
                return (
                  <button
                    key={pt.id}
                    type="button"
                    onClick={() => setSelectedPayerId(pt.id)}
                    className={`text-left rounded-xl border p-3 transition text-xs ${
                      isSelected
                        ? "border-primary bg-primary/5 text-foreground ring-1 ring-primary"
                        : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    <span className="inline-block rounded bg-muted px-1.5 py-0.5 text-[10px] font-bold text-foreground">
                      {pt.badge}
                    </span>
                    <div className="font-semibold text-foreground mt-1">{pt.name}</div>
                  </button>
                );
              })}
            </div>
            <select
              id={payerSelectId}
              value={selectedPayerId}
              onChange={(e) => setSelectedPayerId(e.target.value)}
              className="sr-only"
              aria-label="Select Payment Channel"
            >
              {PAYER_TYPES.map((pt) => (
                <option key={pt.id} value={pt.id}>
                  {pt.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Right Side: Estimated Calculation Breakdown Card (5 Cols) */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-border bg-muted/40 p-5 md:p-6 space-y-5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Estimated Package Range
              </span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  ₹{estimatedMinTotal.toLocaleString("en-IN")}
                </span>
                <span className="text-sm text-muted-foreground">to</span>
                <span className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  ₹{estimatedMaxTotal.toLocaleString("en-IN")}
                </span>
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">
                All-inclusive hospital estimate based on {room.name} and {procedure.baseStayDays} days average clinical stay.
              </p>
            </div>

            {/* Itemized Breakdown */}
            <div className="rounded-xl border border-border/80 bg-card p-4 space-y-2.5 text-xs">
              <div className="font-bold text-foreground text-[11px] uppercase tracking-wider border-b border-border pb-1.5">
                Itemized Transparency Breakdown
              </div>

              {procedure.stentCount > 0 && (
                <div className="flex justify-between items-center text-muted-foreground">
                  <span>
                    US FDA Drug-Eluting Stents ({procedure.stentCount}x NPPA cap)
                  </span>
                  <span className="font-semibold text-foreground">
                    ₹{stentCost.toLocaleString("en-IN")}
                  </span>
                </div>
              )}

              <div className="flex justify-between items-center text-muted-foreground">
                <span>Cath Lab Suite &amp; Specialized Catheters</span>
                <span className="font-semibold text-foreground">Included</span>
              </div>

              <div className="flex justify-between items-center text-muted-foreground">
                <span>Cardiac ICU Monitoring &amp; Bed Charges</span>
                <span className="font-semibold text-foreground">
                  ~₹{roomStayCost.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between items-center text-muted-foreground">
                <span>Chief Interventional Cardiologist Fee</span>
                <span className="font-semibold text-foreground">Included</span>
              </div>
            </div>

            {/* Payer Guidance Box */}
            <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-3.5 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-blue-600">
                <ShieldCheck className="h-4 w-4" />
                <span>{payer.name}</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                {payer.coverageDesc}
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-1">
              <a
                href={whatsappEstimatorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs font-semibold text-white hover:bg-emerald-500 transition shadow-sm"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Verify Cashless Pre-Auth on WhatsApp</span>
              </a>

              <div className="flex items-center justify-between text-[11px] text-muted-foreground px-1">
                <span>Director Office Line:</span>
                <a href={`tel:${siteConfig.phoneRaw}`} className="font-semibold text-foreground hover:underline">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2 text-[10px] text-muted-foreground/80 leading-snug pt-2 border-t border-border">
              <AlertCircle className="h-3.5 w-3.5 shrink-0 mt-0.5 text-amber-500" />
              <span>
                Statutory Note: Coronary Stent prices strictly conform to NPPA notifications (SO 1485(E)). Final hospital billing depends on anatomical complexity, balloon dilation counts, and individual clinical co-morbidities.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
