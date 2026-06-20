"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CURRENT_ROUND, teamById } from "@/lib/demo-data";
import { TeamBadge, Ico } from "@/components/ui";

export default function ResultadosPage() {
  const [scores, setScores] = useState<Record<string, { h: string; a: string }>>({});
  const [saved, setSaved] = useState(false);

  const set = (id: string, side: "h" | "a", v: string) => {
    setScores((s) => ({ ...s, [id]: { ...s[id], [side]: v.replace(/\D/g, "").slice(0, 2) } }));
  };

  const filled = CURRENT_ROUND.filter((m) => scores[m.id]?.h !== undefined && scores[m.id]?.a !== undefined && scores[m.id]?.h !== "" && scores[m.id]?.a !== "").length;

  return (
    <div className="px-4 pt-5">
      <h1 className="text-xl font-black">Capturar resultados</h1>
      <p className="mt-1 text-sm text-white/55">Jornada 14 · ingresa el marcador de cada partido</p>

      <div className="mt-2 flex items-center gap-2 text-[13px]">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
          <motion.div className="h-full bg-[#d4ba28]" animate={{ width: `${(filled / CURRENT_ROUND.length) * 100}%` }} />
        </div>
        <span className="font-bold text-[#d4ba28]">{filled}/{CURRENT_ROUND.length}</span>
      </div>

      <div className="mt-5 space-y-3">
        {CURRENT_ROUND.map((m, i) => {
          const home = teamById(m.home);
          const away = teamById(m.away);
          const sc = scores[m.id] || { h: "", a: "" };
          return (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
              className="card p-3.5"
            >
              <p className="mb-2.5 text-center text-[11px] text-white/40">{m.date} · {m.time} · {m.field}</p>
              <div className="flex items-center gap-3">
                <div className="flex flex-1 items-center gap-2">
                  <TeamBadge team={home} size={34} />
                  <span className="text-sm font-semibold">{home.name}</span>
                </div>
                <input
                  inputMode="numeric"
                  value={sc.h}
                  onChange={(e) => set(m.id, "h", e.target.value)}
                  placeholder="0"
                  className="h-11 w-12 rounded-xl border border-white/10 bg-white/5 text-center text-lg font-black text-white outline-none focus:border-[#d4ba28]"
                />
                <span className="text-white/30">–</span>
                <input
                  inputMode="numeric"
                  value={sc.a}
                  onChange={(e) => set(m.id, "a", e.target.value)}
                  placeholder="0"
                  className="h-11 w-12 rounded-xl border border-white/10 bg-white/5 text-center text-lg font-black text-white outline-none focus:border-[#d4ba28]"
                />
                <div className="flex flex-1 items-center justify-end gap-2">
                  <span className="text-sm font-semibold">{away.name}</span>
                  <TeamBadge team={away} size={34} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2800); }}
        className="mt-4 w-full rounded-2xl bg-[#d4ba28] py-3.5 text-sm font-bold text-black"
      >
        Publicar resultados y recalcular tabla
      </motion.button>

      <AnimatePresence>
        {saved && (
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-xl"
          >
            ✓ Resultados publicados · tabla actualizada
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
