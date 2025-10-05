import { NextResponse } from "next/server";
import { z } from "zod";

import { sendContactEmail } from "@/lib/sendMail";

const contactRequestSchema = z.object({
  name: z.string().min(2),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
  date: z.string().min(1),
  groupSize: z.string().min(1),
  occasion: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const data = contactRequestSchema.parse(payload);

    const body = {
      name: data.name,
      email: data.email ?? null,
      phone: data.phone ?? null,
      date: data.date,
      groupSize: data.groupSize,
      occasion: data.occasion,
      message: data.message,
    };

    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;

    if (formspreeEndpoint) {
      const forward = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!forward.ok) {
        const errorText = await forward.text();
        throw new Error(`Formspree error: ${errorText}`);
      }
    } else {
      console.info("Contact enquiry", body);
    }

    if (process.env.EMAIL_TRANSPORT_ENABLED === "true") {
      await sendContactEmail(body);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Invalid form details", issues: error.flatten() },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Unable to submit the form right now." },
      { status: 500 }
    );
  }
}
