import { 
  Code2, 
  Bot, 
  Globe, 
  Box, 
  Palette, 
  Wrench 
} from 'lucide-react';
import { NavLink, ServiceItem, ReleaseItem, PromoItem, TestimonialItem, StepItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Pricing', href: '#pricing' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'fivem',
    title: 'FiveM Development',
    description: 'Scripts, custom systems, optimization, fixes, and server solutions.',
    icon: Code2,
    href: '#',
    featured: true
  },
  {
    id: 'bots',
    title: 'Discord Bots',
    description: 'Custom bot development for communities, workflows, and FiveM integrations.',
    icon: Bot,
    href: '#'
  },
  {
    id: 'web',
    title: 'Web & App Dev',
    description: 'Websites, dashboards, automation tools, and custom applications.',
    icon: Globe,
    href: '#'
  },
  {
    id: '3d',
    title: 'MLOs & 3D Models',
    description: 'Custom interiors, props, shells, and 3D assets for any use case.',
    icon: Box,
    href: '#'
  },
  {
    id: 'creative',
    title: 'Creative Services',
    description: 'Branding, trailers, editing and promotional visuals.',
    icon: Palette,
    href: '#'
  },
  {
    id: 'tools',
    title: 'Tools & Products',
    description: 'Ready-made bots, utilities, apps and standalone tools.',
    icon: Wrench,
    href: '#'
  }
];

export const RELEASES: ReleaseItem[] = [
  {
    id: '1',
    title: 'Nexus Admin Panel',
    category: 'Web Application',
    image: 'https://picsum.photos/seed/nexus/800/600',
    href: '#'
  },
  {
    id: '2',
    title: 'Project: VANGUARD',
    category: 'FiveM Anti-Cheat',
    image: 'https://picsum.photos/seed/vanguard/800/600',
    href: '#'
  },
  {
    id: '3',
    title: 'Aether HUD System',
    category: 'UI Design',
    image: 'https://picsum.photos/seed/aether/800/600',
    href: '#'
  }
];

export const PROMOS: PromoItem[] = [
  {
    id: 'opt',
    title: 'Script Optimization',
    description: 'Boost server FPS with code refactoring.',
    color: 'border-electric-blue'
  },
  {
    id: 'brand',
    title: 'Brand Kits',
    description: 'Full visual identity for your community.',
    color: 'border-cyber-purple'
  },
  {
    id: 'vid',
    title: 'Trailer Editing',
    description: 'Cinematic teasers for your next update.',
    color: 'border-acid-green'
  }
];

export const STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Join & Ticket',
    description: 'Join our Discord and open a ticket to discuss your needs.'
  },
  {
    number: '02',
    title: 'Scope & Quote',
    description: 'We analyze requirements and provide a transparent quote.'
  },
  {
    number: '03',
    title: 'Delivery',
    description: 'We build, test, and deliver your product with support.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    quote: "The quality of the FiveM scripts is unmatched. Optimized and bug-free.",
    author: "Alex R.",
    role: "Server Owner"
  },
  {
    id: 't2',
    quote: "ERRORHUB delivered our custom dashboard ahead of schedule. Incredible UI.",
    author: "Sarah K.",
    role: "Community Manager"
  },
  {
    id: 't3',
    quote: "Best branding service we've used. The new logo really pops.",
    author: "Marcus D.",
    role: "Content Creator"
  }
];
