"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/amthane valley.webm" type="video/webm" />
        {/* Fallback message for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-green-900/30 to-transparent"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen pt-20 md:pt-0">
        {/* Hero Content */}
        <main className="flex-grow flex items-center justify-center text-center px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl w-full">
            <motion.h1
              className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tight md:pt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Experience True Susegad Your Perfect Farm for Day Outings in Goa
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-white/90 md:text-m"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Welcome to Amthane Valley Farm, where nature meets <span className="italic">Susegad</span>—the Goan art of unhurried joy. Discover our exclusive retreat nestled between the sweet waters of Amthane Dam and lush coconut plantations, crafted for leisurely celebrations and meaningful togetherness.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* <button className="flex w-full sm:w-auto min-w-[200px] max-w-sm cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold tracking-wide hover:bg-primary/90 transition-colors">
                <span className="truncate">Discover Your Susegad Escape</span>
              </button> */}
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
