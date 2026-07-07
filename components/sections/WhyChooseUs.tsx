'use client';

import { motion } from 'framer-motion';
import { reasons } from '@/lib/site-data';
import { Reveal, ScrollTilt, ScrollTiltItem } from '@/components/motion/Reveal';
import { TextReveal } from '@/components/motion/TextReveal';
import { Blob } from '@/components/motion/Decor';
import { Tilt } from '@/components/motion/Tilt';

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-brand-cream py-24 sm:py-28">
      <Blob
        className="right-[-140px] top-10 h-[380px] w-[380px] animate-float-slow"
        color="#FFD87A"
      />
      <div className="container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: numbered timeline */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#E69500] shadow-sm">
                Why choose us
              </span>
              <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl lg:text-[44px]">
                <TextReveal text="Built for brands that want measurable growth" />
              </h2>
            </Reveal>

            <div className="mt-10 space-y-4">
              {reasons.map((r, i) => (
                <ScrollTiltItem
                  key={r.number}
                  rotate={i % 2 === 0 ? 5 : -5}
                  y={30}
                  className="group"
                >
                  <div className="flex items-start gap-5 rounded-[24px] border border-black/[0.04] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F5A300]/10 text-lg font-extrabold text-[#E69500] transition-colors group-hover:bg-[#F5A300] group-hover:text-white">
                      {r.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <r.icon className="h-5 w-5 text-[#E69500]" />
                        <h3 className="text-lg font-bold text-brand-ink">
                          {r.title}
                        </h3>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-brand-sub">
                        {r.description}
                      </p>
                    </div>
                  </div>
                </ScrollTiltItem>
              ))}
            </div>
          </div>

          {/* Right: illustration card */}
          <Reveal x={40} className="relative">
            <ScrollTilt rotate={6} y={50} scale={[0.95, 1]}>
              <Tilt max={8} scale={1.01} className="rounded-[32px]">
                <div
                  className="relative overflow-hidden rounded-[32px] border border-black/[0.05] bg-white p-3 shadow-soft"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <img
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1100"
                    alt="Our team collaborating"
                    loading="lazy"
                    className="h-[420px] w-full rounded-[24px] object-cover sm:h-[540px]"
                  />
                  <div
                    className="absolute inset-3 rounded-[24px] bg-gradient-to-t from-black/30 to-transparent"
                    style={{ transform: 'translateZ(30px)' }}
                  />
                </div>
              </Tilt>
            </ScrollTilt>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{ transform: 'translateZ(60px)' }}
              className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-soft sm:-left-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5A300] text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-extrabold text-brand-ink">
                  ROI Guarantee
                </p>
                <p className="text-xs text-brand-sub">or your money back</p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
