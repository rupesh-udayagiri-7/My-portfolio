import React from 'react';
import Navbar from '../components/Navbar';
import ParticleBg from '../components/ParticleBg';
import CustomCursor from '../components/CustomCursor';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import CodingProfiles from '../components/CodingProfiles';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollButton from '../components/ScrollButton';

export default function Home() {
  return (
    <>
      {/* Background elements */}
      <ParticleBg />
      
      {/* Custom follower cursor */}
      <CustomCursor />
      
      {/* Header / Nav */}
      <Navbar />
      
      {/* Page Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <CodingProfiles />
        <Certifications />
        <Contact />
        <Footer />
      </main>

      {/* Floating Scroll Button */}
      <ScrollButton />
    </>
  );
}

