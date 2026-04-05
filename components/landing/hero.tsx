"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const slides = [
  {
    tag: "Audit · Tax · Advisory",
    heading: "Financial Solutions,\nSimplified.",
    gradient: "from-emerald-400 to-teal-300",
    body: "A Certified Public Accounting firm and leading provider of Audit & Assurance, Tax, Advisory and Consulting services in Kenya.",
    cta: "Request Consultation",
    href: "/contact",
    img: "/imgs/hero/slide-1.webp",
  },
  {
    tag: "30+ Years of Experience",
    heading: "A Global Mindset,\nA Local Touch.",
    gradient: "from-sky-400 to-cyan-300",
    body: "Trusted partners delivering on our promise to clients with a global perspective and deep local expertise across Kenya.",
    cta: "Our Story",
    href: "/about",
    img: "/imgs/hero/slide-2.webp",
  },
  {
    tag: "Audit & Assurance",
    heading: "Audits That\nBuild Trust.",
    gradient: "from-emerald-400 to-teal-300 ",
    body: "Strong financial reporting procedures and controls are essential. We perform excellent audits that help your company comply with legal obligations.",
    cta: "Learn More",
    href: "/services/audit-assurance",
    img: "/imgs/hero/slide-3.webp",
  },
  {
    tag: "Tax Services",
    heading: "Navigate Tax\nWith Confidence.",
    gradient: "from-amber-600 to-yellow-400",
    body: "We guide you through a continuously changing tax environment resolving difficulties and guaranteeing everything is in order.",
    cta: "Tax Services",
    href: "/services/tax-consulting",
    img: "/imgs/hero/slide-4.webp",
  },
  {
    tag: "Advisory Services",
    heading: "Spot Problems.\nUnlock Growth.",
    gradient: "from-rose-500 to-pink-300 ",
    body: "We specialise in spotting and correcting financial problems within a business, while providing insight on cost savings and revenue growth.",
    cta: "Advisory Services",
    href: "/services/advisory-services",
    img: "/imgs/hero/slide-5.webp",
  },
  {
    tag: "Payroll & HR",
    heading: "Payroll Made\nEffortless.",
    gradient: "from-fuchsia-600 to-purple-400",
    body: "End-to-end payroll outsourcing with a secure, accurate, and reasonably priced data processing platform tailored to your business.",
    cta: "Get a Quote",
    href: "/contact",
    img: "/imgs/hero/slide-6.jpg",
  },
];

const INTERVAL = 5500;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  const goTo = (idx: number) => {
    if (animating || idx === current) return;
    setPrev(current);
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => {
      setPrev(null);
      setAnimating(false);
    }, 700);
  };

  const next = () => goTo((current + 1) % slides.length);
  const back = () => goTo((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(next, INTERVAL);
    return () => clearInterval(t);
  }, [current, animating]);

  return (
    <motion.div
      className="relative h-[90vh] max-sm:h-[85vh] w-full bg-background overflow-hidden"
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {slides.map((slide, i) => {
        const isActive = i === current;
        const isPrev = i === prev;
        return (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{
              opacity: isActive ? 1 : isPrev ? 0 : 0,
              zIndex: isActive ? 2 : isPrev ? 1 : 0,
            }}
          >
            {/* BG image */}
            <img
              src={slide.img}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/imgs/bg.webp";
              }}
              className="absolute inset-0 w-full h-full object-cover object-center rounded-b-4xl"
              alt=""
            />

            {/* Desktop: feathered fade left → transparent at 70% */}
            <div
              className="absolute inset-0 rounded-b-4xl hidden sm:block"
              style={{
                background:
                  "linear-gradient(to right, color-mix(in oklch, var(--background) 92%, oklch(0.55 0.18 270) 8%) 0%, color-mix(in oklch, var(--background) 92%, oklch(0.55 0.18 270) 8%) 18%, color-mix(in oklch, var(--background) 78%, oklch(0.55 0.18 270) 6%) 38%, color-mix(in oklch, var(--background) 48%, oklch(0.55 0.18 270) 4%) 56%, color-mix(in oklch, var(--background) 8%, transparent) 70%, transparent 76%)",
              }}
            />

            {/* Mobile: subtle dark scrim so text stays readable */}
            <div
              className="absolute inset-0 rounded-b-4xl sm:hidden"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.1) 100%)",
              }}
            />

            {/* Content — pushed up slightly from center */}
            <div
              className="absolute inset-0 flex items-center"
              style={{ paddingBottom: "12vh" }}
            >
              <div className="max-w-6xl mx-auto px-6 sm:px-10 w-full">
                <div className="max-w-xl sm:max-w-xl text-center sm:text-left mx-auto sm:mx-0 ">
                  {/* Tag */}
                  <div className="flex justify-start items-center">
                    <span
                      className="inline-block  max-sm:text-sm font-extrabold  tracking-widest uppercase text-white/70 sm:text-muted-foreground mb-3 transition-all duration-700 "
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive
                          ? "translateY(0)"
                          : "translateY(10px)",
                        transitionDelay: isActive ? "150ms" : "0ms",
                      }}
                    >
                      {slide.tag}
                    </span>
                  </div>

                  {/* Heading with gradient */}
                  <h1
                    className={`text-5xl text-left sm:text-8xl lg:text-6xl font-bold leading-tight tracking-tight mb-5 whitespace-pre-line transition-all duration-700 bg-linear-to-r ${slide.gradient} bg-clip-text text-transparent w-max font-realce`}
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0)"
                        : "translateY(16px)",
                      transitionDelay: isActive ? "250ms" : "0ms",
                    }}
                  >
                    {slide.heading}
                  </h1>

                  {/* Body */}
                  <p
                    className="text-sm sm:text-base text-white/80 sm:text-muted-foreground leading-relaxed mb-8 max-w-md transition-all duration-700 mx-auto sm:mx-0 font-semibold"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0)"
                        : "translateY(16px)",
                      transitionDelay: isActive ? "350ms" : "0ms",
                    }}
                  >
                    {slide.body}
                  </p>

                  {/* CTA */}
                  <div
                    className="transition-all duration-700 flex sm:block justify-center"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0)"
                        : "translateY(16px)",
                      transitionDelay: isActive ? "450ms" : "0ms",
                    }}
                  >
                    <a
                      href={slide.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-80 transition-opacity"
                    >
                      {slide.cta}
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center gap-4">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-300 rounded-full bg-white/40 hover:bg-white/70"
                style={{
                  width: i === current ? "24px" : "8px",
                  height: "8px",
                  opacity: i === current ? 1 : 0.5,
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={back}
              className="h-9 w-9 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center hover:bg-black/40 transition-colors text-white"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="h-9 w-9 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center hover:bg-black/40 transition-colors text-white"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Concave corner — top right */}
      <div
        className="absolute top-0 right-0 z-10 bg-background hidden"
        style={{
          width: "clamp(60px, 35vw, 300px)",
          height: "clamp(60px, 8.75vw, 80px)",
          borderBottomLeftRadius: "clamp(10px, 2vw, 50px)",
        }}
      />

      {/* Concave corner — bottom left */}
      <div
        className="absolute bottom-0 left-0 z-10 bg-background hidden"
        style={{
          width: "clamp(40px, 48vw, 620px)",
          height: "clamp(50px, 15.5vw, 200px)",
          borderTopRightRadius: "clamp(10px, 2vw, 50px)",
        }}
      />

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 z-10 bg-white/10">
        <div
          key={current}
          className="h-full bg-white/40 rounded-full"
          style={{ animation: `progress ${INTERVAL}ms linear forwards` }}
        />
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0% }
          to { width: 100% }
        }
      `}</style>
    </motion.div>
  );
}
