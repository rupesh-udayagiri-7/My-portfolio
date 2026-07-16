'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '../data/portfolio';
import Heading from './ui/Heading';
import Card from './ui/Card';
import Button from './ui/Button';
import { ExternalLink, Info, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'web' | 'ai' | 'other'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Categories
  const categories: { label: string; value: typeof filter }[] = [
    { label: 'All', value: 'all' },
    { label: 'AI & ML', value: 'ai' },
    { label: 'Web Applications', value: 'web' },
    { label: 'Other Tech', value: 'other' },
  ];

  // Filter Logic
  const filteredProjects = projects.filter((p) => {
    return filter === 'all' || p.category === filter;
  });

  return (
    <section id="projects" className="min-h-screen md:min-h-[1050px] md:h-[1050px] flex flex-col justify-center items-center px-6 py-12 md:py-24 w-full max-w-[5000px] mx-auto scroll-mt-24">
      <Card className="w-full max-w-[1150px] h-[500px] overflow-y-auto p-8 md:p-12 text-center bg-card-bg/25 dark:bg-card-bg/15" animateHover={false}>
        <Heading
          title="Featured Projects"
          subtitle="Portfolio"
          description="A showcase of functional websites, machine learning models, and automated services I built."
        />

        {/* Filters wrapper */}
        <div className="flex justify-center items-center mb-12 w-full max-w-4xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  filter === cat.value
                    ? 'bg-gradient-premium text-white shadow-md'
                    : 'glass-card text-text-muted hover:text-foreground'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Projects */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="flex flex-col h-full overflow-hidden p-0 group bg-slate-200/20 dark:bg-slate-800/10" animateHover={true}>
                  {/* Project Image Wrapper */}
                  <div className="relative h-48 w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-800 px-2 py-0.5 rounded">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow text-left items-start justify-between">
                    <div className="w-full flex flex-col items-start">
                      <h3 className="text-base font-extrabold text-foreground mb-2 group-hover:text-[#FBBF24] dark:group-hover:text-[#FBBF24] transition-colors leading-snug text-left w-full">
                        {project.title}
                      </h3>
                      <p className="text-xs text-text-muted line-clamp-3 mb-4 leading-relaxed text-left w-full">
                        {project.description}
                      </p>

                      {/* Tech stack items */}
                      <div className="flex flex-wrap gap-1.5 mb-6 justify-start w-full">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[9px] font-bold bg-slate-200/50 dark:bg-slate-800/50 px-2 py-0.5 rounded text-foreground/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-3 gap-1.5 mt-auto w-full">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" size="sm" className="w-full gap-1 p-2 text-[10px]">
                          <FaGithub className="w-3.5 h-3.5" /> Github
                        </Button>
                      </a>
                      {project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="primary" size="sm" className="w-full gap-1 p-2 text-[10px]">
                            <ExternalLink className="w-3.5 h-3.5" /> Demo
                          </Button>
                        </a>
                      ) : (
                        <div className="opacity-50">
                          <Button variant="secondary" size="sm" className="w-full gap-1 p-2 text-[10px] pointer-events-none">
                            <ExternalLink className="w-3.5 h-3.5" /> Offline
                          </Button>
                        </div>
                      )}
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                        className="gap-1 border border-dashed border-[#FBBF24]/20 text-amber-500 dark:text-[#FBBF24] p-2 text-[10px]"
                      >
                        <Info className="w-3.5 h-3.5" /> Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Card>

      {/* Projects Details Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="glass-card max-w-2xl w-full rounded-2xl overflow-hidden p-0 relative flex flex-col max-h-[85vh] shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            >
              {/* Image banner */}
              <div className="relative h-60 w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/50 hover:bg-slate-950/80 text-white transition-all cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2 text-center">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-bold bg-[#FBBF24]/10 border border-[#FBBF24]/20 text-amber-500 dark:text-[#FBBF24] px-2.5 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 text-center">
                  <h4 className="font-bold text-lg text-foreground border-b border-card-border pb-2">
                    Project Overview
                  </h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-3 text-left max-w-md mx-auto">
                  <h4 className="font-bold text-lg text-foreground border-b border-card-border pb-2 text-center">
                    Key Features & Technical Accomplishments
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.details.map((point, i) => (
                      <li key={i} className="flex gap-2 text-sm text-foreground/90">
                        <span className="text-[#FBBF24] font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Buttons */}
                <div className="flex gap-4 pt-4 border-t border-card-border">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="secondary" className="w-full gap-2">
                      <FaGithub className="w-5 h-5" /> View Repository
                    </Button>
                  </a>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="primary" className="w-full gap-2">
                        <ExternalLink className="w-5 h-5" /> Launch Live App
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
