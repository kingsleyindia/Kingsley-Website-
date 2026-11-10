import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { WhoWeAre } from './components/WhoWeAre';
import { ServicesSection } from './components/ServicesSection';
import { KolkataMarkets } from './components/KolkataMarkets';
import { HowWeWork } from './components/HowWeWork';
import { LeaseOrSellCallout } from './components/LeaseOrSellCallout';
import { EnquirySection } from './components/EnquirySection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FadeIn } from './components/FadeIn';

export default function App() {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedArea, setSelectedArea] = useState<string | undefined>(undefined);
  const [selectedAudience, setSelectedAudience] = useState<string | undefined>(undefined);

  const handleSelectArea = (area: string) => {
    setSelectedArea(area);
  };

  const handleSelectService = (service: string) => {
    setSelectedService(service);
  };

  const handleSelectAudience = (audience: string) => {
    setSelectedAudience(audience);
  };

  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#0B1E34] selection:bg-[#E2B155]/30 selection:text-[#0B1E34]">
      {/* Fixed Navigation Bar */}
      <Navbar
        onNavigateToEnquiry={(service, area, audience) => {
          if (service) setSelectedService(service);
          if (area) setSelectedArea(area);
          if (audience) setSelectedAudience(audience);
        }}
      />

      <main id="main-content">
        {/* Hero: Elegant Architectural Entrance */}
        <HeroSlider />

        {/* Section 1: Who we are (Ivory) */}
        <FadeIn>
          <WhoWeAre />
        </FadeIn>

        {/* Section 2: Services & Disciplines (Ivory) */}
        <FadeIn>
          <ServicesSection onSelectService={handleSelectService} />
        </FadeIn>

        {/* Section 3: Kolkata Markets & Spatial Index (Navy) */}
        <FadeIn>
          <KolkataMarkets onSelectArea={handleSelectArea} />
        </FadeIn>

        {/* Section 4: How we work (Ivory) */}
        <FadeIn>
          <HowWeWork />
        </FadeIn>

        {/* Section 5: Landlord & Owner Representation (Navy Band) */}
        <FadeIn>
          <LeaseOrSellCallout onSelectAudience={handleSelectAudience} />
        </FadeIn>

        {/* Section 6: Enquire (Ivory) */}
        <FadeIn>
          <EnquirySection
            preselectedService={selectedService}
            preselectedArea={selectedArea}
            preselectedAudience={selectedAudience}
          />
        </FadeIn>
      </main>

      {/* Footer (Deep Navy) */}
      <Footer />

      {/* Floating Gold WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
