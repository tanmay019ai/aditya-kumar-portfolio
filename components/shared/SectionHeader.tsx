'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  label,
  title,
  description,
  className,
  align = 'left'
}: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const }
    },
  };

  return (
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn(
        'mb-12 flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
        {align === 'left' && <div className="h-[1px] w-12 bg-cyan-500" />}
        <span className="section-label text-cyan-400 font-mono text-sm tracking-widest uppercase">
          {label}
        </span>
        {align === 'center' && <div className="h-[1px] w-12 bg-cyan-500 hidden md:block" />}
      </motion.div>
      
      <motion.h2 
        variants={itemVariants}
        className="font-space-grotesk text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p 
          variants={itemVariants}
          className="text-gray-400 max-w-2xl text-base md:text-lg font-inter leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
