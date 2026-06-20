"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Splash() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show once per session for a clean demo
    const seen = typeof window !== "undefined" && window.sessionStorage.getItem("tm-splash");
    if (!seen) {
      setShow(true);
      window.sessionStorage.setItem("tm-splash", "1");
      const t = setTimeout(() => setShow(false), 2400);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        >
          <motion.div
            initial={{ scale: 0.82, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <Image
              src="/brand/logo-dlucio.jpg"
              alt="D'Lucio"
              width={260}
              height={300}
              priority
              className="w-[230px] object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 flex flex-col items-center"
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-white/40">Quiniela Deportiva</p>
            <div className="mt-5 h-[3px] w-32 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 0.4, duration: 1.6, ease: "easeInOut" }}
                className="h-full w-full"
                style={{ background: "linear-gradient(90deg, transparent, #d62828, #c4c7cf)" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
