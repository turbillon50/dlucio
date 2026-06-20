import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DemoProvider } from "@/lib/demo-store";
import { ThemeProvider } from "@/lib/theme";
import { ModeSwitcher } from "@/components/mode-switcher";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Quiniela TM · Liga de Béisbol de Tijuana",
  description: "La quiniela oficial de la Liga de Béisbol Infantil y Juvenil Municipal de Tijuana. Apóyale a tu equipo y gánate la bolsa.",
  manifest: "/manifest.json",
  appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: "Quiniela TM" },
  icons: {
    icon: [
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f5f4",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body className="min-h-[100dvh] antialiased">
        <ThemeProvider>
          <DemoProvider>
            {children}
            <ModeSwitcher />
          </DemoProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
