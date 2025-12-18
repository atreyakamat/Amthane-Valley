"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "../../components/ui/section-heading";
import { Button } from "../../components/ui/button";
import { images } from "../../lib/images";
import { useRef, useState } from "react";
import { Camera } from "lucide-react";
import SimpleMarquee from "../../components/fancy/blocks/simple-marquee";

const galleryImages = [
  { src: images.pool1, alt: "Swimming Pool" },
  { src: images.lushGreen, alt: "Lush Greenery" },
  { src: images.poolAesthetic1, alt: "Pool with Trees" },
  { src: images.huts, alt: "Huts" },
  { src: images.entranceOutside, alt: "Entrance" },
  { src: images.waterLeft, alt: "Water Body" },
  { src: images.ground, alt: "Open Grounds" },
  { src: images.pool2, alt: "Pool View" },
  { src: images.vegetation, alt: "Vegetation" },
  { src: images.slidesWater, alt: "Slides" },
];

const MarqueeCard = ({
  image,
  index,
  onClick,
}: {
  image: any;
  index: number;
  onClick: (i: number) => void;
}) => (
  <motion.div
    className="relative h-32 w-48 sm:h-40 sm:w-60 mx-3 rounded-2xl overflow-hidden cursor-pointer group"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    onClick={() => onClick(index)}
  >
    <Image
      src={image.src}
      alt={image.alt}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
      unoptimized
    />
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition">
      <p className="absolute bottom-2 left-2 text-white text-xs">
        {image.alt}
      </p>
    </div>
  </motion.div>
);

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const container = useRef<HTMLDivElement>(null);

  const third = Math.ceil(galleryImages.length / 3);
  const first = galleryImages.slice(0, third);
  const second = galleryImages.slice(third, third * 2);
  const last = galleryImages.slice(third * 2);

  return (
    <section id="gallery" className="mb-15">
      <div className="mx-auto max-w-7xl space-y-12 px-4 md:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Glances into lush weekends at Amthane Valley"
          description="Motion-first, grid-free, and mildly irresponsible scrolling."
          align="center"
        />

        <div
          ref={container}
          className="relative flex flex-col space-y-4 overflow-hidden"
        >
          <SimpleMarquee direction="left" baseVelocity={8} repeat={4}>
            {first.map((img, i) => (
              <MarqueeCard
                key={i}
                image={img}
                index={i}
                onClick={setSelectedImage}
              />
            ))}
          </SimpleMarquee>

          <SimpleMarquee direction="right" baseVelocity={8} repeat={4}>
            {second.map((img, i) => (
              <MarqueeCard
                key={i}
                image={img}
                index={i + first.length}
                onClick={setSelectedImage}
              />
            ))}
          </SimpleMarquee>

          <SimpleMarquee direction="left" baseVelocity={8} repeat={4}>
            {last.map((img, i) => (
              <MarqueeCard
                key={i}
                image={img}
                index={i + first.length + second.length}
                onClick={setSelectedImage}
              />
            ))}
          </SimpleMarquee>
        </div>

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

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="text-[var(--forest-soft)]">
            <Link href="/gallery">
              <Camera className="mr-2 h-4 w-4" />
              View Full Gallery
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
