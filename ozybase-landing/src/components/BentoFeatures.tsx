import Link from "next/link";
import { Headset, Cpu, Database, ArrowRight } from "lucide-react";

export default function BentoFeatures() {
  const cards = [
    {
      title: "Soporte Técnico Profesional",
      description: "Accede a soporte dedicado 24/7 con ingenieros especializados. Tiempos de respuesta mínimos y SLA garantizado.",
      icon: <Headset className="w-6 h-6 text-success-neon" />,
      href: "/soporte",
      cta: "Saber más",
    },
    {
      title: "Soluciones con Agentes IA",
      description: "Binarios autónomos autogestionados de baja latencia con memoria persistente para el monitoreo de infraestructura.",
      icon: <Cpu className="w-6 h-6 text-success-neon" />,
      href: "/agentes-ia",
      cta: "Explorar IA",
    },
    {
      title: "Digitalización de Procesos",
      description: "Migra tus flujos de trabajo en Excel manuales a plataformas web rápidas, seguras y de precisión matemática absoluta.",
      icon: <Database className="w-6 h-6 text-success-neon" />,
      href: "/digitalizacion",
      cta: "Ver migración",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16" id="servicios">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs text-success-neon uppercase tracking-widest block reveal-left">
            Nuestros Pilares
          </span>
          <h2 className="font-headline text-3xl md:text-4.5xl font-bold text-white tracking-tight reveal-left">
            Soluciones de Ingeniería Avanzada
          </h2>
          <p className="text-terminal-gray text-base md:text-lg reveal-right">
            Combinamos el soporte profesional humano con agentes autónomos de inteligencia artificial para asegurar la resiliencia operativa de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const revealClass = index === 0 ? "reveal-left" : index === 2 ? "reveal-right" : "scroll-reveal";
            return (
              <div
                key={index}
                className={`glass-card rounded-xl p-8 flex flex-col justify-between h-full border border-border-subtle group hover:scale-[1.01] ${revealClass}`}
              >
                <div>
                  <div className="w-12 h-12 rounded bg-surface border border-border-subtle flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
                    {card.icon}
                  </div>
                  <h3 className="font-headline text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-success-neon transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-terminal-gray text-sm md:text-base leading-relaxed mb-8">
                    {card.description}
                  </p>
                </div>

                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 font-mono text-sm text-success-neon font-bold group-hover:text-white transition-colors"
                >
                  {card.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
