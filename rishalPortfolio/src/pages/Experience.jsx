import { useState } from "react";
import { Rocket, Laptop, Code2, GraduationCap, ChevronRight, MapPin, Calendar } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useInView } from "../hooks/useInView";

const EXP = [
    {
        role: "Flutter Developer",
        co: "EBSOR Infosystems",
        sub: "Full-time · Remote",
        period: "May 2025 – Present",
        current: true,
        Icon: Rocket,
        pts: [
            "Built ECSO Logistics App — live on Google Play Store",
            "Developed Inspec QC & production monitoring application",
            "Role-based access control with JWT authentication",
            "PDF invoice generation & real-time WebSocket tracking",
            "40% load time improvement via performance optimization",
        ],
    },
    {
        role: "Flutter Developer",
        co: "Freelance",
        sub: "Remote · Multiple Clients",
        period: "Feb 2024 – Apr 2025",
        current: false,
        Icon: Laptop,
        pts: [
            "Leads Management CRM — sales pipeline & follow-up automation",
            "Site Diary app for construction project documentation",
            "Firebase-backed business automation solutions",
            "CoreConnect full business management mobile application",
        ],
    },
    {
        role: "Software Developer",
        co: "XpertConsortium Technologies LLP",
        sub: "Full-time · On-site",
        period: "May 2023 – Jan 2024",
        current: false,
        Icon: Code2,
        pts: [
            "Learn Easy e-learning app with video, PDF & quiz modules",
            "REST API integrations with Flutter & Firebase backend",
        ],
    },
    {
        role: "Flutter Intern",
        co: "Edapt",
        sub: "Internship · On-site",
        period: "Sep 2022 – Mar 2023",
        current: false,
        Icon: GraduationCap,
        pts: [
            "Developed quiz app and e-commerce mobile application",
            "Hands-on with Dart, Firebase Auth, and REST APIs",
        ],
    },
];

export default function Experience() {
    const { t, isDark } = useTheme();
    const [ref, vis] = useInView(0.06);

    return (
        <section
            id="experience"
            ref={ref}
            style={{
                background: t.bg,
                padding: "96px clamp(20px, 6vw, 96px)",
                borderTop: `1px solid ${t.border}`,
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Subtle background decoration */}
            <div style={{
                position: "absolute", top: -120, left: -80, width: 480, height: 480,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${t.accent}05 0%, transparent 70%)`,
                pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", bottom: -80, right: -60, width: 360, height: 360,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${t.accent}04 0%, transparent 70%)`,
                pointerEvents: "none",
            }} />

            <div style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>

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
                        }}>Experience</span>
                        <div style={{ width: 44, height: 1.5, background: `linear-gradient(90deg, ${t.accent}, transparent)` }} />
                    </div>

                    <h2 style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 800,
                        color: t.text, letterSpacing: "-0.035em", lineHeight: 1.05, marginBottom: 14,
                    }}>
                        Work{" "}
                        <span style={{ color: t.accent, textShadow: `0 0 50px ${t.accent}44`, position: "relative" }}>
                            Experience
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
                        3+ years building production-grade mobile applications across multiple companies and clients.
                    </p>
                </div>

                {/* ── Timeline ── */}
                <div className="exp-timeline" style={{ position: "relative", paddingLeft: 52 }}>

                    {/* Vertical line */}
                    <div style={{
                        position: "absolute", left: 19, top: 8, bottom: 8, width: 2,
                        background: isDark
                            ? `linear-gradient(180deg, ${t.accent}80 0%, ${t.accent}10 100%)`
                            : `linear-gradient(180deg, ${t.accent}60 0%, ${t.accent}08 100%)`,
                        borderRadius: 2,
                        opacity: vis ? 1 : 0,
                        transition: "opacity 0.8s ease 0.3s",
                    }} />

                    {EXP.map((item, i) => (
                        <TimelineCard key={i} item={item} i={i} vis={vis} t={t} isDark={isDark} />
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 600px) {
                    .exp-timeline { padding-left: 36px !important; }
                }
            `}</style>
        </section>
    );
}

function TimelineCard({ item, i, vis, t, isDark }) {
    const [h, setH] = useState(false);
    const { Icon } = item;

    return (
        <div style={{
            position: "relative",
            marginBottom: i === 3 ? 0 : "clamp(20px, 3vw, 28px)",
            opacity: vis ? 1 : 0,
            transform: vis ? "none" : "translateY(24px)",
            transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.13}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.13}s`,
        }}>

            {/* Timeline dot */}
            <div style={{
                position: "absolute", left: -40, top: 26,
                width: 18, height: 18, borderRadius: "50%",
                background: item.current ? t.accent : (isDark ? "#1a1a1a" : "#e8e8e8"),
                border: `2.5px solid ${item.current ? t.accent : (isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)")}`,
                boxShadow: item.current ? `0 0 0 4px ${t.accent}22, 0 0 20px ${t.accent}50` : "none",
                transition: "all 0.3s ease",
                zIndex: 1,
            }} />
            {/* Inner dot */}
            {item.current && (
                <div style={{
                    position: "absolute", left: -35, top: 31,
                    width: 8, height: 8, borderRadius: "50%",
                    background: "#fff", zIndex: 2,
                    animation: "dotPulse 2s ease-in-out infinite",
                }} />
            )}

            {/* Card */}
            <div
                onMouseEnter={() => setH(true)}
                onMouseLeave={() => setH(false)}
                style={{
                    background: t.bgCard,
                    border: `1px solid ${h ? t.accentBorder : t.border}`,
                    borderRadius: 20,
                    padding: "clamp(18px, 3vw, 28px)",
                    transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                    transform: h ? "translateX(5px)" : "none",
                    boxShadow: h
                        ? `0 20px 48px rgba(0,0,0,${isDark ? 0.4 : 0.10}), 0 0 0 1px ${t.accentBorder}`
                        : t.shadow,
                    position: "relative", overflow: "hidden",
                }}
            >
                {/* Current role accent bar */}
                {item.current && (
                    <div style={{
                        position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
                        background: `linear-gradient(180deg, ${t.accent}, ${t.accent}44)`,
                        borderRadius: "20px 0 0 20px",
                    }} />
                )}

                {/* Top row */}
                <div className="exp-card-header" style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "flex-start", gap: 14, marginBottom: 16, flexWrap: "wrap",
                }}>
                    <div style={{ display: "flex", gap: 14, alignItems: "center", minWidth: 0 }}>
                        <div style={{
                            width: 50, height: 50, borderRadius: 15, flexShrink: 0,
                            background: t.accentBg, border: `1.5px solid ${t.accentBorder}`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: t.accent,
                            transform: h ? "scale(1.08) rotate(-4deg)" : "none",
                            transition: "transform 0.35s ease",
                        }}>
                            <Icon size={22} />
                        </div>
                        <div style={{ minWidth: 0 }}>
                            <div style={{
                                fontFamily: "'Syne', sans-serif",
                                fontSize: "clamp(15px, 2.5vw, 18px)", fontWeight: 700,
                                color: t.text, lineHeight: 1.25, marginBottom: 3,
                            }}>{item.role}</div>
                            <div style={{
                                fontSize: "clamp(13px, 2vw, 14.5px)", color: t.accent,
                                fontWeight: 600, fontFamily: "'Syne', sans-serif",
                            }}>{item.co}</div>
                            <div style={{ fontSize: 12, color: t.text3, marginTop: 2 }}>{item.sub}</div>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end", flexShrink: 0 }}>
                        <span style={{
                            display: "inline-flex", alignItems: "center", gap: 5,
                            padding: "5px 13px", borderRadius: 100,
                            background: item.current ? t.accentBg : (isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"),
                            border: `1px solid ${item.current ? t.accentBorder : t.border}`,
                            color: item.current ? t.accent : t.text3,
                            fontSize: 11.5, fontWeight: 600, fontFamily: "'Syne', sans-serif",
                            whiteSpace: "nowrap",
                        }}>
                            <Calendar size={10} />
                            {item.period}
                        </span>
                        {item.current && (
                            <span style={{
                                display: "inline-flex", alignItems: "center", gap: 5,
                                padding: "3px 10px", borderRadius: 100,
                                background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.30)",
                                color: "#22C55E", fontSize: 10.5, fontWeight: 700,
                                fontFamily: "'Syne', sans-serif",
                            }}>
                                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E", display: "inline-block", animation: "dotPulse 2s ease-in-out infinite" }} />
                                Current
                            </span>
                        )}
                    </div>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: t.border, marginBottom: 14 }} />

                {/* Bullet points */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {item.pts.map((pt, idx) => (
                        <div key={idx} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                            <ChevronRight size={13} color={t.accent} style={{ flexShrink: 0, marginTop: 3 }} />
                            <span style={{
                                color: t.text2, fontSize: "clamp(12.5px, 1.5vw, 14px)",
                                lineHeight: 1.65,
                            }}>{pt}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
