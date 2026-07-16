'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function Heading({
  title,
  subtitle,
  description,
  align = 'center',
  className = '',
}: HeadingProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <motion.div
      className={`flex flex-col mb-12 ${alignClass[align]} ${className}`}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {subtitle && (
        <span className="text-xs font-bold tracking-widest text-amber-500 dark:text-[#FBBF24] uppercase mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-text-muted max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
      <div className="w-16 h-1 mt-4 bg-gradient-premium rounded-full" />
    </motion.div>
  );
}
