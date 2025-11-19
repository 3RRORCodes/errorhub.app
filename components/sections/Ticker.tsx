
import React from 'react';
import { TICKER_ITEMS } from '../../data';

const Ticker: React.FC = () => {
  return (
    <div className="w-full bg-white/5 border-y border-white/10 overflow-hidden py-4">
      <div className="flex select-none">
        {/* Original List */}
        <div className="flex shrink-0 animate-ticker items-center gap-12 pr-12">
          {TICKER_ITEMS.map((item, i) => (
            <span key={`original-${i}`} className="text-sm font-mono text-gray-400 tracking-widest flex items-center gap-12">
              {item}
              <span className="w-2 h-2 border border-electric-blue rotate-45" />
            </span>
          ))}
        </div>

        {/* Duplicate List for Seamless Loop */}
        <div className="flex shrink-0 animate-ticker items-center gap-12 pr-12" aria-hidden="true">
          {TICKER_ITEMS.map((item, i) => (
            <span key={`duplicate-${i}`} className="text-sm font-mono text-gray-400 tracking-widest flex items-center gap-12">
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
