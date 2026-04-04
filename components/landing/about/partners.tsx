"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { zoomIn } from "./fade-in";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const partners = [
  {
    name: "FCPA Rose Bosibori Osoro",
    role: "Partner – Administration",
    bio: "Over 25 years of experience in governance, public finance management, and devolution in both public and private sectors.",
    credentials: "MBA Finance · BA Sociology & History · CPA-K · CPS",
    initials: "RO",
    img: "/imgs/about/rose.webp",
  },
  {
    name: "CPA Wycliff Bichang'a",
    role: "Managing Partner",
    bio: "Finance expert with a strong background in strategic financial planning, compliance, taxation, audit, and risk management.",
    credentials: "CPA-K · Financial Consultancy & Service Sectors",
    initials: "WB",
    img: "/imgs/about/wycliff.webp",
  },
  {
    name: "CPA Fred N. Mabeya",
    role: "Partner – Assurance",
    bio: "Financial Management expert with strong background in Budgeting, Internal Audit, Account Reconciliation, and GAAP.",
    credentials: "CPA-K · Business Development",
    initials: "FM",
    img: "/imgs/about/fred.webp",
  },
  {
    name: "CPA Kiphone Omambia",
    role: "Partner – Taxation",
    bio: "Tax and Audit Expert with deep specialisation in Kenyan tax law and compliance frameworks.",
    credentials: "CPA-K · Tax & Audit",
    initials: "KO",
    img: "/imgs/about/kiphone.webp",
  },
];

type Partner = (typeof partners)[0];

function CardContent({ partner }: { partner: Partner }) {
  return (
    <div
      className="rounded-3xl overflow-hidden shadow-2xl border border-white/10"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.30 0.09 240), color-mix(in oklch, oklch(0.30 0.09 240) 75%, oklch(0.72 0.12 60)))",
      }}
    >
      <div className="relative h-44 w-full">
        <div
          className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.30 0.09 240), color-mix(in oklch, oklch(0.30 0.09 240) 60%, oklch(0.72 0.12 60)))",
          }}
        >
          {partner.initials}
        </div>
        <img
          src={partner.img}
          alt={partner.name}
          className="absolute inset-0 w-full h-full object-cover object-top"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.30 0.09 240) 0%, transparent 60%)",
          }}
        />
      </div>
      <div className="px-5 py-5">
        <h3 className="text-white font-bold text-base leading-snug mb-0.5">
          {partner.name}
        </h3>
        <p
          className="text-xs font-medium mb-3"
          style={{ color: "oklch(0.72 0.12 60)" }}
        >
          {partner.role}
        </p>
        <p className="text-white/70 text-sm leading-relaxed mb-2">
          {partner.bio}
        </p>
        <p className="text-white/40 text-xs leading-relaxed">
          {partner.credentials}
        </p>
      </div>
    </div>
  );
}

function HoverPopup({ partner }: { partner: Partner }) {
  return createPortal(
    <div className="fixed inset-0 z-100 flex items-center justify-center pointer-events-none">
      <motion.div
        className="w-[90vw] max-w-sm pointer-events-none"
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.1 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <CardContent partner={partner} />
      </motion.div>
    </div>,
    document.body,
  );
}

function MobileDialog({
  partner,
  onClose,
}: {
  partner: Partner;
  onClose: () => void;
}) {
  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "color-mix(in oklch, oklch(0.30 0.09 240) 50%, transparent)",
          backdropFilter: "blur(6px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      />
      <motion.div
        className="relative z-10 w-[90vw] max-w-sm"
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
        >
          <X size={14} />
        </button>
        <CardContent partner={partner} />
      </motion.div>
    </div>,
    document.body,
  );
}

function PartnerCard({ partner }: { partner: Partner }) {
  const [hovered, setHovered] = useState(false);
  const [dialog, setDialog] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="relative cursor-pointer"
        initial={zoomIn.initial}
        whileInView={zoomIn.animate}
        viewport={{ once: true, margin: "-60px" }}
        transition={zoomIn.transition}
        whileHover={{ scale: 1.06 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={() => setDialog(true)}
      >
        {/* Circle */}
        <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-accent/40 relative">
          <div
            className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.30 0.09 240), color-mix(in oklch, oklch(0.30 0.09 240) 60%, oklch(0.72 0.12 60)))",
            }}
          >
            {partner.initials}
          </div>
          <img
            src={partner.img}
            alt={partner.name}
            className="absolute inset-0 w-full h-full object-cover object-top"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      </motion.div>

      <div className="mt-3 text-center">
        <p className="text-xs font-semibold text-foreground leading-tight">
          {partner.name.split(" ").slice(-2).join(" ")}
        </p>
        <p
          className="text-[11px] mt-0.5"
          style={{ color: "oklch(0.72 0.12 60)" }}
        >
          {partner.role}
        </p>
      </div>

      <AnimatePresence>
        {hovered && <HoverPopup partner={partner} />}
      </AnimatePresence>
      <AnimatePresence>
        {dialog && (
          <MobileDialog partner={partner} onClose={() => setDialog(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export function Partners() {
  return (
    <div className="flex flex-wrap justify-center gap-8 sm:gap-14 py-6">
      {partners.map((p) => (
        <PartnerCard key={p.name} partner={p} />
      ))}
    </div>
  );
}
