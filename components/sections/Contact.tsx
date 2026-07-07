'use client';

import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { getSupabaseClient } from '@/lib/supabase-client';
import { Reveal } from '@/components/motion/Reveal';
import { TextReveal } from '@/components/motion/TextReveal';
import { Magnetic } from '@/components/motion/Cursor';
import { Blob } from '@/components/motion/Decor';

type Status = 'idle' | 'loading' | 'success' | 'error';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (415) 555-0192',
    href: 'tel:+14155550192',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@sizvik.com',
    href: 'mailto:hello@sizvik.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '21 Market Street, San Francisco, CA',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon–Fri 9am–6pm · 24/7 support',
  },
];

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      message: String(data.get('message') || '').trim(),
    };

    if (!payload.name || !payload.email) {
      setStatus('error');
      setErrorMsg('Please provide at least your name and email.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');
    try {
      const client = getSupabaseClient();
      if (!client) throw new Error('Database not configured. Please contact us directly.');
      const { error } = await client
        .from('consultations')
        .insert([payload]);
      if (error) throw error;
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <Blob
        className="left-[-120px] top-20 h-[340px] w-[340px] animate-float-slow"
        color="#FFD87A"
      />
      <div className="container-px relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F5A300]/10 px-4 py-1.5 text-xs font-semibold text-[#E69500]">
            Get in touch
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            <TextReveal text="Let's build your growth engine" />
          </h2>
          <p className="mt-4 text-balance text-base text-brand-sub sm:text-lg">
            Tell us about your brand and goals. We&apos;ll reply within one
            business day with a tailored plan.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: contact info */}
          <Reveal x={-30} className="flex flex-col justify-between">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((c) => {
                const Inner = (
                  <div className="group h-full rounded-[24px] border border-black/[0.05] bg-brand-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#E69500] shadow-sm transition-colors group-hover:bg-[#F5A300] group-hover:text-white">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-sub">
                      {c.label}
                    </p>
                    <p className="mt-1 text-base font-semibold text-brand-ink">
                      {c.value}
                    </p>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="block">
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label}>{Inner}</div>
                );
              })}
            </div>

            <div className="mt-6 rounded-[24px] border border-black/[0.05] bg-gradient-to-br from-[#F5A300] to-[#E69500] p-6 text-white shadow-glow">
              <p className="text-lg font-bold">Prefer to talk now?</p>
              <p className="mt-1 text-sm text-white/85">
                Call us and get a free consultation in under 15 minutes.
              </p>
              <a
                href="tel:+14155550192"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#E69500] transition-transform hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                Call now
              </a>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal x={30}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[32px] border border-black/[0.05] bg-white p-7 shadow-soft sm:p-9"
            >
              <div className="grid gap-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-brand-ink">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="input-soft"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-brand-ink">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="jane@brand.com"
                      className="input-soft"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-brand-ink">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+1 415 555 0192"
                      className="input-soft"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-brand-ink">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your goals, budget and timeline…"
                    className="input-soft resize-none"
                  />
                </div>
              </div>

              <Magnetic strength={0.15} className="w-full">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary group mt-6 w-full disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </Magnetic>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 rounded-2xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  Thanks! We&apos;ll be in touch within one business day.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
                >
                  {errorMsg}
                </motion.div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
