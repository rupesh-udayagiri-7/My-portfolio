'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolio';
import Heading from './ui/Heading';
import Card from './ui/Card';
import { Code2, Database, Globe, Settings, Wrench } from 'lucide-react';

export default function Skills() {
  // Category Icons mapping
  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming Languages': <Code2 className="w-4 h-4 text-blue-500" />,
    Frontend: <Globe className="w-4 h-4 text-purple-500" />,
    Backend: <Settings className="w-4 h-4 text-cyan-500" />,
    Database: <Database className="w-4 h-4 text-emerald-500" />,
    'Tools & DevOps': <Wrench className="w-4 h-4 text-amber-500" />,
  };

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center px-6 py-12 md:py-24 w-full scroll-mt-24">
      <Card className="w-full max-w-6xl h-auto lg:h-[400px] p-6 md:p-8 flex flex-col justify-center items-center text-center bg-card-bg/25 dark:bg-card-bg/15" animateHover={false}>
        
        <Heading
          title="Technical Skills"
          subtitle="Expertise"
          description="A categorized directory of programming languages, libraries, and frameworks I use to engineer software."
          className="mb-0"
        />

        {/* Symmetrical centered flex wrap of category cards with balanced gap from header */}
        <div className="flex flex-wrap gap-4 sm:gap-6 w-full mt-6 justify-center max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="w-[120px] h-[160px] sm:w-[150px] sm:h-[190px] flex-shrink-0"
            >
              <Card className="w-full h-full p-3 sm:p-4 flex flex-col items-center justify-center text-center bg-slate-200/20 dark:bg-slate-800/10 hover:border-amber-500/25" animateHover={true}>
                {/* Heading Category with compact icon stacked, centered, and padded */}
                <div className="flex flex-col items-center justify-center gap-1 mb-2.5 pb-1.5 border-b border-card-border/80 w-full text-center">
                  <div className="p-1 rounded bg-slate-200/50 dark:bg-slate-800/50 flex-shrink-0">
                    {categoryIcons[category.title] || <Code2 className="w-4 h-4 text-purple-500" />}
                  </div>
                  <h4 className="font-extrabold text-[10px] sm:text-[12px] text-foreground tracking-tight leading-snug w-full text-center break-words">{category.title}</h4>
                </div>

                {/* List Format: Centered block with perfectly aligned vertical dots */}
                <ul className="space-y-1 text-left w-fit mx-auto mt-1.5">
                  {category.skills.map((skill) => (
                    <li 
                      key={skill.name} 
                      className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-semibold text-foreground/80 hover:text-amber-500 dark:hover:text-[#FBBF24] transition-colors w-full"
                    >
                      <span className="w-1 h-1 rounded-full bg-gradient-premium flex-shrink-0" />
                      <span className="truncate max-w-[70px] sm:max-w-[105px]">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

      </Card>
    </section>
  );
}
