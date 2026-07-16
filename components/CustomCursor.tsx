'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Trailing spring configuration
  const springConfig = { stiffness: 400, damping: 28 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if we are on a mobile device
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    setTimeout(() => {
      setIsVisible(true);
    }, 0);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Detect interactive tags or elements with cursor-pointer
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovered(!!isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Core Dot */}
      <motion.div
        className="fixed w-2 h-2 bg-gradient-premium rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          left: cursorX,
          top: cursorY,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      />
      {/* Outer Ring */}
      <motion.div
        className="fixed w-8 h-8 border border-amber-500/50 dark:border-amber-400/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 bg-amber-500/5"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? '#F59E0B' : 'rgba(251, 191, 36, 0.4)',
          backgroundColor: isHovered ? 'rgba(245, 158, 11, 0.1)' : 'rgba(251, 191, 36, 0.05)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      />
    </>
  );
}
