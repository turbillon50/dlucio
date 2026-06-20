"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Ico } from "@/components/ui";

const NAV = [
  { href: "/admin", label: "Resumen", icon: Ico.home },
  { href: "/admin/jornadas", label: "Jornadas", icon: Ico.ticket },
  { href: "/admin/resultados", label: "Resultados", icon: Ico.whistle },
  { href: "/admin/jugadores", label: "Jugadores", icon: Ico.user },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="dark-wrap grain relative z-10">
      <div className="relative z-10 mx-auto min-h-[100dvh] max-w-md pb-[76px]">
        <header className="sticky top-0 z-30 glass border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <Image src="/brand/logo-tm.jpg" alt="" width={34} height={34} className="rounded-lg ring-1 ring-white/15" />
            <div className="flex-1">
              <p className="text-sm font-black leading-none">Panel del Comisionario</p>
              <p className="text-[11px] text-white/45">Quiniela TM · Admin</p>
            </div>
            <span className="rounded-full bg-[#d62828]/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#ff6b5e]">Admin</span>
          </div>
        </header>

        {children}

        <nav className="fixed bottom-0 left-0 right-0 z-40 mx-auto max-w-md">
          <div className="glass border-t border-white/10 px-1.5 pb-[env(safe-area-inset-bottom)]">
            <div className="flex h-[56px] items-stretch justify-around">
              {NAV.map((t) => {
                const active = pathname === t.href;
                const Icon = t.icon;
                return (
                  <Link key={t.href} href={t.href} className="flex flex-1 flex-col items-center justify-center gap-0.5">
                    <Icon size={21} className={active ? "text-[#c9a227]" : "text-white/45"} />
                    <span className={`text-[10px] font-medium ${active ? "text-white" : "text-white/45"}`}>{t.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
