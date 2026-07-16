'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import Button from './ui/Button';
import { ArrowRight, Download, Send } from 'lucide-react';

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = personalInfo.titles;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenTitles = 1500;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = titles[titleIndex];

    if (isDeleting) {
      // Deleting character
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      // Typing character
      timer = setTimeout(() => {
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    // Switch modes
    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenTitles);
    } else if (isDeleting && currentText === '') {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 0);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex, titles]);

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center pt-28 pb-16 overflow-hidden px-6"
    >
      {/* Decorative 3D Spheres */}
      <div className="absolute top-[20%] right-[15%] w-32 h-32 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full blur-xl opacity-30 animate-pulse pointer-events-none" />
      <div className="absolute bottom-[25%] left-[10%] w-40 h-40 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-bounce pointer-events-none [animation-duration:10s]" />

      <div className="max-w-4xl text-center z-10 flex flex-col items-center">
        {/* Hello Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-500 dark:text-[#FBBF24] text-xs font-semibold uppercase tracking-wider mb-6 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-ping" />
          Aspiring Software Engineer
        </motion.div>

        {/* Full Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 font-sans text-foreground"
        >
          Hi, I am <span className="text-gradient">{personalInfo.name}</span>
        </motion.h1>

        {/* Animated Subtitle / Typist */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="h-10 text-xl sm:text-2xl font-semibold mb-6 flex items-center"
        >
          <span className="text-text-muted mr-2">I am a</span>
          <span className="text-amber-500 dark:text-[#FBBF24] font-bold typing-caret">
            {currentText}
          </span>
        </motion.div>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed mb-10"
        >
          {personalInfo.bio}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
        >
          <a href="#projects" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full gap-2">
              View Projects <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full gap-2 border border-card-border">
              Contact Me <Send className="w-4 h-4" />
            </Button>
          </a>
          <a href="#resume" className="w-full sm:w-auto">
            <Button variant="ghost" size="lg" className="w-full gap-2 border border-dashed border-amber-500/30 text-amber-500 dark:text-[#FBBF24]">
              Download Resume <Download className="w-4 h-4" />
            </Button>
          </a>
        </motion.div>

        {/* Animated Mouse scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 1, duration: 2.5, repeat: Infinity }}
          className="absolute bottom-8 flex flex-col items-center gap-2 pointer-events-none"
        >
          <div className="w-6 h-10 rounded-full border-2 border-text-muted flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#FBBF24] rounded-full"
            />
          </div>
          <span className="text-[10px] text-text-muted uppercase tracking-widest font-semibold">Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
}
