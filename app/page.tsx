import {
  About,
  Hero,
  Footer,
  Services,
  CTA,
  Testimonials,
  FAQ,
  Contact,
} from "@/components/landing";
import PartnersStrip from "@/components/landing/partners-strip";
import LangingPageLayout from "@/components/landing/layout";

export default function Home() {
  return (
    <>
      <LangingPageLayout>
        <Hero />
        <PartnersStrip />
        <About />
        <Services />
        <CTA />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </LangingPageLayout>
    </>
  );
}
