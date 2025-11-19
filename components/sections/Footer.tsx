import React from 'react';
import { NAV_LINKS } from '../../data';
import { Github, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-sans font-bold tracking-tighter text-white mb-6 block">
              ERROR<span className="text-electric-blue">HUB</span>
            </a>
            <p className="text-gray-500 max-w-md mb-6">
              A premium digital studio delivering cutting-edge tools, applications, and FiveM content. Built for performance, designed for impact.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-sm text-white mb-6">NAVIGATION</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-electric-blue transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm text-white mb-6">LEGAL</h4>
            <ul className="space-y-4">
              {['Terms of Service', 'Privacy Policy', 'Refund Policy', 'Licenses'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-electric-blue transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 font-mono">
            © {new Date().getFullYear()} ERRORHUB STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-600 font-mono">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            ALL SYSTEMS OPERATIONAL
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;