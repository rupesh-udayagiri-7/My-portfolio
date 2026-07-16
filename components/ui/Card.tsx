'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'className'> {
  children: React.ReactNode;
  className?: string;
  animateHover?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = '',
  animateHover = true,
  onClick,
  ...props
}: CardProps) {
  const hoverAnimate = animateHover
    ? {
        y: -6,
        scale: 1.01,
        transition: { duration: 0.3, ease: 'easeOut' as const },
      }
    : undefined;

  return (
    <motion.div
      onClick={onClick}
      className={`glass-card rounded-2xl p-6 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      whileHover={hoverAnimate}
      whileTap={onClick ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
