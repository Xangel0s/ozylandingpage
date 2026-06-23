import type { Metadata } from "next";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import ScrollRevealManager from "@/components/ScrollRevealManager";
import WhatsAppFloating from "@/components/WhatsAppFloating";
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
  metadataBase: new URL("https://ozybase.com"),
  title: {
    default: "OzyBase | Soporte Técnico de TI, Agentes de IA y Digitalización",
    template: "%s | OzyBase"
  },
  description: "Servicios profesionales de TI y soporte técnico de sistemas 24/7, agentes de inteligencia artificial y digitalización de procesos para empresas en Perú y Latinoamérica.",
  keywords: [
    "OzyBase",
    "Soporte Técnico para empresas",
    "Soporte de Sistemas",
    "Agentes de IA",
    "Automatización con Inteligencia Artificial",
    "Digitalización de procesos",
    "Migración de Excel a web",
    "Outsourcing de TI",
    "Monitoreo autónomo de servidores",
    "Soporte TI 24/7"
  ],
  authors: [{ name: "OzyBase S.A.C." }],
  creator: "OzyBase",
  publisher: "OzyBase",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://ozybase.com",
    siteName: "OzyBase",
    title: "OzyBase | Soporte Técnico de TI, Agentes de IA y Digitalización",
    description: "Elevamos la productividad de tu empresa mediante soporte de sistemas 24/7, agentes inteligentes de IA y digitalización de procesos manuales.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OzyBase | Soporte Técnico y Automatización con IA",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "OzyBase | Soporte Técnico de TI y Agentes de IA",
    description: "Soporte de sistemas 24/7 y agentes autónomos de IA para optimizar tu infraestructura digital.",
    images: ["/og-image.jpg"],
  }
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
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-background text-foreground selection:bg-success-neon selection:text-black"
        suppressHydrationWarning
      >
        <ScrollRevealManager />
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
