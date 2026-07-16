'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'className'> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  onClick,
  ...props
}: ButtonProps) {
  // Styles based on variants
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FBBF24] focus:ring-offset-2';
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  const variantStyles = {
    primary: 'bg-[#FBBF24] text-[#0B1120] shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 hover:bg-[#F59E0B] border-0',
    secondary: 'glass-card text-foreground hover:bg-slate-200/50 dark:hover:bg-slate-800/50',
    outline: 'border-2 border-[#FBBF24] text-[#FBBF24] hover:bg-[#FBBF24] hover:text-[#0B1120]',
    ghost: 'text-foreground hover:bg-slate-200 dark:hover:bg-slate-800',
    link: 'text-[#FBBF24] hover:underline px-0 py-0 rounded-none bg-transparent hover:bg-transparent shadow-none border-0',
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
