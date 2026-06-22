import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Contacto() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
