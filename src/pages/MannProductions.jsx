import React from 'react';
import ProductionsHero from '../components/productions/ProductionsHero';
import LogoMarquee from '../components/shared/LogoMarquee';
import ProductionsServices from '../components/productions/ProductionsServices';
import VideoGallery from '../components/productions/VideoGallery';
import ProductionsForm from '../components/productions/ProductionsForm';

export default function MannProductions() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <ProductionsHero />
      <LogoMarquee />
      <ProductionsServices />
      <VideoGallery />
      <ProductionsForm />
      
      {/* Footer */}
      <footer className="py-12 bg-[#0a0a0a] border-t border-[#C9A962]/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#C9A962] text-2xl font-bold tracking-[0.15em] mb-4">MANN PRODUCTIONS</p>
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Mann Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}