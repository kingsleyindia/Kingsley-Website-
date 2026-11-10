import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { LOCATION_OPTIONS } from '../data/kolkataData';

const INTENT_OPTIONS = ['lease', 'buy', 'sell', 'invest'] as const;
const PROPERTY_OPTIONS = ['office', 'retail space', 'warehouse', 'home', 'other'] as const;

export const HeroSlider: React.FC = () => {
  // Requirement bar selections
  const [intent, setIntent] = useState<string>('lease');
  const [propertyType, setPropertyType] = useState<string>('office');
  const [location, setLocation] = useState<string>('Sector V');

  // WhatsApp Enquiry builder
  const handleRequirementSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Kingsley, I want to ${intent} a ${propertyType} in ${location}. I would like to discuss this requirement.`;
    const url = `https://wa.me/918240492106?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="top"
      aria-label="Kingsley Real Estate Kolkata"
      className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#0B1E34] text-[#F6F4EF] pt-28 pb-12 px-6 lg:px-12 select-none"
    >
      {/* Subtle, Dignified Architectural Ambient Glow (Zero noise, pure elegance) */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(23,59,94,0.45),rgba(11,30,52,0.95))]"
        aria-hidden="true"
      />

      {/* Subtle fine hairline geometric grid accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #E2B155 1px, transparent 1px), linear-gradient(to bottom, #E2B155 1px, transparent 1px)',
          backgroundSize: '120px 120px',
        }}
        aria-hidden="true"
      />

      {/* Top spacer */}
      <div className="w-full" />

      {/* Central Content: Calm, High-Impact Editorial Focus */}
      <div className="relative z-20 max-w-4xl mx-auto text-center my-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-[#E2B155] mb-4 font-semibold">
          Portfolio · Precision
        </p>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F6F4EF] font-normal leading-[1.12] tracking-tight text-balance">
          Every square foot of Kolkata, advised with precision.
        </h1>

        <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#F6F4EF]/85 max-w-2xl mx-auto font-light leading-relaxed">
          Independent, consultative property counsel for businesses, owners, investors and families across the city.
        </p>

        {/* Refined, Streamlined Requirement Console */}
        <div className="w-full max-w-3xl mx-auto mt-9 sm:mt-12">
          <form
            onSubmit={handleRequirementSubmit}
            aria-label="Property requirement selector"
            className="bg-[#0B1E34]/90 backdrop-blur-md p-3.5 sm:p-4 border border-[#E2B155]/30 shadow-2xl shadow-[#0B1E34] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end text-left"
          >
            {/* Field 1: I want to */}
            <div className="flex flex-col">
              <label
                htmlFor="hero-intent"
                className="text-[11px] uppercase tracking-wider text-[#A9BBD0] font-medium mb-1 pl-1"
              >
                I want to
              </label>
              <select
                id="hero-intent"
                value={intent}
                onChange={(e) => setIntent(e.target.value)}
                className="w-full bg-[#173B5E]/90 text-[#F6F4EF] text-xs sm:text-sm py-2.5 px-3 border border-[#E2B155]/25 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2 capitalize cursor-pointer transition-colors hover:border-[#E2B155]/50"
              >
                {INTENT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#0B1E34] text-[#F6F4EF]">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 2: Property type */}
            <div className="flex flex-col">
              <label
                htmlFor="hero-property"
                className="text-[11px] uppercase tracking-wider text-[#A9BBD0] font-medium mb-1 pl-1"
              >
                Property type
              </label>
              <select
                id="hero-property"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full bg-[#173B5E]/90 text-[#F6F4EF] text-xs sm:text-sm py-2.5 px-3 border border-[#E2B155]/25 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2 capitalize cursor-pointer transition-colors hover:border-[#E2B155]/50"
              >
                {PROPERTY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#0B1E34] text-[#F6F4EF]">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 3: Micro-market */}
            <div className="flex flex-col">
              <label
                htmlFor="hero-location"
                className="text-[11px] uppercase tracking-wider text-[#A9BBD0] font-medium mb-1 pl-1"
              >
                Micro-market
              </label>
              <select
                id="hero-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-[#173B5E]/90 text-[#F6F4EF] text-xs sm:text-sm py-2.5 px-3 border border-[#E2B155]/25 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2 cursor-pointer transition-colors hover:border-[#E2B155]/50"
              >
                {LOCATION_OPTIONS.map((loc) => (
                  <option key={loc} value={loc} className="bg-[#0B1E34] text-[#F6F4EF]">
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Action Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#E2B155] text-[#0B1E34] py-2.5 px-4 text-xs uppercase tracking-wider font-semibold hover:bg-[#d8a445] transition-all duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2 shadow-md active:scale-[0.99]"
              >
                Start enquiry
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Subtle Scroll Indicator (Zero noise, quiet elegance) */}
      <div className="relative z-20 flex justify-center pt-8">
        <a
          href="#who-we-are"
          aria-label="Scroll down to Who We Are"
          className="inline-flex items-center gap-2 text-xs text-[#A9BBD0]/70 hover:text-[#E2B155] transition-colors focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
        >
          <span>Discover Kingsley</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#E2B155]/80 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
