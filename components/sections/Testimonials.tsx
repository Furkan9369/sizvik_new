'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { testimonials } from '@/lib/site-data';
import { Reveal, ScrollTilt } from '@/components/motion/Reveal';
import { TextReveal } from '@/components/motion/TextReveal';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const count = testimonials.length;

  const go = useCallback(
    (next: number) => {
      setDir(next > index ? 1 : -1);
      setIndex((next + count) % count);
    },
    [index, count]
  );

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const t = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-brand-cream py-24 sm:py-28"
    >
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#E69500] shadow-sm">
            Client love
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            <TextReveal text="What our clients say" />
          </h2>
        </Reveal>

        <ScrollTilt rotate={5} y={40} scale={[0.96, 1]} className="mx-auto mt-12 max-w-3xl">
          <div className="relative">
          <Quote className="mx-auto h-12 w-12 fill-[#F5A300]/20 text-[#F5A300]" />

          <div className="relative mt-6 min-h-[280px] sm:min-h-[240px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[28px] border border-black/[0.05] bg-white p-8 text-center shadow-soft sm:p-10"
              >
                <div className="mb-4 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#F5A300] text-[#F5A300]"
                    />
                  ))}
                </div>
                <p className="text-balance text-lg leading-relaxed text-brand-ink sm:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-7 flex items-center justify-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-[#F5A300]/30"
                  />
                  <div className="text-left">
                    <p className="text-sm font-bold text-brand-ink">{t.name}</p>
                    <p className="text-xs text-brand-sub">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-brand-ink transition-all hover:bg-[#F5A300] hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? 'w-7 bg-[#F5A300]'
                      : 'w-2 bg-black/15 hover:bg-black/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-brand-ink transition-all hover:bg-[#F5A300] hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        </ScrollTilt>
      </div>
    </section>
  );
}
