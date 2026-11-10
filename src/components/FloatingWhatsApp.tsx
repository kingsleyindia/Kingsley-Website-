import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const message = 'Hello Kingsley, I would like to discuss a property requirement.';
  const waUrl = `https://wa.me/918240492106?text=${encodeURIComponent(message)}`;

  return (
    <aside
      aria-label="Direct WhatsApp contact"
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Kingsley via WhatsApp"
        className="flex items-center gap-2.5 bg-[#E2B155] text-[#0B1E34] px-4 py-3 rounded-none shadow-xl hover:-translate-y-1 transition-transform duration-200 cursor-pointer border border-[#0B1E34]/20 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2 group"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-semibold tracking-wider uppercase hidden sm:inline whitespace-nowrap">
          WhatsApp Kingsley
        </span>
      </a>
    </aside>
  );
};
