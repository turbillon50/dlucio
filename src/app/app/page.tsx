"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CURRENT_ROUND, teamById, ME, POOL, LEADERBOARD } from "@/lib/demo-data";
import { TeamBadge, Ico, StatusPill } from "@/components/ui";

export default function UserHome() {
  const myRank = LEADERBOARD.findIndex((p) => p.id === ME.id) + 1;
  const picked = CURRENT_ROUND.filter((m) => m.pick).length;

  return (
    <div className="px-4 pt-6">
      {/* Header saludo */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-white/50">Hola de nuevo,</p>
          <h1 className="text-2xl font-black">{ME.name.split(" ")[0]} 👋</h1>
        </div>
        <Link href="/app/perfil">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#010173] to-[#24328a] text-sm font-bold ring-2 ring-[#d4ba28]/40">
            {ME.avatar}
          </div>
        </Link>
      </div>

      {/* Card de mi posición + bolsa */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="card mt-5 grid grid-cols-2 gap-px overflow-hidden"
      >
        <div className="p-4">
          <p className="text-[11px] uppercase tracking-wider text-white/45">Tu posición</p>
          <p className="mt-1 text-3xl font-black gold">#{myRank}</p>
          <p className="text-xs text-white/50">{ME.hits} aciertos</p>
        </div>
        <div className="border-l border-white/8 p-4">
          <p className="text-[11px] uppercase tracking-wider text-white/45">Bolsa actual</p>
          <p className="mt-1 text-3xl font-black chrome">${(POOL.total / 1000).toFixed(1)}k</p>
          <p className="text-xs text-white/50">{POOL.participants} jugando</p>
        </div>
      </motion.div>

      {/* Estado de mi quiniela */}
      <Link href="/app/quiniela">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          whileTap={{ scale: 0.98 }}
          className="card mt-3 flex items-center gap-4 p-4"
          style={{ borderColor: picked < CURRENT_ROUND.length ? "rgba(212,186,40,0.3)" : undefined }}
        >
          <div className="relative flex h-14 w-14 items-center justify-center">
            <svg className="absolute" width="56" height="56" viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
              <circle
                cx="28" cy="28" r="24" fill="none" stroke="#d4ba28" strokeWidth="4" strokeLinecap="round"
                strokeDasharray={`${(picked / CURRENT_ROUND.length) * 150.8} 150.8`}
                transform="rotate(-90 28 28)"
              />
            </svg>
            <span className="text-sm font-black">{picked}/{CURRENT_ROUND.length}</span>
          </div>
          <div className="flex-1">
            <p className="font-bold">Tu quiniela de la Jornada 14</p>
            <p className="text-[13px] text-white/55">
              {picked < CURRENT_ROUND.length ? `Te faltan ${CURRENT_ROUND.length - picked} pronósticos` : "¡Completa! Listo para la jornada"}
            </p>
          </div>
          <Ico.arrowUp size={18} className="rotate-90 text-white/30" />
        </motion.div>
      </Link>

      {/* Próximos partidos */}
      <div className="mt-7 flex items-center justify-between">
        <h2 className="text-lg font-bold">Jornada 14 · esta semana</h2>
        <span className="live-dot" />
      </div>

      <div className="mt-3 space-y-2.5">
        {CURRENT_ROUND.slice(0, 5).map((m, i) => {
          const home = teamById(m.home);
          const away = teamById(m.away);
          return (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="card p-3.5"
            >
              <div className="mb-2.5 flex items-center justify-between text-[11px] text-white/45">
                <span>{m.date} · {m.time}</span>
                <span>{m.field}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <TeamBadge team={home} size={36} />
                  <span className={`text-sm font-semibold ${m.pick === home.id ? "text-[#d4ba28]" : ""}`}>{home.name}</span>
                </div>
                <span className="text-[11px] font-bold text-white/30">VS</span>
                <div className="flex items-center gap-2.5">
                  <span className={`text-sm font-semibold ${m.pick === away.id ? "text-[#d4ba28]" : ""}`}>{away.name}</span>
                  <TeamBadge team={away} size={36} />
                </div>
              </div>
              {m.pick && (
                <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-[#d4ba28]">
                  <Ico.check size={13} /> Pronosticaste: {teamById(m.pick).name}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <Link href="/app/quiniela" className="mt-4 block rounded-2xl border border-[#d4ba28]/30 bg-[#d4ba28]/5 py-3 text-center text-sm font-bold text-[#d4ba28]">
        Completar mi quiniela →
      </Link>
    </div>
  );
}
