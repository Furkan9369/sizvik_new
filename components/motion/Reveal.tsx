'use client';

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  type MotionStyle,
} from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';

/* Scroll progress bar fixed at the top of the viewport */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-[#F5A300] to-[#FFD87A]"
    />
  );
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  once?: boolean;
};

/* Fade + slide-up reveal on scroll into view */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  x = 0,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Stagger container for grids */
export function StaggerGroup({
  children,
  className,
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* Animated number counter that runs when scrolled into view */
export function Counter({
  to,
  suffix = '',
  duration = 2,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

type ScrollTiltProps = {
  children: ReactNode;
  className?: string;
  /** degrees of rotation as the element scrolls through the viewport */
  rotate?: number;
  /** px of vertical parallax shift */
  y?: number;
  /** px of horizontal parallax shift */
  x?: number;
  /** scale range [min, max] */
  scale?: [number, number];
  /** perspective in px */
  perspective?: number;
  style?: MotionStyle;
};

/* Scroll-driven 3D transform: the element rotates/translates in 3D space
   based on its position within the viewport as you scroll. Uses a target
   ref + useScroll so the motion is tied to the element, not the page. */
export function ScrollTilt({
  children,
  className,
  rotate = 8,
  y = 60,
  x = 0,
  scale = [0.94, 1],
  perspective = 1000,
  style,
}: ScrollTiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const spring = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.6,
  });

  const rotateX = useTransform(spring, [0, 0.5, 1], [rotate, 0, -rotate]);
  const translateY = useTransform(spring, [0, 0.5, 1], [y, 0, -y]);
  const translateX = useTransform(spring, [0, 0.5, 1], [x, 0, -x]);
  const scaleMotion = useTransform(spring, [0, 0.5, 1], [scale[0], scale[1], scale[0]]);
  const opacity = useTransform(spring, [0, 0.2, 0.8, 1], [0.15, 1, 1, 0.15]);

  return (
    <div ref={ref} style={{ perspective }} className={className}>
      <motion.div
        style={{
          rotateX,
          y: translateY,
          x: translateX,
          scale: scaleMotion,
          opacity,
          transformStyle: 'preserve-3d',
          ...style,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* A lighter scroll-3D for grids: each child gets a scroll-linked rotateX
   + y parallax. Wrap a grid's children with this. */
export function ScrollTiltItem({
  children,
  className,
  rotate = 6,
  y = 40,
  style,
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
  y?: number;
  style?: MotionStyle;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const spring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    mass: 0.5,
  });
  const rotateX = useTransform(spring, [0, 0.5, 1], [rotate, 0, -rotate]);
  const translateY = useTransform(spring, [0, 0.5, 1], [y, 0, -y]);
  const opacity = useTransform(spring, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className={className} style={{ perspective: 800 }}>
      <motion.div
        style={{
          rotateX,
          y: translateY,
          opacity,
          transformStyle: 'preserve-3d',
          ...style,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
