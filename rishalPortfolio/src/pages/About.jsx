import { useState } from "react";
import {
    Rocket, Laptop, Code2, GraduationCap,
    Download, ExternalLink, Award, BookOpen, ChevronRight,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useInView } from "../hooks/useInView";
import aboutImg from "../assets/about.jpg";

const SKILLS = [
    { cat: "Mobile", items: ["Flutter", "Dart", "GetX", "Provider", "BLoC", "Riverpod"] },
    { cat: "Backend", items: ["Firebase Auth", "Firestore", "Realtime DB", "Hive", "SQLite"] },
    { cat: "API & Integrations", items: ["REST APIs", "Dio", "FCM", "Payment Gateway", "Maps SDK", "PDF Gen"] },
    { cat: "DevOps & Tools", items: ["Git & GitHub", "Play Store", "App Signing", "CI/CD", "Android Studio"] },
];

const EXP = [
    {
        role: "Flutter Developer",
        co: "EBSOR Infosystems",
        sub: "Full-time · Manjeri (Saudi-Based Client)",
        period: "May 2025 – Present",
        Icon: Rocket,
        pts: [
            "Built ECSO Logistics App — live on Google Play Store",
            "Developed Inspec QC & production monitoring application",
            "Implemented role-based access control with JWT auth",
            "Invoice booking with PDF generation & real-time tracking",
            "40% faster load times via performance optimization",
        ],
    },
    {
        role: "Flutter Developer",
        co: "Freelance",
        sub: "Remote · Multiple Clients",
        period: "Feb 2024 – Apr 2025",
        Icon: Laptop,
        pts: [
            "Leads Management CRM — sales pipeline & follow-up automation",
            "Site Diary app for construction project documentation",
            "Firebase-backed business automation solutions",
        ],
    },
    {
        role: "Software Developer",
        co: "XpertConsortium Technologies LLP",
        sub: "Full-time · Calicut, India",
        period: "May 2023 – Jan 2024",
        Icon: Code2,
        pts: [
            "Learn Easy e-learning app with video, PDF & quiz modules",
            "REST API integrations with Flutter & Firebase backend",
        ],
    },
    {
        role: "Flutter Intern",
        co: "Edapt",
        sub: "Internship · Malappuram",
        period: "Sep 2022 – Mar 2023",
        Icon: GraduationCap,
        pts: [
            "Developed quiz app and e-commerce mobile application",
            "Hands-on with Dart, Firebase Auth, and REST APIs",
        ],
    },
];

export default function About() {
    const { t } = useTheme();
    const [ref, vis] = useInView(0.07);

    return (
        <section id="about" ref={ref} style={{
            background: t.bg,
            padding: "96px clamp(20px, 6vw, 96px)",
        }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                {/* Section label */}
                <SectionLabel label="About Me" t={t} vis={vis} />

                {/* Profile grid */}
                <div className="about-grid" style={{
                    display: "flex", gap: "clamp(24px, 6vw, 64px)",
                    alignItems: "flex-start", marginBottom: 72, flexWrap: "wrap",
                    opacity: vis ? 1 : 0,
                    transform: vis ? "none" : "translateY(20px)",
                    transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
                }}>
                    {/* Photo */}
                    <div className="about-photo-col" style={{ flex: "0 0 auto", width: "clamp(160px, 18vw, 220px)" }}>
                        <div style={{
                            borderRadius: 16, overflow: "hidden",
                            border: `1px solid ${t.border2}`, boxShadow: t.shadowLg,
                        }}>
                            <img src={aboutImg} alt="Rishal" style={{
                                width: "100%", height: "auto", display: "block",
                            }} />
                        </div>
                        {/* Quick facts */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 7, marginTop: 12 }}>
                            {[
                                { text: "3 Apps on Play Store" },
                                { text: "BSc Computer Science" },
                                { text: "Kerala, India" },
                            ].map(({ text }) => (
                                <div key={text} style={{
                                    display: "flex", alignItems: "center", gap: 8,
                                    padding: "8px 11px", background: t.bgCard,
                                    border: `1px solid ${t.border}`, borderRadius: 7,
                                }}>
                                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: t.accent, flexShrink: 0 }} />
                                    <span style={{ color: t.text2, fontSize: 12, fontWeight: 500 }}>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="about-bio-col" style={{ flex: 1, minWidth: "min(100%, 280px)" }}>
                        <h2 style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 800,
                            letterSpacing: "-0.02em", lineHeight: 1.1,
                            color: t.text, marginBottom: 6,
                        }}>Building apps</h2>
                        <h2 style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 800,
                            letterSpacing: "-0.02em", lineHeight: 1.1,
                            color: t.accent, marginBottom: 20,
                        }}>people love to use</h2>

                        <p style={{ color: t.text2, fontSize: "clamp(14px, 1.6vw, 15px)", lineHeight: 1.75, marginBottom: 12 }}>
                            Flutter Developer with <strong style={{ color: t.text }}>3+ years of hands-on experience</strong> building
                            high-performance cross-platform mobile and web applications.
                        </p>
                        <p style={{ color: t.text2, fontSize: "clamp(14px, 1.6vw, 15px)", lineHeight: 1.75, marginBottom: 28 }}>
                            My stack revolves around <strong style={{ color: t.text }}>Flutter, Dart, Firebase, and REST APIs</strong> with
                            a deep focus on clean architecture, state management, and pixel-perfect UI/UX.
                        </p>

                        {/* CTA */}
                        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                            <a href="/resume.pdf" download style={{
                                display: "inline-flex", alignItems: "center", gap: 7,
                                padding: "10px 20px", background: t.accent, color: "#fff",
                                border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600,
                                textDecoration: "none", fontFamily: "'Outfit', sans-serif",
                                transition: "all 0.2s",
                            }}
                                onMouseEnter={e => { e.currentTarget.style.background = t.accentHover; }}
                                onMouseLeave={e => { e.currentTarget.style.background = t.accent; }}
                            >
                                <Download size={14} /> Resume
                            </a>
                            <a href="https://github.com/riishal" target="_blank" rel="noreferrer" style={{
                                display: "inline-flex", alignItems: "center", gap: 7,
                                padding: "9px 18px", background: "transparent", color: t.text2,
                                border: `1.5px solid ${t.border2}`, borderRadius: 8, fontSize: 13, fontWeight: 600,
                                textDecoration: "none", fontFamily: "'Outfit', sans-serif",
                                transition: "all 0.2s",
                            }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.color = t.accent; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = t.border2; e.currentTarget.style.color = t.text2; }}
                            >
                                <ExternalLink size={14} /> GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div style={{
                    marginBottom: 72,
                    opacity: vis ? 1 : 0,
                    transform: vis ? "none" : "translateY(20px)",
                    transition: "opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s",
                }}>
                    <SubLabel label="Technical Skills" t={t} />
                    <div className="skills-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: 12, marginTop: 16,
                    }}>
                        {SKILLS.map(({ cat, items }) => (
                            <div key={cat} style={{
                                padding: "16px 16px",
                                background: t.bgCard, border: `1px solid ${t.border}`,
                                borderRadius: 12,
                            }}>
                                <div style={{
                                    fontSize: 10, color: t.accent, letterSpacing: 1.5,
                                    textTransform: "uppercase", marginBottom: 12, fontWeight: 700,
                                    fontFamily: "'Outfit', sans-serif",
                                }}>{cat}</div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                                    {items.map(s => <SkillPill key={s} s={s} t={t} />)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience */}
                <div style={{
                    opacity: vis ? 1 : 0,
                    transform: vis ? "none" : "translateY(20px)",
                    transition: "opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s",
                }}>
                    <SubLabel label="Work Experience" t={t} />
                    <div style={{ display: "flex", flexDirection: "column", marginTop: 24 }}>
                        {EXP.map((e, i) => <ExpItem key={i} e={e} i={i} last={i === EXP.length - 1} t={t} />)}
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .about-grid { flex-direction: column !important; align-items: center !important; }
          .about-photo-col { width: 100% !important; max-width: 240px !important; margin: 0 auto !important; }
          .about-bio-col { text-align: center !important; width: 100% !important; }
          .about-bio-col > div { justify-content: center !important; }
        }
        @media (max-width: 480px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}

function SectionLabel({ label, t, vis }) {
    return (
        <div style={{
            display: "flex", alignItems: "center", gap: 10, marginBottom: 12,
            opacity: vis ? 1 : 0, transition: "opacity 0.5s ease",
        }}>
            <div style={{ width: 20, height: 2, background: t.accent, borderRadius: 2 }} />
            <span style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 11,
                color: t.accent, letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 600,
            }}>{label}</span>
        </div>
    );
}

function SubLabel({ label, t }) {
    return (
        <div style={{
            fontSize: 10, color: t.text3, letterSpacing: 2,
            textTransform: "uppercase", marginBottom: 4, fontWeight: 600,
        }}>{label}</div>
    );
}

function SkillPill({ s, t }) {
    const [h, setH] = useState(false);
    return (
        <span
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
            style={{
                display: "inline-block", padding: "4px 10px",
                background: h ? t.accentBg : "transparent",
                border: `1px solid ${h ? t.accentBorder : t.border}`,
                borderRadius: 6, fontSize: 11.5,
                color: h ? t.accent : t.text2, fontWeight: 500,
                transition: "all 0.18s", cursor: "default",
            }}
        >{s}</span>
    );
}

function ExpItem({ e, i, last, t }) {
    const [h, setH] = useState(false);
    const { Icon } = e;
    return (
        <div style={{
            display: "flex", gap: 14,
            paddingBottom: last ? 0 : 24, position: "relative",
        }}>
            {!last && (
                <div style={{
                    position: "absolute", left: 10, top: 24, bottom: 0, width: 1,
                    background: `linear-gradient(to bottom, ${t.accentBorder}, transparent)`,
                }} />
            )}

            {/* Icon */}
            <div style={{
                flexShrink: 0, marginTop: 2,
                width: 22, height: 22, borderRadius: "50%",
                background: t.accentBg, border: `1.5px solid ${t.accentBorder}`,
                display: "flex", alignItems: "center", justifyContent: "center",
            }}>
                <Icon size={11} color={t.accent} strokeWidth={2.5} />
            </div>

            <div
                onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
                style={{
                    flex: 1, padding: "14px 16px",
                    background: h ? t.accentBg : t.bgCard,
                    border: `1px solid ${h ? t.accentBorder : t.border}`,
                    borderRadius: 12, transition: "all 0.22s", cursor: "default",
                }}
            >
                <div style={{
                    display: "flex", flexWrap: "wrap",
                    justifyContent: "space-between", gap: 8, marginBottom: 8,
                }}>
                    <div>
                        <div style={{ fontSize: 14.5, fontWeight: 700, color: t.text }}>{e.role}</div>
                        <div style={{ fontSize: 13.5, fontWeight: 600, color: t.accent, marginTop: 1 }}>{e.co}</div>
                        <div style={{ fontSize: 11, color: t.text3, marginTop: 2 }}>{e.sub}</div>
                    </div>
                    <span style={{
                        fontFamily: "'Outfit', sans-serif", fontSize: 10, color: t.accent,
                        background: t.accentBg, border: `1px solid ${t.accentBorder}`,
                        padding: "3px 9px", borderRadius: 5, height: "fit-content", whiteSpace: "nowrap",
                    }}>{e.period}</span>
                </div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {e.pts.map((pt, pi) => (
                        <li key={pi} style={{
                            display: "flex", gap: 7, alignItems: "flex-start",
                            color: t.text2, fontSize: 12.5, lineHeight: 1.6, marginBottom: 4,
                        }}>
                            <ChevronRight size={11} color={t.accent} style={{ flexShrink: 0, marginTop: 3 }} />
                            <span>{pt}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}