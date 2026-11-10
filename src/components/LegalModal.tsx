import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ title, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1E34]/80 backdrop-blur-xs"
    >
      <div
        className="bg-[#0B1E34] border border-[#E2B155]/40 text-[#F6F4EF] w-full max-w-md p-8 relative shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 text-[#A9BBD0] hover:text-[#E2B155] transition-colors p-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 id="legal-dialog-title" className="font-serif text-2xl text-[#F6F4EF] font-normal mb-4">
          {title}
        </h3>

        <div className="w-8 h-[1px] bg-[#E2B155] mb-6" />

        <p className="text-sm text-[#A9BBD0] font-light leading-relaxed mb-6">
          This page is being finalised.
        </p>

        <div className="text-right">
          <button
            type="button"
            onClick={onClose}
            className="bg-[#E2B155] text-[#0B1E34] px-5 py-2 text-xs uppercase tracking-wider font-semibold cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
