"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Stay & Facilities", href: "#facilities" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isSolid
          ? "bg-background/95 shadow-lg backdrop-blur-lg"
          : "bg-gradient-to-b from-black/55 to-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="#hero" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-cream shadow-soft">
            <span className="text-xl font-semibold">AV</span>
          </div>
          <div className="hidden flex-col leading-tight text-cream sm:flex md:text-forest">
            <span className="text-sm uppercase tracking-[0.3em]">Amthane Valley</span>
            <span className="text-base font-semibold">Farm Retreat</span>
          </div>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-white/90 lg:flex lg:text-forest">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative transition hover:text-aqua"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 rounded-full bg-aqua transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
  <div className="hidden items-center gap-4 lg:flex">
          <Button asChild variant="secondary" glow>
            <a href="tel:+919850000000" className="flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Us
            </a>
          </Button>
          <Button asChild>
            <a href="https://wa.me/919850000000" target="_blank" rel="noreferrer">
              Book Your Day
            </a>
          </Button>
        </div>
  <div className="flex items-center gap-3 lg:hidden">
          <Button variant="secondary" size="icon" glow aria-label="Call Amthane Valley">
            <Phone className="h-5 w-5" aria-hidden="true" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-white/30 text-white/90 backdrop-blur-sm md:text-forest"
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </header>
  );
}
