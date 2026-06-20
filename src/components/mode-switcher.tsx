"use client";
import { useDemo, Mode } from "@/lib/demo-store";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MODES: { key: Mode; label: string; route: string; icon: string; desc: string }[] = [
  { key: "publico", label: "Público", route: "/", icon: "◉", desc: "Landing" },
  { key: "usuario", label: "Usuario", route: "/app", icon: "◈", desc: "Jugador" },
  { key: "admin", label: "Admin", route: "/admin", icon: "⬡", desc: "Comisionario" },
];

export function ModeSwitcher() {
  const { mode, setMode } = useDemo();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname?.startsWith("/entrar") || pathname?.startsWith("/registro")) return null;

  const go = (m: Mode, route: string) => {
    setMode(m); router.push(route); setOpen(false);
  };

  // Invisible 32x32 trigger — bottom-right corner, no text, no icon
  return (
    <>
      {/* Secret trigger: tiny invisible tap zone bottom-right */}
      <button
        onClick={() => setOpen(true)}
        aria-hidden
        className="fixed bottom-1 right-1 z-[55] h-8 w-8 opacity-0"
      />

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 320 }}
              className="fixed bottom-0 left-1/2 z-[61] w-full max-w-md -translate-x-1/2 rounded-t-3xl border-t border-white/10 bg-[#0d0b1a] p-5 pb-8"
            >
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/20" />
              <p className="mb-1 text-center text-sm font-bold text-white">Modo de demostración</p>
              <p className="mb-4 text-center text-[12px] text-white/45">Recorre las tres vistas de la app</p>
              <div className="grid grid-cols-3 gap-2.5">
                {MODES.map((m) => {
                  const active = mode === m.key;
                  return (
                    <button
                      key={m.key}
                      onClick={() => go(m.key, m.route)}
                      className={`flex flex-col items-center gap-1.5 rounded-2xl border p-4 transition ${
                        active ? "border-[#c9a227]/50 bg-[#c9a227]/10" : "border-white/10 bg-white/[0.03]"
                      }`}
                    >
                      <span className="text-xl" style={{ color: active ? "#c9a227" : "rgba(255,255,255,0.5)" }}>{m.icon}</span>
                      <span className={`text-[13px] font-bold ${active ? "text-white" : "text-white/70"}`}>{m.label}</span>
                      <span className="text-[10px] text-white/40">{m.desc}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
