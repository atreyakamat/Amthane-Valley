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
  Waves, 
  Droplets, 
  TreePalm, 
  Utensils, 
  Music, 
  Sparkles, 
  Check,
  Users,
  Clock,
  Star,
  Heart
} from "lucide-react";

export const metadata: Metadata = {
  title: "Facilities & Amenities | Amthane Valley Farm",
  description:
    "Explore our modern swimming pool, natural seasonal pool, rustic huts, lush lawns, professional catering, event spaces, and custom decoration services. Everything you need for the perfect celebration in Goa.",
};

const mainFacilities = [
  {
    id: "modern-pool",
    icon: Waves,
    name: "The Modern Swimming Pool",
    tagline: "Where Celebration Meets Relaxation",
    description: "Our crown jewel — a pristine, modern swimming pool surrounded by tropical greenery. Perfect for poolside parties, family fun, or simply floating away your worries.",
    image: images.pool1,
    features: [
      "Crystal-clear filtered water, maintained daily",
      "Spacious pool deck with loungers",
      "Shallow and deep ends for all ages",
      "Surrounded by coconut palms and greenery",
      "Perfect for pool parties and celebrations",
      "Available all year round"
    ],
    capacity: "Up to 50 swimmers comfortably",
    idealFor: "Birthday parties, corporate team building, family gatherings, pool parties"
  },
  {
    id: "natural-pool",
    icon: Droplets,
    name: "The Natural Seasonal Pool",
    tagline: "Nature's Gift During Monsoon",
    description: "A unique natural pool fed by the sweet waters of Amthane Dam. Available during and after the monsoon season, this is an experience unlike any other — swimming in nature's own creation.",
    image: images.poolAesthetic2,
    features: [
      "Fed by pristine dam water",
      "Natural rock formations",
      "Seasonal availability (monsoon & post-monsoon)",
      "Surrounded by lush monsoon vegetation",
      "Cool, refreshing natural water",
      "Eco-friendly swimming experience"
    ],
    capacity: "Smaller groups, nature lovers",
    idealFor: "Monsoon getaways, nature photography, peaceful retreats, eco-conscious groups"
  },
  {
    id: "huts-lawns",
    icon: TreePalm,
    name: "Rustic Huts & Sprawling Lawns",
    tagline: "Your Canvas for Celebration",
    description: "Open-air huts perfect for dining, relaxing, or gathering, surrounded by expansive lawns where your imagination sets the limits. Host lawn games, set up tents, arrange seating — these spaces adapt to your vision.",
    image: images.huts,
    features: [
      "Multiple covered hut areas",
      "Shade from natural palm canopy",
      "Open lawn spaces for games and activities",
      "Flexible seating arrangements",
      "Perfect for outdoor dining",
      "Natural ventilation and ambiance"
    ],
    capacity: "Up to 120 guests across multiple areas",
    idealFor: "Weddings, corporate retreats, lawn games, outdoor dining, family picnics"
  }
];

const services = [
  {
    id: "catering",
    icon: Utensils,
    name: "Professional Catering Services",
    tagline: "Goan Flavors & Custom Menus",
    description: "From authentic Goan seafood to North Indian vegetarian feasts, our catering partners create memorable culinary experiences. Every meal is customized to your preferences and dietary requirements.",
    image: images.pool2,
    offerings: [
      {
        name: "Traditional Goan Cuisine",
        details: "Fish curry rice, prawn balchão, chicken xacuti, bebinca, and more"
      },
      {
        name: "BBQ & Grills",
        details: "Poolside BBQ setups with meats, seafood, and vegetables"
      },
      {
        name: "Vegetarian Delights",
        details: "Complete vegetarian menus from various cuisines"
      },
      {
        name: "Breakfast Spreads",
        details: "Continental, Indian, or custom breakfast options"
      },
      {
        name: "Snacks & Starters",
        details: "Chaats, pakodas, kebabs, finger foods for parties"
      },
      {
        name: "Beverages",
        details: "Fresh juices, mocktails, tea/coffee setups"
      }
    ],
    customization: [
      "Customize menu to your preferences",
      "Accommodate dietary restrictions",
      "Flexible serving styles (buffet/plated)",
      "Professional service staff included",
      "Setup and cleanup handled"
    ]
  },
  {
    id: "events",
    icon: Music,
    name: "Event Spaces & Support",
    tagline: "From Intimate to Grand Celebrations",
    description: "Host birthdays, weddings, corporate events, anniversaries, or any celebration. Our flexible spaces and support services ensure your event is exactly as you envisioned.",
    image: images.poolAesthetic1,
    eventTypes: [
      "Birthday celebrations (kids & adults)",
      "Wedding ceremonies & receptions",
      "Corporate team building & retreats",
      "Anniversary celebrations",
      "Family reunions & gatherings",
      "Pre-wedding photoshoots",
      "Engagement parties",
      "Festival celebrations"
    ],
    included: [
      "Entire farm exclusively for your event",
      "Flexible timing arrangements",
      "Basic furniture and seating",
      "Electricity and water connections",
      "Parking space for guests",
      "Assistance with event planning"
    ]
  },
  {
    id: "decorations",
    icon: Sparkles,
    name: "Custom Decoration Services",
    tagline: "Transform the Space to Match Your Vision",
    description: "Work with our decoration partners to bring your theme to life. From elegant minimalism to grand celebrations, from traditional to contemporary — we help create the perfect ambiance.",
    image: images.pool3,
    decorOptions: [
      {
        theme: "Tropical Paradise",
        details: "Palm leaves, flowers, bamboo, natural elements"
      },
      {
        theme: "Elegant Minimalist",
        details: "Clean lines, subtle colors, sophisticated accents"
      },
      {
        theme: "Traditional Indian",
        details: "Marigold flowers, rangoli, traditional fabrics"
      },
      {
        theme: "Bohemian Chic",
        details: "Dreamcatchers, fairy lights, rustic elements"
      },
      {
        theme: "Pool Party Vibrant",
        details: "Balloons, colorful drapes, fun signage"
      },
      {
        theme: "Corporate Professional",
        details: "Branded elements, clean setup, elegant touches"
      }
    ],
    elements: [
      "Floral arrangements",
      "Lighting (fairy lights, uplighting)",
      "Fabric draping and canopies",
      "Table and seating decoration",
      "Photo booth setups",
      "Entrance arches and signage"
    ]
  }
];

const amenities = [
  {
    icon: Check,
    title: "Clean Washrooms",
    description: "Well-maintained, clean restroom facilities"
  },
  {
    icon: Check,
    title: "Parking Space",
    description: "Ample parking for cars and two-wheelers"
  },
  {
    icon: Check,
    title: "Electricity & Water",
    description: "Reliable power and water supply throughout"
  },
  {
    icon: Check,
    title: "Changing Rooms",
    description: "Private changing areas near the pool"
  },
  {
    icon: Check,
    title: "Shaded Areas",
    description: "Natural shade from palms and covered huts"
  },
  {
    icon: Check,
    title: "Music System",
    description: "Sound system available for events"
  }
];

export default function FacilitiesPage() {
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
              <Star className="h-4 w-4" />
              Facilities & Amenities
            </div>
            
            <h1 className="mt-6 text-4xl font-bold text-white md:text-6xl">
              Everything You Need for the Perfect Celebration
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              From modern swimming pools to rustic huts, professional catering to custom decorations — explore all the facilities and services that make Amthane Valley your ideal private farm retreat in Goa.
            </p>
          </div>
        </section>

        {/* Main Facilities */}
        <section className="section-spacing">
          <div className="mx-auto max-w-6xl space-y-16 px-4 md:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4">
                <LeafIcon className="h-8 w-8 text-forest" />
                <h2 className="text-3xl font-semibold text-forest md:text-4xl">
                  Our Signature Spaces
                </h2>
                <LeafIcon className="h-8 w-8 rotate-180 text-forest" />
              </div>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-forest-muted">
                Three unique spaces, each offering a different way to experience Amthane Valley
              </p>
            </div>

            {mainFacilities.map((facility, index) => (
              <div 
                key={facility.id}
                className={`grid gap-8 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={`relative overflow-hidden rounded-[2.5rem] shadow-leaf ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    width={600}
                    height={700}
                    className="h-full w-full object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-forest/40 via-transparent to-transparent" />
                  <div className="absolute bottom-6 right-6 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-forest backdrop-blur-sm">
                    <Users className="mr-2 inline h-4 w-4" />
                    {facility.capacity}
                  </div>
                </div>

                <div className={`flex flex-col justify-center space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-forest/5 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-forest-soft">
                    <facility.icon className="h-4 w-4" />
                    Facility {index + 1}
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-semibold text-forest">{facility.name}</h3>
                    <p className="mt-2 text-lg font-medium text-forest-soft">{facility.tagline}</p>
                  </div>
                  
                  <p className="text-forest-muted">{facility.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-forest">Features:</h4>
                    <ul className="space-y-2">
                      {facility.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-forest-muted">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-forest" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-forest/10 bg-forest/5 p-4">
                    <p className="text-sm font-semibold text-forest">Ideal For:</p>
                    <p className="mt-1 text-sm text-forest-muted">{facility.idealFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="section-spacing bg-cream-soft/60">
          <div className="mx-auto max-w-6xl space-y-16 px-4 md:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-forest md:text-4xl">
                Complete Event Services
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-forest-muted">
                Professional services to make your celebration effortless and memorable
              </p>
            </div>

            {services.map((service) => (
              <div key={service.id} className="rounded-[2.5rem] bg-white p-8 shadow-soft md:p-10">
                <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
                  <div>
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-forest">{service.name}</h3>
                    <p className="mt-2 text-lg font-medium text-forest-soft">{service.tagline}</p>
                    <p className="mt-4 text-forest-muted">{service.description}</p>
                    
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={400}
                      height={300}
                      className="mt-6 rounded-2xl object-cover shadow-soft"
                      unoptimized
                    />
                  </div>

                  <div className="space-y-6">
                    {service.offerings && (
                      <div>
                        <h4 className="mb-4 text-lg font-semibold text-forest">Menu Options:</h4>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {service.offerings.map((offering) => (
                            <div key={offering.name} className="rounded-xl border border-forest/10 bg-cream-soft/50 p-4">
                              <p className="font-semibold text-forest">{offering.name}</p>
                              <p className="mt-1 text-sm text-forest-muted">{offering.details}</p>
                            </div>
                          ))}
                        </div>
                        {service.customization && (
                          <div className="mt-4 rounded-xl bg-forest/5 p-4">
                            <p className="mb-2 text-sm font-semibold text-forest">Customization:</p>
                            <ul className="space-y-1">
                              {service.customization.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-forest-muted">
                                  <Check className="mt-0.5 h-3 w-3 flex-shrink-0 text-forest" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {service.eventTypes && (
                      <div>
                        <h4 className="mb-4 text-lg font-semibold text-forest">Perfect For:</h4>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {service.eventTypes.map((type) => (
                            <div key={type} className="flex items-center gap-2 text-sm text-forest-muted">
                              <Heart className="h-4 w-4 flex-shrink-0 text-forest-soft" />
                              {type}
                            </div>
                          ))}
                        </div>
                        {service.included && (
                          <div className="mt-4 rounded-xl bg-forest/5 p-4">
                            <p className="mb-2 text-sm font-semibold text-forest">Included:</p>
                            <ul className="grid gap-2 sm:grid-cols-2">
                              {service.included.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-forest-muted">
                                  <Check className="mt-0.5 h-3 w-3 flex-shrink-0 text-forest" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {service.decorOptions && (
                      <div>
                        <h4 className="mb-4 text-lg font-semibold text-forest">Popular Themes:</h4>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {service.decorOptions.map((option) => (
                            <div key={option.theme} className="rounded-xl border border-forest/10 bg-cream-soft/50 p-4">
                              <p className="font-semibold text-forest">{option.theme}</p>
                              <p className="mt-1 text-sm text-forest-muted">{option.details}</p>
                            </div>
                          ))}
                        </div>
                        {service.elements && (
                          <div className="mt-4 rounded-xl bg-forest/5 p-4">
                            <p className="mb-2 text-sm font-semibold text-forest">Decoration Elements:</p>
                            <div className="grid gap-2 sm:grid-cols-2">
                              {service.elements.map((element) => (
                                <div key={element} className="flex items-center gap-2 text-sm text-forest-muted">
                                  <Sparkles className="h-3 w-3 flex-shrink-0 text-forest-soft" />
                                  {element}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Amenities */}
        <section className="section-spacing">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-forest md:text-4xl">
                Essential Amenities
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-forest-muted">
                All the basics covered so you can focus on enjoying your time
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {amenities.map((amenity) => (
                <div key={amenity.title} className="rounded-2xl border border-forest/10 bg-white p-6 shadow-soft">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest">
                    <amenity.icon className="h-6 w-6" />
                  </div>
                  <h4 className="mt-4 font-semibold text-forest">{amenity.title}</h4>
                  <p className="mt-2 text-sm text-forest-muted">{amenity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-gradient-to-br from-forest to-forest-soft">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              <Clock className="h-4 w-4" />
              Ready to Book
            </div>
            
            <h2 className="mt-6 text-3xl font-semibold text-white md:text-4xl">
              Plan Your Perfect Day at Amthane Valley
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              With all these facilities and services at your disposal, your celebration is guaranteed to be unforgettable. Book the entire farm for your special occasion.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="bg-white text-black hover:bg-cream">
                <Link href="/#contact">
                  Check Availability
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/stays">
                  View Accommodations
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
