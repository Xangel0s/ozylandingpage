import Link from "next/link";

interface CTAProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function CTA({
  title = "¿LISTO PARA ASEGURAR EL CORE?",
  description = "Únete a la red especializada y despliega tu primer cluster de agentes autónomos hoy mismo.",
  ctaText = "CONTACTAR VENTAS",
  ctaLink = "/contacto",
}: CTAProps) {
  return (
    <section className="py-24 bg-success-neon text-black w-full border-t border-border-subtle">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-center space-y-8">
        <h2 className="font-headline text-3xl md:text-5xl font-extrabold uppercase tracking-tight reveal-left">
          {title}
        </h2>
        <p className="text-black/80 text-base md:text-lg max-w-2xl mx-auto font-sans font-medium reveal-right">
          {description}
        </p>
        <div className="flex justify-center">
          <Link
            href={ctaLink}
            id="cta-contact-button"
            className="bg-black text-white px-10 py-5 rounded font-mono text-sm font-bold hover:bg-black/90 active:scale-95 transition-all reveal-left"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
