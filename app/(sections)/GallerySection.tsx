"use client";

import { GalleryLightbox, GalleryImageTile } from "@/components/ui/gallery-lightbox";
import { SectionHeading } from "@/components/ui/section-heading";

const galleryImages = [
  {
    src: "/images/coconut-trees.jpg",
    alt: "Coconut grove beside Amthane Valley",
    caption: "Coconut groves that sway with every Goan breeze",
  },
  {
    src: "/images/pool.jpg",
    alt: "Pool with palms",
    caption: "Aqua reflections for sun-kissed afternoons",
  },
  {
    src: "/images/huts.jpg",
    alt: "Grass huts with seating",
    caption: "Grass huts staged for gatherings",
  },
  {
    src: "/images/rooms.jpg",
    alt: "Comfortable rooms",
    caption: "Cozy rooms with wooden warmth",
  },
  {
    src: "/images/dam-view.jpg",
    alt: "View of Amthane Dam",
    caption: "Sweetwater views of the Amthane Dam",
  },
  {
    src: "/images/events/birthday.jpg",
    alt: "Birthday celebration",
    caption: "Birthday brunch moments",
  },
  {
    src: "/images/events/family-day.jpg",
    alt: "Family gathering",
    caption: "Family day celebrations on the lawn",
  },
  {
    src: "/images/events/prewedding.jpg",
    alt: "Pre-wedding shoot",
    caption: "Pre-wedding shoots bathed in golden light",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="section-spacing">
  <div className="mx-auto max-w-6xl space-y-12 px-4 md:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Glances into lush weekends at Amthane Valley"
          description="Tap into moments captured across seasons — curated decor, vibrant celebrations, and pockets of stillness beside the dam."
          align="center"
        />
        <GalleryLightbox images={galleryImages}>
          {(open) => (
            <div className="columns-1 gap-4 space-y-4 md:columns-2">
              {galleryImages.map((image, index) => (
                <div key={image.src} className="break-inside-avoid">
                  <GalleryImageTile onClick={() => open(index)} image={image} />
                </div>
              ))}
            </div>
          )}
        </GalleryLightbox>
      </div>
    </section>
  );
}
