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

    let total = basePrice * sizeMultiplier * slaMultiplier;

    // Internal travel cost (not displayed directly to keep panel clean)
    // Travel ticket base = S/. 1.5, 4 visits per month, 2-way travel per visit.
    if (supportType === "fisico" || supportType === "hibrido") {
      const travelBaseTicket = 1.5;
      const visitsPerSede = 4;
      const travelsPerVisit = 2;
      const internalTravelCost = numSedes * visitsPerSede * travelsPerVisit * travelBaseTicket; // numSedes * 12 Soles
      total += internalTravelCost;
    }

    // Backup cost
    if (includeBackup) {
      const costPerTB = 120; // S/. 120 per TB
      total += backupTBs * costPerTB;
    }

    return Math.round(total);
  };

  const currentPrice = calculatePrice();

  const handlePrint = () => {
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
            <div>Monto Mensual Estimado:</div>
            <div class="val">S/. ${currentPrice.toLocaleString("es-PE")} + IGV</div>
            <div style="font-size: 11px; color: #555; margin-top: 5px;">* Estimación basada en facturación mensual con compromiso anual. Sujeto a variaciones por ubicación geográfica (ej. tiendas físicas retail) o si se coordina un esquema de visitas técnicas puntuales.</div>
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
                Autoservicio: Obtenga una propuesta de soporte en minutos.
              </h3>
              <p className="text-sm text-terminal-gray leading-relaxed">
                Complete las especificaciones técnicas en el panel de la izquierda, verifique el presupuesto mensual y descargue la propuesta comercial formalizada con el logotipo de OzyBase de manera inmediata.
              </p>
            </div>

            <div className="space-y-2 border-y border-border-subtle/40 py-6">
              <span className="font-mono text-[10px] text-success-neon uppercase tracking-wider block">
                Estimación de Inversión Mensual
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-white">S/. {currentPrice.toLocaleString("es-PE")}</span>
                <span className="text-xs text-terminal-gray">+ IGV / mes</span>
              </div>
              <p className="text-[10px] text-terminal-gray/80 leading-relaxed mt-3">
                * Nota: Esta cotización estimada está calculada para un plan mensual con facturación anual corporativa. Las tarifas finales pueden variar por lugar de ubicación geográfica (ej. si es tienda física retail con viáticos adicionales) o si prefiere un esquema basado en visitas técnicas coordinadas.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-white block">Ideal para:</span>
              <p className="text-xs text-terminal-gray leading-relaxed">
                Directores de TI, administradores de sistemas y gerentes de operaciones que buscan automatizar y asegurar el soporte de sus oficinas y nubes sin demoras de contratación ni llamadas innecesarias.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <button
                onClick={handlePrint}
                className="w-full py-4 bg-[#D2F20B] hover:bg-[#c0de0a] text-black font-mono text-xs font-bold rounded-lg uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <FileText className="w-4 h-4" />
                Descargar Propuesta PDF
              </button>
              <a
                href={`/contacto?servicio=Soporte+Técnico&monto=S/.+${currentPrice}&tipo=${supportType}`}
                className="block text-center w-full py-4 border border-border-subtle text-white hover:border-[#D2F20B] hover:text-[#D2F20B] font-mono text-xs font-bold rounded-lg uppercase transition-all"
              >
                Agendar Demostración con Especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
