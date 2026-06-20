"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { TEAMS, LEADERBOARD, ME } from "@/lib/demo-data";
import { TeamBadge, Ico } from "@/components/ui";

export default function TablaPage() {
  const [tab, setTab] = useState<"equipos" | "jugadores">("equipos");

  return (
    <div className="px-4 pt-6">
      <h1 className="text-2xl font-black">Tabla</h1>

      {/* Tabs */}
      <div className="mt-4 flex gap-1 rounded-2xl bg-white/5 p-1">
        {([["equipos", "Equipos"], ["jugadores", "Jugadores"]] as const).map(([k, label]) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className="relative flex-1 rounded-xl py-2.5 text-sm font-semibold transition"
          >
            {tab === k && (
              <motion.span layoutId="tabbg" className="absolute inset-0 rounded-xl bg-[#010173] ring-1 ring-[#24328a]" />
            )}
            <span className={`relative ${tab === k ? "text-[#d4ba28]" : "text-white/50"}`}>{label}</span>
          </button>
        ))}
      </div>

      {tab === "equipos" ? (
        <div className="mt-4">
          <div className="mb-2 flex items-center gap-2 px-3 text-[10px] uppercase tracking-wider text-white/35">
            <span className="w-5">#</span>
            <span className="flex-1">Equipo</span>
            <span className="w-10 text-center">G</span>
            <span className="w-10 text-center">P</span>
            <span className="w-12 text-center">PCT</span>
          </div>
          <div className="space-y-1.5">
            {TEAMS.map((t, i) => {
              const pct = (t.wins / (t.wins + t.losses || 1)).toFixed(3).replace("0.", ".");
              const playoff = i < 8;
              return (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: Math.min(i * 0.02, 0.4) }}
                  className="card flex items-center gap-2 px-3 py-2.5"
                  style={{ borderColor: playoff ? "rgba(212,186,40,0.18)" : undefined }}
                >
                  <span className={`w-5 text-center text-sm font-black ${playoff ? "text-[#d4ba28]" : "text-white/35"}`}>
                    {i + 1}
                  </span>
                  <TeamBadge team={t} size={32} />
                  <span className="flex-1 truncate text-sm font-semibold">{t.name}</span>
                  <span className="w-10 text-center text-sm font-bold text-emerald-300">{t.wins}</span>
                  <span className="w-10 text-center text-sm text-white/50">{t.losses}</span>
                  <span className="w-12 text-center text-xs font-mono text-white/60">{pct}</span>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-3 flex items-center gap-2 px-2 text-[11px] text-white/40">
            <span className="h-2 w-2 rounded-full bg-[#d4ba28]/40" />
            Los primeros 8 avanzan a playoffs
          </div>
        </div>
      ) : (
        <div className="mt-4 space-y-1.5">
          {LEADERBOARD.map((p, i) => {
            const isMe = p.id === ME.id;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                className="card flex items-center gap-3 px-3 py-2.5"
                style={{ borderColor: isMe ? "rgba(212,186,40,0.4)" : undefined, background: isMe ? "rgba(212,186,40,0.05)" : undefined }}
              >
                <span className={`w-5 text-center text-sm font-black ${i < 3 ? "text-[#d4ba28]" : "text-white/35"}`}>
                  {i + 1}
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#010173] to-[#24328a] text-xs font-bold">
                  {p.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">{p.name}{isMe && <span className="ml-1.5 text-[10px] text-[#d4ba28]">(tú)</span>}</p>
                  <p className="text-[11px] text-white/45">{p.hits} aciertos de {p.total}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-black gold">{p.points}</span>
                  {p.trend === "up" && <Ico.arrowUp size={14} className="text-emerald-400" />}
                  {p.trend === "down" && <Ico.arrowDown size={14} className="text-red-400" />}
                  {p.trend === "same" && <span className="text-white/30">–</span>}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
