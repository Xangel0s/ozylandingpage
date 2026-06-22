import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TerminalLogs from "@/components/TerminalLogs";
import CTA from "@/components/CTA";
import { Radar, Cpu, Zap, Fingerprint, FolderSync, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Agentes de IA y Monitoreo Autónomo | OzyBase",
  description: "Elimina el monitoreo manual. Despliega binarios especializados de baja latencia con memoria persistente para vigilar tu infraestructura 24/7.",
  alternates: {
    canonical: "https://ozybase.com/agentes-ia",
  },
};

export default function AgentesIa() {
  return (
    <>
      <Navbar />
      <main className="grow bg-black">
        
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center pt-20 pb-32 overflow-hidden px-6 md:px-16">
          <div className="absolute inset-0 z-0 opacity-20 matrix-grid"></div>
          
          {/* Background Video */}
          <video
            src="/Videos/Conversacion.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-12 pointer-events-none mix-blend-luminosity grayscale"
          />
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-success-neon/5 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

          <div className="relative z-10 max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-border-subtle rounded-full reveal-left">
                <span className="w-2 h-2 rounded-full bg-success-neon animate-pulse"></span>
                <span className="font-mono text-xs text-success-neon uppercase tracking-widest">
                  Autonomous Core Active
                </span>
              </div>
              <h1 className="font-headline text-4xl md:text-6.5xl font-extrabold text-white leading-tight reveal-left">
                Agentes IA & <br />
                <span className="text-success-neon">Monitoreo Autónomo</span>
              </h1>
              <p className="text-terminal-gray text-base md:text-lg max-w-xl leading-relaxed reveal-right">
                Elimina la vigilancia manual. Nuestros binarios especializados proporcionan memoria persistente e inteligencia de contexto para gestionar tu infraestructura de forma autónoma 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contacto"
                  className="bg-success-neon text-black font-mono text-sm font-bold px-8 py-4 rounded hover:brightness-110 active:scale-95 transition-all flex items-center justify-center animate-none"
                >
                  DESPLEGAR AGENTES
                </a>
              </div>
            </div>

            {/* Simulated Live Terminal */}
            <div className="lg:col-span-5 w-full">
              <TerminalLogs />
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-24 bg-[#0a0a0a] border-t border-border-subtle">
          <div className="max-w-[1280px] mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl space-y-4">
                <span className="font-mono text-xs text-success-neon uppercase tracking-widest block reveal-left">
                  Competencias Core
                </span>
                <h2 className="font-headline text-3xl md:text-4.5xl font-bold text-white tracking-tight reveal-left">
                  Binarios Especializados y Resolución en Tiempo Real
                </h2>
              </div>
              <div className="text-terminal-gray text-sm md:text-base max-w-sm font-sans reveal-right">
                El monitoreo estándar es reactivo. Los agentes de OzyBase son capas de infraestructura autónomas que operan sin intervención humana.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group p-8 bg-[#141414] border border-border-subtle rounded-xl flex flex-col h-full hover:border-success-neon/30 transition-colors reveal-left">
                <div className="w-12 h-12 bg-success-neon/10 border border-success-neon/20 rounded flex items-center justify-center mb-8 transition-transform group-hover:scale-105">
                  <Radar className="w-6 h-6 text-success-neon" />
                </div>
                <h4 className="font-headline text-xl font-bold text-white mb-4">Monitoreo Autónomo</h4>
                <p className="text-terminal-gray text-sm md:text-base mb-8 grow">
                  Sistemas de detección proactiva 24/7. Cada paquete y cambio de estado es analizado por modelos de regresión no lineal en tiempo real.
                </p>
                <ul className="space-y-3 font-mono text-xs text-white">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-success-neon" />
                    Alerta de anomalías con latencia cero
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-success-neon" />
                    Predicción de tiempos de inactividad
                  </li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="group p-8 bg-[#141414] border border-border-subtle rounded-xl flex flex-col h-full hover:border-success-neon/30 transition-colors scroll-reveal">
                <div className="w-12 h-12 bg-success-neon/10 border border-success-neon/20 rounded flex items-center justify-center mb-8 transition-transform group-hover:scale-105">
                  <Cpu className="w-6 h-6 text-success-neon" />
                </div>
                <h4 className="font-headline text-xl font-bold text-white mb-4">Binarios con Memoria</h4>
                <p className="text-terminal-gray text-sm md:text-base mb-8 grow">
                  Inteligencia consciente del contexto que aprende de incidentes previos. Nuestros agentes almacenan el historial de estado para diferenciar picos de amenazas reales.
                </p>
                <ul className="space-y-3 font-mono text-xs text-white">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-success-neon" />
                    Preservación de contexto a largo plazo
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-success-neon" />
                    Reconocimiento de patrones complejos
                  </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="group p-8 bg-[#141414] border border-border-subtle rounded-xl flex flex-col h-full hover:border-success-neon/30 transition-colors reveal-right">
                <div className="w-12 h-12 bg-success-neon/10 border border-success-neon/20 rounded flex items-center justify-center mb-8 transition-transform group-hover:scale-105">
                  <Zap className="w-6 h-6 text-success-neon" />
                </div>
                <h4 className="font-headline text-xl font-bold text-white mb-4">Resolución en Tiempo Real</h4>
                <p className="text-terminal-gray text-sm md:text-base mb-8 grow">
                  Mitigación automatizada de crisis. Cuando se superan los umbrales críticos, los agentes activan protocolos de remediación definidos instantáneamente.
                </p>
                <ul className="space-y-3 font-mono text-xs text-white">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-success-neon" />
                    Mecanismos de defensa auto-escalables
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-success-neon" />
                    Secuencias de rollback instantáneas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Reliability Section */}
        <section className="py-24 overflow-hidden bg-black border-t border-border-subtle">
          <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 md:order-1 flex justify-center reveal-left">
              <div className="w-full max-w-sm aspect-square bg-[#141414] rounded-xl border border-border-subtle overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 matrix-grid opacity-15"></div>
                <div className="z-10 text-center p-8">
                  <div className="text-[80px] font-extrabold text-success-neon opacity-10 leading-none mb-4 font-mono">99.99%</div>
                  <h4 className="font-headline text-xl font-bold text-white mb-2">Confiabilidad Extrema</h4>
                  <p className="text-terminal-gray text-sm font-sans">Nuestra infraestructura core es descentralizada. Si un agente cae, diez más se sincronizan para cubrir la brecha.</p>
                </div>
              </div>
            </div>
            <div className="space-y-8 order-1 md:order-2 reveal-right">
              <h2 className="font-headline text-3xl md:text-4.5xl font-bold text-white tracking-tight">
                Integridad Técnica por Diseño
              </h2>
              <p className="text-terminal-gray text-base md:text-lg leading-relaxed font-sans">
                No solo construimos software; creamos ecosistemas autónomos. Los agentes de OzyBase están desarrollados en binarios de bajo nivel para un rendimiento máximo.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 shrink-0 w-6 h-6 rounded-full border border-success-neon flex items-center justify-center">
                    <Fingerprint className="w-3.5 h-3.5 text-success-neon" />
                  </div>
                  <div>
                    <h5 className="font-headline text-base font-bold text-white mb-1">Persistencia de Estado Encriptada</h5>
                    <p className="text-terminal-gray text-sm md:text-base">Toda la memoria de contexto se almacena en enclaves encriptados por hardware, asegurando velocidad y seguridad.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 shrink-0 w-6 h-6 rounded-full border border-success-neon flex items-center justify-center">
                    <FolderSync className="w-3.5 h-3.5 text-success-neon" />
                  </div>
                  <div>
                    <h5 className="font-headline text-base font-bold text-white mb-1">Cadenas de Lógica Autónoma</h5>
                    <p className="text-terminal-gray text-sm md:text-base">Lógica de auto-sanación que actualiza y parchea el core de monitoreo sin tiempos de inactividad.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA
          title="¿Listo para asegurar el core?"
          description="Únete a la red especializada y despliega tu primer cluster de agentes autónomos hoy mismo."
          ctaText="CONTACTAR VENTAS"
        />
      </main>
      <Footer />
    </>
  );
}
