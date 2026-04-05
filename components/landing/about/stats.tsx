"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useRef, useEffect } from "react";
import { zoomIn } from "./fade-in";

const stats = [
  { value: 30, suffix: "+", label: "Years of Experience" },
  { value: 2023, suffix: "", label: "Founded as LLP" },
  { value: 4, suffix: "", label: "Expert Partners" },
  { value: 100, suffix: "%", label: "Client Commitment" },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 1.8, ease: "easeOut" });
    return controls.stop;
  }, [inView, to, count]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4">
      {stats.map((s) => (
        <motion.div
          key={s.label}
          initial={zoomIn.initial}
          animate={inView ? zoomIn.animate : {}}
          transition={zoomIn.transition}
          className="rounded-2xl p-5 border border-border"
          style={{
            background:
              "color-mix(in oklch, var(--background) 60%, oklch(0.30 0.09 240) 8%)",
          }}
        >
          <div
            className="text-3xl font-bold mb-1 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, oklch(0.30 0.09 240), oklch(0.72 0.12 60))",
            }}
          >
            <CountUp to={s.value} suffix={s.suffix} />
          </div>
          <div className="text-sm text-muted-foreground">{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
