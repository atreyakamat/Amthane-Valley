"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

import { SectionHeading } from "../../components/ui/section-heading";
import { images } from "../../lib/images";

const highlights = [
  {
    icon: Check,
    title: "True Exclusivity",
    description: "The entire farm, reserved just for your group.",
  },
  {
    icon: Check,
    title: "Pools & Plantations",
    description: "A modern pool, a seasonal natural pool, and acres of coconut, arecanut, and cashew groves to explore.",
  },
  {
    icon: Check,
    title: "The Goan Way",
    description: "Perfect for unhurried gatherings of 20-120 guests.",
  },
  {
    icon: Check,
    title: "Secluded yet Accessible",
    description: "A short scenic drive from Mapusa, North Goa.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-full max-w-sm -translate-x-1/2 rounded-full bg-aqua/10 blur-3xl" aria-hidden />
  <div className="mx-auto grid max-w-6xl gap-16 px-4 lg:grid-cols-[1.1fr_0.9fr] md:px-8">
        <motion.div
          className="relative overflow-hidden rounded-[2.5rem] bg-leafy shadow-leaf"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={images.entranceOutside}
            alt="Amthane Valley Farm landscape"
            width={720}
            height={900}
            className="h-full w-full object-cover"
            loading="lazy"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-forest/40 via-transparent to-transparent" aria-hidden />
          <div className="absolute bottom-6 left-6 max-w-xs rounded-3xl bg-white/80 p-5 text-sm text-forest shadow-soft backdrop-blur">
            A family farm lovingly shaped into Goa&apos;s warmest nature escape — made for reunions, poolside milestones, and sun-dappled celebrations.
          </div>
        </motion.div>
        <div className="space-y-10">
          <SectionHeading
            title="A Space Designed for Leisure, Celebration & Connection"
            description="Amthane Valley is more than just a place; it&apos;s a feeling. Every corner here carries stories of laughter, the melody of nature, and a harmony you can only find in the Goan countryside. We are not a hotel, but your exclusive farm for the day. Whether you&apos;re planning a lively poolside party, an intimate family reunion, or a corporate retreat, we provide the perfect canvas for you to find your own Susegad."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                className="rounded-3xl bg-white/90 p-6 shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-forest">{title}</h3>
                <p className="mt-2 text-sm text-forest-muted">{description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="rounded-3xl bg-white/90 p-6 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl font-semibold text-forest">
              Our Story: The Search for Susegad that Became Amthane Valley
            </h3>
            <p className="mt-4 text-sm text-forest-muted">
              Our journey began with a simple desire: to find a piece of land where our family could experience true Goan Susegad. A place to unwind, to celebrate without a schedule, and to reconnect with nature. We found it here, by the tranquil waters of the Amthane Dam, surrounded by the rustling of palm leaves.
            </p>
            <p className="mt-4 text-sm text-forest-muted">
              What started as our private haven soon became a place our friends and their families wanted to share. We realized the Susegad we had built was something special. Today, we have opened our gates to you. We&apos;ve added modern comforts, but the essence remains: Amthane Valley is an invitation to experience the Goan way of life—a life of leisure, celebration, togetherness, and unhurried joy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
