import { useState } from "react";
import {
    Rocket, Laptop, Code2, GraduationCap,
    Download, ExternalLink, ChevronRight,
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
            padding: "96px clamp(24px, 6vw, 96px)",
            borderTop: `1px solid ${t.border}`,
        }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                {/* Section eyebrow */}
                <Eyebrow label="About Me" t={t} vis={vis} />

                {/* Profile row */}
                <div className="about-grid" style={{
                    display: "flex", gap: "clamp(28px, 6vw, 72px)",
                    alignItems: "flex-start", marginBottom: 80, flexWrap: "wrap",
                }}>
                    {/* Photo — rectangular, no border-radius */}
                    <div className="about-photo-col" style={{
                        flex: "0 0 auto",
                        width: "clamp(160px, 18vw, 240px)",
                        opacity: vis ? 1 : 0,
                        transform: vis ? "none" : "translateX(-24px)",
                        transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
                    }}>
                        <div style={{
                            position: "relative", overflow: "hidden",
                            borderRadius: 4,  /* very subtle, almost square */
                        }}
                            onMouseEnter={e => { e.currentTarget.querySelector("img").style.transform = "scale(1.04)"; }}
                            onMouseLeave={e => { e.currentTarget.querySelector("img").style.transform = "scale(1)"; }}
                        >
                            <img src={aboutImg} alt="Rishal" style={{
                                width: "100%", height: "auto", display: "block",
                                transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                            }} />
                            {/* bottom gradient overlay */}
                            <div style={{
                                position: "absolute", bottom: 0, left: 0, right: 0, height: "30%",
                                background: `linear-gradient(to top, ${t.bg} 0%, transparent 100%)`,
                                pointerEvents: "none",
                            }} />
                        </div>

                        {/* Simple fact pills */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 14 }}>
                            {["3 Apps on Play Store", "BSc Computer Science", "Kerala, India"].map(text => (
                                <div key={text} style={{
                                    display: "flex", alignItems: "center", gap: 8,
                                    padding: "7px 11px", background: t.bgCard,
                                    border: `1px solid ${t.border}`, borderRadius: 6,
                                    transition: "border-color 0.2s, transform 0.2s",
                                    cursor: "default",
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = t.accentBorder;
                                        e.currentTarget.style.transform = "translateX(4px)";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = t.border;
                                        e.currentTarget.style.transform = "none";
                                    }}
                                >
                                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: t.accent, flexShrink: 0 }} />
                                    <span style={{ color: t.text2, fontSize: 12, fontWeight: 500 }}>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="about-bio-col" style={{
                        flex: 1, minWidth: "min(100%, 280px)",
                        opacity: vis ? 1 : 0,
                        transform: vis ? "none" : "translateY(24px)",
                        transition: "opacity 0.7s ease 0.18s, transform 0.7s ease 0.18s",
                    }}>
                        <h2 style={{
                            fontFamily: "'Syne', sans-serif",
                            fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 800,
                            letterSpacing: "-0.03em", lineHeight: 1.05,
                            color: t.text, marginBottom: 6,
                        }}>Building apps</h2>
                        <h2 style={{
                            fontFamily: "'Syne', sans-serif",
                            fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 800,
                            letterSpacing: "-0.03em", lineHeight: 1.05,
                            color: t.accent, marginBottom: 22,
                        }}>people love to use.</h2>

                        <p style={{ color: t.text2, fontSize: "clamp(13.5px, 1.5vw, 15px)", lineHeight: 1.82, marginBottom: 14 }}>
                            Flutter Developer with <strong style={{ color: t.text }}>3+ years of hands-on experience</strong> building
                            high-performance cross-platform mobile and web applications.
                        </p>
                        <p style={{ color: t.text2, fontSize: "clamp(13.5px, 1.5vw, 15px)", lineHeight: 1.82, marginBottom: 32 }}>
                            My stack revolves around <strong style={{ color: t.text }}>Flutter, Dart, Firebase, and REST APIs</strong> with
                            deep focus on clean architecture, state management (GetX, BLoC, Provider), and pixel-perfect UI.
                        </p>

                        {/* CTA buttons */}
                        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                            <AboutBtn href="/resume.pdf" download icon={<Download size={13} />} label="Resume" t={t} primary />
                            <AboutBtn href="https://github.com/riishal" target="_blank" icon={<ExternalLink size={13} />} label="GitHub" t={t} />
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div style={{
                    marginBottom: 80,
                    opacity: vis ? 1 : 0,
                    transform: vis ? "none" : "translateY(24px)",
                    transition: "opacity 0.7s ease 0.28s, transform 0.7s ease 0.28s",
                }}>
                    <SubLabel label="Technical Skills" t={t} />
                    <div className="skills-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: 10, marginTop: 18,
                    }}>
                        {SKILLS.map(({ cat, items }) => (
                            <SkillCard key={cat} cat={cat} items={items} t={t} />
                        ))}
                    </div>
                </div>

                {/* Experience */}
                <div style={{
                    opacity: vis ? 1 : 0,
                    transform: vis ? "none" : "translateY(24px)",
                    transition: "opacity 0.7s ease 0.36s, transform 0.7s ease 0.36s",
                }}>
                    <SubLabel label="Work Experience" t={t} />
                    <div style={{ display: "flex", flexDirection: "column", marginTop: 24 }}>
                        {EXP.map((e, i) => <ExpItem key={i} e={e} last={i === EXP.length - 1} t={t} />)}
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .about-grid { flex-direction: column !important; align-items: center !important; }
          .about-photo-col { width: 100% !important; max-width: 260px !important; }
          .about-bio-col { text-align: left !important; }
        }
        @media (max-width: 480px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}

function Eyebrow({ label, t, vis }) {
    return (
        <div style={{
            display: "flex", alignItems: "center", gap: 10, marginBottom: 14,
            opacity: vis ? 1 : 0, transition: "opacity 0.5s ease",
        }}>
            <div style={{ width: 18, height: 1.5, background: t.accent, borderRadius: 2 }} />
            <span style={{
                fontFamily: "'Syne', sans-serif", fontSize: 10.5,
                color: t.accent, letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 700,
            }}>{label}</span>
        </div>
    );
}

function SubLabel({ label, t }) {
    return (
        <div style={{
            fontSize: 10.5, color: t.text3, letterSpacing: 2,
            textTransform: "uppercase", marginBottom: 4, fontWeight: 700,
            fontFamily: "'Syne', sans-serif",
        }}>{label}</div>
    );
}

function SkillCard({ cat, items, t }) {
    const [h, setH] = useState(false);
    return (
        <div
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
            style={{
                padding: "16px 16px",
                background: t.bgCard,
                border: `1px solid ${h ? t.accentBorder : t.border}`,
                borderRadius: 10,
                transition: "border-color 0.2s, transform 0.2s",
                transform: h ? "translateY(-2px)" : "none",
            }}
        >
            <div style={{
                fontSize: 10, color: t.accent, letterSpacing: 1.5,
                textTransform: "uppercase", marginBottom: 12, fontWeight: 700,
                fontFamily: "'Syne', sans-serif",
            }}>{cat}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {items.map(s => <SkillPill key={s} s={s} t={t} />)}
            </div>
        </div>
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
                borderRadius: 5, fontSize: 11.5,
                color: h ? t.accent : t.text2, fontWeight: 500,
                transition: "all 0.18s", cursor: "default",
            }}
        >{s}</span>
    );
}

function ExpItem({ e, last, t }) {
    const [h, setH] = useState(false);
    const { Icon } = e;
    return (
        <div style={{ display: "flex", gap: 14, paddingBottom: last ? 0 : 22, position: "relative" }}>
            {!last && (
                <div style={{
                    position: "absolute", left: 10, top: 24, bottom: 0, width: 1,
                    background: `linear-gradient(to bottom, ${t.accentBorder}, transparent)`,
                }} />
            )}
            <div style={{
                flexShrink: 0, marginTop: 2, width: 22, height: 22, borderRadius: "50%",
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
                    borderRadius: 10, transition: "all 0.22s", cursor: "default",
                    transform: h ? "translateX(3px)" : "none",
                }}
            >
                <div style={{
                    display: "flex", flexWrap: "wrap",
                    justifyContent: "space-between", gap: 8, marginBottom: 8,
                }}>
                    <div>
                        <div style={{ fontSize: 14.5, fontWeight: 700, color: t.text, fontFamily: "'Syne', sans-serif" }}>{e.role}</div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: t.accent, marginTop: 1 }}>{e.co}</div>
                        <div style={{ fontSize: 11, color: t.text3, marginTop: 2 }}>{e.sub}</div>
                    </div>
                    <span style={{
                        fontFamily: "'Syne', sans-serif", fontSize: 10, color: t.accent,
                        background: t.accentBg, border: `1px solid ${t.accentBorder}`,
                        padding: "3px 9px", borderRadius: 5, height: "fit-content", whiteSpace: "nowrap",
                    }}>{e.period}</span>
                </div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {e.pts.map((pt, pi) => (
                        <li key={pi} style={{
                            display: "flex", gap: 7, alignItems: "flex-start",
                            color: t.text2, fontSize: 12.5, lineHeight: 1.65, marginBottom: 4,
                        }}>
                            <ChevronRight size={11} color={t.accent} style={{ flexShrink: 0, marginTop: 3 }} />
                            {pt}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function AboutBtn({ href, download, target, icon, label, t, primary }) {
    const [h, setH] = useState(false);
    return (
        <a href={href} download={download} target={target} rel={target ? "noreferrer" : undefined}
            onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
            style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                padding: primary ? "10px 20px" : "9px 18px",
                background: primary ? (h ? t.accentHover : t.accent) : (h ? t.accentBg : "transparent"),
                color: primary ? "#fff" : (h ? t.accent : t.text2),
                border: primary ? "none" : `1.5px solid ${h ? t.accent : t.border2}`,
                borderRadius: 7, fontSize: 13, fontWeight: 600,
                textDecoration: "none", fontFamily: "'Syne', sans-serif",
                transform: h ? "translateY(-2px)" : "none",
                transition: "all 0.2s cubic-bezier(0.16,1,0.3,1)",
                boxShadow: h && primary ? t.shadowAccent : "none",
            }}
        >{icon}{label}</a>
    );
}