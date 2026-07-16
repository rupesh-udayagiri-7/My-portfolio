'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import ParticleBg from '../components/ParticleBg';
import { Home, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <ParticleBg />
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card max-w-md w-full p-10 rounded-2xl flex flex-col items-center"
        >
          <div className="p-4 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/20 text-[#FBBF24] mb-6">
            <AlertTriangle className="w-12 h-12 animate-pulse" />
          </div>
          
          <h1 className="text-6xl font-black text-gradient mb-2">404</h1>
          <h2 className="text-xl font-bold text-foreground mb-4">Page Not Found</h2>
          
          <p className="text-sm text-text-muted mb-8 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <Link href="/">
            <Button variant="primary" size="md" className="gap-2">
              <Home className="w-4 h-4" /> Go Back Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
