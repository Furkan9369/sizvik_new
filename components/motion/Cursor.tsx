'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, type ReactNode } from 'react';

/* Custom cursor: a small dot + a larger trailing ring.
   The ring springs toward the dot; over links/buttons it expands. */
export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.5 });
  const hover = useRef(false);

  useEffect(() => {
    function move(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      const interactive = !!t.closest('a, button, [data-cursor="hover"], input, textarea, select');
      if (interactive !== hover.current) {
        hover.current = interactive;
        document.body.dataset.cursorHover = interactive ? 'true' : 'false';
      }
    }
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <motion.div
        style={{ x, y }}
        className="absolute -ml-1 -mt-1 h-2 w-2 rounded-full bg-[#F5A300]"
      />
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute -ml-5 -mt-5 h-10 w-10 rounded-full border border-[#F5A300]/50"
        animate={{ scale: 1.6, opacity: 0.3 }}
        data-hover
      />
      <style dangerouslySetInnerHTML={{ __html: `
        [data-cursor-hover="true"] ~ * [data-hover],
        body[data-cursor-hover="true"] [data-hover] {
          transform: scale(2.2) !important;
          opacity: 0.6 !important;
          background: rgba(245,163,0,0.08);
        }
      ` }} />
    </div>
  );
}

/* Magnetic button: the element drifts toward the cursor when nearby. */
export function Magnetic({
  children,
  className,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    x.set(mx * strength);
    y.set(my * strength);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
