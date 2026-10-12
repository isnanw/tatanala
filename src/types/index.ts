import type { LucideIcon } from "lucide-react";

export type Pillar = "Hulu" | "Tengah" | "Hilir";

export interface NavLink {
  label: string;
  href: `#${string}`;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Service {
  id: string;
  pillar: Pillar;
  title: string;
  tag: string;
  shortDesc: string;
  longDesc: string;
  icon: LucideIcon;
  deliverables: string[];
  tech: string[];
  metric: Metric;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceSuffix: string;
  pillars: Pillar[];
  features: string[];
  recommended?: boolean;
  cta: string;
}

export interface TrustStat {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

export interface Industry {
  label: string;
  icon: LucideIcon;
}

export type MockupKind = "dashboard" | "website" | "growth";

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  mockup: MockupKind;
  before: string[];
  after: string[];
  metrics: Metric[];
}

export interface ProcessStep {
  title: string;
  duration: string;
  description: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ConsultTopic {
  id: string;
  label: string;
  message: string;
}
