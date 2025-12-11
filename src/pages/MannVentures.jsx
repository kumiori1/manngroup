import React from 'react';
import VenturesHero from '../components/ventures/VenturesHero';
import LogoMarquee from '../components/shared/LogoMarquee';
import WhatWeDo from '../components/ventures/WhatWeDo';
import WhoWeWorkWith from '../components/ventures/WhoWeWorkWith';
import VenturesForm from '../components/ventures/VenturesForm';

export default function MannVentures() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <VenturesHero />
      <LogoMarquee />
      <WhatWeDo />
      <WhoWeWorkWith />
      <VenturesForm />
      
      {/* Footer */}
      <footer className="py-12 bg-[#0a0a0a] border-t border-[#C9A962]/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#C9A962] text-2xl font-bold tracking-[0.15em] mb-4">MANN VENTURES</p>
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Mann Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}