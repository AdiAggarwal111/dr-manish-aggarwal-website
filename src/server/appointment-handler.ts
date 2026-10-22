import {
  appointmentSchema,
  parseAppointmentDate,
  type AppointmentInput,
  type AppointmentApiResponse,
} from "../lib/appointment-schema.ts";

const CLINIC_NOTIFICATION_EMAIL = "appointments@drmanishaggarwal.com";

interface EnvContext {
  RESEND_API_KEY?: string;
  APPOINTMENT_FROM_EMAIL?: string;
  APPOINTMENT_WEBHOOK_URL?: string;
  [key: string]: unknown;
}

/**
 * Resolves environment variables across Node, Vite, Cloudflare, and browser contexts.
 */
function getEnvVariable(key: string, env?: unknown): string | undefined {
  if (env && typeof env === "object" && key in env) {
    const val = (env as Record<string, unknown>)[key];
    if (typeof val === "string" && val.trim().length > 0) return val.trim();
  }
  if (typeof process !== "undefined" && process.env && process.env[key]) {
    const val = process.env[key];
    if (typeof val === "string" && val.trim().length > 0) return val.trim();
  }
  return undefined;
}

/**
 * Generates an executive medical appointment reference code.
 * Example: DMA-M5K8-7X2A
 */
function generateReferenceId(): string {
  const timeCode = Date.now().toString(36).slice(-4).toUpperCase();
  const randomCode = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `DMA-${timeCode}-${randomCode}`;
}

/**
 * Formats ISO date into human-readable Indian Standard format (e.g., "Thursday, 24 October 2026")
 */
function formatDisplayDate(dateStr: string): string {
  try {
    const date = parseAppointmentDate(dateStr) || new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

/**
 * Builds the luxury HTML email for the clinical triage desk at Yashoda Medicity.
 */
function buildClinicNotificationHtml(
  data: AppointmentInput,
  referenceId: string,
  formattedDate: string,
  timestampStr: string,
): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Appointment Request</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:#1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f1f5f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:620px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 25px -5px rgba(0,0,0,0.06),0 8px 10px -6px rgba(0,0,0,0.04);border:1px solid #e2e8f0;" cellspacing="0" cellpadding="0">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color:#0a1628;padding:32px 28px;text-align:left;border-bottom:3px solid #c59b27;">
              <p style="margin:0 0 6px 0;font-size:11px;font-weight:700;letter-spacing:2px;color:#c59b27;text-transform:uppercase;">
                Yashoda Medicity · Indirapuram
              </p>
              <h1 style="margin:0;font-size:24px;font-weight:600;color:#ffffff;letter-spacing:-0.5px;">
                Dr. Manish Aggarwal
              </h1>
              <p style="margin:4px 0 0 0;font-size:13px;color:#94a3b8;">
                Director — Interventional Cardiology &amp; Structural Heart Specialist
              </p>
            </td>
          </tr>

          <!-- Notification Alert Tag -->
          <tr>
            <td style="padding:28px 28px 16px 28px;">
              <div style="background-color:#fef3c7;border-left:4px solid #d97706;padding:12px 16px;border-radius:6px;margin-bottom:20px;">
                <p style="margin:0;font-size:13px;font-weight:600;color:#92400e;">
                  🔔 NEW CONSULTATION / SECOND OPINION REQUEST
                </p>
                <p style="margin:2px 0 0 0;font-size:12px;color:#b45309;">
                  Reference ID: <strong style="font-family:monospace;">${referenceId}</strong> · Submitted: ${timestampStr}
                </p>
              </div>

              <h2 style="margin:0 0 16px 0;font-size:18px;font-weight:600;color:#0f172a;">
                Patient Details
              </h2>

              <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin-bottom:24px;">
                <tr>
                  <td style="padding:10px 12px;background-color:#f8fafc;border-bottom:1px solid #e2e8f0;font-size:13px;font-weight:600;color:#475569;width:35%;">Full Name:</td>
                  <td style="padding:10px 12px;background-color:#f8fafc;border-bottom:1px solid #e2e8f0;font-size:14px;font-weight:600;color:#0f172a;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;font-size:13px;font-weight:600;color:#475569;">Contact Phone:</td>
                  <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;font-size:14px;color:#0f172a;">
                    <a href="tel:${data.phone}" style="color:#0284c7;text-decoration:none;font-weight:600;">${data.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 12px;background-color:#f8fafc;border-bottom:1px solid #e2e8f0;font-size:13px;font-weight:600;color:#475569;">Email Address:</td>
                  <td style="padding:10px 12px;background-color:#f8fafc;border-bottom:1px solid #e2e8f0;font-size:13px;color:#0f172a;">
                    <a href="mailto:${data.email}" style="color:#0284c7;text-decoration:none;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;font-size:13px;font-weight:600;color:#475569;">Preferred Date:</td>
                  <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;font-size:14px;font-weight:600;color:#0f172a;">
                    ${formattedDate} (${data.date})
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px;background-color:#f8fafc;font-size:13px;font-weight:600;color:#475569;vertical-align:top;">Reason / Symptoms:</td>
                  <td style="padding:12px;background-color:#f8fafc;font-size:13px;color:#1e293b;line-height:1.5;">
                    ${data.reason.replace(/\n/g, "<br />")}
                  </td>
                </tr>
              </table>

              <!-- Quick Action CTAs for Front Desk / Clinical Coordinator -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:24px;">
                <tr>
                  <td align="center" style="padding-right:8px;">
                    <a href="tel:${data.phone}" style="display:inline-block;width:100%;box-sizing:border-box;background-color:#0a1628;color:#ffffff;padding:12px 18px;text-align:center;text-decoration:none;border-radius:9999px;font-size:13px;font-weight:600;">
                      📞 Call Patient Directly
                    </a>
                  </td>
                  <td align="center" style="padding-left:8px;">
                    <a href="https://wa.me/${data.phone.replace(/\D/g, "")}?text=Hello%20${encodeURIComponent(data.name)}%2C%20this%20is%20Dr.%20Manish%20Aggarwal%27s%20cardiology%20team%20at%20Yashoda%20Medicity%20regarding%20your%20appointment%20request%20(${referenceId})." style="display:inline-block;width:100%;box-sizing:border-box;background-color:#16a34a;color:#ffffff;padding:12px 18px;text-align:center;text-decoration:none;border-radius:9999px;font-size:13px;font-weight:600;">
                      💬 Reply via WhatsApp
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f8fafc;padding:20px 28px;text-align:center;border-top:1px solid #e2e8f0;font-size:11px;color:#64748b;">
              <p style="margin:0 0 4px 0;">
                Yashoda Medicity · Indirapuram, Ghaziabad, Delhi NCR 201014
              </p>
              <p style="margin:0;">
                Emergency Bay &amp; 24/7 Cath Lab Mobilization: +91-9871183181
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Builds the reassuring luxury HTML confirmation email for the patient.
 */
function buildPatientConfirmationHtml(
  data: AppointmentInput,
  referenceId: string,
  formattedDate: string,
): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Appointment Request Received</title>
</head>
<body style="margin:0;padding:0;background-color:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:#1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f8fafc;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:600px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 25px -5px rgba(0,0,0,0.06);border:1px solid #e2e8f0;" cellspacing="0" cellpadding="0">
          
          <!-- Brand Header -->
          <tr>
            <td style="background-color:#0a1628;padding:32px 28px;text-align:center;border-bottom:3px solid #c59b27;">
              <p style="margin:0 0 6px 0;font-size:11px;font-weight:700;letter-spacing:2px;color:#c59b27;text-transform:uppercase;">
                Yashoda Medicity · Indirapuram
              </p>
              <h1 style="margin:0;font-size:24px;font-weight:600;color:#ffffff;letter-spacing:-0.5px;">
                Dr. Manish Aggarwal
              </h1>
              <p style="margin:4px 0 0 0;font-size:13px;color:#94a3b8;">
                Director — Interventional Cardiology &amp; Structural Heart Specialist
              </p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding:32px 28px;">
              <div style="text-align:center;margin-bottom:24px;">
                <div style="display:inline-block;width:52px;height:52px;line-height:52px;border-radius:50%;background-color:#ecfdf5;color:#059669;font-size:26px;">
                  ✓
                </div>
                <h2 style="margin:12px 0 4px 0;font-size:20px;font-weight:600;color:#0f172a;">
                  Appointment Request Received
                </h2>
                <p style="margin:0;font-size:12px;color:#64748b;">
                  Booking Reference: <strong style="color:#0f172a;font-family:monospace;">${referenceId}</strong>
                </p>
              </div>

              <p style="margin:0 0 16px 0;font-size:14px;line-height:1.6;color:#334155;">
                Dear <strong>${data.name}</strong>,
              </p>
              <p style="margin:0 0 20px 0;font-size:14px;line-height:1.6;color:#334155;">
                Thank you for contacting our cardiology suite at Yashoda Medicity. We have successfully received your consultation request for <strong>${formattedDate}</strong>.
              </p>

              <!-- Confirmation Details Box -->
              <div style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:18px 20px;margin-bottom:24px;">
                <p style="margin:0 0 8px 0;font-size:12px;font-weight:700;color:#0a1628;text-transform:uppercase;letter-spacing:1px;">
                  What Happens Next?
                </p>
                <p style="margin:0 0 8px 0;font-size:13px;line-height:1.5;color:#475569;">
                  • <strong>Phone / WhatsApp Confirmation:</strong> Our clinical care coordinator will contact you at <strong>${data.phone}</strong> within <strong>one business day</strong> to confirm your exact appointment time slot.
                </p>
                <p style="margin:0;font-size:13px;line-height:1.5;color:#475569;">
                  • <strong>Medical Records to Bring:</strong> If available, please keep recent ECG, 2D Echocardiography reports, previous angiogram CDs, and current prescriptions handy.
                </p>
              </div>

              <!-- Emergency Callout -->
              <div style="background-color:#fef2f2;border:1px solid #fecaca;border-radius:12px;padding:14px 18px;margin-bottom:24px;">
                <p style="margin:0 0 4px 0;font-size:12px;font-weight:700;color:#991b1b;text-transform:uppercase;">
                  ⚠️ Experiencing an Acute Emergency?
                </p>
                <p style="margin:0;font-size:12px;line-height:1.5;color:#b91c1c;">
                  If you or your family member are experiencing sudden, severe chest pain, shortness of breath, cold sweating, or fainting, do not wait for OPD confirmation. Please call our 24/7 Emergency Helpline immediately at <a href="tel:+919871183181" style="color:#991b1b;font-weight:bold;text-decoration:underline;">+91-9871183181</a> or arrive directly at the Yashoda Medicity Emergency Bay.
                </p>
              </div>

              <!-- Location Details -->
              <p style="margin:0;font-size:13px;color:#475569;line-height:1.5;">
                <strong>Hospital Location:</strong><br />
                Yashoda Medicity, Indirapuram, Ghaziabad, Delhi NCR 201014<br />
                Direct Link: <a href="https://maps.google.com/?q=Yashoda+Medicity+Indirapuram" style="color:#0284c7;text-decoration:none;">Open in Google Maps</a>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f8fafc;padding:20px 28px;text-align:center;border-top:1px solid #e2e8f0;font-size:11px;color:#64748b;">
              <p style="margin:0;">
                Dr. Manish Aggarwal · Interventional Cardiology &amp; Structural Heart Suite
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Dispatches an email using the Resend REST API via native fetch.
 */
async function sendViaResend(
  apiKey: string,
  fromEmail: string,
  toEmail: string,
  subject: string,
  html: string,
  text: string,
  replyTo?: string,
): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const payload: Record<string, unknown> = {
      from: fromEmail,
      to: [toEmail],
      subject,
      html,
      text,
    };
    if (replyTo) {
      payload.reply_to = replyTo;
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = (await response.json().catch(() => ({}))) as Record<string, unknown>;

    if (!response.ok) {
      const errorMsg = typeof data.message === "string" ? data.message : `HTTP ${response.status}`;
      return { success: false, error: errorMsg };
    }

    return { success: true, id: typeof data.id === "string" ? data.id : undefined };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Network error contacting Resend API",
    };
  }
}

/**
 * Core appointment submission handler.
 * Validates inputs, handles honeypots, dispatches notification & confirmation emails,
 * and formats structured JSON responses.
 */
export async function handleAppointmentSubmission(
  rawInput: unknown,
  env?: EnvContext,
): Promise<AppointmentApiResponse> {
  // 1. Zod Input Validation
  const parseResult = appointmentSchema.safeParse(rawInput);
  if (!parseResult.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parseResult.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }
    return {
      success: false,
      message: "Validation failed. Please verify the highlighted fields.",
      errors: fieldErrors,
    };
  }

  const data = parseResult.data;

  // 2. Anti-spam honeypot detection: If bot filled 'website', quietly return success without sending email
  if (data.website && data.website.trim().length > 0) {
    return {
      success: true,
      referenceId: generateReferenceId(),
      message: "Your appointment request has been received.",
      submittedAt: new Date().toISOString(),
      patientName: data.name,
      preferredDate: data.date,
    };
  }

  const referenceId = generateReferenceId();
  const submittedAt = new Date().toISOString();
  const formattedDate = formatDisplayDate(data.date);
  const timestampStr = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const resendApiKey = getEnvVariable("RESEND_API_KEY", env);
  const fromEmail =
    getEnvVariable("APPOINTMENT_FROM_EMAIL", env) ||
    "Dr. Manish Aggarwal Appointments <onboarding@resend.dev>";

  // Construct text fallback for clinic notification
  const clinicText = `
NEW APPOINTMENT REQUEST
Reference ID: ${referenceId}
Time: ${timestampStr}

PATIENT DETAILS:
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Preferred Date: ${formattedDate} (${data.date})

REASON FOR VISIT:
${data.reason}

Hospital: Yashoda Medicity, Indirapuram, Ghaziabad
Emergency Bay: +91-9871183181
  `.trim();

  // Construct text fallback for patient confirmation
  const patientText = `
Dear ${data.name},

Thank you for requesting an appointment with Dr. Manish Aggarwal at Yashoda Medicity, Indirapuram.

Reference ID: ${referenceId}
Requested Date: ${formattedDate}

Our clinical care coordinator will review your request and contact you at ${data.phone} within one business day to confirm your exact OPD consultation slot.

If you are experiencing an acute cardiac emergency, do not wait for an OPD slot. Call our 24/7 triage helpline at +91-9871183181 immediately or proceed directly to Yashoda Medicity Emergency Bay.

Yashoda Medicity, Indirapuram, Ghaziabad, Delhi NCR 201014.
  `.trim();

  const clinicHtml = buildClinicNotificationHtml(data, referenceId, formattedDate, timestampStr);
  const patientHtml = buildPatientConfirmationHtml(data, referenceId, formattedDate);

  // 3. Dispatch Email Notification
  if (resendApiKey) {
    // Send clinic notification email
    const clinicSendResult = await sendViaResend(
      resendApiKey,
      fromEmail,
      CLINIC_NOTIFICATION_EMAIL,
      `[New Appointment Request] ${data.name} — ${formattedDate} (#${referenceId})`,
      clinicHtml,
      clinicText,
      data.email, // Reply-to patient
    );

    if (!clinicSendResult.success) {
      console.error(
        `[Appointment Handler] Failed to send email to ${CLINIC_NOTIFICATION_EMAIL}:`,
        clinicSendResult.error,
      );
    } else {
      console.info(
        `[Appointment Handler] Notification successfully sent to ${CLINIC_NOTIFICATION_EMAIL}. Resend ID: ${clinicSendResult.id}`,
      );
    }

    // Send patient confirmation email (best-effort)
    if (data.email) {
      const patientSendResult = await sendViaResend(
        resendApiKey,
        fromEmail,
        data.email,
        `Your Appointment Request with Dr. Manish Aggarwal — Yashoda Medicity (#${referenceId})`,
        patientHtml,
        patientText,
      );

      if (!patientSendResult.success) {
        console.warn(
          `[Appointment Handler] Patient confirmation email to ${data.email} could not be delivered:`,
          patientSendResult.error,
        );
      }
    }
  } else {
    // Development / Staging fallback: log structured details
    console.info(
      `------------------------------------------------------------------\n` +
        `[APPOINTMENT DISPATCH (DEV MODE)]\n` +
        `No RESEND_API_KEY detected in environment.\n` +
        `To enable live email dispatch, add RESEND_API_KEY to your environment.\n` +
        `Target: ${CLINIC_NOTIFICATION_EMAIL}\n` +
        `Reference: ${referenceId}\n` +
        `Patient: ${data.name} | Phone: ${data.phone} | Email: ${data.email}\n` +
        `Preferred Date: ${formattedDate}\n` +
        `Reason: ${data.reason}\n` +
        `------------------------------------------------------------------`,
    );
  }

  // 4. Optional Webhook dispatch (e.g., hospital CRM / Slack / WhatsApp bot integration)
  const webhookUrl = getEnvVariable("APPOINTMENT_WEBHOOK_URL", env);
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "appointment.requested",
          referenceId,
          submittedAt,
          data,
        }),
      });
    } catch (webhookErr) {
      console.warn("[Appointment Handler] Webhook delivery failed:", webhookErr);
    }
  }

  return {
    success: true,
    referenceId,
    message:
      "Your appointment request has been successfully submitted and will be confirmed within one business day.",
    submittedAt,
    patientName: data.name,
    preferredDate: formattedDate,
  };
}
