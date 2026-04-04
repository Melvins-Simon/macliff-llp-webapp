"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const services = [
  "Audit & Assurance",
  "Tax Services",
  "Advisory",
  "Payroll & HR",
  "Bookkeeping",
  "Risk Management",
];
const links = [
  { link: "Home", href: "/" },
  { link: "About Us", href: "/about" },
  { link: "Services", href: "/services" },
  { link: "Insights", href: "/insights" },
  { link: "Contact Us", href: "/contact" },
];
const NAVY = "oklch(0.30 0.09 240)";
const GOLD = "oklch(0.72 0.12 60)";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <>
      {/* ── Newsletter strip ── */}
      <div
        className="w-full py-10 sm:py-14 border-b border-cyan-300/50"
        style={{ background: `color-mix(in oklch, ${NAVY} 85%, ${GOLD})` }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Stack on mobile, row on sm+ */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 font-realce">
                Stay in the Loop
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Get updates on news, insights, and career opportunities at
                Macliff LLP.
              </p>
            </div>
            {submitted ? (
              <p className="text-white/80 text-sm font-medium">
                Thanks for subscribing!
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 w-full sm:max-w-lg"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 rounded-sm text-sm bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 w-full"
                />
                <button
                  type="submit"
                  className="flex items-center cursor-pointer justify-center gap-2 px-6 py-3 rounded-sm text-sm font-medium transition-opacity hover:opacity-85 whitespace-nowrap w-full sm:w-auto"
                  style={{
                    background: `linear-gradient(135deg, ${GOLD}, color-mix(in oklch, ${GOLD} 80%, oklch(0.85 0.15 50)))`,
                    color: NAVY,
                  }}
                >
                  <Send size={13} />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── Main footer ── */}
      <footer
        className="w-full text-white"
        style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, color-mix(in oklch, ${NAVY} 75%, ${GOLD}) 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {/* Brand — full width on mobile */}
            <div className="col-span-2 lg:col-span-1">
              <img
                src="/logo.png"
                alt="Macliff LLP"
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm text-white/70 leading-relaxed mb-5">
                A Certified Public Accounting firm providing Audit, Tax,
                Advisory and Consulting services in Kenya.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 hover:border-white/60 hover:bg-white/10 transition-all"
                >
                  <FaLinkedinIn size={13} />
                </a>
                <a
                  href="#"
                  aria-label="X"
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 hover:border-white/60 hover:bg-white/10 transition-all"
                >
                  <FaXTwitter size={13} />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4
                className="text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ color: GOLD }}
              >
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l.link}>
                    <a
                      href={l.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {l.link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4
                className="text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ color: GOLD }}
              >
                Services
              </h4>
              <ul className="flex flex-col gap-2.5">
                {services.map((s) => (
                  <li key={s}>
                    <a
                      href="#"
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ color: GOLD }}
              >
                Contact
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="tel:+254734175129"
                    className="flex items-start gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Phone size={14} className="mt-0.5 shrink-0" />
                    +254 734 175 129
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@macliffllp.co.ke"
                    className="flex items-start gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Mail size={14} className="mt-0.5 shrink-0" />
                    info@macliffllp.co.ke
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/70">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  Nairobi, Kenya
                </li>
                <li className="text-sm text-white/50 mt-1">
                  Mon – Fri: 8:00 – 17:00
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
            <p>
              © {new Date().getFullYear()} Macliff LLP. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white/80 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
