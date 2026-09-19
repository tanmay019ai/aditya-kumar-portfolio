'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Freelance', href: '#freelance' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      const offset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-[1000] transition-all duration-300',
        isScrolled 
          ? 'py-3.5 bg-[#030712]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50'
          : 'py-6 bg-gradient-to-b from-[#030712]/80 to-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group flex items-center gap-2 font-space text-2xl font-extrabold tracking-tighter"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            AS
          </span>
          <span className="bg-gradient-to-r from-white via-gray-200 to-cyan-400 bg-clip-text text-transparent font-bold text-lg hidden sm:inline-block tracking-tight">
            ADITYA<span className="text-cyan-400 font-light">.DEV</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-inter text-xs lg:text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors tracking-wider uppercase py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs lg:text-sm font-semibold tracking-wide transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,212,255,0.15)]"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Let's Talk</span>
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-white/10 bg-[#030712]/95 backdrop-blur-2xl px-6 py-6 flex flex-col gap-3 shadow-2xl"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="py-2.5 text-lg font-space border-b border-white/5 text-gray-300 hover:text-cyan-400 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-gray-600">0{i + 1}</span>
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              className="mt-4 py-3 text-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-base shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Let's Talk</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
