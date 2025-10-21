import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LeafIcon } from "../../components/ui/leaf-icon";
import { Button } from "../../components/ui/button";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../(sections)/Footer";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import { images } from "../../lib/images";
import { TreePalm, Heart, Users, MapPin, Sparkles, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story | Amthane Valley Farm",
  description:
    "Discover how Amthane Valley Farm began as a family retreat and became a private Goan haven for true Susegad.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-forest via-forest-soft to-forest py-20 md:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
          </div>
          
          <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              <Heart className="h-4 w-4" />
              Our Story
            </div>
            
            <h1 className="mt-6 text-4xl font-bold text-white md:text-6xl">
              The Journey to Susegad
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              From a family&apos;s dream of finding peace to becoming Goa&apos;s most cherished private farm retreat — this is the story of Amthane Valley.
            </p>
          </div>
        </section>

        {/* Main Story Section */}
        <section className="section-spacing">
          <div className="mx-auto max-w-5xl space-y-12 px-4 md:px-8">
            {/* Introduction */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4">
                <LeafIcon className="h-8 w-8 text-forest" />
                <h2 className="text-3xl font-semibold text-forest md:text-4xl">
                  A Space Designed for Leisure, Celebration & Connection
                </h2>
                <LeafIcon className="h-8 w-8 rotate-180 text-forest" />
              </div>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-forest-muted">
                Amthane Valley is more than just a place; it&apos;s a feeling. Every corner here carries stories of laughter, the melody of nature, and a harmony you can only find in the Goan countryside.
              </p>
            </div>

            {/* The Beginning */}
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-leaf">
                <Image
                  src={images.walkway}
                  alt="Amthane Valley Farm walkway"
                  width={600}
                  height={700}
                  className="h-full w-full object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-forest/40 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-forest/5 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-forest-soft">
                  <TreePalm className="h-4 w-4" />
                  The Beginning
                </div>
                
                <h3 className="text-3xl font-semibold text-forest">
                  In Search of True Goan Susegad
                </h3>
                
                <div className="space-y-4 text-forest-muted">
                  <p>
                    Our journey began with a simple desire: to find a piece of land where our family could experience true Goan Susegad. A place to unwind, to celebrate without a schedule, and to reconnect with nature. We found it here, by the tranquil waters of the Amthane Dam, surrounded by the rustling of palm leaves.
                  </p>
                  <p>
                    The moment we stepped onto this land, we knew it was special. The coconut groves swayed gently in the breeze, the sound of water from the nearby dam created a natural symphony, and the air carried a sense of peace that had become rare in modern life.
                  </p>
                  <p>
                    What started as weekend getaways for our family soon became the highlight of our lives. Every visit brought new memories — children playing under the palms, elders sharing stories under the shade of ancient trees, and meals that stretched into the evening as nobody wanted to leave.
                  </p>
                </div>
              </div>
            </div>

            {/* The Transformation */}
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="order-2 flex flex-col justify-center space-y-6 lg:order-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-forest/5 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-forest-soft">
                  <Sparkles className="h-4 w-4" />
                  The Transformation
                </div>
                
                <h3 className="text-3xl font-semibold text-forest">
                  Sharing the Magic
                </h3>
                
                <div className="space-y-4 text-forest-muted">
                  <p>
                    Word spread among friends and family. Soon, we were hosting gatherings, celebrations, and reunions. Each event brought its own energy, but the essence remained the same — people came stressed and left rejuvenated, came as individuals and left as a connected group, came looking for entertainment and found something deeper: Susegad.
                  </p>
                  <p>
                    We realized that what we had created was too beautiful to keep to ourselves. The joy on people&apos;s faces, the laughter echoing through the groves, the bonds strengthened over poolside conversations — this was meant to be shared with more people seeking authentic Goan experiences.
                  </p>
                  <p>
                    We carefully added modern amenities while preserving the natural beauty. A modern swimming pool was built to complement the seasonal natural pool. Comfortable accommodations were created for overnight stays. Spaces were designed for various group sizes and occasions. But we never lost sight of what made Amthane Valley special — its soul, its Susegad.
                  </p>
                </div>
              </div>

              <div className="order-1 relative overflow-hidden rounded-[2.5rem] shadow-leaf lg:order-2">
                <Image
                  src={images.poolAesthetic1}
                  alt="Modern pool at Amthane Valley"
                  width={600}
                  height={700}
                  className="h-full w-full object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-forest/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Our Philosophy */}
            <div className="rounded-[2.5rem] bg-gradient-to-br from-forest to-forest-soft p-10 text-white shadow-leaf md:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] backdrop-blur-sm">
                  <Award className="h-4 w-4" />
                  Our Philosophy
                </div>
                
                <h3 className="mt-6 text-3xl font-semibold md:text-4xl">
                  What We Believe
                </h3>
                
                <div className="mt-8 space-y-6 text-lg text-white/90">
                  <p>
                    We are not a hotel. We are not a resort. We are your private farm for the day — a canvas for your celebrations, a sanctuary for your gatherings, and a retreat for your soul.
                  </p>
                  <p>
                    We believe that true luxury isn&apos;t about marble floors or crystal chandeliers. It&apos;s about having the entire farm to yourself. It&apos;s about time moving at your pace. It&apos;s about authentic experiences over manufactured entertainment. It&apos;s about connection over consumption.
                  </p>
                  <p>
                    Whether you&apos;re planning a lively poolside party, an intimate family reunion, a corporate retreat, or a milestone celebration, we provide the space and services, but you create the memories. That&apos;s the Amthane Valley way.
                  </p>
                </div>
              </div>
            </div>

            {/* What Makes Us Special */}
            <div>
              <div className="text-center">
                <h3 className="text-3xl font-semibold text-forest md:text-4xl">
                  What Makes Amthane Valley Special
                </h3>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-forest-muted">
                  Beyond the pools and plantations, these are the elements that define the Amthane Valley experience.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-3xl border border-forest/10 bg-white p-6 shadow-soft">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                    <Users className="h-6 w-6" />
                  </div>
                  <h4 className="mt-4 text-xl font-semibold text-forest">True Exclusivity</h4>
                  <p className="mt-2 text-sm text-forest-muted">
                    When you book Amthane Valley, you book the entire farm. No other guests. No shared spaces. Just you, your group, and acres of nature.
                  </p>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-white p-6 shadow-soft">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                    <TreePalm className="h-6 w-6" />
                  </div>
                  <h4 className="mt-4 text-xl font-semibold text-forest">Natural Beauty</h4>
                  <p className="mt-2 text-sm text-forest-muted">
                    Coconut, arecanut, and cashew plantations. A seasonal natural pool fed by Amthane Dam. Pathways lined with tropical flora. Nature is our design.
                  </p>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-white p-6 shadow-soft">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h4 className="mt-4 text-xl font-semibold text-forest">Perfect Location</h4>
                  <p className="mt-2 text-sm text-forest-muted">
                    Secluded yet accessible. A short scenic drive from Mapusa in North Goa. Far enough from the crowds, close enough for convenience.
                  </p>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-white p-6 shadow-soft">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h4 className="mt-4 text-xl font-semibold text-forest">Flexible Spaces</h4>
                  <p className="mt-2 text-sm text-forest-muted">
                    From intimate gatherings of 20 to grand celebrations of 120. Poolside parties, lawn events, hut gatherings — our spaces adapt to your vision.
                  </p>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-white p-6 shadow-soft">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h4 className="mt-4 text-xl font-semibold text-forest">Personalized Service</h4>
                  <p className="mt-2 text-sm text-forest-muted">
                    We treat every booking like family. Customizable catering, flexible timings, decoration support — we adapt to your needs, not the other way around.
                  </p>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-white p-6 shadow-soft">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                    <Award className="h-6 w-6" />
                  </div>
                  <h4 className="mt-4 text-xl font-semibold text-forest">The Goan Way</h4>
                  <p className="mt-2 text-sm text-forest-muted">
                    Unhurried. Authentic. Joyful. We embody the true spirit of Goan Susegad, where time moves differently and what matters most is connection.
                  </p>
                </div>
              </div>
            </div>

            {/* Closing Message */}
            <div className="rounded-[2.5rem] bg-white/90 p-10 text-center shadow-soft md:p-12">
              <h3 className="text-3xl font-semibold text-forest md:text-4xl">
                Today, We Invite You
              </h3>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-forest-muted">
                What started as our private haven has become a gift we&apos;re proud to share. We&apos;ve opened our gates to you with the same warmth and spirit that made this place special for our family. Amthane Valley is an invitation to experience the Goan way of life — a life of leisure, celebration, togetherness, and unhurried joy.
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-forest-muted">
                Whether you&apos;re celebrating a milestone, reconnecting with loved ones, or simply seeking a break from the ordinary, we welcome you to find your Susegad here.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/#contact">
                    Plan Your Visit
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/stays">
                    View Our Stays
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
