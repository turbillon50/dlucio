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
    setTimeout(() => router.push("/app"), 600);
  };

  return (
    <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-md flex-col justify-center px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <Image src="/brand/logo-tm.jpg" alt="Liga TM" width={72} height={72} className="mx-auto rounded-2xl ring-1 ring-white/15" />
        <h1 className="mt-5 text-2xl font-black">Bienvenido de vuelta</h1>
        <p className="mt-1 text-sm text-white/55">Entra a tu quiniela</p>
      </motion.div>

      <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} onSubmit={enter} className="mt-8 space-y-3">
        <input type="email" required placeholder="correo@ejemplo.com" className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-sm outline-none focus:border-[#d4ba28]" />
        <input type="password" required placeholder="Contraseña" className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-sm outline-none focus:border-[#d4ba28]" />
        <button type="submit" disabled={loading} className="w-full rounded-2xl bg-[#d4ba28] py-4 text-sm font-bold text-black">
          {loading ? "Entrando…" : "Entrar"}
        </button>
      </motion.form>

      <div className="mt-4 flex items-center gap-3 text-[11px] text-white/30">
        <div className="h-px flex-1 bg-white/10" /> o continúa con <div className="h-px flex-1 bg-white/10" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button onClick={() => { setLoading(true); setTimeout(() => router.push("/app"), 500); }} className="glass rounded-2xl py-3 text-sm font-semibold">Google</button>
        <button onClick={() => { setLoading(true); setTimeout(() => router.push("/app"), 500); }} className="glass rounded-2xl py-3 text-sm font-semibold">Apple</button>
      </div>

      <p className="mt-6 text-center text-sm text-white/50">
        ¿No tienes cuenta? <Link href="/registro" className="font-bold text-[#d4ba28]">Regístrate</Link>
      </p>
    </div>
  );
}
