import { BottomNav } from "@/components/bottom-nav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 mx-auto min-h-[100dvh] max-w-md pb-[76px]">
      {children}
      <BottomNav />
    </div>
  );
}
