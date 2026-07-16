'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import Heading from './ui/Heading';
import Card from './ui/Card';
import Achievements from './Achievements';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 py-12 md:py-24 w-full scroll-mt-24 gap-6 md:gap-8">
      <Card className="w-full max-w-[1025px] min-h-[300px] md:h-[320px] !px-[35px] !py-[25px] !rounded-[20px] text-center bg-card-bg/25 dark:bg-card-bg/15 flex flex-col justify-center items-center gap-4" animateHover={false}>
        <Heading 
          title="About Me" 
          subtitle="Introduction" 
          description="" 
        />

        <div className="flex flex-col md:flex-row items-center justify-center w-full mt-4 gap-8 md:gap-12 max-w-3xl mx-auto">
          
          {/* Profile Picture (Left aligned on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="relative w-[150px] h-[150px] rounded-full bg-gradient-premium p-[2.5px] shadow-2xl shadow-[#FBBF24]/10 flex items-center justify-center group flex-shrink-0"
          >
            {/* Profile Image Wrapper */}
            <div className="w-full h-full rounded-full bg-slate-950 dark:bg-slate-900 flex items-center justify-center overflow-hidden relative">
              <Image
                src="/assets/profile.jpg"
                alt="Udayagiri Rupesh"
                fill
                sizes="150px"
                className="object-cover object-center scale-105 transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>

            {/* Concentric rotating dashed line border */}
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/30 animate-spin [animation-duration:35s] pointer-events-none" />
            
            {/* Concentric pulsing outline ring */}
            <div className="absolute -inset-[10px] rounded-full border-2 border-[#FBBF24]/20 dark:border-[#FBBF24]/20 animate-pulse pointer-events-none" />

            {/* Concentric ambient background glow behind the frame */}
            <div className="absolute -inset-[10px] rounded-full bg-gradient-premium blur-xl opacity-15 group-hover:opacity-30 transition-opacity duration-500 animate-pulse [animation-duration:4s] -z-10" />
          </motion.div>

          {/* Narrative Text (Right aligned on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3 text-center md:text-left max-w-xl flex-grow"
          >
            <h3 className="text-[20px] md:text-[25px] font-extrabold text-foreground text-center md:text-left">
              Hello! I am <span className="text-gradient">Udayagiri Rupesh</span>
            </h3>

            <p className="text-[14px] md:text-[18px] text-text-muted leading-relaxed text-center md:text-left">
              {personalInfo.bio}
            </p>
          </motion.div>

        </div>
      </Card>

      {/* Embedded Achievements counters */}
      <div className="w-full max-w-[1025px]">
        <Achievements />
      </div>
    </section>
  );
}
