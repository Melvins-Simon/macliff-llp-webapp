"use client";

import { motion } from "framer-motion";

export function AboutBanner() {
  return (
    <motion.div
      className="w-full py-10 sm:py-14 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.30 0.09 240) 0%, color-mix(in oklch, oklch(0.30 0.09 240) 75%, oklch(0.72 0.12 60)) 100%)",
      }}
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-outline-ab max-sm:text-5xl text-6xl font-realce uppercase">
            Who We Are
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 font-realce">
          About{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, oklch(0.72 0.12 60), oklch(0.85 0.10 60))",
            }}
          >
            Macliff LLP
          </span>
        </h1>
        <p className="text-white/70 text-lg max-w-2xl">
          Kenya's trusted Certified Public Accounting firm-delivering Audit,
          Tax, Advisory and Consulting services with over 30 years of combined
          experience.
        </p>
      </div>
    </motion.div>
  );
}
