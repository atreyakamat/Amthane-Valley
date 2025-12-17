import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../(sections)/Footer";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import { GallerySection } from "../(sections)/GallerySection";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { Camera, Image as ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Photo Gallery | Amthane Valley Farm",
  description:
    "Browse through our collection of photos showcasing the natural beauty of Amthane Valley Farm — from swimming pools and lush plantations to celebrations and serene landscapes. See what makes our private Goan farm special.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen overflow-x-hidden bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-forest via-forest-soft to-forest pt-28 pb-20 md:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
          </div>
          
          <div className="relative mx-auto max-w-4xl flex flex-col items-center px-4 text-center md:px-8">
            <div className="inline-flex items-center gap-2 mb-2 rounded-full bg-[var(--coconut-brown)]/40 shadow-[0_4px_10px_rgba(0,0,0,0.2)] px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              <Camera className="h-4 w-4 text-[var(--coconut-brown)]" />
              Photo Gallery
            </div>
            
            <h1 className="mt-6 pb-2 text-4xl font-bold text-[var(--forest-green)] md:text-6xl">
              See Amthane Valley Come to Life
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--coconut-brown)] md:text-xl">
              Explore our collection of photos capturing the natural beauty, serene landscapes, and joyful moments at Goa&apos;s most cherished private farm retreat.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <GallerySection />

        {/* Additional Info */}
        <section className="my-24 bg-cream-soft/60">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
            <div className="flex flex-col items-center justify-center rounded-[2.5rem] bg-white p-10 shadow-soft">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                <ImageIcon className="h-8 w-8" />
              </div>
              <h2 className="mt-6 pb-2 text-2xl font-semibold text-forest md:text-3xl">
                Want Professional Photos of Your Event?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-forest-muted">
                Amthane Valley&apos;s natural beauty makes it a photographer&apos;s paradise. Many guests bring professional photographers for their events. We can also recommend talented local photographers familiar with our farm.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" variant="outline">
                  <Link href="/#contact">
                    Plan Your Event
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-[var(--coconut-brown-soft)]/40">
                  <Link href="/experiences">
                    Photography Experiences
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-white/90 p-10 flex flex-col items-center text-center shadow-soft md:p-12">
          <div className="flex flex-col items-center justify-center mx-auto max-w-4xl px-4 text-center md:px-8">
            <h2 className="text-3xl font-semibold text-forest md:text-4xl mb-3">
              Ready to Create Your Own Memories?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-forest-muted">
              These photos are just a glimpse. Book your day at Amthane Valley and create memories that will fill your own photo albums for years to come.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="outline" className="bg-[var(--coconut-brown-soft)]/40">
                <Link href="/#contact">
                  Check Availability
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
