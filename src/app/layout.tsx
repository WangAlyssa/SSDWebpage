import type { Metadata } from 'next';
import { DM_Serif_Display, Outfit } from 'next/font/google';
import '../styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import SmoothScroll from '@/components/ui/SmoothScroll';

/* ================= FONT CONFIGURATION ================= */
const dmSerif = DM_Serif_Display({ 
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-serif'
});

const outfit = Outfit({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-outfit'
});

/* ================= METADATA ================= */
export const metadata: Metadata = {
  title: 'Society of Software Developers | UF',
  description: 'A passionate, student-led organization dedicated to empowering the next generation of software engineers at the University of Florida.',
};

/* ================= ROOT LAYOUT ================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${outfit.variable} antialiased`}>
      <body className="bg-gradient-base text-ink min-h-screen selection:bg-sblue selection:text-ink cursor-none">
        <SmoothScroll>
          <CustomCursor />
          <Header />
          <main className="relative w-full overflow-hidden">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}