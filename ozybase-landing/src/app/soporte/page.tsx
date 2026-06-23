import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Server, TrendingUp, ShieldAlert, ArrowRight, Bolt, BookOpen, Shield, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Soporte Técnico Profesional 24/7 | OzyBase",
  description: "Protegemos tu infraestructura crítica con ingenieros de Nivel 3. Garantizamos alta disponibilidad y resolución rápida de incidencias con SLAs dedicados.",
  alternates: {
    canonical: "https://ozybase.com/soporte",
  },
};

export default function Soporte() {
  return (
    <>
      <Navbar />
      <main className="grow bg-black">
        {/* Support Hero Section */}
        <header className="relative min-h-[75vh] flex items-center overflow-hidden border-b border-border-subtle">
          <div className="absolute inset-0 z-0 opacity-20 matrix-grid"></div>
          
          {/* Background Video */}
          <video
            src="/Videos/soporte.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-12 pointer-events-none mix-blend-luminosity grayscale"
          />
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-success-neon/5 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

          <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16 w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-border-subtle text-success-neon font-mono text-xs rounded-full reveal-left">
                <span className="w-2 h-2 rounded-full bg-success-neon animate-pulse"></span>
                SOPORTE 24/7
              </div>
              <h1 className="font-headline text-4xl md:text-6.5xl font-extrabold text-white leading-tight reveal-left">
                Soporte Técnico <span className="text-success-neon">Profesional</span>
              </h1>
              <p className="text-terminal-gray text-base md:text-lg leading-relaxed font-sans reveal-right">
                Infraestructura crítica protegida por ingenieros de Nivel 3. Garantizamos alta disponibilidad y resolución de incidencias en tiempos récord mediante protocolos de redundancia activa.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/contacto"
                  className="px-8 py-4 border border-success-neon bg-success-neon text-black font-mono text-sm font-bold rounded-none hover:bg-transparent hover:text-success-neon transition-all flex items-center gap-2"
                >
                  Iniciar Consulta
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="bg-[#141414] border border-border-subtle p-6 space-y-4 rounded-lg">
                <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                  <span className="font-mono text-xs text-white uppercase tracking-widest">Network_Status</span>
                  <span className="text-success-neon font-mono text-xs font-bold">ALL_SYSTEMS_GO</span>
                </div>
                <div className="space-y-2.5 font-mono text-xs text-terminal-gray">
                  <p className="flex justify-between"><span>Latency:</span> <span className="text-white">12ms</span></p>
                  <p className="flex justify-between"><span>Uptime:</span> <span className="text-white">99.9999%</span></p>
                  <p className="flex justify-between"><span>Active Nodes:</span> <span className="text-white">1,402</span></p>
                  <p className="flex justify-between"><span>Queue Depth:</span> <span className="text-white">0</span></p>
                </div>
                <div className="h-[2px] w-full bg-border-subtle relative overflow-hidden">
                  <div className="absolute inset-0 bg-success-neon w-1/3 animate-[slide_2s_infinite_linear]"></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Services Section */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl md:text-4.5xl font-bold text-white tracking-tight reveal-left">Segmentación de Servicios</h2>
                <p className="text-terminal-gray text-base md:text-lg max-w-xl reveal-right">
                  Arquitectura de soporte diseñada para escalar según la complejidad de su despliegue tecnológico.
                </p>
              </div>
              <div className="font-mono text-xs text-success-neon/40 select-none">
                {"// PROTOCOL_04 // SUPPORT_TIERS"}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* grandes empresas */}
              <div className="group bg-[#141414] border border-border-subtle p-8 space-y-6 hover:border-success-neon/30 transition-all relative overflow-hidden reveal-left">
                <div className="absolute top-0 left-0 w-full h-1 bg-success-neon transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <Server className="text-success-neon w-9 h-9" />
                <h3 className="font-headline text-xl md:text-2xl font-bold text-white">
                  Grandes Empresas
                </h3>
                <p className="text-terminal-gray text-sm md:text-base leading-relaxed">
                  Soporte dedicado Tier 3 con ingenieros asignados 24/7. Gestión de data centers, auditorías de seguridad y optimización de infraestructura global.
                </p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-center gap-3 font-mono text-xs text-white">
                    <CheckCircle className="text-success-neon w-4 h-4" /> SLA de 15 minutos
                  </li>
                  <li className="flex items-center gap-3 font-mono text-xs text-white">
                    <CheckCircle className="text-success-neon w-4 h-4" /> Gestión de Desastres
                  </li>
                </ul>
              </div>

              {/* pymes */}
              <div className="group bg-[#141414] border border-border-subtle p-8 space-y-6 hover:border-success-neon/30 transition-all relative overflow-hidden scroll-reveal">
                <div className="absolute top-0 left-0 w-full h-1 bg-success-neon transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <TrendingUp className="text-success-neon w-9 h-9" />
                <h3 className="font-headline text-xl md:text-2xl font-bold text-white">
                  PyMEs
                </h3>
                <p className="text-terminal-gray text-sm md:text-base leading-relaxed">
                  Soporte ágil para hardware y software. Mantenimiento preventivo, soporte remoto instantáneo y despliegue de estaciones de trabajo optimizadas.
                </p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-center gap-3 font-mono text-xs text-white">
                    <CheckCircle className="text-success-neon w-4 h-4" /> Soporte Multi-Plataforma
                  </li>
                  <li className="flex items-center gap-3 font-mono text-xs text-white">
                    <CheckCircle className="text-success-neon w-4 h-4" /> Gestión de Licenciamiento
                  </li>
                </ul>
              </div>

              {/* soluciones integrales */}
              <div className="group bg-[#141414] border border-border-subtle p-8 space-y-6 hover:border-success-neon/30 transition-all relative overflow-hidden reveal-right">
                <div className="absolute top-0 left-0 w-full h-1 bg-success-neon transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <ShieldAlert className="text-success-neon w-9 h-9" />
                <h3 className="font-headline text-xl md:text-2xl font-bold text-white">
                  Soluciones Integrales
                </h3>
                <p className="text-terminal-gray text-sm md:text-base leading-relaxed">
                  Cobertura full-stack desde el hardware base hasta la capa de aplicación. Outsourcing tecnológico completo para externalizar su departamento IT.
                </p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-center gap-3 font-mono text-xs text-white">
                    <CheckCircle className="text-success-neon w-4 h-4" /> Auditoría DevOps 360
                  </li>
                  <li className="flex items-center gap-3 font-mono text-xs text-white">
                    <CheckCircle className="text-success-neon w-4 h-4" /> Infraestructura como Código
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <div className="bg-[#141414] py-12 border-y border-border-subtle">
          <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-headline text-3xl md:text-5xl font-extrabold text-success-neon">500+</p>
              <p className="font-mono text-xs text-terminal-gray uppercase tracking-wider mt-2">Nodos Activos</p>
            </div>
            <div>
              <p className="font-headline text-3xl md:text-5xl font-extrabold text-success-neon">15m</p>
              <p className="font-mono text-xs text-terminal-gray uppercase tracking-wider mt-2">SLA Respuesta</p>
            </div>
            <div>
              <p className="font-headline text-3xl md:text-5xl font-extrabold text-success-neon">99.9%</p>
              <p className="font-mono text-xs text-terminal-gray uppercase tracking-wider mt-2">Uptime Garantizado</p>
            </div>
            <div>
              <p className="font-headline text-3xl md:text-5xl font-extrabold text-success-neon">24/7</p>
              <p className="font-mono text-xs text-terminal-gray uppercase tracking-wider mt-2">Monitoreo Global</p>
            </div>
          </div>
        </div>

        {/* Security & Commitment Section */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-16">
            <div className="mb-16">
              <h2 className="font-headline text-3xl md:text-4.5xl font-bold text-white tracking-tight mb-4 reveal-left">
                Compromiso de Confianza y Seguridad
              </h2>
              <div className="h-1 w-24 bg-success-neon"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Block 1: Gestión de Incidencias */}
              <div className="group bg-[#141414] border border-border-subtle p-8 space-y-6 hover:border-success-neon/30 transition-all relative overflow-hidden reveal-left">
                <div className="absolute top-0 left-0 w-full h-1 bg-success-neon transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <Bolt className="text-success-neon w-9 h-9" />
                <h3 className="font-headline text-lg md:text-xl font-bold text-white">Gestión de Incidencias</h3>
                <p className="text-terminal-gray text-sm leading-relaxed">
                  Protocolos de respuesta rápida y resolución proactiva. Minimizamos el impacto operativo mediante monitoreo constante y escalado inmediato a ingenieros Nivel 3.
                </p>
              </div>
              {/* Block 2: Transparencia Total */}
              <div className="group bg-[#141414] border border-border-subtle p-8 space-y-6 hover:border-success-neon/30 transition-all relative overflow-hidden scroll-reveal">
                <div className="absolute top-0 left-0 w-full h-1 bg-success-neon transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <BookOpen className="text-success-neon w-9 h-9" />
                <h3 className="font-headline text-lg md:text-xl font-bold text-white">Transparencia Total</h3>
                <p className="text-terminal-gray text-sm leading-relaxed">
                  Precios Transparentes sin costos ocultos. Ofrecemos presupuestos claros y predecibles para que su departamento IT mantenga el control financiero absoluto.
                </p>
              </div>
              {/* Block 3: Normas de Seguridad */}
              <div className="group bg-[#141414] border border-border-subtle p-8 space-y-6 hover:border-success-neon/30 transition-all relative overflow-hidden reveal-right">
                <div className="absolute top-0 left-0 w-full h-1 bg-success-neon transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <Shield className="text-success-neon w-9 h-9" />
                <h3 className="font-headline text-lg md:text-xl font-bold text-white">Normas de Seguridad</h3>
                <p className="text-terminal-gray text-sm leading-relaxed">
                  Cumplimiento estricto de estándares internacionales y protocolos de protección de datos. Su infraestructura está blindada bajo normativas de seguridad global.
                </p>
              </div>
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
