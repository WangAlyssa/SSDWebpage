'use client';

import Link from 'next/link';
import Image from 'next/image';

/* ================= GLOBAL FOOTER ================= */
export default function Footer() {
  return (
    <footer className="w-full bg-ink text-white pt-20 pb-12 px-8 border-t-[8px] border-sblue relative z-10 font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 items-start border-b border-white/10 pb-16">
        
        {/* Brand & Address */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          <div className="font-serif font-bold text-xl text-white mb-2 tracking-tight flex items-center gap-2">
            <div className="relative w-6 h-6">
              <Image src="/Photos/System/ssd_logo.svg" alt="SSD Logo" fill className="object-contain" />
            </div>
            SSD @ UF
          </div>
          <div className="text-[13px] font-sans leading-relaxed text-gray-400">
            <p>University of Florida<br />Gainesville, FL 32611</p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col lg:col-span-2 gap-5 text-xs font-sans font-bold tracking-widest uppercase text-white/90 items-start md:items-center">
          <div className="flex flex-col gap-5">
            <Link href="/" className="hover:text-sblue transition-colors duration-300 interactive-element">HOME</Link>
            <Link href="/our-story" className="hover:text-sblue transition-colors duration-300 interactive-element">OUR STORY</Link>
            <Link href="/events" className="hover:text-sblue transition-colors duration-300 interactive-element">EVENTS</Link>
            <Link href="/officers" className="hover:text-sblue transition-colors duration-300 interactive-element">OFFICERS</Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-start lg:items-end lg:col-span-1 font-sans">
          <p className="text-xs font-bold tracking-widest uppercase mb-6 text-center lg:text-right">CONNECT WITH US</p>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <a href="https://discord.com/invite/5SyB3yx" target="_blank" rel="noopener noreferrer" className="w-32 h-10 border border-white/30 rounded-sm flex items-center justify-center text-[11px] font-bold hover:bg-sblue hover:text-ink hover:border-sblue transition-all duration-300 interactive-element">
              Join Discord
            </a>
            <a href="https://github.com/ufssd" target="_blank" rel="noopener noreferrer" className="w-32 h-10 border border-white/30 rounded-sm flex items-center justify-center text-[11px] font-bold hover:bg-sblue hover:text-ink hover:border-sblue transition-all duration-300 interactive-element">
              Follow GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[1400px] mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-sans">
        <p>Copyright © {new Date().getFullYear()} Society of Software Developers. All Rights Reserved.</p>
      </div>
    </footer>
  );
}