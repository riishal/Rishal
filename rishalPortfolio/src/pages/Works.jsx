import { useState, useEffect, useRef } from "react";
import {
    X, ExternalLink, Smartphone, CheckCircle,
    Calendar, Building2, Layers, Clock,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useInView } from "../hooks/useInView";

import ecso1 from "../assets/ecso/ecso1.jpeg";
import ecso2 from "../assets/ecso/ecso2.jpeg";
import ecso3 from "../assets/ecso/ecso3.jpeg";
import ecso4 from "../assets/ecso/ecso4.jpeg";
import ecsoImg from "../assets/ecso/ecsoimage.jpeg";
import inspec1 from "../assets/inspec/inspec1.jpeg";
import inspec2 from "../assets/inspec/inspec2.jpeg";
import inspec3 from "../assets/inspec/inspec3.jpeg";
import inspec4 from "../assets/inspec/inspec4.jpeg";
import inspec5 from "../assets/inspec/inspec5.jpeg";
import inspec6 from "../assets/inspec/inspec6.jpeg";
import inspecImg from "../assets/inspec/inspecimage.jpeg";
import sitediary1 from "../assets/sitediary/sitediary1.jpeg";
import sitediary2 from "../assets/sitediary/sitediary2.jpeg";
import sitediary3 from "../assets/sitediary/sitediary3.jpeg";
import sitediary4 from "../assets/sitediary/sitediary4.jpeg";
import sitediary5 from "../assets/sitediary/sitediary5.jpeg";
import sitediary6 from "../assets/sitediary/sitediary6.jpeg";
import sitediaryImg from "../assets/sitediary/sitediaryimage.jpeg";

const PROJECTS = [
    {
        id: 1,
        title: "ECSO – Logistics",
        company: "ESBOR Infosystems",
        period: "May 2025 – Present",
        status: "Live",
        category: "Logistics",
        desc: "End-to-end logistics platform with real-time cargo tracking, invoice booking, PDF generation, and role-based auth.",
        longDesc: "ECSO is a comprehensive logistics and courier management system for a Saudi-based company. Full shipment lifecycle — booking to delivery — with WebSocket tracking, automated PDF invoices, and role-based access for admins, branch managers, and staff.",
        tags: ["Flutter", "Firebase", "REST API", "GetX", "JWT", "PDF Gen"],
        link: "https://play.google.com/store/apps/details?id=com.ebsor.ecso",
        coverImg: ecsoImg,
        screenshots: [ecso1, ecso2, ecso3, ecso4],
        highlights: ["Real-time cargo tracking via WebSocket", "PDF invoice generation & sharing", "Role-based access control", "Multi-branch management", "40% faster load performance"],
    },
    {
        id: 2,
        title: "Inspec – QC Monitor",
        company: "ESBOR Infosystems",
        period: "2025",
        status: "Live",
        category: "Quality Control",
        desc: "Quality control & production monitoring with structured inspection workflows and analytics dashboards.",
        longDesc: "Inspec digitalises manufacturing QC — replacing paper checklists with smart workflows. Teams capture defects live on the shop floor while managers monitor dashboards for trends, compliance, and approvals.",
        tags: ["Flutter", "Dart", "Firebase", "Offline First", "Analytics"],
        link: "https://play.google.com/store/apps/details?id=com.ebsor.inspec",
        coverImg: inspecImg,
        screenshots: [inspec1, inspec2, inspec3, inspec4, inspec5, inspec6],
        highlights: ["Structured QC inspection workflows", "Real-time production monitoring", "Offline-first with background sync", "Analytics dashboard with charts", "Multi-level approval system"],
    },
    {
        id: 3,
        title: "Site Diary",
        company: "ESBOR Infosystems",
        period: "2025",
        status: "Live",
        category: "Construction",
        desc: "Digital site diary for construction management — daily logs, photo documentation, manpower tracking.",
        longDesc: "Site Diary replaces paper-based construction diaries. Engineers log daily progress, annotate photos, record manpower and equipment, and share structured reports with clients.",
        tags: ["Flutter", "Firebase", "REST API", "Photo Docs", "GetX"],
        link: null,
        coverImg: sitediaryImg,
        screenshots: [sitediary1, sitediary2, sitediary3, sitediary4, sitediary5, sitediary6],
        highlights: ["Daily site progress logging", "Photo capture with annotations", "Manpower & equipment tracking", "Automated report generation", "Multi-project management"],
    },
    {
        id: 4,
        title: "Leads CRM",
        company: "Freelance",
        period: "Feb 2024 – Apr 2025",
        status: "Delivered",
        category: "CRM",
        desc: "CRM for sales teams — lead pipeline, follow-up reminders, activity logs, and Firebase real-time sync.",
        longDesc: "Full-featured CRM replacing spreadsheets for a growing sales team. Kanban pipeline, FCM follow-up reminders, contact histories, performance dashboards, and CSV export.",
        tags: ["Flutter", "Firebase", "FCM", "GetX", "Charts"],
        link: null,
        coverImg: null,
        screenshots: [],
        highlights: ["Kanban pipeline with drag-drop stages", "Smart FCM follow-up reminders", "Contact history & activity feed", "Sales performance dashboard", "CSV data export"],
    },
    {
        id: 5,
        title: "Learn Easy – E-Learning",
        company: "XpertConsortium",
        period: "May 2023 – Jan 2024",
        status: "Delivered",
        category: "Education",
        desc: "E-learning platform with video streaming, PDF viewer, interactive quizzes, and progress tracking.",
        longDesc: "LMS mobile app — video lessons, PDF material, timed quizzes, and push notifications for new content.",
        tags: ["Flutter", "Firebase", "REST API", "Video Player"],
        link: null,
        coverImg: null,
        screenshots: [],
        highlights: ["Video streaming with controls", "In-app PDF document viewer", "Interactive timed quiz engine", "Course progress tracking", "Push notifications for content"],
    },
    {
        id: 6,
        title: "E-Commerce App",
        company: "Edapt (Internship)",
        period: "Sep 2022 – Mar 2023",
        status: "Internship",
        category: "E-Commerce",
        desc: "Feature-complete e-commerce app with catalog, cart, wishlist, order management, and Firebase authentication.",
        longDesc: "Firebase Auth, real-time Firestore inventory, cart & wishlist, order history, and FCM order notifications.",
        tags: ["Flutter", "Firebase", "Dart", "Firestore"],
        link: null,
        coverImg: null,
        screenshots: [],
        highlights: ["Product catalog with search & filters", "Cart, wishlist & checkout", "Firebase Auth (email + Google)", "Real-time Firestore inventory", "FCM order notifications"],
    },
];

const SC = {
    Live: { c: "#22C55E", bg: "rgba(34,197,94,0.10)", b: "rgba(34,197,94,0.25)" },
    Delivered: { c: "#60A5FA", bg: "rgba(96,165,250,0.10)", b: "rgba(96,165,250,0.25)" },
    Internship: { c: "#A78BFA", bg: "rgba(167,139,250,0.10)", b: "rgba(167,139,250,0.25)" },
};

/* ── Phone Frame ── */
function PhoneFrame({ src, large = false }) {
    const w = large ? 220 : 150;
    const h = large ? 452 : 308;
    return (
        <div style={{
            width: w, height: h, flexShrink: 0,
            background: "linear-gradient(145deg, #1c1c1c, #0a0a0a)",
            borderRadius: large ? 32 : 22,
            padding: large ? 8 : 6,
            boxShadow: "0 24px 48px -12px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.07)",
            position: "relative",
        }}>
            {/* Notch */}
            <div style={{
                position: "absolute", top: large ? 6 : 4, left: "50%", transform: "translateX(-50%)",
                width: large ? 80 : 56, height: large ? 20 : 14,
                background: "#000", borderRadius: 14, zIndex: 10, border: "1px solid #1a1a1a",
            }} />
            {/* Side buttons */}
            <div style={{ position: "absolute", right: -2, top: large ? 90 : 62, width: 2, height: large ? 44 : 30, background: "#222", borderRadius: "0 2px 2px 0" }} />
            <div style={{ position: "absolute", left: -2, top: large ? 68 : 46, width: 2, height: large ? 24 : 18, background: "#222", borderRadius: "2px 0 0 2px" }} />
            <div style={{ position: "absolute", left: -2, top: large ? 104 : 72, width: 2, height: large ? 24 : 18, background: "#222", borderRadius: "2px 0 0 2px" }} />
            {/* Screen */}
            <div style={{
                width: "100%", height: "100%",
                borderRadius: large ? 24 : 16, overflow: "hidden", background: "#000",
            }}>
                {src
                    ? <img src={src} alt="screenshot" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                    : <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#111" }}>
                        <Smartphone size={32} color="#333" />
                    </div>
                }
            </div>
            {/* Home bar */}
            <div style={{
                position: "absolute", bottom: large ? 4 : 3, left: "50%", transform: "translateX(-50%)",
                width: large ? 88 : 60, height: 3, background: "rgba(255,255,255,0.22)", borderRadius: 100,
            }} />
        </div>
    );
}

/* ── Carousel — with touch/mouse scroll support for mobile ── */
function Carousel({ screenshots, accent }) {
    const [idx, setIdx] = useState(0);
    const timerRef = useRef(null);
    const total = screenshots.length;
    const trackRef = useRef(null);
    const startX = useRef(0);
    const isDragging = useRef(false);

    // Auto-advance
    useEffect(() => {
        if (total <= 1) return;
        timerRef.current = setInterval(() => setIdx(p => (p + 1) % total), 2200);
        return () => clearInterval(timerRef.current);
    }, [total]);

    const pause = () => clearInterval(timerRef.current);
    const resume = () => {
        if (total <= 1) return;
        timerRef.current = setInterval(() => setIdx(p => (p + 1) % total), 2200);
    };

    // Touch handlers for swipe
    const onTouchStart = (e) => { startX.current = e.touches[0].clientX; pause(); };
    const onTouchEnd = (e) => {
        const dx = e.changedTouches[0].clientX - startX.current;
        if (Math.abs(dx) > 40) setIdx(p => dx < 0 ? (p + 1) % total : (p - 1 + total) % total);
        resume();
    };
    const onMouseDown = (e) => { startX.current = e.clientX; isDragging.current = true; pause(); };
    const onMouseUp = (e) => {
        if (!isDragging.current) return;
        isDragging.current = false;
        const dx = e.clientX - startX.current;
        if (Math.abs(dx) > 40) setIdx(p => dx < 0 ? (p + 1) % total : (p - 1 + total) % total);
        resume();
    };

    if (total === 0) return (
        <div style={{ display: "flex", justifyContent: "center", padding: "32px 0" }}>
            <PhoneFrame src={null} large />
        </div>
    );

    const prevIdx = (idx - 1 + total) % total;
    const nextIdx = (idx + 1) % total;

    return (
        <div onMouseEnter={pause} onMouseLeave={resume}
            onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown} onMouseUp={onMouseUp}
            style={{ userSelect: "none", cursor: total > 1 ? "grab" : "default" }}
        >
            {/* 3-phone display */}
            <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
                gap: "clamp(6px, 2vw, 24px)", padding: "24px 0 36px",
            }}>
                {/* Prev — hidden mobile */}
                <div className="side-phone" style={{ opacity: 0.3, transform: "scale(0.8)", transformOrigin: "right center", flexShrink: 0 }}>
                    <PhoneFrame src={screenshots[prevIdx]} />
                </div>

                {/* Center — main */}
                <div style={{ position: "relative", zIndex: 2, flexShrink: 0 }}>
                    <PhoneFrame src={screenshots[idx]} large />
                    <div style={{
                        position: "absolute", bottom: -22, left: "50%", transform: "translateX(-50%)",
                        background: accent, color: "#fff", borderRadius: 100,
                        padding: "3px 12px", fontSize: 10.5, fontWeight: 700,
                        whiteSpace: "nowrap", fontFamily: "'Syne', sans-serif",
                    }}>{idx + 1} / {total}</div>
                </div>

                {/* Next — hidden mobile */}
                <div className="side-phone" style={{ opacity: 0.3, transform: "scale(0.8)", transformOrigin: "left center", flexShrink: 0 }}>
                    <PhoneFrame src={screenshots[nextIdx]} />
                </div>
            </div>

            {/* Nav buttons + dots */}
            {total > 1 && (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 12 }}>
                    <NavBtn onClick={() => setIdx(p => (p - 1 + total) % total)} accent={accent}>←</NavBtn>
                    <div style={{ display: "flex", gap: 6 }}>
                        {screenshots.map((_, i) => (
                            <button key={i} onClick={() => setIdx(i)} style={{
                                width: i === idx ? 22 : 7, height: 7, borderRadius: 4,
                                border: "none", padding: 0, cursor: "pointer",
                                background: i === idx ? accent : "rgba(255,255,255,0.15)",
                                transition: "all 0.22s",
                            }} />
                        ))}
                    </div>
                    <NavBtn onClick={() => setIdx(p => (p + 1) % total)} accent={accent}>→</NavBtn>
                </div>
            )}

            <style>{`
        @media (max-width: 600px) {
          .side-phone { display: none !important; }
        }
      `}</style>
        </div>
    );
}

function NavBtn({ onClick, accent, children }) {
    const [h, setH] = useState(false);
    return (
        <button onClick={onClick}
            onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
            style={{
                width: 36, height: 36, borderRadius: "50%",
                border: `1px solid ${h ? accent : "rgba(255,255,255,0.12)"}`,
                background: h ? `${accent}18` : "rgba(255,255,255,0.03)",
                color: h ? accent : "#888", fontSize: 15, fontWeight: 700,
                cursor: "pointer", transition: "all 0.2s",
                display: "flex", alignItems: "center", justifyContent: "center",
            }}
        >{children}</button>
    );
}

/* ── Modal ── */
function Modal({ p, onClose, t, isDark }) {
    useEffect(() => {
        const fn = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", fn);
        document.body.style.overflow = "hidden";
        return () => { document.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
    }, [onClose]);

    const sc = SC[p.status] || SC.Delivered;

    return (
        <div onClick={onClose} style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.96)", backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "clamp(12px, 3vw, 24px)",
            animation: "fadeIn 0.18s ease",
        }}>
            <div onClick={e => e.stopPropagation()} style={{
                background: t.bg2, border: `1px solid ${t.border2}`,
                borderRadius: 24, width: "100%", maxWidth: 1100,
                maxHeight: "90vh", overflowY: "auto", position: "relative",
            }}>
                {/* Close */}
                <button onClick={onClose} style={{
                    position: "absolute", top: 14, right: 14, width: 38, height: 38,
                    borderRadius: "50%", background: t.bgCard, border: `1px solid ${t.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", zIndex: 10, transition: "all 0.18s",
                    color: t.text,
                }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = t.accentBorder; e.currentTarget.style.background = t.accentBg; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.background = t.bgCard; }}
                ><X size={15} /></button>

                {/* Header */}
                <div style={{ padding: "28px 28px 18px", borderBottom: `1px solid ${t.border}` }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10, flexWrap: "wrap" }}>
                        <span style={{
                            fontSize: 10, color: sc.c, background: sc.bg, border: `1px solid ${sc.b}`,
                            padding: "3px 12px", borderRadius: 100, fontWeight: 700,
                        }}>{p.status === "Live" ? "● LIVE" : p.status}</span>
                        <span style={{ display: "flex", alignItems: "center", gap: 5, color: t.text3, fontSize: 12 }}>
                            <Building2 size={11} /> {p.company}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: 5, color: t.text3, fontSize: 12 }}>
                            <Calendar size={11} /> {p.period}
                        </span>
                    </div>
                    <h2 style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(20px, 3.5vw, 30px)", fontWeight: 800,
                        color: t.text, letterSpacing: "-0.5px",
                    }}>{p.title}</h2>
                </div>

                {/* Carousel */}
                <div style={{
                    padding: "24px 28px",
                    background: isDark ? "rgba(34,197,94,0.025)" : "rgba(22,163,74,0.025)",
                    borderBottom: `1px solid ${t.border}`,
                }}>
                    <Carousel screenshots={p.screenshots} accent={t.accent} />
                </div>

                {/* Details */}
                <div className="modal-details" style={{
                    padding: "28px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: 28,
                }}>
                    <div>
                        <ModalLabel t={t}>About</ModalLabel>
                        <p style={{ color: t.text2, fontSize: 13.5, lineHeight: 1.72, marginTop: 10, marginBottom: 22 }}>
                            {p.longDesc}
                        </p>
                        <ModalLabel t={t}>Tech Stack</ModalLabel>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 10 }}>
                            {p.tags.map(tag => (
                                <span key={tag} style={{
                                    padding: "5px 12px", background: t.accentBg, border: `1px solid ${t.accentBorder}`,
                                    borderRadius: 100, fontSize: 11.5, color: t.accent, fontFamily: "'Syne', sans-serif",
                                }}>{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <ModalLabel t={t}>Key Features</ModalLabel>
                        <div style={{ display: "flex", flexDirection: "column", gap: 7, marginTop: 10, marginBottom: 22 }}>
                            {p.highlights.map(h => (
                                <div key={h} style={{
                                    display: "flex", gap: 9, alignItems: "center",
                                    padding: "9px 13px", background: t.accentBg,
                                    border: `1px solid ${t.accentBorder}`, borderRadius: 8,
                                }}>
                                    <CheckCircle size={13} color={t.accent} style={{ flexShrink: 0 }} />
                                    <span style={{ color: t.text2, fontSize: 12.5 }}>{h}</span>
                                </div>
                            ))}
                        </div>
                        {p.link && (
                            <a href={p.link} target="_blank" rel="noreferrer" style={{
                                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                                background: t.accent, color: "#fff", borderRadius: 10,
                                padding: "13px 20px", fontSize: 13, fontWeight: 700,
                                textDecoration: "none", width: "100%", transition: "background 0.18s",
                                fontFamily: "'Syne', sans-serif",
                            }}
                                onMouseEnter={e => { e.currentTarget.style.background = t.accentHover; }}
                                onMouseLeave={e => { e.currentTarget.style.background = t.accent; }}
                            ><ExternalLink size={14} /> View on Play Store</a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ModalLabel({ children, t }) {
    return (
        <div style={{
            fontFamily: "'Syne', sans-serif", fontSize: 10, color: t.text3,
            letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700,
        }}>{children}</div>
    );
}

/* ── Card ── */
function Card({ p, t, isDark, idx, vis, onOpen }) {
    const [h, setH] = useState(false);
    const sc = SC[p.status] || SC.Delivered;

    return (
        <div
            onClick={onOpen}
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
            style={{
                borderRadius: 16, overflow: "hidden",
                background: t.bgCard, border: `1px solid ${h ? t.accentBorder : t.border}`,
                cursor: "pointer", display: "flex", flexDirection: "column",
                transform: h ? "translateY(-7px)" : "translateY(0)",
                boxShadow: h ? "0 28px 56px rgba(0,0,0,0.5)" : t.shadow,
                transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                opacity: vis ? 1 : 0,
                animation: vis ? `fadeUp 0.52s ease ${idx * 75}ms both` : "none",
                height: "100%",
            }}
        >
            {/* Image */}
            <div style={{
                position: "relative", height: 210, overflow: "hidden",
                background: isDark ? "#060606" : "#e8e8e8", flexShrink: 0,
            }}>
                {p.coverImg ? (
                    <img src={p.coverImg} alt={p.title} style={{
                        position: "absolute", inset: 0, width: "100%", height: "100%",
                        objectFit: "cover", objectPosition: "center",
                        transform: h ? "scale(1.07)" : "scale(1)",
                        transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                    }} />
                ) : (
                    <div style={{
                        position: "absolute", inset: 0,
                        background: `linear-gradient(135deg, ${t.accentBg} 0%, transparent 100%)`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                        <Layers size={40} color={t.accent} style={{ opacity: 0.25 }} />
                    </div>
                )}

                {/* Gradient */}
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.72) 100%)",
                    pointerEvents: "none",
                }} />

                {/* Badges */}
                <span style={{
                    position: "absolute", top: 12, left: 12, zIndex: 2,
                    fontSize: 9.5, color: sc.c, background: "rgba(0,0,0,0.7)",
                    border: `1px solid ${sc.b}`, padding: "3px 10px",
                    borderRadius: 100, fontWeight: 700, backdropFilter: "blur(4px)",
                    fontFamily: "'Syne', sans-serif",
                }}>{p.status === "Live" ? "● LIVE" : p.status}</span>
                <span style={{
                    position: "absolute", top: 12, right: 12, zIndex: 2,
                    fontSize: 9.5, color: "#fff", background: t.accent,
                    padding: "3px 10px", borderRadius: 100, fontWeight: 700,
                    fontFamily: "'Syne', sans-serif",
                }}>{p.category}</span>

                {/* Title */}
                <div style={{ position: "absolute", bottom: 14, left: 14, right: 14, zIndex: 2 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 2 }}>
                        <Building2 size={10} color="rgba(255,255,255,0.65)" />
                        <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.65)" }}>{p.company}</span>
                    </div>
                    <h3 style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: 17, fontWeight: 700, color: "#fff", lineHeight: 1.25,
                    }}>{p.title}</h3>
                </div>
            </div>

            {/* Body */}
            <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {p.tags.slice(0, 3).map(tag => (
                        <span key={tag} style={{
                            padding: "3px 9px", background: t.accentBg,
                            border: `1px solid ${t.accentBorder}`,
                            borderRadius: 5, fontSize: 10.5, color: t.accent, fontFamily: "'Syne', sans-serif",
                        }}>{tag}</span>
                    ))}
                    {p.tags.length > 3 && (
                        <span style={{
                            padding: "3px 9px", background: t.bg3,
                            borderRadius: 5, fontSize: 10.5, color: t.text3,
                        }}>+{p.tags.length - 3}</span>
                    )}
                </div>

                {/* Footer */}
                <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    marginTop: "auto", paddingTop: 12, borderTop: `1px solid ${t.border}`,
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                        <Clock size={10} color={t.text3} />
                        <span style={{ fontSize: 10.5, color: t.text3 }}>{p.period}</span>
                    </div>
                    {p.screenshots.length > 0 && (
                        <div style={{ display: "flex", alignItems: "center", gap: 4, color: t.accent, fontSize: 11 }}>
                            <Smartphone size={11} />
                            {p.screenshots.length} screens
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ── Main ── */
export default function Works() {
    const { t, isDark } = useTheme();
    const [ref, inView] = useInView(0.08);
    const [active, setActive] = useState(null);
    const [filter, setFilter] = useState("all");

    const categories = ["all", ...new Set(PROJECTS.map(p => p.category))];
    const filtered = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.category === filter);

    return (
        <section id="works" ref={ref} style={{
            background: t.bg, position: "relative", overflow: "hidden",
            padding: "96px clamp(24px, 6vw, 96px)",
            borderTop: `1px solid ${t.border}`,
        }}>
            <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 2 }}>
                {/* Header */}
                <div style={{
                    textAlign: "center", marginBottom: "clamp(36px, 5vw, 56px)",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "none" : "translateY(22px)",
                    transition: "all 0.6s ease",
                }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
                        <div style={{ width: 32, height: 1.5, background: t.accent }} />
                        <span style={{
                            fontFamily: "'Syne', sans-serif", fontSize: 10.5,
                            color: t.accent, letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 700,
                        }}>Portfolio</span>
                        <div style={{ width: 32, height: 1.5, background: t.accent }} />
                    </div>
                    <h2 style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800,
                        color: t.text, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 12,
                    }}>
                        Featured <span style={{ color: t.accent }}>Works</span>
                    </h2>
                    <p style={{ color: t.text2, fontSize: "clamp(13px, 1.4vw, 15px)", maxWidth: 380, margin: "0 auto", lineHeight: 1.65 }}>
                        Click any card to explore screenshots and technical details
                    </p>

                    {/* Filter */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 7, justifyContent: "center", marginTop: 26 }}>
                        {categories.map(cat => (
                            <button key={cat} onClick={() => setFilter(cat)} style={{
                                padding: "6px 16px", borderRadius: 100,
                                border: `1px solid ${filter === cat ? t.accent : t.border}`,
                                background: filter === cat ? t.accentBg : "transparent",
                                color: filter === cat ? t.accent : t.text2,
                                fontSize: 12, fontWeight: filter === cat ? 700 : 500,
                                cursor: "pointer", fontFamily: "'Syne', sans-serif",
                                transition: "all 0.18s", textTransform: "capitalize", letterSpacing: "0.2px",
                            }}>{cat}</button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="works-grid" style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "clamp(12px, 2vw, 20px)",
                }}>
                    {filtered.map((project, index) => (
                        <Card key={project.id} p={project} idx={index} vis={inView}
                            t={t} isDark={isDark} onOpen={() => setActive(project)} />
                    ))}
                </div>
            </div>

            {active && <Modal p={active} onClose={() => setActive(null)} t={t} isDark={isDark} />}

            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @media (max-width: 1000px) {
          .works-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .works-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          .modal-details { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}