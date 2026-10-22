import { createServerFn } from "@tanstack/react-start";
import { appointmentSchema } from "../lib/appointment-schema";
import { handleAppointmentSubmission } from "./appointment-handler";

/**
 * TanStack Start Server Function for appointment submissions.
 * Provides RPC capability directly callable from client or server components.
 */
export const submitAppointmentAction = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    return appointmentSchema.parse(data);
  })
  .handler(async ({ data }) => {
    return await handleAppointmentSubmission(data);
  });
