import React from 'react';
import { ArrowRight } from 'lucide-react';

interface LeaseOrSellCalloutProps {
  onSelectAudience: (audience: string) => void;
}

export const LeaseOrSellCallout: React.FC<LeaseOrSellCalloutProps> = ({ onSelectAudience }) => {
  const handleClick = () => {
    onSelectAudience('landlord or owner');
    const enquirySection = document.getElementById('enquire');
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      aria-label="Owner and Landlord Advisory Callout"
      className="relative py-24 lg:py-32 bg-[#0B1E34] text-[#F6F4EF] overflow-hidden border-t border-b border-[#E2B155]/20"
    >
      {/* Subtle radial depth */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(23,59,94,0.35),transparent)]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#E2B155] font-semibold mb-3">
          Landlord & Owner Representation
        </p>

        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F6F4EF] font-normal leading-snug max-w-3xl mx-auto mb-5 text-balance">
          Speak to us about leasing or selling your property, with advice that puts your objectives first.
        </h2>

        <p className="text-sm sm:text-base text-[#A9BBD0] max-w-2xl mx-auto font-light leading-relaxed mb-8">
          Whether positioning a commercial floor plate in Sector V or divesting an established freehold asset in Central Kolkata, we deliver realistic valuations and qualified market counterparties.
        </p>

        <button
          type="button"
          onClick={handleClick}
          className="inline-flex items-center gap-2 bg-[#E2B155] text-[#0B1E34] px-8 py-3 text-xs uppercase tracking-wider font-semibold hover:bg-[#d8a445] transition-colors cursor-pointer shadow-md focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
        >
          <span>Discuss your property</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
