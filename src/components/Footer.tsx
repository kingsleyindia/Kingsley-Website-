import React, { useState } from 'react';
import { LOGO_WHITE } from '../assets';
import { LegalModal } from './LegalModal';
import { MapPin, Phone, Mail, MessageSquare, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalTitle, setModalTitle] = useState<string | null>(null);

  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=15th+Floor,+Aurora+Waterfront,+Unit+7,+Street+Number+27,+Bidhan+Nagar,+GN+Block,+Sector+V,+Bidhannagar,+West+Bengal+700091';

  return (
    <>
      <footer className="bg-[#0B1E34] text-[#F6F4EF] border-t border-[#E2B155]/28 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Top Brand & Tagline Row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-16 border-b border-[#E2B155]/20">
            {/* Logo Link to Top */}
            <div className="flex flex-col items-start max-w-md">
              <a
                href="#top"
                aria-label="Back to top of Kingsley Real Estate"
                className="inline-block mb-4 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
              >
                {LOGO_WHITE ? (
                  <img
                    src={LOGO_WHITE}
                    alt="Kingsley Property Consultants Pvt Ltd"
                    className="w-56 sm:w-64 h-auto"
                  />
                ) : (
                  <span className="sr-only">Kingsley Real Estate</span>
                )}
              </a>

              <p className="font-serif text-lg text-[#F6F4EF]/90 font-normal leading-relaxed mt-2">
                Portfolio · Precision. Property advice without pressure.
              </p>
              <p className="text-xs text-[#A9BBD0] mt-2 font-light">
                Kingsley Property Consultants Pvt Ltd
              </p>
            </div>

            {/* Back to Top Affordance */}
            <div>
              <a
                href="#top"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#A9BBD0] hover:text-[#E2B155] transition-colors py-2 px-3 border border-[#E2B155]/28 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Details & Coordinates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-[#E2B155]/20 text-xs text-[#A9BBD0]">
            {/* Col 1: Registered Office */}
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-widest text-[#E2B155] font-medium block">
                Office Location
              </span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2.5 text-[#F6F4EF]/90 hover:text-[#E2B155] transition-colors leading-relaxed focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
              >
                <MapPin className="w-4 h-4 text-[#E2B155] shrink-0 mt-0.5" />
                <span>
                  15th Floor, Aurora Waterfront, Unit 7, Street Number 27, Bidhan Nagar, GN Block, Sector V, Bidhannagar, West Bengal 700091
                </span>
              </a>
            </div>

            {/* Col 2: Direct Contact */}
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-widest text-[#E2B155] font-medium block">
                Direct Inquiries
              </span>
              <div className="space-y-2.5">
                <a
                  href="tel:+913366410528"
                  className="flex items-center gap-2.5 text-[#F6F4EF]/90 hover:text-[#E2B155] transition-colors focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
                >
                  <Phone className="w-4 h-4 text-[#E2B155] shrink-0" />
                  <span className="tabular-nums">033 6641 0528</span>
                </a>
                <a
                  href="https://wa.me/918240492106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#F6F4EF]/90 hover:text-[#E2B155] transition-colors focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#E2B155] shrink-0" />
                  <span className="tabular-nums">+91 82404 92106 (WhatsApp)</span>
                </a>
                <a
                  href="mailto:enquiry@kingsleyindia.in"
                  className="flex items-center gap-2.5 text-[#F6F4EF]/90 hover:text-[#E2B155] transition-colors focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
                >
                  <Mail className="w-4 h-4 text-[#E2B155] shrink-0" />
                  <span>enquiry@kingsleyindia.in</span>
                </a>
              </div>
            </div>

            {/* Col 3: Navigation Mirror */}
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-widest text-[#E2B155] font-medium block">
                Structure
              </span>
              <ul className="space-y-2">
                <li>
                  <a href="#who-we-are" className="hover:text-[#E2B155] transition-colors">
                    Who we are
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#E2B155] transition-colors">
                    Services & Disciplines
                  </a>
                </li>
                <li>
                  <a href="#kolkata-markets" className="hover:text-[#E2B155] transition-colors">
                    Kolkata Markets & Map
                  </a>
                </li>
                <li>
                  <a href="#how-we-work" className="hover:text-[#E2B155] transition-colors">
                    How we work
                  </a>
                </li>
                <li>
                  <a href="#enquire" className="hover:text-[#E2B155] transition-colors">
                    Enquire
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Corporate Registration */}
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-widest text-[#E2B155] font-medium block">
                Corporate Entity
              </span>
              <p className="text-[#F6F4EF]/90 font-medium">
                Kingsley Property Consultants Pvt Ltd
              </p>
              <p className="text-[11px] leading-relaxed">
                Incorporated under the Companies Act in West Bengal, India.
              </p>
              <p className="font-mono text-[11px] text-[#A9BBD0] pt-1">
                CIN: U68200WR2026PTC297190
              </p>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal Dialog Triggers */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A9BBD0]/80">
            <p>© 2026 Kingsley Property Consultants Pvt Ltd. All rights reserved.</p>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setModalTitle('Privacy Policy')}
                className="hover:text-[#E2B155] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
              >
                Privacy Policy
              </button>
              <span className="text-[#E2B155]/30">·</span>
              <button
                type="button"
                onClick={() => setModalTitle('Terms of Engagement')}
                className="hover:text-[#E2B155] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
              >
                Terms
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Dialog */}
      <LegalModal
        title={modalTitle || ''}
        isOpen={modalTitle !== null}
        onClose={() => setModalTitle(null)}
      />
    </>
  );
};
