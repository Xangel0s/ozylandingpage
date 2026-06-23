import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ChatSimulator from "@/components/ChatSimulator";
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

            <div className="w-full">
              <ChatSimulator />
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

         {/* Preformero de Soporte */}
         <section className="py-24 bg-black border-t border-border-subtle">
           <div className="max-w-[1280px] mx-auto px-6 md:px-16">
             <div className="text-center mb-16 space-y-4">
               <span className="font-mono text-xs text-success-neon uppercase tracking-widest block">
                 Cotización de Servicio
               </span>
               <h2 className="font-headline text-3xl md:text-4.5xl font-bold text-white tracking-tight">
                 Preformero de Propuesta Técnica
               </h2>
               <p className="text-terminal-gray text-base md:text-lg max-w-2xl mx-auto">
                 Estructura de costos y alcances formalizada para tu departamento de IT. Selecciona el acuerdo de nivel de servicio (SLA) requerido.
               </p>
             </div>

             {/* Proposal Sheet Layout */}
             <div className="bg-[#141414] border border-border-subtle rounded-xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
               {/* Proposal Header */}
               <div className="p-8 border-b border-border-subtle bg-black/40 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                 <div>
                   <div className="text-white font-headline text-xl font-bold">OZYBASE INFRASTRUCTURE SERVICES</div>
                   <div className="text-terminal-gray font-mono text-xs mt-1">Nº PROPUESTA: PROP-2026-SOP404</div>
                 </div>
                 <div className="text-right font-mono text-xs text-terminal-gray space-y-1">
                   <div>EMISIÓN: 2026-06-23</div>
                   <div>VALIDEZ: 30 DÍAS</div>
                   <div className="text-success-neon font-bold">SLA RESPUESTA GARANTIZADA</div>
                 </div>
               </div>

               {/* Proposal Table */}
               <div className="overflow-x-auto">
                 <table className="w-full text-left font-mono text-xs text-white border-collapse">
                   <thead>
                     <tr className="border-b border-border-subtle bg-[#1e1e1e] text-terminal-gray uppercase text-[10px] tracking-wider">
                       <th className="p-6">Especificación del Servicio</th>
                       <th className="p-6">Soporte Pymes</th>
                       <th className="p-6">Soporte Avanzado</th>
                       <th className="p-6 text-success-neon">Soporte Enterprise (L3)</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-border-subtle/50">
                     <tr>
                       <td className="p-6 font-bold text-white">Tiempo de Respuesta (SLA)</td>
                       <td className="p-6 text-terminal-gray">Siguiente día hábil</td>
                       <td className="p-6 text-terminal-gray">Menos de 2 horas</td>
                       <td className="p-6 text-success-neon font-bold">Menos de 15 minutos</td>
                     </tr>
                     <tr>
                       <td className="p-6 font-bold text-white">Canales de Comunicación</td>
                       <td className="p-6 text-terminal-gray">Email & Web Panel</td>
                       <td className="p-6 text-terminal-gray">Slack Dedicado & Email</td>
                       <td className="p-6 text-white">Slack, WhatsApp, Gmail, Teléfono Directo</td>
                     </tr>
                     <tr>
                       <td className="p-6 font-bold text-white">Ingenieros Asignados</td>
                       <td className="p-6 text-terminal-gray">Equipo general (L1/L2)</td>
                       <td className="p-6 text-terminal-gray">Pool asignado (L2)</td>
                       <td className="p-6 text-white">Ingeniero L3 Dedicado Asignado</td>
                     </tr>
                     <tr>
                       <td className="p-6 font-bold text-white">Monitoreo de Infraestructura</td>
                       <td className="p-6 text-terminal-gray">Reactivo (Reporte de cliente)</td>
                       <td className="p-6 text-terminal-gray">Proactivo básico (Logs)</td>
                       <td className="p-6 text-white">Diagnóstico Autónomo por IA 24/7</td>
                     </tr>
                     <tr>
                       <td className="p-6 font-bold text-white">Auditorías de Seguridad</td>
                       <td className="p-6 text-terminal-gray">No incluido</td>
                       <td className="p-6 text-terminal-gray">Mensual</td>
                       <td className="p-6 text-white">Continua en tiempo real</td>
                     </tr>
                     <tr className="bg-[#1e1e1e]/20">
                       <td className="p-6 font-bold text-white">Valor Estimado de Inversión</td>
                       <td className="p-6">
                         <span className="text-white font-bold text-sm">Desde $299</span>
                         <span className="text-terminal-gray text-[10px] block">/ mes</span>
                       </td>
                       <td className="p-6">
                         <span className="text-white font-bold text-sm">Desde $899</span>
                         <span className="text-terminal-gray text-[10px] block">/ mes</span>
                       </td>
                       <td className="p-6">
                         <span className="text-success-neon font-bold text-sm">Desde $1,899</span>
                         <span className="text-terminal-gray text-[10px] block">/ mes</span>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>

               {/* Proposal Actions */}
               <div className="p-8 border-t border-border-subtle bg-black/40 flex flex-col sm:flex-row justify-between items-center gap-6">
                 <div className="text-terminal-gray font-mono text-[10px] max-w-md leading-relaxed text-center sm:text-left">
                   NOTA: Todos los presupuestos son aproximados y ajustados según la cantidad de servidores activos y la complejidad del pipeline de DevOps.
                 </div>
                 <div className="flex gap-4 w-full sm:w-auto">
                   <a
                     href="/contacto?servicio=Soporte+Técnico"
                     className="w-full sm:w-auto px-8 py-4 border border-success-neon bg-success-neon text-black font-mono text-xs font-bold rounded hover:bg-transparent hover:text-success-neon text-center uppercase transition-all"
                   >
                     Obtener Propuesta en PDF
                   </a>
                 </div>
               </div>
             </div>
           </div>
         </section>

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
