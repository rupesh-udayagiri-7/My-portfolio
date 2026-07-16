'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Button from './ui/Button';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for styling navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reading progress indicators
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center ${
      scrolled 
        ? 'glass-navbar h-20 shadow-lg shadow-[#FBBF24]/5 border-b border-card-border/80' 
        : 'bg-transparent h-[100px]'
    }`}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-premium origin-left"
        style={{ scaleX }}
      />
      
      <div className="max-w-[92rem] mx-auto px-8 md:px-12 flex items-center justify-between w-full">
        
        {/* Premium RU Monogram Logo */}
        <a href="#hero" className="flex items-center gap-3.5 group">
          {/* Logo Badge */}
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-premium p-[1.5px] shadow-lg shadow-[#FBBF24]/10 group-hover:scale-105 group-hover:shadow-[#FBBF24]/25 transition-all duration-300">
            <div className="flex items-center justify-center w-full h-full rounded-[10px] bg-slate-950 dark:bg-slate-900 text-white font-black text-lg tracking-wider">
               RU
            </div>
            {/* Ambient glow circle overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-premium blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10" />
          </div>
          
          {/* Brand Name labels */}
          <div className="flex flex-col text-left">
            <span className="text-base font-extrabold text-foreground tracking-wide leading-none group-hover:text-amber-500 dark:group-hover:text-[#FBBF24] transition-colors">
              Udayagiri Rupesh
            </span>
            <span className="text-[10px] text-text-muted font-bold tracking-widest mt-1 uppercase leading-none">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Nav links with hover underline transitions */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm text-text-muted hover:text-foreground font-semibold transition-colors duration-300 py-2 px-3.5 rounded-xl hover:bg-slate-200/40 dark:hover:bg-slate-800/30"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Buttons & Toggles */}
        <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl glass-card hover:bg-slate-200/60 dark:hover:bg-slate-800/50 hover:border-[#FBBF24]/30 transition-all text-foreground cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a href="#contact">
              <Button variant="primary" size="md" className="shadow-md shadow-[#FBBF24]/10 hover:shadow-[#FBBF24]/25">
                Hire Me
              </Button>
            </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl glass-card text-foreground"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl glass-card text-foreground"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-background/95 backdrop-blur-lg z-40 flex flex-col p-8 border-t border-card-border"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-6 text-center mt-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-text-muted hover:text-foreground transition-all duration-200 py-1.5"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="mt-4">
              <Button variant="primary" size="lg" className="w-full">
                Hire Me
              </Button>
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
