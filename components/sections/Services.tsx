
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../../data';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-sans mb-4"
          >
            WHAT WE DO
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
            className="w-20 h-1 bg-electric-blue origin-left" 
          />
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className={`group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 overflow-hidden ${
                service.featured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white/5 to-white/0' : ''
              }`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="text-electric-blue" />
              </div>
              
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white group-hover:text-electric-blue group-hover:scale-110 transition-all duration-300">
                  <service.icon size={24} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold font-sans mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              
              {/* Decorative corner gradient */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-electric-blue/5 blur-2xl rounded-full group-hover:bg-electric-blue/10 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
