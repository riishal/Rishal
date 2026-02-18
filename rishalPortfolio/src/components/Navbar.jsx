import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
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
                padding: "0 clamp(20px, 5vw, 80px)",
                background: scrolled ? t.navBg : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled ? `1px solid ${t.border}` : "none",
                transition: "background 0.35s, border 0.35s, backdrop-filter 0.35s",
            }}>
                {/* Logo */}
                <button onClick={() => go("Home")} style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800,
                    color: t.text, letterSpacing: "-0.5px",
                    display: "flex", alignItems: "center", gap: 2,
                }}>
                    R<span style={{ color: t.accent }}>.</span>
                </button>

                {/* Desktop links */}
                <div className="nav-links" style={{ display: "flex", gap: 2, alignItems: "center" }}>
                    {LINKS.map(l => <NavLink key={l} l={l} active={active === l} t={t} onClick={() => go(l)} />)}
                </div>

                {/* Controls */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <button onClick={toggle} aria-label="toggle theme" style={{
                        width: 36, height: 36, borderRadius: "50%",
                        background: t.bg3, border: `1px solid ${t.border2}`,
                        cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.2s",
                    }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = t.accentBorder; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = t.border2; }}
                    >
                        {isDark
                            ? <Moon size={14} color={t.text3} strokeWidth={2} />
                            : <Sun size={14} color={t.text3} strokeWidth={2} />
                        }
                    </button>

                    <button
                        className="hire-btn"
                        onClick={() => window.open("mailto:riishaltt@gmail.com")}
                        style={{
                            background: t.accent, color: "#fff",
                            border: "none", borderRadius: 6, padding: "8px 16px",
                            fontSize: 12.5, fontWeight: 700, cursor: "pointer",
                            fontFamily: "'Syne', sans-serif", letterSpacing: "0.5px",
                            textTransform: "uppercase", transition: "all 0.2s",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = t.accentHover; e.currentTarget.style.transform = "translateY(-1px)"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = t.accent; e.currentTarget.style.transform = "none"; }}
                    >Hire Me</button>

                    <button
                        className="hamburger"
                        onClick={() => setOpen(o => !o)}
                        style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4, color: t.text }}
                    >
                        {open ? <X size={20} color={t.text} /> : <Menu size={20} color={t.text} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div style={{
                    position: "fixed", top: 60, left: 0, right: 0, zIndex: 998,
                    background: t.bg2, borderBottom: `1px solid ${t.border}`,
                    padding: "16px 20px 20px",
                    display: "flex", flexDirection: "column", gap: 3,
                    animation: "slideDown 0.22s ease",
                }}>
                    {LINKS.map(l => (
                        <button key={l} onClick={() => go(l)} style={{
                            background: active === l ? t.accentBg : "none",
                            border: `1px solid ${active === l ? t.accentBorder : "transparent"}`,
                            fontSize: 14, fontWeight: 600, color: active === l ? t.accent : t.text2,
                            textAlign: "left", padding: "12px 14px", borderRadius: 6,
                            fontFamily: "'Syne', sans-serif", transition: "all 0.18s", cursor: "pointer",
                        }}>{l}</button>
                    ))}
                    <button
                        onClick={() => window.open("mailto:riishaltt@gmail.com")}
                        style={{
                            background: t.accent, color: "#fff", border: "none",
                            borderRadius: 6, padding: "12px 14px", fontSize: 13, fontWeight: 700,
                            marginTop: 8, cursor: "pointer", fontFamily: "'Syne', sans-serif",
                            letterSpacing: "0.5px", textTransform: "uppercase",
                        }}
                    >Hire Me</button>
                </div>
            )}

            <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: none; }
        }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hire-btn  { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
        </>
    );
}

function NavLink({ l, active, t, onClick }) {
    const [h, setH] = useState(false);
    return (
        <button onClick={onClick}
            onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
            style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: active ? 700 : 500,
                color: active ? t.accent : h ? t.text : t.text2,
                fontFamily: "'Syne', sans-serif",
                padding: "6px 13px", borderRadius: 5,
                transition: "color 0.18s",
                position: "relative",
                letterSpacing: active ? "0.3px" : 0,
            }}
        >
            {l}
            {active && (
                <span style={{
                    position: "absolute", bottom: 2, left: "50%",
                    transform: "translateX(-50%)",
                    width: 3, height: 3, borderRadius: "50%",
                    background: t.accent, display: "block",
                }} />
            )}
        </button>
    );
}