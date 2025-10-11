import { Navbar } from "../components/Navbar";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { HeroSection } from "./(sections)/HeroSection";
import { AboutSection } from "./(sections)/AboutSection";
import { FacilitiesSection } from "./(sections)/FacilitiesSection";
import { ExperienceSection } from "./(sections)/ExperienceSection";
import { GallerySection } from "./(sections)/GallerySection";
import { LocationSection } from "./(sections)/LocationSection";
import { ContactSection } from "./(sections)/ContactSection";
import { Footer } from "./(sections)/Footer";

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
