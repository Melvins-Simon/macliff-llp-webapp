"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { zoomIn } from "./about/fade-in";
import { Plus, Minus } from "lucide-react";

const NAVY = "oklch(0.30 0.09 240)";
const GOLD = "oklch(0.72 0.12 60)";

const faqs = [
  {
    q: "What types of businesses do you serve?",
    a: "We serve a wide range of businesses from SMEs and startups to large corporations and public sector entities across Kenya. Our services are tailored to meet the specific needs of each client, regardless of industry or size.",
  },
  {
    q: "How do I get started with Macliff LLP?",
    a: "Simply reach out via our contact form, email, or phone to request a consultation. One of our advisors will get in touch within 24 hours to understand your needs and recommend the right services for your business.",
  },
  {
    q: "What is included in your audit and assurance services?",
    a: "Our audit services cover statutory audits, internal audits, compliance reviews, and financial statement assurance. We ensure your reporting meets all legal obligations under Kenyan law and international standards.",
  },
  {
    q: "Can you handle our payroll if we have employees across multiple counties?",
    a: "Yes. Our end-to-end payroll outsourcing platform is designed to handle multi-location payroll accurately and securely, including PAYE, NHIF, NSSF, and other statutory deductions across all counties in Kenya.",
  },
  {
    q: "How do you ensure confidentiality of our financial information?",
    a: "We adhere to strict professional ethics and data protection standards. All client information is handled with the highest level of confidentiality, and our team is bound by professional codes of conduct under ICPAK guidelines.",
  },
  {
    q: "Do you offer tax planning services or only compliance?",
    a: "We offer both. Beyond ensuring your tax compliance is in order, we proactively advise on tax planning strategies to minimise your liability within the law — helping you retain more of your earnings.",
  },
  {
    q: "What makes Macliff LLP different from other accounting firms in Kenya?",
    a: "Our partners bring over 30 years of combined experience across audit, tax, advisory, and finance. We combine the depth of a large firm with the agility and personal attention of a boutique practice delivering clarity, confidence, and real results.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={zoomIn.initial}
      animate={inView ? zoomIn.animate : {}}
      transition={{ ...zoomIn.transition, delay: index * 0.06 }}
      className=" rounded-tl-4xl rounded-br-4xl border  overflow-hidden transition-colors duration-300"
      style={{
        borderColor: isOpen
          ? `color-mix(in oklch, ${GOLD} 40%, transparent)`
          : "var(--border)",
        background: isOpen
          ? `color-mix(in oklch, var(--background) 50%, oklch(0.30 0.09 240) 10%)`
          : `color-mix(in oklch, var(--background) 60%, oklch(0.30 0.09 240) 5%)`,
      }}
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Number badge */}
          <span
            className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300"
            style={{
              background: isOpen
                ? `linear-gradient(135deg, ${NAVY}, color-mix(in oklch, ${NAVY} 70%, ${GOLD}))`
                : "color-mix(in oklch, var(--muted) 80%, transparent)",
              color: isOpen ? "white" : "var(--muted-foreground)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm sm:text-base font-semibold text-foreground leading-snug">
            {faq.q}
          </span>
        </div>

        {/* Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 0 : 0 }}
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
          style={{
            background: isOpen
              ? `color-mix(in oklch, ${GOLD} 20%, transparent)`
              : "color-mix(in oklch, var(--muted) 60%, transparent)",
          }}
        >
          {isOpen ? (
            <Minus size={14} style={{ color: GOLD }} />
          ) : (
            <Plus size={14} className="text-muted-foreground" />
          )}
        </motion.div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-15 sm:pl-17">
              {/* Accent line */}
              <div className="flex gap-4">
                <div
                  className="w-px shrink-0 rounded-full self-stretch"
                  style={{
                    background: `linear-gradient(to bottom, ${GOLD}, transparent)`,
                  }}
                />
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="w-full py-16 sm:py-24 bg-background border-y border-y-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={zoomIn.initial}
          animate={inView ? zoomIn.animate : {}}
          transition={zoomIn.transition}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-accent" />
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              FAQ
            </span>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 font-realce">
            Frequently Asked{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${NAVY}, ${GOLD})`,
              }}
            >
              Questions
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Everything you need to know about working with Macliff LLP.
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
