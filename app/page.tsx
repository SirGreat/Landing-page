import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import LeadCapture from "@/components/LeadCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <HowItWorks />
        <Industries />
        <Pricing />
        <Testimonials />
        <LeadCapture />
      </main>
      <Footer />
    </>
  );
}
