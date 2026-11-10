import React from 'react';
import { WHO_WE_ARE_PRINCIPLES } from '../data/kolkataData';

export const WhoWeAre: React.FC = () => {
  return (
    <section
      id="who-we-are"
      aria-labelledby="who-we-are-heading"
      className="py-28 lg:py-36 bg-[#F6F4EF] text-[#0B1E34]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Founding Philosophy, Vision & Mission (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-[0.2em] text-[#173B5E]/70 font-semibold mb-3">
              Who we are
            </p>
            <h2
              id="who-we-are-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B1E34] font-normal leading-[1.18] tracking-tight text-balance"
            >
              Property advice without pressure, grounded in Kolkata.
            </h2>
            <div className="w-12 h-[1px] bg-[#E2B155] my-6" />

            <p className="text-base sm:text-lg text-[#173B5E] font-light leading-relaxed mb-10">
              Property decisions should be made with clarity, not pressure. Kingsley was founded on a simple idea: anyone buying, selling or leasing a property deserves independent, informed counsel, and the freedom to decide in their own time.
            </p>

            {/* Vision & Mission: Clean & Quiet */}
            <div className="space-y-6 pt-6 border-t border-[#173B5E]/15">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#173B5E]/70 font-semibold block mb-1">
                  Our Vision
                </span>
                <p className="font-serif text-lg text-[#0B1E34] font-normal leading-snug">
                  To be Kolkata’s most trusted property consultancy, where every decision about space is guided by insight rather than influence.
                </p>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#173B5E]/70 font-semibold block mb-1">
                  Our Mission
                </span>
                <p className="text-sm text-[#173B5E]/85 font-light leading-relaxed">
                  To advise businesses, owners, investors and families through every property decision, from the first requirement to the final handover, with honest consultation, rigorous market knowledge and complete transparency.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Principles as an Unboxed Editorial List (7 Cols) */}
          <div className="lg:col-span-7 lg:pl-6">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#173B5E]/70 font-semibold mb-2">
                Our Approach
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1E34] font-normal">
                Consultation, not persuasion
              </h3>
              <p className="text-sm text-[#173B5E]/75 mt-1 font-light">
                Five guiding principles that define every mandate we undertake.
              </p>
            </div>

            {/* Editorial List with fine hairlines, generous spacing, NO boxy cards */}
            <div className="divide-y divide-[#173B5E]/15 border-t border-b border-[#173B5E]/15">
              {WHO_WE_ARE_PRINCIPLES.map((principle, index) => (
                <div
                  key={principle.title}
                  className="py-7 first:pt-6 last:pb-6 group transition-colors"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-xs sm:text-sm text-[#E2B155] font-medium shrink-0">
                      0{index + 1}
                    </span>
                    <div>
                      <h4 className="font-serif text-xl sm:text-2xl text-[#0B1E34] font-normal leading-snug mb-2 group-hover:text-[#173B5E] transition-colors">
                        {principle.title}
                      </h4>
                      <p className="text-sm sm:text-base text-[#173B5E]/85 font-light leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
