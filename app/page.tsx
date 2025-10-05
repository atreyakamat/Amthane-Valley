import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { HeroSection } from "@/app/(sections)/HeroSection";
import { AboutSection } from "@/app/(sections)/AboutSection";
import { FacilitiesSection } from "@/app/(sections)/FacilitiesSection";
import { ExperienceSection } from "@/app/(sections)/ExperienceSection";
import { GallerySection } from "@/app/(sections)/GallerySection";
import { LocationSection } from "@/app/(sections)/LocationSection";
import { ContactSection } from "@/app/(sections)/ContactSection";
import { Footer } from "@/app/(sections)/Footer";

export default function Home() {
  return (
    <div className="relative bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FacilitiesSection />
        <ExperienceSection />
        <GallerySection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
