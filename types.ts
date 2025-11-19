import { LucideIcon } from 'lucide-react';

export interface NavLink {
  name: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  featured?: boolean;
}

export interface ReleaseItem {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
}

export interface PromoItem {
  id: string;
  title: string;
  description: string;
  color: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}