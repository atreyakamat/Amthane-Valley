"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "../../components/ui/section-heading";
import { images } from "../../lib/images";
import { useState } from "react";

const galleryImages = [
  { src: images.whatsapp1, alt: "Amthane Valley Farm - Scenic view", span: "col-span-2 row-span-2" },
  { src: images.whatsapp2, alt: "Amthane Valley Farm - Valley landscape", span: "col-span-1 row-span-1" },
  { src: images.whatsapp3, alt: "Amthane Valley Farm - Nature", span: "col-span-1 row-span-2" },
  { src: images.whatsapp4, alt: "Amthane Valley Farm - Greenery", span: "col-span-1 row-span-1" },
  { src: images.whatsapp5, alt: "Amthane Valley Farm - Peaceful corner", span: "col-span-2 row-span-1" },
  { src: images.whatsapp6, alt: "Amthane Valley Farm - Dam view", span: "col-span-1 row-span-1" },
  { src: images.whatsapp7, alt: "Amthane Valley Farm - Experience", span: "col-span-1 row-span-1" },
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
