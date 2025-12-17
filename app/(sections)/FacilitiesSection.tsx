"use client";

import { Droplets, Waves, TreePalm, Utensils, Music, Sparkles, BedDouble } from "lucide-react";
import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { SectionHeading } from "../../components/ui/section-heading";
import { ScrollReveal } from "../../components/ScrollReveal";
import { LeafIcon } from "../../components/ui/leaf-icon";
import { Button } from "../../components/ui/button";

const facilities = [
  {
    icon: Waves,
    title: "The Modern Pool",
    description: "The heart of our farm, where lively conversations and cool dips create the perfect backdrop for a day of celebration.",
  },
  {
    icon: Droplets,
    title: "The Natural Pool",
    description: "A seasonal wonder fed by the sweet waters of Amthane Dam. Experience a swim unlike any other, enveloped by nature's harmony.",
  },
  {
    icon: TreePalm,
    title: "Huts & Lawns",
    description: "Settle into our open-air huts for a meal, a chat, or simply to watch the world go by. The surrounding lawns are your space to play, relax, and just be.",
  },
  {
    icon: Utensils,
    title: "Catering Services",
    description: "Enjoy delicious Goan cuisine and custom menus prepared by our culinary team. From BBQ to traditional meals, we've got you covered.",
  },
  {
    icon: Music,
    title: "Event Spaces",
    description: "Perfect venues for celebrations, corporate events, and gatherings. Flexible spaces that adapt to your vision and needs.",
  },
  {
    icon: Sparkles,
    title: "Custom Decorations",
    description: "Transform our spaces with personalized decor. Our team helps bring your event theme to life with creative touches.",
  },
];

export function FacilitiesSection() {
  return (
    <section id="facilities" className="bg-cream-soft/60">
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
          {facilities.slice(0, 3).map((facility, index) => (
            <ScrollReveal key={facility.title} delay={index * 0.05}>
              <Card className="h-full border-forest/10 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                    <facility.icon className="h-6 w-6" aria-hidden />
                  </span>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-foreground">{facility.title}</CardTitle>
                  <CardDescription className="text-foreground/70">{facility.description}</CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Button */}
        <ScrollReveal delay={0.2}>
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="group">
              <Link href="/facilities">
                Explore All Facilities
                <Waves className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        {/* Rooms & Stays CTA Section */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-forest to-forest-soft p-10 text-cream shadow-leaf md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] backdrop-blur-sm">
                <BedDouble className="mr-2 h-4 w-4" />
                Accommodations
              </div>
              <h3 className="mt-6 text-3xl font-semibold md:text-4xl">
                Explore Our Rooms & Stays
              </h3>
              <p className="mt-4 text-lg text-cream/90">
                From cozy non-AC rooms to luxurious AC suites and spacious dormitories — find the perfect accommodation for your group. Each space thoughtfully designed for comfort and relaxation.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" variant="secondary" className="bg-white text-forest hover:bg-cream">
                  <Link href="/stays">
                    View All Rooms
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-black hover:bg-white/10">
                  <a href="https://wa.me/919850000000" target="_blank" rel="noreferrer">
                    Check Availability
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
