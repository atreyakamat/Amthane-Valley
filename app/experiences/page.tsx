import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../(sections)/Footer";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import { Button } from "../../components/ui/button";
import { LeafIcon } from "../../components/ui/leaf-icon";
import { images } from "../../lib/images";
import { 
  TreePalm,
  Camera,
  Users,
  Heart,
  Sparkles,
  Sun,
  Moon,
  Wind,
  Droplets,
  Bird,
  Flower2,
  Palmtree,
  PartyPopper
} from "lucide-react";

export const metadata: Metadata = {
  title: "Experiences & Activities | Amthane Valley Farm",
  description:
    "Discover unique experiences at Amthane Valley — from nature walks through coconut plantations to poolside celebrations, monsoon swims, corporate retreats, and memorable milestones. Create unforgettable moments in Goa's countryside.",
};

const experiences = [
  {
    id: "nature-immersion",
    icon: TreePalm,
    name: "Nature Immersion",
    tagline: "Reconnect with the Natural World",
    description: "Step away from screens and into serenity. Walk through our coconut, arecanut, and cashew plantations. Listen to rustling leaves, chirping birds, and the gentle breeze. This is what Susegad feels like.",
    image: images.lushGreen,
    activities: [
      {
        name: "Plantation Walks",
        detail: "Stroll through acres of coconut and arecanut groves",
        icon: Palmtree
      },
      {
        name: "Bird Watching",
        detail: "Spot local and migratory birds in their natural habitat",
        icon: Bird
      },
      {
        name: "Flora Exploration",
        detail: "Discover tropical plants, flowers, and medicinal herbs",
        icon: Flower2
      },
      {
        name: "Sunset Views",
        detail: "Watch the sun set over the dam from peaceful viewpoints",
        icon: Sun
      }
    ],
    perfectFor: "Nature lovers, photographers, families with children, meditation retreats"
  },
  {
    id: "water-experiences",
    icon: Droplets,
    name: "Water Experiences",
    tagline: "Pools, Swims & Splashing Fun",
    description: "Whether it's our modern pool or the seasonal natural pool, water is central to the Amthane Valley experience. Cool off, splash around, or simply float your worries away.",
    image: images.pool1,
    activities: [
      {
        name: "Pool Parties",
        detail: "Host lively poolside celebrations with music and fun",
        icon: PartyPopper
      },
      {
        name: "Family Pool Time",
        detail: "Safe swimming for all ages with shallow and deep ends",
        icon: Users
      },
      {
        name: "Monsoon Natural Pool",
        detail: "Unique natural swimming fed by dam water (seasonal)",
        icon: Wind
      },
      {
        name: "Pool Games",
        detail: "Volleyball, water games, and floating fun",
        icon: Sparkles
      }
    ],
    perfectFor: "Pool parties, family outings, summer celebrations, monsoon enthusiasts"
  },
  {
    id: "celebrations",
    icon: PartyPopper,
    name: "Celebrations & Milestones",
    tagline: "Create Memories That Last Forever",
    description: "Every celebration deserves a beautiful backdrop. From birthdays to weddings, anniversaries to reunions, Amthane Valley provides the perfect canvas for your special moments.",
    image: images.poolAesthetic2,
    activities: [
      {
        name: "Birthday Celebrations",
        detail: "Kids' parties, milestone birthdays, surprise celebrations",
        icon: Heart
      },
      {
        name: "Wedding Events",
        detail: "Ceremonies, receptions, pre-wedding shoots, mehndi",
        icon: Sparkles
      },
      {
        name: "Anniversaries",
        detail: "Romantic settings for couples, family milestone celebrations",
        icon: Heart
      },
      {
        name: "Family Reunions",
        detail: "Bring the whole family together for a day of bonding",
        icon: Users
      }
    ],
    perfectFor: "Birthdays, weddings, anniversaries, engagement parties, family gatherings"
  },
  {
    id: "corporate",
    icon: Users,
    name: "Corporate Experiences",
    tagline: "Team Building in Nature",
    description: "Take your team out of the office and into nature. Our private farm setting provides the perfect environment for team building, strategy sessions, and corporate retreats.",
    image: images.entranceOutside,
    activities: [
      {
        name: "Team Building",
        detail: "Outdoor activities, games, and bonding exercises",
        icon: Users
      },
      {
        name: "Strategy Sessions",
        detail: "Peaceful environment for brainstorming and planning",
        icon: Sparkles
      },
      {
        name: "Corporate Retreats",
        detail: "Multi-day stays with meeting spaces and accommodations",
        icon: TreePalm
      },
      {
        name: "Reward Outings",
        detail: "Thank your team with a relaxing day in nature",
        icon: Heart
      }
    ],
    perfectFor: "Startups, companies, team offsites, leadership retreats, quarterly celebrations"
  },
  {
    id: "photography",
    icon: Camera,
    name: "Photography & Content Creation",
    tagline: "Picture-Perfect Natural Settings",
    description: "Photographers and content creators love Amthane Valley. From golden hour shots to candid moments, every corner offers Instagram-worthy backdrops.",
    image: images.vegetation,
    activities: [
      {
        name: "Pre-Wedding Shoots",
        detail: "Romantic settings with nature, pools, and rustic charm",
        icon: Heart
      },
      {
        name: "Portrait Sessions",
        detail: "Family photos, professional portraits, lifestyle shoots",
        icon: Camera
      },
      {
        name: "Nature Photography",
        detail: "Capture flora, fauna, landscapes, and golden hour magic",
        icon: Sun
      },
      {
        name: "Content Creation",
        detail: "Video shoots, reels, vlogs in a private natural setting",
        icon: Sparkles
      }
    ],
    perfectFor: "Photographers, influencers, couples, families, content creators"
  },
  {
    id: "relaxation",
    icon: Moon,
    name: "Pure Relaxation",
    tagline: "Do Nothing, Perfectly",
    description: "Sometimes the best experience is no agenda at all. Lay in a hammock, read a book under the palms, take an unhurried nap. This is the essence of Susegad.",
    image: images.walkway,
    activities: [
      {
        name: "Lazy Days",
        detail: "No schedule, no rush — just peaceful existence",
        icon: Moon
      },
      {
        name: "Reading Retreat",
        detail: "Quiet corners perfect for getting lost in a book",
        icon: TreePalm
      },
      {
        name: "Meditation",
        detail: "Peaceful natural spaces ideal for mindfulness",
        icon: Wind
      },
      {
        name: "Stargazing",
        detail: "Clear night skies away from city lights",
        icon: Moon
      }
    ],
    perfectFor: "Stressed professionals, book lovers, meditation groups, anyone needing a break"
  }
];

const seasonalExperiences = [
  {
    season: "Monsoon (June - September)",
    icon: Droplets,
    highlights: [
      "Natural pool at its best, fed by fresh dam water",
      "Lush green landscapes and vibrant flora",
      "Cooler temperatures perfect for outdoor activities",
      "Petrichor and the magic of tropical rains",
      "Fewer crowds, more peaceful experiences"
    ],
    image: images.poolAesthetic2
  },
  {
    season: "Post-Monsoon (October - November)",
    icon: Wind,
    highlights: [
      "Perfect weather — cool and pleasant",
      "Natural pool still available in early months",
      "Festival season celebrations (Diwali, etc.)",
      "Clearest skies for photography",
      "Ideal for outdoor events and gatherings"
    ],
    image: images.walkway
  },
  {
    season: "Winter (December - February)",
    icon: Sun,
    highlights: [
      "Pleasant temperatures, low humidity",
      "Peak wedding and celebration season",
      "Comfortable for all outdoor activities",
      "Modern pool in prime condition",
      "Extended outdoor hours"
    ],
    image: images.pool1
  },
  {
    season: "Summer (March - May)",
    icon: Sun,
    highlights: [
      "Modern swimming pool most refreshing",
      "Longer daylight hours for activities",
      "Mango season in surrounding areas",
      "Perfect for water-based celebrations",
      "Early morning and evening events ideal"
    ],
    image: images.pool3
  }
];

const testimonials = [
  {
    quote: "We hosted our daughter's 10th birthday here and it was magical. The kids played in the pool all day while adults relaxed in the shade. Truly a perfect day!",
    author: "Priya & Rajesh",
    event: "Birthday Celebration"
  },
  {
    quote: "As a photographer, I'm always looking for unique locations. Amthane Valley delivered beyond expectations. The natural light, the greenery, the rustic charm — everything clicked!",
    author: "Arjun Mehta",
    event: "Pre-Wedding Shoot"
  },
  {
    quote: "Our team retreat here was exactly what we needed. Away from distractions, surrounded by nature, we bonded like never before. The exclusive farm setting made all the difference.",
    author: "Tech Startup Founder",
    event: "Corporate Retreat"
  }
];

export default function ExperiencesPage() {
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
          
          <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Experiences & Activities
            </div>
            
            <h1 className="mt-6 text-4xl font-bold text-white md:text-6xl">
              Discover Your Susegad at Amthane Valley
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              From adventurous nature walks to peaceful poolside relaxation, from grand celebrations to intimate moments — explore the countless ways to experience true Goan Susegad at our private farm.
            </p>
          </div>
        </section>

        {/* Main Experiences */}
        <section className="section-spacing">
          <div className="mx-auto max-w-6xl space-y-20 px-4 md:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4">
                <LeafIcon className="h-8 w-8 text-forest" />
                <h2 className="text-3xl font-semibold text-forest md:text-4xl">
                  Six Ways to Experience Amthane Valley
                </h2>
                <LeafIcon className="h-8 w-8 rotate-180 text-forest" />
              </div>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-forest-muted">
                Each visit can be unique — choose your experience or combine them all
              </p>
            </div>

            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`grid gap-8 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={`relative overflow-hidden rounded-[2.5rem] shadow-leaf ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Image
                    src={exp.image}
                    alt={exp.name}
                    width={600}
                    height={700}
                    className="h-full w-full object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-forest/50 via-forest/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="rounded-2xl bg-white/90 p-4 backdrop-blur-sm">
                      <p className="text-xs font-semibold uppercase tracking-wider text-forest-soft">Perfect For</p>
                      <p className="mt-1 text-sm text-forest-muted">{exp.perfectFor}</p>
                    </div>
                  </div>
                </div>

                <div className={`flex flex-col justify-center space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-forest/5 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-forest-soft">
                    <exp.icon className="h-4 w-4" />
                    Experience {index + 1}
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-semibold text-forest">{exp.name}</h3>
                    <p className="mt-2 text-lg font-medium text-forest-soft">{exp.tagline}</p>
                  </div>
                  
                  <p className="text-forest-muted">{exp.description}</p>

                  <div className="space-y-4">
                    {exp.activities.map((activity) => (
                      <div key={activity.name} className="flex items-start gap-4 rounded-xl border border-forest/10 bg-white p-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">
                          <activity.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-forest">{activity.name}</p>
                          <p className="mt-1 text-sm text-forest-muted">{activity.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seasonal Experiences */}
        <section className="section-spacing bg-cream-soft/60">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-forest md:text-4xl">
                Experience Every Season
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-forest-muted">
                Amthane Valley transforms with the seasons, each offering unique beauty and experiences
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {seasonalExperiences.map((season) => (
                <div key={season.season} className="overflow-hidden rounded-[2.5rem] bg-white shadow-soft">
                  <div className="relative h-48">
                    <Image
                      src={season.image}
                      alt={season.season}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 backdrop-blur-sm">
                      <season.icon className="h-4 w-4 text-forest" />
                      <span className="font-semibold text-forest">{season.season}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="mb-4 font-semibold text-forest">Season Highlights:</h4>
                    <ul className="space-y-2">
                      {season.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-forest-muted">
                          <Sparkles className="mt-1 h-4 w-4 flex-shrink-0 text-forest-soft" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-spacing">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-forest md:text-4xl">
                Guest Experiences
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-forest-muted">
                Hear from those who&apos;ve found their Susegad at Amthane Valley
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="rounded-[2rem] border border-forest/10 bg-white p-6 shadow-soft">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} className="h-4 w-4 fill-forest text-forest" />
                    ))}
                  </div>
                  <p className="text-sm italic text-forest-muted">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="mt-4 border-t border-forest/10 pt-4">
                    <p className="font-semibold text-forest">{testimonial.author}</p>
                    <p className="text-xs text-forest-muted">{testimonial.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-gradient-to-br from-forest to-forest-soft">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              <Heart className="h-4 w-4" />
              Create Your Experience
            </div>
            
            <h2 className="mt-6 text-3xl font-semibold text-white md:text-4xl">
              Ready to Find Your Susegad?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Whether you&apos;re seeking adventure, celebration, or pure relaxation — Amthane Valley welcomes you to create your perfect experience.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="bg-white text-forest hover:bg-cream">
                <Link href="/#contact">
                  Plan Your Visit
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/facilities">
                  Explore Facilities
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
