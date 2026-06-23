"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bolt, HelpCircle, ShieldAlert, Wifi, Database, ChevronDown } from "lucide-react";

const diagnostics = [
  {
    question: "¿Tu empresa experimenta caídas constantes en sus plataformas o internet?",
    icon: Wifi,
    recommendation: "Nuestros ingenieros realizarán una auditoría física y lógica de tu red, implementarán balanceadores de carga Multi-WAN con doble proveedor y segmentarán tu tráfico para garantizar una conexión estable y sin caídas.",
    badge: "Conectividad"
  },
  {
    question: "¿Cuentas con respaldos automatizados e inmunes ante pérdida accidental o de hardware?",
    icon: Database,
    recommendation: "Nuestro equipo técnico diseñará e implementará una política de backup 3-2-1 automatizada. Nos encargamos de la configuración de respaldos incrementales cifrados y de la replicación segura en la nube para asegurar que nunca pierdas información crítica.",
    badge: "Seguridad de Datos"
  },
  {
    question: "¿Qué sucedería ante un ataque de Ransomware en tu servidor principal?",
    icon: ShieldAlert,
    recommendation: "Especialistas de OzyBase blindarán tus servidores con firewalls NGFW avanzados y políticas Zero-Trust, configurando defensas proactivas y backups inmutables que garantizan la continuidad de tu negocio ante cualquier ataque.",
    badge: "Ciberseguridad"
  }
];

export default function TechnicalAdvantage() {
  const [uptime, setUptime] = useState("99.9");
  const [responseTime, setResponseTime] = useState("12");
  const [cycleWord, setCycleWord] = useState("Auto-Scale");
  const [fade, setFade] = useState(false);
  const [activeDiagnostic, setActiveDiagnostic] = useState<number | null>(null);

  useEffect(() => {
    // Simulated Uptime jitter
    const uptimeInterval = setInterval(() => {
      const randomVal = (98 + Math.random() * 1.99).toFixed(3);
      setUptime(randomVal);
    }, 4000);

    // Simulated Response Time jitter
    const responseInterval = setInterval(() => {
      const randomVal = Math.floor(10 + Math.random() * 5).toString();
      setResponseTime(randomVal);
    }, 5500);

    // Simulated AI Word Cycle
    const cycleWords = ["Auto-Scale", "ML-Optimized", "Neural-Sync", "AI-Driven", "SLA-Secured"];
    let wordIdx = 0;
    const cycleInterval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        wordIdx = (wordIdx + 1) % cycleWords.length;
        setCycleWord(cycleWords[wordIdx]);
        setFade(false);
      }, 300);
    }, 3500);

    return () => {
      clearInterval(uptimeInterval);
      clearInterval(responseInterval);
      clearInterval(cycleInterval);
    };
  }, []);

  return (
    <section className="py-24 px-6 md:px-16 bg-[#0c0c0c] border-y border-border-subtle">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs text-success-neon uppercase tracking-widest block">
            Métricas de Infraestructura
          </span>
          <h2 className="font-headline text-3xl md:text-4.5xl font-bold text-white tracking-tight">
            Excelencia Operativa en Tiempo Real
          </h2>
          <p className="text-terminal-gray text-base md:text-lg">
            Monitoreamos y optimizamos constantemente los indicadores clave de rendimiento para garantizar la disponibilidad absoluta de tu ecosistema tecnológico.
          </p>
        </div>        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Service Level Standards */}
          <div className="glass-card rounded-xl p-8 col-span-1 md:col-span-2 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-success-neon to-transparent"></div>
            <h3 className="font-mono text-xs text-success-neon uppercase tracking-widest mb-8">
              Service Level Standards
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#141414] border border-border-subtle p-6 rounded flex flex-col items-center justify-center text-center hover:border-success-neon/30 transition-colors">
                <div className="font-mono text-3xl md:text-4.5xl font-extrabold text-white mb-2 flex items-baseline select-none">
                  {uptime}
                  <span className="text-success-neon text-lg ml-0.5">%</span>
                </div>
                <div className="font-mono text-[10px] text-terminal-gray uppercase tracking-widest">
                  Live Uptime
                </div>
              </div>

              <div className="bg-[#141414] border border-border-subtle p-6 rounded flex flex-col items-center justify-center text-center hover:border-success-neon/30 transition-colors">
                <div className="font-mono text-3xl md:text-4.5xl font-extrabold text-white mb-2 flex items-baseline select-none">
                  {responseTime}
                  <span className="text-success-neon text-lg ml-1">min</span>
                </div>
                <div className="font-mono text-[10px] text-terminal-gray uppercase tracking-widest">
                  SLA Response
                </div>
              </div>

              <div className="bg-[#141414] border border-border-subtle p-6 rounded flex flex-col items-center justify-center text-center hover:border-success-neon/30 transition-colors">
                <div className="font-mono text-3xl md:text-4.5xl font-extrabold text-white mb-2 select-none">
                  24/7
                </div>
                <div className="font-mono text-[10px] text-terminal-gray uppercase tracking-widest">
                  Support Active
                </div>
              </div>

              <div className="bg-[#141414] border border-border-subtle p-6 rounded flex flex-col items-center justify-center text-center hover:border-success-neon/30 transition-colors">
                <div
                  className={`font-mono text-xl md:text-2xl font-bold text-white mb-2 select-none transition-opacity duration-300 ${
                    fade ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {cycleWord}
                </div>
                <div className="font-mono text-[10px] text-terminal-gray uppercase tracking-widest">
                  Dynamic Optimization
                </div>
              </div>
            </div>
          </div>

          {/* Key Advantages Summary */}
          <div className="glass-card rounded-xl p-8 flex flex-col justify-between border border-border-subtle">
            <div className="space-y-6">
              <h4 className="font-mono text-xs text-success-neon uppercase tracking-widest">
                Monitoreo con IA Pro
              </h4>
              <p className="text-terminal-gray text-sm md:text-base leading-relaxed">
                Nuestra plataforma impulsada por IA predice posibles interrupciones, automatiza la asignación de recursos y minimiza los cuellos de botella de red.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-border-subtle/40">
              <h4 className="font-mono text-xs text-success-neon uppercase tracking-widest">
                Escalabilidad Inmediata
              </h4>
              <p className="text-terminal-gray text-sm md:text-base leading-relaxed">
                Aumenta tu capacidad y recursos en tiempo real sin interrupción operativa ni despliegues complejos de sistemas.
              </p>
            </div>
          </div>
        </div>

        {/* Preguntas de Autoevaluación y Diagnóstico */}
        <div className="mt-20 mb-12">
          <div className="mb-8 text-left max-w-2xl">
            <span className="font-mono text-xs text-success-neon uppercase tracking-widest block mb-2">
              Autodiagnóstico Operativo
            </span>
            <h3 className="font-headline text-2xl font-bold text-white tracking-tight">
              ¿Tu empresa está verdaderamente protegida?
            </h3>
            <p className="text-terminal-gray text-sm mt-2">
              Haz clic en cada situación crítica para ver nuestro análisis de vulnerabilidad y la recomendación técnica recomendada por OzyBase.
            </p>
          </div>

          <div className="space-y-4">
            {diagnostics.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeDiagnostic === idx;
              return (
                <div
                  key={idx}
                  className={`glass-card rounded-xl border transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "border-[#D2F20B]/40 bg-[#D2F20B]/[0.02]"
                      : "border-border-subtle hover:border-white/20 hover:bg-white/[0.01]"
                  }`}
                >
                  <button
                    onClick={() => setActiveDiagnostic(isActive ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-colors shrink-0 ${
                        isActive
                          ? "bg-[#D2F20B]/10 border-[#D2F20B]/30 text-[#D2F20B]"
                          : "bg-white/5 border-white/10 text-terminal-gray"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#D2F20B] uppercase tracking-widest block mb-1">
                          {item.badge}
                        </span>
                        <h4 className="text-sm md:text-base font-bold text-white leading-tight">
                          {item.question}
                        </h4>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-terminal-gray transition-transform duration-300 shrink-0 ml-4 ${
                      isActive ? "rotate-180 text-[#D2F20B]" : ""
                    }`} />
                  </button>
                  
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isActive ? "max-h-60 opacity-100 border-t border-white/5" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="p-6 bg-black/30 text-xs md:text-sm text-terminal-gray leading-relaxed space-y-2">
                      <div className="font-mono text-[10px] text-[#D2F20B] uppercase tracking-widest">Recomendación OzyBase:</div>
                      <p>{item.recommendation}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom custom layout decoration */}
        <div className="mt-8 bg-linear-to-br from-[#141414] to-[#1a1c0d] border border-[#2a2f10] p-8 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded bg-success-neon text-black flex items-center justify-center">
              <Bolt className="w-5 h-5" />
            </div>
            <h3 className="font-headline text-xl md:text-2xl font-bold text-white italic uppercase">
              Automatización a Medida
            </h3>
            <p className="text-terminal-gray text-sm md:text-base max-w-3xl">
              Elimina los registros en papel y Excels vulnerables. Diseñamos herramientas web en enclaves seguros de alta precisión para tu flujo de trabajo diario.
            </p>
          </div>
          <Link
            href="/digitalizacion"
            className="border border-success-neon bg-success-neon text-black font-mono text-sm font-bold px-8 py-4 rounded hover:bg-transparent hover:text-success-neon transition-all flex items-center gap-2 whitespace-nowrap self-stretch md:self-auto justify-center"
          >
            <span>Saber Más</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
