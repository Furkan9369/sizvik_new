'use client';

import { steps } from '@/lib/site-data';
import { Reveal, ScrollTiltItem } from '@/components/motion/Reveal';
import { TextReveal } from '@/components/motion/TextReveal';

export function Process() {
  return (
    <section className="relative bg-white py-24 sm:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F5A300]/10 px-4 py-1.5 text-xs font-semibold text-[#E69500]">
            How we work
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            <TextReveal text="A simple, proven process" />
          </h2>
          <p className="mt-4 text-balance text-base text-brand-sub sm:text-lg">
            Four focused stages that take you from idea to compounding growth.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-[2px] bg-gradient-to-r from-[#F5A300]/10 via-[#F5A300]/40 to-[#F5A300]/10 lg:block" />

          <div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            style={{ perspective: 1000 }}
          >
            {steps.map((s, i) => (
              <ScrollTiltItem
                key={s.number}
                rotate={i % 2 === 0 ? 8 : -8}
                y={40}
                className="relative text-center"
              >
                <div
                  className="relative mx-auto flex h-24 w-24 items-center justify-center"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <span className="absolute inset-0 rounded-full bg-[#F5A300]/10" />
                  <span
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-soft ring-1 ring-black/[0.05]"
                    style={{ transform: 'translateZ(30px)' }}
                  >
                    <s.icon className="h-7 w-7 text-[#E69500]" />
                  </span>
                  <span
                    className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#F5A300] text-xs font-bold text-white shadow-sm"
                    style={{ transform: 'translateZ(45px)' }}
                  >
                    {s.number}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-brand-ink">
                  {s.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[240px] text-sm leading-relaxed text-brand-sub">
                  {s.description}
                </p>
              </ScrollTiltItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
