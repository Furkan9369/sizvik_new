'use client';

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowRight, Sparkles, Star, TrendingUp } from 'lucide-react';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { Blob, WaveDivider } from '@/components/motion/Decor';
import { TextReveal, ParagraphReveal } from '@/components/motion/TextReveal';
import { MeshBackground } from '@/components/motion/MeshBackground';
import { Magnetic } from '@/components/motion/Cursor';

const HeroScene = dynamic(
  () => import('@/components/motion/HeroScene').then((m) => m.HeroScene),
  { ssr: false }
);

export function Hero() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 120, damping: 20, mass: 0.5 });
  const rotateX = useTransform(sy, [0, 1], [6, -6]);
  const rotateY = useTransform(sx, [0, 1], [-6, 6]);
  const layerX = useTransform(sx, [0, 1], [-18, 18]);
  const layerY = useTransform(sy, [0, 1], [-14, 14]);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const scrollSpring = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.6,
  });
  const scrollRotateX = useTransform(scrollSpring, [0, 1], [0, 18]);
  const scrollScale = useTransform(scrollSpring, [0, 1], [1, 0.9]);
  const scrollY = useTransform(scrollSpring, [0, 1], [0, -80]);
  const scrollOpacity = useTransform(scrollSpring, [0, 0.7, 1], [1, 1, 0.4]);
  const combinedRotateX = useTransform(
    [rotateX, scrollRotateX],
    ([a, b]) => (a as number) + (b as number)
  );
  const layerXInverse = useTransform(layerX, (v) => -v);
  const layerYInverse = useTransform(layerY, (v) => -v);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF6E8] via-[#FCEBC9] to-[#F5F5F5] pb-28 pt-36 sm:pt-44 lg:pb-36"
    >
      <MeshBackground />
      {/* Decorative blobs */}
      <Blob
        className="left-[-120px] top-24 h-[360px] w-[360px] animate-float-slow"
        color="#F5A300"
      />
      <Blob
        className="right-[-100px] top-10 h-[320px] w-[320px] animate-float-slower"
        color="#FFD87A"
      />
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.04]" />

      <div className="container-px relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-xs font-semibold text-brand-sub shadow-sm backdrop-blur"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#F5A300]" />
            Premium Digital Marketing Agency
            <span className="mx-1 opacity-30">•</span>
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-[#F5A300] text-[#F5A300]" /> 4.9
            </span>
          </motion.div>

          <h1 className="text-balance text-[34px] font-extrabold leading-[1.08] tracking-tight text-brand-ink sm:text-[52px] lg:text-[68px]">
            <TextReveal text="Grow Your Brand with" delay={0.3} />{' '}
            <span className="relative inline-block">
              <TextReveal text="Powerful" delay={0.6} className="text-gradient" />
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 14"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 11C70 4 230 2 298 7"
                  stroke="#F5A300"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            <TextReveal text="Digital Marketing" delay={0.8} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mx-auto mt-7 max-w-2xl text-balance text-base leading-relaxed text-brand-sub sm:text-lg"
          >
            We help businesses dominate online with Social Media Marketing,
            Facebook Ads, Google Ads, Website Development, Branding, Graphic
            Design, SEO and AI Automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Magnetic strength={0.3} className="w-full sm:w-auto">
              <a href="#contact" className="btn-primary group w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic strength={0.2} className="w-full sm:w-auto">
              <a href="#services" className="btn-ghost w-full sm:w-auto">
                <Sparkles className="mr-2 h-4 w-4 text-[#F5A300]" />
                Our Services
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* 3D Hero Scene — floating glass orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] opacity-90 sm:h-[500px] sm:w-[500px] lg:right-[-4rem] lg:top-[-2rem]"
        >
          <HeroScene />
        </motion.div>

        {/* Glass hero card */}
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            mx.set((e.clientX - r.left) / r.width);
            my.set((e.clientY - r.top) / r.height);
          }}
          onMouseLeave={() => {
            mx.set(0.5);
            my.set(0.5);
          }}
          style={{ perspective: 1200 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <motion.div
            style={{
              rotateX: combinedRotateX,
              rotateY,
              y: scrollY,
              scale: scrollScale,
              opacity: scrollOpacity,
              transformStyle: 'preserve-3d',
            }}
            className="glass relative overflow-hidden rounded-[32px] border border-white/60 p-3 shadow-soft"
          >
            <div className="relative overflow-hidden rounded-[24px]">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Digital marketing team at work"
                className="h-[280px] w-full object-cover sm:h-[420px] lg:h-[480px]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating stat chips */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                style={{ x: layerX, y: layerY, transform: 'translateZ(70px)' }}
                className="absolute left-4 top-4 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-soft backdrop-blur sm:left-6 sm:top-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5A300]/15">
                  <TrendingUp className="h-5 w-5 text-[#E69500]" />
                </span>
                <div>
                  <p className="text-lg font-extrabold leading-none text-brand-ink">
                    +312%
                  </p>
                  <p className="text-xs text-brand-sub">Avg. ROAS lift</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.85, duration: 0.6 }}
                style={{
                  x: layerXInverse,
                  y: layerYInverse,
                  transform: 'translateZ(90px)',
                }}
                className="absolute bottom-4 right-4 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-soft backdrop-blur sm:bottom-6 sm:right-6"
              >
                <div className="flex -space-x-2">
                  {[
                    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80',
                    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80',
                    'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=80',
                  ].map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt="Client"
                      className="h-8 w-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold leading-none text-brand-ink">
                    320+ brands
                  </p>
                  <p className="text-xs text-brand-sub">trust Sizvik</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <WaveDivider className="absolute bottom-0 left-0" fill="#FFFFFF" />
    </section>
  );
}
