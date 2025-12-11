import React from 'react';

export default function GoldDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A962]" />
      <div className="w-2 h-2 rotate-45 border border-[#C9A962] mx-4" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A962]" />
    </div>
  );
}