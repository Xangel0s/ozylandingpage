"use client";

import { useState } from "react";
import { Server, Cpu, Layers, Activity, X, Database, LucideIcon } from "lucide-react";

interface ServiceOption {
  name: string;
  message: string;
  icon: LucideIcon;
  description?: string;
}

const servicesList: ServiceOption[] = [
  {
    name: "Soporte Técnico",
    message: "Hola OzyBase, estoy interesado en el servicio de Soporte Técnico para mis sistemas u oficinas.",
    icon: Server,
    description: "Consulta por WhatsApp - Remoto/Presencial",
  },
  {
    name: "Agentes IA",
    message: "Hola OzyBase, me gustaría obtener más información sobre la implementación de Agentes de IA autónomos.",
    icon: Cpu,
  },
  {
    name: "Digitalización de Procesos",
    message: "Hola OzyBase, busco digitalizar nuestros procesos y migrar hojas de cálculo de Excel.",
    icon: Layers,
  },
  {
    name: "Plataforma de Diagnósticos",
    message: "Hola OzyBase, quiero solicitar una demostración y cotización de la Plataforma de Diagnósticos.",
    icon: Activity,
  },
  {
    name: "Copias de Seguridad (Backup)",
    message: "Hola OzyBase, estoy interesado en el servicio de Copias de Seguridad (Backup) para resguardar mis datos.",
    icon: Database,
  },
];

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);

  const handleRedirect = (message: string) => {
    const phone = "51905948996";
    const encodedText = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encodedText}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-10 right-6 z-50 font-sans flex flex-col items-end">
      {/* Services Menu Popup */}
      <div
        className={`absolute bottom-20 right-0 w-72 bg-[#141414]/95 backdrop-blur border border-white/10 rounded-2xl p-4 shadow-2xl space-y-3 z-50 transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-90 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center border-b border-white/5 pb-2">
          <span className="text-[10px] font-mono text-terminal-gray uppercase tracking-widest">¿En qué podemos ayudarte?</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-terminal-gray hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <button
                key={index}
                onClick={() => handleRedirect(service.message)}
                className="w-full flex items-center gap-3 p-3 bg-black/40 hover:bg-success-neon/10 border border-white/5 hover:border-success-neon/30 text-left text-xs text-white rounded-xl transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-success-neon/10 border border-white/5 group-hover:border-success-neon/20 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-terminal-gray group-hover:text-success-neon" />
                </div>
                <div>
                  <span className="font-bold block group-hover:text-success-neon">{service.name}</span>
                  <span className="text-[10px] text-terminal-gray/80 line-clamp-1">
                    {service.description || "Consulta por WhatsApp"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] border border-black/40 hover:scale-105 active:scale-95 transition-all relative group z-50"
      >
        {/* Custom SVG WhatsApp Logo for high-fidelity look */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>
    </div>
  );
}
