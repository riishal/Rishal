import { createContext, useContext, useState, useEffect } from "react";

export const DARK = {
    name: "dark",
    bg: "#080808",
    bg2: "#0E0E0E",
    bg3: "#161616",
    bgCard: "#0F0F0F",
    navBg: "rgba(8,8,8,0.92)",
    accent: "#22C55E",
    accentHover: "#16A34A",
    accent2: "#4ADE80",
    accentBg: "rgba(34,197,94,0.06)",
    accentBorder: "rgba(34,197,94,0.16)",
    text: "#EEEEED",
    text2: "#888880",
    text3: "#454540",
    border: "rgba(255,255,255,0.06)",
    border2: "rgba(255,255,255,0.10)",
    shadow: "0 2px 20px rgba(0,0,0,0.6)",
    shadowLg: "0 24px 64px rgba(0,0,0,0.8)",
    shadowAccent: "0 8px 28px rgba(34,197,94,0.25)",
    servicesBg: "#060606",
    contactBg: "#060606",
    gridLine: "rgba(255,255,255,0.025)",
};

export const LIGHT = {
    name: "light",
    bg: "#F5F5F0",
    bg2: "#EEEEE9",
    bg3: "#E4E4DF",
    bgCard: "#FFFFFF",
    navBg: "rgba(245,245,240,0.94)",
    accent: "#16A34A",
    accentHover: "#15803D",
    accent2: "#22C55E",
    accentBg: "rgba(22,163,74,0.07)",
    accentBorder: "rgba(22,163,74,0.20)",
    text: "#111110",
    text2: "#555550",
    text3: "#999994",
    border: "rgba(0,0,0,0.07)",
    border2: "rgba(0,0,0,0.13)",
    shadow: "0 2px 20px rgba(0,0,0,0.07)",
    shadowLg: "0 24px 64px rgba(0,0,0,0.12)",
    shadowAccent: "0 8px 28px rgba(22,163,74,0.20)",
    servicesBg: "#EDEDE8",
    contactBg: "#E8E8E3",
    gridLine: "rgba(0,0,0,0.04)",
};

const Ctx = createContext({ t: DARK, toggle: () => { }, isDark: true });

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(() => {
        try { return localStorage.getItem("pf_theme") !== "light"; } catch { return true; }
    });

    useEffect(() => {
        try { localStorage.setItem("pf_theme", isDark ? "dark" : "light"); } catch { }
    }, [isDark]);

    const t = isDark ? DARK : LIGHT;
    return (
        <Ctx.Provider value={{ t, toggle: () => setIsDark(p => !p), isDark }}>
            {children}
        </Ctx.Provider>
    );
}

export const useTheme = () => useContext(Ctx);