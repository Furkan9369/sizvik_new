'use client';

import {
  Sparkles,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  ArrowUp,
} from 'lucide-react';
import { navLinks } from '@/lib/site-data';

const serviceLinks = [
  'Social Media Marketing',
  'Facebook Ads',
  'Google Ads',
  'Website Development',
  'SEO',
  'AI Automation',
];

const socials = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Youtube, label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white pt-16">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F5A300] shadow-sm">
                <Sparkles className="h-6 w-6 text-white" />
              </span>
              <span className="text-base font-extrabold tracking-tight text-brand-ink">
                Sizvik
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-sub">
              A premium digital marketing agency helping ambitious brands grow
              with strategy, creative and technology.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.06] bg-brand-bg text-brand-sub transition-all hover:-translate-y-1 hover:bg-[#F5A300] hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-ink">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-brand-sub transition-colors hover:text-[#E69500]"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-ink">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-brand-sub transition-colors hover:text-[#E69500]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-ink">
              Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-brand-sub">
              <li>21 Market Street</li>
              <li>San Francisco, CA</li>
              <li>
                <a
                  href="mailto:hello@sizvik.com"
                  className="transition-colors hover:text-[#E69500]"
                >
                  hello@sizvik.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+14155550192"
                  className="transition-colors hover:text-[#E69500]"
                >
                  +1 (415) 555-0192
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/[0.06] py-7 sm:flex-row">
          <p className="text-sm text-brand-sub">
            © {new Date().getFullYear()} Sizvik. All rights
            reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 rounded-full border border-black/[0.06] bg-brand-bg px-4 py-2 text-sm font-medium text-brand-ink transition-all hover:bg-[#F5A300] hover:text-white"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
