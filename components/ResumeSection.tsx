'use client';

import React from 'react';
import { personalInfo } from '../data/portfolio';
import Card from './ui/Card';
import Heading from './ui/Heading';
import { FileText, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

export default function ResumeSection() {
  return (
    <section id="resume" className="min-h-screen flex flex-col justify-center items-center px-6 py-12 md:py-24 w-full">
      <Card className="w-full max-w-[500px] min-h-[500px] p-8 md:p-10 text-center bg-card-bg/25 dark:bg-card-bg/15 flex flex-col justify-between items-center" animateHover={false}>
        {/* Heading section */}
        <Heading
          title="Resume Details"
          subtitle="Curriculum Vitae"
          description="Download my developer credentials optimized for recruiter applicant tracking systems (ATS)."
          className="mb-2"
        />

        {/* Content container (centered vertically and horizontally) */}
        <div className="flex flex-col items-center justify-center flex-grow w-full space-y-4 my-2">
          {/* 1. PDF Icon Frame at the top of the block */}
          <div className="w-16 h-16 bg-slate-200/50 dark:bg-slate-800/50 border border-card-border/60 flex items-center justify-center rounded-none shadow-sm">
            <FileText className="w-8 h-8 text-[#FBBF24]" />
          </div>
          
          {/* 2. Developer Curriculum Vitae Title directly below the PDF icon */}
          <h3 className="text-lg font-extrabold text-foreground tracking-wide">
            Developer Curriculum Vitae
          </h3>
          
          {/* 3. Description paragraph immediately below the title */}
          <p className="text-xs text-text-muted leading-relaxed text-center max-w-sm">
            My resume contains structured details outlining my skills, projects, and certifications. It has been formatted and optimized for standard recruiter ATS parses.
          </p>

          {/* 4. Action button placed after description, separated by a 24px (mt-6) spacing gap */}
          <div className="w-full flex justify-center pt-6 mt-6">
            <motion.a
              href={personalInfo.resumeUrl}
              download="Udayagiri_Rupesh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-medium rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FBBF24] focus:ring-offset-2 px-5 py-2.5 text-sm bg-[#FBBF24] text-[#0B1120] gap-2.5 download-btn text-xs font-extrabold uppercase tracking-widest shadow-lg shadow-amber-500/10 hover:shadow-amber-500/30 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                confetti({
                  particleCount: 80,
                  spread: 70,
                  origin: { y: 0.8 },
                  colors: ['#FBBF24', '#F59E0B', '#3b82f6']
                });
              }}
            >
              <Download className="w-4 h-4" /> Download Resume
            </motion.a>
          </div>
        </div>
      </Card>
    </section>
  );
}
