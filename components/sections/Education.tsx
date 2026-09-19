'use client';

import { motion } from 'framer-motion';
import { education } from '@/data/profile';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="relative py-24 w-full">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="space-y-4 mb-16 text-center md:text-left flex flex-col md:items-start items-center">
          <div className="flex items-center space-x-4">
            <div className="h-[1px] w-12 bg-indigo-500"></div>
            <span className="font-mono text-sm tracking-widest text-indigo-500 uppercase">
              // Education
            </span>
            <div className="h-[1px] w-12 bg-indigo-500 md:hidden"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space text-white">
            Academic Background
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative group rounded-3xl p-[1px] overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-500/40 hover:to-violet-500/40 transition-all duration-500 shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          
          <div className="relative bg-gray-950/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center md:items-start justify-between gap-8 z-10">
            {/* Ambient background glow inside card */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-colors duration-500"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-colors duration-500"></div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start w-full relative z-10">
              <div className="flex-shrink-0 p-5 bg-black/50 rounded-2xl border border-white/10 shadow-lg group-hover:border-indigo-500/40 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300">
                <GraduationCap className="w-10 h-10 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
              </div>

              <div className="flex-grow text-center md:text-left space-y-4 pt-1">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-space mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-cyan-300 transition-all duration-300">
                    {education.university}
                  </h3>
                  <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-gray-400 bg-white/5 w-fit mx-auto md:mx-0 px-4 py-2 rounded-lg border border-white/5">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-cyan-500" />
                      <span className="font-medium text-gray-200">{education.degree}</span>
                    </div>
                    <span className="hidden md:inline text-gray-600">•</span>
                    <span className="text-gray-400 font-mono text-sm">{education.field}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 relative z-10 md:pt-2">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 border border-white/10 font-mono text-sm text-indigo-300 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 transition-all duration-300">
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
