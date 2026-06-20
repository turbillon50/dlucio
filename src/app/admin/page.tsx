"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ADMIN_KPIS, POOL, CURRENT_ROUND, teamById } from "@/lib/demo-data";
import { Ico } from "@/components/ui";

export default function AdminHome() {
  const kpis = [
    { label: "Jugadores activos", value: ADMIN_KPIS.jugadoresActivos, sub: "esta jornada", color: "#d4ba28" },
    { label: "Bolsa actual", value: `$${ADMIN_KPIS.bolsaActual.toLocaleString("es-MX")}`, sub: "por repartir", color: "#5eead4" },
    { label: "Recaudado", value: `$${(ADMIN_KPIS.recaudadoTemporada / 1000).toFixed(0)}k`, sub: "temporada", color: "#7cc4ff" },
    { label: "Premios pagados", value: `$${(99750 / 1000).toFixed(0)}k`, sub: "temporada", color: "#ff9b7c" },
  ];

  return (
    <div className="px-4 pt-5">
      {/* KPIs */}
      <div className="grid grid-cols-2 gap-3">
        {kpis.map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="card p-4"
          >
            <p className="text-2xl font-black" style={{ color: k.color }}>{k.value}</p>
            <p className="mt-0.5 text-[13px] font-semibold text-[var(--t1)]">{k.label}</p>
            <p className="text-[11px] text-[var(--t3)]">{k.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Acción principal: subir resultados */}
      <Link href="/admin/resultados">
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          whileTap={{ scale: 0.98 }}
          className="card mt-4 flex items-center gap-4 p-4"
          style={{ borderColor: "rgba(212,186,40,0.3)", background: "rgba(212,186,40,0.04)" }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d4ba28] text-black">
            <Ico.whistle size={24} />
          </div>
          <div className="flex-1">
            <p className="font-bold">Capturar resultados</p>
            <p className="text-[13px] text-[var(--t2)]">{ADMIN_KPIS.partidosPorCerrar} partidos de la Jornada 14 por cerrar</p>
          </div>
          <Ico.arrowUp size={18} className="rotate-90 text-[var(--gold)]" />
        </motion.div>
      </Link>

      {/* Distribución de la bolsa */}
      <div className="card mt-4 p-4">
        <p className="text-sm font-bold">Distribución de la bolsa</p>
        <div className="mt-3 flex h-7 overflow-hidden rounded-lg">
          <div className="flex items-center justify-center bg-[#d4ba28] text-[11px] font-black text-black" style={{ width: "70%" }}>
            70% Ganador
          </div>
          <div className="flex items-center justify-center bg-[#010173] text-[11px] font-bold text-[var(--t1)]" style={{ width: "30%" }}>
            30% Casa
          </div>
        </div>
        <div className="mt-3 flex justify-between text-[13px]">
          <div>
            <p className="text-[var(--t2)]">Al ganador</p>
            <p className="font-black text-[var(--gold)]">${Math.round(POOL.total * 0.7).toLocaleString("es-MX")}</p>
          </div>
          <div className="text-right">
            <p className="text-[var(--t2)]">Para la casa</p>
            <p className="font-black chrome">${Math.round(POOL.total * 0.3).toLocaleString("es-MX")}</p>
          </div>
        </div>
      </div>

      {/* Jornada actual quick view */}
      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-lg font-bold">Jornada 14 en curso</h2>
        <Link href="/admin/jornadas" className="text-xs font-semibold text-[var(--gold)]">Gestionar →</Link>
      </div>
      <div className="mt-3 space-y-2">
        {CURRENT_ROUND.slice(0, 4).map((m) => (
          <div key={m.id} className="card flex items-center justify-between p-3 text-sm">
            <span className="font-medium">{teamById(m.home).name} <span className="text-[var(--t3)]">vs</span> {teamById(m.away).name}</span>
            <span className="text-[11px] text-[var(--t3)]">{m.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
