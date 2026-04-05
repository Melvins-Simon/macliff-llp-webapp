"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { zoomIn } from "./about/fade-in";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Service, services } from "@/lib/services-data";

const NAVY = "oklch(0.30 0.09 240)";
const GOLD = "oklch(0.72 0.12 60)";
const PER_PAGE = 3;
const PER_PAGE_MOBILE = 1;

function ServiceCard({
  service,
  hovered,
  onHover,
  onLeave,
}: {
  service: Service;
  hovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const Icon = service.icon;
  return (
    <div
      className="relative rounded-tl-4xl rounded-br-4xl overflow-hidden cursor-pointer h-64 sm:h-64 flex-1 min-w-0 w-full"
      style={{ background: service.gradient }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* BG image */}
      <img
        src={service.img}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity duration-300"
        style={{ opacity: hovered ? 0.2 : 0.1 }}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      {/* Default */}
      <div
        className="absolute inset-0 p-6 flex flex-col justify-between transition-opacity duration-300"
        style={{ opacity: hovered ? 0 : 1 }}
      >
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.15)" }}
        >
          <Icon size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg leading-tight mb-1">
            {service.title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
            {service.short}
          </p>
        </div>
      </div>

      {/* Hover overlay slides up */}
      <motion.div
        className="absolute inset-0 p-6 flex flex-col justify-between"
        initial={{ y: "100%", opacity: 0 }}
        animate={hovered ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          background:
            "color-mix(in oklch, oklch(0.10 0.05 240) 96%, transparent)",
        }}
      >
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
          style={{
            background: `color-mix(in oklch, ${GOLD} 20%, transparent)`,
            border: `1px solid ${GOLD}`,
          }}
        >
          <Icon size={20} style={{ color: GOLD }} />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
          <p className="text-white/75 text-sm leading-relaxed">
            {service.short}
          </p>
        </div>
        <a
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold mt-3"
          style={{ color: GOLD }}
          onClick={(e) => e.stopPropagation()}
        >
          Read More <ArrowUpRight size={14} />
        </a>
      </motion.div>

      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-20"
        style={{ background: GOLD }}
      />
    </div>
  );
}

export default function Services() {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const perPage = isMobile ? PER_PAGE_MOBILE : PER_PAGE;
  const pages = Math.ceil(services.length / perPage);

  const goTo = useCallback((next: number, direction: number) => {
    setDir(direction);
    setPage(next);
  }, []);

  const prev = () => goTo((page - 1 + pages) % pages, -1);
  const next = () => goTo((page + 1) % pages, 1);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => goTo((page + 1) % pages, 1), 7000);
    return () => clearInterval(t);
  }, [page, pages, goTo, paused]);

  // Reset page when perPage changes
  useEffect(() => {
    setPage(0);
  }, [perPage]);

  const visible = services.slice(page * perPage, page * perPage + perPage);

  return (
    <section
      className="w-full py-16 sm:py-24 relative overflow-hidden border-y border-y-cyan-300/20"
      style={{
        background: `linear-gradient(160deg, color-mix(in oklch, ${NAVY} 12%, var(--background)) 0%, var(--background) 40%, color-mix(in oklch, ${GOLD} 6%, var(--background)) 100%)`,
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          background: `radial-gradient(circle, color-mix(in oklch, ${NAVY} 18%, transparent), transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none translate-x-1/3 translate-y-1/3"
        style={{
          background: `radial-gradient(circle, color-mix(in oklch, ${GOLD} 10%, transparent), transparent 70%)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={zoomIn.initial}
          animate={inView ? zoomIn.animate : {}}
          transition={zoomIn.transition}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-accent" />
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                What We Do
              </span>
            </div>
            <h2 className="max-sm:text-5xl text-6xl font-realce uppercase">
              <span className="text-outline-ab ">Our</span>{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${NAVY}, ${GOLD})`,
                }}
              >
                Services
              </span>
            </h2>
            <p className="mt-2 text-muted-foreground max-w-lg text-sm sm:text-base">
              Comprehensive financial and advisory solutions tailored to your
              business needs.
            </p>
          </div>

          <div className="flex items-center justify-between w-full sm:w-auto sm:justify-start gap-3">
            {/* Chevrons */}
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border cursor-pointer flex items-center justify-center hover:border-accent transition-colors"
              style={{
                background:
                  "color-mix(in oklch, var(--background) 80%, transparent)",
              }}
            >
              <ChevronLeft size={18} className="text-foreground" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border cursor-pointer border-border flex items-center justify-center hover:border-accent transition-colors"
              style={{
                background:
                  "color-mix(in oklch, var(--background) 80%, transparent)",
              }}
            >
              <ChevronRight size={18} className="text-foreground" />
            </button>
            {/* All Services - visible on all screens, justified to end on mobile */}
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-opacity hover:opacity-85 ml-auto sm:ml-0"
              style={{
                background: `linear-gradient(135deg, ${NAVY}, color-mix(in oklch, ${NAVY} 80%, ${GOLD}))`,
                color: "oklch(0.95 0.02 60)",
              }}
            >
              All Services <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>

        {/* Cards row */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            setPaused(false);
            setHoveredIdx(null);
          }}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setTimeout(() => setPaused(false), 2000)}
        >
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={page}
              custom={dir}
              variants={{
                enter: (d: number) => ({
                  x: d > 0 ? "100%" : "-100%",
                  opacity: 0,
                }),
                center: { x: 0, opacity: 1 },
                exit: (d: number) => ({
                  x: d > 0 ? "-100%" : "100%",
                  opacity: 0,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex gap-4 sm:gap-5"
              // Mobile swipe
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) next();
                else if (info.offset.x > 50) prev();
              }}
            >
              {visible.map((s, i) => (
                <ServiceCard
                  key={s.title}
                  service={s}
                  hovered={hoveredIdx === i}
                  onHover={() => setHoveredIdx(i)}
                  onLeave={() => setHoveredIdx(null)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > page ? 1 : -1)}
              className="rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: i === page ? "24px" : "8px",
                height: "8px",
                background:
                  i === page
                    ? GOLD
                    : "color-mix(in oklch, var(--foreground) 20%, transparent)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
