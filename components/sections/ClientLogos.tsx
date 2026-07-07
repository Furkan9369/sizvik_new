'use client';

import { clientLogos } from '@/lib/site-data';

export function ClientLogos() {
  const row = [...clientLogos, ...clientLogos];
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-px">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-brand-sub">
          Trusted by ambitious brands worldwide
        </p>
      </div>
      <div className="relative mt-10 overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max marquee-track gap-4">
          {row.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl border border-black/[0.05] bg-brand-bg px-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="text-lg font-extrabold tracking-tight text-brand-ink/70">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
