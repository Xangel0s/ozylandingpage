import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] w-full pt-20 pb-10 border-t border-border-subtle">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-16">
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-3 font-headline text-2xl font-bold tracking-tighter text-white">
              <img src="/ozybaselogo.png" alt="OzyBase Logo" className="h-6 w-6 rounded object-cover grayscale opacity-50" />
              <span>OzyBase</span>
            </div>
            <p className="text-terminal-gray text-base max-w-sm">
              Sistemas de alto rendimiento para el futuro de la infraestructura digital.
            </p>
          </div>
          <div className="md:col-span-6 flex flex-col md:items-end gap-8">
            <div className="flex flex-wrap gap-x-8 gap-y-4 justify-start md:justify-end">
              <Link href="/" className="text-terminal-gray font-mono text-sm hover:text-success-neon transition-colors">Inicio</Link>
              <Link href="/soporte" className="text-terminal-gray font-mono text-sm hover:text-success-neon transition-colors">Soporte</Link>
              <Link href="/agentes-ia" className="text-terminal-gray font-mono text-sm hover:text-success-neon transition-colors">Agentes IA</Link>
              <Link href="/digitalizacion" className="text-terminal-gray font-mono text-sm hover:text-success-neon transition-colors">Digitalización</Link>
              <Link href="/contacto" className="text-terminal-gray font-mono text-sm hover:text-success-neon transition-colors">Ventas</Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border-subtle/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-xs text-terminal-gray/60 tracking-wider">
            © 2026 OzyBase Systems. Protocol Secured.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex gap-1.5">
              <div className="w-1 h-3 bg-success-neon/20"></div>
              <div className="w-1 h-5 bg-success-neon/40"></div>
              <div className="w-1 h-2 bg-success-neon/10"></div>
              <div className="w-1 h-4 bg-success-neon"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success-neon animate-pulse"></span>
              <span className="font-mono text-[10px] text-success-neon uppercase tracking-widest">
                All Systems Operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
