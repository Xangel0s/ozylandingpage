import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import BentoFeatures from "@/components/BentoFeatures";
import TechnicalAdvantage from "@/components/TechnicalAdvantage";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "OzyBase | Soporte Técnico de TI, Agentes de IA y Digitalización para Empresas",
  description: "Optimice su infraestructura digital con soporte de sistemas 24/7, agentes autónomos de IA y migración de procesos de Excel a la nube. Evite caídas y acelere sus operaciones.",
  keywords: [
    "Soporte técnico para empresas",
    "Soporte TI 24/7",
    "Agentes de IA autónomos",
    "Digitalización de procesos",
    "Monitoreo de servidores",
    "Outsourcing tecnológico"
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
