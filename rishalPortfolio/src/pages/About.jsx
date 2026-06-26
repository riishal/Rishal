import { useState } from "react";
import { Download, ExternalLink, Briefcase, Award, Code2, Star } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useInView } from "../hooks/useInView";
import aboutImg from "../assets/about.jpg";

const STATS = [
    { icon: <Briefcase size={17} />, value: "3+",   label: "Years Experience" },
    { icon: <Award size={17} />,     value: "12+",  label: "Apps Delivered" },
    { icon: <Code2 size={17} />,     value: "3",    label: "Live on Play Store" },
    { icon: <Star size={17} />,      value: "100%", label: "Client Satisfaction" },
];

const TAGS = [
    "Flutter", "Dart", "Firebase", "REST APIs",
    "GetX", "Provider", "BLoC", "Riverpod",
    "Android", "iOS", "Git & GitHub",
];

export default function About() {
    const { t, isDark } = useTheme();
    const [ref, vis] = useInView(0.08);

    return (
        <section
            id="about"
            ref={ref}
            style={{
                background: t.bg,
                padding: "96px clamp(20px, 6vw, 96px)",
                borderTop: `1px solid ${t.border}`,
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background glow */}
            <div style={{
                position: "absolute", top: -100, right: -80, width: 500, height: 500,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${t.accent}06 0%, transparent 70%)`,
                pointerEvents: "none",
            }} />

            <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>

                {/* ── Section Header ── */}
                <div style={{
                    textAlign: "center",
                    marginBottom: "clamp(44px, 6vw, 72px)",
                    opacity: vis ? 1 : 0,
                    transform: vis ? "none" : "translateY(28px)",
                    transition: "all 0.75s cubic-bezier(0.16,1,0.3,1)",
                }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
                        <div style={{ width: 44, height: 1.5, background: `linear-gradient(90deg, transparent, ${t.accent})` }} />
                        <span style={{
                            fontFamily: "'Syne', sans-serif", fontSize: 10.5,
                            color: t.accent, letterSpacing: 3.5, textTransform: "uppercase", fontWeight: 700,
                        }}>About Me</span>
                        <div style={{ width: 44, height: 1.5, background: `linear-gradient(90deg, ${t.accent}, transparent)` }} />
                    </div>

                    <h2 style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 800,
                        color: t.text, letterSpacing: "-0.035em", lineHeight: 1.05, marginBottom: 14,
                    }}>
                        Crafting digital{" "}
                        <span style={{ color: t.accent, textShadow: `0 0 50px ${t.accent}44`, position: "relative" }}>
                            experiences
                            <span style={{
                                position: "absolute", bottom: -4, left: 0, right: 0, height: 3,
                                background: `linear-gradient(90deg, ${t.accent}cc, ${t.accent}44)`,
                                borderRadius: 2,
                                transform: vis ? "scaleX(1)" : "scaleX(0)",
                                transformOrigin: "left",
                                transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.35s",
                                display: "block",
                            }} />
                        </span>
                    </h2>

                    <p style={{
                        color: t.text2, fontSize: "clamp(13px, 1.4vw, 15px)",
                        maxWidth: 420, margin: "0 auto", lineHeight: 1.75,
                    }}>
                        Flutter developer crafting clean, scalable mobile apps with Firebase &amp; REST APIs.
                    </p>
                </div>

                {/* ── Main Content Grid ── */}
                <div className="about-grid" style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1.2fr",
                    gap: "clamp(32px, 6vw, 80px)",
                    alignItems: "center",
                }}>

                    {/* ── Left: Photo ── */}
                    <div style={{
                        opacity: vis ? 1 : 0,
                        transform: vis ? "none" : "translateX(-32px)",
                        transition: "all 0.85s cubic-bezier(0.16,1,0.3,1) 0.1s",
                    }}>
                        <div style={{
                            position: "relative",
                            borderRadius: 28,
                            overflow: "hidden",
                            boxShadow: isDark
                                ? `0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px ${t.border}`
                                : `0 24px 64px rgba(0,0,0,0.12), 0 0 0 1px ${t.border}`,
                            aspectRatio: "4/5",
                            maxWidth: 440,
                            margin: "0 auto",
                        }}>
                            <img
                                src={aboutImg}
                                alt="Rishal"
                                style={{
                                    width: "100%", height: "100%",
                                    objectFit: "cover", display: "block",
                                    transition: "transform 0.8s ease",
                                }}
                                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                            />
                            {/* Gradient overlay */}
                            <div style={{
                                position: "absolute", inset: 0,
                                background: `linear-gradient(to top, ${t.bg}99 0%, transparent 50%)`,
                            }} />
                            {/* Floating badge */}
                            <div style={{
                                position: "absolute", bottom: 20, left: 20,
                                background: isDark ? "rgba(15,15,15,0.85)" : "rgba(255,255,255,0.92)",
                                backdropFilter: "blur(12px)",
                                border: `1px solid ${t.border}`,
                                borderRadius: 14, padding: "10px 16px",
                                display: "flex", alignItems: "center", gap: 8,
                            }}>
                                <div style={{
                                    width: 8, height: 8, borderRadius: "50%",
                                    background: "#22C55E",
                                    boxShadow: "0 0 0 2px rgba(34,197,94,0.3)",
                                    animation: "dotPulse 2s ease-in-out infinite",
                                }} />
                                <span style={{ fontSize: 12.5, fontWeight: 600, color: t.text, fontFamily: "'Syne', sans-serif" }}>
                                    Open to Work
                                </span>
                            </div>
                        </div>

                        {/* Stats grid below photo */}
                        <div style={{
                            display: "grid", gridTemplateColumns: "1fr 1fr",
                            gap: 10, marginTop: 16,
                        }}>
                            {STATS.map(s => (
                                <StatCard key={s.label} icon={s.icon} value={s.value} label={s.label} t={t} isDark={isDark} />
                            ))}
                        </div>
                    </div>

                    {/* ── Right: Bio ── */}
                    <div style={{
                        opacity: vis ? 1 : 0,
                        transform: vis ? "none" : "translateX(32px)",
                        transition: "all 0.85s cubic-bezier(0.16,1,0.3,1) 0.2s",
                    }}>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: 6,
                            background: t.accentBg, border: `1px solid ${t.accentBorder}`,
                            borderRadius: 100, padding: "5px 14px",
                            marginBottom: 20,
                        }}>
                            <div style={{ width: 6, height: 6, borderRadius: "50%", background: t.accent }} />
                            <span style={{ fontSize: 11.5, fontWeight: 700, color: t.accent, fontFamily: "'Syne', sans-serif", letterSpacing: 1 }}>
                                Flutter & Mobile Developer
                            </span>
                        </div>

                        <h3 style={{
                            fontFamily: "'Syne', sans-serif",
                            fontSize: "clamp(22px, 3.5vw, 30px)", fontWeight: 800,
                            color: t.text, marginBottom: 20, lineHeight: 1.3,
                            letterSpacing: "-0.02em",
                        }}>
                            Turning ideas into apps people actually enjoy using
                        </h3>

                        <p style={{
                            color: t.text2, fontSize: "clamp(14px, 1.6vw, 15.5px)",
                            lineHeight: 1.8, marginBottom: 18,
                        }}>
                            With <strong style={{ color: t.text }}>3+ years of hands-on experience</strong> in Flutter development,
                            I specialize in building high-performance cross-platform applications that users love.
                            My approach combines clean architecture with pixel-perfect UI implementation.
                        </p>

                        <p style={{
                            color: t.text2, fontSize: "clamp(14px, 1.6vw, 15.5px)",
                            lineHeight: 1.8, marginBottom: 28,
                        }}>
                            From <strong style={{ color: t.text }}>logistics platforms to CRM systems</strong>, I've delivered
                            production apps for startups and established companies — using Flutter, Dart, Firebase,
                            and REST APIs to write maintainable code that scales.
                        </p>

                        {/* Tech tags */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                            {TAGS.map(tag => (
                                <TechTag key={tag} label={tag} t={t} isDark={isDark} />
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                            <CTAButton
                                href="/RISHAL.pdf"
                                download
                                icon={<Download size={15} />}
                                label="Download Resume"
                                t={t}
                                primary
                            />
                            <CTAButton
                                href="https://github.com/riishal"
                                target="_blank"
                                icon={<ExternalLink size={15} />}
                                label="View GitHub"
                                t={t}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .about-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}

function StatCard({ icon, value, label, t, isDark }) {
    const [h, setH] = useState(false);
    return (
        <div
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
            style={{
                background: t.bgCard,
                border: `1px solid ${h ? t.accentBorder : t.border}`,
                borderRadius: 16, padding: "14px 16px",
                transition: "all 0.3s ease",
                transform: h ? "translateY(-3px)" : "none",
                boxShadow: h ? `0 12px 28px rgba(0,0,0,${isDark ? 0.35 : 0.08})` : "none",
                display: "flex", flexDirection: "column", gap: 6,
            }}
        >
            <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: t.accentBg, border: `1px solid ${t.accentBorder}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: t.accent,
            }}>
                {icon}
            </div>
            <div style={{ fontSize: "clamp(18px, 3vw, 22px)", fontWeight: 800, color: t.text, fontFamily: "'Syne', sans-serif", lineHeight: 1 }}>
                {value}
            </div>
            <div style={{ fontSize: 11.5, color: t.text3, lineHeight: 1.3 }}>
                {label}
            </div>
        </div>
    );
}

function TechTag({ label, t, isDark }) {
    const [h, setH] = useState(false);
    return (
        <span
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
            style={{
                padding: "5px 12px",
                background: h ? t.accentBg : (isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"),
                border: `1px solid ${h ? t.accentBorder : t.border}`,
                borderRadius: 8, fontSize: 12.5,
                color: h ? t.accent : t.text2,
                fontFamily: "'Syne', sans-serif", fontWeight: 500,
                transition: "all 0.25s ease", cursor: "default",
            }}
        >
            {label}
        </span>
    );
}

function CTAButton({ href, download, target, icon, label, t, primary }) {
    const [h, setH] = useState(false);
    return (
        <a
            href={href}
            download={download}
            target={target}
            rel={target ? "noopener noreferrer" : undefined}
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
            style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: primary ? "12px 24px" : "11px 22px",
                background: primary ? t.accent : "transparent",
                color: primary ? "#fff" : t.text,
                border: primary ? "none" : `1.5px solid ${h ? t.accentBorder : t.border}`,
                borderRadius: 12, fontSize: 13.5, fontWeight: 700,
                fontFamily: "'Syne', sans-serif",
                textDecoration: "none", cursor: "pointer",
                transition: "all 0.28s ease",
                transform: h ? "translateY(-2px)" : "none",
                boxShadow: h && primary ? `0 12px 28px ${t.accent}45` : "none",
            }}
        >
            {icon}
            {label}
        </a>
    );
}
