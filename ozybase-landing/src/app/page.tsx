import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import BentoFeatures from "@/components/BentoFeatures";
import TechnicalAdvantage from "@/components/TechnicalAdvantage";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "OzyBase | Expertos en Soporte Técnico y Automatización con IA",
  description: "Elevamos la productividad de tu empresa mediante soporte especializado 24/7 y agentes de IA inteligentes diseñados para optimizar tu infraestructura sin intervención manual.",
  alternates: {
    canonical: "https://ozybase.com",
  },
  openGraph: {
    title: "OzyBase | Soporte Técnico y Automatización con IA",
    description: "Soporte especializado 24/7 y agentes autónomos de IA para optimizar tu infraestructura digital.",
    url: "https://ozybase.com",
    type: "website",
    images: [
      {
        url: "https://ozybase.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OzyBase - Soporte Técnico y Automatización con IA",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <TrustedBy />
        <BentoFeatures />
        <TechnicalAdvantage />
        <CTA 
          title="¿Listo para transformar tu infraestructura?" 
          description="Únete a las empresas que ya optimizan su productividad con nuestro equipo de expertos."
          ctaText="CONTACTAR CON VENTAS"
        />
      </main>
      <Footer />
    </>
  );
}
