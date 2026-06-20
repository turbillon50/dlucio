"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TEAMS, POOL, LEADERBOARD } from "@/lib/demo-data";
import { TeamBadge, Ico } from "@/components/ui";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: d },
});

export default function Home() {
  const top4 = [...TEAMS].slice(0, 4);
  return (
    <div className="relative z-10 mx-auto max-w-md pb-16">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/brand/cancha-noche.jpg" alt="" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/80 to-obsidian" />
        </div>

        <div className="relative px-5 pt-12 pb-8">
          <motion.div {...fade(0)} className="flex items-center gap-3">
            <Image src="/brand/logo-tm.jpg" alt="Liga TM" width={52} height={52} className="rounded-2xl ring-1 ring-white/15" />
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#d4ba28]">Liga Municipal de Tijuana</p>
              <p className="text-sm font-semibold text-white/80">Béisbol Infantil y Juvenil</p>
            </div>
          </motion.div>

          <motion.h1 {...fade(0.1)} className="mt-7 text-[40px] font-black leading-[0.95] tracking-tight">
            La quiniela <span className="gold">oficial</span> de la liga
          </motion.h1>
          <motion.p {...fade(0.18)} className="mt-3 text-[15px] leading-relaxed text-white/60">
            Apuéstale a tu equipo cada jornada. Suma aciertos, sube en la tabla y llévate la bolsa. Donde nacen los campeones. ⚾
          </motion.p>

          <motion.div {...fade(0.26)} className="mt-6 flex gap-3">
            <Link href="/registro" className="flex-1 rounded-2xl bg-[#d4ba28] px-5 py-3.5 text-center text-sm font-bold text-black shadow-lg shadow-[#d4ba28]/20">
              Crear cuenta gratis
            </Link>
            <Link href="/app" className="glass flex items-center rounded-2xl px-5 py-3.5 text-sm font-semibold text-white">
              Ver demo
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Bolsa actual */}
      <motion.div {...fade(0.32)} className="px-5">
        <div className="card relative overflow-hidden p-5">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#d4ba28]/10 blur-2xl" />
          <div className="flex items-center gap-2 text-[#d4ba28]">
            <Ico.trophy size={18} />
            <span className="text-xs font-semibold uppercase tracking-wider">Bolsa de esta jornada</span>
          </div>
          <p className="mt-2 text-4xl font-black chrome">${POOL.total.toLocaleString("es-MX")}</p>
          <div className="mt-3 flex items-center gap-4 text-[13px] text-white/55">
            <span>{POOL.participants} participantes</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span><b className="text-[#d4ba28]">70%</b> al ganador</span>
          </div>
        </div>
      </motion.div>

      {/* Cómo funciona */}
      <section className="mt-9 px-5">
        <h2 className="text-lg font-bold">¿Cómo funciona?</h2>
        <div className="mt-4 space-y-3">
          {[
            { n: "1", t: "Regístrate y entra a la quiniela", d: "Crea tu cuenta en segundos y paga tu inscripción de la jornada." },
            { n: "2", t: "Elige quién gana cada partido", d: "Antes del primer juego, marca tu equipo ganador en cada duelo." },
            { n: "3", t: "Suma aciertos y sube en la tabla", d: "Cada resultado correcto suma. El de más aciertos lidera." },
            { n: "4", t: "Gana la bolsa", d: "El 70% de lo recaudado es para quien acumule más aciertos." },
          ].map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="card flex gap-4 p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#010173] text-base font-black text-[#d4ba28] ring-1 ring-[#24328a]">
                {s.n}
              </div>
              <div>
                <p className="font-semibold leading-tight">{s.t}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-white/55">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Top equipos */}
      <section className="mt-9 px-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Líderes de la temporada</h2>
          <Link href="/app/tabla" className="text-xs font-semibold text-[#d4ba28]">Ver tabla →</Link>
        </div>
        <div className="mt-4 space-y-2.5">
          {top4.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card flex items-center gap-3 p-3"
            >
              <span className="w-5 text-center text-sm font-black text-white/40">{i + 1}</span>
              <TeamBadge team={t} size={38} />
              <span className="flex-1 font-semibold">{t.name}</span>
              <span className="text-sm font-bold text-emerald-300">{t.wins}<span className="text-white/30">-{t.losses}</span></span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="mt-10 px-5">
        <div className="card overflow-hidden p-6 text-center">
          <p className="text-xl font-black">¿Listo para jugar?</p>
          <p className="mt-1.5 text-sm text-white/55">Únete a {POOL.participants} papás que ya están en la quiniela de esta jornada.</p>
          <Link href="/registro" className="mt-4 inline-block rounded-2xl bg-[#d4ba28] px-7 py-3 text-sm font-bold text-black">
            Empezar ahora
          </Link>
        </div>
        <p className="mt-6 text-center text-[11px] leading-relaxed text-white/30">
          Liga de Béisbol Infantil y Juvenil Municipal de Tijuana A.C. · Fundada 1974<br />Quiniela operada por D&apos;Lucio
        </p>
      </section>
    </div>
  );
}
