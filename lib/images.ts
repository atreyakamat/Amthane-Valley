// Centralized image path map for consistent usage across the site
// Mapped to assets currently present in public/images
export const images = {
  // Map key slots used across the UI to existing files so sections never 404
  coconutTrees: "/images/bernard-hermant--IwbJJfoC80-unsplash.jpg",
  pool: "/images/pexels-heychrissmith-3517970.jpg",
  huts: "/images/chelsea-gates-0653_wY0nRc-unsplash.jpg",
  rooms: "/images/sara-dubler-Koei_7yYtIo-unsplash.jpg",
  damView: "/images/yuliya-pankevich-oyxsG2Lh_uA-unsplash.jpg",
  events: {
    birthday: "/images/fabio-fistarol-qai_Clhyq0s-unsplash.jpg",
    familyDay: "/images/allen-dewberry-jr-XjKiG46fkQI-unsplash.jpg",
    prewedding: "/images/sasha-kaunas-xEaAoizNFV8-unsplash.jpg",
  },
  ogThumbnail: "/images/bernard-hermant--IwbJJfoC80-unsplash.jpg",
  misc: {
    allen: "/images/allen-dewberry-jr-XjKiG46fkQI-unsplash.jpg",
    bernard: "/images/bernard-hermant--IwbJJfoC80-unsplash.jpg",
    chelsea: "/images/chelsea-gates-0653_wY0nRc-unsplash.jpg",
    datingscout: "/images/datingscout-JTUmzXLoqHQ-unsplash.jpg",
    fabio: "/images/fabio-fistarol-qai_Clhyq0s-unsplash.jpg",
    pexels: "/images/pexels-heychrissmith-3517970.jpg",
    sara: "/images/sara-dubler-Koei_7yYtIo-unsplash.jpg",
    sasha: "/images/sasha-kaunas-xEaAoizNFV8-unsplash.jpg",
    yuliya: "/images/yuliya-pankevich-oyxsG2Lh_uA-unsplash.jpg",
  },
} as const;

export const allImages: string[] = [
  images.misc.bernard,
  images.misc.pexels,
  images.misc.chelsea,
  images.misc.sara,
  images.misc.yuliya,
  images.misc.fabio,
  images.misc.allen,
  images.misc.sasha,
  images.misc.datingscout,
];
