import Hero from "../components/Hero";
import LogoStrip from "@/components/LogoStrip";
import GrowBusiness from "@/components/GrowBusiness";
import SecuritySection from "@/components/SecuritySection";
import PerformanceSection from "@/components/PerformanceSection";
import ApplicationChoice from "@/components/ApplicationChoice";
import AppPromo from "@/components/AppPromo";
import StatsBand from "@/components/StatsBand";
import WideDashboard from "@/components/WideDashboard";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <GrowBusiness />
      <SecuritySection />
      <PerformanceSection />
      <ApplicationChoice />
      <AppPromo />
      <StatsBand />
      <WideDashboard />
      <Testimonials />
      <Footer />
    </main>
  );
}
