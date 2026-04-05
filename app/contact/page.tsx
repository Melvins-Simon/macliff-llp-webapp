import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import LangingPageLayout from "@/components/landing/layout";
import { Footer } from "@/components/landing";
import { ContactBanner } from "@/components/landing/contact/banner";
import Contact from "@/components/landing/contact";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Macliff LLP for a free initial consultation on Audit, Tax, Advisory and Accounting services in Kenya. We respond within 24 hours.",
  path: "/contact",
  image: "https://macliffllp.co.ke/imgs/cta.webp",
  keywords: [
    "contact Macliff LLP",
    "book consultation Kenya",
    "CPA firm contact Nairobi",
    "accounting consultation Kenya",
  ],
});

export default function ContactPage() {
  return (
    <LangingPageLayout>
      <main className="w-full bg-background">
        <ContactBanner />
        <Contact />
      </main>
      <Footer />
    </LangingPageLayout>
  );
}
