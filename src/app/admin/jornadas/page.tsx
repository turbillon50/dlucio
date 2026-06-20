"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CURRENT_ROUND, TEAMS, teamById } from "@/lib/demo-data";
import { TeamBadge, Ico, StatusPill } from "@/components/ui";

export default function JornadasPage() {
  const [adding, setAdding] = useState(false);
  const [toast, setToast] = useState(false);

  return (
    <div className="px-4 pt-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black">Jornadas</h1>
          <p className="text-sm text-white/55">Gestiona los partidos de cada semana</p>
        </div>
        <button onClick={() => setAdding(true)} className="flex items-center gap-1.5 rounded-full bg-[#d4ba28] px-3.5 py-2 text-xs font-bold text-black">
          <Ico.plus size={15} /> Partido
        </button>
      </div>

      {/* Jornada selector */}
      <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {[12, 13, 14, 15].map((j) => (
          <button
            key={j}
            className="shrink-0 rounded-xl border px-4 py-2 text-sm font-bold transition"
            style={{
              borderColor: j === 14 ? "#d4ba28" : "rgba(255,255,255,0.1)",
              background: j === 14 ? "rgba(212,186,40,0.08)" : "transparent",
              color: j === 14 ? "#d4ba28" : "rgba(255,255,255,0.5)",
            }}
          >
            J{j} {j === 14 && "·  activa"}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-2.5">
        {CURRENT_ROUND.map((m, i) => {
          const home = teamById(m.home);
          const away = teamById(m.away);
          return (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
              className="card p-3.5"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] text-white/45">{m.date} · {m.time} · {m.field}</span>
                <StatusPill status={m.status} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TeamBadge team={home} size={32} />
                  <span className="text-sm font-semibold">{home.name}</span>
                </div>
                <span className="text-[11px] font-bold text-white/30">VS</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{away.name}</span>
                  <TeamBadge team={away} size={32} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Add match sheet */}
      <AnimatePresence>
        {adding && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setAdding(false)} className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="fixed bottom-0 left-1/2 z-50 w-full max-w-md -translate-x-1/2 rounded-t-3xl border-t border-white/10 bg-[#0d0b1a] p-5 pb-8"
            >
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/20" />
              <h3 className="text-lg font-black">Nuevo partido</h3>
              <div className="mt-4 space-y-3">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-white/45">Local</label>
                  <select className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm outline-none">
                    {TEAMS.map((t) => <option key={t.id} className="bg-[#0d0b1a]">{t.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-white/45">Visitante</label>
                  <select className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm outline-none">
                    {TEAMS.slice().reverse().map((t) => <option key={t.id} className="bg-[#0d0b1a]">{t.name}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-white/45">Fecha</label>
                    <input type="text" defaultValue="Sáb 5 Jul" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm outline-none" />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-white/45">Hora</label>
                    <input type="text" defaultValue="9:00" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm outline-none" />
                  </div>
                </div>
              </div>
              <button
                onClick={() => { setAdding(false); setToast(true); setTimeout(() => setToast(false), 2500); }}
                className="mt-5 w-full rounded-2xl bg-[#d4ba28] py-3.5 text-sm font-bold text-black"
              >
                Agregar partido
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="fixed bottom-24 left-1/2 z-[60] -translate-x-1/2 whitespace-nowrap rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-xl">
            ✓ Partido agregado a la Jornada 14
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
