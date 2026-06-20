"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { POOL } from "@/lib/demo-data";

export default function RegistroPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const register = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push("/app"), 800);
  };

  return (
    <div className="light relative z-10 mx-auto min-h-[100dvh] max-w-md px-6 pb-10">
      {/* Header */}
      <div className="flex items-center justify-between py-4">
        <Link href="/" className="text-sm font-semibold text-[#6b6f76]">← Volver</Link>
        <Image src="/brand/logo-dlucio.jpg" alt="" width={30} height={30} className="rounded-lg" />
      </div>

      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
        <h1 className="text-[30px] font-black leading-tight tracking-tight text-[#1a1a24]">Crea tu cuenta</h1>
        <p className="mt-2 text-[15px] text-[#6b6f76]">
          Únete a {POOL.participants} papás que ya están jugando la jornada. Aquí empieza lo bueno. ⚾
        </p>
      </motion.div>

      {/* Hook card */}
      <motion.div
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
        className="lcard mt-5 flex items-center gap-3 p-4"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c9a227]/12 text-xl">🏆</div>
        <div>
          <p className="text-sm font-bold text-[#1a1a24]">Bolsa actual: ${POOL.total.toLocaleString("es-MX")}</p>
          <p className="text-[12px] text-[#6b6f76]">70% para el ganador de la jornada</p>
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}
        onSubmit={register} className="mt-6 space-y-3"
      >
        {[
          { ph: "Nombre completo", type: "text" },
          { ph: "correo@ejemplo.com", type: "email" },
          { ph: "WhatsApp", type: "tel" },
          { ph: "Contraseña", type: "password" },
        ].map((f) => (
          <input
            key={f.ph}
            type={f.type}
            required={f.type !== "tel"}
            placeholder={f.ph}
            className="w-full rounded-2xl border border-black/10 bg-white p-4 text-sm text-[#1a1a24] outline-none transition focus:border-[#010173]"
          />
        ))}
        <button type="submit" disabled={loading} className="w-full rounded-2xl bg-[#010173] py-4 text-sm font-bold text-white shadow-lg shadow-[#010173]/20">
          {loading ? "Creando tu cuenta…" : "Crear cuenta y entrar"}
        </button>
      </motion.form>

      <div className="my-5 flex items-center gap-3 text-[12px] text-[#6b6f76]">
        <div className="h-px flex-1 bg-black/8" /> o continúa con <div className="h-px flex-1 bg-black/8" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {["Google", "Apple"].map((p) => (
          <button key={p} onClick={() => { setLoading(true); setTimeout(() => router.push("/app"), 600); }} className="lsoft rounded-2xl py-3.5 text-sm font-bold text-[#1a1a24]">{p}</button>
        ))}
      </div>

      <p className="mt-7 text-center text-sm text-[#6b6f76]">
        ¿Ya tienes cuenta? <Link href="/entrar" className="font-bold text-[#010173]">Entra aquí</Link>
      </p>
    </div>
  );
}
