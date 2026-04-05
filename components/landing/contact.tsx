"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { zoomIn } from "./about/fade-in";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const NAVY = "oklch(0.30 0.09 240)";
const GOLD = "oklch(0.72 0.12 60)";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+254 734 175 129",
    href: "tel:+254734175129",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@macliffllp.co.ke",
    href: "mailto:info@macliffllp.co.ke",
  },
  { icon: MapPin, label: "Location", value: "Nairobi, Kenya", href: "#" },
  { icon: Clock, label: "Hours", value: "Mon – Fri: 8:00 – 17:00", href: "#" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm border border-border bg-background/60 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors";

  return (
    <section
      className="w-full py-16 sm:py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(160deg, color-mix(in oklch, ${GOLD} 5%, var(--background)) 0%, var(--background) 50%, color-mix(in oklch, ${NAVY} 10%, var(--background)) 100%)`,
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"
        style={{
          background: `radial-gradient(circle, color-mix(in oklch, ${GOLD} 8%, transparent), transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"
        style={{
          background: `radial-gradient(circle, color-mix(in oklch, ${NAVY} 12%, transparent), transparent 70%)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
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
              Get In Touch
            </span>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 font-realce">
            Let's{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${NAVY}, ${GOLD})`,
              }}
            >
              Work Together
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Reach out for a consultation. Our team will respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
          {/* Left — contact info */}
          <motion.div
            initial={zoomIn.initial}
            animate={inView ? zoomIn.animate : {}}
            transition={{ ...zoomIn.transition, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Info card */}
            <div
              className="rounded-md p-6 sm:p-7 border border-border"
              style={{
                background: `linear-gradient(135deg, ${NAVY}, color-mix(in oklch, ${NAVY} 75%, ${GOLD}))`,
              }}
            >
              <h3 className="text-white font-bold text-lg mb-5">
                Contact Information
              </h3>
              <div className="flex flex-col gap-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-start gap-3 group"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                      style={{
                        background: `color-mix(in oklch, ${GOLD} 20%, transparent)`,
                        border: `1px solid color-mix(in oklch, ${GOLD} 30%, transparent)`,
                      }}
                    >
                      <Icon size={15} style={{ color: GOLD }} />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs mb-0.5">{label}</p>
                      <p className="text-white text-sm font-medium group-hover:text-amber-200 transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick note */}
            <div
              className=" p-5 border border-border text-sm text-muted-foreground leading-relaxed"
              style={{
                background:
                  "color-mix(in oklch, var(--background) 60%, oklch(0.30 0.09 240) 6%)",
              }}
            >
              <span style={{ color: GOLD }} className="font-semibold">
                Free initial consultation.
              </span>{" "}
              We assess your needs and recommend the right services no
              obligation.
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={zoomIn.initial}
            animate={inView ? zoomIn.animate : {}}
            transition={{ ...zoomIn.transition, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-md p-6 sm:p-8 border border-border"
              style={{
                background:
                  "color-mix(in oklch, var(--background) 60%, oklch(0.30 0.09 240) 6%)",
              }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: `color-mix(in oklch, ${GOLD} 15%, transparent)`,
                      border: `2px solid ${GOLD}`,
                    }}
                  >
                    <CheckCircle size={28} style={{ color: GOLD }} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-sm underline text-muted-foreground hover:text-foreground transition-colors mt-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Kamau"
                        className={inputClass}
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.co.ke"
                        className={inputClass}
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Audit Services Inquiry"
                      className={inputClass}
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your business and what you need help with..."
                      className={`${inputClass} resize-none`}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-85 hover:scale-[1.02] mt-1 cursor-pointer"
                    style={{
                      background: `linear-gradient(135deg, ${NAVY}, color-mix(in oklch, ${NAVY} 75%, ${GOLD}))`,
                      color: "oklch(0.95 0.02 60)",
                      boxShadow: `0 4px 20px color-mix(in oklch, ${NAVY} 25%, transparent)`,
                    }}
                  >
                    <Send size={14} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
