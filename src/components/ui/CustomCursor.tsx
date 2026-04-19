'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/* ================= CUSTOM CURSOR COMPONENT ================= */
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    /* --- Mouse Movement Tracker --- */
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, { 
        x: e.clientX, 
        y: e.clientY, 
        duration: 0.15, 
        ease: 'power2.out' 
      });
    };

    /* --- Hover State Handlers --- */
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' || 
          target.closest('.interactive-element')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-3 h-3 bg-sblue rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out flex items-center justify-center ${
        isHovering ? 'w-12 h-12 bg-transparent border-2 border-sblue mix-blend-exclusion' : ''
      }`}
    />
  );
}