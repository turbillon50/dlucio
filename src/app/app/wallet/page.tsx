"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { POOL, MOVEMENTS } from "@/lib/demo-data";
import { Ico } from "@/components/ui";

export default function WalletPage() {
  const [sheet, setSheet] = useState(false);
  const [method, setMethod] = useState<"creditos" | "mp" | null>(null);
  const [toast, setToast] = useState("");

  const pay = (m: "creditos" | "mp") => {
    setSheet(false);
    setMethod(null);
    setToast(m === "mp" ? "Redirigiendo a Mercado Pago… (demo)" : "¡Recarga simulada con éxito! +$300");
    setTimeout(() => setToast(""), 2800);
  };

  return (
    <div className="px-4 pt-6">
      <h1 className="text-2xl font-black">Mi Bolsa</h1>

      {/* Balance card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="card relative mt-5 overflow-hidden p-6"
      >
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#010173]/40 blur-3xl" />
        <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-[#d4ba28]/8 blur-3xl" />
        <p className="relative text-[11px] uppercase tracking-wider text-[var(--t2)]">Saldo disponible</p>
        <p className="relative mt-1 text-5xl font-black chrome">${POOL.myBalance}</p>
        <div className="relative mt-4 flex items-center gap-2">
          <span className="rounded-full bg-[#d4ba28]/15 px-3 py-1 text-xs font-bold text-[var(--gold)]">
            {POOL.myCredits} jornadas pagadas
          </span>
        </div>
      </motion.div>

      {/* Recargar button */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setSheet(true)}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#d4ba28] py-3.5 text-sm font-bold text-black"
      >
        <Ico.plus size={18} /> Recargar saldo
      </motion.button>

      {/* Premio destacado */}
      <div className="card mt-4 flex items-center gap-3 p-4" style={{ borderColor: "rgba(46,224,106,0.2)" }}>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-[var(--pos)]">
          <Ico.trophy size={22} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold">Último premio cobrado</p>
          <p className="text-[12px] text-[var(--t2)]">3er lugar · Jornada 12</p>
        </div>
        <span className="text-lg font-black text-[var(--pos)]">+$1,240</span>
      </div>

      {/* Movimientos */}
      <h2 className="mt-7 text-lg font-bold">Movimientos</h2>
      <div className="mt-3 space-y-2">
        {MOVEMENTS.map((mv, i) => {
          const isPos = mv.amount > 0;
          return (
            <motion.div
              key={mv.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="card flex items-center gap-3 p-3.5"
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg text-sm"
                style={{
                  background: mv.type === "premio" ? "rgba(46,224,106,0.12)" : mv.type === "recarga" ? "rgba(212,186,40,0.12)" : "rgba(255,255,255,0.06)",
                  color: mv.type === "premio" ? "#5eead4" : mv.type === "recarga" ? "#d4ba28" : "#fff",
                }}
              >
                {mv.type === "premio" ? "🏆" : mv.type === "recarga" ? "↑" : "⚾"}
              </div>
              <div className="flex-1">
                <p className="text-[13px] font-semibold">{mv.desc}</p>
                <p className="text-[11px] text-[var(--t3)]">{mv.date} · {mv.method}</p>
              </div>
              <span className={`text-sm font-bold ${isPos ? "text-[var(--pos)]" : "text-[var(--t2)]"}`}>
                {isPos ? "+" : ""}${Math.abs(mv.amount).toLocaleString("es-MX")}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom sheet — payment methods (BOTH options visible) */}
      <AnimatePresence>
        {sheet && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSheet(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="fixed bottom-0 left-1/2 z-50 w-full max-w-md -translate-x-1/2 rounded-t-3xl border-t border-[var(--bd)] bg-[var(--srf2)] p-5 pb-8"
            >
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-[var(--hi2)]" />
              <h3 className="text-lg font-black">Recargar saldo</h3>
              <p className="mt-1 text-sm text-[var(--t2)]">Elige cómo quieres pagar tu inscripción</p>

              <div className="mt-5 space-y-3">
                {/* Opción A: Créditos */}
                <button
                  onClick={() => setMethod("creditos")}
                  className="flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition"
                  style={{ borderColor: method === "creditos" ? "#d4ba28" : "rgba(255,255,255,0.1)", background: method === "creditos" ? "rgba(212,186,40,0.06)" : "transparent" }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#010173] text-[var(--gold)]">
                    <Ico.wallet size={22} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold">Créditos / Transferencia</p>
                    <p className="text-[12px] text-[var(--t2)]">Deposita y el organizador acredita tu saldo</p>
                  </div>
                  {method === "creditos" && <Ico.check size={20} className="text-[var(--gold)]" />}
                </button>

                {/* Opción B: Mercado Pago */}
                <button
                  onClick={() => setMethod("mp")}
                  className="flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition"
                  style={{ borderColor: method === "mp" ? "#d4ba28" : "rgba(255,255,255,0.1)", background: method === "mp" ? "rgba(212,186,40,0.06)" : "transparent" }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00b1ea]/15 text-2xl">
                    💳
                  </div>
                  <div className="flex-1">
                    <p className="font-bold">Mercado Pago</p>
                    <p className="text-[12px] text-[var(--t2)]">Tarjeta, débito o saldo MP · al instante</p>
                  </div>
                  {method === "mp" && <Ico.check size={20} className="text-[var(--gold)]" />}
                </button>
              </div>

              <motion.button
                whileTap={{ scale: 0.97 }}
                disabled={!method}
                onClick={() => method && pay(method)}
                className="mt-5 w-full rounded-2xl py-3.5 text-sm font-bold transition"
                style={{ background: method ? "#d4ba28" : "rgba(255,255,255,0.06)", color: method ? "#000" : "rgba(255,255,255,0.4)" }}
              >
                {method ? "Continuar" : "Selecciona un método"}
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="fixed bottom-24 left-1/2 z-[60] -translate-x-1/2 whitespace-nowrap rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-bold text-[var(--t1)] shadow-xl"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
