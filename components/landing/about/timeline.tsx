"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { zoomIn } from "./fade-in";

const items = [
  {
    year: "30+",
    title: "Years Combined Experience",
    body: "The founding partners bring over 30 years of combined expertise across audit, tax, and advisory.",
  },
  {
    year: "2023",
    title: "Founded as LLP",
    body: "Macliff LLP was formally established, combining decades of expertise under one firm in Kenya.",
  },
  {
    year: "Today",
    title: "One-Stop Finance Partner",
    body: "Serving clients across Kenya with audit, tax, advisory, payroll, bookkeeping, and strategic financial planning.",
  },
];

export function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="absolute left-5 top-0 bottom-0 w-px"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.30 0.09 240), oklch(0.72 0.12 60))",
          transformOrigin: "top",
        }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={inView ? { scaleY: 1, opacity: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      <div className="flex flex-col gap-8 pl-14">
        {items.map((item) => (
          <motion.div
            key={item.year}
            initial={zoomIn.initial}
            animate={inView ? zoomIn.animate : {}}
            transition={zoomIn.transition}
            className="relative"
          >
            <div
              className="absolute -left-[2.35rem] top-1 w-4 h-4 rounded-full border-2 border-background"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.30 0.09 240), oklch(0.72 0.12 60))",
              }}
            />
            <span
              className="text-xs font-bold tracking-widest uppercase mb-1 block"
              style={{ color: "oklch(0.72 0.12 60)" }}
            >
              {item.year}
            </span>
            <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.body}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
