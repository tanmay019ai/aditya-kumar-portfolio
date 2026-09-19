'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Server, Code, Wrench } from 'lucide-react';
import { skills } from '@/data/profile';
import type { LucideIcon } from 'lucide-react';

const icons: Record<string, LucideIcon> = {
  dataEngineering: Database,
  backend: Server,
  frontend: Code,
  tools: Wrench,
};

const colorMap: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  dataEngineering: { border: '#22d3ee', bg: 'rgba(34,211,238,0.08)', text: '#22d3ee', glow: 'rgba(34,211,238,0.15)' },
  backend: { border: '#8b5cf6', bg: 'rgba(139,92,246,0.08)', text: '#8b5cf6', glow: 'rgba(139,92,246,0.15)' },
  frontend: { border: '#3b82f6', bg: 'rgba(59,130,246,0.08)', text: '#3b82f6', glow: 'rgba(59,130,246,0.15)' },
  tools: { border: '#10b981', bg: 'rgba(16,185,129,0.08)', text: '#10b981', glow: 'rgba(16,185,129,0.15)' },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#030712' }}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.2), transparent)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'rgba(124,58,237,0.05)', filter: 'blur(100px)' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="font-mono text-sm tracking-wider" style={{ color: '#00d4ff' }}>// SKILLS</span>
            <div className="h-px flex-1 max-w-[100px]" style={{ backgroundColor: 'rgba(0,212,255,0.3)' }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Technical Arsenal
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {Object.entries(skills).map(([key, category]) => {
            const Icon = icons[key] || Database;
            const isActive = activeCategory === key;
            const color = colorMap[key] || colorMap.frontend;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveCategory(key)}
                onMouseLeave={() => setActiveCategory(null)}
                onClick={() => setActiveCategory(isActive ? null : key)}
                className="relative p-6 rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden group"
                style={{
                  backgroundColor: isActive ? color.bg : 'rgba(255,255,255,0.02)',
                  border: isActive ? `1px solid ${color.border}40` : '1px solid rgba(255,255,255,0.06)',
                  boxShadow: isActive ? `0 0 20px ${color.glow}` : 'none',
                }}
              >
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div
                    className="p-3 rounded-lg transition-colors duration-300"
                    style={{
                      backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.03)',
                      color: isActive ? color.text : '#9ca3af',
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3
                    className="text-xl font-bold transition-colors duration-300"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: isActive ? '#ffffff' : '#d1d5db' }}
                  >
                    {category.label}
                  </h3>
                </div>

                <div className="relative z-10 min-h-[100px]">
                  <AnimatePresence>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: isActive ? 1 : 0.6, scale: 1 }}
                          transition={{ duration: 0.3, delay: isActive ? index * 0.05 : 0 }}
                          className="px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300"
                          style={{
                            border: isActive ? `1px solid ${color.border}40` : '1px solid rgba(255,255,255,0.08)',
                            color: isActive ? color.text : '#9ca3af',
                            backgroundColor: isActive ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.03)',
                          }}
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
