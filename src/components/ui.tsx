"use client";
import { Team } from "@/lib/demo-data";

// Team monogram badge — inline SVG, no external icons
export function TeamBadge({ team, size = 40 }: { team: Team; size?: number }) {
  return (
    <div
      className="relative flex items-center justify-center rounded-full font-bold shrink-0"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.34,
        background: `linear-gradient(145deg, ${team.color}, ${team.color}99)`,
        color: "#fff",
        boxShadow: `inset 0 1px 1px rgba(255,255,255,0.25), 0 2px 6px ${team.color}55`,
        border: "1.5px solid rgba(255,255,255,0.18)",
      }}
    >
      {team.abbr.slice(0, 3)}
    </div>
  );
}

// ---- Inline SVG icon set (NO lucide) ----
type IconProps = { size?: number; className?: string };

export const Ico = {
  home: ({ size = 24, className }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 10.5 12 3l9 7.5M5 9.5V20h5v-6h4v6h5V9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ticket: ({ size = 24, className }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2 2 2 0 0 0 0-4Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 6v12" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2 3" />
    </svg>
  ),
  table: ({ size = 24, className }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 9h18M3 14h18M9 4v16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  wallet: ({ size = 24, className }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 8a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="3" y="6" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.5" cy="12.5" r="1.5" fill="currentColor" />
    </svg>
  ),
  user: ({ size = 24, className }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  camera: ({ size = 24, className }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 9a2 2 0 0 1 2-2h2l1.2-2h7.6L20 7h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9Z" stroke="currentColor" strokeWidth="1.7" transform="translate(-1 0)" />
      <circle cx="12" cy="13" r="3.4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  ),
  trophy: ({ size = 24, className }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M17 5h2.5a1.5 1.5 0 0 1 0 5H17M7 5H4.5a1.5 1.5 0 0 0 0 5H7M9 14v3h6v-3M8 21h8M10 17h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  check: ({ size = 24, className }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  x: ({ size = 24, className }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
  arrowUp: ({ size = 24, className }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 19V5M6 11l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  arrowDown: ({ size = 24, className }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  plus: ({ size = 24, className }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
  heart: ({ size = 24, className }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21s-7.5-4.6-10-9.3C.4 8.4 2 4.8 5.4 4.8c2 0 3.3 1.1 4.1 2.3l.5.8.5-.8c.8-1.2 2.1-2.3 4.1-2.3 3.4 0 5 3.6 3.4 6.9C19.5 16.4 12 21 12 21Z" />
    </svg>
  ),
  shield: ({ size = 24, className }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  whistle: ({ size = 24, className }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M11 8h10a1 1 0 0 1 1 1v2a6 6 0 1 1-6-6h-5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="9" cy="14" r="3" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  ),
  fire: ({ size = 24, className }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c1 3-1 4-2 6s0 3 0 3-2-1-2-3c-2 2-3 4-3 6a7 7 0 0 0 14 0c0-4-3-6-3-9 0 0-2 1-2 3 0-3-1-5 1-6Z" />
    </svg>
  ),
};

export function StatusPill({ status }: { status: string }) {
  const map: Record<string, string> = {
    abierto: "text-emerald-300 bg-emerald-500/10 border-emerald-400/20",
    cerrado: "text-amber-300 bg-amber-500/10 border-amber-400/20",
    jugado: "text-white/60 bg-white/5 border-white/10",
  };
  return (
    <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${map[status] || map.jugado}`}>
      {status}
    </span>
  );
}
