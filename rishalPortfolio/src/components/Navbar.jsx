import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const LINKS = ["Home", "About", "Services", "Works", "Contact"];

export default function Navbar() {
    const { t, toggle, isDark } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("Home");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fn = () => {
            setScrolled(window.scrollY > 50);
            for (let i = LINKS.length - 1; i >= 0; i--) {
                const el = document.getElementById(LINKS[i].toLowerCase());
                if (el && el.getBoundingClientRect().top <= 100) {
                    setActive(LINKS[i]);
                    return;
                }
            }
        };
        window.addEventListener("scroll", fn, { passive: true });
        return () => window.removeEventListener("scroll", fn);
    }, []);

    const go = (id) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
        setActive(id);
        setOpen(false);
    };

    return (
        <>
            <nav style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 999, height: 60,
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "0 clamp(20px, 6vw, 96px)",
                background: scrolled ? t.navBg : "transparent",
                backdropFilter: scrolled ? "blur(24px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
                borderBottom: scrolled ? `1px solid ${t.border}` : "none",
                transition: "background 0.35s, border 0.35s",
            }}>
                {/* Logo */}
                <button onClick={() => go("Home")} style={{
                    background: "none", border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", gap: 6,
                    fontFamily: "'Outfit', sans-serif", fontSize: 17, fontWeight: 700,
                    color: t.text, letterSpacing: "-0.3px",
                }}>
                    <span style={{
                        width: 28, height: 28, borderRadius: 8,
                        background: t.accent, display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 13, fontWeight: 800, color: "#fff",
                    }}>R</span>
                    ishal
                </button>

                {/* Desktop links */}
                <div className="nav-links" style={{ display: "flex", gap: 4, alignItems: "center" }}>
                    {LINKS.map(l => <NavLink key={l} l={l} active={active === l} t={t} onClick={() => go(l)} />)}
                </div>

                {/* Right controls */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    {/* Theme toggle */}
                    <button onClick={toggle} aria-label="Toggle theme" style={{
                        width: 48, height: 26, borderRadius: 26, padding: "3px",
                        background: t.bg3, border: `1px solid ${t.border2}`,
                        cursor: "pointer", transition: "all 0.3s",
                        display: "flex", alignItems: "center", position: "relative",
                    }}>
                        <div style={{
                            width: 18, height: 18, borderRadius: "50%", background: t.accent,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            transform: isDark ? "translateX(0)" : "translateX(20px)",
                            transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
                        }}>
                            {isDark
                                ? <Moon size={10} color="#fff" strokeWidth={2.5} />
                                : <Sun size={10} color="#fff" strokeWidth={2.5} />
                            }
                        </div>
                    </button>

                    {/* Hire Me — desktop */}
                    <button
                        className="hire-btn-desktop"
                        onClick={() => window.open("mailto:riishaltt@gmail.com")}
                        style={{
                            background: t.accent, color: "#fff",
                            border: "none", borderRadius: 8, padding: "8px 16px",
                            fontSize: 13, fontWeight: 600, cursor: "pointer",
                            display: "flex", alignItems: "center", gap: 5,
                            fontFamily: "'Outfit', sans-serif",
                            transition: "all 0.2s",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = t.accentHover; e.currentTarget.style.transform = "translateY(-1px)"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = t.accent; e.currentTarget.style.transform = "none"; }}
                    >
                        <Mail size={13} strokeWidth={2.5} />
                        Hire Me
                    </button>

                    {/* Hamburger */}
                    <button
                        className="hamburger"
                        onClick={() => setOpen(o => !o)}
                        style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4 }}
                    >
                        {open ? <X size={20} color={t.text} /> : <Menu size={20} color={t.text} />}
                    </button>
                </div>
            </nav>

            {/* Mobile drawer */}
            {open && (
                <div style={{
                    position: "fixed", top: 60, left: 0, right: 0, zIndex: 998,
                    background: t.bg2, borderBottom: `1px solid ${t.border}`,
                    padding: "12px 20px 20px",
                    display: "flex", flexDirection: "column", gap: 4,
                }}>
                    {LINKS.map(l => (
                        <button key={l} onClick={() => go(l)} style={{
                            background: active === l ? t.accentBg : "none",
                            border: `1px solid ${active === l ? t.accentBorder : "transparent"}`,
                            fontSize: 15, fontWeight: 500, color: active === l ? t.accent : t.text2,
                            textAlign: "left", padding: "11px 14px", borderRadius: 8,
                            fontFamily: "'Outfit', sans-serif", transition: "all 0.2s", cursor: "pointer",
                        }}>{l}</button>
                    ))}
                    <button
                        onClick={() => window.open("mailto:riishaltt@gmail.com")}
                        style={{
                            background: t.accent, color: "#fff", border: "none",
                            borderRadius: 8, padding: "11px 14px", fontSize: 14, fontWeight: 600,
                            marginTop: 8, cursor: "pointer", fontFamily: "'Outfit', sans-serif",
                        }}
                    >Hire Me</button>
                </div>
            )}
        </>
    );
}

function NavLink({ l, active, t, onClick }) {
    const [h, setH] = useState(false);
    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
            style={{
                background: active ? t.accentBg : h ? t.border : "none",
                border: "none", cursor: "pointer",
                fontSize: 13.5, fontWeight: 500,
                color: active ? t.accent : h ? t.text : t.text2,
                fontFamily: "'Outfit', sans-serif",
                padding: "6px 12px", borderRadius: 6, transition: "all 0.18s",
            }}
        >
            {l}
        </button>
    );
}