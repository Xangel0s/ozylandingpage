import {
  ShieldAlert,
  Server,
  CheckCircle,
  FolderSync,
  Fingerprint,
  TrendingUp,
  FileCheck,
  Code2,
  CloudLightning,
} from "lucide-react";

export default function ServiceDetails() {
  return (
    <div className="space-y-32 py-16">
      {/* 1. SOPORTE TÉCNICO SECTION */}
      <section className="px-6 md:px-16" id="soporte">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <span className="font-mono text-xs text-success-neon uppercase tracking-widest block">
                Nivel 3 / Redundancia Activa
              </span>
              <h2 className="font-headline text-3xl md:text-4.5xl font-bold text-white tracking-tight">
                Segmentación de Soporte Técnico
              </h2>
            </div>
            <div className="font-mono text-xs text-success-neon/40 select-none">
              {"// PROTOCOL_04 // SUPPORT_TIERS"}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* grandes empresas */}
            <div className="group bg-surface border border-border-subtle p-8 space-y-6 hover:border-success-neon/30 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-success-neon transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <Server className="text-success-neon w-9 h-9" />
              <h3 className="font-headline text-xl md:text-2xl font-bold text-white">
                Grandes Empresas
              </h3>
              <p className="text-terminal-gray text-sm md:text-base leading-relaxed">
                Soporte dedicado Tier 3 con ingenieros asignados 24/7. Gestión de data centers, auditorías de seguridad avanzada y optimización de infraestructura global.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3 font-mono text-xs text-white">
                  <CheckCircle className="text-success-neon w-4 h-4" /> SLA de 15 Minutos Garantizado
                </li>
                <li className="flex items-center gap-3 font-mono text-xs text-white">
                  <CheckCircle className="text-success-neon w-4 h-4" /> Plan de Mitigación de Desastres
                </li>
              </ul>
            </div>

            {/* pymes */}
            <div className="group bg-surface border border-border-subtle p-8 space-y-6 hover:border-success-neon/30 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-success-neon transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <TrendingUp className="text-success-neon w-9 h-9" />
              <h3 className="font-headline text-xl md:text-2xl font-bold text-white">
                PyMEs
              </h3>
              <p className="text-terminal-gray text-sm md:text-base leading-relaxed">
                Soporte ágil para hardware y software. Mantenimiento preventivo, asistencia remota en tiempo real y despliegue rápido de estaciones de trabajo optimizadas.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3 font-mono text-xs text-white">
                  <CheckCircle className="text-success-neon w-4 h-4" /> Soporte Multi-Plataforma
                </li>
                <li className="flex items-center gap-3 font-mono text-xs text-white">
                  <CheckCircle className="text-success-neon w-4 h-4" /> Gestión de Licencias e IT
                </li>
              </ul>
            </div>

            {/* soluciones integrales */}
            <div className="group bg-surface border border-border-subtle p-8 space-y-6 hover:border-success-neon/30 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-success-neon transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <ShieldAlert className="text-success-neon w-9 h-9" />
              <h3 className="font-headline text-xl md:text-2xl font-bold text-white">
                Soluciones Integrales
              </h3>
              <p className="text-terminal-gray text-sm md:text-base leading-relaxed">
                Cobertura full-stack desde el hardware base hasta la capa de aplicación. Outsourcing tecnológico completo para externalizar tu departamento de TI con seguridad.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3 font-mono text-xs text-white">
                  <CheckCircle className="text-success-neon w-4 h-4" /> Auditoría DevOps 360 Grados
                </li>
                <li className="flex items-center gap-3 font-mono text-xs text-white">
                  <CheckCircle className="text-success-neon w-4 h-4" /> Infraestructura como Código (IaC)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AGENTES IA & MONITOREO AUTÓNOMO SECTION */}
      <section className="px-6 md:px-16" id="agentes">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <span className="font-mono text-xs text-success-neon uppercase tracking-widest block">
                Inteligencia de Contexto / Agentes
              </span>
              <h2 className="font-headline text-3xl md:text-4.5xl font-bold text-white tracking-tight">
                Binarios Especializados y Resolución en Tiempo Real
              </h2>
              <p className="text-terminal-gray text-base md:text-lg leading-relaxed">
                El monitoreo estándar es reactivo. Los agentes autónomos de OzyBase actúan de manera proactiva e inteligente, previniendo incidentes críticos antes de que afecten tus operaciones.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 shrink-0 w-8 h-8 rounded border border-success-neon/30 flex items-center justify-center">
                    <Fingerprint className="w-4 h-4 text-success-neon" />
                  </div>
                  <div>
                    <h4 className="font-headline text-lg font-bold text-white mb-1">
                      Persistencia de Estado Encriptada
                    </h4>
                    <p className="text-terminal-gray text-sm md:text-base">
                      Toda la memoria de contexto y transacciones se resguarda en enclaves encriptados por hardware para máxima integridad técnica.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="mt-1 shrink-0 w-8 h-8 rounded border border-success-neon/30 flex items-center justify-center">
                    <FolderSync className="w-4 h-4 text-success-neon" />
                  </div>
                  <div>
                    <h4 className="font-headline text-lg font-bold text-white mb-1">
                      Cadenas de Lógica de Auto-Sanación
                    </h4>
                    <p className="text-terminal-gray text-sm md:text-base">
                      Protocolos internos inteligentes que aplican hot patches y rollbacks autónomos sin tiempo de inactividad operativo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative block */}
            <div className="lg:col-span-5 relative aspect-square bg-[#141414] rounded-xl border border-border-subtle overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 matrix-grid opacity-15"></div>
              <div className="z-10 text-center p-8">
                <div className="text-[72px] font-extrabold text-success-neon opacity-20 leading-none mb-4 font-mono select-none">
                  99.999%
                </div>
                <h4 className="font-headline text-xl font-bold text-white mb-2">
                  Confiabilidad Extrema
                </h4>
                <p className="text-terminal-gray text-sm max-w-xs mx-auto">
                  Nuestra red de agentes de IA es redundante: si un nodo es atacado o cae, el clúster se redistribuye autónomamente en 12ms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIGITALIZACIÓN DE PROCESOS */}
      <section className="px-6 md:px-16" id="digitalizacion">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs text-success-neon uppercase tracking-widest block">
              Migración de Sistemas Legacy
            </span>
            <h2 className="font-headline text-3xl md:text-4.5xl font-bold text-white tracking-tight">
              Digitalización de Procesos: Adiós al Excel Manual
            </h2>
            <p className="text-terminal-gray text-base md:text-lg">
              Transformamos hojas de cálculo obsoletas y manuales propensos a errores en aplicaciones e infraestructura en la nube con precisión matemática.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Analysis */}
            <div className="bg-[#141414] p-8 border border-border-subtle relative group rounded-lg hover:border-success-neon/30 transition-colors">
              <div className="w-12 h-12 bg-success-neon/5 border border-success-neon/20 rounded flex items-center justify-center mb-8">
                <FileCheck className="w-5 h-5 text-success-neon" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider font-mono">
                1. Análisis
              </h3>
              <p className="text-terminal-gray text-sm md:text-base">
                Mapeamos tu lógica de negocios fragmentada para estructurar esquemas de bases de datos relacionales robustas y seguras.
              </p>
            </div>

            {/* Development */}
            <div className="bg-[#141414] p-8 border border-border-subtle relative group rounded-lg hover:border-success-neon/30 transition-colors">
              <div className="w-12 h-12 bg-success-neon/5 border border-success-neon/20 rounded flex items-center justify-center mb-8">
                <Code2 className="w-5 h-5 text-success-neon" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider font-mono">
                2. Desarrollo
              </h3>
              <p className="text-terminal-gray text-sm md:text-base">
                Codificamos tus fórmulas y procesos manuales en servicios web optimizados en lenguajes modernos de alta velocidad (Go/Rust/Python).
              </p>
            </div>

            {/* Deployment */}
            <div className="bg-[#141414] p-8 border border-border-subtle relative group rounded-lg hover:border-success-neon/30 transition-colors">
              <div className="w-12 h-12 bg-success-neon/5 border border-success-neon/20 rounded flex items-center justify-center mb-8">
                <CloudLightning className="w-5 h-5 text-success-neon" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider font-mono">
                3. Despliegue
              </h3>
              <p className="text-terminal-gray text-sm md:text-base">
                Publicamos en entornos cloud automatizados con dashboards de control intuitivos en tiempo real y eliminamos el error operativo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
