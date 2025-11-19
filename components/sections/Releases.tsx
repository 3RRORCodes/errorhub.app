
import React from 'react';
import { motion } from 'framer-motion';
import { RELEASES } from '../../data';
import Button from '../ui/Button';
import { staggerContainer, scaleIn } from '../../utils/animations';

const Releases: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-charcoal/50 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-sans mb-4"
            >
              FEATURED RELEASES
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 font-mono"
            >
              High-performance resources for your project.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="outline">View All Products</Button>
          </motion.div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {RELEASES.map((release, idx) => (
            <motion.div
              key={release.id}
              variants={scaleIn}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4 border border-white/10">
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-colors" />
                <img 
                  src={release.image} 
                  alt={release.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-mono text-electric-blue mb-1 block">{release.category}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-electric-blue transition-colors">{release.title}</h3>
                </div>
                <span className="text-white/20 group-hover:text-white transition-colors text-xl">0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Releases;
