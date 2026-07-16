'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/portfolio';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import { Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <FaGithub className="w-5 h-5" />;
      case 'linkedin':
        return <FaLinkedin className="w-5 h-5" />;
      case 'leetcode':
        return <SiLeetcode className="w-5 h-5" />;
      case 'codechef':
        return <SiCodechef className="w-5 h-5" />;
      case 'email':
        return <Mail className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer id="footer" className="flex flex-col justify-center items-center relative w-full pt-16 md:pt-24 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-[94%] max-w-[1480px] mx-auto my-[50px]"
      >
        <div className="glass-card rounded-[28px] pt-[40px] pr-[80px] pb-[28px] pl-[64px] relative overflow-hidden w-full lg:h-[300px] flex flex-col justify-between lg:grid lg:grid-cols-[260px_1fr_420px] lg:grid-rows-[1fr_auto] lg:items-center bg-card-bg/25 dark:bg-card-bg/15 shadow-[0_10px_40px_rgba(0,0,0,0.35)] border border-white/[0.08] backdrop-blur-[16px] gap-x-10 gap-y-0 justify-items-stretch">
          {/* LEFT COLUMN (260px) */}
          <div className="w-full lg:w-[260px] flex flex-col items-center lg:items-start text-center lg:text-left z-10 lg:order-1">
            <span className="font-signature text-[30px] font-normal text-foreground leading-none mb-[14px] tracking-normal whitespace-nowrap block">
              Rupesh.
            </span>
            <p className="text-[15px] font-normal leading-[1.65] max-w-[220px] text-slate-300 text-center lg:text-left">
              Passionate developer building<br />
              digital experiences that make<br />
              a difference.
            </p>
          </div>

          {/* CENTER COLUMN (1fr) */}
          <div className="w-full flex flex-col items-center text-center justify-start mt-6 lg:mt-0 z-10 lg:order-2 md:order-3">
            <h2 className="text-[18px] font-semibold tracking-[0.6px] uppercase text-slate-900 dark:text-white whitespace-nowrap mb-[18px]">
              LET&apos;S BUILD SOMETHING AMAZING TOGETHER
            </h2>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 w-full">
              <div className="w-[120px] h-[1px] bg-slate-300/30 dark:bg-slate-700/30" />
              <div className="relative w-[8px] h-[8px] flex items-center justify-center">
                <div className="absolute w-2 h-2 bg-[#FBBF24] rounded-full blur-[2px] opacity-75 animate-pulse" />
                <div className="w-[8px] h-[8px] bg-amber-500 dark:bg-[#FBBF24] rotate-45 relative z-10" />
              </div>
              <div className="w-[120px] h-[1px] bg-slate-300/30 dark:bg-slate-700/30" />
            </div>

            {/* Button */}
            <motion.button
              onClick={() => {
                const contactEl = document.getElementById('contact');
                if (contactEl) {
                  contactEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative flex items-center justify-between w-[150px] h-[42px] rounded-[10px] px-[20px] bg-gradient-premium text-slate-950 font-semibold text-[16px] uppercase focus:outline-none focus:ring-2 focus:ring-[#FBBF24] focus:ring-offset-2 hover:cursor-pointer mt-[18px]"
              whileHover="hover"
              initial="initial"
              variants={{
                initial: { scale: 1, y: 0 },
                hover: { 
                  scale: 1.04,
                  y: -3,
                  boxShadow: '0 8px 20px rgba(245, 158, 11, 0.4)',
                  transition: { duration: 0.2, ease: 'easeOut' }
                }
              }}
            >
              <span>Hire Me</span>
              <motion.span
                variants={{
                  initial: { x: 0 },
                  hover: { x: 4 }
                }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-[18px] h-[18px] stroke-[3px]" />
              </motion.span>
            </motion.button>
          </div>

          {/* RIGHT COLUMN (420px) */}
          <div className="w-full lg:w-[420px] flex flex-col items-center lg:items-center text-center z-10 lg:order-3 md:order-2">
            <h3 className="text-[18px] font-semibold text-slate-900 dark:text-white tracking-wider uppercase mb-[20px] text-center w-full">
              CONNECT WITH ME
            </h3>
            <div className="flex gap-[16px] items-center justify-center flex-nowrap overflow-visible">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex items-center justify-center w-[46px] h-[46px] rounded-full border border-white/[0.10] bg-white/[0.08] text-white opacity-100 transition-all duration-300 hover:opacity-100 hover:text-white focus:text-white focus:opacity-100 hover:cursor-pointer"
                  whileHover={{
                    y: -6,
                    scale: 1.1,
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 0 20px rgba(255, 255, 255, 0.18)',
                    borderColor: 'rgba(255, 255, 255, 0.25)',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  {getSocialIcon(link.icon)}
                </motion.a>
              ))}
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="relative z-10 w-full flex flex-col items-stretch mt-6 lg:mt-0 lg:col-span-3 lg:order-4 md:order-4">
            {/* Divider */}
            <div className="w-full h-[1px] bg-slate-300 dark:bg-slate-700 opacity-[0.15] lg:mt-[28px]" />
            
            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-slate-600 dark:text-slate-300 mt-[18px] font-normal w-full font-sans tracking-[0.2px]">
              <div className="text-center md:text-left whitespace-nowrap">
                © 2026 Udayagiri Rupesh &bull; All Rights Reserved
              </div>
              <div className="flex items-center justify-center md:justify-end gap-[16px] whitespace-nowrap">
                <span>Next.js</span>
                <span>&bull;</span>
                <span>React</span>
                <span>&bull;</span>
                <span>Tailwind CSS</span>
                <span>&bull;</span>
                <span>TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
