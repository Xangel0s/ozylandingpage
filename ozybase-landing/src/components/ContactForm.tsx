"use client";

import { useState, useEffect } from "react";
import { Zap, ShieldCheck, CreditCard, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    telefono: "",
    servicio: "Soporte Técnico",
    mensaje: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const servicioParam = params.get("servicio");
      const modeloParam = params.get("modelo");

      if (servicioParam) {
        const serviceMap: { [key: string]: string } = {
          "soporte": "Soporte Técnico",
          "agentes": "Agentes IA",
          "digitalizacion": "Digitalización de Procesos",
          "diagnostico": "Plataforma de Diagnósticos",
          "ventas": "Consulta de Ventas",
        };
        const mappedValue = serviceMap[servicioParam.toLowerCase()];
        if (mappedValue) {
          setFormData((prev) => ({ ...prev, servicio: mappedValue }));
        }
      } else if (modeloParam) {
        const modeloMap: { [key: string]: string } = {
          "autogestionado": "Agentes IA",
          "soporte": "Soporte Técnico",
        };
        const mappedValue = modeloMap[modeloParam.toLowerCase()];
        if (mappedValue) {
          setFormData((prev) => ({ ...prev, servicio: mappedValue }));
        }
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section className="relative py-16 md:py-24 bg-black overflow-hidden border-t border-border-subtle grow flex items-center" id="contacto">
      {/* Background Video */}
      <video
        src="/Videos/Codes.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-12 pointer-events-none mix-blend-luminosity grayscale"
      />

      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="terminal-grid absolute inset-0"></div>
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-success-neon/5 blur-[130px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 px-6 md:px-16 max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Info Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-success-neon rounded-full animate-pulse"></span>
              <span className="font-mono text-xs text-success-neon uppercase tracking-widest">
                Protocol: Direct Channel
              </span>
            </div>

            <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Obtén un precio <span className="text-success-neon">personalizado</span>
            </h2>

            <p className="text-terminal-gray text-base md:text-lg max-w-xl font-sans">
              Impulsa tu infraestructura hacia el siguiente nivel. Habla con nuestros ingenieros especializados en sistemas de alta disponibilidad y automatización avanzada.
            </p>

            <div className="space-y-4">
              <div className="p-6 bg-surface border border-border-subtle hover:border-success-neon/20 transition-colors rounded">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-success-neon/10 text-success-neon rounded">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm text-white font-bold mb-1 uppercase tracking-wider">
                      SLA de Respuesta Inmediata
                    </h3>
                    <p className="text-terminal-gray text-xs md:text-sm">
                      Garantizamos atención prioritaria en menos de 15 minutos para consultas técnicas y de infraestructura.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-surface border border-border-subtle hover:border-success-neon/20 transition-colors rounded">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-success-neon/10 text-success-neon rounded">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm text-white font-bold mb-1 uppercase tracking-wider">
                      Seguridad y Enclave
                    </h3>
                    <p className="text-terminal-gray text-xs md:text-sm">
                      Toda tu información está protegida bajo estándares de encriptación de datos de grado militar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-surface border border-border-subtle hover:border-success-neon/20 transition-colors rounded">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-success-neon/10 text-success-neon rounded">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm text-white font-bold mb-1 uppercase tracking-wider">
                      Precios Transparentes
                    </h3>
                    <p className="text-terminal-gray text-xs md:text-sm">
                      Presupuestos claros y ajustados al volumen real de tu operación, sin costos sorpresa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="w-full lg:w-1/2 relative min-h-[600px] flex items-stretch">
            <div className="w-full bg-[#141414] border border-border-subtle p-8 md:p-12 relative overflow-hidden rounded-xl flex flex-col justify-between">
              
              {/* Highlight Accent Top Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-success-neon"></div>

              {status === "success" ? (
                /* Success Message State */
                <div className="grow flex flex-col items-center justify-center text-center p-6 space-y-6">
                  <div className="w-20 h-20 bg-success-neon/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-12 h-12 text-success-neon" />
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-white uppercase tracking-tight">
                    Solicitud Recibida
                  </h3>
                  <p className="text-terminal-gray text-sm md:text-base max-w-sm">
                    Gracias por ponerte en contacto. Un ingeniero de OzyBase analizará tus requerimientos y te responderá en menos de 15 minutos.
                  </p>
                  <button
                    onClick={() => {
                      setFormData({
                        nombre: "",
                        email: "",
                        empresa: "",
                        telefono: "",
                        servicio: "Soporte Técnico",
                        mensaje: "",
                      });
                      setStatus("idle");
                    }}
                    className="border border-border-subtle px-6 py-3 font-mono text-xs text-white hover:text-success-neon hover:border-success-neon transition-all"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                /* Form State */
                <form onSubmit={handleSubmit} className="space-y-6 grow">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-terminal-gray uppercase">
                        Nombre Completo <span className="text-success-neon">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="John Doe"
                        className="bg-black border border-border-subtle text-white p-4 font-sans text-sm focus:outline-none focus:border-success-neon transition-colors placeholder:text-terminal-gray/25 rounded"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-terminal-gray uppercase">
                        Email Corporativo <span className="text-success-neon">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="bg-black border border-border-subtle text-white p-4 font-sans text-sm focus:outline-none focus:border-success-neon transition-colors placeholder:text-terminal-gray/25 rounded"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-terminal-gray uppercase">
                        Empresa <span className="text-success-neon">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        placeholder="TechCorp S.A."
                        className="bg-black border border-border-subtle text-white p-4 font-sans text-sm focus:outline-none focus:border-success-neon transition-colors placeholder:text-terminal-gray/25 rounded"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-xs text-terminal-gray uppercase">
                        Teléfono (Opcional)
                      </label>
                      <input
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="+34 600 000 000"
                        className="bg-black border border-border-subtle text-white p-4 font-sans text-sm focus:outline-none focus:border-success-neon transition-colors placeholder:text-terminal-gray/25 rounded"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs text-terminal-gray uppercase">
                      Servicio de Interés
                    </label>
                    <select
                      value={formData.servicio}
                      onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                      className="bg-black border border-border-subtle text-white p-4 font-sans text-sm focus:outline-none focus:border-success-neon transition-colors rounded cursor-pointer"
                    >
                      <option>Soporte Técnico</option>
                      <option>Agentes IA</option>
                      <option>Digitalización de Procesos</option>
                      <option>Plataforma de Diagnósticos</option>
                      <option>Consulta de Ventas</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs text-terminal-gray uppercase">
                      Mensaje (Opcional)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="¿Cómo podemos optimizar tu infraestructura?"
                      className="bg-black border border-border-subtle text-white p-4 font-sans text-sm focus:outline-none focus:border-success-neon transition-colors placeholder:text-terminal-gray/25 resize-none rounded"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full border border-success-neon bg-success-neon text-black py-4 font-mono text-sm font-extrabold uppercase tracking-widest hover:bg-transparent hover:text-success-neon active:scale-[0.98] transition-all flex items-center justify-center gap-2 rounded disabled:opacity-75 disabled:pointer-events-none"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4.5 h-4.5 animate-spin" />
                          <span>Procesando...</span>
                        </>
                      ) : (
                        <>
                          <span>Enviar Solicitud</span>
                          <ArrowRight className="w-4.5 h-4.5" />
                        </>
                      )}
                    </button>
                    <p className="mt-4 text-center text-success-neon/60 font-mono text-[10px] italic">
                      Tiempo estimado de respuesta técnica: &lt; 15 min.
                    </p>
                  </div>
                </form>
              )}

              {/* Decorative System Footer */}
              <div className="mt-12 pt-6 border-t border-border-subtle/30 flex justify-between items-end">
                <div className="font-mono text-[9px] text-terminal-gray/30 leading-normal uppercase">
                  REF: OZY_SALES_PRTCL_441
                  <br />
                  STATUS: SECURE_UPTIME
                </div>
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-success-neon/15"></div>
                  <div className="w-1 h-5 bg-success-neon/35"></div>
                  <div className="w-1 h-2 bg-success-neon/10"></div>
                  <div className="w-1 h-4 bg-success-neon"></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
