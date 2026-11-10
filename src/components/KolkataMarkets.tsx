import React, { useState } from 'react';
import { SKYLINE } from '../assets';
import { MARKET_ZONES } from '../data/kolkataData';
import { MarketZone } from '../types';
import { Calculator, ArrowUpRight, MapPin, TrendingUp, Info } from 'lucide-react';

interface KolkataMarketsProps {
  onSelectArea: (areaName: string) => void;
}

export const KolkataMarkets: React.FC<KolkataMarketsProps> = ({ onSelectArea }) => {
  const [selectedZone, setSelectedZone] = useState<MarketZone>(MARKET_ZONES[0]);
  const [activeCalcTab, setActiveCalcTab] = useState<'lease' | 'yield'>('lease');

  // Lease Calculator State
  const [area, setArea] = useState<number>(3500);
  const [ratePerSqFt, setRatePerSqFt] = useState<number>(75);
  const [depositMonths, setDepositMonths] = useState<number>(6);
  const [escalationRate, setEscalationRate] = useState<number>(5);
  const [termYears, setTermYears] = useState<number>(5);

  // Rent vs Buy Yield Calculator State
  const [assetPrice, setAssetPrice] = useState<number>(25000000); // 2.5 Crore
  const [monthlyRentValue, setMonthlyRentValue] = useState<number>(125000); // 1.25 Lakh
  const [holdingCostsPercent, setHoldingCostsPercent] = useState<number>(1.2);

  // Indian Number Formatter
  const formatINR = (val: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(Math.round(val));
  };

  // Calculations for Lease
  const validArea = Math.max(0, area || 0);
  const validRate = Math.max(0, ratePerSqFt || 0);
  const validTerm = Math.max(1, termYears || 1);
  const validEscalation = Math.max(0, escalationRate || 0);

  const yearOneMonthly = validArea * validRate;
  const yearOneRent = yearOneMonthly * 12;
  const depositLockedIn = yearOneMonthly * Math.max(0, depositMonths || 0);

  let totalRentOverTerm = 0;
  for (let y = 0; y < validTerm; y++) {
    const currentYearAnnual = yearOneRent * Math.pow(1 + validEscalation / 100, y);
    totalRentOverTerm += currentYearAnnual;
  }
  const averageMonthlyCost = totalRentOverTerm / (validTerm * 12);

  // Calculations for Rent vs Buy Yield
  const validPrice = Math.max(1, assetPrice || 1);
  const validMonthlyRent = Math.max(0, monthlyRentValue || 0);
  const annualRent = validMonthlyRent * 12;
  const grossYield = (annualRent / validPrice) * 100;
  const netYield = Math.max(0, grossYield - Math.max(0, holdingCostsPercent || 0));
  const yearsToEqualPrice = annualRent > 0 ? validPrice / annualRent : 0;

  const handleEnquireZone = (zoneName: string) => {
    onSelectArea(zoneName);
    const enquirySection = document.getElementById('enquire');
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="kolkata-markets"
      aria-labelledby="kolkata-markets-heading"
      className="py-24 lg:py-32 bg-[#173B5E] text-[#F6F4EF]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#E2B155] font-semibold mb-3">
            Kolkata Markets
          </p>
          <h2
            id="kolkata-markets-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F6F4EF] font-normal leading-tight tracking-tight text-balance"
          >
            Spatial intelligence across the metropolis.
          </h2>
          <div className="w-12 h-[1px] bg-[#E2B155] my-6" />
          <p className="text-base sm:text-lg text-[#A9BBD0] font-light leading-relaxed">
            Analytical tools, geographic micro-market zoning, and objective property evaluation models built specifically for Kolkata’s commercial landscape.
          </p>
        </div>

        {/* Part A: Skyline Panorama Band */}
        {SKYLINE ? (
          <div className="relative w-full overflow-hidden mb-16 border border-[#E2B155]/20 bg-[#0B1E34]">
            <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#0B1E34] to-transparent z-10 pointer-events-none" />
            <div className="w-full overflow-x-hidden">
              <img
                src={SKYLINE}
                alt="Kolkata Skyline Panorama"
                className="w-full h-auto min-w-[1000px] animate-skyline-drift"
              />
            </div>
            <div className="absolute bottom-2 right-4 z-10 text-[10px] uppercase tracking-widest text-[#A9BBD0]/60">
              Kolkata Horizon
            </div>
          </div>
        ) : null}

        {/* Part B: Schematic Micro-Market Map & Zone Profile */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <h3 className="font-serif text-2xl text-[#F6F4EF] font-normal">
              Schematic Micro-Market Overview
            </h3>
            <span className="text-xs text-[#A9BBD0]">
              Indicative overview · Detailed market data on request
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* SVG Schematic Map (Cols 1-7) */}
            <div className="lg:col-span-7 bg-[#0B1E34]/80 border border-[#E2B155]/25 p-5 sm:p-6 relative select-none flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3 border-b border-[#E2B155]/15 pb-2.5">
                <span className="text-xs uppercase tracking-wider text-[#E2B155] font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Interactive Market Map
                </span>
                <span className="text-[11px] text-[#A9BBD0]">Click any zone to inspect</span>
              </div>

              {/* Stylized Schematic SVG */}
              <div className="relative w-full aspect-[4/3] max-h-[440px]">
                <svg
                  viewBox="0 0 800 500"
                  className="w-full h-full"
                  role="region"
                  aria-label="Schematic map of Kolkata property zones"
                >
                  <defs>
                    <radialGradient id="zoneGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#E2B155" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#E2B155" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Hooghly River representation */}
                  <path
                    d="M 230 0 Q 250 150 240 240 T 210 380 Q 190 440 220 500"
                    fill="none"
                    stroke="#1E4872"
                    strokeWidth="26"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                  <text x="210" y="470" fill="#A9BBD0" opacity="0.4" fontSize="11" fontFamily="Montserrat">
                    Hooghly River
                  </text>

                  {/* EM Bypass Corridor */}
                  <path
                    d="M 580 80 Q 510 240 480 340 T 430 500"
                    fill="none"
                    stroke="#E2B155"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.25"
                  />

                  {/* Connecting Arteries */}
                  <line x1="240" y1="240" x2="380" y2="340" stroke="#E2B155" strokeWidth="1" opacity="0.15" />
                  <line x1="380" y1="340" x2="570" y2="220" stroke="#E2B155" strokeWidth="1" opacity="0.15" />
                  <line x1="570" y1="220" x2="620" y2="140" stroke="#E2B155" strokeWidth="1" opacity="0.15" />

                  {/* Render Zone Hotspots */}
                  {MARKET_ZONES.map((zone) => {
                    const isSelected = selectedZone.id === zone.id;
                    const isSectorV = zone.id === 'sector-v';

                    return (
                      <g
                        key={zone.id}
                        role="button"
                        tabIndex={0}
                        aria-pressed={isSelected}
                        aria-label={`Select ${zone.name} zone`}
                        onClick={() => setSelectedZone(zone)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            setSelectedZone(zone);
                          }
                        }}
                        className="cursor-pointer focus:outline-none"
                      >
                        {isSelected && (
                          <circle
                            cx={zone.coordinates.x}
                            cy={zone.coordinates.y}
                            r="28"
                            fill="url(#zoneGlow)"
                          />
                        )}

                        <circle
                          cx={zone.coordinates.x}
                          cy={zone.coordinates.y}
                          r={isSelected ? 9 : 6}
                          fill={isSelected ? '#E2B155' : '#1E4872'}
                          stroke={isSelected ? '#0B1E34' : '#E2B155'}
                          strokeWidth="2"
                          className="transition-all duration-200"
                        />

                        {/* Special gold crown pin for Kingsley Office at Sector V */}
                        {isSectorV && (
                          <g transform={`translate(${zone.coordinates.x - 10}, ${zone.coordinates.y - 28})`}>
                            <path
                              d="M 2 12 L 5 4 L 10 9 L 15 4 L 18 12 Z"
                              fill="#E2B155"
                              stroke="#0B1E34"
                              strokeWidth="1"
                            />
                            <rect x="2" y="12" width="16" height="2" fill="#E2B155" />
                          </g>
                        )}

                        <text
                          x={zone.coordinates.x}
                          y={zone.coordinates.y + (zone.coordinates.y > 400 ? -16 : 20)}
                          textAnchor="middle"
                          fill={isSelected ? '#F6F4EF' : '#A9BBD0'}
                          fontSize={isSelected ? '12' : '11'}
                          fontWeight={isSelected ? '600' : '400'}
                          fontFamily="Montserrat"
                          className="transition-colors pointer-events-none select-none"
                        >
                          {zone.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Kingsley Office Pin Indicator */}
                <div className="absolute bottom-2 left-2 flex items-center gap-2 bg-[#173B5E]/90 px-2.5 py-1 border border-[#E2B155]/25">
                  <div className="w-3 h-3 text-[#E2B155] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 18h20v2H2v-2zm1-2l3-10 6 6 6-6 3 10H3z" />
                    </svg>
                  </div>
                  <span className="text-[11px] text-[#F6F4EF] font-medium">
                    Office: Aurora Waterfront, Sector V
                  </span>
                </div>
              </div>
            </div>

            {/* Qualitative Profile Card for Selected Zone (Cols 8-12) */}
            <div className="lg:col-span-5 bg-[#0B1E34]/60 border border-[#E2B155]/25 p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#E2B155]/15 pb-3 mb-4">
                  <span className="text-xs uppercase tracking-wider text-[#E2B155] font-medium">
                    Zone Profile
                  </span>
                  <span className="text-[11px] font-mono text-[#A9BBD0]">
                    Kolkata Spatial Index
                  </span>
                </div>

                <h4 className="font-serif text-2xl sm:text-3xl text-[#F6F4EF] font-normal leading-snug mb-1">
                  {selectedZone.name}
                </h4>
                <p className="text-xs text-[#E2B155] font-medium tracking-wide mb-3">
                  {selectedZone.tagline}
                </p>

                <p className="text-sm text-[#F6F4EF]/85 font-light leading-relaxed mb-5">
                  {selectedZone.overview}
                </p>

                <div className="space-y-3 pt-3 border-t border-[#E2B155]/15 text-xs sm:text-sm">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#A9BBD0] block mb-0.5">
                      Spatial Character
                    </span>
                    <p className="text-[#F6F4EF]/90 font-light leading-relaxed">
                      {selectedZone.character}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#A9BBD0] block mb-0.5">
                      Ideal Suitability
                    </span>
                    <p className="text-[#F6F4EF]/90 font-light leading-relaxed">
                      {selectedZone.suitability}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2B155]/15">
                <button
                  type="button"
                  onClick={() => handleEnquireZone(selectedZone.name)}
                  className="w-full bg-[#E2B155] text-[#0B1E34] py-3 px-5 text-xs uppercase tracking-wider font-semibold hover:bg-[#d8a445] transition-colors cursor-pointer flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
                >
                  <span>Enquire about {selectedZone.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Part C: Unified, Sleek Financial Calculator (Cuts clutter in half!) */}
        <div className="mb-16">
          <div className="bg-[#0B1E34]/60 border border-[#E2B155]/25 p-6 sm:p-8">
            {/* Header & Clean Tab Toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2B155]/20 pb-5 mb-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#E2B155] font-medium mb-1">
                  Commercial Advisory Tools
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F4EF] font-normal">
                  Property Valuation & Cash Flow Modeling
                </h3>
              </div>

              {/* Segmented Control */}
              <div className="flex items-center gap-1 bg-[#173B5E] p-1 border border-[#E2B155]/25">
                <button
                  type="button"
                  onClick={() => setActiveCalcTab('lease')}
                  className={`px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#E2B155] ${
                    activeCalcTab === 'lease'
                      ? 'bg-[#E2B155] text-[#0B1E34] font-semibold'
                      : 'text-[#F6F4EF] hover:text-[#E2B155]'
                  }`}
                >
                  Commercial Lease Outflow
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCalcTab('yield')}
                  className={`px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#E2B155] ${
                    activeCalcTab === 'yield'
                      ? 'bg-[#E2B155] text-[#0B1E34] font-semibold'
                      : 'text-[#F6F4EF] hover:text-[#E2B155]'
                  }`}
                >
                  Acquisition Yield & Payback
                </button>
              </div>
            </div>

            {/* TAB 1: Commercial Lease Cost */}
            {activeCalcTab === 'lease' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Inputs (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 mb-2 text-[#E2B155]">
                    <Calculator className="w-4 h-4" />
                    <h4 className="font-serif text-xl text-[#F6F4EF] font-normal">
                      Multi-Year Lease Modeling
                    </h4>
                  </div>
                  <p className="text-xs text-[#A9BBD0] mb-6">
                    Project realistic multi-year occupancy cash flows including compound annual rent escalations and security deposit commitments.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    <div>
                      <label htmlFor="calc-area" className="text-xs text-[#A9BBD0] block mb-1">
                        Usable Area (sq ft)
                      </label>
                      <input
                        id="calc-area"
                        type="number"
                        min="100"
                        step="100"
                        value={area}
                        onChange={(e) => setArea(Number(e.target.value))}
                        className="w-full bg-[#173B5E] border border-[#E2B155]/25 text-[#F6F4EF] text-sm py-2 px-3 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2 tabular-nums"
                      />
                    </div>

                    <div>
                      <label htmlFor="calc-rent" className="text-xs text-[#A9BBD0] block mb-1">
                        Base Rent (₹ / sq ft / month)
                      </label>
                      <input
                        id="calc-rent"
                        type="number"
                        min="10"
                        step="5"
                        value={ratePerSqFt}
                        onChange={(e) => setRatePerSqFt(Number(e.target.value))}
                        className="w-full bg-[#173B5E] border border-[#E2B155]/25 text-[#F6F4EF] text-sm py-2 px-3 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2 tabular-nums"
                      />
                    </div>

                    <div>
                      <label htmlFor="calc-deposit" className="text-xs text-[#A9BBD0] block mb-1">
                        Security Deposit (months)
                      </label>
                      <input
                        id="calc-deposit"
                        type="number"
                        min="1"
                        max="24"
                        value={depositMonths}
                        onChange={(e) => setDepositMonths(Number(e.target.value))}
                        className="w-full bg-[#173B5E] border border-[#E2B155]/25 text-[#F6F4EF] text-sm py-2 px-3 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2 tabular-nums"
                      />
                    </div>

                    <div>
                      <label htmlFor="calc-escalation" className="text-xs text-[#A9BBD0] block mb-1">
                        Annual Escalation (%)
                      </label>
                      <input
                        id="calc-escalation"
                        type="number"
                        min="0"
                        max="20"
                        step="0.5"
                        value={escalationRate}
                        onChange={(e) => setEscalationRate(Number(e.target.value))}
                        className="w-full bg-[#173B5E] border border-[#E2B155]/25 text-[#F6F4EF] text-sm py-2 px-3 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2 tabular-nums"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="calc-term" className="text-xs text-[#A9BBD0] block mb-1">
                        Lease Term Commitment (years)
                      </label>
                      <input
                        id="calc-term"
                        type="number"
                        min="1"
                        max="15"
                        value={termYears}
                        onChange={(e) => setTermYears(Number(e.target.value))}
                        className="w-full bg-[#173B5E] border border-[#E2B155]/25 text-[#F6F4EF] text-sm py-2 px-3 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2 tabular-nums"
                      />
                    </div>
                  </div>
                </div>

                {/* Outputs (5 cols) */}
                <div className="lg:col-span-5 bg-[#173B5E]/90 border border-[#E2B155]/25 p-6 space-y-4">
                  <span className="text-[11px] uppercase tracking-wider text-[#E2B155] font-medium block border-b border-[#E2B155]/15 pb-2">
                    Projected Financial Impact
                  </span>

                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-[#A9BBD0]">Year-One Annual Rent</span>
                    <span className="font-medium text-[#F6F4EF] tabular-nums">
                      {formatINR(yearOneRent)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-[#A9BBD0]">Total Rent ({validTerm} Years)</span>
                    <span className="font-medium text-[#E2B155] tabular-nums text-base">
                      {formatINR(totalRentOverTerm)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-[#A9BBD0]">Security Deposit Locked</span>
                    <span className="font-medium text-[#F6F4EF] tabular-nums">
                      {formatINR(depositLockedIn)}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-[#E2B155]/15 flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-[#A9BBD0]">Average Monthly Outflow</span>
                    <span className="font-semibold text-[#F6F4EF] tabular-nums">
                      {formatINR(averageMonthlyCost)} / mo
                    </span>
                  </div>

                  <p className="text-[11px] text-[#A9BBD0]/60 italic pt-2">
                    Indicative model. Excludes CAM maintenance, GST, fit-out capitalisation, and stamp duty.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: Yield & Capitalization */}
            {activeCalcTab === 'yield' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Inputs (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 mb-2 text-[#E2B155]">
                    <TrendingUp className="w-4 h-4" />
                    <h4 className="font-serif text-xl text-[#F6F4EF] font-normal">
                      Income Yield & Payback Period
                    </h4>
                  </div>
                  <p className="text-xs text-[#A9BBD0] mb-6">
                    Analyze capital allocation efficiency, gross vs. net capitalization rates, and nominal payback duration.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    <div className="sm:col-span-2">
                      <label htmlFor="yield-price" className="text-xs text-[#A9BBD0] block mb-1">
                        Acquisition Price (₹)
                      </label>
                      <input
                        id="yield-price"
                        type="number"
                        min="100000"
                        step="100000"
                        value={assetPrice}
                        onChange={(e) => setAssetPrice(Number(e.target.value))}
                        className="w-full bg-[#173B5E] border border-[#E2B155]/25 text-[#F6F4EF] text-sm py-2 px-3 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2 tabular-nums"
                      />
                    </div>

                    <div>
                      <label htmlFor="yield-rent" className="text-xs text-[#A9BBD0] block mb-1">
                        Monthly Rental Income (₹)
                      </label>
                      <input
                        id="yield-rent"
                        type="number"
                        min="1000"
                        step="5000"
                        value={monthlyRentValue}
                        onChange={(e) => setMonthlyRentValue(Number(e.target.value))}
                        className="w-full bg-[#173B5E] border border-[#E2B155]/25 text-[#F6F4EF] text-sm py-2 px-3 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2 tabular-nums"
                      />
                    </div>

                    <div>
                      <label htmlFor="yield-holding" className="text-xs text-[#A9BBD0] block mb-1">
                        Annual Holding & Maintenance (%)
                      </label>
                      <input
                        id="yield-holding"
                        type="number"
                        min="0"
                        max="10"
                        step="0.1"
                        value={holdingCostsPercent}
                        onChange={(e) => setHoldingCostsPercent(Number(e.target.value))}
                        className="w-full bg-[#173B5E] border border-[#E2B155]/25 text-[#F6F4EF] text-sm py-2 px-3 focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2 tabular-nums"
                      />
                    </div>
                  </div>
                </div>

                {/* Outputs (5 cols) */}
                <div className="lg:col-span-5 bg-[#173B5E]/90 border border-[#E2B155]/25 p-6 space-y-4">
                  <span className="text-[11px] uppercase tracking-wider text-[#E2B155] font-medium block border-b border-[#E2B155]/15 pb-2">
                    Yield & Recovery Metrics
                  </span>

                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-[#A9BBD0]">Gross Rental Yield</span>
                    <span className="font-semibold text-[#E2B155] tabular-nums text-base">
                      {grossYield.toFixed(2)}%
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-[#A9BBD0]">Net Rental Yield (After Holding)</span>
                    <span className="font-medium text-[#F6F4EF] tabular-nums">
                      {netYield.toFixed(2)}%
                    </span>
                  </div>

                  <div className="pt-3 border-t border-[#E2B155]/15 flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-[#A9BBD0]">Years to Equal Purchase Price</span>
                    <span className="font-medium text-[#F6F4EF] tabular-nums">
                      {yearsToEqualPrice.toFixed(1)} years
                    </span>
                  </div>

                  <p className="text-[11px] text-[#A9BBD0]/60 italic pt-2">
                    Excludes leverage debt servicing, vacancy allowance, and potential long-term capital appreciation.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Part D: Research & Analytics Note: Minimalist & Clean */}
        <div className="border border-[#E2B155]/20 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-[#0B1E34]/40">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#E2B155] font-medium mb-1">
              <Info className="w-3.5 h-3.5" />
              <span>Research & Analytics</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#F6F4EF] font-normal mb-1.5">
              Kolkata market insights: coming soon
            </h4>
            <p className="text-xs sm:text-sm text-[#A9BBD0] font-light leading-relaxed">
              We publish empirical occupancy reports, micro-market rental indices, and structural infrastructure reviews as validated data becomes available. We do not publish speculative or unverifiable statistics.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleEnquireZone('Kolkata Market Research')}
            className="border border-[#E2B155] text-[#E2B155] hover:bg-[#E2B155] hover:text-[#0B1E34] px-5 py-2 text-xs uppercase tracking-wider font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap self-start md:self-auto focus-visible:outline-2 focus-visible:outline-[#E2B155] focus-visible:outline-offset-2"
          >
            Register for quarterly briefs
          </button>
        </div>
      </div>
    </section>
  );
};
