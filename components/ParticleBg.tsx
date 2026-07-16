'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

export default function ParticleBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle setup
    const particleCount = Math.min(60, Math.floor((width * height) / 25000));
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
    }> = [];

    const colors = theme === 'dark' 
      ? ['#FBBF24', '#F59E0B', '#3b82f6'] // gold, amber, deep blue
      : ['#fef08a', '#fde047', '#93c5fd']; // pastel equivalents

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4 - 0.2, // bias floating upwards
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Move particle
        p.x += p.speedX;
        p.y += p.speedY;

        // Boundary checks
        if (p.x < 0 || p.x > width) p.speedX *= -1;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      // Draw subtle connecting lines (only for particles close to each other)
      ctx.globalAlpha = 0.05;
      ctx.strokeStyle = theme === 'dark' ? '#ffffff' : '#000000';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      {/* Dynamic Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Floating Blurry Glow Blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-amber-500/10 dark:bg-amber-600/10 blur-[120px] animate-float" />
      <div className="absolute top-[60%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-yellow-500/5 dark:bg-yellow-600/5 blur-[130px] animate-float [animation-delay:2s]" />
      <div className="absolute bottom-[10%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-blue-500/5 dark:bg-blue-600/5 blur-[100px] animate-float [animation-delay:4s]" />
    </div>
  );
}
