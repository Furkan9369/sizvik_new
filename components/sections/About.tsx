'use client';

import { Target, Eye, Award } from 'lucide-react';
import { stats } from '@/lib/site-data';
import { Counter, Reveal, ScrollTilt, ScrollTiltItem } from '@/components/motion/Reveal';
import { TextReveal } from '@/components/motion/TextReveal';
import { Blob } from '@/components/motion/Decor';
import { Tilt } from '@/components/motion/Tilt';

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <Blob
        className="left-[-120px] bottom-0 h-[340px] w-[340px] animate-float-slower"
        color="#F5A300"
      />
      <div className="container-px relative">
        <ScrollTilt rotate={4} y={40} scale={[0.97, 1]}>
          <div className="overflow-hidden rounded-[32px] border border-black/[0.05] bg-gradient-to-br from-[#FFF6E8] to-white p-8 shadow-soft sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#E69500] shadow-sm">
                  About Sizvik
                </span>
                <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl lg:text-[44px]">
                  <TextReveal text="A growth partner, not just another agency" />
                </h2>
                <p className="mt-5 text-base leading-relaxed text-brand-sub">
                  Sizvik is a full-service digital marketing
                  studio. We blend strategy, creative and technology to build
                  brands that win attention and convert it into revenue. From
                  early-stage startups to established names, we treat every
                  client&apos;s budget like our own.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      icon: Target,
                      title: 'Mission',
                      text: 'Make premium growth marketing accessible to every ambitious brand.',
                    },
                    {
                      icon: Eye,
                      title: 'Vision',
                      text: 'A world where great products never fail for lack of reach.',
                    },
                    {
                      icon: Award,
                      title: 'Experience',
                      text: '9+ years and 320+ projects across 14 industries.',
                    },
                  ].map((b) => (
                    <div
                      key={b.title}
                      className="rounded-[20px] border border-black/[0.05] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5A300]/10 text-[#E69500]">
                        <b.icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-3 text-base font-bold text-brand-ink">
                        {b.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-brand-sub">
                        {b.text}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-5">
                {stats.map((s, i) => (
                  <ScrollTiltItem
                    key={s.label}
                    rotate={i % 2 === 0 ? 6 : -6}
                    y={35}
                    className="h-full"
                  >
                    <Tilt max={9} scale={1.02} className="h-full rounded-[24px]">
                      <div
                        className="flex h-full flex-col justify-center rounded-[24px] border border-black/[0.05] bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-glow"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <p
                          className="text-4xl font-extrabold tracking-tight text-[#F5A300] sm:text-5xl"
                          style={{ transform: 'translateZ(35px)' }}
                        >
                          <Counter to={s.value} suffix={s.suffix} />
                        </p>
                        <p
                          className="mt-2 text-sm font-medium text-brand-sub"
                          style={{ transform: 'translateZ(20px)' }}
                        >
                          {s.label}
                        </p>
                      </div>
                    </Tilt>
                  </ScrollTiltItem>
                ))}
              </div>
            </div>
          </div>
        </ScrollTilt>
      </div>
    </section>
  );
}
