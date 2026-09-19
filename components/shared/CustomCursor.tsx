'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorDot = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const cursorRing = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    // Hidden on mobile, only run cursor logic on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      cursorDot.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Smooth follow for the ring
      cursorRing.current.x += (cursorDot.current.x - cursorRing.current.x) * 0.15;
      cursorRing.current.y += (cursorDot.current.y - cursorRing.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${cursorDot.current.x}px, ${cursorDot.current.y}px, 0) translate(-50%, -50%)`;
      }
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${cursorRing.current.x}px, ${cursorRing.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseenter', onMouseEnter);
    
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  return (
    <>
      <div 
        ref={dotRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-cyan-400 transition-opacity duration-300 hidden md:block ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ mixBlendMode: 'screen' }}
      />
      <div 
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-cyan-400/50 transition-all duration-300 ease-out hidden md:block ${isVisible ? 'opacity-100' : 'opacity-0'} ${isHovering ? 'h-12 w-12 bg-cyan-400/10 backdrop-blur-[2px]' : 'h-8 w-8'}`}
      />
    </>
  );
}
