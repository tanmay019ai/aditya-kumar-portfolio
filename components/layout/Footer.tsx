'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#02040a] pt-16 pb-8 border-t border-white/10 overflow-hidden">
      {/* Glow highlight top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          {/* Brand Info */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center text-white text-base font-bold shadow-lg shadow-cyan-500/20">
              AS
            </div>
            <h2 className="text-2xl sm:text-3xl font-space font-extrabold tracking-tight text-white uppercase">
              ADITYA KUMAR SRIVASTAVA
            </h2>
            <p className="text-gray-400 font-inter text-xs sm:text-sm max-w-md">
              Data Engineer • Full-Stack Developer • Freelancer
            </p>
          </div>

          {/* Direct Contact Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 py-2 font-mono text-xs">
            <a 
              href={`tel:${profile.phone.replace(/\s+/g, '')}`} 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{profile.phone}</span>
            </a>
            <a 
              href={`mailto:${profile.email}`} 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{profile.email}</span>
            </a>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{profile.location}</span>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom Line */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500 font-inter">
          <p>© {currentYear} Aditya Kumar Srivastava. All rights reserved.</p>
          <p className="font-mono text-gray-400">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
