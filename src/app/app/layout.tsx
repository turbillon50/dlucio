"use client";
import { BottomNav } from "@/components/bottom-nav";
import { useTheme } from "@/lib/theme";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <div className={`app-wrap relative z-10 ${theme === "dark" ? "theme-dark grain" : "theme-light"}`}>
      <div className="relative z-10 mx-auto min-h-[100dvh] max-w-md pb-[76px]">
        {children}
        <BottomNav />
      </div>
    </div>
  );
}
