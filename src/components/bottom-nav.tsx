"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Ico } from "./ui";
import { motion } from "framer-motion";

const TABS = [
  { href: "/app", label: "Inicio", icon: Ico.home },
  { href: "/app/quiniela", label: "Quiniela", icon: Ico.ticket },
  { href: "/app/tabla", label: "Tabla", icon: Ico.table },
  { href: "/app/wallet", label: "Bolsa", icon: Ico.wallet },
  { href: "/app/perfil", label: "Perfil", icon: Ico.user },
];

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 mx-auto max-w-md">
      <div className="glass border-t border-[var(--bd)] px-1.5 pb-[env(safe-area-inset-bottom)]">
        <div className="flex h-[56px] items-stretch justify-around">
          {TABS.map((t) => {
            const active = pathname === t.href;
            const Icon = t.icon;
            return (
              <Link
                key={t.href}
                href={t.href}
                className="relative flex flex-1 flex-col items-center justify-center gap-0.5"
              >
                {active && (
                  <motion.span
                    layoutId="navdot"
                    className="absolute -top-px h-0.5 w-7 rounded-full"
                    style={{ background: "#d4ba28" }}
                  />
                )}
                <Icon size={22} className={active ? "text-[var(--gold)]" : "text-[var(--t2)]"} />
                <span className={`text-[10px] font-medium ${active ? "text-[var(--t1)]" : "text-[var(--t2)]"}`}>
                  {t.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
