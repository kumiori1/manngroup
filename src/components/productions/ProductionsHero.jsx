import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { createPageUrl } from '../../utils';
import { Button } from '@/components/ui/button';

export default function ProductionsHero() {
  const scrollToExamples = () => {
    document.getElementById('video-examples')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#7B1F20]">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#5a1718] via-[#7B1F20] to-[#0a0a0a]" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(to right, #C9A962 1px, transparent 1px),
                           linear-gradient(to bottom, #C9A962 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-[#C9A962]/50" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-[#C9A962]/50" />

      <div className="relative z-10 text-center px-6 py-20 max-w-5xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-8 right-8"
        >
          <Link 
            to={createPageUrl('Home')}
            className="flex items-center gap-2 text-[#C9A962]/70 hover:text-[#C9A962] transition-colors"
          >
            <span className="text-sm">חזרה</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#C9A962] text-sm tracking-[0.3em] uppercase mb-6"
          >
            Mann Group
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#C9A962] tracking-[0.15em] mb-6">
            MANN PRODUCTIONS
          </h1>

          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#C9A962]" />
            <div className="w-2 h-2 rotate-45 bg-[#C9A962]" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>

          <p className="text-white text-xl md:text-2xl font-light tracking-wide mb-12">
            הפקת סרטונים במיקור חוץ לסוכנויות ועסקים בקצב גבוה
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              onClick={scrollToExamples}
              className="h-14 px-10 text-lg font-bold bg-gradient-to-r from-[#C9A962] to-[#b8954f] hover:from-[#d4b978] hover:to-[#C9A962] text-[#5a252c] transition-all duration-300"
            >
              <Play className="w-5 h-5 ml-2" />
              צפייה בדוגמאות
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border border-[#C9A962]/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#C9A962] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}