import React, { useState, useEffect } from 'react';
import { SERVICES, LOCATION_OPTIONS } from '../data/kolkataData';
import { AudienceType } from '../types';
import { CheckCircle2, MessageSquare, Mail } from 'lucide-react';

interface EnquirySectionProps {
  preselectedService?: string;
  preselectedArea?: string;
  preselectedAudience?: string;
}

const AUDIENCE_OPTIONS: { label: string; value: AudienceType }[] = [
  { label: 'Occupier (Business looking for space)', value: 'occupier' },
  { label: 'Landlord or Owner (Looking to lease or sell)', value: 'landlord or owner' },
  { label: 'Investor (Seeking commercial or residential assets)', value: 'investor' },
  { label: 'Home Buyer or Seller', value: 'home buyer or seller' },
];

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  preselectedService,
  preselectedArea,
  preselectedAudience,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [audience, setAudience] = useState<AudienceType>('occupier');
  const [service, setService] = useState<string>(SERVICES[0].title);
  const [preferredArea, setPreferredArea] = useState<string>(LOCATION_OPTIONS[0]);
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Sync external preselected props if changed
  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedArea) {
      const match = LOCATION_OPTIONS.find((loc) =>
        preselectedArea.toLowerCase().includes(loc.toLowerCase()) || loc.toLowerCase().includes(preselectedArea.toLowerCase())
      );
      if (match) {
        setPreferredArea(match);
      } else {
        setPreferredArea(preselectedArea);
      }
    }
  }, [preselectedArea]);

  useEffect(() => {
    if (preselectedAudience) {
      const match = AUDIENCE_OPTIONS.find((aud) => aud.value === preselectedAudience);
      if (match) {
        setAudience(match.value);
      }
    }
  }, [preselectedAudience]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!name.trim()) {
      errs.name = 'Please provide your name.';
    }

    const cleanPhone = phone.replace(/[\s\-\(\)\+]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please provide a valid 10-digit telephone number.';
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const lines = [
      `Hello Kingsley,`,
      `I would like to submit a property requirement:`,
      `• Name: ${name.trim()}`,
      `• Phone: ${phone.trim()}`,
      email.trim() ? `• Email: ${email.trim()}` : null,
      `• Profile: ${audience}`,
      `• Service: ${service}`,
      `• Preferred Area: ${preferredArea}`,
      message.trim() ? `• Notes: ${message.trim()}` : null,
    ].filter(Boolean);

    const fullMessage = lines.join('\n');
    const waUrl = `https://wa.me/918240492106?text=${encodeURIComponent(fullMessage)}`;

    setSubmitted(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="enquire"
      aria-labelledby="enquire-heading"
      className="py-28 lg:py-36 bg-[#F6F4EF] text-[#0B1E34]"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#173B5E]/70 font-semibold mb-3">
            Enquire
          </p>
          <h2
            id="enquire-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B1E34] font-normal leading-tight tracking-tight"
          >
            Begin a quiet conversation.
          </h2>
          <div className="w-12 h-[1px] bg-[#E2B155] mx-auto my-5" />
          <p className="text-sm sm:text-base text-[#173B5E] font-light leading-relaxed">
            Share the essentials of your property requirement. We will review your parameters and respond with clear, factual options.
          </p>
        </div>

        {/* Confirmation banner */}
        {submitted && (
          <div
            role="status"
            className="mb-8 p-4 bg-[#173B5E] text-[#F6F4EF] border border-[#E2B155]/40 flex items-center justify-center gap-3 text-sm"
          >
            <CheckCircle2 className="w-5 h-5 text-[#E2B155]" />
            <span>Opening WhatsApp with your enquiry. You can also write directly to enquiry@kingsleyindia.in.</span>
          </div>
        )}

        {/* Refined Form Container */}
        <div className="bg-white p-7 sm:p-10 border border-[#173B5E]/15 shadow-sm">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label htmlFor="enquiry-name" className="block text-xs text-[#173B5E] font-medium tracking-wide mb-1.5">
                  Your Name <span className="text-[#173B5E]">*</span>
                </label>
                <input
                  id="enquiry-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                  }}
                  placeholder="e.g. Anirban Roy"
                  className={`w-full bg-[#F6F4EF]/40 text-[#0B1E34] text-sm py-2.5 px-3.5 border ${
                    errors.name ? 'border-red-600' : 'border-[#173B5E]/20'
                  } focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2 transition-colors`}
                />
                {errors.name && <p className="text-xs text-red-700 mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="enquiry-phone" className="block text-xs text-[#173B5E] font-medium tracking-wide mb-1.5">
                  Phone Number <span className="text-[#173B5E]">*</span>
                </label>
                <input
                  id="enquiry-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                  }}
                  placeholder="e.g. +91 98300 00000"
                  className={`w-full bg-[#F6F4EF]/40 text-[#0B1E34] text-sm py-2.5 px-3.5 border ${
                    errors.phone ? 'border-red-600' : 'border-[#173B5E]/20'
                  } focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2 transition-colors`}
                />
                {errors.phone && <p className="text-xs text-red-700 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Email (Optional) */}
              <div>
                <label htmlFor="enquiry-email" className="block text-xs text-[#173B5E] font-medium tracking-wide mb-1.5">
                  Email Address <span className="text-[#173B5E]/60 text-[11px]">(Optional)</span>
                </label>
                <input
                  id="enquiry-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                  }}
                  placeholder="e.g. anirban@example.com"
                  className={`w-full bg-[#F6F4EF]/40 text-[#0B1E34] text-sm py-2.5 px-3.5 border ${
                    errors.email ? 'border-red-600' : 'border-[#173B5E]/20'
                  } focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2 transition-colors`}
                />
                {errors.email && <p className="text-xs text-red-700 mt-1">{errors.email}</p>}
              </div>

              {/* I am a */}
              <div>
                <label htmlFor="enquiry-audience" className="block text-xs text-[#173B5E] font-medium tracking-wide mb-1.5">
                  I am a
                </label>
                <select
                  id="enquiry-audience"
                  value={audience}
                  onChange={(e) => setAudience(e.target.value as AudienceType)}
                  className="w-full bg-[#F6F4EF]/40 text-[#0B1E34] text-sm py-2.5 px-3 border border-[#173B5E]/20 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2 cursor-pointer transition-colors"
                >
                  {AUDIENCE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Service */}
              <div>
                <label htmlFor="enquiry-service" className="block text-xs text-[#173B5E] font-medium tracking-wide mb-1.5">
                  Service of Interest
                </label>
                <select
                  id="enquiry-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#F6F4EF]/40 text-[#0B1E34] text-sm py-2.5 px-3 border border-[#173B5E]/20 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2 cursor-pointer transition-colors"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Area */}
              <div>
                <label htmlFor="enquiry-area" className="block text-xs text-[#173B5E] font-medium tracking-wide mb-1.5">
                  Preferred Kolkata Micro-market
                </label>
                <select
                  id="enquiry-area"
                  value={preferredArea}
                  onChange={(e) => setPreferredArea(e.target.value)}
                  className="w-full bg-[#F6F4EF]/40 text-[#0B1E34] text-sm py-2.5 px-3 border border-[#173B5E]/20 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2 cursor-pointer transition-colors"
                >
                  {LOCATION_OPTIONS.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="enquiry-message" className="block text-xs text-[#173B5E] font-medium tracking-wide mb-1.5">
                Brief Requirement Notes <span className="text-[#173B5E]/60 text-[11px]">(Optional)</span>
              </label>
              <textarea
                id="enquiry-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mention spatial size, target possession date, or specific commercial constraints..."
                className="w-full bg-[#F6F4EF]/40 text-[#0B1E34] text-sm py-2.5 px-3.5 border border-[#173B5E]/20 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2 resize-y transition-colors"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-3 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto min-w-[240px] bg-[#E2B155] text-[#0B1E34] py-3 px-8 text-xs uppercase tracking-wider font-semibold hover:bg-[#d8a445] transition-colors cursor-pointer shadow-md inline-flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Enquiry via WhatsApp</span>
              </button>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#173B5E]">
                <Mail className="w-3.5 h-3.5 text-[#E2B155]" />
                <span>Prefer email? </span>
                <a
                  href="mailto:enquiry@kingsleyindia.in"
                  className="font-medium underline hover:text-[#0B1E34] transition-colors focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
                >
                  enquiry@kingsleyindia.in
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
