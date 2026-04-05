"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, ChevronRight } from "lucide-react";
import { Service, services, getService } from "@/lib/services-data";
import ServiceCarousel from "./carousel";

const NAVY = "oklch(0.30 0.09 240)";
const GOLD = "oklch(0.72 0.12 60)";

export default function ServiceDetail({ slug }: { slug: string }) {
  const initial = getService(slug) ?? services[0];
  const [active, setActive] = useState<Service>(initial);
  const Icon = active.icon;

  return (
    <div className="w-full">
      {/* Banner */}
      <motion.div
        key={active.slug + "-banner"}
        className="w-full py-10 sm:py-14 relative overflow-hidden"
        style={{ background: active.gradient }}
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-center gap-2 mb-4 text-white/50 text-sm">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <ChevronRight size={14} />
            <a href="/services" className="hover:text-white transition-colors">
              Services
            </a>
            <ChevronRight size={14} />
            <span className="text-white">{active.title}</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <Icon size={22} className="text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-realce">
              {active.title}
            </h1>
          </div>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl">
            {active.short}
          </p>
        </div>
      </motion.div>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Sidebar — service switcher */}
          <aside className="lg:col-span-1">
            <div
              className="rounded-tl-4xl rounded-br-4xl border border-border overflow-hidden sticky top-24"
              style={{
                background:
                  "color-mix(in oklch, var(--background) 60%, oklch(0.30 0.09 240) 6%)",
              }}
            >
              <div className="px-4 py-3 border-b border-border">
                <a
                  href="/services"
                  className="text-xs font-semibold tracking-widest uppercase flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                  style={{ color: GOLD }}
                >
                  All Services <ArrowRight size={12} />
                </a>
              </div>
              <nav className="flex flex-col">
                {services.map((s) => {
                  const SIcon = s.icon;
                  const isActive = s.slug === active.slug;
                  return (
                    <button
                      key={s.slug}
                      onClick={() => setActive(s)}
                      className="flex items-center gap-3 px-4 py-3 text-left text-sm transition-all border-l-2"
                      style={{
                        borderLeftColor: isActive ? GOLD : "transparent",
                        background: isActive
                          ? `color-mix(in oklch, ${GOLD} 8%, transparent)`
                          : "transparent",
                        color: isActive
                          ? "var(--foreground)"
                          : "var(--muted-foreground)",
                        fontWeight: isActive ? 600 : 400,
                      }}
                    >
                      <SIcon size={14} className="shrink-0" />
                      {s.title}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              className="lg:col-span-3 flex flex-col gap-8"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Carousel */}
              <ServiceCarousel images={active.images} />

              {/* Quote */}
              <div
                className="rounded-2xl p-6 border-l-4 hidden"
                style={{
                  background: `color-mix(in oklch, ${NAVY} 8%, var(--background))`,
                  borderLeftColor: GOLD,
                }}
              >
                <p className="text-base sm:text-lg font-medium text-foreground italic mb-2">
                  "{active.quote}"
                </p>
                <p className="text-sm font-semibold" style={{ color: GOLD }}>
                  CPA Wycliff Bichang'a — Managing Partner
                </p>
              </div>

              {/* Intro */}
              <div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {active.intro}
                </p>
              </div>

              {/* Sections */}
              {active.sections.map((sec) => (
                <div
                  key={sec.heading}
                  className="shadow-2xl p-6 border border-border"
                  style={{
                    background:
                      "color-mix(in oklch, var(--background) 60%, oklch(0.30 0.09 240) 5%)",
                  }}
                >
                  <h2
                    className="text-lg sm:text-xl font-bold text-foreground mb-3"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${NAVY}, ${GOLD})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {sec.heading}
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {sec.body}
                  </p>
                </div>
              ))}

              {/* Bullets */}
              {active.bullets?.map((b) => (
                <div key={b.heading}>
                  <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">
                    {b.heading}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {b.items.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle
                          size={16}
                          className="shrink-0 mt-0.5"
                          style={{ color: GOLD }}
                        />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* CTA */}
              <div
                className=" p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                style={{
                  background: `linear-gradient(135deg, ${NAVY}, color-mix(in oklch, ${NAVY} 75%, ${GOLD}))`,
                }}
              >
                <div>
                  <p className="text-white font-bold text-lg mb-1">
                    Write to Us Today
                  </p>
                  <p className="text-white/60 text-sm">
                    Our expert team is standing by to bring you the best
                    possible plan.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-85"
                  style={{
                    background: `linear-gradient(135deg, ${GOLD}, oklch(0.80 0.13 60))`,
                    color: NAVY,
                  }}
                >
                  Contact Us <Phone size={14} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
