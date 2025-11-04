import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import HowItWorks from "./HowItWorks";
import Ecosystem from "./Ecosystem";
import FAQ from "./FAQ";
import CTASection from "./CTASection";
import Footer from "./Footer";

export default function LandingIndex() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Ecosystem />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
