"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { allImages } from "../../lib/images";
import { useEffect, useState } from "react";

const heroImages: string[] = allImages;

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen w-full">
      {/* Background Image Carousel */}
  {heroImages.map((img: string, index: number) => (
        <div
          key={`hero-${index}-${img}`}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt="Amthane Valley Farm"
            fill
            className="object-cover"
            priority={index === 0}
            unoptimized
          />
        </div>
      ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Content */}
        <main className="flex-grow flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <motion.h1
              className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Where Nature Meets Comfort – Welcome to Amthane Valley
            </motion.h1>
            
            <motion.div
              className="mt-8 flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="flex w-full sm:w-auto min-w-[200px] max-w-sm cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-background-dark text-base font-bold tracking-wide hover:bg-primary/90 transition-colors">
                <span className="truncate">Explore the Farm</span>
              </button>
              <button className="flex w-full sm:w-auto min-w-[200px] max-w-sm cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white/20 backdrop-blur-sm text-white text-base font-bold tracking-wide hover:bg-white/30 transition-colors">
                <span className="truncate">Book Your Experience</span>
              </button>
            </motion.div>
          </div>
        </main>
        
        {/* Subtle Motion Effects */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <svg 
            className="absolute bottom-0 left-0 w-full h-auto animate-pulse" 
            style={{ animationDuration: '5s' }}
            viewBox="0 0 1440 320" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,256C672,245,768,203,864,197.3C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
              fill="#f6f8f6" 
              fillOpacity="0.1"
            />
          </svg>
          <svg 
            className="absolute bottom-0 left-0 w-full h-auto animate-pulse" 
            style={{ animationDuration: '7s', animationDelay: '2s' }}
            viewBox="0 0 1440 320" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0,256L48,240C96,224,192,192,288,176C384,160,480,160,576,181.3C672,203,768,245,864,250.7C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
              fill="#1dc91d" 
              fillOpacity="0.1"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
