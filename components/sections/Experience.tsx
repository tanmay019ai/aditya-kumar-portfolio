'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/profile';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import clsx from 'clsx';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 w-full bg-[#02050f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="mb-16 text-center md:text-left flex flex-col md:items-start items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 bg-violet-500"></div>
            <span className="font-mono text-xs sm:text-sm tracking-widest text-violet-400 uppercase font-semibold">
              // CAREER PATH
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space text-white">
            Professional Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-500 via-violet-500 to-cyan-500"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>

          <div className="flex flex-col gap-12 sm:gap-16">
            {experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-start md:items-center w-full">
                  
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#030712] border-2 border-cyan-400 -translate-x-1/2 mt-[24px] md:mt-0 z-20 shadow-[0_0_12px_rgba(0,212,255,0.6)]"
                  />

                  {/* Desktop Layout Spacer */}
                  <div className={clsx("hidden md:block w-1/2 pr-10", !isEven && "order-1")} />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className={clsx(
                      "w-full md:w-1/2 pl-10 md:pl-0 relative",
                      isEven ? "md:pr-10 md:text-right" : "md:pl-10 order-2"
                    )}
                  >
                    <div className="bg-[#070c1e] backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-violet-500/50 transition-all duration-300 group overflow-hidden relative shadow-xl">
                      <div className="flex flex-col gap-4 relative z-10">
                        <div className={clsx("flex flex-wrap items-center gap-2.5", isEven ? "md:justify-end" : "md:justify-start")}>
                          <h3 className="text-xl sm:text-2xl font-bold text-white font-space">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="px-2.5 py-0.5 text-[11px] font-mono font-semibold text-cyan-300 bg-cyan-500/10 rounded-full border border-cyan-500/30">
                              PRESENT
                            </span>
                          )}
                        </div>

                        <div className={clsx("flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-300 font-mono", isEven ? "md:justify-end" : "md:justify-start")}>
                          <div className="flex items-center gap-1.5 text-white font-semibold">
                            <Briefcase className="w-3.5 h-3.5 text-violet-400" />
                            <span>{exp.company}</span>
                            <span className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] text-gray-300">{exp.type}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-gray-400">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-gray-400">
                            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <p className={clsx("text-gray-300 leading-relaxed text-sm sm:text-base font-inter", isEven ? "md:text-right" : "md:text-left")}>
                          {exp.description}
                        </p>

                        <div className={clsx("flex flex-wrap gap-2 pt-2", isEven ? "md:justify-end" : "md:justify-start")}>
                          {exp.skills.map(skill => (
                            <span key={skill} className="px-2.5 py-1 text-xs font-mono text-gray-300 bg-white/5 rounded-md border border-white/10">
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
