"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GOLD = "oklch(0.72 0.12 60)";

export default function ServiceCarousel({ images }: { images: string[] }) {
  const safeImages = images?.length ? images : ["/imgs/bg.webp"];
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const goTo = (idx: number, direction: number) => {
    setDir(direction);
    setCurrent(idx);
  };

  const prev = () =>
    goTo((current - 1 + safeImages.length) % safeImages.length, -1);
  const next = () => goTo((current + 1) % safeImages.length, 1);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [current]);

  return (
    <div
      className="relative w-full rounded-tl-4xl rounded-br-4xl overflow-hidden shadow-lg h-52 sm:h-72 lg:h-[400px]"
      style={{}}
    >
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={current}
          custom={dir}
          variants={{
            enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <img
            src={safeImages[current]}
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Subtle bottom gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors z-10"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors z-10"
      >
        <ChevronRight size={16} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
        {safeImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? "20px" : "6px",
              height: "6px",
              background: i === current ? GOLD : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-10">
        <div
          key={current}
          className="h-full rounded-full"
          style={{ background: GOLD, animation: "progress 5s linear forwards" }}
        />
      </div>

      <style>{`@keyframes progress { from { width: 0% } to { width: 100% } }`}</style>
    </div>
  );
}
