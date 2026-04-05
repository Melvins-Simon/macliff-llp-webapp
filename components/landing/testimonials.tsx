"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FadeIn, zoomIn } from "./about/fade-in";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const NAVY = "oklch(0.30 0.09 240)";
const GOLD = "oklch(0.72 0.12 60)";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star;
        const half = !filled && rating >= star - 0.5;
        return (
          <svg key={star} width="14" height="14" viewBox="0 0 24 24">
            {half ? (
              <>
                <defs>
                  <linearGradient id={`half-${star}`}>
                    <stop offset="50%" stopColor={GOLD} />
                    <stop offset="50%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  fill={`url(#half-${star})`}
                  stroke={GOLD}
                  strokeWidth="1.5"
                />
              </>
            ) : (
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill={filled ? GOLD : "transparent"}
                stroke={GOLD}
                strokeWidth="1.5"
              />
            )}
          </svg>
        );
      })}
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I was astounded by the promptness and professionalism. I can now at last concentrate on what really matters my work.",
    name: "Lenny Maluki",
    title: "CEO, Tripple T",
    rating: 5,
  },
  {
    quote:
      "I was amazed at how well they organised our books. We are currently seeing a quick turnaround in decision making.",
    name: "Micheal Gatao",
    title: "CEO, ZentaCom Limited",
    rating: 5,
  },
  {
    quote:
      "We thank you for the exceptional collaboration throughout the audit process. Your expertise played a crucial role in achieving a timely and successful audit.",
    name: "Lydia Kamanza",
    title: "CEO, StyleYetu",
    rating: 5,
  },
  {
    quote:
      "Macliff LLP transformed our tax compliance process. Their team is thorough, responsive and always ahead of regulatory changes.",
    name: "James Otieno",
    title: "Finance Director, Savanna Logistics Ltd",
    rating: 4.5,
  },
  {
    quote:
      "Their payroll outsourcing service has saved us countless hours every month. Accurate, on time, and completely stress-free.",
    name: "Wanjiku Kariuki",
    title: "HR Manager, Greenfield Developers",
    rating: 5,
  },
  {
    quote:
      "The advisory team helped us restructure our finances ahead of a major expansion. Their strategic insight was invaluable.",
    name: "Brian Mwangi",
    title: "Managing Director, Apex Holdings",
    rating: 4.5,
  },
];

const PER_PAGE = 3;
const PER_PAGE_MOBILE = 1;

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div
      className="flex-1 min-w-0 rounded-tr-4xl rounded-bl-4xl p-6 sm:p-7 flex flex-col justify-between gap-5 border border-border h-full"
      style={{
        background:
          "color-mix(in oklch, var(--background) 55%, oklch(0.30 0.09 240) 8%)",
      }}
    >
      {/* Quote icon + stars */}
      <div className="flex items-start justify-between">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{
            background: `color-mix(in oklch, ${GOLD} 15%, transparent)`,
            border: `1px solid color-mix(in oklch, ${GOLD} 30%, transparent)`,
          }}
        >
          <Quote size={18} style={{ color: GOLD }} />
        </div>
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Quote text */}
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-1">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div>
          <p className="text-sm font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);
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
  const pages = Math.ceil(testimonials.length / perPage);

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

  useEffect(() => {
    setPage(0);
  }, [perPage]);

  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <motion.section
      ref={ref}
      initial={zoomIn.initial}
      animate={inView ? zoomIn.animate : {}}
      transition={zoomIn.transition}
      className="w-full py-16 sm:py-24 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-accent" />
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                Client Stories
              </span>
            </div>

            <h2 className="max-sm:text-5xl text-6xl font-realce ">
              <span className="text-outline2 "> What Our</span>{" "}
              <br className="sm:hidden" />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${NAVY}, ${GOLD})`,
                }}
              >
                Clients Say
              </span>
            </h2>
          </div>

          <div className="flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent transition-colors"
              style={{
                background:
                  "color-mix(in oklch, var(--background) 80%, transparent)",
              }}
            >
              <ChevronLeft size={18} className="text-foreground" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent transition-colors"
              style={{
                background:
                  "color-mix(in oklch, var(--background) 80%, transparent)",
              }}
            >
              <ChevronRight size={18} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
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
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) next();
                else if (info.offset.x > 50) prev();
              }}
            >
              {visible.map((t) => (
                <TestimonialCard key={t.name} testimonial={t} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > page ? 1 : -1)}
              className="rounded-full transition-all duration-300"
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
    </motion.section>
  );
}
