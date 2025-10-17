"use client";

import { Droplets, Waves, BedDouble, UsersRound, TreePalm } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { SectionHeading } from "../../components/ui/section-heading";
import { ScrollReveal } from "../../components/ScrollReveal";
import { LeafIcon } from "../../components/ui/leaf-icon";

const facilities = [
  {
    icon: Waves,
    title: "The Modern Pool: Your Hub of Joy",
    description: "The heart of our farm, where lively conversations and cool dips create the perfect backdrop for a day of celebration.",
  },
  {
    icon: Droplets,
    title: "The Natural Pool: Monsoon Magic",
    description: "A seasonal wonder fed by the sweet waters of Amthane Dam. Experience a swim unlike any other, enveloped by nature&apos;s harmony.",
  },
  {
    icon: BedDouble,
    title: "Cozy Rooms & AC Suites: Rest & Recharge",
    description: "For those moments of quiet retreat or an overnight stay, our rooms offer a peaceful sanctuary to extend your Susegad experience.",
  },
  {
    icon: UsersRound,
    title: "Group Dormitories: Togetherness Redefined",
    description: "Our dormitories are designed for shared laughter and easy camaraderie, making them ideal for corporate teams and close-knit groups.",
  },
  {
    icon: TreePalm,
    title: "Huts & Lawns: Unhurried Moments",
    description: "Settle into our open-air huts for a meal, a chat, or simply to watch the world go by. The surrounding lawns are your space to play, relax, and just be.",
  },
];

export function FacilitiesSection() {
  return (
    <section id="facilities" className="section-spacing bg-cream-soft/60">
      <div className="mx-auto max-w-6xl space-y-12 px-4 md:px-8">
        <div className="flex items-center justify-center gap-4">
          <LeafIcon className="h-8 w-8 text-forest" />
          <SectionHeading
            title="Spaces Crafted for Your Comfort & Susegad"
            description="From a refreshing dip in the pool to a quiet nap in a rustic hut, every facility at Amthane Valley is designed to help you and your guests unwind and connect."
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
