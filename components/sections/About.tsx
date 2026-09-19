'use client';

import { motion } from 'framer-motion';
import { Database, Server, Code, BarChart3, Cpu, Globe, Activity } from 'lucide-react';

const flowNodes = [
  { id: 'data', label: 'DATA', icon: Database },
  { id: 'processing', label: 'PROCESSING', icon: Cpu },
  { id: 'api', label: 'API', icon: Server },
  { id: 'backend', label: 'BACKEND', icon: Code },
  { id: 'database', label: 'DATABASE', icon: Database },
  { id: 'application', label: 'APPLICATION', icon: Globe },
  { id: 'analytics', label: 'ANALYTICS', icon: BarChart3 },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-[1px] w-12 bg-cyan-500"></div>
                <span className="font-mono text-sm tracking-widest text-cyan-500 uppercase">
                  // About
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-space text-white leading-tight">
                Engineer. Builder. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                  Problem Solver.
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-400 font-inter text-lg leading-relaxed">
              <p>
                I am a passionate Data Engineer and Full-Stack Developer dedicated to building robust, scalable data architectures and modern web applications. My expertise lies in designing efficient pipelines, optimizing database systems, and bridging the gap between raw data and actionable insights.
              </p>
              <p>
                With a strong foundation in SQL, Backend Development, and API integration, I tackle complex technical challenges to deliver seamless, performant solutions. I believe in writing clean, maintainable code and architecting systems that are not just functional, but scalable and resilient.
              </p>
              <p>
                Whether it's structuring complex data models, developing responsive user interfaces, or deploying full-stack applications, I approach every project with an engineering mindset and a commitment to quality.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Flow Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[650px] w-full flex items-center justify-center p-8 bg-black/40 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 pointer-events-none"></div>
            
            <div className="relative flex flex-col justify-between h-full w-full max-w-[240px]">
              {/* Connecting Line */}
              <div className="absolute top-[3%] bottom-[3%] left-1/2 w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-500/20 via-violet-500/20 to-cyan-500/20 rounded-full overflow-hidden">
                {/* Animated Particle */}
                <motion.div 
                  className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-cyan-400 to-transparent rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                  animate={{
                    top: ["-15%", "115%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>

              {/* Nodes */}
              {flowNodes.map((node, index) => {
                const Icon = node.icon;
                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative z-10 flex items-center bg-gray-900/90 border border-white/10 rounded-xl p-3.5 shadow-lg backdrop-blur-md self-center group hover:border-cyan-500/50 hover:bg-gray-800 transition-all hover:scale-105 w-full justify-center"
                  >
                    <Icon className="w-5 h-5 text-cyan-400 mr-3 group-hover:text-cyan-300 transition-colors" />
                    <span className="font-mono text-xs font-semibold tracking-wider text-gray-200 group-hover:text-white transition-colors">
                      {node.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
