"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Users, BedDouble, Wind, Snowflake, ChevronRight, X, ChevronLeft } from "lucide-react";
import { roomCategories } from "../../lib/images";
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../(sections)/Footer";
import { WhatsAppButton } from "../../components/WhatsAppButton";

type RoomType = keyof typeof roomCategories;

export default function StaysPage() {
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (roomType: RoomType) => {
    setSelectedRoom(roomType);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedRoom(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedRoom) {
      const images = roomCategories[selectedRoom].images;
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedRoom) {
      const images = roomCategories[selectedRoom].images;
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const getRoomIcon = (type: RoomType) => {
    switch (type) {
      case "ac":
        return <Snowflake className="h-5 w-5" />;
      case "nonAC":
        return <Wind className="h-5 w-5" />;
      case "dormitory":
        return <Users className="h-5 w-5" />;
    }
  };

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
        
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8 flex flex-col items-center pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--coconut-brown)]/40 shadow-[0_4px_10px_rgba(0,0,0,0.2)] px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm"
          >
            <BedDouble className="h-4 w-4 text-[var(--coconut-brown)]" />
            Accommodations
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-[var(--forest-green)] md:text-6xl pb-3"
          >
            Our Rooms & Stays
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--coconut-brown)] md:text-xl"
          >
            Choose from our thoughtfully designed accommodations — each offering comfort, tranquility, and the perfect retreat for your Susegad experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <Button asChild size="lg" variant="secondary" className="bg-white text-forest hover:bg-cream">
              <Link href="/#contact">
                Book Your Stay
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="">
        <div className="mx-auto max-w-4xl px-4 flex flex-col items-center text-center md:px-8 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-forest md:text-4xl">
              Find Your Perfect Retreat
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-forest-muted leading-snug">
              Each of our accommodations is thoughtfully designed to provide comfort and tranquility. Whether you&apos;re seeking a cozy getaway, luxurious comfort, or group lodging, we have the perfect space for your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Room Cards Section */}
      <section className="bg-cream-soft/40">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {(Object.keys(roomCategories) as RoomType[]).map((roomType, index) => {
              const room = roomCategories[roomType];
              return (
                <motion.div
                  key={roomType}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] bg-white shadow-soft transition-all duration-300 hover:shadow-leaf lg:mx-0"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={room.images[0]}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Capacity Badge */}
                    <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-sm font-semibold text-forest backdrop-blur-sm">
                      <Users className="h-4 w-4" />
                      {room.capacity}
                    </div>

                    {/* Room Type Icon */}
                    <div className="absolute left-4 top-4 flex items-center justify-center rounded-full bg-forest/90 p-2 text-white backdrop-blur-sm">
                      {getRoomIcon(roomType)}
                    </div>

                    {/* Image Count Indicator */}
                    <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-sm">
                      {room.images.length} photos
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-semibold text-forest">{room.name}</h3>
                    <p className="mt-3 text-sm text-forest-muted">{room.description}</p>
                    
                    <div className="mt-6 flex flex-col gap-3">
                      <Button
                        onClick={() => openGallery(roomType)}
                        className="w-full justify-between"
                        variant="outline"
                      >
                        View Gallery ({room.images.length} photos)
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      <Button asChild className="w-full text-black" variant="secondary">
                        <a href="https://wa.me/919850000000" target="_blank" rel="noreferrer">
                          Check Availability
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-cream-soft/60">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-forest md:text-4xl">
              Ready to Experience Susegad?
            </h2>
            <p className="mt-4 text-lg text-forest-muted">
              Book your stay at Amthane Valley and immerse yourself in the tranquil Goan countryside. Perfect for families, groups, and celebrations.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="outline" className="text-[var(--forest-soft)]">
                <Link href="/#contact">
                  Plan Your Visit
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-[var(--coconut-brown-soft)]/40">
                <Link href="/">
                  Back to Home
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Gallery Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={closeGallery}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeGallery}
                className="absolute -top-12 right-0 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition hover:bg-white/20 md:-right-12"
                aria-label="Close gallery"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Room Info Header */}
              <div className="mb-4 rounded-t-3xl bg-white/10 p-4 backdrop-blur-md md:p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white md:text-2xl">
                      {roomCategories[selectedRoom].name}
                    </h3>
                    <p className="mt-2 text-sm text-white/80">
                      {roomCategories[selectedRoom].description}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-sm">
                    <Users className="h-4 w-4" />
                    <span className="text-sm font-semibold">
                      {roomCategories[selectedRoom].capacity}
                    </span>
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
                      src={roomCategories[selectedRoom].images[currentImageIndex]}
                      alt={`${roomCategories[selectedRoom].name} - Image ${currentImageIndex + 1}`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {roomCategories[selectedRoom].images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition hover:bg-white/20 md:left-4 md:p-3"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition hover:bg-white/20 md:right-4 md:p-3"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              <div className="mt-4 flex gap-2 overflow-x-auto rounded-b-3xl bg-white/10 p-4 backdrop-blur-md">
                {roomCategories[selectedRoom].images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "relative h-16 w-24 shrink-0 overflow-hidden rounded-xl transition md:h-20 md:w-28",
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
        )}
      </AnimatePresence>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
