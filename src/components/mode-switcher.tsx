"use client";
import { useDemo, Mode } from "@/lib/demo-store";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MODES: { key: Mode; label: string; route: string; icon: string }[] = [
  { key: "publico", label: "Público", route: "/", icon: "◉" },
  { key: "usuario", label: "Usuario", route: "/app", icon: "◈" },
  { key: "admin", label: "Admin", route: "/admin", icon: "⬡" },
];

export function ModeSwitcher() {
  const { mode, setMode } = useDemo();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Hide on auth screens
  if (pathname?.startsWith("/entrar") || pathname?.startsWith("/registro")) return null;

  const go = (m: Mode, route: string) => {
    setMode(m);
    router.push(route);
    setOpen(false);
  };

  return (
    <div className="fixed bottom-[88px] right-3 z-50 sm:bottom-5">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.18 }}
            className="glass mb-2 rounded-2xl p-1.5 shadow-2xl"
          >
            {MODES.map((m) => (
              <button
                key={m.key}
                onClick={() => go(m.key, m.route)}
                className={`flex w-full items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium transition ${
                  mode === m.key ? "bg-white/10 text-white" : "text-white/55 hover:text-white"
                }`}
              >
                <span className="text-[15px]" style={{ color: mode === m.key ? "#d4ba28" : undefined }}>
                  {m.icon}
                </span>
                {m.label}
                {mode === m.key && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#d4ba28]" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.94 }}
        onClick={() => setOpen((o) => !o)}
        className="glass flex items-center gap-2 rounded-full px-4 py-2.5 shadow-2xl"
        style={{ borderColor: "rgba(212,186,40,0.3)" }}
      >
        <span className="text-base">🎬</span>
        <span className="text-xs font-semibold tracking-wide text-white/90">
          {MODES.find((m) => m.key === mode)?.label}
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} className="text-white/40 text-[10px]">
          ▲
        </motion.span>
      </motion.button>
    </div>
  );
}
