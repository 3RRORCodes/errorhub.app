
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Tag } from 'lucide-react';
import { RELEASES } from '../../data';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const Releases: React.FC = () => {
  // Slice to ensure max 3 items as per requirements
  const displayedReleases = RELEASES.slice(0, 3);
  const count = displayedReleases.length;

  return (
    <section id="products" className="py-32 relative z-10">
      {/* Decorative Background - Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl max-h-[800px] bg-electric-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none opacity-60" />

      <div className="container mx-auto px-6">
        {/* Header - Minimal */}
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-sans tracking-tight"
          >
            FEATURED RELEASES
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {displayedReleases.map((release, index) => {
            // Logic for Bento Spanning
            // If 3 items: First item spans 2 columns (Full width). Others span 1.
            // If 1 item: Spans 2 columns.
            // If 2 items: Span 1 each (Default).
            const isFullWidth = (count === 3 && index === 0) || count === 1;

            return (
              <motion.a
                key={release.id}
                href={release.href}
                variants={fadeInUp}
                className={`group relative flex flex-col rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden transition-all duration-500 hover:border-electric-blue/40 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)] ${
                  isFullWidth ? 'md:col-span-2' : 'md:col-span-1'
                }`}
              >
                {/* Image Area */}
                <div className={`relative overflow-hidden bg-charcoal ${isFullWidth ? 'aspect-[21/9] md:aspect-[2.4/1]' : 'aspect-[16/10]'}`}>
                  {/* Hover Overlay & Blended Redirect Icon */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-20 opacity-90" />
                  
                  {/* Blended Redirect Visual */}
                  <div className="absolute top-6 right-6 z-30 opacity-0 translate-y-4 translate-x-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500 ease-out">
                    <ArrowUpRight size={32} className="text-electric-blue drop-shadow-lg" />
                  </div>

                  <img 
                    src={release.image} 
                    alt={release.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Tag - Integrated into Image area */}
                  <div className="absolute top-6 left-6 z-30">
                    <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-2">
                      <Tag size={12} className="text-electric-blue" />
                      <span className="text-[10px] font-bold font-mono text-white/90 uppercase tracking-wide">{release.category}</span>
                    </div>
                  </div>
                </div>

                {/* Content Area - Minimal & Blended */}
                <div className="p-8 flex flex-col justify-end flex-1 relative z-20 -mt-12">
                   {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold font-sans text-white group-hover:text-electric-blue transition-colors duration-300 mb-3 drop-shadow-lg">
                    {release.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base line-clamp-2 group-hover:text-gray-300 transition-colors">
                    {release.description}
                  </p>

                  {/* "Instant Delivery" Badge (Subtle) */}
                  <div className="mt-4 flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                     <div className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse" />
                     <span className="text-[10px] font-mono text-electric-blue uppercase tracking-widest">
                        Instant Delivery
                     </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Releases;
