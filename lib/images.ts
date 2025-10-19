// Centralized image path map for consistent usage across the site
export const images = {
  // Hero & General
  hero1: "/images/swimming-pool-1.JPG",
  hero2: "/images/lush-green-1.JPG",
  hero3: "/images/swimming-trees-aesthetic-1.JPG",
  hero4: "/images/entrance-from-outside-wide.JPG",
  hero5: "/images/green-trees-1.JPG",
  hero6: "/images/huts.JPG",
  hero7: "/images/ground-1.JPG",
  
  // Swimming Pool
  pool1: "/images/swimming-pool-1.JPG",
  pool2: "/images/swimming-pool-2.JPG",
  pool3: "/images/swimming-pool-3.JPG",
  pool4: "/images/swimming-pool-4.JPG",
  poolAesthetic1: "/images/swimming-trees-aesthetic-1.JPG",
  poolAesthetic2: "/images/swimming-trees-aesthetic-2.JPG",
  
  // Natural Landscapes
  waterLeft: "/images/waterbody-left.JPG",
  waterRight: "/images/waterbody-right.JPG",
  lushGreen: "/images/lush-green-1.JPG",
  vegetation: "/images/vegetation-green.JPG",
  naturalTree: "/images/natural-tree-graphic.JPG",
  
  // Facilities & Spaces
  huts: "/images/huts.JPG",
  ground: "/images/ground-1.JPG",
  lushGround: "/images/lush-green-ground.JPG",
  walkway: "/images/walk-way.JPG",
  manWalkway: "/images/man-walkway.JPG",
  upperWalkway: "/images/upper-walkway.JPG",
  
  // Entrance
  entranceInside: "/images/entrance-from-inside.JPG",
  entranceOutside: "/images/entrance-from-outside-wide.JPG",
  entranceOutsideFocus: "/images/entrance-from-outside-focus.JPG",
  
  // Activities
  slides: "/images/slides-l.JPG",
  slidesPortrait: "/images/slides-p.JPG",
  slidesWater: "/images/slides-with-water.JPG",
  swimmingGate: "/images/swimming-gate.JPG",
  outsideView: "/images/outside-view.JPG",
  deco: "/images/deco.JPG",
  
  // Alias for metadata/OG image
  ogThumbnail: "/images/swimming-pool-1.JPG",
} as const;

// Room categories with capacity info
export const roomCategories = {
  nonAC: {
    name: "Non-AC Cozy Rooms",
    capacity: "2 People",
    description: "Comfortable rooms with natural ventilation, perfect for a peaceful night's rest.",
    images: [
      "/images/non-ac-room-1.JPG",
      "/images/non-ac-room-2.JPG",
      "/images/non-ac-room-3.JPG",
      "/images/non-ac-room 4.JPG",
      "/images/non-ac-room-5.JPG",
    ],
  },
  ac: {
    name: "AC Deluxe Suites",
    capacity: "2 People",
    description: "Air-conditioned comfort with modern amenities for a luxurious stay.",
    images: [
      "/images/ac-room-1.JPG",
      "/images/ac-room-2.JPG",
      "/images/ac-room-3.JPG",
      "/images/ac-room-4.JPG",
    ],
  },
  dormitory: {
    name: "Group Dormitories",
    capacity: "8 People",
    description: "Spacious dormitories ideal for groups, corporate teams, and family gatherings.",
    images: [
      "/images/dormitory-1.JPG",
      "/images/dormitory-2.JPG",
      "/images/dormitory-3.JPG",
      "/images/dormitory-4.JPG",
      "/images/dormitory-5.JPG",
    ],
  },
} as const;

export const allHeroImages: string[] = [
  images.hero1,
  images.hero2,
  images.hero3,
  images.hero4,
  images.hero5,
  images.hero6,
  images.hero7,
];

export const experienceImages = [
  { image: images.pool1, title: "Leisurely Birthday Celebrations" },
  { image: images.poolAesthetic1, title: "Rejuvenating Corporate Retreats in Goa" },
  { image: images.lushGreen, title: "Soulful Pre-Wedding Shoots & Gatherings" },
  { image: images.huts, title: "Unhurried Family Gatherings & Picnics" },
  { image: images.waterLeft, title: "Restorative Wellness & Yoga Retreats" },
  { image: images.ground, title: "Authentic Goan Get-Togethers" },
];
