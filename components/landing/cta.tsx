"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { zoomIn } from "./about/fade-in";
import { ArrowRight, Phone } from "lucide-react";

const NAVY = "oklch(0.30 0.09 240)";
const GOLD = "oklch(0.72 0.12 60)";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      ref={ref}
      initial={zoomIn.initial}
      animate={inView ? zoomIn.animate : {}}
      transition={zoomIn.transition}
      className="w-full relative overflow-hidden py-7 sm:py-12"
      style={{
        background: `linear-gradient(135deg, ${NAVY} 0%, color-mix(in oklch, ${NAVY} 65%, ${GOLD}) 60%, color-mix(in oklch, ${GOLD} 60%, ${NAVY}) 100%)`,
      }}
    >
      {/* BG image */}
      <img
        src="/imgs/cta.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      {/* Animated background orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, color-mix(in oklch, ${GOLD} 20%, transparent), transparent 70%)`,
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, color-mix(in oklch, oklch(0.55 0.18 270) 25%, transparent), transparent 70%)`,
        }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `linear-gradient(${GOLD} 1px, transparent 1px), linear-gradient(90deg, ${GOLD} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 font-realce"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.65,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Ready to Simplify Your{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${GOLD}, oklch(0.88 0.12 70))`,
            }}
          >
            Finances?
          </span>
        </motion.h2>

        <motion.p
          className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          We will walk with you, guide you and take the load off you. Let our
          certified experts handle your audit, tax, and advisory needs so you
          can focus on what matters most growing your business.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg w-full sm:w-auto justify-center rounded-tl-4xl  sm:rounded-tl-4xl sm:rounded-br-4xl"
            style={{
              background: `linear-gradient(135deg, ${GOLD}, oklch(0.80 0.13 60))`,
              color: NAVY,
              boxShadow: `0 4px 24px color-mix(in oklch, ${GOLD} 30%, transparent)`,
            }}
          >
            Request Consultation
            <ArrowRight size={15} />
          </a>
          <a
            href="tel:+254734175129"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold border border-white/25 text-white hover:bg-white/10 transition-all w-full sm:w-auto justify-center rounded-br-4xl sm:rounded-tl-4xl sm:rounded-br-4xl"
          >
            <Phone size={15} />
            +254 734 175 129
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
