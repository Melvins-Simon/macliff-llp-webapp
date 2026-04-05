import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import LangingPageLayout from "@/components/landing/layout";
import { Footer } from "@/components/landing";
import ServicesBanner from "@/components/services/banner";
import ServicesGrid from "@/components/services/grid";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Explore Macliff LLP's full range of professional services — Audit & Assurance, Tax Consulting, Advisory, Accounting, Payroll, HR Consulting, Corporate Finance and more.",
  path: "/services",
  image: "https://macliffllp.co.ke/imgs/services/audit.webp",
  keywords: [
    "audit services Kenya",
    "tax consulting Kenya",
    "accounting services Nairobi",
    "payroll services Kenya",
    "HR consulting Kenya",
    "corporate finance Kenya",
    "advisory services Kenya",
  ],
});

export default function ServicesPage() {
  return (
    <LangingPageLayout>
      <main className="w-full bg-background">
        <ServicesBanner />
        <ServicesGrid />
      </main>
      <Footer />
    </LangingPageLayout>
  );
}
