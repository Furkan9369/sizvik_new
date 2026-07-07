'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/site-data';
import { Reveal, ScrollTiltItem } from '@/components/motion/Reveal';
import { TextReveal } from '@/components/motion/TextReveal';
import { Tilt } from '@/components/motion/Tilt';

export function Services() {
  return (
    <section id="services" className="relative bg-white py-24 sm:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F5A300]/10 px-4 py-1.5 text-xs font-semibold text-[#E69500]">
            What we do
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            <TextReveal text="Our Premium Services" />
          </h2>
          <p className="mt-4 text-balance text-base text-brand-sub sm:text-lg">
            A full-stack growth team under one roof — strategy, creative, media
            and technology working together to move your numbers.
          </p>
        </Reveal>

        <div
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: 1200 }}
        >
          {services.map((s, i) => (
            <ScrollTiltItem
              key={s.title}
              rotate={i % 2 === 0 ? 7 : -7}
              y={50}
              className="group h-full"
            >
              <Tilt
                max={10}
                scale={1.015}
                glow
                className="h-full rounded-[28px]"
              >
                <article
                  className="relative h-full overflow-hidden rounded-[28px] border border-black/[0.05] bg-white shadow-soft transition-shadow duration-500 group-hover:shadow-glow"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div
                    className="relative h-52 overflow-hidden"
                    style={{ transform: 'translateZ(30px)' }}
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span
                      className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 text-[#E69500] shadow-sm backdrop-blur"
                      style={{ transform: 'translateZ(40px)' }}
                    >
                      <s.icon className="h-5 w-5" />
                    </span>
                    <h3
                      className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white"
                      style={{ transform: 'translateZ(25px)' }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <div className="p-6" style={{ transform: 'translateZ(20px)' }}>
                    <p className="text-sm leading-relaxed text-brand-sub">
                      {s.description}
                    </p>
                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#E69500] transition-colors hover:text-[#F5A300]"
                    >
                      Learn more
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
