'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks } from '@/lib/site-data';
import { ScrollProgress } from '@/components/motion/Reveal';
import { Magnetic } from '@/components/motion/Cursor';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <ScrollProgress />
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 sm:pt-7">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`flex w-full max-w-[1180px] items-center justify-between rounded-full px-3 py-3 pl-3 transition-all duration-500 ${
            scrolled
              ? 'glass shadow-soft'
              : 'bg-[#F5A300] shadow-[0_18px_50px_rgba(245,163,0,0.35)]'
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
              <Sparkles className="h-6 w-6 text-[#F5A300]" />
            </span>
            <span
              className={`text-[15px] font-extrabold tracking-tight transition-colors duration-500 ${
                scrolled ? 'text-brand-ink' : 'text-white'
              }`}
            >
              Sizvik
            </span>
          </a>

          {/* Desktop links */}
          <ul
            className={`hidden items-center gap-1 lg:flex ${
              scrolled ? 'text-brand-ink' : 'text-white'
            }`}
          >
            {navLinks.map((l) => (
              <li key={l.href}>
                <Magnetic strength={0.25}>
                  <a
                    href={l.href}
                    className="group relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/15"
                  >
                    {l.label}
                    <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#F5A300] transition-all duration-300 group-hover:w-2/3" />
                  </a>
                </Magnetic>
              </li>
            ))}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95 sm:inline-flex ${
                scrolled
                  ? 'bg-[#F5A300] text-white hover:bg-[#E69500] hover:shadow-glow'
                  : 'bg-white text-[#F5A300] hover:bg-[#FFF6E8]'
              }`}
            >
              Free Consultation
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
                scrolled
                  ? 'bg-brand-cream text-brand-ink'
                  : 'bg-white/20 text-white'
              }`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-x-4 top-24 rounded-[28px] bg-white p-4 shadow-soft"
            >
              <ul className="flex flex-col">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3.5 text-base font-medium text-brand-ink transition-colors hover:bg-brand-cream"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-3 w-full"
              >
                Get Free Consultation
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
