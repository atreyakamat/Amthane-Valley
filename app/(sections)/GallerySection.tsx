"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "../../components/ui/section-heading";
import { images, allImages } from "../../lib/images";
import { useState } from "react";

const galleryImages = [
  { src: images.coconutTrees, alt: "Coconut grove beside Amthane Valley", span: "col-span-2 row-span-2" },
  { src: images.pool, alt: "Pool with palms", span: "col-span-1 row-span-1" },
  { src: images.huts, alt: "Grass huts with seating", span: "col-span-1 row-span-1" },
  { src: images.rooms, alt: "Comfortable rooms", span: "col-span-1 row-span-2" },
  { src: images.damView, alt: "View of Amthane Dam", span: "col-span-2 row-span-1" },
  { src: images.events.birthday, alt: "Birthday celebration", span: "col-span-1 row-span-1" },
  { src: images.events.familyDay, alt: "Family gathering", span: "col-span-1 row-span-1" },
  { src: images.events.prewedding, alt: "Pre-wedding shoot", span: "col-span-2 row-span-1" },
  { src: images.misc.allen, alt: "Guest at the farm", span: "col-span-1 row-span-1" },
  { src: images.misc.bernard, alt: "Farm landscape", span: "col-span-1 row-span-2" },
  { src: images.misc.chelsea, alt: "Poolside event", span: "col-span-1 row-span-1" },
  { src: images.misc.datingscout, alt: "Hut celebration", span: "col-span-2 row-span-1" },
  { src: images.misc.fabio, alt: "Events at dusk", span: "col-span-1 row-span-1" },
  { src: images.misc.pexels, alt: "Resort vibes", span: "col-span-1 row-span-1" },
  { src: images.misc.sara, alt: "Couple at the farm", span: "col-span-1 row-span-2" },
  { src: images.misc.sasha, alt: "Nature trail", span: "col-span-1 row-span-1" },
  { src: images.misc.yuliya, alt: "Candid moments", span: "col-span-2 row-span-1" },
  // Fallback: include any remaining images dynamically
  ...allImages
    .filter((src: string) => !([
      images.coconutTrees,
      images.pool,
      images.huts,
      images.rooms,
      images.damView,
      images.events.birthday,
      images.events.familyDay,
      images.events.prewedding,
      images.misc.allen,
      images.misc.bernard,
      images.misc.chelsea,
      images.misc.datingscout,
      images.misc.fabio,
      images.misc.pexels,
      images.misc.sara,
      images.misc.sasha,
      images.misc.yuliya,
    ] as string[]).includes(src))
    .map((src) => ({ src, alt: "Amthane Valley", span: "col-span-1 row-span-1" })),
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-spacing">
      <div className="mx-auto max-w-7xl space-y-12 px-4 md:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Glances into lush weekends at Amthane Valley"
          description="Explore our bento gallery — curated moments across seasons, vibrant celebrations, and pockets of stillness beside the dam."
          align="center"
        />
        
        {/* Bento Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={`gallery-${index}-${image.src}`}
              className={`${image.span} group relative overflow-hidden rounded-2xl cursor-pointer bg-cream-soft/80 shadow-soft hover:shadow-leaf transition-all duration-300`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(min-width: 1024px) 400px, (min-width: 768px) 300px, 200px"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full aspect-video"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
                unoptimized
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur"
              >
                ✕
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
