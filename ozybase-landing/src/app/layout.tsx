import type { Metadata } from "next";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OzyBase | Expertos en Soporte Técnico, Agentes IA y Digitalización",
  description: "Elevamos la productividad de tu empresa mediante soporte especializado 24/7 y agentes de IA inteligentes diseñados para optimizar y automatizar tu infraestructura.",
  keywords: ["OzyBase", "Soporte Técnico", "Agentes IA", "Automatización", "Digitalización de Procesos", "Infraestructura Crítica", "DevOps"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-success-neon selection:text-black">
        {children}
      </body>
    </html>
  );
}
