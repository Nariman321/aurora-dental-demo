import { DemoBanner } from "@/components/DemoBanner";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Pricing } from "@/components/Pricing";
import { Doctors } from "@/components/Doctors";
import { Cases } from "@/components/Cases";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { BookingCTA } from "@/components/BookingCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileActionBar } from "@/components/MobileActionBar";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="sticky top-0 z-50">
        <DemoBanner />
        <Navigation />
      </div>
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Services />
        <WhyUs />
        <Pricing />
        <Doctors />
        <Cases />
        <Reviews />
        <FAQ />
        <BookingCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileActionBar />
    </>
  );
}
