'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight, Terminal } from 'lucide-react';
import dynamic from 'next/dynamic';
import { profile } from '@/data/profile';

// Dynamically import the 3D scene to avoid SSR issues and improve initial load
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <HeroScene />

      {/* Content overlay */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Freelance Badge */}
          {profile.freelanceStatus && (
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">
                {profile.freelanceStatus}
              </span>
            </motion.div>
          )}

          {/* Headlines */}
          <motion.div variants={itemVariants} className="mb-6 space-y-2">
            <h1 className="font-space font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white uppercase leading-none">
              {profile.name}
            </h1>
          </motion.div>

          {/* Roles */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-8 font-space text-xl md:text-3xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {profile.headline || 'DATA ENGINEER'}
            </span>
            <span className="hidden sm:block text-slate-600">/</span>
            <span className="text-slate-400 font-light">
              {profile.secondaryRole || 'FULL-STACK DEVELOPER'}
            </span>
          </motion.div>

          {/* Tagline/Description */}
          <motion.div variants={itemVariants} className="max-w-2xl mb-12">
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              {profile.tagline || 'Building scalable data systems, powerful backend architectures and modern digital experiences.'}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <a 
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative group-hover:text-white transition-colors duration-300">Explore My Work</span>
              <Terminal className="relative w-5 h-5 group-hover:text-white transition-colors duration-300" />
            </a>
            
            <a 
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all"
            >
              <span>Let's Build Something</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 uppercase tracking-widest font-space">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
