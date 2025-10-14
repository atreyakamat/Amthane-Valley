import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { images } from "../lib/images";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || (process.env.NODE_ENV === 'production' ? 'https://amthanevalley.com' : 'http://localhost:3000')),
  title: {
    default: "Amthane Valley Farm – Nature Meets Comfort",
    template: "%s | Amthane Valley Farm",
  },
  description:
    "Escape to Amthane Valley – a lush Goan farm beside the Amthane Dam with pools, huts, and event spaces perfect for day bookings.",
  keywords: [
    "Goa farm day booking",
    "Amthane Dam",
    "nature venue Goa",
    "pool farmhouse Goa",
    "local event venue Goa",
    "Amthane Valley Farm",
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
    title: "Amthane Valley Farm – Nature Meets Comfort | Goa",
    description:
      "Celebrate life between coconut palms and sweetwater. Discover pools, huts, and lush lawns perfectly curated for family gatherings and events.",
    url: "https://amthanevalley.com",
    siteName: "Amthane Valley Farm",
    type: "website",
    locale: "en_IN",
      images: [
        {
          url: images.ogThumbnail,
          width: 1200,
          height: 630,
          alt: "Amthane Valley Farm poolside and coconut groves",
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
        {children}
      </body>
    </html>
  );
}
