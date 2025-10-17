"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CalendarDays, Users, Sparkles } from "lucide-react";

import { Button } from "../../components/ui/button";
import { SectionHeading } from "../../components/ui/section-heading";

const contactSchema = z.object({
  name: z.string().min(2, "Please tell us your name"),
  email: z
    .string()
    .email("Add a contact email")
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .min(6, "Add a contact number")
    .optional()
    .or(z.literal("")),
  date: z.string().min(1, "Select a preferred date"),
  groupSize: z.string().min(1, "Let us know an approximate group size"),
  occasion: z.string().min(1, "Share the occasion"),
  message: z.string().min(10, "Tell us a little more about your plans"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const occasionSuggestions = [
  "Family Getaway",
  "Birthday Celebration",
  "Pool Party",
  "Corporate Offsite",
  "Pre-wedding",
  "Reunion",
];

export function ContactSection() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      groupSize: "",
      occasion: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      setState("loading");
      setMessage(null);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.error ?? "Oops! We couldn’t send your request.");
      }
      setState("success");
      setMessage("We’ve received your request. Our team will reach out shortly!");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We’re unable to send your request right now. Please WhatsApp or call us."
      );
    }
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="mx-auto max-w-6xl space-y-12 px-4 md:px-8">
        <SectionHeading
          eyebrow="Plan your day"
          title="Let’s start crafting your Amthane Valley gathering"
          description="Tell us a little about your celebration and we’ll curate the perfect day — from pools and décor to menus and music."
          align="center"
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
            className="rounded-[2.5rem] bg-white/90 p-8 shadow-soft"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <form className="grid gap-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-forest" htmlFor="name">
                  Your name *
                </label>
                <input
                  id="name"
                  type="text"
                  {...form.register("name")}
                  className="h-12 rounded-2xl border border-forest/15 bg-cream/60 px-4 text-forest shadow-inner focus:border-forest focus:outline-none focus:ring-2 focus:ring-aqua/30"
                  placeholder="How should we address you?"
                />
                {form.formState.errors.name ? (
                  <span className="text-sm text-red-600">{form.formState.errors.name.message}</span>
                ) : null}
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-forest" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    className="h-12 rounded-2xl border border-forest/15 bg-cream/60 px-4 text-forest shadow-inner focus:border-forest focus:outline-none focus:ring-2 focus:ring-aqua/30"
                    placeholder="Optional — to share brochures"
                  />
                  {form.formState.errors.email ? (
                    <span className="text-sm text-red-600">{form.formState.errors.email.message}</span>
                  ) : null}
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-forest" htmlFor="phone">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...form.register("phone")}
                    className="h-12 rounded-2xl border border-forest/15 bg-cream/60 px-4 text-forest shadow-inner focus:border-forest focus:outline-none focus:ring-2 focus:ring-aqua/30"
                    placeholder="We’ll confirm details with you"
                  />
                  {form.formState.errors.phone ? (
                    <span className="text-sm text-red-600">{form.formState.errors.phone.message}</span>
                  ) : null}
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-forest" htmlFor="date">
                    Preferred date *
                  </label>
                  <input
                    id="date"
                    type="date"
                    {...form.register("date")}
                    className="h-12 rounded-2xl border border-forest/15 bg-cream/60 px-4 text-forest shadow-inner focus:border-forest focus:outline-none focus:ring-2 focus:ring-aqua/30"
                  />
                  {form.formState.errors.date ? (
                    <span className="text-sm text-red-600">{form.formState.errors.date.message}</span>
                  ) : null}
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-forest" htmlFor="groupSize">
                    Group size *
                  </label>
                  <div className="relative h-12">
                    <input
                      id="groupSize"
                      type="text"
                      {...form.register("groupSize")}
                      className="h-full w-full rounded-2xl border border-forest/15 bg-cream/60 px-4 text-forest shadow-inner focus:border-forest focus:outline-none focus:ring-2 focus:ring-aqua/30"
                      placeholder="Approx. guests"
                    />
                    <Users className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-forest-muted" />
                  </div>
                  {form.formState.errors.groupSize ? (
                    <span className="text-sm text-red-600">{form.formState.errors.groupSize.message}</span>
                  ) : null}
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-forest" htmlFor="occasion">
                    Occasion *
                  </label>
                  <div className="relative h-12">
                    <input
                      id="occasion"
                      type="text"
                      list="occasion-suggestions"
                      {...form.register("occasion")}
                      className="h-full w-full rounded-2xl border border-forest/15 bg-cream/60 px-4 text-forest shadow-inner focus:border-forest focus:outline-none focus:ring-2 focus:ring-aqua/30"
                      placeholder="What are we celebrating?"
                    />
                    <Sparkles className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-forest-muted" />
                    <datalist id="occasion-suggestions">
                      {occasionSuggestions.map((option) => (
                        <option key={option} value={option} />
                      ))}
                    </datalist>
                  </div>
                  {form.formState.errors.occasion ? (
                    <span className="text-sm text-red-600">{form.formState.errors.occasion.message}</span>
                  ) : null}
                </div>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-forest" htmlFor="message">
                  Tell us more *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...form.register("message")}
                  className="rounded-2xl border border-forest/15 bg-cream/60 px-4 py-3 text-forest shadow-inner focus:border-forest focus:outline-none focus:ring-2 focus:ring-aqua/30"
                  placeholder="Themes, cuisine preferences, timing, any add-ons..."
                />
                {form.formState.errors.message ? (
                  <span className="text-sm text-red-600">{form.formState.errors.message.message}</span>
                ) : null}
              </div>
              <Button
                type="submit"
                size="lg"
                glow
                disabled={state === "loading"}
                className="justify-center"
              >
                {state === "loading" ? "Sending your request…" : "Send your enquiry"}
              </Button>
              {message ? (
                <p
                  className={`text-sm ${state === "success" ? "text-forest" : "text-red-600"}`}
                  role="status"
                >
                  {message}
                </p>
              ) : null}
            </form>
          </motion.div>
          <motion.div
            className="flex flex-col justify-between gap-8 rounded-[2.5rem] bg-forest text-cream px-8 py-10 shadow-leaf"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold">Prefer a quick chat?</h3>
              <p className="text-lg text-cream/85">
                WhatsApp us for instant date checks, packages, and décor ideas. We love co-creating celebrations that feel personal and heartfelt.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2">
                  <CalendarDays className="h-4 w-4" aria-hidden />
                  Open for day bookings • 9 AM – 9 PM
                </div>
                <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2">
                  <Users className="h-4 w-4" aria-hidden />
                  Ideal for groups of 20 – 120 guests
                </div>
              </div>
            </div>
            <Button asChild size="lg" variant="secondary" glow className="bg-white text-forest">
              <a href="https://wa.me/919850000000" target="_blank" rel="noreferrer">
                Chat with us on WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
