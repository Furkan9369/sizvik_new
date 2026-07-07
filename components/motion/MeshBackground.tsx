'use client';

import { motion } from 'framer-motion';

/* Animated mesh-gradient background: layered radial gradients that
   slowly drift. Subtle, never distracting. */
export function MeshBackground({ className }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ''}`}>
      <motion.div
        className="absolute -left-[20%] -top-[20%] h-[60vh] w-[60vh] rounded-full opacity-30 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #F5A300, transparent 70%)' }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-15%] top-[30%] h-[50vh] w-[50vh] rounded-full opacity-25 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #FFD87A, transparent 70%)' }}
        animate={{ x: [0, -50, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[30%] h-[55vh] w-[55vh] rounded-full opacity-20 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #F5A300, transparent 70%)' }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
