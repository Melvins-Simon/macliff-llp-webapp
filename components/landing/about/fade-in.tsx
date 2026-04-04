"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// No blur — scale + opacity only, both GPU-composited = perfectly smooth
export const zoomIn = {
  initial: { opacity: 0, scale: 0.1 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={zoomIn.initial}
      animate={inView ? zoomIn.animate : {}}
      transition={{ ...zoomIn.transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
