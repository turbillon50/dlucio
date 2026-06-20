"use client";
import { motion } from "framer-motion";
import { LEADERBOARD, POOL } from "@/lib/demo-data";
import { Ico } from "@/components/ui";

export default function JugadoresPage() {
  return (
    <div className="px-4 pt-5">
      <h1 className="text-xl font-black">Jugadores</h1>
      <p className="mt-1 text-sm text-white/55">{POOL.participants} papás inscritos esta jornada</p>

      {/* Resumen pagos */}
      <div className="mt-4 grid grid-cols-3 gap-2.5">
        <div className="card p-3 text-center">
          <p className="text-xl font-black text-emerald-300">{POOL.participants}</p>
          <p className="text-[10px] text-white/45">Pagados</p>
        </div>
        <div className="card p-3 text-center">
          <p className="text-xl font-black text-amber-300">6</p>
          <p className="text-[10px] text-white/45">Pendientes</p>
        </div>
        <div className="card p-3 text-center">
          <p className="text-xl font-black gold">${(POOL.total / 1000).toFixed(1)}k</p>
          <p className="text-[10px] text-white/45">Recaudado</p>
        </div>
      </div>

      {/* Lista */}
      <div className="mt-5 space-y-2">
        {LEADERBOARD.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }}
            className="card flex items-center gap-3 p-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#010173] to-[#24328a] text-xs font-bold">
              {p.avatar}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">{p.name}</p>
              <p className="text-[11px] text-white/45">{p.hits} aciertos · {p.points} pts</p>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-bold text-emerald-300">
              Pagado
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
