"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PHOTOS, teamById } from "@/lib/demo-data";
import { TeamBadge, Ico } from "@/components/ui";

export default function GaleriaPage() {
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setLiked((l) => ({ ...l, [id]: !l[id] }));

  return (
    <div className="px-4 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black">Galería</h1>
        <button className="flex items-center gap-1.5 rounded-full bg-[#d4ba28] px-3.5 py-2 text-xs font-bold text-black">
          <Ico.plus size={15} /> Subir foto
        </button>
      </div>
      <p className="mt-1 text-sm text-[var(--t2)]">Los mejores momentos de la liga, por la comunidad</p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {PHOTOS.map((p, i) => {
          const team = teamById(p.team);
          const isLiked = liked[p.id];
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="card overflow-hidden"
            >
              <div className="relative aspect-square" style={{ background: `linear-gradient(145deg, ${team.color}40, ${team.color}10)` }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <TeamBadge team={team} size={56} />
                </div>
                <div className="absolute bottom-2 left-2">
                  <Ico.camera size={16} className="text-[var(--t3)]" />
                </div>
              </div>
              <div className="p-3">
                <p className="text-[13px] font-medium leading-snug">{p.caption}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[var(--t2)]">{p.author}</span>
                  <button onClick={() => toggle(p.id)} className="flex items-center gap-1">
                    <Ico.heart size={15} className={isLiked ? "text-red-400" : "text-[var(--t3)]"} />
                    <span className="text-[11px] text-[var(--t2)]">{p.likes + (isLiked ? 1 : 0)}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
