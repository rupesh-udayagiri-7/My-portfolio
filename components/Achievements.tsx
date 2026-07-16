'use client';

import React, { useEffect, useState, useRef } from 'react';
import { achievements } from '../data/portfolio';
import Card from './ui/Card';

function CountUp({ endValue, duration = 1.5 }: { endValue: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const currentRef = elementRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = endValue;
    if (start === end) return;

    // Calculate increment interval based on duration
    const totalSteps = 60; // 60 frames
    const stepTime = (duration * 1000) / totalSteps;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, endValue, duration]);

  return <span ref={elementRef}>{count}</span>;
}

export default function Achievements() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full">
      {achievements.map((item) => (
        <Card
          key={item.label}
          className="flex flex-col items-center justify-center text-center p-5 bg-slate-200/20 dark:bg-slate-800/10 backdrop-blur-md select-none"
          animateHover={true}
        >
          {/* Number Counter */}
          <div className="text-2xl md:text-4xl font-black text-gradient mb-1 tracking-tight">
            <CountUp endValue={item.value} />
            <span>{item.suffix}</span>
          </div>
          
          {/* Achievement text label */}
          <p className="text-[10px] md:text-xs font-bold text-text-muted uppercase tracking-wider">
            {item.label}
          </p>
        </Card>
      ))}
    </div>
  );
}
