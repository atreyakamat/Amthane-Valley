"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu } from "lucide-react";

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
    <header className="fixed inset-x-0 top-6 z-50 pointer-events-none">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div
          className={cn(
            "pointer-events-auto mx-auto rounded-full border shadow-lg backdrop-blur-md bg-white/8",
            "flex items-center justify-between gap-6 px-5 py-3 transition-all duration-300",
            isSolid ? "ring-1 ring-emerald-200/20" : "ring-0"
          )}
          style={{ borderColor: "rgba(28,59,42,0.15)" }}
        >
          <Link href="#hero" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-cream shadow-soft">
              <span className="text-xl font-semibold">AV</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-m font-medium">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative transition text-forest/90 hover:text-forest"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 rounded-full bg-forest transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
            <a
              href="/book"
              className="ml-2 hidden rounded-md bg-forest px-4 py-2 text-m font-semibold text-cream hover:bg-forest/90 lg:inline-block"
            >
              Book Your Day
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-md bg-forest px-3 py-2 text-sm font-semibold text-cream lg:hidden"
            >
              Book Your Day
            </Link>

            <button
              className="ml-2 inline-flex items-center justify-center rounded-full p-2 text-forest/90 hover:text-forest lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
