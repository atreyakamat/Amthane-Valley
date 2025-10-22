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
        <section className="relative overflow-hidden bg-gradient-to-br from-forest via-forest-soft to-forest py-20 md:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
          </div>
          
          <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              <Camera className="h-4 w-4" />
              Photo Gallery
            </div>
            
            <h1 className="mt-6 text-4xl font-bold text-white md:text-6xl">
              See Amthane Valley Come to Life
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Explore our collection of photos capturing the natural beauty, serene landscapes, and joyful moments at Goa&apos;s most cherished private farm retreat.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <GallerySection />

        {/* Additional Info */}
        <section className="section-spacing bg-cream-soft/60">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
            <div className="rounded-[2.5rem] bg-white p-10 shadow-soft">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                <ImageIcon className="h-8 w-8" />
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-forest md:text-3xl">
                Want Professional Photos of Your Event?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-forest-muted">
                Amthane Valley&apos;s natural beauty makes it a photographer&apos;s paradise. Many guests bring professional photographers for their events. We can also recommend talented local photographers familiar with our farm.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/#contact">
                    Plan Your Event
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/experiences">
                    Photography Experiences
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-spacing bg-gradient-to-br from-forest to-forest-soft">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Ready to Create Your Own Memories?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              These photos are just a glimpse. Book your day at Amthane Valley and create memories that will fill your own photo albums for years to come.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary" className="bg-white text-black hover:bg-cream">
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
