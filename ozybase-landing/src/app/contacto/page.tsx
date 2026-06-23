import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contacto de Ventas y Soporte de TI",
  description: "Póngase en contacto directo con OzyBase. Hable con un ingeniero especializado de Nivel 3 o solicite una cotización de soporte de TI y agentes de IA.",
  keywords: [
    "Contacto OzyBase",
    "Soporte técnico empresas",
    "Cotización soporte TI",
    "Ventas OzyBase",
    "Consultoría de sistemas"
  ],
  alternates: {
    canonical: "https://ozybase.com/contacto",
  },
};

export default function Contacto() {
  return (
    <>
      <Navbar />
      <main className="grow bg-black flex flex-col">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
