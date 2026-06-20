"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EntrarPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const enter = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push("/app"), 700);
  };

  return (
    <div className="light relative z-10 mx-auto flex min-h-[100dvh] max-w-md flex-col px-6 pb-10">
      <div className="flex items-center justify-between py-4">
        <Link href="/" className="text-sm font-semibold text-[#6b6f76]">← Volver</Link>
        <Image src="/brand/logo-dlucio.jpg" alt="" width={30} height={30} className="rounded-lg" />
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <Image src="/brand/logo-tm.jpg" alt="Liga TM" width={68} height={68} className="mx-auto rounded-2xl shadow-md" />
          <h1 className="mt-5 text-[28px] font-black tracking-tight text-[#1a1a24]">Bienvenido de vuelta</h1>
          <p className="mt-1.5 text-[15px] text-[#6b6f76]">Entra a tu quiniela</p>
        </motion.div>

        <motion.form initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} onSubmit={enter} className="mt-8 space-y-3">
          <input type="email" required placeholder="correo@ejemplo.com" className="w-full rounded-2xl border border-black/10 bg-white p-4 text-sm text-[#1a1a24] outline-none focus:border-[#010173]" />
          <input type="password" required placeholder="Contraseña" className="w-full rounded-2xl border border-black/10 bg-white p-4 text-sm text-[#1a1a24] outline-none focus:border-[#010173]" />
          <button type="submit" disabled={loading} className="w-full rounded-2xl bg-[#010173] py-4 text-sm font-bold text-white shadow-lg shadow-[#010173]/20">
            {loading ? "Entrando…" : "Entrar"}
          </button>
        </motion.form>

        <div className="my-5 flex items-center gap-3 text-[12px] text-[#6b6f76]">
          <div className="h-px flex-1 bg-black/8" /> o <div className="h-px flex-1 bg-black/8" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {["Google", "Apple"].map((p) => (
            <button key={p} onClick={() => { setLoading(true); setTimeout(() => router.push("/app"), 600); }} className="lsoft rounded-2xl py-3.5 text-sm font-bold text-[#1a1a24]">{p}</button>
          ))}
        </div>

        <p className="mt-7 text-center text-sm text-[#6b6f76]">
          ¿No tienes cuenta? <Link href="/registro" className="font-bold text-[#010173]">Regístrate</Link>
        </p>
      </div>
    </div>
  );
}
