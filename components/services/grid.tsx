"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { zoomIn } from "@/components/landing/about/fade-in";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { services } from "@/lib/services-data";

const NAVY = "oklch(0.30 0.09 240)";
const GOLD = "oklch(0.72 0.12 60)";
const INITIAL_COUNT = 6;

export default function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? services : services.slice(0, INITIAL_COUNT);

  return (
    <section className="w-full py-16 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visible.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.slug}
                href={`/services/${s.slug}`}
                initial={zoomIn.initial}
                animate={inView ? zoomIn.animate : {}}
                transition={{ ...zoomIn.transition, delay: (i % 3) * 0.08 }}
                className="group flex flex-col  overflow-hidden shadow-md border border-border hover:shadow-xl transition-shadow duration-300 bg-background"
              >
                {/* Image — top half */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/imgs/bg.webp";
                    }}
                  />
                  {/* Gradient overlay at bottom of image */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)",
                    }}
                  />
                  {/* Icon badge */}
                  <div
                    className="absolute bottom-3 left-4 w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${NAVY}, color-mix(in oklch, ${NAVY} 70%, ${GOLD}))`,
                    }}
                  >
                    <Icon size={17} className="text-white" />
                  </div>
                </div>

                {/* Details — bottom half */}
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <h3 className="font-bold text-foreground text-base leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                    {s.short}
                  </p>
                  <div
                    className="flex items-center gap-1.5 text-sm font-semibold mt-1 transition-colors"
                    style={{ color: GOLD }}
                  >
                    Read More <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Show all / collapse */}
        {!showAll && services.length > INITIAL_COUNT && (
          <motion.div
            initial={zoomIn.initial}
            animate={inView ? zoomIn.animate : {}}
            transition={{ ...zoomIn.transition, delay: 0.3 }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-85 hover:scale-[1.02]"
              style={{
                background: `linear-gradient(135deg, ${NAVY}, color-mix(in oklch, ${NAVY} 80%, ${GOLD}))`,
                color: "oklch(0.95 0.02 60)",
                boxShadow: `0 4px 20px color-mix(in oklch, ${NAVY} 20%, transparent)`,
              }}
            >
              <ChevronDown size={15} />
              Show All Services
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
