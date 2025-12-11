import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Video } from 'lucide-react';
import { createPageUrl } from '../utils';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#7B1F20]">
      {/* Elegant border frame */}
      <div className="absolute inset-4 md:inset-8 border border-[#C9A962]/30 pointer-events-none z-10" />
      <div className="absolute inset-6 md:inset-12 border border-[#C9A962]/15 pointer-events-none z-10" />
      
      {/* Corner decorations */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 w-12 h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-[#C9A962] z-10" />
      <div className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 md:w-16 md:h-16 border-t-2 border-r-2 border-[#C9A962] z-10" />
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-12 h-12 md:w-16 md:h-16 border-b-2 border-l-2 border-[#C9A962] z-10" />
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-[#C9A962] z-10" />
      
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #C9A962 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #C9A962 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center">

          {/* Logo / Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-[0.2em] text-[#C9A962] mb-4">
              MANN GROUP
            </h1>
            <div className="flex items-center justify-center gap-4 mb-16">
              <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-[#C9A962]" />
              <div className="w-2 h-2 rotate-45 bg-[#C9A962]" />
              <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-[#C9A962]" />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white/80 text-lg md:text-xl tracking-wider mb-20"
          >
            Your Business Growth Partners
          </motion.p>

          {/* Two branches buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center">

            {/* Mann Ventures Button */}
            <Link to={createPageUrl('MannVentures')}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-[320px] md:w-[380px]">

                <div className="absolute inset-0 bg-[#C9A962]/20 blur-xl group-hover:bg-[#C9A962]/30 transition-all duration-500" />
                <div className="relative bg-gradient-to-br from-[#5a1718] to-[#7B1F20] border border-[#C9A962] p-8 transition-all duration-500 group-hover:border-[#C9A962]/80">
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="w-8 h-8 text-[#C9A962]" />
                    <ArrowLeft className="w-5 h-5 text-[#C9A962] transform group-hover:-translate-x-2 transition-transform" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#C9A962] mb-2 tracking-wide">
                    Mann Ventures
                  </h2>
                  <p className="text-white/70 text-sm leading-relaxed">
                    שותפי צמיחה בעסקים
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Mann Productions Button */}
            <Link to={createPageUrl('MannProductions')}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-[320px] md:w-[380px]">

                <div className="absolute inset-0 bg-[#C9A962]/20 blur-xl group-hover:bg-[#C9A962]/30 transition-all duration-500" />
                <div className="relative bg-gradient-to-br from-[#5a1718] to-[#7B1F20] border border-[#C9A962] p-8 transition-all duration-500 group-hover:border-[#C9A962]/80">
                  <div className="flex items-center justify-between mb-4">
                    <Video className="w-8 h-8 text-[#C9A962]" />
                    <ArrowLeft className="w-5 h-5 text-[#C9A962] transform group-hover:-translate-x-2 transition-transform" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#C9A962] mb-2 tracking-wide">
                    Mann Productions
                  </h2>
                  <p className="text-white/70 text-sm leading-relaxed">
                    הפקת וידאו לסוכנויות פרסום במיקור חוץ
                  </p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom subtle branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-0 right-0 text-center">

          <p className="text-[#C9A962]/40 text-xs tracking-[0.3em] uppercase">
            Established Excellence
          </p>
        </motion.div>
      </div>
    </div>);

}