"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

interface GalleryLightboxProps {
  images: GalleryImage[];
  children: (open: (index: number) => void) => React.ReactNode;
}

export function GalleryLightbox({ images, children }: GalleryLightboxProps) {
  const [current, setCurrent] = useState<number | null>(null);

  const open = useCallback((index: number) => {
    setCurrent(index);
    document.body.style.overflow = "hidden";
  }, []);

  const close = useCallback(() => {
    setCurrent(null);
    document.body.style.overflow = "";
  }, []);

  const showPrev = useCallback(() => {
    setCurrent((prev) => (prev === null ? prev : (prev - 1 + images.length) % images.length));
  }, [images.length]);

  const showNext = useCallback(() => {
    setCurrent((prev) => (prev === null ? prev : (prev + 1) % images.length));
  }, [images.length]);

  return (
    <>
      {children(open)}
      <AnimatePresence>
        {current !== null ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image viewer"
          >
            <motion.div
              className="relative mx-auto flex w-full max-w-5xl flex-col gap-4 rounded-3xl bg-background/90 p-6 shadow-2xl"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={close}
                className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
                aria-label="Close gallery"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black/40">
                <Image
                  src={images[current].src}
                  alt={images[current].alt}
                  fill
                  sizes="(min-width: 1280px) 848px, 80vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-lg font-medium text-forest">
                    {images[current].caption ?? images[current].alt}
                  </p>
                  <p className="text-sm text-forest-muted">
                    {current + 1} / {images.length}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="min-w-[110px]"
                    onClick={showPrev}
                    aria-label="View previous image"
                  >
                    Previous
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    className="min-w-[110px]"
                    onClick={showNext}
                    aria-label="View next image"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export function GalleryImageTile({
  onClick,
  image,
  className,
}: {
  onClick: () => void;
  image: GalleryImage;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/40 bg-cream-soft/80 shadow-soft transition hover:-translate-y-1 hover:shadow-leaf focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua",
        className
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 320px, 45vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      {image.caption ? (
        <span className="absolute inset-x-3 bottom-3 rounded-full bg-black/45 px-4 py-1 text-sm text-white shadow-md backdrop-blur-sm">
          {image.caption}
        </span>
      ) : null}
    </button>
  );
}
