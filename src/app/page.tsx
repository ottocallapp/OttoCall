import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { ScreenshotShowcase } from "@/components/ScreenshotShowcase";
import { WhyTeachers } from "@/components/WhyTeachers";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustStrip />
      <Features />
      <HowItWorks />
      <ScreenshotShowcase />
      <WhyTeachers />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
