import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative z-10">
      {/* Background Gradient Blob */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-sans mb-4"
          >
            TRUSTED BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyber-purple">CREATORS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }} 
            className="text-gray-400 max-w-xl"
          >
            See what community owners and developers are saying about our tools.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative group hover:bg-white/[0.07] transition-colors duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-electric-blue group-hover:scale-110 transition-transform duration-300">
                    <Quote size={18} fill="currentColor" className="opacity-50" />
                </div>
              </div>

              <p className="text-gray-300 mb-8 text-lg font-light leading-relaxed relative z-10">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-black flex items-center justify-center text-white font-bold font-mono text-sm border border-white/10 shadow-inner">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-white leading-none mb-1">{t.author}</h4>
                  <span className="text-xs text-electric-blue font-mono uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;