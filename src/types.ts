export type Language = 'en' | 'bn';

export interface NicheInfo {
  id: string;
  name: { en: string; bn: string };
  icon: string;
  description: { en: string; bn: string };
  avgCpaReduction: string;
  leadTypes: { en: string; bn: string };
  keyStrategy: { en: string; bn: string };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: { en: string; bn: string };
  tagline: { en: string; bn: string };
  description: { en: string; bn: string };
  deliverables: { en: string[]; bn: string[] };
  impactMetric: string;
  impactLabel: { en: string; bn: string };
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: { en: string; bn: string };
  location: string;
  heroMetric: string;
  heroMetricLabel: { en: string; bn: string };
  beforeState: { en: string; bn: string };
  afterState: { en: string; bn: string };
  strategy: { en: string; bn: string };
  trackingStack: string[];
  quote: { en: string; bn: string };
  author: string;
  role: string;
}

export interface FaqItem {
  id: string;
  category: 'strategy' | 'tracking' | 'budget' | 'local';
  categoryLabel: { en: string; bn: string };
  question: { en: string; bn: string };
  directAnswer: { en: string; bn: string };
  bulletPoints: { en: string[]; bn: string[] };
}
