'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

export default function ScrollButton() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [isBottomHalf, setIsBottomHalf] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll button when scrolled past 100px from the top
      if (window.scrollY > 100) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }

      // Check if user has scrolled past 50% of the page height
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight > 0) {
        const scrolledRatio = window.scrollY / scrollableHeight;
        setIsBottomHalf(scrolledRatio > 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Run once on mount to establish initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollAction = () => {
    if (isBottomHalf) {
      // Scroll smoothly to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll smoothly to bottom (footer)
      const footerEl = document.getElementById('footer');
      if (footerEl) {
        footerEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
      }
    }
  };

  if (!showScrollBtn) return null;

  return (
    <button
      onClick={handleScrollAction}
      className="fixed bottom-6 right-6 p-3.5 rounded-full bg-gradient-premium border border-white/20 text-white z-50 shadow-2xl hover:shadow-[#FBBF24]/30 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center"
      aria-label={isBottomHalf ? "Scroll to Top" : "Scroll to Bottom"}
    >
      {isBottomHalf ? <ArrowUp className="w-5 h-5 animate-pulse" /> : <ArrowDown className="w-5 h-5 animate-pulse" />}
    </button>
  );
}
