'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/profile';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import clsx from 'clsx';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 w-full bg-black/20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="space-y-4 mb-20 text-center md:text-left flex flex-col md:items-start items-center">
          <div className="flex items-center space-x-4">
            <div className="h-[1px] w-12 bg-violet-500"></div>
            <span className="font-mono text-sm tracking-widest text-violet-500 uppercase">
              // Experience
            </span>
            <div className="h-[1px] w-12 bg-violet-500 md:hidden"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space text-white">
            Professional Journey
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-500 via-violet-500 to-cyan-500"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-16">
            {experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-start md:items-center w-full">
                  
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-cyan-400 -translate-x-1/2 mt-[30px] md:mt-0 z-20 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                  />

                  {/* Desktop Layout Spacer Left */}
                  <div className={clsx("hidden md:block w-1/2 pr-12", !isEven && "order-1")} />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 50 }}
                    className={clsx(
                      "w-full md:w-1/2 pl-12 md:pl-0 pt-2 md:pt-0 relative",
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12 order-2"
                    )}
                  >
                    <div className="bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:border-violet-500/50 hover:bg-gray-800/60 transition-all duration-300 group overflow-hidden relative shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className={clsx("flex flex-col gap-5 relative z-10", isEven ? "md:items-end" : "md:items-start")}>
                        <div className={clsx("flex flex-wrap items-center gap-3", isEven ? "md:justify-end" : "md:justify-start")}>
                          <h3 className="text-2xl md:text-3xl font-bold text-white font-space group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-violet-300 transition-all">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="px-3 py-1 text-xs font-mono font-medium text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                              CURRENT
                            </span>
                          )}
                        </div>

                        <div className={clsx("flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400 font-mono", isEven ? "md:justify-end" : "md:justify-start")}>
                          <div className="flex items-center gap-1.5 text-gray-200 font-medium">
                            <Briefcase className="w-4 h-4 text-violet-400" />
                            <span>{exp.company}</span>
                            <span className="mx-1 text-gray-500 px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] uppercase tracking-wider">{exp.type}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-cyan-400" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-cyan-400" />
                            <span>{exp.location}</span>
                            <span className="mx-1 text-gray-500 px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] uppercase tracking-wider">{exp.mode}</span>
                          </div>
                        </div>

                        <p className={clsx("text-gray-400 leading-relaxed text-sm md:text-base text-left", isEven ? "md:text-right" : "md:text-left")}>
                          {exp.description}
                        </p>

                        <div className={clsx("flex flex-wrap gap-2 mt-2", isEven ? "md:justify-end" : "md:justify-start")}>
                          {exp.skills.map(skill => (
                            <span key={skill} className="px-3 py-1 text-xs font-medium text-gray-300 bg-black/40 rounded-md border border-white/5 hover:border-cyan-500/40 hover:text-white transition-colors cursor-default">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
