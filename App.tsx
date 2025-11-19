import React, { Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Ticker from './components/sections/Ticker';
import Services from './components/sections/Services';
import Releases from './components/sections/Releases';
import Process from './components/sections/Process';
import Testimonials from './components/sections/Testimonials';
import Footer from './components/sections/Footer';
import StarField from './components/canvas/StarField';
import Button from './components/ui/Button';
import SmoothScroll from './components/layout/SmoothScroll';

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-white font-sans selection:bg-electric-blue/30">
      <SmoothScroll />
      <StarField />
      <Navbar />
      
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Releases />

        <Process />
        <Testimonials />
        
        {/* Community CTA */}
        <section className="py-24 px-6 relative z-10">
           <div className="container mx-auto">
             <div className="rounded-3xl bg-gradient-to-r from-electric-blue/20 to-cyber-purple/20 border border-white/10 p-12 text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-noise opacity-10" />
               <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to upgrade your project?</h2>
               <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                 Join thousands of community owners and developers who trust ERRORHUB for their digital assets.
               </p>
               <div className="relative z-10 flex justify-center gap-4">
                 <Button variant="primary">Join Community</Button>
                 <Button variant="outline">View Documentation</Button>
               </div>
             </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;