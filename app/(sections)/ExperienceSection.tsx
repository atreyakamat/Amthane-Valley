"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { CalendarHeart } from "lucide-react";

import { Button } from "../../components/ui/button";
import { SectionHeading } from "../../components/ui/section-heading";
import { experienceImages } from "../../lib/images";
import { cn } from "../../lib/utils";

import StackingCards, {
  StackingCardItem,
} from "../../components/fancy/blocks/stacking-cards";

const experiences = [
  {
    title: "Leisurely Birthday Celebrations",
    description:
      "Host a birthday party without the rush. Enjoy a poolside brunch, a relaxed BBQ, and the freedom to celebrate at your own pace under the coconut palms.",
    image: experienceImages[0].image,
  },
  {
    title: "Rejuvenating Corporate Retreats in Goa",
    description:
      "Trade deadlines for birdsong. Our serene farm is the perfect venue for corporate offsites and team-building days that focus on connection and creativity.",
    image: experienceImages[1].image,
  },
  {
    title: "Soulful Pre-Wedding Shoots & Gatherings",
    description:
      "Capture the beginning of your journey in a place that breathes romance and tranquility. The perfect Goan backdrop for your love story.",
    image: experienceImages[2].image,
  },
  {
    title: "Unhurried Family Gatherings & Picnics",
    description:
      "Reconnect with loved ones the old-fashioned way. With space for everyone, our farm is the top choice for family reunions in Goa where memories are the main agenda.",
    image: experienceImages[3].image,
  },
  {
    title: "Restorative Wellness & Yoga Retreats",
    description:
      "Find your inner harmony amidst the melody of nature. The quiet seclusion of our valley is ideal for workshops focused on wellbeing and peace.",
    image: experienceImages[4].image,
  },
  {
    title: "Authentic Goan Get-Togethers",
    description:
      "Whether it’s a friends’ reunion or a simple day out, embrace the joy of togetherness in your own private slice of the Goan countryside.",
    image: experienceImages[5].image,
  },
];

const bgColors = [
  "bg-[#2f5a40]",
  "bg-[#8a5b38]",
  "bg-[#89cff0]",
];

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experiences">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          title="Celebrate the Goan Way: Occasions at Amthane Valley"
          description="Your event, infused with the unhurried spirit of Susegad. Discover how our private farm in North Goa can transform your gathering into a cherished memory."
          className="text-center mb-16"
        />

        <div
          ref={containerRef}
          className="h-[720px] overflow-auto bg-background rounded-[2.5rem] scrollbar-hide"
        >
          <StackingCards
            totalCards={experiences.length}
            scrollOptions={{ container: containerRef }}
          >
            {/* <div className="h-[720px] flex items-center justify-center text-5xl md:text-7xl font-semibold text-forest">
              Scroll ↓
            </div> */}

            {experiences.map((exp, index) => (
              <StackingCardItem
                key={exp.title}
                index={index}
                className="h-[720px]"
              >
                <div
                  className={cn(
                    bgColors[index % bgColors.length],
                    "h-[75%] w-11/12 mx-auto rounded-[2.5rem] flex flex-col md:flex-row gap-8 p-8 md:p-12"
                  )}
                >
                  <div className="flex-1 flex flex-col justify-center text-white">
                    <h3 className="text-3xl md:text-4xl font-semibold">
                      {exp.title}
                    </h3>
                    <p className="mt-4 text-sm md:text-base opacity-90 max-w-md">
                      {exp.description}
                    </p>

                    <div className="mt-6 flex gap-4">
                      <Button asChild variant="secondary" glow>
                        <a
                          href="https://wa.me/919850000000"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2"
                        >
                          <CalendarHeart className="h-5 w-5" />
                          Plan your event
                        </a>
                      </Button>

                      <Button asChild variant="secondary" glow>
                        <Link href="/experiences">View all</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="relative flex-1 rounded-3xl overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 600px, 90vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </StackingCardItem>
            ))}
          </StackingCards>
        </div>
      </div>
    </section>
  );
}
