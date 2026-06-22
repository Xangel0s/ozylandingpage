"use client";

import { ArrowRight, ShieldCheck, Terminal as TerminalIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <header className="relative min-h-[85vh] flex items-center justify-center pt-20 pb-32 overflow-hidden border-b border-border-subtle bg-black">
      {/* Background grid overlay */}
      <div className="absolute inset-0 z-0 opacity-15 grid-background"></div>
      
      {/* Animated glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-success-neon/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      <div className="relative z-10 px-6 md:px-16 max-w-[1280px] mx-auto w-full flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-border-subtle rounded-full">
            <span className="w-2 h-2 rounded-full bg-success-neon animate-pulse"></span>
            <span className="font-mono text-xs text-success-neon uppercase tracking-widest">
              Autonomous Core Active v2.5
            </span>
          </div>

          <h1 className="font-headline text-5xl md:text-6.5xl font-extrabold text-white leading-tight">
            Expertos en <span className="text-success-neon block mt-1">Soporte Técnico y Automatización con IA</span>
          </h1>

          <p className="text-terminal-gray text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
            Elevamos la productividad de tu empresa mediante soporte especializado 24/7 y agentes de IA inteligentes diseñados para optimizar tu infraestructura sin intervención manual.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
            <a
              href="#contacto"
              className="w-full sm:w-auto bg-success-neon text-black font-mono text-sm font-bold px-8 py-4 rounded hover:bg-opacity-95 transition-all flex items-center justify-center gap-2 group"
            >
              Contactar Ventas
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicios"
              className="w-full sm:w-auto bg-transparent text-white font-mono text-sm font-bold px-8 py-4 rounded border border-border-subtle hover:border-success-neon transition-colors flex items-center justify-center"
            >
              Conoce Nuestras Soluciones
            </a>
          </div>
        </div>

        {/* Decorative Terminal widget */}
        <div className="flex-1 w-full max-w-md hidden lg:block">
          <div className="p-6 bg-[#141414] border border-border-subtle rounded-xl relative overflow-hidden">
            <div className="scan-line"></div>
            <div className="flex items-center justify-between border-b border-border-subtle pb-4 mb-6">
              <div className="flex items-center gap-2 font-mono text-xs text-white">
                <TerminalIcon className="w-4.5 h-4.5 text-success-neon" />
                <span>MONITORING_DAEMON_1</span>
              </div>
              <span className="font-mono text-[10px] text-terminal-gray uppercase">Region: EU-WEST-1</span>
            </div>

            <div className="space-y-3.5 font-mono text-xs text-terminal-gray">
              <div className="flex gap-3 p-2 bg-black/50 border border-border-subtle/50 rounded">
                <span className="text-success-neon font-bold">[OK]</span>
                <span>Agent "Alpha" initialized: persistent_memory.db</span>
              </div>
              <div className="flex gap-3 p-2 bg-black/50 border border-border-subtle/50 rounded">
                <span className="text-success-neon font-bold">[OK]</span>
                <span>Anomaly detector: 0 violations detected in last 3600s</span>
              </div>
              <div className="flex gap-3 p-2 bg-black/50 border border-border-subtle/50 rounded">
                <span className="text-success-neon font-bold">[OK]</span>
                <span>Real-time resolution: Bridge active and synced</span>
              </div>
              <div className="flex gap-3 p-2 bg-success-neon/5 border border-success-neon/20 rounded border-l-2 border-l-success-neon">
                <span className="text-success-neon font-bold">[EXEC]</span>
                <span className="animate-pulse">Analyzing incoming traffic logs...</span>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center text-[10px] font-mono text-terminal-gray/40">
              <span>SYSTEMS_SECURED_BY_OZYBASE</span>
              <ShieldCheck className="w-4 h-4 text-success-neon" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
