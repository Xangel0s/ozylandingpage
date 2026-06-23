"use client";

import { useState } from "react";
import { Calculator, FileText, CheckCircle2, ShieldCheck, Mail, Phone, Building } from "lucide-react";

export default function ProposalCalculator() {
  const [supportType, setSupportType] = useState<"fisico" | "sistemas" | "hibrido">("sistemas");
  const [infraSize, setInfraSize] = useState<number>(5); // number of PCs/servers
  const [sla, setSla] = useState<"estandar" | "avanzado" | "critico">("avanzado");

  // Calculate pricing in Peruvian Soles (S/.)
  const calculatePrice = () => {
    let basePrice = 0;
    if (supportType === "fisico") basePrice = 450;
    else if (supportType === "sistemas") basePrice = 650;
    else basePrice = 950; // Híbrido

    let sizeMultiplier = 1;
    if (infraSize > 25) sizeMultiplier = 2.5;
    else if (infraSize > 10) sizeMultiplier = 1.8;
    else if (infraSize > 5) sizeMultiplier = 1.3;

    let slaMultiplier = 1;
    if (sla === "avanzado") slaMultiplier = 1.4;
    if (sla === "critico") slaMultiplier = 2.2;

    return Math.round(basePrice * sizeMultiplier * slaMultiplier);
  };

  const currentPrice = calculatePrice();

  const handlePrint = () => {
    // Generate a beautiful print view
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const htmlContent = `
      <html>
        <head>
          <title>Propuesta de Soporte Técnico - OzyBase</title>
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #111; padding: 40px; line-height: 1.6; }
            .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #D2F20B; padding-bottom: 20px; margin-bottom: 30px; }
            .logo { font-size: 24px; font-weight: bold; color: #000; letter-spacing: 1px; }
            .logo span { color: #8cb807; }
            .doc-info { text-align: right; font-size: 12px; color: #555; }
            h1 { font-size: 20px; text-transform: uppercase; margin-bottom: 10px; color: #000; }
            .section { margin-bottom: 25px; }
            .section-title { font-size: 14px; font-weight: bold; text-transform: uppercase; background: #f4f4f4; padding: 6px 12px; margin-bottom: 15px; border-left: 3px solid #D2F20B; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            th, td { padding: 12px; border-bottom: 1px solid #ddd; text-align: left; font-size: 13px; }
            th { background: #f9f9f9; font-weight: bold; }
            .price-box { background: #fcfdfe; border: 1px solid #ddd; padding: 20px; text-align: right; border-radius: 6px; margin-top: 30px; }
            .price-box .val { font-size: 28px; font-weight: bold; color: #000; }
            .footer { margin-top: 50px; font-size: 10px; color: #777; text-align: center; border-top: 1px solid #eee; padding-top: 20px; }
            @media print {
              body { padding: 0; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">Ozy<span>Base</span></div>
            <div class="doc-info">
              <div>PROPUESTA COMERCIAL DE SOPORTE</div>
              <div>ID: PROP-${Date.now().toString().slice(-6)}</div>
              <div>Fecha: ${new Date().toLocaleDateString("es-PE")}</div>
            </div>
          </div>

          <div class="section">
            <h1>Propuesta Técnica y Económica</h1>
            <p>Preparado especialmente para evaluar el soporte de infraestructura, sedes y sistemas de su organización.</p>
          </div>

          <div class="section">
            <div class="section-title">Alcance del Servicio Seleccionado</div>
            <table>
              <thead>
                <tr>
                  <th>Concepto</th>
                  <th>Configuración Asignada</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tipo de Soporte</td>
                  <td>${
                    supportType === "fisico"
                      ? "Soporte Físico & Redes (Oficinas/Sede)"
                      : supportType === "sistemas"
                      ? "Soporte de Sistemas & Cloud (Servidores)"
                      : "Soporte Híbrido Completo (Sedes y Nube)"
                  }</td>
                </tr>
                <tr>
                  <td>Tamaño de Infraestructura</td>
                  <td>${infraSize} Dispositivos / Servidores</td>
                </tr>
                <tr>
                  <td>Acuerdo de Nivel de Servicio (SLA)</td>
                  <td>${
                    sla === "estandar"
                      ? "Estándar (Siguiente día hábil)"
                      : sla === "avanzado"
                      ? "Avanzado (Respuesta < 2 horas)"
                      : "Crítico Enterprise (Respuesta < 15 minutos, 24/7)"
                  }</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="section">
            <div class="section-title">Servicios Generales Incluidos</div>
            <ul>
              <li>Mantenimiento proactivo de hardware y software según tipo de soporte.</li>
              <li>Monitoreo y respuesta de incidentes con escala inmediata a ingenieros Nivel 3.</li>
              <li>Gestión y asesoramiento en seguridad de red y backups automatizados.</li>
            </ul>
          </div>

          <div class="price-box">
            <div>Monto Mensual Estimado:</div>
            <div class="val">S/. ${currentPrice.toLocaleString("es-PE")} + IGV</div>
            <div style="font-size: 11px; color: #555; margin-top: 5px;">Sujeto a facturación periódica mensual y firma de contrato.</div>
          </div>

          <div class="footer">
            <p>OzyBase S.A.C. | Soporte de Alta Disponibilidad | https://ozybase.com</p>
          </div>

          <script>
            window.onload = function() {
              window.print();
            };
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <section className="py-24 bg-black border-t border-border-subtle" id="cotizador">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="text-center mb-16 space-y-4">
          <span className="font-mono text-xs text-success-neon uppercase tracking-widest block">
            Planificador e Inversión
          </span>
          <h2 className="font-headline text-3xl md:text-4.5xl font-bold text-white tracking-tight">
            Soporte Técnico para tu Sede o Sistemas
          </h2>
          <p className="text-terminal-gray text-base md:text-lg max-w-2xl mx-auto">
            Configura y calcula en tiempo real una estimación económica formalizada en Soles para tus sedes físicas o nubes de servidores.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Configurator Form */}
          <div className="lg:col-span-7 bg-[#141414] border border-border-subtle p-8 rounded-xl space-y-8">
            {/* Step 1: Support Type */}
            <div className="space-y-4">
              <label className="font-mono text-xs text-terminal-gray uppercase block">
                1. Tipo de Soporte Técnico
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => setSupportType("fisico")}
                  className={`p-4 border rounded-lg text-left font-sans text-xs transition-all ${
                    supportType === "fisico"
                      ? "border-success-neon bg-success-neon/5 text-white"
                      : "border-border-subtle bg-black text-terminal-gray hover:border-white/20"
                  }`}
                >
                  <span className="font-headline font-bold block text-sm text-white mb-1">Sede Física</span>
                  Infraestructura local, routers, PCs y cableado en oficinas.
                </button>
                <button
                  onClick={() => setSupportType("sistemas")}
                  className={`p-4 border rounded-lg text-left font-sans text-xs transition-all ${
                    supportType === "sistemas"
                      ? "border-success-neon bg-success-neon/5 text-white"
                      : "border-border-subtle bg-black text-terminal-gray hover:border-white/20"
                  }`}
                >
                  <span className="font-headline font-bold block text-sm text-white mb-1">Sistemas & Nube</span>
                  Servidores virtuales, base de datos y nubes (AWS/GCP).
                </button>
                <button
                  onClick={() => setSupportType("hibrido")}
                  className={`p-4 border rounded-lg text-left font-sans text-xs transition-all ${
                    supportType === "hibrido"
                      ? "border-success-neon bg-success-neon/5 text-white"
                      : "border-border-subtle bg-black text-terminal-gray hover:border-white/20"
                  }`}
                >
                  <span className="font-headline font-bold block text-sm text-white mb-1">Híbrido</span>
                  Ambas coberturas de manera integral en tu organización.
                </button>
              </div>
            </div>

            {/* Step 2: Infrastructure Size */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="font-mono text-xs text-terminal-gray uppercase">
                  2. Dispositivos o Servidores a Monitorear
                </label>
                <span className="font-mono text-xs text-success-neon font-bold">{infraSize} Equipos</span>
              </div>
              <input
                type="range"
                min={2}
                max={50}
                value={infraSize}
                onChange={(e) => setInfraSize(Number(e.target.value))}
                className="w-full h-1 bg-black rounded-lg appearance-none cursor-pointer accent-success-neon"
              />
              <div className="flex justify-between font-mono text-[9px] text-terminal-gray/60">
                <span>MÍN: 2 EQUIPOS</span>
                <span>MÁX: 50 EQUIPOS</span>
              </div>
            </div>

            {/* Step 3: SLA Accord */}
            <div className="space-y-4">
              <label className="font-mono text-xs text-terminal-gray uppercase block">
                3. Acuerdo de Nivel de Servicio (SLA)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => setSla("estandar")}
                  className={`p-4 border rounded-lg text-left font-sans text-xs transition-all ${
                    sla === "estandar"
                      ? "border-success-neon bg-success-neon/5 text-white"
                      : "border-border-subtle bg-black text-terminal-gray hover:border-white/20"
                  }`}
                >
                  <span className="font-headline font-bold block text-sm text-white mb-1">Estándar</span>
                  Siguiente día hábil. Email & Panel de Soporte.
                </button>
                <button
                  onClick={() => setSla("avanzado")}
                  className={`p-4 border rounded-lg text-left font-sans text-xs transition-all ${
                    sla === "avanzado"
                      ? "border-success-neon bg-success-neon/5 text-white"
                      : "border-border-subtle bg-black text-terminal-gray hover:border-white/20"
                  }`}
                >
                  <span className="font-headline font-bold block text-sm text-white mb-1">Avanzado</span>
                  Respuesta menor a 2 horas. Slack canal dedicado.
                </button>
                <button
                  onClick={() => setSla("critico")}
                  className={`p-4 border rounded-lg text-left font-sans text-xs transition-all ${
                    sla === "critico"
                      ? "border-success-neon bg-success-neon/5 text-white"
                      : "border-border-subtle bg-black text-terminal-gray hover:border-white/20"
                  }`}
                >
                  <span className="font-headline font-bold block text-sm text-white mb-1">Crítico L3</span>
                  Respuesta menor a 15 min. 24/7/365 multi-canal.
                </button>
              </div>
            </div>
          </div>

          {/* Proposal Summary Card */}
          <div className="lg:col-span-5 bg-[#141414] border border-border-subtle rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between h-full">
            {/* Card Top */}
            <div className="p-8 border-b border-border-subtle bg-black/40">
              <div className="font-headline text-lg font-bold text-white mb-1 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-success-neon" />
                Resumen de Cotización
              </div>
              <p className="text-terminal-gray font-mono text-[10px] uppercase">
                Ozybase Infrastructure Services
              </p>
            </div>

            {/* Card Content */}
            <div className="p-8 space-y-6 grow">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline font-mono text-xs">
                  <span className="text-terminal-gray">INVERSIÓN MENSUAL:</span>
                  <span className="text-white font-bold text-lg">
                    S/. {currentPrice.toLocaleString("es-PE")}
                  </span>
                </div>
                <div className="text-[10px] font-mono text-success-neon/60 italic text-right">
                  * Cotizado en Soles (Aprox. + IGV)
                </div>
              </div>

              <div className="border-t border-border-subtle/50 pt-6 space-y-4 font-mono text-xs text-white">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-success-neon shrink-0" />
                  <span>SLA garantizado de {sla === "estandar" ? "24h" : sla === "avanzado" ? "2h" : "15m"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-success-neon shrink-0" />
                  <span>Resolución directa por ingenieros L3</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-success-neon shrink-0" />
                  <span>
                    Cobertura {supportType === "fisico" ? "Sede Física" : supportType === "sistemas" ? "Servidores" : "Híbrida"}
                  </span>
                </div>
              </div>
            </div>

            {/* Card Action */}
            <div className="p-8 border-t border-border-subtle bg-black/40 space-y-4">
              <button
                onClick={handlePrint}
                className="w-full py-4 bg-success-neon text-black hover:bg-transparent hover:text-success-neon border border-success-neon font-mono text-xs font-bold rounded uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <FileText className="w-4 h-4" />
                Descargar Propuesta PDF
              </button>
              <a
                href={`/contacto?servicio=Soporte+Técnico&monto=S/.+${currentPrice}&tipo=${supportType}`}
                className="block text-center w-full py-4 border border-border-subtle text-white hover:border-success-neon hover:text-success-neon font-mono text-xs font-bold rounded uppercase transition-all"
              >
                Solicitar Viabilidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
