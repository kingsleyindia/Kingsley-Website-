/**
 * Shared types for Kingsley Real Estate
 */

export interface KolkataPhoto {
  id: string;
  src: string;
  name: string;
  alt: string;
  qualitativeSummary: string;
  marketZoneId?: string;
}

export interface MarketZone {
  id: string;
  name: string;
  tagline: string;
  overview: string;
  character: string;
  suitability: string;
  coordinates: { x: number; y: number }; // SVG schematic coordinates
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  detail: string;
}

export interface RequirementSelection {
  intent: 'lease' | 'buy' | 'sell' | 'invest';
  propertyType: 'office' | 'retail space' | 'warehouse' | 'home' | 'other';
  location: string;
}

export type AudienceType =
  | 'occupier'
  | 'landlord or owner'
  | 'investor'
  | 'home buyer or seller';
