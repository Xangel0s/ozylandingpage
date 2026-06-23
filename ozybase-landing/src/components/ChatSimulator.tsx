"use client";

import { useState, useEffect } from "react";
import { Sparkles, MessageSquare, AlertTriangle, Cpu, User, CheckCircle2, Server, Terminal } from "lucide-react";

interface StepMessage {
  id: number;
  sender: "client" | "ai" | "engineer" | "system";
  senderName: string;
  avatarIcon: any;
  avatarBg: string;
  timeLabel: string;
  bubbleBg: string;
  text: string;
  hasProgress?: boolean;
  progressText?: string;
  statusCard?: {
    icon: any;
    title: string;
    subtitle: string;
    success: boolean;
  };
}

const steps: StepMessage[] = [
  {
    id: 1,
    sender: "client",
    senderName: "Nora (SRE Lead)",
    avatarIcon: User,
    avatarBg: "bg-zinc-800 border-zinc-700",
    timeLabel: "Hace 1 min",
    bubbleBg: "bg-white/5 border-white/10 text-zinc-100",
    text: "Hola equipo, el servidor de producción (nodo-04) está extremadamente lento y registrando timeouts de base de datos.",
  },
  {
    id: 2,
    sender: "ai",
    senderName: "Robin AI (OzyBase)",
    avatarIcon: Sparkles,
    avatarBg: "bg-success-neon/15 border-success-neon/30 text-success-neon",
    timeLabel: "Hace un momento",
    bubbleBg: "bg-success-neon/5 border-success-neon/20 text-white",
    text: "Analizando telemetría y bloqueos activos en el nodo-04...",
    hasProgress: true,
    progressText: "Investigando cuellos de botella en base de datos",
  },
  {
    id: 3,
    sender: "ai",
    senderName: "Robin AI (OzyBase)",
    avatarIcon: Sparkles,
    avatarBg: "bg-success-neon/15 border-success-neon/30 text-success-neon",
    timeLabel: "Hace un momento",
    bubbleBg: "bg-success-neon/5 border-success-neon/20 text-white",
    text: "Diagnóstico completo: Bloqueo de hilos debido a Query no indexada en tabla 'transacciones'. Parche de optimización listo.",
  },
  {
    id: 4,
    sender: "engineer",
    senderName: "Julián (Soporte L3)",
    avatarIcon: User,
    avatarBg: "bg-blue-950/40 border-blue-500/30 text-blue-400",
    timeLabel: "Hace un momento",
    bubbleBg: "bg-blue-950/10 border-blue-500/20 text-blue-100",
    text: "Entendido Robin. Procedo a aplicar el parche de índices y reiniciar la caché de consultas.",
  },
  {
    id: 5,
    sender: "ai",
    senderName: "Robin AI (OzyBase)",
    avatarIcon: Sparkles,
    avatarBg: "bg-success-neon/15 border-success-neon/30 text-success-neon",
    timeLabel: "Hace un momento",
    bubbleBg: "bg-success-neon/5 border-success-neon/20 text-white",
    text: "Verificación de latencia completada con éxito.",
    statusCard: {
      icon: Server,
      title: "DB Nodo-04 Operacional",
      subtitle: "Latencia: 12ms | CPU: 14%",
      success: true,
    },
  },
  {
    id: 6,
    sender: "client",
    senderName: "Nora (SRE Lead)",
    avatarIcon: User,
    avatarBg: "bg-zinc-800 border-zinc-700",
    timeLabel: "Justo ahora",
    bubbleBg: "bg-white/5 border-white/10 text-zinc-100",
    text: "¡Perfecto! Todo reestablecido en tiempo récord. Muchas gracias por la velocidad.",
  },
];

export default function ChatSimulator() {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= steps.length ? 1 : prev + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative min-h-[460px] flex flex-col justify-between">
      {/* Background decor matrix dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40"></div>

      {/* Header bar */}
      <div className="relative z-10 px-6 py-4 bg-black/40 border-b border-white/5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-success-neon" />
          <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">Canal de Soporte Activo</span>
        </div>
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-success-neon animate-pulse"></span>
          <span className="font-mono text-[9px] text-success-neon uppercase tracking-wider">Mesa de Ayuda L3</span>
        </div>
      </div>

      {/* Message Screen Area */}
      <div className="relative z-10 p-6 grow space-y-5 overflow-y-auto max-h-[400px] scrollbar-none flex flex-col justify-end">
        {steps.slice(0, activeStep).map((msg) => {
          const AvatarIcon = msg.avatarIcon;
          return (
            <div
              key={msg.id}
              className={`flex gap-4 max-w-[85%] items-start animate-[fadeIn_0.4s_ease-out] ${
                msg.sender === "client" ? "self-start" : "self-end flex-row-reverse"
              }`}
            >
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 shadow-md ${msg.avatarBg}`}>
                <AvatarIcon className="w-4 h-4" />
              </div>

              {/* Speech Bubble */}
              <div className="space-y-1">
                <div className={`flex items-center gap-2 text-[10px] text-terminal-gray/60 ${msg.sender === "client" ? "justify-start" : "justify-end"}`}>
                  <span className="font-bold text-white/80">{msg.senderName}</span>
                  <span>•</span>
                  <span>{msg.timeLabel}</span>
                </div>
                <div className={`p-4 rounded-2xl border text-xs leading-relaxed shadow-lg ${msg.bubbleBg}`}>
                  <p>{msg.text}</p>

                  {/* Optional loader/progress */}
                  {msg.hasProgress && (
                    <div className="mt-4 pt-3 border-t border-white/5 space-y-2">
                      <div className="flex justify-between text-[9px] text-terminal-gray font-mono">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-success-neon rounded-full animate-ping"></span>
                          {msg.progressText}
                        </span>
                        <span>PROCESANDO</span>
                      </div>
                      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-success-neon w-2/3 animate-[pulse_1.5s_infinite]"></div>
                      </div>
                    </div>
                  )}

                  {/* Optional Status Card block */}
                  {msg.statusCard && (
                    <div className="mt-4 p-3 bg-black/60 border border-success-neon/20 rounded-xl flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-success-neon/10 border border-success-neon/20 flex items-center justify-center">
                        <msg.statusCard.icon className="w-5 h-5 text-success-neon" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-white">{msg.statusCard.title}</div>
                        <div className="text-[9px] text-terminal-gray font-mono">{msg.statusCard.subtitle}</div>
                      </div>
                      <div className="ml-auto">
                        <span className="text-[9px] px-2 py-0.5 bg-success-neon/15 text-success-neon border border-success-neon/20 rounded font-bold uppercase">
                          OK
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer bar control */}
      <div className="relative z-10 px-6 py-4 bg-black/40 border-t border-white/5 flex justify-between items-center text-[10px] text-terminal-gray/60 font-mono">
        <span>ESTADO: {activeStep === steps.length ? "INCIDENTE_RESUELTO" : "ANALIZANDO_METRICAS"}</span>
        <button
          onClick={() => setActiveStep(1)}
          className="text-success-neon hover:text-white transition-colors"
        >
          REINICIAR SIMULACIÓN
        </button>
      </div>
    </div>
  );
}
