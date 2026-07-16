'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { educationHistory } from '../data/portfolio';
import Heading from './ui/Heading';
import Card from './ui/Card';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="min-h-screen flex flex-col justify-center items-center px-6 py-12 md:py-24 w-full">
      <Card className="w-full max-w-[1150px] h-auto lg:h-[400px] p-6 md:p-8 flex flex-col justify-center items-center text-center bg-card-bg/25 dark:bg-card-bg/15" animateHover={false}>
        <Heading
          title="Education History"
          subtitle="Academic timeline"
          description="My formal academic pathways and graduation statuses in computer science engineering and core sciences."
          className="mb-0"
        />

        <div className="flex flex-wrap gap-5 md:gap-6 w-full mt-6 justify-center">
          {educationHistory.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="w-full max-w-[330px] h-[220px] flex-shrink-0"
            >
              <Card className="w-full h-full flex flex-col items-center justify-between text-center p-4 bg-slate-200/20 dark:bg-slate-800/10 border border-card-border" animateHover={true}>
                {/* Cap Icon in Gold */}
                <div className="p-2 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/20 text-[#FBBF24] mb-3 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>

                {/* Duration in Soft Gold */}
                <span className="text-[9px] sm:text-[10px] font-extrabold text-[#FACC15] uppercase tracking-widest mb-1.5 block">
                  {item.duration}
                </span>

                {/* Degree Info */}
                <div className="flex-grow flex flex-col justify-center space-y-1 mb-3">
                  {/* Degree Title in Pure White */}
                  <h3 className="text-sm sm:text-base font-bold text-[#FFFFFF] leading-tight">
                    {item.degree}
                  </h3>
                  {/* Course Name in Light Silver */}
                  <p className="text-[11px] font-semibold text-[#D1D5DB]">
                    {item.field}
                  </p>
                  {/* College Name in Gold */}
                  <p className="text-[11px] font-bold text-[#FBBF24]">
                    {item.institution}
                  </p>
                </div>

                {/* Grade in Sky Blue */}
                {item.grade && (
                  <div className="px-3 py-1 rounded bg-slate-200/45 dark:bg-slate-800/40 text-[9px] font-extrabold tracking-wide uppercase text-[#60A5FA] border border-[#60A5FA]/20 mt-auto">
                    Grade/GPA: {item.grade}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </Card>
    </section>
  );
}
