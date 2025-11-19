import { 
  Code2, 
  Bot, 
  Globe, 
  Box, 
  Palette, 
  Sparkles,
  Zap,
  Rocket,
  ShieldCheck
} from 'lucide-react';
import { NavLink, ServiceItem, ReleaseItem, TestimonialItem, StepItem, HeroMessage } from './types';

export const HERO_MESSAGES: HeroMessage[] = [
  { icon: Sparkles, text: "V2.5 UPDATE LIVE" },
  { icon: Rocket, text: "NEW FIVEM SCRIPTS AVAILABLE" },
  { icon: ShieldCheck, text: "PROJECT: VANGUARD RELEASED" },
  { icon: Zap, text: "INSTANT DELIVERY SUPPORT" }
];

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#products' },
  { name: 'Contact', href: 'mailto:contact@errorhub.com' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'fivem',
    title: 'FiveM Development',
    description: 'Custom scripts, fixes, optimization, and server solutions.',
    icon: Code2,
    href: '#',
    featured: true
  },
  {
    id: 'bots',
    title: 'Discord Bot Development',
    description: 'Custom bots built for communities, workflows, and automation.',
    icon: Bot,
    href: '#'
  },
  {
    id: 'web',
    title: 'Website Development',
    description: 'Landing pages, server sites, and modern web experiences.',
    icon: Globe,
    href: '#'
  },
  {
    id: '3d',
    title: 'MLOs & 3D Assets',
    description: 'Custom interiors, props, signs, and server world assets.',
    icon: Box,
    href: '#'
  },
  {
    id: 'creative',
    title: 'Creative & Branding',
    description: 'Logos, banners, trailers, thumbnails, and server branding.',
    icon: Palette,
    href: '#'
  }
];

export const RELEASES: ReleaseItem[] = [
  {
    id: '1',
    title: 'Nexus Admin Panel',
    category: 'Web Application',
    description: 'A comprehensive administration dashboard for managing FiveM servers with real-time analytics, player management, and live logs.',
    image: 'https://picsum.photos/seed/nexus/1200/800',
    href: '#'
  },
  {
    id: '2',
    title: 'Project: VANGUARD',
    category: 'FiveM Anti-Cheat',
    description: 'Advanced server protection system utilizing heuristic analysis to detect and ban cheaters instantly.',
    image: 'https://picsum.photos/seed/vanguard/800/600',
    href: '#'
  },
  {
    id: '3',
    title: 'Aether HUD',
    category: 'User Interface',
    description: 'A clean, highly configurable HUD replacement with modern aesthetics and minimal performance impact.',
    image: 'https://picsum.photos/seed/aether/800/600',
    href: '#'
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

export const TICKER_ITEMS: string[] = [
  "FIVEM SCRIPTS",
  "DISCORD BOTS",
  "WEB DEVELOPMENT",
  "UI/UX DESIGN",
  "SERVER OPTIMIZATION",
  "CUSTOM ASSETS",
  "ANTICHEAT SYSTEMS",
  "24/7 SUPPORT"
];