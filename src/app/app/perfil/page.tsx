"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ME, LEADERBOARD, POOL } from "@/lib/demo-data";
import { Ico } from "@/components/ui";

function Counter({ to, dur = 1 }: { to: number; dur?: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0; const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / (dur * 1000), 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, dur]);
  return <>{n}</>;
}

export default function PerfilPage() {
  const rank = LEADERBOARD.findIndex((p) => p.id === ME.id) + 1;
  const acc = Math.round((ME.hits / ME.total) * 100);

  const badges = [
    { icon: "🔥", label: "Racha de 5", on: true },
    { icon: "🎯", label: "80% aciertos", on: true },
    { icon: "🏆", label: "Top 3", on: true },
    { icon: "⚾", label: "Temporada full", on: true },
    { icon: "💎", label: "Sin fallar jornada", on: false },
    { icon: "👑", label: "1er lugar", on: false },
  ];

  return (
    <div className="pb-6">
      {/* Hero trading card */}
      <div className="relative overflow-hidden px-4 pt-6">
        <div className="card relative overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/brand/cancha-noche.jpg" alt="" fill className="object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#010173]/30 via-obsidian/70 to-obsidian" />
          </div>
          <div className="relative p-6">
            <div className="flex items-start justify-between">
              <span className="rounded-full bg-[#d4ba28]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#d4ba28]">
                Jugador · Jornada 14
              </span>
              <Link href="/app/perfil" className="text-white/40">
                <Ico.shield size={20} />
              </Link>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#010173] to-[#24328a] text-2xl font-black ring-4 ring-[#d4ba28]/40">
                  {ME.avatar}
                </div>
                <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#d4ba28] text-xs font-black text-black">
                  #{rank}
                </div>
              </motion.div>
              <div>
                <h1 className="text-2xl font-black leading-tight">{ME.name}</h1>
                <p className="text-sm text-white/50">Tijuana, B.C.</p>
                <div className="mt-1.5 flex items-center gap-1.5 text-[#d4ba28]">
                  <Ico.fire size={14} /><span className="text-xs font-bold">Racha de 5 jornadas</span>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/8">
              <div className="bg-white/[0.03] p-3 text-center">
                <p className="text-2xl font-black gold"><Counter to={ME.points} /></p>
                <p className="text-[10px] uppercase tracking-wide text-white/45">Puntos</p>
              </div>
              <div className="bg-white/[0.03] p-3 text-center">
                <p className="text-2xl font-black"><Counter to={ME.hits} /></p>
                <p className="text-[10px] uppercase tracking-wide text-white/45">Aciertos</p>
              </div>
              <div className="bg-white/[0.03] p-3 text-center">
                <p className="text-2xl font-black text-emerald-300"><Counter to={acc} />%</p>
                <p className="text-[10px] uppercase tracking-wide text-white/45">Efectividad</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logros */}
      <div className="mt-6 px-4">
        <h2 className="text-lg font-bold">Logros</h2>
        <div className="mt-3 grid grid-cols-3 gap-2.5">
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06 }}
              className="card flex flex-col items-center gap-1.5 p-3 text-center"
              style={{ opacity: b.on ? 1 : 0.35 }}
            >
              <span className="text-2xl" style={{ filter: b.on ? "none" : "grayscale(1)" }}>{b.icon}</span>
              <span className="text-[10px] font-semibold leading-tight text-white/70">{b.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Acceso rápido */}
      <div className="mt-6 space-y-2 px-4">
        <Link href="/app/galeria" className="card flex items-center gap-3 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#010173] text-[#d4ba28]"><Ico.camera size={20} /></div>
          <span className="flex-1 font-semibold">Galería de fotos</span>
          <Ico.arrowUp size={16} className="rotate-90 text-white/30" />
        </Link>
        <Link href="/app/wallet" className="card flex items-center gap-3 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#010173] text-[#d4ba28]"><Ico.wallet size={20} /></div>
          <span className="flex-1 font-semibold">Mi bolsa</span>
          <span className="text-sm font-bold chrome">${POOL.myBalance}</span>
        </Link>
      </div>

      <div className="mt-6 px-4">
        <Link href="/" className="block rounded-2xl border border-white/10 py-3 text-center text-sm font-semibold text-white/50">
          Cerrar sesión
        </Link>
      </div>
    </div>
  );
}
