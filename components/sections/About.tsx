'use client';

import { motion } from 'framer-motion';
import { Database, Server, Code, BarChart3, Cpu, Globe } from 'lucide-react';

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
    <section id="about" className="relative py-20 sm:py-28 w-full bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-10 bg-cyan-500"></div>
                <span className="font-mono text-xs sm:text-sm tracking-widest text-cyan-400 uppercase font-semibold">
                  // ABOUT ME
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space text-white leading-tight">
                Engineer. Builder. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-500">
                  Problem Solver.
                </span>
              </h2>
            </div>
            
            <div className="flex flex-col gap-4 text-gray-300 font-inter text-base sm:text-lg leading-relaxed">
              <p>
                I am a passionate <strong className="text-white">Data Engineer</strong> and <strong className="text-white font-semibold">Full-Stack Developer</strong> dedicated to building robust, scalable data architectures and modern web applications. My expertise lies in designing efficient pipelines, optimizing database systems, and bridging the gap between raw data and actionable insights.
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
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[550px] sm:h-[600px] w-full flex items-center justify-center p-6 sm:p-8 bg-[#070b19] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 pointer-events-none"></div>
            
            <div className="relative flex flex-col justify-between h-full w-full max-w-[240px]">
              {/* Connecting Line */}
              <div className="absolute top-[3%] bottom-[3%] left-1/2 w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-500/20 via-violet-500/20 to-cyan-500/20 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-cyan-400 to-transparent rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"
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
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="relative z-10 flex items-center bg-[#0d1326] border border-white/10 rounded-xl p-3 shadow-lg backdrop-blur-md self-center group hover:border-cyan-500/50 hover:bg-[#121a33] transition-all hover:scale-105 w-full justify-center"
                  >
                    <Icon className="w-4 h-4 text-cyan-400 mr-2.5 group-hover:text-cyan-300 transition-colors" />
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
