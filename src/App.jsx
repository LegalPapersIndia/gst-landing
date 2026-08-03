

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import WhoNeedsGst from "./components/WhoNeedsGst";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import ProcessSteps from "./components/ProcessSteps";
import WhyUsAndDocuments from "./components/WhyUsAndDocuments";
import Reviews from "./components/Reviews";
import InTheNews from "./components/InTheNews";
import FAQ from "./components/FAQ";
import AppPromo from "./components/AppPromo";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div id="top-form">
      <Navbar />
      <Hero />
      <Reviews />
      <TrustStrip />
      <WhoNeedsGst />
      <Services />
      <Pricing />
      <ProcessSteps />
      <WhyUsAndDocuments />
      <InTheNews />
      <FAQ />
      <AppPromo />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
      <WhatsAppButton />
      <div className="h-16 lg:hidden" />
    </div>
  );
}