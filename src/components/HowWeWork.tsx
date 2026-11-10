import React, { useEffect, useRef, useState } from 'react';
import { WORK_PROCESS_STEPS } from '../data/kolkataData';

export const HowWeWork: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-we-work"
      ref={sectionRef}
      aria-labelledby="how-we-work-heading"
      className="py-28 lg:py-36 bg-[#F6F4EF] text-[#0B1E34]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#173B5E]/70 font-semibold mb-3">
            How we work
          </p>
          <h2
            id="how-we-work-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B1E34] font-normal leading-tight tracking-tight text-balance"
          >
            A disciplined four-phase consultation process.
          </h2>
          <div className="w-12 h-[1px] bg-[#E2B155] my-6" />
          <p className="text-base sm:text-lg text-[#173B5E] font-light leading-relaxed">
            Every mandate proceeds through four structured milestones designed to protect your interests, eliminate surprises, and ensure measured decision-making.
          </p>
        </div>

        {/* Four Steps with Minimalist Connector */}
        <div className="relative">
          {/* Subtle Desktop Connecting Guide Line */}
          <div className="hidden lg:block absolute top-[20px] left-[4%] right-[4%] h-[1px] bg-[#173B5E]/15 -z-0">
            <div
              className={`h-full bg-[#E2B155] transition-all duration-1000 ease-out ${
                inView ? 'w-full' : 'w-0'
              }`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 relative z-10">
            {WORK_PROCESS_STEPS.map((step) => (
              <div
                key={step.name}
                className="bg-white/60 p-6 sm:p-7 border border-[#173B5E]/10 flex flex-col justify-between hover:bg-white hover:border-[#173B5E]/25 transition-all duration-300"
              >
                <div>
                  <span className="font-mono text-xs sm:text-sm text-[#E2B155] font-semibold mb-3 block">
                    {step.number}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#0B1E34] font-normal mb-2.5">
                    {step.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#173B5E]/80 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
