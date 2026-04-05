"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { zoomIn } from "./about/fade-in";

const partners = [
  { name: "Easylink Technologies", img: "/imgs/partners/elt.gif" },
  { name: "Law Society of Kenya", img: "/imgs/partners/lsk-2.png" },
  { name: "Kenya Labour Law Association", img: "/imgs/partners/kll.jpeg" },
  { name: "Kenya Bankers Association", img: "/imgs/partners/kba.png" },
  { name: "East Africa Law Society", img: "/imgs/partners/eat.png" },
  { name: "Kenya Private Sector Alliance", img: "/imgs/partners/kpa.jpeg" },
];

const items = [...partners, ...partners, ...partners];

export default function PartnersStrip() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [
      AutoScroll({
        speed: 0.7,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      ref={ref}
      className="w-full pt-10 sm:pt-12 bg-background"
      initial={zoomIn.initial}
      animate={inView ? zoomIn.animate : {}}
      transition={zoomIn.transition}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px w-8 bg-accent" />
          <span className="text-[10px] font-semibold tracking-widest uppercase text-accent">
            Our Trusted Partners
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-[35%] z-10 pointer-events-none bg-linear-to-r from-background via-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-[35%] z-10 pointer-events-none bg-linear-to-l from-background via-background to-transparent" />

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex items-start gap-8 sm:gap-14 px-4 py-2">
            {items.map((p, i) => (
              <div
                key={i}
                className="partner-item shrink-0 flex flex-col items-center gap-2 cursor-default w-[80px] sm:w-[110px]"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="partner-logo h-12 sm:h-16 w-auto max-w-full object-contain transition-all duration-300"
                  style={{ filter: "grayscale(100%) opacity(0.4)" }}
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.src = "/imgs/bg.webp";
                    t.className =
                      "partner-logo h-12 sm:h-16 w-12 sm:w-16 object-cover rounded-full";
                    t.style.filter = "grayscale(100%) opacity(0.3)";
                  }}
                />
                <span className="partner-name text-[9px] uppercase sm:text-[11px] text-muted-foreground/50 transition-colors text-center leading-tight w-full">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .partner-item:hover .partner-logo {
          filter: grayscale(0%) opacity(1) !important;
        }
        .partner-item:hover .partner-name {
          color: var(--foreground);
        }
      `}</style>
    </motion.section>
  );
}
