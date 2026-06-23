import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contactar con Ventas y Soporte Técnico | OzyBase",
  description: "Ponte en contacto directo con nuestros ingenieros especializados. Garantizamos un tiempo de respuesta de menos de 15 minutos para consultas de TI.",
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
