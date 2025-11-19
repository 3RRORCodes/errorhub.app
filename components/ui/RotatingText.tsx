import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface RotatingTextProps {
  items: {
    icon: LucideIcon;
    text: string;
  }[];
  className?: string;
}

const RotatingText: React.FC<RotatingTextProps> = ({ items, className = "" }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval);
  }, [items.length]);

  const CurrentIcon = items[index].icon;

  return (
    <div className={`relative inline-flex items-center overflow-hidden h-5 ${className}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -20, opacity: 0, filter: 'blur(4px)' }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center gap-2 whitespace-nowrap"
        >
          <span className="flex items-center justify-center text-electric-blue">
            <CurrentIcon size={14} />
          </span>
          <span className="font-mono text-xs tracking-wide text-electric-blue">
            {items[index].text}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;