import React from 'react';
import { STEPS } from '../../data';

const Process: React.FC = () => {
  return (
    <section className="py-24 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Heading */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-bold font-sans mb-6">HOW WE WORK</h2>
            <p className="text-gray-400 leading-relaxed">
              Streamlined processes designed for transparency and speed. From initial ticket to final delivery, we keep you in the loop.
            </p>
          </div>

          {/* Right Steps */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.number} className="relative pl-6 border-l border-white/10">
                <span className="absolute -left-3 top-0 w-6 h-6 bg-charcoal border border-white/20 rounded-full flex items-center justify-center text-xs font-mono text-gray-400">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 mt-1">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;