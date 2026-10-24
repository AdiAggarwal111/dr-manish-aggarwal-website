import { useState, useId, useTransition, useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import {
  appointmentSchema,
  parseAppointmentDate,
  type AppointmentSuccessResponse,
  type AppointmentApiResponse,
} from "@/lib/appointment-schema";

/**
 * Auto-formats typed input into Indian Standard DD/MM/YYYY
 */
function formatIndianDateInput(raw: string): string {
  const trimmed = raw.trim();
  // Handle ISO paste (YYYY-MM-DD -> DD/MM/YYYY)
  const isoMatch = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoMatch) {
    return `${isoMatch[3]}/${isoMatch[2]}/${isoMatch[1]}`;
  }
  const digits = raw.replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

/**
 * Converts a Date object into ISO YYYY-MM-DD for native picker sync
 */
function toIsoDateString(d: Date): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Formats a valid date into a rich Indian Standard format for immediate patient reassurance:
 * e.g., "Saturday, 24 October 2026"
 */
function formatSelectedDisplay(d: Date): string {
  return d.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export function InfoCard({ icon: Icon, title, children }: InfoCardProps) {
  return (
    <div
      className="rounded-3xl border border-border bg-card p-6"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white"
          style={{ background: "var(--gradient-icon)" }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-display text-lg">{title}</h3>
          <div className="mt-1 text-sm text-muted-foreground">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function ClinicContactCards() {
  return (
    <div className="space-y-4">
      <InfoCard icon={MapPin} title="Visit">
        <a
          href={siteConfig.hospitalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition underline decoration-primary/40 underline-offset-2"
          title="View Dr. Manish Aggarwal's Official Yashoda Medicity Profile"
        >
          {siteConfig.hospital} ↗
        </a>
        <br />
        {siteConfig.location}
      </InfoCard>
      <InfoCard icon={Phone} title="Call">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="hover:text-primary transition-colors underline decoration-primary/40 underline-offset-2"
        >
          {siteConfig.phone}
        </a>
      </InfoCard>
      <InfoCard icon={Mail} title="Email">
        <a
          href={`mailto:${siteConfig.email}`}
          className="break-all hover:text-primary transition-colors underline decoration-primary/40 underline-offset-2"
        >
          {siteConfig.email}
        </a>
      </InfoCard>
      <InfoCard icon={Clock} title="OPD Hours">
        {siteConfig.opdHours}
        <br />
        {siteConfig.emergencyHours}
      </InfoCard>
    </div>
  );
}

const COMMON_REASONS = [
  "TAVI / Valve Replacement",
  "Complex Angioplasty / CTO",
  "Second Opinion (Avoid CABG)",
  "Chest Pain / General OPD",
  "Pacemaker / Arrhythmia",
] as const;

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    reason: "",
    website: "", // Honeypot field for bot suppression
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [successResult, setSuccessResult] = useState<AppointmentSuccessResponse | null>(null);

  const formId = useId();
  const nativeDatePickerRef = useRef<HTMLInputElement>(null);

  // Compute minimum selectable date (today in local midnight time)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayIso = toIsoDateString(today);

  // Parse currently entered date to show live Indian Standard validation and reassurance
  const parsedSelectedDate = parseAppointmentDate(formData.date);
  const isSelectedDateValid = parsedSelectedDate !== null && parsedSelectedDate >= today;
  const isSunday = parsedSelectedDate !== null && parsedSelectedDate.getDay() === 0;

  // Convert to ISO for native calendar picker synchronization
  const currentIsoValue = parsedSelectedDate ? toIsoDateString(parsedSelectedDate) : "";

  const handleDateChange = (raw: string) => {
    const formatted = formatIndianDateInput(raw);
    handleFieldChange("date", formatted);
  };

  const handleNativePickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isoVal = e.target.value;
    if (!isoVal) return;
    const [y, m, d] = isoVal.split("-");
    const indianFormatted = `${d}/${m}/${y}`;
    handleFieldChange("date", indianFormatted);
  };

  const handleFieldChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field-specific error as user types
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    if (serverError) setServerError(null);
  };

  const handleReasonChipClick = (chipText: string) => {
    setFormData((prev) => {
      const current = prev.reason.trim();
      const updated = current ? `${current}; ${chipText}` : chipText;
      return { ...prev, reason: updated };
    });
    if (errors.reason) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.reason;
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError(null);

    // 1. Client-side Zod validation
    const validation = appointmentSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of validation.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && !fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    // 2. Submit to API endpoint
    startTransition(async () => {
      try {
        const res = await fetch("/api/appointments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(validation.data),
        });

        const data: AppointmentApiResponse = await res.json();

        if (res.ok && data.success) {
          setSuccessResult(data);
        } else if (!data.success) {
          if (data.errors) {
            setErrors(data.errors);
          }
          setServerError(
            data.message ||
              "We encountered an issue submitting your request. Please call our clinical coordinator directly.",
          );
        } else {
          setServerError(`Unable to complete request. Please call ${siteConfig.phoneDisplay}.`);
        }
      } catch (err) {
        console.error("Appointment submission error:", err);
        setServerError(
          `Network connectivity error. Please check your internet connection or call our emergency triage desk at ${siteConfig.phoneDisplay}.`,
        );
      }
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      reason: "",
      website: "",
    });
    setErrors({});
    setServerError(null);
    setSuccessResult(null);
  };

  // =========================================================================
  // SUCCESS / CONFIRMATION STATE
  // =========================================================================
  if (successResult) {
    return (
      <div
        className="rounded-3xl border border-primary/20 bg-card p-6 sm:p-8 md:p-10 shadow-[var(--shadow-card)] animate-in fade-in duration-300"
        aria-live="polite"
      >
        {/* Status Badge */}
        <div className="flex items-center gap-2.5 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 w-fit">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Appointment Request Received</span>
        </div>

        {/* Heading */}
        <div className="mt-6 flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-medium text-foreground">
              Consultation Request Confirmed
            </h3>
            <p className="mt-1 text-xs text-muted-foreground font-mono">
              Booking Reference:{" "}
              <span className="font-bold text-foreground">{successResult.referenceId}</span>
            </p>
          </div>
        </div>

        {/* Summary Details */}
        <div className="mt-6 rounded-2xl border border-border/80 bg-background/60 p-5 space-y-3 text-sm">
          <p className="text-foreground leading-relaxed">
            Thank you,{" "}
            <strong className="font-semibold text-foreground">{successResult.patientName}</strong>.
            Your consultation request for{" "}
            <strong className="font-semibold text-foreground">{successResult.preferredDate}</strong>{" "}
            has been safely delivered to Dr. Manish Aggarwal's clinical coordinator at Yashoda
            Medicity.
          </p>

          <div className="border-t border-border/60 pt-3 space-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>
                <strong className="text-foreground font-medium">Confirmation SLA:</strong> Our team
                will contact you via phone or WhatsApp within{" "}
                <strong className="text-foreground font-semibold">one business day</strong> to
                confirm your exact appointment slot.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>
                A receipt summary has been dispatched to your email for your personal medical
                records.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>
                <strong className="text-foreground font-medium">What to bring:</strong> Previous
                angiogram CDs, 2D echo reports, and current prescriptions.
              </span>
            </div>
          </div>
        </div>

        {/* Acute Emergency Caution */}
        <div className="mt-5 rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] p-4 text-xs text-amber-900 dark:text-amber-200">
          <p className="font-semibold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            Acute Cardiac Emergency Notice
          </p>
          <p className="mt-1.5 leading-relaxed">
            Experiencing sudden severe chest discomfort, breathlessness, or cold sweats? Please do
            not wait for an OPD callback. Call our 24/7 Emergency Triage immediately at{" "}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="font-bold underline text-amber-800 dark:text-amber-300"
            >
              {siteConfig.phoneDisplay}
            </a>{" "}
            or arrive directly at Yashoda Medicity Emergency Bay, Indirapuram.
          </p>
        </div>

        {/* Action Controls */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-border/60">
          <button
            type="button"
            onClick={handleReset}
            className="rounded-full border border-border px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-secondary transition"
          >
            Submit Another Request
          </button>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:opacity-90 transition"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Call Clinic: {siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </div>
    );
  }

  // =========================================================================
  // ACTIVE FORM STATE
  // =========================================================================
  return (
    <div>
      <h3 className="font-display text-2xl sm:text-3xl font-medium text-foreground">
        Request an Appointment
      </h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        Our clinical coordinator will review your case and confirm your OPD slot within one business
        day.
      </p>

      {/* Global Server Error Banner */}
      {serverError && (
        <div className="mt-5 rounded-2xl border border-destructive/20 bg-destructive/10 p-4 text-xs text-destructive flex items-start gap-3">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-medium">{serverError}</p>
            <p className="mt-1 text-muted-foreground">
              You can also contact our OPD desk directly at{" "}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="underline font-semibold text-foreground"
              >
                {siteConfig.phone}
              </a>
              .
            </p>
          </div>
        </div>
      )}

      <form
        id="appointment-booking-form"
        name="appointment-booking-form"
        aria-label="Book Cardiac Consultation Appointment"
        onSubmit={handleSubmit}
        className="mt-6 grid gap-4"
        noValidate
      >
        {/* Anti-spam Honeypot Field */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor={`${formId}-website`}>Website</label>
          <input
            id={`${formId}-website`}
            type="text"
            name="website"
            value={formData.website}
            onChange={(e) => handleFieldChange("website", e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Full Name */}
        <div className="grid gap-1.5">
          <label
            htmlFor={`${formId}-name`}
            className="text-xs font-medium tracking-wide text-muted-foreground uppercase"
          >
            Full Name <span className="text-primary">*</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={(e) => handleFieldChange("name", e.target.value)}
            placeholder="e.g. Rajesh Kumar"
            className={`w-full rounded-full border bg-background px-5 py-3 text-sm transition focus:outline-none ${
              errors.name
                ? "border-destructive focus:border-destructive ring-1 ring-destructive/30"
                : "border-input focus:border-primary"
            }`}
          />
          {errors.name && <p className="text-xs text-destructive mt-0.5 ml-2">{errors.name}</p>}
        </div>

        {/* Contact Phone & Email */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Phone */}
          <div className="grid gap-1.5">
            <label
              htmlFor={`${formId}-phone`}
              className="text-xs font-medium tracking-wide text-muted-foreground uppercase"
            >
              Contact Phone <span className="text-primary">*</span>
            </label>
            <input
              id={`${formId}-phone`}
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              value={formData.phone}
              onChange={(e) => handleFieldChange("phone", e.target.value)}
              placeholder="+91 93481 31276"
              className={`w-full rounded-full border bg-background px-5 py-3 text-sm transition focus:outline-none ${
                errors.phone
                  ? "border-destructive focus:border-destructive ring-1 ring-destructive/30"
                  : "border-input focus:border-primary"
              }`}
            />
            {errors.phone && <p className="text-xs text-destructive mt-0.5 ml-2">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div className="grid gap-1.5">
            <label
              htmlFor={`${formId}-email`}
              className="text-xs font-medium tracking-wide text-muted-foreground uppercase"
            >
              Email Address <span className="text-primary">*</span>
            </label>
            <input
              id={`${formId}-email`}
              name="email"
              type="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={(e) => handleFieldChange("email", e.target.value)}
              placeholder="rajesh.kumar@example.com"
              className={`w-full rounded-full border bg-background px-5 py-3 text-sm transition focus:outline-none ${
                errors.email
                  ? "border-destructive focus:border-destructive ring-1 ring-destructive/30"
                  : "border-input focus:border-primary"
              }`}
            />
            {errors.email && <p className="text-xs text-destructive mt-0.5 ml-2">{errors.email}</p>}
          </div>
        </div>

        {/* Preferred Date: Indian Standard DD/MM/YYYY */}
        <div className="grid gap-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor={`${formId}-date`}
              className="text-xs font-medium tracking-wide text-muted-foreground uppercase flex items-center gap-1"
            >
              <span>Preferred Date</span>
              <span className="text-primary">*</span>
            </label>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
              <span className="font-semibold">DD/MM/YYYY</span>
              <span className="text-muted-foreground/60">·</span>
              <span>Mon–Sat OPD</span>
            </span>
          </div>

          <div className="relative">
            <input
              id={`${formId}-date`}
              name="date"
              type="text"
              inputMode="numeric"
              autoComplete="off"
              required
              value={formData.date}
              onChange={(e) => handleDateChange(e.target.value)}
              placeholder="DD/MM/YYYY (e.g. 24/10/2026)"
              maxLength={10}
              className={`w-full rounded-full border bg-background pl-5 pr-12 py-3 text-sm font-mono transition focus:outline-none ${
                errors.date
                  ? "border-destructive focus:border-destructive ring-1 ring-destructive/30"
                  : "border-input focus:border-primary"
              }`}
            />

            {/* Clickable Calendar Picker Button with invisible native date input */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
              <input
                ref={nativeDatePickerRef}
                type="date"
                min={todayIso}
                tabIndex={-1}
                aria-hidden="true"
                value={currentIsoValue}
                onChange={handleNativePickerChange}
                className="absolute inset-0 h-full w-full opacity-0 cursor-pointer z-10"
                title="Click to open calendar"
              />
              <button
                type="button"
                tabIndex={-1}
                aria-label="Open calendar date picker"
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-primary transition pointer-events-none"
              >
                <Calendar className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Real-time date confirmation in Indian Standard Format */}
          {parsedSelectedDate && isSelectedDateValid && (
            <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 ml-2 animate-in fade-in duration-200">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
              <span>
                Selected:{" "}
                <strong className="font-semibold">
                  {formatSelectedDisplay(parsedSelectedDate)}
                </strong>
              </span>
              {isSunday && (
                <span className="text-amber-700 dark:text-amber-300 block text-[11px] w-full">
                  ⚠️ Note: OPD operates Mon–Sat. Sunday consultations are prioritized for acute
                  evaluations.
                </span>
              )}
            </div>
          )}

          {errors.date && <p className="text-xs text-destructive mt-0.5 ml-2">{errors.date}</p>}
        </div>

        {/* Reason for Visit with Quick Chips */}
        <div className="grid gap-2">
          <div className="flex flex-wrap items-center justify-between gap-1">
            <label
              htmlFor={`${formId}-reason`}
              className="text-xs font-medium tracking-wide text-muted-foreground uppercase"
            >
              Reason for Visit / Clinical Symptoms <span className="text-primary">*</span>
            </label>
            <span className="text-[11px] text-muted-foreground">
              Select a category or type below
            </span>
          </div>

          {/* Quick Procedure Selector Chips */}
          <div className="flex flex-wrap gap-1.5 pb-1">
            {COMMON_REASONS.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => handleReasonChipClick(chip)}
                className="rounded-full border border-border/80 bg-secondary/60 px-3 py-1 text-[11px] font-medium text-foreground transition hover:border-primary hover:bg-primary/10"
              >
                + {chip}
              </button>
            ))}
          </div>

          <textarea
            id={`${formId}-reason`}
            name="reason"
            rows={3}
            required
            value={formData.reason}
            onChange={(e) => handleFieldChange("reason", e.target.value)}
            className={`w-full rounded-2xl border bg-background px-4 py-3 text-sm transition focus:outline-none ${
              errors.reason
                ? "border-destructive focus:border-destructive ring-1 ring-destructive/30"
                : "border-input focus:border-primary"
            }`}
            placeholder="Briefly describe your symptoms, recent angiography findings, or procedure of interest (e.g., TAVI evaluation, 100% CTO blockage review, chest pain)..."
          />
          {errors.reason && <p className="text-xs text-destructive mt-0.5 ml-2">{errors.reason}</p>}
        </div>

        {/* Submit CTA */}
        <button
          type="submit"
          disabled={isPending}
          className="mt-3 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
          style={{ background: "var(--gradient-cta)" }}
        >
          {isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Submitting Appointment Request...</span>
            </>
          ) : (
            <>
              <Calendar className="h-4 w-4" />
              <span>Submit Appointment Request</span>
            </>
          )}
        </button>

        {/* Cashless TPA Mini-Strip */}
        <div className="mt-2 rounded-2xl border border-border/70 bg-secondary/30 p-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5 font-semibold text-foreground mb-1">
            <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>100% Cashless Mediclaim &amp; Panel Empanelment</span>
          </div>
          <p className="text-[11px] leading-relaxed">
            Direct cashless pre-authorization for{" "}
            <strong className="text-foreground">
              CGHS, ECHS, Star Health, Care Health, HDFC ERGO, ICICI Lombard, Niva Bupa, Medi
              Assist, Vidal Health
            </strong>
            , and 40+ private TPAs.
          </p>
        </div>

        <p className="text-center text-[11px] text-muted-foreground">
          🔒 Your medical inquiries are kept strictly confidential under NABH privacy guidelines.
        </p>
      </form>
    </div>
  );
}

const CASHLESS_PARTNERS = [
  {
    name: "CGHS",
    full: "Central Govt Health Scheme",
    type: "Govt Panel",
    badge: "100% Empanelled",
  },
  {
    name: "ECHS",
    full: "Ex-Servicemen Contributory Health",
    type: "Govt Panel",
    badge: "100% Empanelled",
  },
  {
    name: "Star Health",
    full: "Star Health & Allied Insurance",
    type: "Private Insurer",
    badge: "Direct Cashless",
  },
  {
    name: "Care Health",
    full: "Care Health Insurance (Religare)",
    type: "Private Insurer",
    badge: "Instant Approval",
  },
  {
    name: "HDFC ERGO",
    full: "HDFC ERGO General Insurance",
    type: "Private Insurer",
    badge: "Preferred Partner",
  },
  {
    name: "ICICI Lombard",
    full: "ICICI Lombard General Insurance",
    type: "Private Insurer",
    badge: "Fast-Track TPA",
  },
  {
    name: "Niva Bupa",
    full: "Niva Bupa (Max Bupa) Health",
    type: "Private Insurer",
    badge: "Preferred Desk",
  },
  {
    name: "Medi Assist",
    full: "Medi Assist Healthcare TPA",
    type: "TPA Desk",
    badge: "24/7 Digital Clearance",
  },
  {
    name: "Vidal Health",
    full: "Vidal Health TPA Services",
    type: "TPA Desk",
    badge: "Direct Clearance",
  },
] as const;

export function AppointmentSection({ heading, sub }: { heading?: string; sub?: string }) {
  return (
    <section id="book" className="px-6 pb-24 md:px-12 scroll-mt-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
            Consultation Booking
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground">
            {heading ?? "Request an Appointment"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed">
            {sub ??
              `Same-week OPD appointments and structural heart case reviews available at ${siteConfig.hospital}, ${siteConfig.location.split(",")[0]}.`}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ClinicContactCards />
          </div>

          <div
            className="rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-10 lg:col-span-3"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <AppointmentForm />
          </div>
        </div>

        {/* Cashless Insurance & TPA Partner Visual Badges Section */}
        <div className="mt-10 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-card)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Zero-Hassle Cashless Hospitalization</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-medium text-foreground">
                Recognized Insurance &amp; Government Health Panels
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Patients at Yashoda Medicity enjoy direct cashless admissions for planned and
                emergency cardiac procedures with dedicated on-site TPA coordinators.
              </p>
            </div>

            <Link
              to="/insurance"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline shrink-0"
              title="View Full Cashless TPA & CGHS Desk"
            >
              <span>Explore Yashoda Medicity TPA Desk →</span>
            </Link>
          </div>

          {/* Badges Grid */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            {CASHLESS_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col justify-between rounded-2xl border border-border/80 bg-background/60 p-3 text-center transition hover:border-primary/50 hover:bg-secondary/40 shadow-xs"
              >
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground block">
                    {partner.type}
                  </span>
                  <span className="font-display text-xs sm:text-sm font-semibold text-foreground block mt-1">
                    {partner.name}
                  </span>
                </div>
                <span className="mt-2 inline-block rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] sm:text-[10px] font-medium text-emerald-700 dark:text-emerald-400">
                  {partner.badge}
                </span>
              </div>
            ))}
          </div>

          {/* Fast-Track SLA Callout */}
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl bg-secondary/30 px-4 py-3 text-xs text-muted-foreground border border-border/40">
            <span className="leading-relaxed text-center sm:text-left">
              💡 <strong className="text-foreground">Statutory Price Assurance:</strong> All
              Drug-Eluting Stents (DES), catheters, and balloons strictly adhere to statutory NPPA
              caps with zero hidden charges.
            </span>
            <span className="font-mono text-[11px] text-foreground font-medium shrink-0">
              Emergency Pre-Auth SLA: &lt;60 Minutes
            </span>
          </div>

          {/* Direct High-Visibility CTA button below the boxes */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-border/60">
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm font-semibold text-foreground">
                Need cashless pre-authorization, TPA query assistance, or CGHS / ECHS details?
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Explore our full cashless empanelment directory, document checklist, and 30-minute approval workflow.
              </p>
            </div>
            <Link
              to="/insurance"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-sm hover:opacity-90 transition"
            >
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Explore Full Cashless TPA &amp; CGHS Desk →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
