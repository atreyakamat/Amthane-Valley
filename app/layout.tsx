import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { images } from "../lib/images";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.NODE_ENV === "production" ? "https://amthanevalley.com" : "http://localhost:3000");

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: "Amthane Valley Farm",
  description:
    "Experience true Goan Susegad with private day bookings at Amthane Valley Farm—complete with pools, coconut plantations, and celebratory spaces.",
  url: siteUrl,
  image: [`${siteUrl.replace(/\/$/, "")}${images.ogThumbnail}`],
  telephone: "+91-9850000000",
  sameAs: [
    "https://maps.app.goo.gl/RNwrzaSJNArC6hQn7",
    "https://www.instagram.com",
    "https://www.facebook.com",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 12, Near Amthane Dam, Mulgao",
    addressLocality: "Bicholim",
    addressRegion: "Goa",
    postalCode: "403520",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 15.671026,
    longitude: 73.905627,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: `${siteUrl.replace(/\/$/, "")}/book`,
    result: {
      "@type": "Reservation",
      name: "Day Booking at Amthane Valley Farm",
    },
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amthane Valley Farm | Private Farm Retreat in North Goa with Pool & Accommodations",
    template: "%s | Amthane Valley Farm",
  },
  description:
    "Experience Goan Susegad at Amthane Valley Farm - Private day bookings with swimming pool, natural seasonal pool, rustic huts, lawns, accommodations & event spaces near Mapusa, Bicholim. Perfect for celebrations, corporate retreats & family gatherings in Goa.",
  keywords: [
    "Amthane Valley Farm",
    "Goa farm stay",
    "private farm booking Goa",
    "farm with pool Goa",
    "Amthane Dam",
    "Bicholim farm",
    "North Goa farmhouse",
    "Mapusa farm",
    "Goan Susegad",
    "farm resort Goa",
    "nature retreat Goa",
    "coconut plantation Goa",
    "pool farmhouse Goa",
    "event venue Goa",
    "corporate retreat Goa",
    "family gathering venue Goa",
    "birthday party venue Goa",
    "wedding venue Goa",
    "pre-wedding shoot location Goa",
    "day outing Goa",
    "private pool Goa",
    "farm accommodation Goa",
    "Goa countryside",
    "team building venue Goa",
    "farm near Mapusa",
    "exclusive farm Goa",
  ],
  authors: [{ name: "Amthane Valley Farm" }],
  creator: "Amthane Valley Farm",
  publisher: "Amthane Valley Farm",
  category: "Travel",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://amthanevalley.com",
  },
  openGraph: {
    title: "Amthane Valley Farm | Private Farm Retreat in North Goa with Pool & Stays",
    description:
      "Celebrate life between coconut palms and sweetwater. Discover private farm bookings with swimming pools, accommodations, huts, and lush lawns perfectly curated for celebrations, corporate retreats & family gatherings in Goa.",
    url: siteUrl,
    siteName: "Amthane Valley Farm",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: images.ogThumbnail,
        width: 1200,
        height: 630,
        alt: "Amthane Valley Farm - Swimming pool, coconut plantations, and natural landscapes in Goa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amthane Valley Farm – Nature Meets Comfort | Goa",
    description:
      "A lush Goan farm beside Amthane Dam with pools, huts, and event spaces for unforgettable day bookings.",
  images: [images.ogThumbnail],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFF8F0" },
    { media: "(prefers-color-scheme: dark)", color: "#14271C" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
