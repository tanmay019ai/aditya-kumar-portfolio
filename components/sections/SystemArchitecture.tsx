'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Monitor, Globe, Server, Database, GitBranch, BarChart3 } from 'lucide-react';

const nodes = [
  { id: 'user', icon: User, label: 'USER', description: 'End users interact through responsive, accessible interfaces', gradient: ['#22d3ee', '#3b82f6'] },
  { id: 'frontend', icon: Monitor, label: 'FRONTEND', description: 'React/Next.js applications with TypeScript and modern UI frameworks', gradient: ['#3b82f6', '#6366f1'] },
  { id: 'api', icon: Globe, label: 'API', description: 'RESTful APIs with proper authentication, rate limiting, and validation', gradient: ['#6366f1', '#8b5cf6'] },
  { id: 'backend', icon: Server, label: 'BACKEND', description: 'Server-side logic with Java Spring Boot or Node.js, handling business rules', gradient: ['#8b5cf6', '#a855f7'] },
  { id: 'database', icon: Database, label: 'DATABASE', description: 'SQL databases optimized for performance with proper indexing and normalization', gradient: ['#a855f7', '#c084fc'] },
  { id: 'pipeline', icon: GitBranch, label: 'DATA PIPELINE', description: 'Automated data ingestion, transformation, and processing workflows', gradient: ['#c084fc', '#d946ef'] },
  { id: 'analytics', icon: BarChart3, label: 'ANALYTICS', description: 'Data visualization and insights powering business decisions', gradient: ['#d946ef', '#ec4899'] },
];

export default function SystemArchitecture() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section id="architecture" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#030712' }}>
      {/* Grid background */}
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(128,128,128,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-px flex-1 max-w-[100px] hidden sm:block" style={{ backgroundColor: 'rgba(0,212,255,0.3)' }} />
            <span className="font-mono text-sm tracking-wider" style={{ color: '#00d4ff' }}>// SYSTEM ARCHITECTURE</span>
            <div className="h-px flex-1 max-w-[100px] hidden sm:block" style={{ backgroundColor: 'rgba(0,212,255,0.3)' }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            How I Build Systems
          </motion.h2>
        </div>

        <div className="relative py-10">
          {/* Central connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full opacity-30" style={{ background: 'linear-gradient(to bottom, #22d3ee, #8b5cf6, #ec4899)' }} />
          
          {/* Animated data packets */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 overflow-hidden pointer-events-none">
            <motion.div 
              animate={{ y: ['0%', '1000%'] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              className="absolute top-0 w-full h-32"
              style={{ background: 'linear-gradient(to bottom, transparent, #22d3ee, transparent)', filter: 'blur(2px)' }}
            />
            <motion.div 
              animate={{ y: ['-500%', '1000%'] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'linear', delay: 1.5 }}
              className="absolute top-0 w-full h-20"
              style={{ background: 'linear-gradient(to bottom, transparent, #8b5cf6, transparent)', filter: 'blur(1px)' }}
            />
          </div>

          <div className="flex flex-col gap-12 relative">
            {nodes.map((node, index) => {
              const Icon = node.icon;
              const isHovered = hoveredNode === node.id;
              
              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center justify-center w-full group"
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  {/* Desktop Tooltip */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? 20 : -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-20 w-64 p-4 rounded-xl hidden md:block"
                        style={{
                          border: '1px solid rgba(255,255,255,0.1)',
                          backgroundColor: '#0a0f1e',
                          boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                          ...(index % 2 === 0 ? { right: 'calc(50% + 4rem)' } : { left: 'calc(50% + 4rem)' }),
                        }}
                      >
                        <h4 className="text-white font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{node.label}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{node.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Node */}
                  <div
                    className="relative z-10 flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl transition-all duration-300"
                    style={{
                      backgroundColor: '#050710',
                      border: isHovered ? '1px solid transparent' : '1px solid rgba(255,255,255,0.08)',
                      boxShadow: isHovered ? '0 0 30px rgba(255,255,255,0.1)' : 'none',
                    }}
                  >
                    {/* Gradient border on hover */}
                    {isHovered && (
                      <div
                        className="absolute inset-0 rounded-2xl p-[1px]"
                        style={{
                          background: `linear-gradient(135deg, ${node.gradient[0]}, ${node.gradient[1]})`,
                          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                        }}
                      />
                    )}
                    
                    <Icon
                      className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-300"
                      style={{ color: isHovered ? '#ffffff' : '#9ca3af' }}
                    />
                  </div>

                  {/* Label */}
                  <div
                    className="absolute text-xs font-bold tracking-widest hidden md:block"
                    style={{
                      color: isHovered ? '#ffffff' : '#4b5563',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      ...(index % 2 === 0 ? { left: 'calc(50% + 5rem)' } : { right: 'calc(50% + 5rem)' }),
                    }}
                  >
                    {node.label}
                  </div>

                  {/* Mobile label below node */}
                  <div className="absolute top-full mt-2 text-xs font-bold tracking-wider text-gray-500 md:hidden">
                    {node.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
