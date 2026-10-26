import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Componentes daisyUI · Icesi",
  description: "Biblioteca de componentes reutilizables con Tailwind CSS v4 y daisyUI 5",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" data-theme="icesi">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-base-200 font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
