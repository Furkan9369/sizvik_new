'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/site-data';
import { Reveal, ScrollTiltItem } from '@/components/motion/Reveal';
import { TextReveal } from '@/components/motion/TextReveal';
import { Tilt } from '@/components/motion/Tilt';

export function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-brand-cream py-24 sm:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#E69500] shadow-sm">
            Selected work
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            <TextReveal text="Brands we've helped grow" />
          </h2>
          <p className="mt-4 text-balance text-base text-brand-sub sm:text-lg">
            A snapshot of recent campaigns, builds and brand systems — each
            measured against real revenue, not impressions.
          </p>
        </Reveal>

        <div
          className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: 1400 }}
        >
          {projects.map((p, i) => (
            <ScrollTiltItem
              key={p.title}
              rotate={i % 2 === 0 ? 6 : -6}
              y={45}
              className={`group h-full ${p.span}`}
            >
              <Tilt
                max={9}
                scale={1.01}
                glow
                className="h-full rounded-[28px]"
              >
                <article
                  className="relative h-full overflow-hidden rounded-[28px] border border-black/[0.05] shadow-soft"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ transform: 'translateZ(20px)' }}
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 p-6"
                    style={{ transform: 'translateZ(45px)' }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#FFD87A]">
                      {p.category}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-white">
                      {p.title}
                    </h3>
                    <a
                      href="#contact"
                      className="mt-3 inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      View Project
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              </Tilt>
            </ScrollTiltItem>
          ))}
        </div>
      </div>
    </section>
  );
}
