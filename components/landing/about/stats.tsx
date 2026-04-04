"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { zoomIn } from "./fade-in";

const stats = [
  { value: "30+", label: "Years of Experience" },
  { value: "2023", label: "Founded as LLP" },
  { value: "4", label: "Expert Partners" },
  { value: "100%", label: "Client Commitment" },
];

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
          className="rounded-tl-4xl rounded-br-4xl p-5 border border-border"
          style={{
            background:
              "color-mix(in oklch, var(--background) 60%, oklch(0.30 0.09 240) 8%)",
          }}
        >
          <div
            className="text-3xl font-bold mb-1 bg-clip-text text-transparent w-max"
            style={{
              backgroundImage:
                "linear-gradient(135deg, oklch(0.30 0.09 240), oklch(0.72 0.12 60))",
            }}
          >
            {s.value}
          </div>
          <div className="text-sm text-muted-foreground">{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
