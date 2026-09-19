'use client';

import { motion } from 'framer-motion';
import { education } from '@/data/profile';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-24 w-full bg-[#030712]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="mb-12 text-center md:text-left flex flex-col md:items-start items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 bg-indigo-500"></div>
            <span className="font-mono text-xs sm:text-sm tracking-widest text-indigo-400 uppercase font-semibold">
              // ACADEMICS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space text-white">
            Educational Background
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group rounded-3xl p-[1px] overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-500/30 hover:to-violet-500/30 transition-all duration-500 shadow-xl"
        >
          <div className="relative bg-[#070b18] backdrop-blur-xl rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 z-10">
            <div className="flex flex-col md:flex-row gap-5 items-center md:items-start w-full">
              <div className="shrink-0 p-4 bg-white/5 rounded-2xl border border-white/10 shadow-lg text-indigo-400">
                <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              <div className="flex-grow text-center md:text-left flex flex-col gap-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-space">
                  {education.university}
                </h3>
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-gray-300 bg-white/5 w-fit mx-auto md:mx-0 px-4 py-2 rounded-xl border border-white/10 font-inter text-sm">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <span className="font-semibold text-white">{education.degree}</span>
                  </div>
                  <span className="hidden sm:inline text-gray-500">•</span>
                  <span className="text-gray-300 font-mono text-xs sm:text-sm">{education.field}</span>
                </div>
              </div>
            </div>

            <div className="shrink-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 font-mono text-xs sm:text-sm text-indigo-300">
                <Calendar className="w-4 h-4" />
                <span>{education.period}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
