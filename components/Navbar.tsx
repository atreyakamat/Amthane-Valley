"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Stays", href: "/stays" },
  { label: "Facilities", href: "/facilities" },
  { label: "Experiences", href: "/experiences" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/book" },
];

export function Navbar() {
  const [isSolid, setIsSolid] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-6 z-50 pointer-events-none">
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div
          className={cn(
            "pointer-events-auto mx-auto rounded-full border shadow-lg backdrop-blur-md bg-white/8",
            "flex items-center justify-between gap-6 px-5 py-3 transition-all duration-300",
            isSolid ? "ring-1 ring-emerald-200/20" : "ring-0"
          )}
          style={{ borderColor: "rgba(28,59,42,0.15)" }}
        >
          <Link href="/" className="flex items-center gap-3">
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
            {/* <a
              href="/book"
              className="ml-2 hidden rounded-md bg-forest px-4 py-2 text-m font-semibold text-cream hover:bg-forest/90 lg:inline-block"
            >
              Book Your Day
            </a> */}
          </nav>

          <div className="flex items-center gap-3">
            {/* <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-md bg-forest px-3 py-2 text-sm font-semibold text-cream lg:hidden"
            >
              Book Your Day
            </Link> */}

            <button
              className="ml-2 inline-flex items-center justify-center rounded-full p-2 text-forest/90 hover:text-forest lg:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="pointer-events-auto mt-4 rounded-3xl border border-white/15 bg-white/12 px-6 py-6 text-forest shadow-2xl backdrop-blur-2xl lg:hidden"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-cream shadow-soft">
                    <span className="text-lg font-semibold">AV</span>
                  </div>
                  <span className="text-sm font-semibold tracking-[0.25em] uppercase text-forest/80">
                    Amthane Valley
                  </span>
                </div>
                <button
                  aria-label="Close menu"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 text-forest/80 hover:bg-white/20"
                  onClick={closeMenu}
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </div>

              <nav className="mt-6 space-y-2 text-sm font-semibold uppercase tracking-[0.2em] text-forest/80">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-forest/90 transition hover:border-white/20 hover:bg-white/16"
                  >
                    {item.label}
                    <span aria-hidden>→</span>
                  </a>
                ))}
              </nav>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/book"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center rounded-2xl bg-forest px-4 py-3 text-sm font-semibold text-cream shadow-leaf"
                >
                  Book Your Day
                </Link>
                <a
                  href="https://wa.me/919850000000"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center rounded-2xl border border-forest/20 bg-white/8 px-4 py-3 text-sm font-semibold text-forest transition hover:border-forest/30 hover:bg-white/14"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
