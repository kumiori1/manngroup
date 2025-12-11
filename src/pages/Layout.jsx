
import React from 'react';

export default function Layout({ children }) {
  return (
    <div dir="rtl" className="min-h-screen bg-[#0a0a0a]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&display=swap');
        
        :root {
          --burgundy: #7B1F20;
          --burgundy-dark: #5a1718;
          --burgundy-light: #9a2728;
          --gold: #C9A962;
          --gold-light: #d4b978;
          --cream: #f5f0e8;
        }
        
        * {
          font-family: 'Open Sans', sans-serif;
        }
        
        h1, h2, h3, .font-bold, .font-extrabold {
          font-weight: 800;
        }
        
        .gold-text {
          color: var(--gold);
        }
        
        .burgundy-bg {
          background-color: var(--burgundy);
        }
        
        .gold-border {
          border-color: var(--gold);
        }
        
        .btn-gold {
          background: linear-gradient(135deg, var(--gold) 0%, #b8954f 100%);
          color: var(--burgundy-dark);
          transition: all 0.3s ease;
        }
        
        .btn-gold:hover {
          background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(201, 169, 98, 0.3);
        }
        
        .btn-burgundy {
          background: linear-gradient(135deg, var(--burgundy) 0%, var(--burgundy-dark) 100%);
          color: white;
          border: 1px solid var(--gold);
          transition: all 0.3s ease;
        }
        
        .btn-burgundy:hover {
          background: linear-gradient(135deg, var(--burgundy-light) 0%, var(--burgundy) 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(114, 47, 55, 0.4);
        }
        
        .marquee {
          animation: marquee 30s linear infinite;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .elegant-border {
          border: 1px solid var(--gold);
          position: relative;
        }
        
        .elegant-border::before {
          content: '';
          position: absolute;
          top: 8px;
          left: 8px;
          right: 8px;
          bottom: 8px;
          border: 1px solid var(--gold);
          opacity: 0.3;
          pointer-events: none;
        }
        
        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: var(--burgundy-dark);
        }
        
        ::-webkit-scrollbar-thumb {
          background: var(--gold);
          border-radius: 4px;
        }
      `}</style>
      {children}
    </div>
  );
}
