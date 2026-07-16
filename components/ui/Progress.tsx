'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProgressProps {
  name: string;
  value: number; // 0 to 100
  className?: string;
}

export default function Progress({ name, value, className = '' }: ProgressProps) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div className="flex justify-center items-center gap-1.5 mb-1.5 text-xs font-bold uppercase tracking-wider">
        <span className="text-foreground">{name}</span>
        <span className="text-[#FBBF24] font-black">•</span>
        <span className="text-amber-500 dark:text-[#FBBF24] font-black">{value}%</span>
      </div>
      <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-premium rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
