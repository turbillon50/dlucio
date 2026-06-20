"use client";
import { useTheme } from "@/lib/theme";
import { motion } from "framer-motion";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      onClick={toggle}
      aria-label="Cambiar tema"
      className={`relative flex h-9 w-9 items-center justify-center rounded-full border transition ${
        dark ? "border-white/12 bg-white/[0.06]" : "border-black/10 bg-black/[0.03]"
      } ${className}`}
    >
      <motion.span
        key={theme}
        initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.25 }}
        className="text-[15px]"
      >
        {dark ? (
          /* moon */
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" fill="#e0c24a" />
          </svg>
        ) : (
          /* sun */
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9c7a12" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="4" fill="#9c7a12" stroke="none" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        )}
      </motion.span>
    </button>
  );
}
