import Link from "next/link";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";
import { LeafIcon } from "../../components/ui/leaf-icon";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-forest shadow-leaf">
                <LeafIcon className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.3em]">Amthane Valley</span>
                <span className="text-lg font-semibold">Amthane Valley Farm: Your private slice of Goan Susegad.</span>
              </div>
            </div>
            <p className="max-w-xl text-sm text-cream/80">
              Discover a farm sanctuary designed for day bookings, heartfelt gatherings, and poolside celebrations in the spirit of Susegad. Celebrate life between palms & sweetwater.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-cream/80">
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden /> +91 98500 00000
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden /> hello@amthanevalley.com
              </span>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Quick links</h3>
              <ul className="mt-4 space-y-3 text-sm text-cream/80">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Follow us</h3>
              <div className="mt-4 flex gap-3">
                <Link
                  aria-label="Visit our Instagram"
                  href="https://www.instagram.com"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  target="_blank"
                >
                  <Instagram className="h-5 w-5" aria-hidden />
                </Link>
                <Link
                  aria-label="Visit our Facebook"
                  href="https://www.facebook.com"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  target="_blank"
                >
                  <Facebook className="h-5 w-5" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
  <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-cream/60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Amthane Valley Farm. All rights reserved.</span>
          <span>Crafted with love in Goa’s countryside.</span>
        </div>
      </div>
    </footer>
  );
}
