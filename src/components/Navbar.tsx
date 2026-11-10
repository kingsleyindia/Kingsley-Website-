import React, { useState, useEffect } from 'react';
import { LOGO_WHITE_HERO } from '../assetsHero';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigateToEnquiry?: (service?: string, area?: string, audience?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToEnquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Who we are', href: '#who-we-are' },
    { label: 'Services', href: '#services' },
    { label: 'Kolkata Markets', href: '#kolkata-markets' },
    { label: 'How we work', href: '#how-we-work' },
  ];

  const handleEnquireClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateToEnquiry) {
      onNavigateToEnquiry();
    }
    const target = document.getElementById('enquire');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-[#0B1E34] ${
          scrolled ? 'border-b border-[#E2B155]/28 shadow-lg shadow-[#0B1E34]/50' : 'border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Brand Logo Zone */}
          <div className="flex items-center">
            <a
              href="#top"
              aria-label="Kingsley Real Estate Home"
              className="inline-block py-2 pr-4 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
            >
              {LOGO_WHITE_HERO ? (
                <img
                  src={LOGO_WHITE_HERO}
                  alt="Kingsley Real Estate"
                  className="w-40 sm:w-48 h-auto"
                />
              ) : (
                <span className="sr-only">Kingsley Real Estate</span>
              )}
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium tracking-wide text-[#F6F4EF]"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link-underline py-1 text-[#F6F4EF]/90 hover:text-[#F6F4EF] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Enquire Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleEnquireClick}
              className="bg-[#E2B155] text-[#0B1E34] px-6 py-2.5 text-xs uppercase tracking-wider font-semibold hover:-translate-y-0.5 transition-transform duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
            >
              Enquire
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F6F4EF] hover:text-[#E2B155] transition-colors focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-40 bg-[#0B1E34] flex flex-col justify-between p-8 pt-28 text-[#F6F4EF] transition-opacity duration-300 md:hidden overflow-y-auto"
        >
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-widest text-[#A9BBD0] border-b border-[#E2B155]/28 pb-3">
              Navigation
            </p>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl sm:text-3xl text-[#F6F4EF] hover:text-[#E2B155] transition-colors py-2 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-[#E2B155]/28 flex flex-col gap-4">
            <button
              onClick={handleEnquireClick}
              className="w-full bg-[#E2B155] text-[#0B1E34] py-3.5 text-center text-sm uppercase tracking-wider font-semibold hover:-translate-y-0.5 transition-transform duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
            >
              Enquire
            </button>
            <div className="text-xs text-[#A9BBD0] space-y-1">
              <p>Kingsley Property Consultants Pvt Ltd</p>
              <p>Sector V, Bidhannagar, Kolkata</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
