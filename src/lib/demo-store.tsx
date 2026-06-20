"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Mode = "publico" | "usuario" | "admin";

type Ctx = {
  mode: Mode;
  setMode: (m: Mode) => void;
};

const DemoCtx = createContext<Ctx>({ mode: "publico", setMode: () => {} });

export function DemoProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>("publico");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && window.localStorage.getItem("tm-mode")) as Mode | null;
    if (saved) setModeState(saved);
  }, []);

  const setMode = (m: Mode) => {
    setModeState(m);
    if (typeof window !== "undefined") window.localStorage.setItem("tm-mode", m);
  };

  return <DemoCtx.Provider value={{ mode, setMode }}>{children}</DemoCtx.Provider>;
}

export const useDemo = () => useContext(DemoCtx);
