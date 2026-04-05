"use client";

import { FadeIn } from "./about/fade-in";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="w-full bg-background py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — content */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-outline2 max-sm:text-5xl text-6xl font-realce uppercase">
                  About Us
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-realce lg:text-5xl font-bold leading-tight tracking-tight text-foreground mb-5">
                Kenya's Trusted <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, oklch(0.30 0.09 240), oklch(0.72 0.12 60))",
                  }}
                >
                  Audit, Tax & Advisory
                </span>{" "}
                Firm
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                MaCliff LLP is a certified public accounting firm and a leading
                provider of Audit and Assurance, Tax, Advisory and Consulting
                services in Kenya.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Although the company started operations as an LLP in 2023, the
                three partners have over 30 years of combined experience. We
                serve as a one-stop finance and accounting solution provider
                blending scale, capacity, and coverage with agility, profound
                insight, and a tailored approach.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-85"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.30 0.09 240), color-mix(in oklch, oklch(0.30 0.09 240) 80%, oklch(0.72 0.12 60)))",
                  color: "oklch(0.95 0.02 60)",
                }}
              >
                Learn More About Us
                <ArrowRight size={14} />
              </a>
            </FadeIn>
          </div>

          {/* Right — image */}
          <FadeIn delay={0.15}>
            <div className="relative rounded-bl-4xl rounded-tr-4xl overflow-hidden h-72 sm:h-96 lg:h-[480px] shadow-2xl">
              <img
                src="/imgs/about/about-1.webp"
                alt="Macliff LLP"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, color-mix(in oklch, oklch(0.30 0.09 240) 60%, transparent) 0%, transparent 50%)",
                }}
              />
              <div
                className="absolute bottom-0 rounded-bl-4xl left-0  px-4 py-3 backdrop-blur-md border border-white/20"
                style={{
                  background:
                    "color-mix(in oklch, oklch(0.30 0.09 240) 80%, transparent)",
                }}
              >
                <p className="text-white text-xs font-semibold tracking-wide uppercase mb-0.5">
                  Trusted Since
                </p>
                <p className="text-white/90 text-2xl font-bold">2023</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
