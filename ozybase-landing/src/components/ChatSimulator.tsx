"use client";

import { useState, useEffect } from "react";
import { AlertCircle, Cpu, User, CheckCircle2, MessageSquare, ShieldAlert, Sparkles } from "lucide-react";

interface ChatMessage {
  id: number;
  time: string;
  sender: "system" | "ai" | "engineer" | "client";
  senderName: string;
  content: string;
  status?: string;
}

const messagesList: ChatMessage[] = [
  {
    id: 1,
    time: "10:00:02",
    sender: "system",
    senderName: "ALERTA DE SISTEMA",
    content: "WARNING: Latencia de carga crítica en servidor de producción (Nodos 04 y 07). CPU al 98.7%. Response Time > 4500ms.",
  },
  {
    id: 2,
    time: "10:00:15",
    sender: "ai",
    senderName: "OZYBASE IA DIAGNÓSTICO",
    content: "DIAGNÓSTICO AUTOMÁTICO: Bloqueo de hilos debido a Query no indexada en módulo de reportes. Recomendación: Terminar proceso 11409 y forzar indexación de tabla 'transacciones_historico'.",
  },
  {
    id: 3,
    time: "10:01:05",
    sender: "engineer",
    senderName: "JULIÁN (SOPORTE L3)",
    content: "Entendido. Ejecutando kill del proceso 11409, aplicando parche de índices a la base de datos y limpiando la memoria caché de los nodos.",
  },
  {
    id: 4,
    time: "10:01:42",
    sender: "system",
    senderName: "SISTEMA RESTABLECIDO",
    content: "STATUS: OK. Servidor operacional. Latencia normalizada a 12ms. CPU estable al 14.2%. Nodos en línea.",
    status: "success",
  },
  {
    id: 5,
    time: "10:02:10",
    sender: "client",
    senderName: "CLIENTE (SRE LEADER)",
    content: "Excelente velocidad de respuesta y diagnóstico preciso. Incidencia resuelta en menos de 2 minutos. ¡Muchas gracias, Julián!",
  },
];

export default function ChatSimulator() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (messagesList.length + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#141414] border border-border-subtle rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
      {/* Top Header Bar */}
      <div className="bg-black/60 px-6 py-4 border-b border-border-subtle flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-success-neon rounded-full animate-ping"></span>
          <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">RESOLUCIÓN ACTIVA DE INCIDENTES</span>
        </div>
        
        {/* Communication Channels */}
        <div className="flex items-center gap-3 bg-[#1e1e1e] px-3 py-1.5 rounded-full border border-border-subtle/50">
          <span className="font-mono text-[9px] text-terminal-gray uppercase">Canales:</span>
          <div className="flex gap-2">
            <span className="px-2 py-0.5 bg-success-neon/10 border border-success-neon/20 rounded font-mono text-[8px] text-success-neon">SLACK</span>
            <span className="px-2 py-0.5 bg-success-neon/10 border border-success-neon/20 rounded font-mono text-[8px] text-success-neon">WSP</span>
            <span className="px-2 py-0.5 bg-success-neon/10 border border-success-neon/20 rounded font-mono text-[8px] text-success-neon">GMAIL</span>
            <span className="px-2 py-0.5 bg-success-neon/10 border border-success-neon/20 rounded font-mono text-[8px] text-success-neon">PANEL</span>
          </div>
        </div>
      </div>

      {/* Simulator Screen */}
      <div className="p-6 h-[340px] md:h-[400px] overflow-y-auto space-y-4 font-mono text-xs scrollbar-thin">
        {messagesList.slice(0, activeStep).map((msg) => {
          let bgClass = "bg-black/40 border-border-subtle/30 text-terminal-gray";
          let icon = <AlertCircle className="w-4 h-4 text-red-500" />;
          let labelColor = "text-terminal-gray";

          if (msg.sender === "system") {
            if (msg.status === "success") {
              bgClass = "bg-success-neon/5 border-success-neon/20 text-white";
              icon = <CheckCircle2 className="w-4 h-4 text-success-neon" />;
              labelColor = "text-success-neon";
            } else {
              bgClass = "bg-red-950/20 border-red-500/20 text-red-100";
              icon = <ShieldAlert className="w-4 h-4 text-red-500" />;
              labelColor = "text-red-400";
            }
          } else if (msg.sender === "ai") {
            bgClass = "bg-success-neon/5 border-success-neon/30 text-white";
            icon = <Cpu className="w-4 h-4 text-success-neon" />;
            labelColor = "text-success-neon font-bold";
          } else if (msg.sender === "engineer") {
            bgClass = "bg-blue-950/20 border-blue-500/20 text-blue-100";
            icon = <User className="w-4 h-4 text-blue-400" />;
            labelColor = "text-blue-400";
          } else if (msg.sender === "client") {
            bgClass = "bg-zinc-900 border-zinc-800 text-zinc-300";
            icon = <MessageSquare className="w-4 h-4 text-zinc-400" />;
            labelColor = "text-zinc-400";
          }

          return (
            <div
              key={msg.id}
              className={`p-4 border rounded-lg transition-all duration-500 transform scale-100 opacity-100 animate-[fadeIn_0.5s_ease-out] ${bgClass}`}
            >
              <div className="flex justify-between items-center mb-2 border-b border-border-subtle/20 pb-1.5">
                <div className="flex items-center gap-2">
                  {icon}
                  <span className={`text-[10px] font-bold tracking-wider ${labelColor}`}>{msg.senderName}</span>
                </div>
                <span className="text-[9px] text-terminal-gray/60">{msg.time}</span>
              </div>
              <p className="leading-relaxed text-[11px] whitespace-pre-wrap">{msg.content}</p>
            </div>
          );
        })}

        {activeStep === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center text-terminal-gray/40 space-y-4">
            <Sparkles className="w-8 h-8 text-success-neon/30 animate-pulse" />
            <p className="font-mono text-xs uppercase tracking-widest">Iniciando Simulación de Canal de Soporte Activo...</p>
          </div>
        )}
      </div>

      {/* Simulator Footer Controls */}
      <div className="bg-black/40 px-6 py-3 border-t border-border-subtle flex justify-between items-center text-[10px] text-terminal-gray/60">
        <span className="font-mono">SIMULATION_STATE: {activeStep === messagesList.length ? "RESOLVED" : "PROCESSING"}</span>
        <button
          onClick={() => setActiveStep(0)}
          className="text-success-neon hover:underline font-mono uppercase"
        >
          Reiniciar Flujo
        </button>
      </div>
    </div>
  );
}
