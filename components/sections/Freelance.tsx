'use client';

import { motion } from 'framer-motion';
import { Layers, Monitor, Server, BarChart3, Database, Rocket, ArrowRight, LucideIcon } from 'lucide-react';
import { freelanceServices } from '@/data/profile';
import Link from 'next/link';

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Monitor,
  Server,
  BarChart3,
  Database,
  Rocket
};

export default function Freelance() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const }
    }
  };

  return (
    <section id="freelance" className="py-24 relative overflow-hidden bg-[#020205]">
      {/* Premium background effects */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#020205]/0 to-[#020205] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-900/10 via-[#020205]/0 to-[#020205] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold font-['Space_Grotesk'] text-white mb-6 tracking-tight">
              BUILD SOMETHING <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">GREAT.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-['Inter']">
              I build modern, responsive and scalable digital products for businesses, startups and independent projects.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {freelanceServices.map((service) => {
            const Icon = iconMap[service.icon] || Layers;
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10" />
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all duration-300">
                    <Icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white mb-3 group-hover:text-cyan-50">
                    {service.title}
                  </h3>
                  {/* Assuming service object doesn't have description based on provided data, but adding space for structure if needed */}
                  <div className="h-1 w-8 bg-white/10 rounded-full group-hover:w-16 group-hover:bg-cyan-500/50 transition-all duration-300 mt-4" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <Link href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 overflow-hidden">
            <div className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>
            <span className="relative flex items-center gap-2 text-lg">
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
