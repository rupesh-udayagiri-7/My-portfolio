'use client';

import React from 'react';
import { codingProfiles } from '../data/portfolio';
import Heading from './ui/Heading';
import Card from './ui/Card';
import Button from './ui/Button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiHackerrank } from 'react-icons/si';
import { ExternalLink } from 'lucide-react';

export default function CodingProfiles() {
  // Map strings to React Icon elements
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <FaGithub className="w-[30px] h-[30px] text-[#24292e] dark:text-[#f0f6fc]" />;
      case 'linkedin':
        return <FaLinkedin className="w-[30px] h-[30px] text-[#0a66c2]" />;
      case 'leetcode':
        return <SiLeetcode className="w-[30px] h-[30px] text-[#ffa116]" />;
      case 'codechef':
        return <SiCodechef className="w-[30px] h-[30px] text-[#5b4636] dark:text-[#d09e72]" />;
      case 'hackerrank':
        return <SiHackerrank className="w-[30px] h-[30px] text-[#2ec866]" />;
      default:
        return <FaGithub className="w-[30px] h-[30px]" />;
    }
  };

  return (
    <section id="coding-profiles" className="min-h-screen flex flex-col justify-center items-center px-6 py-24 w-full">
      <Card className="w-full max-w-[1200px] min-h-[600px] p-8 md:p-12 text-center bg-card-bg/25 dark:bg-card-bg/15 !rounded-[10px] flex flex-col justify-center items-center" animateHover={false}>
        <Heading
          title="Coding Profiles"
          subtitle="Platform Performance"
          description="Verify my online profile registries, coding challenge stats, and open-source contribution metrics."
        />

        {/* Center-aligned 5-column layout with 8px spacing and edge balance offset */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-[8px] mx-auto mt-8 justify-center max-w-fit">
          {codingProfiles.map((profile) => (
            <Card
              key={profile.name}
              className="flex flex-col justify-center items-center text-center p-8 py-8 w-full xl:w-[196px] min-h-[330px] xl:h-[330px] bg-slate-200/20 dark:bg-slate-800/10 !rounded-[10px] transition-all duration-300"
              animateHover={true}
            >
              {/* Square, Platform Icon Frame with bottom margin */}
              <div className="w-[50px] h-[50px] bg-slate-200/50 dark:bg-slate-800/50 mb-4 border border-card-border/60 flex items-center justify-center rounded-[10px] shadow-sm flex-shrink-0">
                {getIcon(profile.icon)}
              </div>

              {/* Platform Details */}
              <h3 className="font-extrabold text-lg text-foreground mb-1">
                {profile.name}
              </h3>
              
              <p className="text-xs font-semibold text-amber-500 dark:text-[#FBBF24] mb-4 truncate w-full" title={profile.username}>
                @{profile.username}
              </p>

              <div className="text-[11px] text-text-muted font-medium bg-slate-200/40 dark:bg-slate-800/40 px-3 py-2 rounded-[10px] mb-4 w-full min-h-[3rem] flex items-center justify-center leading-relaxed">
                {profile.stats}
              </div>

              {/* Centered action button - narrower width, increased vertical height/breadth, and flat corners */}
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center mt-auto"
              >
                <Button 
                  variant="primary" 
                  size="md" 
                  className="w-4/5 max-w-[200px] gap-2 text-xs font-extrabold uppercase tracking-widest shadow-lg shadow-amber-500/10 hover:shadow-amber-500/30 !rounded-[10px] border-0 py-[16px]"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0px 8px 20px rgba(245, 158, 11, 0.35)",
                    filter: "brightness(1.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visit Profile <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </a>
            </Card>
          ))}
        </div>
      </Card>
    </section>
  );
}
