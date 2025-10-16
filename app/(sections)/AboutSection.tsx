"use client";

import Image from "next/image";
import { Leaf, Droplets, Waves, Tent } from "lucide-react";
import { motion } from "framer-motion";

import { SectionHeading } from "../../components/ui/section-heading";
import { images } from "../../lib/images";

const highlights = [
  {
    icon: Leaf,
    title: "Coconut plantations",
    description: "Towering palms and curated gardens embrace every gathering.",
  },
  {
    icon: Droplets,
    title: "Sweetwater from Amthane Dam",
    description: "Crystal-clear natural pools fed by the serene dam nearby.",
  },
  {
    icon: Waves,
    title: "Swimming & natural pools",
    description: "Choose between our azure pool or nature-crafted monsoon pools.",
  },
  {
    icon: Tent,
    title: "Grass huts & play lawns",
    description: "Open-air huts, hammocks, and lawns perfect for family games.",
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
            src={images.whatsapp1}
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
            eyebrow="Our Story"
            title="A family haven turned into Goa&apos;s favourite day retreat"
            description="Amthane Valley began as a family getaway by the dam and grew into a sanctuary for intimate celebrations. Every corner carries stories of laughter, music, and the fragrance of coconuts in the sea breeze."
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
        </div>
      </div>
    </section>
  );
}
