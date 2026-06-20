"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CURRENT_ROUND, teamById, POOL } from "@/lib/demo-data";
import { TeamBadge, Ico } from "@/components/ui";

export default function QuinielaPage() {
  const [picks, setPicks] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    CURRENT_ROUND.forEach((m) => { if (m.pick) init[m.id] = m.pick; });
    return init;
  });
  const [toast, setToast] = useState(false);

  const setPick = (matchId: string, teamId: string) => {
    setPicks((p) => ({ ...p, [matchId]: teamId }));
  };

  const done = Object.keys(picks).length;
  const total = CURRENT_ROUND.length;
  const complete = done === total;

  return (
    <div className="px-4 pt-6">
      <h1 className="text-2xl font-black">Mi Quiniela</h1>
      <p className="mt-1 text-sm text-[var(--t2)]">Jornada 14 · elige al ganador de cada duelo</p>

      {/* Progress bar */}
      <div className="mt-4 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-[var(--hi)]">
          <motion.div
            className="h-full rounded-full bg-[#d4ba28]"
            animate={{ width: `${(done / total) * 100}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          />
        </div>
        <span className="text-sm font-bold text-[var(--gold)]">{done}/{total}</span>
      </div>

      {/* Matches */}
      <div className="mt-5 space-y-3">
        {CURRENT_ROUND.map((m, i) => {
          const home = teamById(m.home);
          const away = teamById(m.away);
          const pick = picks[m.id];
          return (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="card p-3"
            >
              <div className="mb-2 text-center text-[11px] text-[var(--t3)]">{m.date} · {m.time} · {m.field}</div>
              <div className="grid grid-cols-2 gap-2">
                {[home, away].map((team) => {
                  const sel = pick === team.id;
                  return (
                    <button
                      key={team.id}
                      onClick={() => setPick(m.id, team.id)}
                      className="relative rounded-xl border p-3 transition"
                      style={{
                        borderColor: sel ? "#d4ba28" : "rgba(255,255,255,0.08)",
                        background: sel ? "rgba(212,186,40,0.08)" : "transparent",
                      }}
                    >
                      {sel && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#d4ba28] text-black"
                        >
                          <Ico.check size={13} />
                        </motion.div>
                      )}
                      <div className="flex flex-col items-center gap-2">
                        <TeamBadge team={team} size={44} />
                        <span className={`text-[13px] font-semibold ${sel ? "text-[var(--gold)]" : "text-[var(--t1)]"}`}>
                          {team.name}
                        </span>
                        <span className="text-[10px] text-[var(--t3)]">{team.wins}-{team.losses}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Inscripción / pago */}
      <div className="card mt-5 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-[var(--t2)]">Inscripción de la jornada</span>
          <span className="text-lg font-black">${POOL.entryFee}</span>
        </div>
        <p className="mt-1 text-[11px] text-[var(--t3)]">Ya cubierta con tus créditos · {POOL.myCredits} jornadas restantes</p>
      </div>

      <motion.button
        whileTap={{ scale: 0.97 }}
        disabled={!complete}
        onClick={() => { setToast(true); setTimeout(() => setToast(false), 2600); }}
        className="mt-4 w-full rounded-2xl py-3.5 text-sm font-bold transition"
        style={{
          background: complete ? "#d4ba28" : "rgba(255,255,255,0.06)",
          color: complete ? "#000" : "rgba(255,255,255,0.4)",
        }}
      >
        {complete ? "Confirmar mi quiniela" : `Faltan ${total - done} pronósticos`}
      </motion.button>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-bold text-[var(--t1)] shadow-xl"
          >
            ✓ ¡Quiniela confirmada! Mucha suerte ⚾
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
