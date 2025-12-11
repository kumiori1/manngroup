import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

export default function ProductionsForm() {
  const [formData, setFormData] = useState({
    service_type: '',
    other_service: '',
    business_type: '',
    monthly_videos: '',
    full_name: '',
    business_name: '',
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
      source: 'productions'
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

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
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
    <section className="py-32 bg-[#7B1F20] relative">
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
          <p className="text-[#C9A962] text-sm tracking-[0.3em] uppercase mb-4">יצירת קשר</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            איך עובדים <span className="text-[#C9A962]">איתנו?</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A962]" />
            <div className="w-2 h-2 rotate-45 border border-[#C9A962]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>
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
            <Label className="text-[#1a1a1a] text-lg mb-3 block font-semibold">שירות רלוונטי</Label>
            <Select
              value={formData.service_type}
              onValueChange={(value) => handleSelectChange('service_type', value)}
            >
              <SelectTrigger className="bg-white border-[#7B1F20]/20 text-[#1a1a1a] h-14 text-lg focus:border-[#7B1F20]">
                <SelectValue placeholder="בחר שירות" />
              </SelectTrigger>
              <SelectContent className="bg-white border-[#7B1F20]/20">
                <SelectItem value="video_production" className="text-[#1a1a1a] hover:bg-[#f5f0e8]">הפקת סרטונים</SelectItem>
                <SelectItem value="video_editing" className="text-[#1a1a1a] hover:bg-[#f5f0e8]">עריכת סרטונים</SelectItem>
                <SelectItem value="other" className="text-[#1a1a1a] hover:bg-[#f5f0e8]">אחר</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {formData.service_type === 'other' && (
            <div>
              <Label className="text-[#1a1a1a] text-lg mb-3 block font-semibold">פרט את השירות הנדרש</Label>
              <Input
                name="other_service"
                value={formData.other_service}
                onChange={handleChange}
                className="bg-white border-[#7B1F20]/20 text-[#1a1a1a] placeholder:text-gray-400 h-14 text-lg focus:border-[#7B1F20]"
                placeholder="תאר את השירות שאתה מחפש"
              />
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <div className="order-2 md:order-1">
              <Label className="text-[#1a1a1a] text-lg mb-3 block font-semibold">כמות סרטונים חודשית מוערכת</Label>
              <Select
                value={formData.monthly_videos}
                onValueChange={(value) => handleSelectChange('monthly_videos', value)}
              >
                <SelectTrigger className="bg-white border-[#7B1F20]/20 text-[#1a1a1a] h-14 text-lg focus:border-[#7B1F20]">
                  <SelectValue placeholder="בחר כמות" />
                </SelectTrigger>
                <SelectContent className="bg-white border-[#7B1F20]/20">
                  <SelectItem value="0-10" className="text-[#1a1a1a] hover:bg-[#f5f0e8]">0-10</SelectItem>
                  <SelectItem value="10-20" className="text-[#1a1a1a] hover:bg-[#f5f0e8]">10-20</SelectItem>
                  <SelectItem value="20-50" className="text-[#1a1a1a] hover:bg-[#f5f0e8]">20-50</SelectItem>
                  <SelectItem value="50+" className="text-[#1a1a1a] hover:bg-[#f5f0e8]">50+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="order-1 md:order-2">
              <Label className="text-[#1a1a1a] text-lg mb-3 block font-semibold">סוג העסק</Label>
              <Select
                value={formData.business_type}
                onValueChange={(value) => handleSelectChange('business_type', value)}
              >
                <SelectTrigger className="bg-white border-[#7B1F20]/20 text-[#1a1a1a] h-14 text-lg focus:border-[#7B1F20]">
                  <SelectValue placeholder="בחר סוג עסק" />
                </SelectTrigger>
                <SelectContent className="bg-white border-[#7B1F20]/20">
                  <SelectItem value="marketing_agency" className="text-[#1a1a1a] hover:bg-[#f5f0e8]">סוכנות שיווק</SelectItem>
                  <SelectItem value="other_business" className="text-[#1a1a1a] hover:bg-[#f5f0e8]">עסק אחר</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
              <Label className="text-[#1a1a1a] text-lg mb-3 block font-semibold">שם העסק</Label>
              <Input
                name="business_name"
                value={formData.business_name}
                onChange={handleChange}
                className="bg-white border-[#7B1F20]/20 text-[#1a1a1a] placeholder:text-gray-400 h-14 text-lg focus:border-[#7B1F20]"
                placeholder="הזן את שם העסק"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="text-[#1a1a1a] text-lg mb-3 block font-semibold">מס׳ טלפון</Label>
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
              <Label className="text-[#1a1a1a] text-lg mb-3 block font-semibold">אימייל עסקי</Label>
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