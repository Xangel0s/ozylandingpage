"use client";

import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <header className="relative min-h-[85vh] flex items-center justify-center pt-20 pb-32 overflow-hidden border-b border-border-subtle bg-black">
      {/* Background grid overlay */}
      <div className="absolute inset-0 z-0 opacity-15 grid-background"></div>
      
      {/* Background Video */}
      <video
        src="/Videos/Reunion.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-12 pointer-events-none mix-blend-luminosity grayscale"
      />
      
      {/* Animated glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-success-neon/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      <div className="relative z-10 px-6 md:px-16 max-w-4xl mx-auto w-full text-center space-y-8">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-border-subtle rounded-full justify-center animate-init-left">
            <span className="w-2 h-2 rounded-full bg-success-neon animate-pulse"></span>
            <span className="font-mono text-xs text-success-neon uppercase tracking-widest">
              Optimiza tu negocio
            </span>
          </div>

          <h1 className="font-headline text-5xl md:text-6.5xl font-extrabold text-white leading-tight animate-init-left [animation-delay:200ms]">
            Expertos en <span className="text-success-neon block mt-1">Soporte Técnico y Automatización con IA</span>
          </h1>

          <p className="text-terminal-gray text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-sans animate-init-right [animation-delay:400ms]">
            Elevamos la productividad de tu empresa mediante soporte especializado 24/7 y agentes de IA inteligentes diseñados para optimizar tu infraestructura sin intervención manual.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-4 animate-init-converge [animation-delay:600ms]">
            <a
              href="#contacto"
              className="w-full sm:w-auto border border-success-neon bg-success-neon text-black font-mono text-sm font-bold px-8 py-4 rounded hover:bg-transparent hover:text-success-neon transition-all flex items-center justify-center gap-2 group"
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
      </div>
    </header>
  );
}
