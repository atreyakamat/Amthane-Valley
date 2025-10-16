"use client";

import { Droplets, Waves, BedDouble, Hotel, UsersRound, TreePalm, TentTree, Trees } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { SectionHeading } from "../../components/ui/section-heading";
import { ScrollReveal } from "../../components/ScrollReveal";
import { LeafIcon } from "../../components/ui/leaf-icon";

const facilities = [
  {
    icon: Droplets,
    title: "Natural Pool",
    description: "Season-exclusive rain-fed pool that glistens during monsoon magic.",
  },
  {
    icon: Waves,
    title: "Swimming Pool",
    description: "Sparkling blue waters with sun loungers for leisurely afternoons.",
  },
  {
    icon: BedDouble,
    title: "3 Cozy Rooms",
    description: "Comfort-first medium rooms perfect for families staying the night.",
  },
  {
    icon: Hotel,
    title: "2 AC Deluxe Suites",
    description: "Air-conditioned, en-suite elegance for hosts and special guests.",
  },
  {
    icon: UsersRound,
    title: "2 Dormitories",
    description: "Each sleeps 7 with twin washrooms — tailor-made for groups.",
  },
  {
    icon: TentTree,
    title: "Group Huts",
    description: "Rustic pavilions for buffet spreads, live stations, and moonlit chats.",
  },
  {
    icon: TreePalm,
    title: "Open Play Lawns",
    description: "Free-flow lawns lined with palms — games, picnics, and sundowner dance floors.",
  },
  {
    icon: Trees,
    title: "Nature Trails",
    description: "Guided walks around the dam and plantations for calm morning escapes.",
  },
];

export function FacilitiesSection() {
  return (
    <section id="facilities" className="section-spacing bg-cream-soft/60">
      <div className="mx-auto max-w-6xl space-y-12 px-4 md:px-8">
        <div className="flex items-center justify-center gap-4">
          <LeafIcon className="h-8 w-8 text-forest" />
          <SectionHeading
            eyebrow="Stay & Facilities"
            title="Spaces crafted for every mood and moment"
            description="From sunlit pools to cozy dorms and grass huts, every space at Amthane Valley is designed to keep everyone together — yet relaxed."
            align="center"
          />
          <LeafIcon className="h-8 w-8 rotate-180 text-forest" />
        </div>
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {facilities.map((facility, index) => (
            <ScrollReveal key={facility.title} delay={index * 0.05}>
              <Card className="h-full">
                <CardHeader>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/12 text-forest">
                    <facility.icon className="h-6 w-6" aria-hidden />
                  </span>
                </CardHeader>
                <CardContent>
                  <CardTitle>{facility.title}</CardTitle>
                  <CardDescription>{facility.description}</CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
