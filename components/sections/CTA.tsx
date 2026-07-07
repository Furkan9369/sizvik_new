'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { Reveal, ScrollTilt } from '@/components/motion/Reveal';
import { TextReveal } from '@/components/motion/TextReveal';
import { Magnetic } from '@/components/motion/Cursor';
import { Blob } from '@/components/motion/Decor';
import { Tilt } from '@/components/motion/Tilt';

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="container-px">
        <Reveal>
          <ScrollTilt rotate={3} y={35} scale={[0.97, 1]}>
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#FFF6E8] to-[#FCEBC9] p-8 shadow-soft sm:p-12 lg:p-16">
            <Blob
              className="right-[-80px] top-[-60px] h-[260px] w-[260px] animate-float-slow"
              color="#F5A300"
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-balance text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl lg:text-[44px]">
                  <TextReveal text="Ready to grow your business?" />
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-brand-sub">
                  Book a free 30-minute strategy call. We&apos;ll audit your
                  funnel, map quick wins and show you exactly how we&apos;d
                  drive growth — no commitment required.
                </p>
                <Magnetic strength={0.3} className="inline-block">
                  <a href="#contact" className="btn-primary group mt-8">
                    <CalendarDays className="mr-2 h-5 w-5" />
                    Book Free Meeting
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Magnetic>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto w-full max-w-sm"
              >
                <Tilt max={10} scale={1.02} className="rounded-[28px]">
                  <div
                    className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/70 p-3 shadow-soft backdrop-blur"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <img
                      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                      alt="Marketing strategy meeting"
                      loading="lazy"
                      className="h-64 w-full rounded-[20px] object-cover sm:h-72"
                    />
                  </div>
                </Tilt>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  style={{ transform: 'translateZ(60px)' }}
                  className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-soft"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5A300] text-white">
                    <CalendarDays className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-brand-ink">
                      Free 30-min call
                    </p>
                    <p className="text-xs text-brand-sub">No commitment</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          </ScrollTilt>
        </Reveal>
      </div>
    </section>
  );
}
