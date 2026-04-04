"use client";

import { useEffect, useState } from "react";
import { Theme_Switcher } from "@/components/theme-switcher";
import { Phone, Mail, CalendarCheck } from "lucide-react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { cubicBezier } from "framer-motion";

const ease = cubicBezier(0.34, 1.1, 0.64, 1);

// Brand colors
// Navy: #163C68  → oklch(0.30 0.09 240)
// Gold: #BF9353  → oklch(0.72 0.12 60)
const NAVY = "oklch(0.30 0.09 240)";
const GOLD = "oklch(0.72 0.12 60)";

const links = [
  { link: "Home", href: "/" },
  { link: "About Us", href: "/about" },
  { link: "Services", href: "/services" },
  { link: "Insights", href: "/insights" },
  { link: "Contact Us", href: "/contact" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line
        x1="3"
        y1="6"
        x2="19"
        y2="6"
        style={{
          transformOrigin: "11px 6px",
          transition: "transform 0.3s ease",
          transform: open ? "translateY(5px) rotate(45deg)" : "none",
        }}
      />
      <line
        x1="3"
        y1="11"
        x2="19"
        y2="11"
        style={{
          transformOrigin: "11px 11px",
          transition: "opacity 0.2s ease",
          opacity: open ? 0 : 1,
        }}
      />
      <line
        x1="3"
        y1="16"
        x2="19"
        y2="16"
        style={{
          transformOrigin: "11px 16px",
          transition: "transform 0.3s ease",
          transform: open ? "translateY(-5px) rotate(-45deg)" : "none",
        }}
      />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── Top info bar ── */}
      <motion.div
        className="w-full overflow-hidden border-b border-border text-muted-foreground"
        style={{
          maxHeight: scrolled ? "0px" : "48px",
          opacity: scrolled ? 0 : 1,
          transition: "max-height 0.5s ease, opacity 0.5s ease",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.05,
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between relative">
          {/* Left: phone + email (desktop) | phone (mobile) */}
          <div className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm text-foreground/70">
            <a
              href="tel:+254734175129"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Phone size={12} />
              <span className="hidden sm:inline">+254 734 175 129</span>
              <span className="sm:hidden">Call us</span>
            </a>
            <a
              href="mailto:info@macliffllp.co.ke"
              className="hidden lg:flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Mail size={12} />
              info@macliffllp.co.ke
            </a>
          </div>

          {/* Mobile: centered | Desktop: right */}
          <div className="absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0 sm:ml-auto flex items-center gap-3 text-foreground/60">
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-[#0A66C2] transition-colors"
            >
              <FaLinkedinIn size={15} />
            </a>
            <a
              href="#"
              aria-label="X (Twitter)"
              className="hover:text-foreground transition-colors"
            >
              <FaXTwitter size={14} />
            </a>
          </div>

          {/* Right: theme switcher (mobile) | socials already desktop-only above */}
          <div className="flex items-center">
            <span className="sm:hidden">
              <Theme_Switcher />
            </span>
          </div>
        </div>
      </motion.div>

      {/* ── Main navbar ── */}
      <motion.div
        className={`w-full z-50 transition-all duration-300 backdrop-blur-md ${scrolled ? "fixed top-0 shadow-lg" : "relative"}`}
        style={{
          background: scrolled
            ? `color-mix(in oklch, ${NAVY} 92%, transparent)`
            : `linear-gradient(135deg, ${NAVY} 0%, color-mix(in oklch, ${NAVY} 80%, ${GOLD}) 100%)`,
          borderBottom: `1px solid color-mix(in oklch, ${GOLD} 30%, transparent)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.1,
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src="/logo.png"
              alt="Macliff LLP"
              className="h-9 w-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/logo.svg";
              }}
            />
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-7 text-[15px]">
            {links.map(({ link, href }) => (
              <a
                key={link}
                href={href}
                className="transition-colors"
                style={{ color: "oklch(0.88 0.04 60)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = `${GOLD}`)}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "oklch(0.88 0.04 60)")
                }
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#"
              className="hidden sm:inline-flex items-center gap-2 text-[15px] px-5 py-2 rounded-full font-medium transition-all whitespace-nowrap hover:opacity-90"
              style={{
                background: `linear-gradient(135deg, ${GOLD}, color-mix(in oklch, ${GOLD} 80%, oklch(0.85 0.15 50)))`,
                color: NAVY,
              }}
            >
              <CalendarCheck size={14} />
              Book Consultation
            </a>
            <span className="hidden sm:block">
              <Theme_Switcher />
            </span>
            <button
              className="md:hidden p-1.5 rounded-md transition-colors"
              style={{ color: "oklch(0.88 0.04 60)" }}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* ── Mobile backdrop ── */}
      <div
        className="md:hidden fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          backdropFilter: menuOpen ? "blur(8px)" : "blur(0px)",
          background: `color-mix(in oklch, ${NAVY} 50%, transparent)`,
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── Mobile slide-down panel ── */}
      <div
        className="md:hidden fixed left-0 right-0 z-50 transition-[transform,opacity] duration-300 ease-out"
        style={{
          top: scrolled ? "72px" : "120px",
          transform: menuOpen ? "translateY(0)" : "translateY(-12px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <div
          className="mx-3 rounded-2xl shadow-2xl overflow-hidden"
          style={{
            background: `color-mix(in oklch, ${NAVY} 95%, transparent)`,
            backdropFilter: "blur(24px)",
            border: `1px solid color-mix(in oklch, ${GOLD} 25%, transparent)`,
          }}
        >
          <nav className="flex flex-col p-3 gap-1 text-[15px]">
            {links.map(({ link, href }) => (
              <a
                key={link}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-4 rounded-xl transition-colors"
                style={{ color: "oklch(0.88 0.04 60)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = `color-mix(in oklch, ${GOLD} 10%, transparent)`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-medium transition-opacity hover:opacity-90 text-[15px]"
              style={{
                background: `linear-gradient(135deg, ${GOLD}, color-mix(in oklch, ${GOLD} 80%, oklch(0.85 0.15 50)))`,
                color: NAVY,
              }}
            >
              <CalendarCheck size={14} />
              Book Consultation
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
