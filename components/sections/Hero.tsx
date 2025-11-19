import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Button from '../ui/Button';
import RotatingText from '../ui/RotatingText';
import { HERO_MESSAGES } from '../../data';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-electric-blue/20 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-cyber-purple/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Dynamic Rotating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 min-w-[180px]"
          >
            <RotatingText items={HERO_MESSAGES} />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter text-white leading-[1.1] mb-6"
          >
            A MODERN DIGITAL STUDIO <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-600">CRAFTING EXPERIENCES</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 font-light leading-relaxed"
          >
            We build custom discord bots, web experiences and optimized FiveM systems — all under one studio.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button variant="primary" size="lg" icon={<ArrowRight size={20} />}>
              Browse Releases
            </Button>
            <Button variant="secondary" size="lg" icon={<ExternalLink size={20} />}>
              Join Discord
            </Button>
          </motion.div>

          {/* Micro Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-6 text-sm font-mono text-gray-500"
          >
            <a href="#" className="hover:text-white transition-colors">Request Quote</a>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <a href="#" className="hover:text-white transition-colors">View Portfolio</a>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <a href="#" className="hover:text-white transition-colors">See Status</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;