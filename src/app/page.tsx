"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TEAMS, POOL, LEADERBOARD, PHOTOS, teamById } from "@/lib/demo-data";
import { TeamBadge } from "@/components/ui";
import { Splash } from "@/components/splash";

const up = (d = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay: d },
});

export default function Landing() {
  const top5 = [...TEAMS].slice(0, 5);
  return (
    <div className="light relative z-10 mx-auto max-w-md pb-28">
      <Splash />

      {/* Top bar */}
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-black/5 bg-[#f5f5f4]/85 px-5 py-3 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <Image src="/brand/logo-dlucio.jpg" alt="D'Lucio" width={30} height={30} className="rounded-lg" />
          <span className="text-[15px] font-black tracking-tight chrome-d">D&apos;LUCIO</span>
        </div>
        <Link href="/entrar" className="text-sm font-semibold text-[#1a1a24]">Entrar</Link>
      </div>

      {/* Hero — bright, open */}
      <header className="px-5 pt-6">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#010173]/8 px-3 py-1.5">
            <Image src="/brand/logo-tm.jpg" alt="" width={18} height={18} className="rounded" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#010173]">Liga Municipal de Tijuana</span>
          </div>
          <h1 className="mt-4 text-[38px] font-black leading-[1.02] tracking-tight text-[#1a1a24]">
            Apóyale a tu equipo.<br /><span className="text-[#010173]">Gánate la bolsa.</span>
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-[#6b6f76]">
            La quiniela oficial del béisbol infantil de Tijuana. Vive cada jornada con los papás de la liga. ⚾
          </p>
        </motion.div>

        {/* Hero photo card */}
        <motion.div {...up(0.1)} className="relative mt-5 overflow-hidden rounded-[26px] shadow-xl">
          <Image src="/brand/cancha-noche.jpg" alt="Cancha" width={800} height={500} className="h-56 w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-white/70">Bolsa de esta jornada</p>
              <p className="text-4xl font-black text-white">${POOL.total.toLocaleString("es-MX")}</p>
            </div>
            <div className="rounded-full bg-white/95 px-3 py-1.5 text-[12px] font-bold text-[#010173]">
              {POOL.participants} jugando
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div {...up(0.16)} className="mt-5 flex gap-3">
          <Link href="/registro" className="flex-1 rounded-2xl bg-[#010173] px-5 py-4 text-center text-sm font-bold text-white shadow-lg shadow-[#010173]/20">
            Crear cuenta gratis
          </Link>
          <Link href="/app" className="lsoft flex items-center rounded-2xl px-5 py-4 text-sm font-bold text-[#1a1a24]">
            Ver demo
          </Link>
        </motion.div>
      </header>

      {/* Cómo funciona */}
      <section className="mt-11 px-5">
        <h2 className="text-[22px] font-black tracking-tight text-[#1a1a24]">Así de fácil se juega</h2>
        <div className="mt-5 space-y-3">
          {[
            { n: "1", t: "Crea tu cuenta", d: "Regístrate gratis en segundos y entra a la jornada.", e: "👤" },
            { n: "2", t: "Pronostica los partidos", d: "Marca quién gana cada duelo antes del primer juego.", e: "🎯" },
            { n: "3", t: "Suma aciertos", d: "Cada resultado correcto te sube en la tabla.", e: "📈" },
            { n: "4", t: "Cobra la bolsa", d: "El de más aciertos se lleva el 70% de lo acumulado.", e: "🏆" },
          ].map((s, i) => (
            <motion.div key={s.n} {...up(i * 0.05)} className="lcard flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#010173]/6 text-xl">{s.e}</div>
              <div className="flex-1">
                <p className="font-bold text-[#1a1a24]">{s.t}</p>
                <p className="mt-0.5 text-[13px] leading-relaxed text-[#6b6f76]">{s.d}</p>
              </div>
              <span className="text-2xl font-black text-black/8">{s.n}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Equipos de la liga — browsable horizontal scroll (SEE EVERYTHING) */}
      <section className="mt-11">
        <div className="flex items-center justify-between px-5">
          <h2 className="text-[22px] font-black tracking-tight text-[#1a1a24]">Los 24 equipos</h2>
          <span className="text-[13px] font-semibold text-[#010173]">Temporada 2026</span>
        </div>
        <p className="mt-1 px-5 text-[13px] text-[#6b6f76]">Conoce a todos los equipos de la liga</p>
        <div className="mt-4 flex gap-3 overflow-x-auto no-scrollbar px-5 pb-2">
          {TEAMS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.03, 0.3) }}
              className="lsoft flex w-[120px] shrink-0 flex-col items-center gap-2 p-4"
            >
              <TeamBadge team={t} size={48} />
              <p className="text-center text-[13px] font-bold leading-tight text-[#1a1a24]">{t.name}</p>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
                {t.wins}-{t.losses}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Líderes */}
      <section className="mt-11 px-5">
        <h2 className="text-[22px] font-black tracking-tight text-[#1a1a24]">Líderes de la quiniela</h2>
        <p className="mt-1 text-[13px] text-[#6b6f76]">Los papás con más aciertos esta temporada</p>
        <div className="mt-4 space-y-2.5">
          {LEADERBOARD.slice(0, 5).map((p, i) => (
            <motion.div key={p.id} {...up(i * 0.05)} className="lsoft flex items-center gap-3 p-3.5">
              <span className={`w-6 text-center text-base font-black ${i === 0 ? "text-[#c9a227]" : "text-black/25"}`}>{i + 1}</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#010173] text-xs font-bold text-white">{p.avatar}</div>
              <div className="flex-1">
                <p className="text-sm font-bold text-[#1a1a24]">{p.name}</p>
                <p className="text-[12px] text-[#6b6f76]">{p.hits} aciertos</p>
              </div>
              {i === 0 && <span className="text-lg">👑</span>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Galería preview */}
      <section className="mt-11 px-5">
        <h2 className="text-[22px] font-black tracking-tight text-[#1a1a24]">Momentos de la liga</h2>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {PHOTOS.slice(0, 6).map((ph, i) => {
            const team = teamById(ph.team);
            return (
              <motion.div
                key={ph.id}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex aspect-square items-center justify-center rounded-2xl"
                style={{ background: `linear-gradient(145deg, ${team.color}22, ${team.color}0a)` }}
              >
                <TeamBadge team={team} size={36} />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Trust footer */}
      <section className="mt-12 px-5">
        <div className="lcard p-6 text-center">
          <Image src="/brand/logo-tm.jpg" alt="" width={48} height={48} className="mx-auto rounded-xl" />
          <p className="mt-3 text-[15px] font-black text-[#1a1a24]">Liga de Béisbol Infantil y Juvenil<br />Municipal de Tijuana A.C.</p>
          <p className="mt-1 text-[12px] text-[#6b6f76]">Fundada en 1974 · &ldquo;Donde nacen los campeones&rdquo;</p>
          <p className="mt-4 text-[11px] uppercase tracking-wider text-black/30">Quiniela operada por D&apos;Lucio</p>
        </div>
      </section>

      {/* Sticky bottom CTA */}
      <motion.div
        initial={{ y: 80 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "spring", damping: 22 }}
        className="fixed bottom-0 left-1/2 z-40 w-full max-w-md -translate-x-1/2 border-t border-black/5 bg-[#f5f5f4]/90 p-4 backdrop-blur-xl"
      >
        <Link href="/registro" className="block rounded-2xl bg-[#010173] py-4 text-center text-sm font-bold text-white shadow-lg shadow-[#010173]/25">
          Empezar a jugar — gratis
        </Link>
      </motion.div>
    </div>
  );
}
