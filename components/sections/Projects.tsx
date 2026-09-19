'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Database,
  Cpu,
  Upload,
  CheckCircle2,
  Terminal,
  Zap,
} from 'lucide-react';
import { projects } from '@/data/profile';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

const DataFlowVisual = ({ accentColor }: { accentColor: string }) => {
  return (
    <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] flex flex-col items-center justify-center p-6 sm:p-8 bg-[#050914] border border-white/10 rounded-2xl overflow-hidden group">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Animated nodes pipeline */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between w-full max-w-lg gap-4 sm:gap-0">
        
        {/* Node 1 */}
        <div className="flex flex-col items-center gap-2">
          <motion.div 
            className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden"
            whileHover={{ scale: 1.1, borderColor: accentColor }}
          >
            <Upload className="w-6 h-6 text-white/70" />
            <motion.div 
              className="absolute inset-0 opacity-20"
              style={{ backgroundColor: accentColor }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <span className="text-[10px] uppercase tracking-wider text-white/50 font-mono">Source</span>
        </div>

        {/* Connecting Line 1 */}
        <div className="hidden sm:block flex-1 h-[2px] bg-white/10 relative mx-2">
          <motion.div 
            className="absolute top-0 left-0 bottom-0 w-1/3"
            style={{ backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }}
            animate={{ x: ['-100%', '300%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Node 2 */}
        <div className="flex flex-col items-center gap-2">
          <motion.div 
            className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden"
            whileHover={{ scale: 1.1, borderColor: accentColor }}
          >
            <Cpu className="w-7 h-7 text-white/90" />
            <motion.div 
              className="absolute inset-0 opacity-20"
              style={{ backgroundColor: accentColor }}
              animate={{ opacity: [0.1, 0.4, 0.1] }}
              transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <span className="text-[10px] uppercase tracking-wider text-white/50 font-mono">Process</span>
        </div>

        {/* Connecting Line 2 */}
        <div className="hidden sm:block flex-1 h-[2px] bg-white/10 relative mx-2">
          <motion.div 
            className="absolute top-0 left-0 bottom-0 w-1/3"
            style={{ backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }}
            animate={{ x: ['-100%', '300%'] }}
            transition={{ duration: 1.5, delay: 0.75, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Node 3 */}
        <div className="flex flex-col items-center gap-2">
          <motion.div 
            className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden"
            whileHover={{ scale: 1.1, borderColor: accentColor }}
          >
            <Database className="w-6 h-6 text-white/70" />
            <motion.div 
              className="absolute inset-0 opacity-20"
              style={{ backgroundColor: accentColor }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <span className="text-[10px] uppercase tracking-wider text-white/50 font-mono">Store</span>
        </div>

      </div>

      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
        <div className="text-xs font-mono text-white/30">sys.pipeline.status // ACTIVE</div>
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <motion.div 
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: accentColor }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const NexusVisual = ({ accentColor }: { accentColor: string }) => {
  return (
    <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] flex items-center justify-center p-6 sm:p-8 bg-[#05050a] border border-white/10 rounded-2xl overflow-hidden">
      <div className="w-full max-w-md bg-[#0a0a14] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[260px]">
        {/* Top bar */}
        <div className="h-9 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>
          <div className="ml-auto w-20 h-3 rounded-full bg-white/10" />
        </div>
        
        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-14 border-r border-white/5 p-2 flex flex-col gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-sm bg-white/20" />
              </div>
            ))}
          </div>
          
          {/* Dashboard Area */}
          <div className="flex-1 p-3 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div className="w-28 h-5 rounded bg-white/10" />
              <div className="w-14 h-5 rounded-full" style={{ backgroundColor: `${accentColor}33`, color: accentColor }}></div>
            </div>
            
            {/* Grid */}
            <div className="grid grid-cols-2 gap-2">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="h-16 rounded-lg border border-white/5 bg-white/[0.02] p-2.5 flex flex-col justify-between">
                  <div className="w-6 h-6 rounded-full bg-white/10" />
                  <div className="w-full h-1 rounded-full" style={{ backgroundColor: accentColor }} />
                </div>
              ))}
            </div>

            {/* List */}
            <div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02] p-2 flex flex-col gap-1.5">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-white/10" />
                  <div className="flex-1 h-2 rounded-full bg-white/5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PulseVisual = ({ accentColor }: { accentColor: string }) => {
  return (
    <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] flex items-center justify-center p-6 sm:p-8 bg-[#030712] border border-white/10 rounded-2xl overflow-hidden">
      <div className="w-full max-w-sm relative z-10">
        <div className="flex items-end gap-2 h-40 w-full justify-between pb-4 border-b border-white/10 relative">
          {[40, 70, 45, 90, 65, 80, 55, 100].map((height, i) => (
            <motion.div
              key={i}
              className="w-full rounded-t-sm relative group"
              style={{ backgroundColor: `${accentColor}33` }}
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
            >
              <div 
                className="absolute top-0 left-0 right-0 h-1 rounded-t-sm"
                style={{ backgroundColor: accentColor }}
              />
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-white/40 text-[10px] font-mono mb-1">TOTAL EVENTS</span>
            <span className="text-xl font-bold text-white tracking-tight">2,845,901</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-white/40 text-[10px] font-mono mb-1">STATUS</span>
            <span className="text-xs font-mono font-semibold" style={{ color: accentColor }}>ONLINE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectVisual = ({ id, accentColor }: { id: string, accentColor: string }) => {
  switch (id.toLowerCase()) {
    case 'dataflow':
      return <DataFlowVisual accentColor={accentColor} />;
    case 'nexus':
      return <NexusVisual accentColor={accentColor} />;
    case 'pulse':
      return <PulseVisual accentColor={accentColor} />;
    default:
      return <DataFlowVisual accentColor={accentColor} />;
  }
};

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-24 md:py-36 bg-[#030712] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-12 bg-cyan-500"></div>
            <span className="font-mono text-cyan-400 text-xs sm:text-sm tracking-widest uppercase">
              // FEATURED PROJECTS
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-space tracking-tight"
          >
            Engineering Showcase
          </motion.h2>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;
            
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7 }}
                className={cn(
                  "flex flex-col gap-8 lg:gap-14 items-center",
                  isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                )}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-1/2">
                  <ProjectVisual id={project.id} accentColor={project.accentColor} />
                </div>
                
                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6 relative">
                  
                  {/* Subtle Background Number */}
                  <div className="text-6xl sm:text-8xl font-black text-white/[0.04] font-mono leading-none pointer-events-none select-none absolute -top-8 left-0 z-0">
                    {project.number}
                  </div>

                  <div className="relative z-10 flex flex-col gap-5 pt-4">
                    <div>
                      <span className="font-mono text-xs sm:text-sm font-semibold mb-2 block uppercase tracking-wider" style={{ color: project.accentColor }}>
                        {project.subtitle}
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-bold font-space tracking-tight text-white mb-3">
                        {project.name}
                      </h3>
                      <p className="text-gray-300 text-base leading-relaxed font-inter">
                        {project.description}
                      </p>
                    </div>

                    {/* Problem & Solution */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white/[0.03] border border-white/10 p-4 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Terminal className="w-4 h-4 text-gray-400" />
                          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-300">Problem</h4>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed font-inter">
                          {project.problem}
                        </p>
                      </div>
                      <div className="bg-white/[0.03] border border-white/10 p-4 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4" style={{ color: project.accentColor }} />
                          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-300">Solution</h4>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed font-inter">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-xs font-mono text-gray-400 mb-2.5 tracking-widest uppercase font-semibold">Key Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2.5">
                            <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: project.accentColor }} />
                            <span className="text-xs text-gray-300 font-inter">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 border border-white/10 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-white/10">
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full text-black font-semibold text-xs sm:text-sm transition-transform hover:scale-105 active:scale-95 shadow-md"
                        style={{ backgroundColor: project.accentColor }}
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/15 text-white font-medium text-xs sm:text-sm hover:bg-white/20 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>View Source</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
