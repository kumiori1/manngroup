import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

export default function VenturesForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    business_description: '',
    annual_revenue: '',
    ad_budget: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await base44.entities.Lead.create({
      ...formData,
      source: 'ventures'
    });
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <section className="py-32 bg-[#7B1F20] relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-[#5a1718] to-[#7B1F20] border border-[#C9A962] p-16"
          >
            <CheckCircle className="w-20 h-20 text-[#C9A962] mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">תודה על פנייתך!</h3>
            <p className="text-white/80 text-lg">נחזור אליך בהקדם האפשרי</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-[#7B1F20] relative" id="apply-form">
      {/* Corner decorations */}
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#C9A962]/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#C9A962]/30" />

      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A962] text-sm tracking-[0.3em] uppercase mb-4">הרשמה</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            איך עובדים <span className="text-[#C9A962]">איתנו?</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A962]" />
            <div className="w-2 h-2 rotate-45 border border-[#C9A962]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            אנחנו מקבלים לפורטפוליו שלנו רק 10 עסקים בשנה,
            <br />
            מלאו את השאלון כדי להיכנס לרשימת ההמתנה
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-[#f5f0e8] border border-[#C9A962]/30 p-8 md:p-12 space-y-8 shadow-xl"
        >
          <div>
            <Label className="text-[#1a1a1a] text-lg mb-3 block font-semibold">שם מלא</Label>
            <Input
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="bg-white border-[#7B1F20]/20 text-[#1a1a1a] placeholder:text-gray-400 h-14 text-lg focus:border-[#7B1F20]"
              placeholder="הזן את שמך המלא"
            />
          </div>

          <div>
            <Label className="text-[#1a1a1a] text-lg mb-3 block font-semibold">ספר בקצרה על העסק, המצב הנוכחי והמטרות העסקיות</Label>
            <Textarea
              name="business_description"
              value={formData.business_description}
              onChange={handleChange}
              required
              className="bg-white border-[#7B1F20]/20 text-[#1a1a1a] placeholder:text-gray-400 min-h-[150px] text-lg focus:border-[#7B1F20]"
              placeholder="תאר את העסק שלך..."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="text-[#1a1a1a] text-lg mb-3 block font-semibold">מחזור מכירות שנתי בשקלים</Label>
              <Input
                name="annual_revenue"
                value={formData.annual_revenue}
                onChange={handleChange}
                required
                className="bg-white border-[#7B1F20]/20 text-[#1a1a1a] placeholder:text-gray-400 h-14 text-lg focus:border-[#7B1F20]"
                placeholder="לדוגמה: 3,000,000 ₪"
              />
            </div>
            <div>
              <Label className="text-[#1a1a1a] text-lg mb-3 block font-semibold">תקציב פרסום שנתי נוכחי בשקלים</Label>
              <Input
                name="ad_budget"
                value={formData.ad_budget}
                onChange={handleChange}
                required
                className="bg-white border-[#7B1F20]/20 text-[#1a1a1a] placeholder:text-gray-400 h-14 text-lg focus:border-[#7B1F20]"
                placeholder="לדוגמה: 150,000 ₪"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="text-[#1a1a1a] text-lg mb-3 block font-semibold">טלפון</Label>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-white border-[#7B1F20]/20 text-[#1a1a1a] placeholder:text-gray-400 h-14 text-lg focus:border-[#7B1F20]"
                placeholder="050-0000000"
              />
            </div>
            <div>
              <Label className="text-[#1a1a1a] text-lg mb-3 block font-semibold">מייל עסקי</Label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white border-[#7B1F20]/20 text-[#1a1a1a] placeholder:text-gray-400 h-14 text-lg focus:border-[#7B1F20]"
                placeholder="your@company.com"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-16 text-xl font-bold bg-gradient-to-r from-[#C9A962] to-[#b8954f] hover:from-[#d4b978] hover:to-[#C9A962] text-[#5a252c] transition-all duration-300"
          >
            {isSubmitting ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <>
                <Send className="w-5 h-5 ml-2" />
                שליחת בקשה
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}