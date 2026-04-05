import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import LangingPageLayout from "@/components/landing/layout";
import { Footer } from "@/components/landing";
import { Stats } from "@/components/landing/about/stats";
import { Pillars } from "@/components/landing/about/pillars";
import { Partners } from "@/components/landing/about/partners";
import { Timeline } from "@/components/landing/about/timeline";
import { FadeIn } from "@/components/landing/about/fade-in";
import { AboutBanner } from "@/components/landing/about/banner";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about MaCliff LLP — Kenya's trusted Certified Public Accounting firm with over 30 years of combined partner experience in Audit, Tax, Advisory, and Consulting.",
  path: "/about",
  image: "https://macliffllp.co.ke/imgs/bg.webp",
  keywords: [
    "about Macliff LLP",
    "CPA firm Kenya",
    "audit firm Nairobi",
    "accounting partners Kenya",
    "Rose Bosibori Osoro",
    "Wycliff Bichanga",
    "Fred Mabeya",
    "Kiphone Omambia",
  ],
});

export default function AboutPage() {
  return (
    <LangingPageLayout>
      <main className="w-full bg-background">
        {/* Hero banner */}
        <AboutBanner />

        {/* Intro */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <FadeIn delay={0.1}>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-5 font-realce">
                  A One-Stop <br />
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, oklch(0.30 0.09 240), oklch(0.72 0.12 60))",
                    }}
                  >
                    Finance & Accounting
                  </span>{" "}
                  Partner
                </h2>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  MaCliff LLP is a certified public accounting firm and a
                  leading provider of Audit and Assurance, Tax, Advisory and
                  Consulting services in Kenya. Although the company started
                  operations as an LLP in 2023, the three partners have over 30
                  years of combined experience.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our core competency lies in aligning our processes with client
                  goals. We build customised workflows to sync our services with
                  your operations from bookkeeping and payroll to financial
                  analysis, tax preparation, and cash flow management.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We blend scale, capacity, and coverage with agility, profound
                  insight, and a tailored approach. Our team is committed to
                  providing an in-depth perspective and delivering an unmatched
                  client experience that brings clarity and builds confidence.
                </p>
              </FadeIn>
            </div>
            <div className="flex flex-col gap-6">
              <FadeIn delay={0.1}>
                <Stats />
              </FadeIn>
              <FadeIn delay={0.2}>
                <Timeline />
              </FadeIn>
            </div>
          </div>

          <Pillars />
        </div>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(to right, transparent, oklch(0.30 0.09 240) 30%, oklch(0.72 0.12 60) 70%, transparent)",
            }}
          />
        </div>

        {/* Partners */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-outline2 max-sm:text-5xl text-6xl font-realce uppercase">
                Our Team
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Meet the Partners
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-10">
              Professionals with extensive industry experience in Audit, Tax,
              Accounting, Legal, Finance, and Management committed to delivering
              an unmatched client experience.
            </p>
          </FadeIn>
          <Partners />
          <FadeIn delay={0.2}>
            <div className="mt-12 relative">
              {/* Gradient left border accent */}
              <div
                className="relative pl-6 sm:pl-8 py-6 sm:py-8 rounded-tl-4xl rounded-br-4xl border border-border overflow-hidden"
                style={{
                  background:
                    "color-mix(in oklch, var(--background) 60%, oklch(0.30 0.09 240) 6%)",
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{
                    background:
                      "linear-gradient(to bottom, oklch(0.30 0.09 240), oklch(0.72 0.12 60))",
                  }}
                />

                {/* Subtle bg glow */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, color-mix(in oklch, oklch(0.72 0.12 60) 8%, transparent), transparent 70%)",
                  }}
                />

                <p className="relative text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Our team has in-depth experience using various accounting
                  tools and ERP systems to assist clients in managing their
                  accounting functions and support them in strategic financial
                  planning, forecasting financial positions, preparing budgets
                  and cash control, and meeting changing compliance needs.
                </p>
                <p
                  className="relative mt-4 text-sm sm:text-base font-medium"
                  style={{ color: "oklch(0.72 0.12 60)" }}
                >
                  We offer exceptional value in an environment that encourages
                  teamwork, innovation, and excellence.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </LangingPageLayout>
  );
}
