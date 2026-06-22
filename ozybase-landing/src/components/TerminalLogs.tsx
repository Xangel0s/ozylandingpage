"use client";

import { useEffect, useState } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

export default function TerminalLogs() {
  const [logs, setLogs] = useState<string[]>([
    'Agent "Alpha" inicializado: persistent_memory.db',
    "Detector de anomalías: 0 violaciones en 3600s",
    "Resolución en tiempo real: Bridge sincronizado",
  ]);

  useEffect(() => {
    const actions = [
      "Analizando patrones de tráfico entrante...",
      "Estableciendo canal de memoria seguro...",
      "Sincronizando estados entre enclaves...",
      "Calculando matriz de latencia de red...",
      "Consolidando logs de auditoría interna...",
    ];

    const interval = setInterval(() => {
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      setLogs((prevLogs) => {
        const nextLogs = [...prevLogs];
        if (nextLogs.length > 5) nextLogs.shift();
        nextLogs.push(randomAction);
        return nextLogs;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-[#141414] border border-border-subtle rounded-xl relative overflow-hidden">
      <div className="scan-line"></div>
      <div className="flex items-center justify-between mb-6 border-b border-border-subtle pb-4">
        <span className="font-mono text-xs text-white uppercase tracking-widest flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-success-neon" />
          Terminal_Live
        </span>
        <span className="font-mono text-[10px] text-terminal-gray">REGION: EU-WEST-1</span>
      </div>
      <div className="space-y-3 font-mono text-xs text-terminal-gray min-h-[160px]">
        {logs.map((log, idx) => (
          <div
            key={idx}
            className={`flex gap-3 p-2 rounded transition-all duration-300 ${
              idx === logs.length - 1
                ? "bg-success-neon/5 border-l-2 border-success-neon text-white"
                : "bg-black/20"
            }`}
          >
            <span className="text-success-neon font-bold">
              {idx === logs.length - 1 ? "[EXEC]" : "[OK]"}
            </span>
            <span>{log}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
