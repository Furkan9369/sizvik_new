'use client';

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionStyle,
} from 'framer-motion';
import { useRef, type ReactNode, type MouseEvent } from 'react';

type TiltProps = {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees */
  max?: number;
  /** Perspective in px (smaller = more dramatic) */
  perspective?: number;
  /** Scale on hover */
  scale?: number;
  /** Glow on hover */
  glow?: boolean;
  style?: MotionStyle;
};

/* Pointer-driven 3D tilt card. Rotates on X/Y based on cursor position,
   with a spring for smoothness and an optional colored glow. */
export function Tilt({
  children,
  className,
  max = 12,
  perspective = 900,
  scale = 1.02,
  glow = false,
  style,
}: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const sx = useSpring(px, { stiffness: 150, damping: 18, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 150, damping: 18, mass: 0.4 });

  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const glowX = useTransform(sx, [0, 1], ['0%', '100%']);
  const glowY = useTransform(sy, [0, 1], ['0%', '100%']);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }
  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ scale }}
      style={{
        perspective,
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
        ...style,
      }}
      className={`relative ${className ?? ''}`}
    >
      {children}
      {glow && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) =>
                `radial-gradient(420px circle at ${x} ${y}, rgba(245,163,0,0.18), transparent 45%)`
            ),
          }}
        />
      )}
    </motion.div>
  );
}

/* A layer that pops forward in Z when its parent Tilt is hovered.
   Use inside a Tilt with `style={{ transform: 'translateZ(...)' }}`. */
export function TiltLayer({
  children,
  className,
  z = 40,
}: {
  children: ReactNode;
  className?: string;
  z?: number;
}) {
  return (
    <div
      className={className}
      style={{ transform: `translateZ(${z}px)`, transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}
