'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#020205] pt-16 pb-8 border-t border-white/5 overflow-hidden">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold tracking-tighter text-white">
              ADITYA KUMAR SRIVASTAVA
            </h2>
            <p className="text-gray-400 font-inter text-sm md:text-base max-w-lg mx-auto">
              Data Engineer • Full-Stack Developer • Freelancer
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 pt-4">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-inter text-gray-500 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 font-inter">
            © {currentYear} Aditya Kumar Srivastava. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-600 font-inter">
            <span>Built with Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
