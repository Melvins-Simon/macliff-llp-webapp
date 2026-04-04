import { About, Hero, Footer } from "@/components/landing";
import LangingPageLayout from "@/components/landing/layout";

export default function Home() {
  return (
    <>
      <LangingPageLayout>
        <Hero />
        <About />
        <Footer />
      </LangingPageLayout>
    </>
  );
}
