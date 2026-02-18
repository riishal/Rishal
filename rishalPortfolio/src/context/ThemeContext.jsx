import { createContext, useContext, useState, useEffect } from "react";

export const DARK = {
    name: "dark",
    bg: "#0A0A0A",
    bg2: "#111111",
    bg3: "#1A1A1A",
    bgCard: "#131313",
    navBg: "rgba(10,10,10,0.92)",
    accent: "#22C55E",
    accentHover: "#16A34A",
    accent2: "#4ADE80",
    accentBg: "rgba(34,197,94,0.07)",
    accentBorder: "rgba(34,197,94,0.18)",
    text: "#F0F4F0",
    text2: "#9AA89A",
    text3: "#505A50",
    border: "rgba(255,255,255,0.07)",
    border2: "rgba(255,255,255,0.12)",
    shadow: "0 2px 16px rgba(0,0,0,0.5)",
    shadowLg: "0 20px 60px rgba(0,0,0,0.7)",
    shadowAccent: "0 8px 28px rgba(34,197,94,0.22)",
    servicesBg: "#080808",
    contactBg: "#080808",
    gridLine: "rgba(34,197,94,0.04)",
};

export const LIGHT = {
    name: "light",
    bg: "#F8F9F8",
    bg2: "#F0F2F0",
    bg3: "#E5E8E5",
    bgCard: "#FFFFFF",
    navBg: "rgba(248,249,248,0.94)",
    accent: "#16A34A",
    accentHover: "#15803D",
    accent2: "#22C55E",
    accentBg: "rgba(22,163,74,0.08)",
    accentBorder: "rgba(22,163,74,0.22)",
    text: "#0F1A0F",
    text2: "#3D4D3D",
    text3: "#7A8A7A",
    border: "rgba(0,0,0,0.08)",
    border2: "rgba(0,0,0,0.14)",
    shadow: "0 2px 16px rgba(0,0,0,0.07)",
    shadowLg: "0 20px 60px rgba(0,0,0,0.12)",
    shadowAccent: "0 8px 28px rgba(22,163,74,0.20)",
    servicesBg: "#F2F4F2",
    contactBg: "#ECEEED",
    gridLine: "rgba(22,163,74,0.05)",
};

const Ctx = createContext({ t: DARK, toggle: () => { }, isDark: true });

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(() => {
        try { return localStorage.getItem("pf_theme") !== "light"; } catch { return true; }
    });

    useEffect(() => {
        try { localStorage.setItem("pf_theme", isDark ? "dark" : "light"); } catch { }
        document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    }, [isDark]);

    const t = isDark ? DARK : LIGHT;
    return (
        <Ctx.Provider value={{ t, toggle: () => setIsDark(p => !p), isDark }}>
            {children}
        </Ctx.Provider>
    );
}

export const useTheme = () => useContext(Ctx);