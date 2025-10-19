"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Users } from "lucide-react";
import { cn } from "../../lib/utils";

interface RoomGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomType: {
    readonly name: string;
    readonly capacity: string;
    readonly description: string;
    readonly images: readonly string[];
  };
}

export function RoomGalleryModal({ isOpen, onClose, roomType }: RoomGalleryModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % roomType.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + roomType.images.length) % roomType.images.length);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition hover:bg-white/20"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Room Info Header */}
          <div className="mb-4 rounded-t-3xl bg-white/10 p-6 backdrop-blur-md">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">{roomType.name}</h3>
                <p className="mt-2 text-sm text-white/80">{roomType.description}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-sm">
                <Users className="h-4 w-4" />
                <span className="text-sm font-semibold">{roomType.capacity}</span>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="relative h-full w-full"
              >
                <Image
                  src={roomType.images[currentImageIndex]}
                  alt={`${roomType.name} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            {roomType.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm text-white backdrop-blur-md">
              {currentImageIndex + 1} / {roomType.images.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="mt-4 flex gap-2 overflow-x-auto rounded-b-3xl bg-white/10 p-4 backdrop-blur-md">
            {roomType.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={cn(
                  "relative h-20 w-28 shrink-0 overflow-hidden rounded-xl transition",
                  currentImageIndex === index
                    ? "ring-2 ring-white ring-offset-2 ring-offset-black/20"
                    : "opacity-60 hover:opacity-100"
                )}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
