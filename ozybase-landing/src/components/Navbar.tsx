"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Menu, X, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Soporte", href: "/soporte" },
    { name: "Agentes IA", href: "/agentes-ia" },
    { name: "Digitalización", href: "/digitalizacion" },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle">
      <div className="flex justify-between items-center h-16 px-6 md:px-16 max-w-[1280px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold tracking-tighter text-white">
          <span className="text-success-neon">OzyBase</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-mono text-sm tracking-wider transition-colors duration-200 ${
                  isActive ? "text-success-neon border-b-2 border-success-neon pb-1" : "text-terminal-gray hover:text-success-neon"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/contacto"
            className="hidden md:flex items-center gap-2 bg-success-neon text-black font-mono text-sm font-bold px-5 py-2.5 rounded transition-all hover:brightness-110 active:scale-95"
          >
            <MessageSquare className="w-4.5 h-4.5" />
            Contactar Ventas
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-success-neon transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md border-b border-border-subtle flex flex-col p-6 gap-6 z-40">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-mono text-base tracking-wider transition-colors ${
                pathname === link.href ? "text-success-neon" : "text-terminal-gray hover:text-success-neon"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-success-neon text-black font-mono text-sm font-bold py-3.5 rounded transition-all hover:brightness-110"
          >
            <MessageSquare className="w-4.5 h-4.5" />
            Contactar Ventas
          </Link>
        </div>
      )}
    </nav>
  );
}
