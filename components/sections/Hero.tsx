'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight, Terminal, Sparkles } from 'lucide-react';
import dynamic from 'next/dynamic';
import { profile } from '@/data/profile';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 w-full h-full -z-10 flex items-center justify-center opacity-20">
      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeOut' as const },
    },
  };

  const handleScrollClick = (href: string) => {
    const elem = document.getElementById(href.replace('#', ''));
    if (elem) {
      const offset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      {/* 3D Background */}
      <HeroScene />

      {/* Content overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col gap-6"
        >
          {/* Freelance Badge */}
          {profile.freelanceStatus && (
            <motion.div 
              variants={itemVariants}
              className="w-fit"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,212,255,0.15)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono font-semibold text-cyan-300 tracking-wider uppercase">
                  {profile.freelanceStatus}
                </span>
              </div>
            </motion.div>
          )}

          {/* Headline */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <h1 className="font-space font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-white uppercase leading-[0.95]">
              {profile.name}
            </h1>
          </motion.div>

          {/* Roles */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-wrap items-center gap-3 font-space text-lg sm:text-2xl md:text-3xl font-semibold tracking-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {profile.headline || 'DATA ENGINEER'}
            </span>
            <span className="text-gray-600 font-light">•</span>
            <span className="text-gray-300 font-normal">
              {profile.secondaryRole || 'FULL-STACK DEVELOPER'}
            </span>
          </motion.div>

          {/* Tagline/Description */}
          <motion.div variants={itemVariants} className="max-w-2xl">
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed font-inter">
              {profile.tagline || 'Building scalable data systems, powerful backend architectures and modern digital experiences.'}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#projects"
              onClick={(e) => { e.preventDefault(); handleScrollClick('#projects'); }}
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 active:scale-95"
            >
              <Sparkles className="w-5 h-5 text-cyan-200" />
              <span className="text-sm font-semibold tracking-wide">Explore My Work</span>
            </a>
            
            <a 
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScrollClick('#contact'); }}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/15 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="text-sm font-medium tracking-wide">Let's Build Something</span>
              <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
