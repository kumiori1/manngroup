import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'אייל גולן', initial: 'א' },
  { name: 'סטטיק', initial: 'ס' },
  { name: 'שלומי שבת', initial: 'ש' },
  { name: 'גדי סוקניק', initial: 'ג' },
  { name: 'ניר דובדבני', initial: 'נ' },
  { name: 'תמיר מנדובסקי', initial: 'ת' },
  { name: 'דון שאול', initial: 'ד' },
  { name: 'רון לנדסמן', initial: 'ר' },
  { name: 'שחר גבות עבות', initial: 'ש' },
  { name: 'ד״ר זרח', initial: 'ז' },
  { name: 'רפאל גיל', initial: 'ר' },
  { name: 'לביא אפרת', initial: 'ל' },
];

export default function LogoMarquee() {
  const doubledLogos = [...logos, ...logos];
  
  return (
    <div className="w-full overflow-hidden py-16 bg-[#f5f0e8]">
      <div className="flex">
        <motion.div 
          className="flex gap-16 px-8"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
        >
          {doubledLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center min-w-[120px] opacity-70 hover:opacity-100 transition-opacity"
            >
              <div className="w-16 h-16 rounded-full border-2 border-[#7B1F20]/20 flex items-center justify-center mb-2 bg-white shadow-sm">
                <span className="text-[#7B1F20] text-2xl font-bold">{logo.initial}</span>
              </div>
              <span className="text-[#7B1F20]/70 text-sm whitespace-nowrap font-medium">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}