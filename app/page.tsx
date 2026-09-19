'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Freelance from '@/components/sections/Freelance';
import SystemArchitecture from '@/components/sections/SystemArchitecture';
import Contact from '@/components/sections/Contact';

const CustomCursor = dynamic(() => import('@/components/shared/CustomCursor'), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lenis: any;

    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          touchMultiplier: 2,
          infinite: false,
        });

        const raf = (time: number) => {
          lenis.raf(time);
          requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      } catch {
        // Fallback: native scroll
      }
    };

    initLenis();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />

        <div className="divider" />

        <About />

        <div className="divider" />

        <Experience />

        <div className="divider" />

        <Education />

        <div className="divider" />

        <Projects />

        <div className="divider" />

        <Skills />

        <div className="divider" />

        <SystemArchitecture />

        <div className="divider" />

        <Freelance />

        <div className="divider" />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
