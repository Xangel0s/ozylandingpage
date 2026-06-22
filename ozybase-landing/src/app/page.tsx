import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import BentoFeatures from "@/components/BentoFeatures";
import TechnicalAdvantage from "@/components/TechnicalAdvantage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <TrustedBy />
        <BentoFeatures />
        <TechnicalAdvantage />
      </main>
      <Footer />
    </>
  );
}
