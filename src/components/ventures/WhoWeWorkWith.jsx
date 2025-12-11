import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Banknote, Target, TrendingUp, Rocket } from 'lucide-react';

export default function WhoWeWorkWith() {
  const criteria = [
    {
      icon: Calendar,
      text: 'וותק של 5+ שנים'
    },
    {
      icon: Banknote,
      text: 'מחזור מכירות שנתי של 2,000,000 ₪ לפחות'
    },
    {
      icon: Target,
      text: 'מוכנות להעמיד תקציב פרסום של 10,000 ₪ בחודש לפחות'
    },
    {
      icon: TrendingUp,
      text: 'עסקאות High Ticket עם רווח גולמי של לפחות 50%'
    },
    {
      icon: Rocket,
      text: 'מוכנות לצמוח לפחות פי 3'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[#0a0a0a] to-[#7B1F20]/20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#C9A962] text-sm tracking-[0.3em] uppercase mb-4">הקריטריונים</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            עם מי אנחנו <span className="text-[#C9A962]">עובדים?</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A962]" />
            <div className="w-2 h-2 rotate-45 border border-[#C9A962]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>
        </motion.div>

        <div className="space-y-6">
          {criteria.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center gap-6 bg-gradient-to-r from-[#7B1F20]/20 to-transparent border-r-2 border-[#C9A962] p-6 hover:from-[#7B1F20]/40 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full border border-[#C9A962]/50 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-[#C9A962]" />
              </div>
              <p className="text-white text-lg md:text-xl">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}