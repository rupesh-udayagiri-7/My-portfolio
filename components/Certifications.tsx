'use client';

import React from 'react';
import { certifications } from '../data/portfolio';
import Heading from './ui/Heading';
import Card from './ui/Card';
import Button from './ui/Button';
import { Award, Calendar, ExternalLink } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="min-h-screen flex flex-col justify-center items-center px-6 py-12 md:py-24 w-full">
      <Card className="w-full max-w-[1200px] min-h-[450px] p-8 md:p-12 text-center bg-card-bg/25 dark:bg-card-bg/15 flex flex-col justify-center items-center" animateHover={false}>
        <Heading
          title="Licenses & Certifications"
          subtitle="Credentials"
          description="Verify my professional learning credentials, specialization courses, and ongoing educational goals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-auto max-w-fit justify-center">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex flex-col w-full lg:w-[345px] items-center">
              <Card className="flex flex-col w-full h-[240px] overflow-hidden p-0 group bg-slate-200/20 dark:bg-slate-800/10" animateHover={true}>
                {/* Image Banner */}
                <div className="relative h-[170px] w-full overflow-hidden bg-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 p-2 rounded-xl bg-[#FBBF24]/20 border border-[#FBBF24]/30 backdrop-blur-md text-white">
                    <Award className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 py-3 flex flex-col flex-grow text-center items-center justify-center">
                  <h3 className="font-extrabold text-xs text-foreground mb-1 group-hover:text-[#FBBF24] dark:group-hover:text-[#FBBF24] transition-colors line-clamp-2 min-h-[2rem]">
                    {cert.title}
                  </h3>
                  
                  <p className="text-[9px] font-bold text-amber-500 dark:text-[#FBBF24] uppercase tracking-wider">
                    {cert.issuer}
                  </p>
                </div>
              </Card>

              {/* Issued Date and View Button below the individual card frame */}
              <div className="w-full mt-3 flex flex-col items-center">
                <div className="flex items-center justify-center gap-1.5 text-[8px] uppercase font-bold tracking-widest text-text-muted mb-2">
                  <Calendar className="w-3 h-3 text-[#FBBF24]/80" />
                  <span>Issued: {cert.date}</span>
                </div>

                {cert.image && (
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block"
                  >
                    <Button variant="secondary" size="sm" className="w-full py-2 gap-2 border border-card-border/80 text-[9px] uppercase font-extrabold tracking-wider">
                      View Certificate <ExternalLink className="w-3 h-3" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
