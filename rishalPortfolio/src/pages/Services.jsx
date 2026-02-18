import { useState } from "react";
import { Smartphone, Cloud, Zap, UploadCloud, Palette, Puzzle, ShieldCheck, MessageSquare } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useInView } from "../hooks/useInView";

const SVCS = [
    {
        title: "Flutter App Development",
        desc: "End-to-end cross-platform apps with clean architecture, modular code, and exceptional performance on Android & iOS.",
        tools: ["Flutter", "Dart", "GetX", "BLoC", "Provider"],
        badge: "Core",
        Icon: Smartphone,
    },
    {
        title: "Firebase Integration",
        desc: "Full backend: Auth, Firestore, Realtime DB, Cloud Functions, Storage, and FCM push notifications — scalable and secure.",
        tools: ["Firebase Auth", "Firestore", "FCM", "Functions"],
        badge: "Backend",
        Icon: Cloud,
    },
    {
        title: "REST API Integration",
        desc: "Seamless API connectivity with Dio/HTTP, JWT auth handling, interceptors, caching, and robust error management.",
        tools: ["REST APIs", "Dio", "JWT", "JSON"],
        badge: "API",
        Icon: Zap,
    },
    {
        title: "Play Store Deployment",
        desc: "Complete release pipeline: ProGuard, app signing, AAB build, Play Store listing with ASO and staged rollouts.",
        tools: ["Play Store", "App Signing", "AAB", "ASO"],
        badge: "Deploy",
        Icon: UploadCloud,
    },
    {
        title: "UI/UX Implementation",
        desc: "Pixel-perfect Material Design 3 interfaces, custom widgets, smooth animations, and fully responsive layouts.",
        tools: ["Material 3", "Animations", "Custom Widgets"],
        badge: "Design",
        Icon: Palette,
    },
    {
        title: "Third-Party Integrations",
        desc: "Razorpay/Stripe payments, Google Maps, local databases (Hive, SQLite), and any SDK your project needs.",
        tools: ["Payments", "Maps SDK", "Hive", "SQLite"],
        badge: "Integrations",
        Icon: Puzzle,
    },
    {
        title: "Security & Performance",
        desc: "SSL pinning, secure storage, code obfuscation, memory optimisation, lazy loading, and testing suites.",
        tools: ["SSL Pinning", "Secure Storage", "Testing"],
        badge: "Security",
        Icon: ShieldCheck,
    },
];

export default function Services() {
    const { t } = useTheme();
    const [ref, vis] = useInView(0.05);

    return (
        <section id="services" ref={ref} style={{
            background: t.servicesBg,
            borderTop: `1px solid ${t.border}`,
            borderBottom: `1px solid ${t.border}`,
            padding: "96px clamp(20px, 6vw, 96px)",
            position: "relative", overflow: "hidden",
        }}>
            {/* grid bg */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.5,
                backgroundImage: `linear-gradient(${t.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${t.gridLine} 1px, transparent 1px)`,
                backgroundSize: "44px 44px",
            }} />

            <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
                {/* Header */}
                <div style={{
                    opacity: vis ? 1 : 0,
                    transform: vis ? "none" : "translateY(20px)",
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                        <div style={{ width: 20, height: 2, background: t.accent, borderRadius: 2 }} />
                        <span style={{
                            fontFamily: "'Outfit', sans-serif", fontSize: 11,
                            color: t.accent, letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 600,
                        }}>Services</span>
                    </div>
                    <div style={{
                        display: "flex", justifyContent: "space-between",
                        alignItems: "flex-end", marginBottom: 44, flexWrap: "wrap", gap: 16,
                    }}>
                        <div>
                            <h2 style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: "clamp(28px, 4.5vw, 50px)", fontWeight: 800,
                                letterSpacing: "-1.5px", lineHeight: 1.05, color: t.text,
                            }}>
                                What I do<br />
                                <span style={{ color: t.accent }}>for you</span>
                            </h2>
                        </div>
                        <p style={{ color: t.text2, maxWidth: 280, fontSize: 14, lineHeight: 1.75 }}>
                            Flutter development with full-stack Firebase and REST API expertise for production apps.
                        </p>
                    </div>
                </div>

                {/* Cards */}
                <div className="services-grid" style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: 14,
                }}>
                    {SVCS.map((s, i) => <SvcCard key={s.title} s={s} t={t} delay={i * 55} vis={vis} />)}
                </div>

                {/* CTA strip */}
                <div style={{
                    marginTop: 36, padding: "20px 24px",
                    background: t.bgCard, border: `1px solid ${t.accentBorder}`,
                    borderRadius: 14,
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    flexWrap: "wrap", gap: 16,
                    opacity: vis ? 1 : 0,
                    transition: "opacity 0.5s ease 0.4s",
                }}>
                    <div>
                        <div style={{ fontSize: 16, fontWeight: 700, color: t.text, marginBottom: 3 }}>
                            Have a project in mind?
                        </div>
                        <div style={{ color: t.text2, fontSize: 13 }}>Let's build something great together.</div>
                    </div>
                    <button
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        style={{
                            background: t.accent, color: "#fff", border: "none",
                            borderRadius: 8, padding: "10px 20px",
                            fontSize: 13.5, fontWeight: 600, cursor: "pointer",
                            display: "flex", alignItems: "center", gap: 7,
                            fontFamily: "'Outfit', sans-serif", transition: "all 0.2s",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = t.accentHover; }}
                        onMouseLeave={e => { e.currentTarget.style.background = t.accent; }}
                    >
                        <MessageSquare size={14} strokeWidth={2} /> Let's Talk
                    </button>
                </div>
            </div>

            <style>{`
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}

function SvcCard({ s, t, delay, vis }) {
    const [h, setH] = useState(false);
    const { Icon } = s;
    return (
        <div
            onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
            style={{
                background: t.bgCard,
                border: `1px solid ${h ? t.accentBorder : t.border}`,
                borderRadius: 14, padding: "20px 18px",
                position: "relative", overflow: "hidden", cursor: "default",
                transform: h ? "translateY(-4px)" : "none",
                boxShadow: h ? t.shadowLg : t.shadow,
                transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
                opacity: vis ? 1 : 0,
                animation: vis ? `fadeInUp 0.5s ease ${delay}ms both` : "none",
            }}
        >
            {/* top accent line */}
            <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)`,
                opacity: h ? 1 : 0, transition: "opacity 0.25s",
            }} />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                <div style={{
                    width: 42, height: 42, borderRadius: 11,
                    background: t.accentBg, border: `1px solid ${t.accentBorder}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transform: h ? "scale(1.06) rotate(-3deg)" : "scale(1)",
                    transition: "transform 0.28s cubic-bezier(0.34,1.56,0.64,1)",
                }}>
                    <Icon size={19} color={t.accent} strokeWidth={1.8} />
                </div>
                <span style={{
                    fontSize: 9, fontWeight: 700, letterSpacing: 1.2, padding: "3px 9px",
                    borderRadius: 100, background: t.accentBg, border: `1px solid ${t.accentBorder}`,
                    color: t.accent, fontFamily: "'Outfit', sans-serif", textTransform: "uppercase",
                }}>{s.badge}</span>
            </div>

            <h3 style={{ fontSize: 15.5, fontWeight: 700, color: t.text, marginBottom: 8 }}>{s.title}</h3>
            <p style={{ color: t.text2, fontSize: 13, lineHeight: 1.75, marginBottom: 14 }}>{s.desc}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {s.tools.map(tool => (
                    <span key={tool} style={{
                        padding: "3px 8px", background: t.accentBg, border: `1px solid ${t.accentBorder}`,
                        borderRadius: 5, fontSize: 10.5, color: t.accent,
                        fontFamily: "'Outfit', sans-serif",
                    }}>{tool}</span>
                ))}
            </div>
        </div>
    );
}