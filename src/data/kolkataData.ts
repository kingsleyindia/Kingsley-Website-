import { MarketZone, ServiceItem } from '../types';

export const MARKET_ZONES: MarketZone[] = [
  {
    id: 'sector-v',
    name: 'Sector V',
    tagline: 'Enterprise technology & grade-A commercial real estate',
    overview: 'Sector V represents Kolkata’s primary concentration of technology campuses, business process centers, and institutional office developments. Developed specifically for corporate density, it offers large floorplates and round-the-clock infrastructure.',
    character: 'Modern corporate towers, dedicated IT/ITeS parks, enterprise data infrastructure, and direct metro accessibility.',
    suitability: 'National & international corporate occupiers, technology firms, research facilities, and institutional investors.',
    coordinates: { x: 570, y: 220 },
  },
  {
    id: 'new-town-rajarhat',
    name: 'New Town and Rajarhat',
    tagline: 'Planned metropolitan expansion & mixed-use developments',
    overview: 'Designed with wide arterial boulevards, eco-parks, and distinct commercial Action Areas, New Town is Kolkata’s premier planned development zone, extending directly toward the international airport.',
    character: 'Large-scale integrated townships, financial hub developments, hospitality clusters, and educational institutions.',
    suitability: 'Global corporate campuses, back-office operations, logistics hubs near airport links, and contemporary residential acquisitions.',
    coordinates: { x: 620, y: 140 },
  },
  {
    id: 'salt-lake',
    name: 'Salt Lake',
    tagline: 'Established township with institutional & mid-scale commerce',
    overview: 'Bidhannagar (Salt Lake) offers a balanced ecosystem of residential sectors, government directorates, retail clusters, and commercial buildings adjacent to the EM Bypass and Sector V.',
    character: 'Sectoral grid layout, low to mid-density commercial spaces, boutique corporate offices, and central civic amenities.',
    suitability: 'Regional offices, healthcare administrative centers, boutique consultancies, and established residential requirements.',
    coordinates: { x: 480, y: 210 },
  },
  {
    id: 'park-street-cbd',
    name: 'Park Street, Camac Street and the CBD',
    tagline: 'The historic financial core & premier high-street retail',
    overview: 'Comprising Park Street, Camac Street, Theatre Road (Shakespeare Sarani), and Russell Street, this district remains the prestigious address for corporate flagships, private wealth management, and premier retail flagships.',
    character: 'High-density commercial avenues, legacy corporate headquarters, prominent shopping destinations, and institutional dining corridors.',
    suitability: 'Corporate boardrooms, luxury consumer brands, legal practices, banking headquarters, and flagship retail presence.',
    coordinates: { x: 380, y: 340 },
  },
  {
    id: 'em-bypass',
    name: 'EM Bypass',
    tagline: 'North-south transit spine & high-growth commercial corridor',
    overview: 'Eastern Metropolitan Bypass connects northern growth corridors with South Kolkata. The corridor has evolved into a favored destination for tertiary healthcare, five-star hospitality, and luxury condominium towers.',
    character: 'Rapid highway connectivity, prominent hospitality landmarks, major medical clusters, and premium high-rise developments.',
    suitability: 'Hospitality operators, healthcare institutions, car showrooms, and high-net-worth residential purchasers.',
    coordinates: { x: 520, y: 380 },
  },
  {
    id: 'bbd-bag',
    name: 'BBD Bag and Dalhousie',
    tagline: 'Administrative heritage & central mercantile district',
    overview: 'Surrounding Lal Dighi, BBD Bag (formerly Dalhousie Square) is the administrative heart of the government of West Bengal and the traditional seat of banking, trading corporations, and shipping agencies.',
    character: 'Grand colonial architecture, government secretariats, proximity to the High Court, and central mercantile chambers.',
    suitability: 'Government liaison bureaus, maritime agencies, legal chambers, financial traders, and heritage asset stewardship.',
    coordinates: { x: 320, y: 280 },
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'occupier-representation',
    title: 'Occupier representation',
    description: 'Finding and negotiating office, retail or warehouse space for businesses.',
    detail: 'We evaluate operational parameters, commute patterns, building specifications, and commercial leases to secure terms that safeguard flexibility and cost certainty.',
  },
  {
    id: 'landlord-owner-advisory',
    title: 'Landlord and owner advisory',
    description: 'Leasing out or selling a property with strategic market positioning.',
    detail: 'We assist property owners in determining accurate market pricing, structuring tenant covenants, and securing reliable occupiers without distressed discounts.',
  },
  {
    id: 'investment-advisory',
    title: 'Investment advisory',
    description: 'Helping investors build or review a property portfolio.',
    detail: 'Rigorous yield analysis, capital growth projections, entry timing, and risk profiling across commercial assets and premier residential holdings in Kolkata.',
  },
  {
    id: 'residential-advisory',
    title: 'Residential advisory',
    description: 'Buying and selling homes with discreet, independent counsel.',
    detail: 'Guiding homebuyers and sellers through high-value residential acquisitions and divestments, focused entirely on freehold titles, quality of build, and lifestyle suitability.',
  },
  {
    id: 'retail-brand-expansion',
    title: 'Retail brand expansion',
    description: 'Site selection for brands entering or growing in Kolkata.',
    detail: 'Data-informed high-street and mall location assessments, footfall evaluations, frontage analysis, and lease structuring tailored to retail unit economics.',
  },
  {
    id: 'property-portfolio-management',
    title: 'Property and portfolio management',
    description: 'Operational stewardship and lease administration for property owners.',
    detail: 'Monitoring critical dates, escalation timelines, tenant correspondence, and asset maintenance coordination to preserve long-term capital value.',
  },
  {
    id: 'valuation-due-diligence',
    title: 'Valuation, due diligence and legal coordination',
    description: 'Independent transaction diligence and documentation alignment.',
    detail: 'Coordinating physical asset reviews, sanction plan verifications, municipal title vetting, and legal documentation with certified specialists prior to commitment.',
  },
];

export const WHO_WE_ARE_PRINCIPLES = [
  {
    title: 'Requirement first',
    description: 'We begin with your objectives, not our inventory. We have no bias toward specific buildings or landlords.',
  },
  {
    title: 'No pressure, ever',
    description: 'We present options, trade-offs and facts, and the decision stays with you. There are no artificial deadlines or sales tactics.',
  },
  {
    title: 'Precision in every recommendation',
    description: 'Micro-market, building, terms and timing are assessed before we advise. Every recommendation is grounded in verifiable spatial facts.',
  },
  {
    title: 'Kolkata depth',
    description: 'Local knowledge from Sector V to the CBD to the highway corridors. We understand the physical and commercial realities of each pocket.',
  },
  {
    title: 'Integrity',
    description: 'If a deal isn’t right for you, we will say so plainly. We value the clarity of our advice above the completion of an unsuitable transaction.',
  },
];

export const WORK_PROCESS_STEPS = [
  {
    number: '01',
    name: 'Requirement',
    description: 'We take time to understand your operational parameters, spatial criteria, and commercial horizon before looking at the market.',
  },
  {
    number: '02',
    name: 'Shortlist',
    description: 'We screen Kolkata’s inventory against your specific criteria, presenting an unvarnished review of viable options and trade-offs.',
  },
  {
    number: '03',
    name: 'Negotiation',
    description: 'We represent your interests across commercial terms, escalation clauses, fit-out periods, and handover milestones.',
  },
  {
    number: '04',
    name: 'Closure',
    description: 'We coordinate documentation, legal alignment, and handover protocols through to smooth operational occupation.',
  },
];

export const LOCATION_OPTIONS = [
  'Sector V',
  'New Town and Rajarhat',
  'Salt Lake',
  'Park Street and CBD',
  'EM Bypass',
  'BBD Bag',
  'Anywhere in Kolkata',
];
