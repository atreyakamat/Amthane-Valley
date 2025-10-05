export interface ContactPayload {
  name: string;
  email?: string | null;
  phone?: string | null;
  date: string;
  groupSize: string;
  occasion: string;
  message: string;
}

/**
 * Placeholder email sender.
 * Replace with a real mail provider (Nodemailer, Resend, Postmark) when credentials are ready.
 */
export async function sendContactEmail(payload: ContactPayload) {
  if (!process.env.EMAIL_TRANSPORT_ENABLED) {
    console.info("sendContactEmail invoked without email transport configured", payload);
    return { delivered: false } as const;
  }

  // Example: integrate with Nodemailer / third-party service here.
  // Keeping async signature so it can be wired easily later.
  throw new Error("Email transport not implemented yet. Configure your provider in sendMail.ts");
}
