import React from 'react';
import { motion } from 'framer-motion';
import { Film, Sparkles, Video } from 'lucide-react';

export default function ProductionsServices() {
  const services = [
    {
      icon: Video,
      title: 'עריכת סרטונים לסושיאל',
      desc: 'תוכן מותאם לכל פלטפורמה'
    },
    {
      icon: Sparkles,
      title: 'עריכת סרטוני פרסומת',
      desc: 'כולל אפקטים מיוחדים'
    },
    {
      icon: Film,
      title: 'הפקת סרטונים מלאה',
      desc: 'קריאייטיב, צילום ועריכה'
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
          <p className="text-[#C9A962] text-sm tracking-[0.3em] uppercase mb-4">השירותים שלנו</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            מה אנחנו <span className="text-[#C9A962]">עושים?</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A962]" />
            <div className="w-2 h-2 rotate-45 border border-[#C9A962]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-[#7B1F20]/30 to-[#7B1F20]/10 border border-[#C9A962]/20 p-10 h-full text-center transition-all duration-500 group-hover:border-[#C9A962]/50">
                <div className="w-16 h-16 mx-auto rounded-full border border-[#C9A962]/50 flex items-center justify-center mb-6 group-hover:bg-[#C9A962]/10 transition-colors">
                  <service.icon className="w-7 h-7 text-[#C9A962]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}