import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Plan Your Booking | Amthane Valley Farm",
  description:
    "Our booking system is arriving soon. Meanwhile, reach out to craft your day at Amthane Valley Farm.",
};

export default function BookPage() {
  return (
    <section className="section-spacing min-h-[60vh] bg-cream-soft/80">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 rounded-[2.5rem] bg-white/90 p-10 text-center shadow-soft">
        <h1 className="text-4xl font-semibold text-forest">Bookings coming soon</h1>
        <p className="text-lg text-forest-muted">
          We&apos;re crafting a seamless booking experience with live availability and curated packages. In the meantime,
          reach out via WhatsApp or the enquiry form and we&apos;ll help design your perfect day in nature.
        </p>
  <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="https://wa.me/919850000000" target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/#contact">Enquiry Form</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
