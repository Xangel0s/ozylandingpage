"use client";

import { useState } from "react";
import { Calculator, FileText, CheckCircle2, Server } from "lucide-react";

export default function ProposalCalculator() {
  const [supportType, setSupportType] = useState<"fisico" | "sistemas" | "hibrido">("sistemas");
  const [infraSize, setInfraSize] = useState<number>(5); // number of PCs/servers
  const [numSedes, setNumSedes] = useState<number>(1); // number of physical office locations
  const [sla, setSla] = useState<"estandar" | "avanzado" | "critico">("avanzado");
  const [includeBackup, setIncludeBackup] = useState<boolean>(false);
  const [backupTBs, setBackupTBs] = useState<number>(1);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [deviceDetectedCount, setDeviceDetectedCount] = useState<number | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadError(null);
    setUploadedFileName(file.name);
    setDeviceDetectedCount(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        let count = 0;

        if (file.name.endsWith(".json")) {
          const parsed = JSON.parse(text);
          count = Array.isArray(parsed) ? parsed.length : Object.keys(parsed).length;
        } else if (file.name.endsWith(".csv")) {
          const lines = text.split("\n").map(l => l.trim()).filter(l => l.length > 0);
          if (lines.length > 0) {
            // Check if there is a header by verifying it's not a single data row
            count = lines.length > 1 ? lines.length - 1 : lines.length;
          }
        } else {
          throw new Error("Formato no soportado. Suba un archivo .csv o .json");
        }

        if (count > 0) {
          const clamped = Math.max(2, Math.min(100, count));
          setInfraSize(clamped);
          setDeviceDetectedCount(count);
        } else {
          throw new Error("No se detectaron dispositivos en el archivo.");
        }
      } catch (err: any) {
        setUploadError(err.message || "Error al procesar el archivo.");
        setUploadedFileName(null);
      }
    };
    reader.readAsText(file);
  };

  const handleSendWhatsApp = () => {
    const phone = "51905948996";
    const supportLabel = supportType === "fisico" 
      ? "Soporte Físico & Redes (Oficinas/Sede)" 
      : supportType === "sistemas" 
      ? "Soporte de Sistemas & Cloud (Servidores)" 
      : "Soporte Híbrido Completo (Sedes y Nube)";
    
    const slaLabel = sla === "estandar"
      ? "Estándar (< 15 min - Horario Laboral)"
      : sla === "avanzado"
      ? "Avanzado (< 15 min - Slack Dedicado)"
      : "Crítico L3 (< 15 min - Soporte 24/7/365)";
      
    const backupLabel = includeBackup ? `Sí, capacidad de ${backupTBs} TB` : "No incluido";
    const sedesLabel = (supportType === "fisico" || supportType === "hibrido") ? `${numSedes} Sedes` : "No aplica (100% Remoto)";
    const inventarioLabel = uploadedFileName ? `Sí, archivo de inventario: ${uploadedFileName} (${deviceDetectedCount || infraSize} equipos)` : "No cargado";

    const message = `Hola OzyBase, me gustaría solicitar una propuesta técnica y cotización formal de soporte para mi empresa. Aquí están los detalles de nuestra infraestructura:

*Detalles de Requerimiento:*
• *Tipo de Soporte:* ${supportLabel}
• *Sedes/Oficinas:* ${sedesLabel}
• *Equipos/Servidores:* ${infraSize} dispositivos
• *Nivel de Servicio (SLA):* ${slaLabel}
• *Backup Automatizado:* ${backupLabel}
• *Inventario Adjunto:* ${inventarioLabel}

Quedo a la espera de que un ejecutivo de ventas revise esta configuración para enviarme la propuesta técnica y económica formalizada.`;

    const encodedText = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encodedText}`;
    window.open(url, "_blank");
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const htmlContent = `
      <html>
        <head>
          <title>Requerimientos de Soporte Técnico - OzyBase</title>
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
            .price-box { background: #fafdf5; border: 1px solid #D2F20B; padding: 20px; text-align: center; border-radius: 6px; margin-top: 30px; }
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
            <h1>Resumen de Especificaciones Técnicas</h1>
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
                ${
                  supportType !== "sistemas"
                    ? `<tr>
                        <td>Sedes / Oficinas Físicas</td>
                        <td>${numSedes} Sedes</td>
                      </tr>`
                    : ""
                }
                <tr>
                  <td>Tamaño de Infraestructura</td>
                  <td>${infraSize} Dispositivos / Servidores</td>
                </tr>
                <tr>
                  <td>Acuerdo de Nivel de Servicio (SLA)</td>
                  <td>Garantía de respuesta &lt; 15 minutos (${
                    sla === "estandar"
                      ? "Cobertura Horario Laboral"
                      : sla === "avanzado"
                      ? "Cobertura Canal Slack Dedicado"
                      : "Soporte Crítico 24/7/365 Multi-canal"
                  })</td>
                </tr>
                ${
                  includeBackup
                    ? `<tr>
                        <td>Servicio de Backup Adicional</td>
                        <td>Incluido - Capacidad de ${backupTBs} TB</td>
                      </tr>`
                    : ""
                }
              </tbody>
            </table>
          </div>

          <div class="section">
            <div class="section-title">Servicios Generales Incluidos</div>
            <ul>
              <li>Mantenimiento proactivo de hardware y software según tipo de soporte.</li>
              <li>Monitoreo y respuesta de incidentes &lt; 15 min con escala inmediata a ingenieros Nivel 3.</li>
              <li>Gestión y asesoramiento en seguridad de red y backups automatizados.</li>
            </ul>
          </div>

          <div class="price-box">
            <div style="font-size: 13px; font-weight: bold; color: #000; text-transform: uppercase; margin-bottom: 5px;">Propuesta Sujeta a Cotización Comercial</div>
            <div style="font-size: 11px; color: #555;">Este documento resume las especificaciones técnicas requeridas. Un ejecutivo de OzyBase adjuntará la cotización económica personalizada según su ubicación física (ej. tiendas retail) o si se coordina un esquema de visitas técnicas puntuales.</div>
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
        <div className="text-left mb-16 space-y-4 max-w-4xl">
          <span className="font-mono text-xs text-success-neon uppercase tracking-widest block">
            Planificador de Soporte Técnico
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-white tracking-tight">
            Obtenga una propuesta técnica al instante o agende una demostración
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-[1200px] mx-auto">
          {/* Left Column: Form Panel */}
          <div className="lg:col-span-7 bg-[#141414] border border-border-subtle p-8 rounded-2xl flex flex-col justify-between space-y-8 relative">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#D2F20B] rounded-t-2xl"></div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-headline text-xl font-bold text-white">Detalles de Infraestructura</h3>
                <p className="text-xs text-terminal-gray mt-1">Proporcione detalles de red y sistemas de su empresa.</p>
              </div>

              {/* Grid Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-terminal-gray uppercase tracking-wider block">
                    Tipo de Soporte
                  </label>
                  <select
                    value={supportType}
                    onChange={(e) => setSupportType(e.target.value as any)}
                    className="w-full bg-black border border-border-subtle rounded-lg px-4 py-3 text-xs text-white focus:border-success-neon focus:outline-none"
                  >
                    <option value="sistemas">Sistemas & Nube</option>
                    <option value="fisico">Sede Física</option>
                    <option value="hibrido">Híbrido Completo</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-terminal-gray uppercase tracking-wider block">
                    Equipos / Servidores
                  </label>
                  <input
                    type="number"
                    min={2}
                    max={100}
                    value={infraSize}
                    onChange={(e) => setInfraSize(Number(e.target.value))}
                    className="w-full bg-black border border-border-subtle rounded-lg px-4 py-3 text-xs text-white focus:border-success-neon focus:outline-none"
                  />
                </div>
              </div>

              {/* Conditionally Render: Support Type note for Sede Física / Híbrido */}
              {(supportType === "fisico" || supportType === "hibrido") && (
                <div className="p-4 bg-success-neon/5 border border-success-neon/20 rounded-xl text-[10px] text-terminal-gray/90 leading-relaxed animate-[fadeIn_0.3s_ease-out]">
                  <strong className="text-success-neon uppercase tracking-wider block mb-1">Nota sobre Cobertura Física:</strong>
                  Esta cotización estimada está calculada para un plan mensual con facturación anual corporativa. Las tarifas finales pueden variar por lugar de ubicación geográfica (ej. si es tienda física retail con viáticos adicionales) o si prefiere un esquema basado en visitas técnicas coordinadas.
                </div>
              )}

              {/* Sedes / Oficinas (Condicional) */}
              {(supportType === "fisico" || supportType === "hibrido") && (
                <div className="space-y-2 animate-[fadeIn_0.3s_ease-out]">
                  <label className="font-mono text-[10px] text-terminal-gray uppercase tracking-wider block">
                    Número de sedes u oficinas físicas
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={numSedes}
                    onChange={(e) => setNumSedes(Number(e.target.value))}
                    className="w-full bg-black border border-border-subtle rounded-lg px-4 py-3 text-xs text-white focus:border-success-neon focus:outline-none"
                  />
                </div>
              )}

              {/* SLA */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-terminal-gray uppercase tracking-wider block">
                  Nivel de Servicio (SLA)
                </label>
                <select
                  value={sla}
                  onChange={(e) => setSla(e.target.value as any)}
                  className="w-full bg-black border border-border-subtle rounded-lg px-4 py-3 text-xs text-white focus:border-success-neon focus:outline-none"
                >
                  <option value="estandar">Estándar (&lt; 15 min - Horario Laboral)</option>
                  <option value="avanzado">Avanzado (&lt; 15 min - Slack Dedicado)</option>
                  <option value="critico">Crítico L3 (&lt; 15 min - Soporte 24/7/365)</option>
                </select>
              </div>

              {/* Backup */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="backup"
                    checked={includeBackup}
                    onChange={(e) => setIncludeBackup(e.target.checked)}
                    className="w-4 h-4 rounded border-border-subtle bg-black text-success-neon focus:ring-0 cursor-pointer accent-success-neon"
                  />
                  <label htmlFor="backup" className="font-mono text-[11px] text-white uppercase cursor-pointer select-none">
                    Incluir almacenamiento de respaldos (Backup)
                  </label>
                </div>
                {includeBackup && (
                  <div className="flex items-center gap-3 pl-6 animate-[fadeIn_0.3s_ease-out]">
                    <span className="font-mono text-xs text-terminal-gray">Capacidad:</span>
                    <input
                      type="number"
                      min={1}
                      max={50}
                      value={backupTBs}
                      onChange={(e) => setBackupTBs(Number(e.target.value))}
                      className="w-20 bg-black border border-border-subtle rounded px-2 py-1 text-xs text-white text-center focus:border-success-neon focus:outline-none"
                    />
                    <span className="font-mono text-xs text-success-neon">TB(s)</span>
                  </div>
                )}
              </div>

              {/* File Upload Area (matches screenshot) */}
              <div className="space-y-2 border-t border-border-subtle/30 pt-6">
                <label className="font-mono text-[10px] text-terminal-gray uppercase tracking-wider block">
                  Cargue el inventario de equipos o plano de red si está disponible (.csv o .json)
                </label>
                <label className="border border-dashed border-border-subtle bg-black/30 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#D2F20B]/30 transition-colors block">
                  <input
                    type="file"
                    accept=".csv,.json"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <svg className="w-8 h-8 text-terminal-gray/60 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                  </svg>
                  {uploadedFileName ? (
                    <div className="space-y-1">
                      <span className="text-xs text-success-neon font-bold block">Archivo cargado: {uploadedFileName}</span>
                      <span className="text-[10px] text-terminal-gray block">
                        ¡Detectados {deviceDetectedCount} equipos! (Ajustado en el planificador)
                      </span>
                    </div>
                  ) : uploadError ? (
                    <div className="space-y-1">
                      <span className="text-xs text-red-500 font-bold block">Error: {uploadError}</span>
                      <span className="text-[10px] text-terminal-gray/60 block">Haga clic aquí para intentar de nuevo</span>
                    </div>
                  ) : (
                    <>
                      <span className="text-xs text-white font-medium">Haga clic para seleccionar su archivo</span>
                      <span className="text-[10px] text-terminal-gray/60 mt-1">Soporta formato .csv o .json (inventario de equipos)</span>
                    </>
                  )}
                </label>
              </div>
            </div>
          </div>

          {/* Right Column: Description & Action */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pl-6">
            <div className="space-y-4">
              <h3 className="font-headline text-2xl font-bold text-white leading-snug">
                Autoservicio: Obtenga su propuesta técnica al instante.
              </h3>
              <p className="text-sm text-terminal-gray leading-relaxed">
                Configure las especificaciones técnicas de su infraestructura en el panel de la izquierda, adjunte su inventario de equipos y envíe la propuesta directamente a nuestro equipo de ventas a través de WhatsApp.
              </p>
            </div>

            <div className="space-y-3 border-y border-border-subtle/40 py-6">
              <span className="font-mono text-[10px] text-success-neon uppercase tracking-wider block">
                Proceso de Cotización
              </span>
              <ul className="space-y-2 text-xs text-terminal-gray list-decimal list-inside leading-relaxed">
                <li>Configure el planificador según sus necesidades.</li>
                <li>Haga clic en <strong className="text-white">Enviar por WhatsApp</strong> para derivar su caso a un ejecutivo de ventas.</li>
                <li>Un agente revisará la viabilidad (incluyendo tarifas específicas para tiendas físicas) y le enviará la cotización económica formal.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-white block">Ideal para:</span>
              <p className="text-xs text-terminal-gray leading-relaxed">
                Directores de TI y administradores de operaciones que necesitan presupuestar de forma rápida, segura y directa, sin burocracia ni intermediarios.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <button
                onClick={handleSendWhatsApp}
                className="w-full py-4 bg-[#D2F20B] hover:bg-[#c0de0a] text-black font-mono text-xs font-bold rounded-lg uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar Requerimientos por WhatsApp
              </button>
              <button
                onClick={handlePrint}
                className="w-full py-4 border border-border-subtle text-white hover:border-[#D2F20B] hover:text-[#D2F20B] font-mono text-xs font-bold rounded-lg uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <FileText className="w-4 h-4" />
                Descargar Resumen Técnico PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
