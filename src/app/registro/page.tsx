"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function RegistroPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const register = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push("/app"), 700);
  };

  return (
    <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-md flex-col justify-center px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <Image src="/brand/logo-tm.jpg" alt="Liga TM" width={72} height={72} className="mx-auto rounded-2xl ring-1 ring-white/15" />
        <h1 className="mt-5 text-2xl font-black">Crea tu cuenta</h1>
        <p className="mt-1 text-sm text-white/55">Únete a la quiniela oficial de la liga</p>
      </motion.div>

      <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} onSubmit={register} className="mt-8 space-y-3">
        <input type="text" required placeholder="Nombre completo" className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-sm outline-none focus:border-[#d4ba28]" />
        <input type="email" required placeholder="correo@ejemplo.com" className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-sm outline-none focus:border-[#d4ba28]" />
        <input type="tel" placeholder="WhatsApp (opcional)" className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-sm outline-none focus:border-[#d4ba28]" />
        <input type="password" required placeholder="Contraseña" className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-sm outline-none focus:border-[#d4ba28]" />
        <button type="submit" disabled={loading} className="w-full rounded-2xl bg-[#d4ba28] py-4 text-sm font-bold text-black">
          {loading ? "Creando cuenta…" : "Crear cuenta gratis"}
        </button>
      </motion.form>

      <p className="mt-6 text-center text-sm text-white/50">
        ¿Ya tienes cuenta? <Link href="/entrar" className="font-bold text-[#d4ba28]">Entra aquí</Link>
      </p>
    </div>
  );
}
