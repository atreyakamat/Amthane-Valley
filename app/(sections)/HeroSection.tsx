"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 60);
  });

  const parallax = useTransform(scrollY, [0, 400], [0, -120]);

  return (
    <section id="hero" ref={containerRef} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/coconut-trees.jpg"
        >
          <source src="/images/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-hero-overlay" aria-hidden="true" />
      </div>
      <motion.div
        className="pointer-events-none absolute inset-0 -z-[5] opacity-40"
        style={{ y: parallax }}
        aria-hidden="true"
      >
        <Image src="/images/dam-view.jpg" alt="Palm fronds" fill className="object-cover mix-blend-screen" priority />
      </motion.div>
  <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-10 px-4 text-center text-cream">
        <motion.span
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 text-xs uppercase tracking-[0.5em]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Goa • Beside Amthane Dam
        </motion.span>
        <motion.h1
          className="text-balance text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Where Nature Meets Comfort – Welcome to Amthane Valley.
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg text-white/85 md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Between coconut plantations and the sweet waters of the Amthane Dam, discover a nature escape crafted for celebrations, togetherness, and unhurried joy.
        </motion.p>
        <motion.div
          className="flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button asChild size="lg" glow>
            <a href="#about">Explore the Farm</a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="https://wa.me/919850000000" target="_blank" rel="noreferrer">
              Book Your Day
            </a>
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="absolute inset-x-0 bottom-0 flex justify-center pb-8 text-white/70"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isScrolled ? 0 : 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.6em]">
          Scroll
          <div className="h-12 w-px bg-white/50" />
        </div>
      </motion.div>
    </section>
  );
}
