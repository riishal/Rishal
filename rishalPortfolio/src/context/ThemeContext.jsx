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

    // ── Core backgrounds — pure white base ──
    bg:      "#FFFFFF",   // every section default → white
    bg2:     "#F7F7F7",   // subtle off-white (modal overlays, etc.)
    bg3:     "#F0F0F0",   // slightly deeper (nested areas)

    // Cards sit ON the white bg — very light grey so they lift off
    bgCard:  "#F8F8F8",

    // Navbar
    navBg: "rgba(255,255,255,0.95)",

    // ── Accent greens ──
    accent:       "#16A34A",   // readable green on white
    accentHover:  "#15803D",
    accent2:      "#22C55E",
    accentBg:     "rgba(22,163,74,0.07)",
    accentBorder: "rgba(22,163,74,0.22)",

    // ── Text ──
    text:  "#0A0A0A",   // near-black
    text2: "#4A4A4A",   // body copy
    text3: "#9A9A9A",   // muted / labels

    // ── Borders — clean neutral ──
    border:  "rgba(0,0,0,0.07)",
    border2: "rgba(0,0,0,0.12)",

    // ── Shadows ──
    shadow:       "0 1px 4px rgba(0,0,0,0.06), 0 2px 12px rgba(0,0,0,0.05)",
    shadowLg:     "0 4px 24px rgba(0,0,0,0.09), 0 12px 40px rgba(0,0,0,0.06)",
    shadowAccent: "0 8px 28px rgba(22,163,74,0.20)",

    // ── Section backgrounds ──
    // Alternating sections use a VERY light grey to create rhythm without looking dirty
    servicesBg: "#F5F5F5",   // services section — barely-there grey
    contactBg:  "#FFFFFF",   // contact section — pure white

    // Grid lines
    gridLine: "rgba(0,0,0,0.04)",
};

const Ctx = createContext({ t: DARK, toggle: () => {}, isDark: true });

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(() => {
        try { return localStorage.getItem("pf_theme") !== "light"; } catch { return true; }
    });

    useEffect(() => {
        try { localStorage.setItem("pf_theme", isDark ? "dark" : "light"); } catch {}
        // Apply bg color to html element so there's no flash on scroll overscroll
        document.documentElement.style.background = isDark ? "#080808" : "#ffffff";
        document.body.style.background = isDark ? "#080808" : "#ffffff";
    }, [isDark]);

    const t = isDark ? DARK : LIGHT;
    return (
        <Ctx.Provider value={{ t, toggle: () => setIsDark(p => !p), isDark }}>
            {children}
        </Ctx.Provider>
    );
}

export const useTheme = () => useContext(Ctx);