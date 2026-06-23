import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { BarChart, Server, Layers, Play, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Digitalización de Procesos y Migración de Excel | OzyBase",
  description: "Transformamos tus hojas de cálculo manuales de Excel en arquitecturas web rápidas, seguras y de precisión matemática absoluta en la nube.",
  alternates: {
    canonical: "https://ozybase.com/digitalizacion",
  },
};

export default function Digitalizacion() {
  return (
    <>
      <Navbar />
      <main className="grow bg-black">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center pt-20 pb-32 overflow-hidden px-6 md:px-16">
          <div className="absolute inset-0 z-0 opacity-20 grid-background"></div>
          
          {/* Background Video */}
          <video
            src="/Videos/Reuniondashboard.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-12 pointer-events-none mix-blend-luminosity grayscale"
          />
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-success-neon/5 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

          <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block px-3 py-1 bg-success-neon/10 border border-success-neon/20 rounded reveal-left">
                <span className="font-mono text-xs text-success-neon uppercase tracking-widest">
                  Migración de Datos v2.4
                </span>
              </div>
              <h1 className="font-headline text-4xl md:text-6.5xl font-extrabold text-white leading-tight reveal-left">
                Digitalización de Procesos: <span className="text-success-neon">Adiós al Excel Manual</span>
              </h1>
              <p className="text-terminal-gray text-base md:text-lg leading-relaxed font-sans reveal-right">
                Transformamos formatos manuales y hojas de cálculo en arquitecturas de programación modernas. Eliminamos el error humano mediante la automatización integral de tus flujos de trabajo heredados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/contacto"
                  className="px-8 py-4 border border-success-neon bg-success-neon text-black font-mono text-sm font-bold rounded hover:bg-transparent hover:text-success-neon active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  Comenzar Migración
                  <Play className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-6 relative h-[350px] lg:h-[450px] w-full">
              <div className="w-full h-full rounded-xl border border-border-subtle bg-[#141414] overflow-hidden relative group">
                <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-luminosity filter grayscale" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida/AP1WRLuFBhkKlSibpIlfI2b1Jdkiriyc-CQIPsY4Lk3iPHVM80-QZkFKDBDbzGgIaT2UpNaiK6djdYFbPeS7KYY7ojdaExHOqYLJhRh3uUwbS-pWu0Z9NgHAfYHG4A3K_LgEKfmBsDoG_JRJGivgfymIGiwdqOcdLMzfo6xLRMdI3rzqfYg-Ua9Q4OWoCwedT5lwTJkVN0_kO3rZ-bvfvdsj29QKrEp05j3cEuzc3D4IdFR9F8OXvNUSRE_Tv9s')" }}></div>
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
                {/* Overlay UI elements */}
                <div className="absolute top-4 left-4 bg-black/85 backdrop-blur p-4 border border-border-subtle rounded-lg max-w-[220px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-success-neon animate-pulse"></span>
                    <span className="font-mono text-[10px] text-success-neon font-bold">DATA_MIGRATION_ACTIVE</span>
                  </div>
                  <div className="h-1.5 w-full bg-border-subtle rounded-full mb-1 overflow-hidden">
                    <div className="h-full w-3/4 bg-success-neon"></div>
                  </div>
                  <p className="font-mono text-[9px] text-terminal-gray uppercase">Compiling legacy data...</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Bento Grid */}
        <section className="py-24 bg-[#0a0a0a] border-t border-border-subtle">
          <div className="max-w-[1280px] mx-auto px-6 md:px-16">
            <div className="text-center mb-16 space-y-4">
              <span className="font-mono text-xs text-success-neon uppercase tracking-widest block reveal-left">Metodología de Trabajo</span>
              <h2 className="font-headline text-3xl md:text-4.5xl font-bold text-white tracking-tight reveal-left">Arquitectura de Transformación</h2>
              <p className="text-terminal-gray text-base md:text-lg max-w-2xl mx-auto reveal-right">
                Nuestro proceso técnico garantiza una transición sin fricciones de celdas manuales y formularios a sistemas automatizados de alto rendimiento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Analysis */}
              <div className="bg-[#141414] p-8 border border-border-subtle relative group rounded-lg hover:border-success-neon/30 transition-all reveal-left">
                <div className="w-12 h-12 bg-success-neon/5 border border-success-neon/20 flex items-center justify-center mb-8 rounded">
                  <BarChart className="w-5 h-5 text-success-neon" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider font-mono">
                  1. Analysis
                </h3>
                <p className="text-terminal-gray text-sm md:text-base mb-6">
                  Auditoría profunda de la lógica de negocio fragmentada en Excel y formularios para identificar cuellos de botella y errores de fórmula.
                </p>
                <ul className="space-y-3 font-mono text-xs text-white">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success-neon" /> LOGIC MAPPING
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success-neon" /> DATA INTEGRITY CHECK
                  </li>
                </ul>
              </div>

              {/* Development */}
              <div className="bg-[#141414] p-8 border border-border-subtle relative group rounded-lg hover:border-success-neon/30 transition-all scroll-reveal">
                <div className="w-12 h-12 bg-success-neon/5 border border-success-neon/20 flex items-center justify-center mb-8 rounded">
                  <Server className="w-5 h-5 text-success-neon" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider font-mono">
                  2. Development
                </h3>
                <p className="text-terminal-gray text-sm md:text-base mb-6">
                  Codificación de la lógica manual en lenguajes modernos (Python/Go/TypeScript) para una ejecución veloz y segura.
                </p>
                <ul className="space-y-3 font-mono text-xs text-white">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success-neon" /> SCALABLE CODEBASE
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success-neon" /> API INTEGRATION
                  </li>
                </ul>
              </div>

              {/* Deployment */}
              <div className="bg-[#141414] p-8 border border-border-subtle relative group rounded-lg hover:border-success-neon/30 transition-all reveal-right">
                <div className="w-12 h-12 bg-success-neon/5 border border-success-neon/20 flex items-center justify-center mb-8 rounded">
                  <Layers className="w-5 h-5 text-success-neon" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider font-mono">
                  3. Deployment
                </h3>
                <p className="text-terminal-gray text-sm md:text-base mb-6">
                  Migración de datos históricos a infraestructura cloud optimizada y segura con interfaces web responsivas y dinámicas.
                </p>
                <ul className="space-y-3 font-mono text-xs text-white">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success-neon" /> ZERO MANUAL PROCESSES
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success-neon" /> REAL-TIME SYNC
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-black">
          <div className="max-w-[1280px] mx-auto border-y border-border-subtle py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-headline text-3xl md:text-5xl font-extrabold text-success-neon mb-2">98%</div>
              <div className="font-mono text-xs text-terminal-gray uppercase tracking-wider">Reducción de errores</div>
            </div>
            <div className="text-center">
              <div className="font-headline text-3xl md:text-5xl font-extrabold text-success-neon mb-2">15x</div>
              <div className="font-mono text-xs text-terminal-gray uppercase tracking-wider">Velocidad de proceso</div>
            </div>
            <div className="text-center">
              <div className="font-headline text-3xl md:text-5xl font-extrabold text-success-neon mb-2">100%</div>
              <div className="font-mono text-xs text-terminal-gray uppercase tracking-wider">Migración Garantizada</div>
            </div>
            <div className="text-center">
              <div className="font-headline text-3xl md:text-5xl font-extrabold text-success-neon mb-2">0%</div>
              <div className="font-mono text-xs text-terminal-gray uppercase tracking-wider">Intervención Manual</div>
            </div>
          </div>
        </section>

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
