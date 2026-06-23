import { Database } from "lucide-react";

export default function TrustedBy() {
  const logos = [
    { name: "Edvio", src: "/Logos/Edvio.png" },
    { name: "Lima Green", src: "/Logos/Lima green.png" },
    { name: "Elifyr", src: "/Logos/elifyr.png" },
    { name: "La Casa de la Construcción", src: "/Logos/lacasadelaconstruccion.png" },
    { name: "Edvio", src: "/Logos/Edvio.png" },
    { name: "Lima Green", src: "/Logos/Lima green.png" },
    { name: "Elifyr", src: "/Logos/elifyr.png" },
  ];

  return (
    <section className="py-16 border-y border-border-subtle bg-[#0e0e0e] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-center mb-8">
        <h4 className="font-mono text-xs text-terminal-gray uppercase tracking-widest">
          Confían en nosotros equipos de ingeniería globales
        </h4>
      </div>
      <div className="relative max-w-[1500px] mx-auto overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[100px] before:bg-gradient-to-r before:from-[#0e0e0e] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px] after:bg-gradient-to-l after:from-[#0e0e0e] after:to-transparent">
        <div className="logo-carousel-track items-center gap-8">
          {/* First set of logos */}
          {logos.map((logo, idx) => (
            <div
              key={`logo-1-${idx}`}
              className="flex items-center justify-center w-[250px] opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 max-w-[200px] object-contain"
              />
            </div>
          ))}
          {/* Second duplicate set for infinite loop */}
          {logos.map((logo, idx) => (
            <div
              key={`logo-2-${idx}`}
              className="flex items-center justify-center w-[250px] opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 max-w-[200px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
