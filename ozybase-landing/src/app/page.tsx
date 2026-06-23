import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import BentoFeatures from "@/components/BentoFeatures";
import TechnicalAdvantage from "@/components/TechnicalAdvantage";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "OzyBase | Soporte Técnico de TI en Lima y Perú, Agentes de IA y Digitalización",
  description: "Soporte de sistemas híbrido, presencial y remoto en Lima y todo el Perú. Especialistas en automatización, seguridad garantizada y backups en la nube para empresas.",
  keywords: [
    "Soporte técnico en Lima",
    "Soporte de TI Perú",
    "Soporte de sistemas Comas",
    "Especialista de TI presencial y remoto",
    "Backups de seguridad garantizada",
    "Soporte híbrido para empresas",
    "Outsourcing TI Lima"
  ],
  alternates: {
    canonical: "https://ozybase.com",
  },
  openGraph: {
    title: "OzyBase | Soporte Técnico de TI, Agentes de IA y Digitalización",
    description: "Soporte especializado de sistemas 24/7 y agentes inteligentes de IA para automatizar y optimizar la infraestructura de su empresa.",
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
      <main className="grow">
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
