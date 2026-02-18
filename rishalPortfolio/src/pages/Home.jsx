import { useState } from "react";
import { Mail, Github, ArrowDown, Code2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useInView } from "../hooks/useInView";
import profileImg from "../assets/profile.jpg";

const STATS = [
    { value: "3+", label: "Years Exp." },
    { value: "10+", label: "Apps Built" },
    { value: "3", label: "Play Store" },
    { value: "100%", label: "Satisfaction" },
];

export default function Home() {
    const { t } = useTheme();
    const [ref, inView] = useInView(0.1);

    return (
        <section id="home" ref={ref} style={{
            minHeight: "100vh",
            display: "flex", alignItems: "center",
            padding: "80px clamp(20px, 6vw, 96px) 60px",
            background: t.bg, position: "relative", overflow: "hidden",
        }}>
            {/* Grid bg */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                backgroundImage: `linear-gradient(${t.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${t.gridLine} 1px, transparent 1px)`,
                backgroundSize: "56px 56px",
            }} />
            {/* Glow */}
            <div style={{
                position: "absolute", top: "5%", right: "2%",
                width: "min(500px, 45vw)", height: "min(500px, 45vw)",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${t.accentBg} 0%, transparent 68%)`,
                filter: "blur(50px)", pointerEvents: "none",
            }} />

            <div className="home-container" style={{
                display: "flex", flexDirection: "row", alignItems: "center",
                gap: "clamp(40px, 8vw, 80px)",
                width: "100%", maxWidth: 1200, margin: "0 auto",
                position: "relative", zIndex: 1,
            }}>
                {/* Left: Content */}
                <div className="home-content" style={{
                    flex: 1,
                    opacity: inView ? 1 : 0,
                    transform: inView ? "none" : "translateY(24px)",
                    transition: "opacity 0.6s ease, transform 0.6s ease",
                }}>
                    {/* Badge */}
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        padding: "5px 14px", background: t.accentBg,
                        border: `1px solid ${t.accentBorder}`, borderRadius: 100, marginBottom: 28,
                    }}>
                        <span style={{
                            width: 7, height: 7, borderRadius: "50%", background: t.accent,
                            boxShadow: `0 0 6px ${t.accent}`,
                        }} />
                        <span style={{
                            fontFamily: "'Outfit', sans-serif", fontSize: 13,
                            color: t.accent, fontWeight: 500,
                        }}>Available for opportunities</span>
                    </div>

                    {/* Name */}
                    <h1 style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "clamp(52px, 10vw, 96px)",
                        fontWeight: 800, lineHeight: 0.9,
                        letterSpacing: "-0.03em", color: t.text, marginBottom: 16,
                    }}>
                        Rishal
                    </h1>

                    {/* Role */}
                    <div style={{
                        display: "flex", alignItems: "center", gap: 8, marginBottom: 22,
                    }}>
                        <Code2 size={18} color={t.accent} strokeWidth={2} />
                        <span style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "clamp(17px, 2.2vw, 22px)",
                            color: t.accent, fontWeight: 600, letterSpacing: "-0.2px",
                        }}>Flutter Developer</span>
                    </div>

                    {/* Description */}
                    <p style={{
                        color: t.text2, fontSize: "clamp(14px, 1.7vw, 16px)",
                        lineHeight: 1.75, marginBottom: 36, maxWidth: 500,
                    }}>
                        Building <strong style={{ color: t.text, fontWeight: 600 }}>production-grade mobile & web apps</strong> with
                        Flutter and Dart. 3+ years delivering enterprise solutions — real-time logistics, CRM platforms — with
                        clean architecture and Firebase.
                    </p>

                    {/* CTA */}
                    <div className="home-ctas" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
                        <button
                            onClick={() => document.getElementById("works")?.scrollIntoView({ behavior: "smooth" })}
                            style={{
                                padding: "12px 24px", background: t.accent, color: "#fff",
                                border: "none", borderRadius: 10, fontSize: 14, fontWeight: 600,
                                cursor: "pointer", fontFamily: "'Outfit', sans-serif",
                                transition: "all 0.2s",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = t.accentHover; e.currentTarget.style.transform = "translateY(-2px)"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = t.accent; e.currentTarget.style.transform = "none"; }}
                        >View Work</button>
                        <button
                            onClick={() => window.open("https://github.com/riishal")}
                            style={{
                                padding: "12px 22px", background: "transparent", color: t.text2,
                                border: `1.5px solid ${t.border2}`, borderRadius: 10, fontSize: 14, fontWeight: 600,
                                cursor: "pointer", fontFamily: "'Outfit', sans-serif",
                                display: "flex", alignItems: "center", gap: 7,
                                transition: "all 0.2s",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.color = t.accent; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = t.border2; e.currentTarget.style.color = t.text2; }}
                        >
                            <Github size={15} strokeWidth={2} /> GitHub
                        </button>
                        <button
                            onClick={() => window.open("mailto:riishaltt@gmail.com")}
                            style={{
                                padding: "12px 22px", background: "transparent", color: t.text2,
                                border: `1.5px solid ${t.border2}`, borderRadius: 10, fontSize: 14, fontWeight: 600,
                                cursor: "pointer", fontFamily: "'Outfit', sans-serif",
                                display: "flex", alignItems: "center", gap: 7,
                                transition: "all 0.2s",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.color = t.accent; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = t.border2; e.currentTarget.style.color = t.text2; }}
                        >
                            <Mail size={15} strokeWidth={2} /> Contact
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="stats-row" style={{
                        display: "grid", gridTemplateColumns: "repeat(4, auto)",
                        gap: "clamp(16px, 3vw, 32px)", maxWidth: 440,
                    }}>
                        {STATS.map(({ value, label }) => (
                            <div key={label}>
                                <div style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800,
                                    color: t.accent, letterSpacing: "-1px", lineHeight: 1,
                                }}>{value}</div>
                                <div style={{
                                    fontSize: 11, color: t.text3, fontWeight: 500,
                                    letterSpacing: 0.5, marginTop: 4, whiteSpace: "nowrap",
                                }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Photo */}
                <div className="home-photo" style={{
                    flex: "0 0 auto",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "none" : "translateY(24px)",
                    transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
                }}>
                    <div style={{
                        position: "relative",
                        width: "clamp(220px, 28vw, 360px)",
                        height: "clamp(220px, 28vw, 360px)",
                    }}>
                        <div style={{
                            position: "absolute", inset: -10, borderRadius: "50%",
                            border: `1px solid ${t.accentBorder}`, opacity: 0.5,
                        }} />
                        <div style={{
                            width: "100%", height: "100%", borderRadius: "50%",
                            overflow: "hidden", border: `3px solid ${t.accent}`,
                            boxShadow: `0 20px 50px -10px ${t.accent}60`,
                            transition: "all 0.3s ease",
                        }}
                            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02)"; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
                        >
                            <img src={profileImg} alt="Rishal" style={{
                                width: "100%", height: "100%", objectFit: "cover",
                                objectPosition: "center", display: "block",
                            }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-hint" style={{
                position: "absolute", bottom: 28, left: "50%",
                transform: "translateX(-50%)",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                opacity: 0.45,
            }}>
                <span style={{ fontSize: 10, color: t.text3, letterSpacing: 2, fontFamily: "'Outfit', sans-serif" }}>SCROLL</span>
                <ArrowDown size={14} color={t.accent} strokeWidth={2} />
            </div>

            <style>{`
        @media (max-width: 900px) {
          .home-container { flex-direction: column !important; gap: 36px !important; }
          .home-content { text-align: center !important; order: 2 !important; width: 100% !important; }
          .home-photo { order: 1 !important; }
          .home-ctas { justify-content: center !important; }
          .stats-row { margin: 0 auto !important; }
        }
        @media (max-width: 480px) {
          .home-ctas { flex-direction: column !important; width: 100% !important; }
          .home-ctas button { width: 100% !important; justify-content: center !important; }
          .stats-row { grid-template-columns: repeat(2, auto) !important; gap: 20px 28px !important; }
          .scroll-hint { display: none !important; }
        }
      `}</style>
        </section>
    );
}