"use client";

import { MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";

import { SectionHeading } from "../../components/ui/section-heading";
import { Button } from "../../components/ui/button";

export function LocationSection() {
  return (
    <section id="location" className="bg-cream-soft/70">
  <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.05fr_0.95fr] md:px-8">
        <motion.div
          className="overflow-hidden rounded-[2rem] bg-white shadow-soft"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d988.5188665404033!2d73.90562684145065!3d15.671026232287847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1760685290750!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            className="aspect-[4/3] w-full"
            referrerPolicy="no-referrer-when-downgrade"
            title="Amthane Valley Farm Location"
          />
        </motion.div>
        <div className="flex flex-col justify-center space-y-8">
          <SectionHeading
            eyebrow="Directions"
            title="Between palms, dam waters, and the Mapusa breeze"
            description="Amthane Valley Farm is nestled beside the serene Amthane Dam, a breezy 15-minute drive from Mapusa and 40 minutes from Panjim."
          />
          <div className="rounded-3xl bg-white/85 p-6 text-forest shadow-soft">
            <p className="text-lg font-semibold">
              &ldquo;Located beside the serene Amthane Dam, just 15 minutes from Mapusa.&rdquo;
            </p>
            <p className="mt-4 text-sm text-forest-muted">
              Plot 12, Near Amthane Dam, Mulgao, North Goa 403520
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <span className="inline-flex items-center gap-2 text-forest-muted">
                <MapPin className="h-5 w-5" aria-hidden />
                15 mins from Mapusa • 35 mins from Calangute • 40 mins from Panjim
              </span>
              <span className="inline-flex items-center gap-2 text-forest-muted">
                <Navigation className="h-5 w-5" aria-hidden />
                Coordinates: 15.6710° N, 73.9056° E
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <a
                  href="https://maps.app.goo.gl/RNwrzaSJNArC6hQn7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Maps
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="tel:+919850000000">Call for directions</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
