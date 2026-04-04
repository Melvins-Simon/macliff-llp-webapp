"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { zoomIn } from "./fade-in";

const icons = {
  team: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  target: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  insight: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17H8v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
    </svg>
  ),
  award: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
};

const pillars = [
  {
    icon: icons.team,
    title: "Expert Team",
    body: "Professionals with extensive experience in Audit, Tax, Accounting, Legal, Finance, and Management.",
  },
  {
    icon: icons.target,
    title: "Client-Aligned",
    body: "We build customised workflows that sync our services with your operations and goals.",
  },
  {
    icon: icons.insight,
    title: "Strategic Insight",
    body: "In-depth experience with accounting tools and ERP systems for planning, forecasting, and compliance.",
  },
  {
    icon: icons.award,
    title: "Unmatched Value",
    body: "We blend scale and agility with a tailored approach-delivering clarity and building confidence.",
  },
];

export function Pillars() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16"
    >
      {pillars.map(({ icon, title, body }) => (
        <motion.div
          key={title}
          initial={zoomIn.initial}
          animate={inView ? zoomIn.animate : {}}
          transition={zoomIn.transition}
          className="rounded-tl-4xl rounded-br-4xl p-6 border border-border hover:border-accent/40 transition-colors"
          style={{
            background:
              "color-mix(in oklch, var(--background) 60%, oklch(0.30 0.09 240) 6%)",
          }}
        >
          <div
            className="w-10 h-10  flex items-center justify-center mb-4"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.30 0.09 240), color-mix(in oklch, oklch(0.30 0.09 240) 70%, oklch(0.72 0.12 60)))",
            }}
          >
            {icon}
          </div>
          <h3 className="font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {body}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
