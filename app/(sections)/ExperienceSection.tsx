"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarHeart, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

const experiences = [
  {
    title: "Family Gatherings",
    description: "Games on the lawn, music in the huts, and laughter over shared platters.",
    image: "/images/events/family-day.jpg",
  },
  {
    title: "Pool Parties",
    description: "Floaties, cocktails, and sunsets that blush over the dam.",
    image: "/images/pool.jpg",
  },
  {
    title: "Birthday Brunches",
    description: "Curated decor with live grills and dessert under the palms.",
    image: "/images/events/birthday.jpg",
  },
  {
    title: "Nature Walks",
    description: "Guided coconut plantation strolls leading to the Amthane Dam edge.",
    image: "/images/dam-view.jpg",
  },
  {
    title: "Pre-wedding Shoots",
    description: "Golden light, serene waters, and soulful backdrops for forever moments.",
    image: "/images/events/prewedding.jpg",
  },
];

export function ExperienceSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 6000, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="experiences" className="section-spacing">
      <div className="mx-auto max-w-6xl space-y-12 px-4 md:px-8">
        <SectionHeading
          eyebrow="Experiences"
          title="Gather, celebrate, and create stories beside the dam"
          description="Slide through moments captured at Amthane Valley — from sunrise yoga and pool brunches to starry night celebrations."
        />
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {experiences.map((experience, index) => (
                <motion.article
                  key={experience.title}
                  className="min-w-[80%] shrink-0 overflow-hidden rounded-[2.5rem] bg-white shadow-leaf md:min-w-[55%] lg:min-w-[45%]"
                  initial={{ opacity: 0.4, scale: 0.95 }}
                  animate={{ opacity: selectedIndex === index ? 1 : 0.55, scale: selectedIndex === index ? 1 : 0.97 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 600px, 80vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" aria-hidden />
                    <motion.div
                      className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/90 p-5 shadow-lg backdrop-blur"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <h3 className="text-2xl font-semibold text-forest">{experience.title}</h3>
                      <p className="mt-2 text-sm text-forest-muted">
                        {experience.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-background to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-background to-transparent" aria-hidden />
          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button
                size="icon"
                variant="outline"
                onClick={scrollPrev}
                aria-label="Previous experience"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </Button>
              <Button size="icon" onClick={scrollNext} aria-label="Next experience">
                <ChevronRight className="h-5 w-5" aria-hidden />
              </Button>
            </div>
            <Button asChild variant="secondary" glow>
              <a href="https://wa.me/919850000000" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <CalendarHeart className="h-5 w-5" aria-hidden />
                Plan your event
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
