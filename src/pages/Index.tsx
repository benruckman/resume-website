
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Ensure dark mode is applied on initial render
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
