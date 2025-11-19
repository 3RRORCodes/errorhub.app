import React from 'react';

const ITEMS = [
  "CUSTOM DEVELOPMENT",
  "FIVEM SCRIPTS",
  "DISCORD BOTS",
  "WEB APPLICATIONS",
  "UI/UX DESIGN",
  "3D MODELING",
  "BRANDING"
];

const Ticker: React.FC = () => {
  return (
    <div className="w-full bg-white/5 border-y border-white/10 overflow-hidden py-4">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-ticker whitespace-nowrap py-2 flex items-center gap-12">
          {/* Duplicate list 4 times to ensure smooth loop on wide screens */}
          {[...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
            <span key={i} className="text-sm font-mono text-gray-400 tracking-widest flex items-center gap-12">
              {item}
              <span className="w-2 h-2 border border-electric-blue rotate-45" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;