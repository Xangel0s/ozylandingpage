"use client";

import { useState, useEffect } from "react";
import { Sparkles, User, Server } from "lucide-react";

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
    avatarBg: "bg-zinc-850 border-zinc-700 text-zinc-400",
    timeLabel: "Hace 1 min",
    bubbleBg: "bg-white/[0.03] backdrop-blur-md border-white/10 text-zinc-200",
    text: "Hola equipo, el servidor de producción (nodo-04) está extremadamente lento y registrando timeouts de base de datos.",
  },
  {
    id: 2,
    sender: "ai",
    senderName: "Robin AI (OzyBase)",
    avatarIcon: Sparkles,
    avatarBg: "bg-success-neon/10 border-success-neon/20 text-success-neon",
    timeLabel: "Hace un momento",
    bubbleBg: "bg-success-neon/[0.02] backdrop-blur-md border-success-neon/15 text-white",
    text: "Analizando telemetría y bloqueos activos en el nodo-04...",
    hasProgress: true,
    progressText: "Investigando cuellos de botella en base de datos",
  },
  {
    id: 3,
    sender: "ai",
    senderName: "Robin AI (OzyBase)",
    avatarIcon: Sparkles,
    avatarBg: "bg-success-neon/10 border-success-neon/20 text-success-neon",
    timeLabel: "Hace un momento",
    bubbleBg: "bg-success-neon/[0.02] backdrop-blur-md border-success-neon/15 text-white",
    text: "Diagnóstico completo: Bloqueo de hilos debido a Query no indexada en tabla 'transacciones'. Parche de optimización listo.",
  },
  {
    id: 4,
    sender: "engineer",
    senderName: "Julián (Soporte L3)",
    avatarIcon: User,
    avatarBg: "bg-blue-950/30 border-blue-500/20 text-blue-400",
    timeLabel: "Hace un momento",
    bubbleBg: "bg-blue-950/[0.03] backdrop-blur-md border-blue-500/10 text-blue-100",
    text: "Entendido Robin. Procedo a aplicar el parche de índices y reiniciar la caché de consultas.",
  },
  {
    id: 5,
    sender: "ai",
    senderName: "Robin AI (OzyBase)",
    avatarIcon: Sparkles,
    avatarBg: "bg-success-neon/10 border-success-neon/20 text-success-neon",
    timeLabel: "Hace un momento",
    bubbleBg: "bg-success-neon/[0.02] backdrop-blur-md border-success-neon/15 text-white",
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
    avatarBg: "bg-zinc-850 border-zinc-700 text-zinc-400",
    timeLabel: "Justo ahora",
    bubbleBg: "bg-white/[0.03] backdrop-blur-md border-white/10 text-zinc-200",
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

  // Show only the latest 3 active messages to prevent layout stretching
  const startIndex = Math.max(0, activeStep - 3);
  const visibleMessages = steps.slice(startIndex, activeStep);

  return (
    <div className="w-full flex flex-col justify-end space-y-6 min-h-[420px] max-h-[480px] relative px-2">
      {/* Top opacity gradient mask to blend with the background */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent pointer-events-none z-20"></div>

      <div className="space-y-6 flex flex-col justify-end overflow-hidden pb-4">
        {visibleMessages.map((msg) => {
          const AvatarIcon = msg.avatarIcon;
          
          // Calculate dynamic fading opacity based on relative position to the newest message
          const distance = activeStep - msg.id;
          let opacityClass = "opacity-100 scale-100 blur-none";
          if (distance === 1) {
            opacityClass = "opacity-75 scale-[0.98] blur-[0.5px]";
          } else if (distance >= 2) {
            opacityClass = "opacity-30 scale-[0.96] blur-[1px]";
          }

          return (
            <div
              key={msg.id}
              className={`flex gap-4 max-w-[90%] items-start transition-all duration-700 ease-out transform origin-bottom ${opacityClass} ${
                msg.sender === "client" ? "self-start" : "self-end flex-row-reverse"
              }`}
            >
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 shadow-md ${msg.avatarBg}`}>
                <AvatarIcon className="w-4 h-4" />
              </div>

              {/* Bubble and Metadata */}
              <div className="space-y-1">
                <div className={`flex items-center gap-2 text-[10px] text-terminal-gray/50 ${msg.sender === "client" ? "justify-start" : "justify-end"}`}>
                  <span className="font-bold text-white/70">{msg.senderName}</span>
                  <span>•</span>
                  <span>{msg.timeLabel}</span>
                </div>
                <div className={`p-4 rounded-2xl border text-xs leading-relaxed shadow-lg ${msg.bubbleBg}`}>
                  <p>{msg.text}</p>

                  {/* Loader progress */}
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

                  {/* Status Card */}
                  {msg.statusCard && (
                    <div className="mt-4 p-3 bg-black/40 border border-success-neon/15 rounded-xl flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-success-neon/10 border border-success-neon/20 flex items-center justify-center">
                        <msg.statusCard.icon className="w-5 h-5 text-success-neon" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-white">{msg.statusCard.title}</div>
                        <div className="text-[9px] text-terminal-gray font-mono">{msg.statusCard.subtitle}</div>
                      </div>
                      <div className="ml-auto">
                        <span className="text-[9px] px-2 py-0.5 bg-success-neon/10 text-success-neon border border-success-neon/25 rounded font-bold uppercase">
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

      {/* Small floating reset indicator */}
      <div className="absolute bottom-[-16px] right-2 text-[9px] font-mono text-terminal-gray/30 hover:text-success-neon/60 transition-colors z-20">
        <button onClick={() => setActiveStep(1)}>REINICIAR FLUX</button>
      </div>
    </div>
  );
}
