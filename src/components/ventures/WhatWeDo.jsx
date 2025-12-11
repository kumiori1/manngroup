import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Settings, Percent } from 'lucide-react';

export default function WhatWeDo() {
  const steps = [
    {
      icon: Target,
      title: 'אנחנו נכנסים לעסק',
      desc: 'מזהים את הפוטנציאל הלא ממומש'
    },
    {
      icon: Settings,
      title: 'בונים או משפרים',
      desc: 'את מערך השיווק והמכירות'
    },
    {
      icon: TrendingUp,
      title: 'ברמה האסטרטגית וגם בביצוע',
      desc: 'ליווי מקצה לקצה'
    }
  ];

  return (
    <section className="py-32 bg-[#0a0a0a] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7B1F20]/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#C9A962] text-sm tracking-[0.3em] uppercase mb-4">השירות שלנו</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            מה אנחנו <span className="text-[#C9A962]">עושים?</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A962]" />
            <div className="w-2 h-2 rotate-45 border border-[#C9A962]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-white/80 text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          שותפי צמיחה בעסקים עם פוטנציאל צמיחה לא ממומש
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-[#7B1F20]/30 to-[#7B1F20]/10 border border-[#C9A962]/20 p-8 h-full transition-all duration-500 group-hover:border-[#C9A962]/50">
                <div className="w-14 h-14 rounded-full border border-[#C9A962]/50 flex items-center justify-center mb-6 group-hover:bg-[#C9A962]/10 transition-colors">
                  <step.icon className="w-6 h-6 text-[#C9A962]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/60">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Economic Model */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-[#7B1F20] to-[#5a1718] border border-[#C9A962]/30 p-10 md:p-16 text-center">
            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#C9A962]/50" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#C9A962]/50" />
            
            <div className="flex items-center justify-center mb-6">
              <Percent className="w-12 h-12 text-[#C9A962]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#C9A962] mb-4">המודל הכלכלי</h3>
            <p className="text-white text-xl md:text-2xl">
              10-20% מהרווח החדש שיצרנו לך בעסק
            </p>
            <p className="text-white/60 mt-4 text-lg">(נקבע לאחר אפיון)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}