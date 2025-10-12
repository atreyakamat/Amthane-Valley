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
    <div className="relative overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main className="relative overflow-x-hidden">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Decorative Divider */}
        <div className="relative h-24 bg-gradient-to-b from-transparent via-forest/5 to-transparent"></div>
        
        {/* About Section */}
        <AboutSection />
        
        {/* Subtle Wave Divider */}
        <div className="relative h-16 overflow-hidden bg-cream-soft/30">
          <div className="absolute inset-0 bg-gradient-to-r from-forest/5 via-transparent to-forest/5"></div>
        </div>
        
        {/* Facilities Section */}
        <FacilitiesSection />
        
        {/* Decorative Divider */}
        <div className="relative h-20 bg-gradient-to-b from-transparent via-amber-50/50 to-transparent"></div>
        
        {/* Experience Section */}
        <ExperienceSection />
        
        {/* Gallery Section with enhanced spacing */}
        <div className="bg-gradient-to-b from-background to-cream-soft/40">
          <GallerySection />
        </div>
        
        {/* Location Section */}
        <LocationSection />
        
        {/* Soft Divider before Contact */}
        <div className="h-12 bg-gradient-to-b from-transparent to-forest/5"></div>
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
