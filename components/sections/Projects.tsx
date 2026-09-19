'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ExternalLink,
  Database,
  Cpu,
  Server,
  BarChart3,
  Upload,
  CheckCircle2,
  Activity,
  Layers,
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
    <div className="relative w-full h-full min-h-[350px] lg:min-h-[450px] flex flex-col items-center justify-center p-4 sm:p-8 bg-black/40 border border-white/10 rounded-2xl overflow-hidden group">
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
        {/* Mobile Connecting Line 1 */}
        <div className="sm:hidden w-[2px] h-8 bg-white/10 relative my-1">
          <motion.div 
            className="absolute top-0 left-0 right-0 h-1/3"
            style={{ backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }}
            animate={{ y: ['-100%', '300%'] }}
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
        {/* Mobile Connecting Line 2 */}
        <div className="sm:hidden w-[2px] h-8 bg-white/10 relative my-1">
          <motion.div 
            className="absolute top-0 left-0 right-0 h-1/3"
            style={{ backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }}
            animate={{ y: ['-100%', '300%'] }}
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
    <div className="relative w-full h-full min-h-[350px] lg:min-h-[450px] flex items-center justify-center p-4 sm:p-8 bg-[#050505] border border-white/10 rounded-2xl overflow-hidden">
      {/* Dashboard Mockup Container */}
      <div className="w-full max-w-md bg-[#0a0a0f] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[280px]">
        {/* Top bar */}
        <div className="h-10 border-b border-white/5 flex items-center px-4 gap-3 bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <div className="ml-auto w-24 h-4 rounded-full bg-white/5" />
        </div>
        
        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-16 border-r border-white/5 p-3 flex flex-col gap-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                <div className="w-4 h-4 rounded-sm bg-white/20" />
              </div>
            ))}
          </div>
          
          {/* Dashboard Area */}
          <div className="flex-1 p-4 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="w-32 h-6 rounded bg-white/10" />
              <div className="w-16 h-6 rounded-full" style={{ backgroundColor: `${accentColor}33`, color: accentColor }}></div>
            </div>
            
            {/* Grid */}
            <div className="grid grid-cols-2 gap-3">
              {[...Array(2)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="h-20 rounded-lg border border-white/5 bg-white/[0.02] p-3 flex flex-col justify-between"
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                >
                  <div className="w-8 h-8 rounded-full bg-white/10" />
                  <div className="w-16 h-2 rounded-full bg-white/20" />
                  <motion.div 
                    className="w-full h-1 rounded-full mt-2"
                    style={{ backgroundColor: accentColor }}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: Math.random() * 0.5 + 0.3 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  />
                </motion.div>
              ))}
            </div>

            {/* List */}
            <div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02] p-3 flex flex-col gap-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-white/10" />
                  <div className="flex-1 h-2 rounded-full bg-white/5" />
                  <div className="w-8 h-2 rounded-full bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full blur-[100px] opacity-20 pointer-events-none"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  );
};

const PulseVisual = ({ accentColor }: { accentColor: string }) => {
  return (
    <div className="relative w-full h-full min-h-[350px] lg:min-h-[450px] flex items-center justify-center p-4 sm:p-8 bg-[#02050a] border border-white/10 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]"></div>
      
      <div className="w-full max-w-sm relative z-10">
        <div className="flex items-end gap-2 h-48 w-full justify-between pb-4 border-b border-white/10 relative">
          {[40, 70, 45, 90, 65, 80, 55, 100].map((height, i) => (
            <motion.div
              key={i}
              className="w-full rounded-t-sm relative group"
              style={{ backgroundColor: `${accentColor}33` }}
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1, type: "spring", stiffness: 50 }}
            >
              <motion.div 
                className="absolute top-0 left-0 right-0 rounded-t-sm"
                style={{ backgroundColor: accentColor }}
                initial={{ height: 0 }}
                animate={{ height: "4px" }}
                transition={{ delay: 1 + i * 0.1 }}
              />
              <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono bg-white/10 px-2 py-1 rounded backdrop-blur-sm transition-opacity">
                {height}k
              </div>
            </motion.div>
          ))}
          
          {/* Animated line chart overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <motion.path 
              d="M 0 120 Q 30 50 60 100 T 130 30 T 200 60 T 280 40 T 350 0" 
              fill="none" 
              stroke={accentColor} 
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              style={{ filter: `drop-shadow(0 0 8px ${accentColor})` }}
            />
          </svg>
        </div>
        
        <div className="flex justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-white/40 text-xs font-mono mb-1">TOTAL EVENTS</span>
            <span className="text-2xl font-semibold text-white tracking-tight">
              2,845,901
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-white/40 text-xs font-mono mb-1">REALTIME</span>
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: accentColor }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-white/90 text-sm font-mono" style={{ color: accentColor }}>+42/s</span>
            </div>
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
    <section id="projects" className="relative w-full py-24 md:py-40 bg-[#020205] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-white/20"></div>
            <span className="font-mono text-white/50 text-sm tracking-widest uppercase">
              // PROJECTS
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter"
          >
            Featured Work
          </motion.h2>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-32 md:gap-56">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1; // 0-indexed, so index 1 is the 2nd item (even)
            
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={cn(
                  "flex flex-col gap-12 lg:gap-20",
                  isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                )}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
                  <ProjectVisual id={project.id} accentColor={project.accentColor} />
                </div>
                
                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center relative">
                  
                  {/* Big Number Background */}
                  <div className="absolute -top-20 -left-10 text-[180px] font-bold text-white/[0.02] font-mono leading-none pointer-events-none select-none z-0">
                    {project.number}
                  </div>

                  <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex flex-col">
                      <span className="font-mono text-sm mb-3 tracking-wider uppercase" style={{ color: project.accentColor }}>
                        {project.subtitle}
                      </span>
                      <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        {project.name}
                      </h3>
                      <p className="text-white/60 text-lg leading-relaxed mb-8">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-8">
                      {/* Problem & Solution */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/[0.02] border border-white/5 p-5 rounded-xl">
                          <div className="flex items-center gap-2 mb-3">
                            <Terminal className="w-4 h-4 text-white/40" />
                            <h4 className="text-sm font-medium text-white/80">Problem</h4>
                          </div>
                          <p className="text-sm text-white/50 leading-relaxed">
                            {project.problem}
                          </p>
                        </div>
                        <div className="bg-white/[0.02] border border-white/5 p-5 rounded-xl">
                          <div className="flex items-center gap-2 mb-3">
                            <Zap className="w-4 h-4" style={{ color: project.accentColor }} />
                            <h4 className="text-sm font-medium text-white/80">Solution</h4>
                          </div>
                          <p className="text-sm text-white/50 leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-sm font-mono text-white/40 mb-4 tracking-widest uppercase">Key Features</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {project.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: project.accentColor }} />
                              <span className="text-sm text-white/70">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tech.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1.5 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center gap-2 px-6 py-3 rounded-full text-black font-medium transition-transform hover:scale-105 active:scale-95"
                          style={{ backgroundColor: project.accentColor }}
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>View Source</span>
                        </a>
                      </div>
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
