import { z } from "zod";

/**
 * Validates Indian & International phone numbers
 * Strips whitespace, hyphens, and brackets.
 * Requires 10 to 15 digits.
 */
const phoneRegex = /^(\+?\d{1,4}[-.\s]?)?(\(?\d{2,5}\)?[-.\s]?)?\d{3,5}[-.\s]?\d{3,5}$/;

/**
 * Robustly parses Indian Standard date format (DD/MM/YYYY or DD-MM-YYYY)
 * as well as ISO format (YYYY-MM-DD).
 */
export function parseAppointmentDate(val: string): Date | null {
  if (!val) return null;
  const trimmed = val.trim();

  // 1. Indian Standard: DD/MM/YYYY or DD-MM-YYYY
  const ddmmyyyy = trimmed.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/);
  if (ddmmyyyy) {
    const day = parseInt(ddmmyyyy[1], 10);
    const month = parseInt(ddmmyyyy[2], 10) - 1;
    const year = parseInt(ddmmyyyy[3], 10);
    if (month >= 0 && month <= 11 && day >= 1 && day <= 31 && year >= 2024 && year <= 2100) {
      const d = new Date(year, month, day);
      if (d.getFullYear() === year && d.getMonth() === month && d.getDate() === day) {
        return d;
      }
    }
    return null;
  }

  // 2. ISO Standard: YYYY-MM-DD
  const iso = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) {
    const year = parseInt(iso[1], 10);
    const month = parseInt(iso[2], 10) - 1;
    const day = parseInt(iso[3], 10);
    const d = new Date(year, month, day);
    if (d.getFullYear() === year && d.getMonth() === month && d.getDate() === day) {
      return d;
    }
  }

  return null;
}

export const appointmentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters." })
    .max(100, { message: "Name cannot exceed 100 characters." })
    .regex(/^[a-zA-Z\s.'-]+$/, {
      message: "Please enter a valid name using letters and standard punctuation.",
    }),

  phone: z
    .string()
    .trim()
    .min(10, { message: "Please enter a valid contact phone number (at least 10 digits)." })
    .max(20, { message: "Phone number is too long." })
    .refine(
      (val) => {
        const digitsOnly = val.replace(/\D/g, "");
        return digitsOnly.length >= 10 && digitsOnly.length <= 15 && phoneRegex.test(val);
      },
      {
        message: "Please enter a valid 10-digit mobile or phone number (e.g., +91 98711 83181).",
      },
    ),

  email: z
    .string()
    .trim()
    .email({ message: "Please provide a valid email address." })
    .max(100, { message: "Email cannot exceed 100 characters." }),

  date: z
    .string()
    .trim()
    .min(1, { message: "Please enter your preferred consultation date (DD/MM/YYYY)." })
    .refine((val) => parseAppointmentDate(val) !== null, {
      message: "Please enter a valid date in DD/MM/YYYY format (e.g., 24/10/2026).",
    })
    .refine(
      (val) => {
        const parsed = parseAppointmentDate(val);
        if (!parsed) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return parsed >= today;
      },
      {
        message: "Preferred date must be today or a future date.",
      },
    ),

  reason: z
    .string()
    .trim()
    .min(5, { message: "Please provide a brief reason for visit (minimum 5 characters)." })
    .max(1000, { message: "Reason for visit cannot exceed 1000 characters." }),

  // Honeypot field for bot protection (should always be empty)
  website: z.string().optional(),
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;

export interface AppointmentSuccessResponse {
  success: true;
  referenceId: string;
  message: string;
  submittedAt: string;
  patientName: string;
  preferredDate: string;
}

export interface AppointmentErrorResponse {
  success: false;
  message: string;
  errors?: Record<string, string>;
}

export type AppointmentApiResponse = AppointmentSuccessResponse | AppointmentErrorResponse;
