// Centralized image path map for consistent usage across the site
// Only WhatsApp images from the farm
export const images = {
  // WhatsApp farm images
  whatsapp1: "/images/WhatsApp Image 2025-10-14 at 08.50.32_69c5e69d.jpg",
  whatsapp2: "/images/WhatsApp Image 2025-10-14 at 08.50.35_4a0037eb.jpg",
  whatsapp3: "/images/WhatsApp Image 2025-10-14 at 08.50.35_56cbec14.jpg",
  whatsapp4: "/images/WhatsApp Image 2025-10-14 at 08.50.35_d5322d76.jpg",
  whatsapp5: "/images/WhatsApp Image 2025-10-14 at 08.50.36_0e023e9e.jpg",
  whatsapp6: "/images/WhatsApp Image 2025-10-14 at 08.50.38_c299a081.jpg",
  whatsapp7: "/images/WhatsApp Image 2025-10-14 at 08.50.38_ff177b86.jpg",
  // Alias for metadata/OG image
  ogThumbnail: "/images/WhatsApp Image 2025-10-14 at 08.50.32_69c5e69d.jpg",
} as const;

export const allImages: string[] = [
  images.whatsapp1,
  images.whatsapp2,
  images.whatsapp3,
  images.whatsapp4,
  images.whatsapp5,
  images.whatsapp6,
  images.whatsapp7,
];
