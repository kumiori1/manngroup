import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const videos = [
  { name: 'ניר דובדבני', url: 'https://youtube.com/shorts/lrEr0s3DECg', thumbnail: 'https://img.youtube.com/vi/lrEr0s3DECg/maxresdefault.jpg' },
  { name: 'מנטורית', url: 'https://youtube.com/shorts/kQFRh4-jKqg', thumbnail: 'https://img.youtube.com/vi/kQFRh4-jKqg/maxresdefault.jpg' },
  { name: 'שלומי שבת', url: 'https://youtube.com/shorts/MPkkJVg_saQ', thumbnail: 'https://img.youtube.com/vi/MPkkJVg_saQ/maxresdefault.jpg' },
  { name: 'תמיר מנדובסקי', url: 'https://youtube.com/shorts/Hv9r1NKAjo4', thumbnail: 'https://img.youtube.com/vi/Hv9r1NKAjo4/maxresdefault.jpg' },
  { name: 'אייל גולן', url: 'https://youtube.com/shorts/uADJHFVdkko', thumbnail: 'https://img.youtube.com/vi/uADJHFVdkko/maxresdefault.jpg' },
  { name: 'רון לנדסמן', url: 'https://youtube.com/shorts/faZdPd4UePI', thumbnail: 'https://img.youtube.com/vi/faZdPd4UePI/maxresdefault.jpg' },
  { name: 'ד״ר זרח', url: 'https://youtube.com/shorts/S90WCo0cgaQ', thumbnail: 'https://img.youtube.com/vi/S90WCo0cgaQ/maxresdefault.jpg' },
  { name: 'דון שאול', url: 'https://youtube.com/shorts/mkqiMN5wLn8', thumbnail: 'https://img.youtube.com/vi/mkqiMN5wLn8/maxresdefault.jpg' },
  { name: 'שחר גבות עבות', url: 'https://youtube.com/shorts/8H8DCM2NWIU', thumbnail: 'https://img.youtube.com/vi/8H8DCM2NWIU/maxresdefault.jpg' },
  { name: 'סקילס שוק ההון', url: 'https://youtube.com/shorts/5xnfwKHk0ck', thumbnail: 'https://img.youtube.com/vi/5xnfwKHk0ck/maxresdefault.jpg' },
  { name: 'טיולי כדורגל', url: 'https://youtube.com/shorts/olb9OQnUdRs', thumbnail: 'https://img.youtube.com/vi/olb9OQnUdRs/maxresdefault.jpg' },
  { name: 'מותג בגדים', url: 'https://youtube.com/shorts/z3kD--9V1fQ', thumbnail: 'https://img.youtube.com/vi/z3kD--9V1fQ/maxresdefault.jpg' },
  { name: 'גדי סוקניק חברת מימון', url: 'https://youtube.com/shorts/M9kPvkZDAwE', thumbnail: 'https://img.youtube.com/vi/M9kPvkZDAwE/maxresdefault.jpg' },
  { name: 'לביא אפרת משרד עו״ד', url: 'https://youtube.com/shorts/NbU-X6DQ9PA', thumbnail: 'https://img.youtube.com/vi/NbU-X6DQ9PA/maxresdefault.jpg' },
  { name: 'סטטיק', url: 'https://youtube.com/shorts/DRljH8crjvE', thumbnail: 'https://img.youtube.com/vi/DRljH8crjvE/maxresdefault.jpg' },
  { name: 'הגלגל של שרדר', url: 'https://youtube.com/shorts/kaMXoVkuCEI', thumbnail: 'https://img.youtube.com/vi/kaMXoVkuCEI/maxresdefault.jpg' },
  { name: 'פרסומת יזמי נדל״ן', url: 'https://youtu.be/1GRHPzDaeYY', thumbnail: 'https://img.youtube.com/vi/1GRHPzDaeYY/maxresdefault.jpg' },
  { name: 'רפאל גיל בדק בית', url: 'https://youtu.be/youlCx1xW_A', thumbnail: 'https://img.youtube.com/vi/youlCx1xW_A/maxresdefault.jpg' },
];

function VideoRow({ items, rowIndex }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#7B1F20]/90 border border-[#C9A962]/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#7B1F20]"
      >
        <ChevronRight className="w-6 h-6 text-[#C9A962]" />
      </button>
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#7B1F20]/90 border border-[#C9A962]/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#7B1F20]"
      >
        <ChevronLeft className="w-6 h-6 text-[#C9A962]" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-shrink-0 w-[280px] group/card cursor-pointer"
          >
            <a 
              href={video.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative aspect-[9/16] rounded-lg overflow-hidden border border-[#C9A962]/20 group-hover/card:border-[#C9A962]/50 transition-all duration-300 block"
            >
              <img
                src={video.thumbnail}
                alt={video.name}
                className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-[#C9A962] flex items-center justify-center">
                  <Play className="w-8 h-8 text-[#7B1F20] mr-[-2px]" fill="#7B1F20" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-lg">{video.name}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function VideoGallery() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Split videos into 3 rows of 6 for desktop
  const row1 = videos.slice(0, 6);
  const row2 = videos.slice(6, 12);
  const row3 = videos.slice(12, 18);

  // For mobile - show first 10, then rest on "show more"
  const mobileVisible = showAll ? videos : videos.slice(0, 10);

  return (
    <section className="py-32 bg-gradient-to-b from-[#0a0a0a] to-[#7B1F20]/20" id="video-examples">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A962] text-sm tracking-[0.3em] uppercase mb-4">הפרויקטים שלנו</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            דוגמאות <span className="text-[#C9A962]">לסרטונים</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A962]" />
            <div className="w-2 h-2 rotate-45 border border-[#C9A962]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A962]" />
          </div>
        </motion.div>

        {/* Desktop view - 3 rows with horizontal scroll */}
        <div className="hidden md:block space-y-8">
          <VideoRow items={row1} rowIndex={0} />
          <VideoRow items={row2} rowIndex={1} />
          <VideoRow items={row3} rowIndex={2} />
        </div>

        {/* Mobile view - stacked with show more */}
        <div className="md:hidden space-y-6">
          {mobileVisible.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <a 
                href={video.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative aspect-[9/16] rounded-lg overflow-hidden border border-[#C9A962]/20 block"
              >
                <img
                  src={video.thumbnail}
                  alt={video.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#C9A962]/90 flex items-center justify-center">
                    <Play className="w-8 h-8 text-[#7B1F20] mr-[-2px]" fill="#7B1F20" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-lg">{video.name}</p>
                </div>
              </a>
            </motion.div>
          ))}

          {!showAll && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center pt-6"
            >
              <Button
                onClick={() => setShowAll(true)}
                className="h-14 px-10 text-lg font-bold bg-transparent border-2 border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962]/10 transition-all duration-300"
              >
                צפה בעוד
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}