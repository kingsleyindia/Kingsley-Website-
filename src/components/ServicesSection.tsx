import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/kolkataData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const handleEnquireService = (title: string) => {
    onSelectService(title);
    const enquirySection = document.getElementById('enquire');
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-28 lg:py-36 bg-[#F6F4EF] text-[#0B1E34]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#173B5E]/70 font-semibold mb-3">
            Services
          </p>
          <h2
            id="services-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B1E34] font-normal leading-tight tracking-tight text-balance"
          >
            Independent property counsel across every real estate discipline.
          </h2>
          <div className="w-12 h-[1px] bg-[#E2B155] my-6" />
          <p className="text-base sm:text-lg text-[#173B5E] font-light leading-relaxed">
            From single office leasing to full portfolio oversight, our advice remains objective, unhurried, and anchored in client requirements.
          </p>
        </div>

        {/* 7 Services Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              className="bg-white/60 p-7 lg:p-8 border border-[#173B5E]/10 flex flex-col justify-between hover:bg-white hover:border-[#173B5E]/25 transition-all duration-300"
            >
              <div>
                <span className="text-xs font-mono text-[#E2B155] font-medium mb-3 block">
                  0{index + 1}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#0B1E34] font-normal leading-snug mb-3">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-[#173B5E] mb-2 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-xs sm:text-sm text-[#173B5E]/75 font-light leading-relaxed">
                  {service.detail}
                </p>
              </div>

              {/* Minimalist Action Link */}
              <div className="pt-6 mt-6 border-t border-[#173B5E]/10">
                <button
                  type="button"
                  onClick={() => handleEnquireService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#173B5E] hover:text-[#0B1E34] font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
                >
                  <span className="border-b border-[#E2B155] pb-0.5">Enquire on this service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E2B155]" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
