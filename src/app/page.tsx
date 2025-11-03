import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import Ecosystem from "../components/Ecosystem";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <Ecosystem />
    </div>
  );
}
