import { useState, useEffect, useRef, useCallback } from "react";
import {
    X, ExternalLink, Smartphone, CheckCircle, Calendar, Building2,
    ChevronLeft, ChevronRight, Layers, Clock, Star, Download,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useInView } from "../hooks/useInView";

// Import images
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
        longDesc: "ECSO is a comprehensive logistics and courier management system built for a Saudi-based company. It handles the full shipment lifecycle — from booking to delivery — with real-time WebSocket tracking, automated PDF invoices, and role-based access for admins, branch managers, and delivery staff.",
        tags: ["Flutter", "Firebase", "REST API", "GetX", "JWT", "PDF Gen"],
        link: "https://play.google.com/store/apps/details?id=com.ebsor.ecso",
        coverImg: ecsoImg,
        screenshots: [ecso1, ecso2, ecso3, ecso4],
        highlights: [
            "Real-time cargo tracking via WebSocket",
            "PDF invoice generation & sharing",
            "Role-based access (Admin/Branch/Staff)",
            "Multi-branch management",
            "40% faster load performance",
        ],
    },
    {
        id: 2,
        title: "Inspec – QC Monitor",
        company: "ESBOR Infosystems",
        period: "2025",
        status: "Live",
        category: "Quality Control",
        desc: "Quality control & production monitoring with structured inspection workflows and analytics dashboards.",
        longDesc: "Inspec digitalises manufacturing QC by replacing paper checklists with smart workflows. Teams capture defects and inspection data live on the shop floor while managers monitor dashboards for trends, compliance, and approvals.",
        tags: ["Flutter", "Dart", "Firebase", "Offline First", "Analytics"],
        link: "https://play.google.com/store/apps/details?id=com.ebsor.inspec",
        coverImg: inspecImg,
        screenshots: [inspec1, inspec2, inspec3, inspec4, inspec5, inspec6],
        highlights: [
            "Structured QC inspection workflows",
            "Real-time production monitoring",
            "Offline-first with background sync",
            "Analytics dashboard with charts",
            "Multi-level approval system",
        ],
    },
    {
        id: 3,
        title: "Site Diary – Construction",
        company: "ESBOR Infosystems",
        period: "2025",
        status: "Live",
        category: "Construction",
        desc: "Digital site diary for construction management — daily logs, photo documentation, manpower tracking.",
        longDesc: "Site Diary replaces paper-based construction diaries. Engineers log daily progress, annotate photos, record manpower and equipment, and share structured reports with project managers and clients.",
        tags: ["Flutter", "Firebase", "REST API", "Photo Docs", "GetX"],
        link: null,
        coverImg: sitediaryImg,
        screenshots: [sitediary1, sitediary2, sitediary3, sitediary4, sitediary5, sitediary6],
        highlights: [
            "Daily site progress logging",
            "Photo capture with annotations",
            "Manpower & equipment tracking",
            "Automated report generation",
            "Multi-project management",
        ],
    },
    {
        id: 4,
        title: "Leads CRM",
        company: "Freelance",
        period: "Feb 2024 – Apr 2025",
        status: "Delivered",
        category: "CRM",
        desc: "CRM for sales teams — lead pipeline, follow-up reminders, activity logs, and Firebase real-time sync.",
        longDesc: "A full-featured CRM replacing spreadsheets for a growing sales team. Kanban pipeline, FCM follow-up reminders, contact histories, performance dashboards, and CSV export.",
        tags: ["Flutter", "Firebase", "FCM", "GetX", "Charts"],
        link: null,
        coverImg: null,
        screenshots: [],
        highlights: [
            "Kanban pipeline with drag-drop stages",
            "Smart FCM follow-up reminders",
            "Contact history & activity feed",
            "Sales performance dashboard",
            "CSV data export",
        ],
    },
    {
        id: 5,
        title: "Learn Easy – E-Learning",
        company: "XpertConsortium",
        period: "May 2023 – Jan 2024",
        status: "Delivered",
        category: "Education",
        desc: "E-learning platform with video streaming, PDF viewer, interactive quizzes, and progress tracking.",
        longDesc: "LMS mobile app for students and educators — video lessons, PDF material, timed quizzes with scoring, and push notifications for new content.",
        tags: ["Flutter", "Firebase", "REST API", "Video Player", "PDF"],
        link: null,
        coverImg: null,
        screenshots: [],
        highlights: [
            "Video streaming with controls",
            "In-app PDF document viewer",
            "Interactive timed quiz engine",
            "Course progress tracking",
            "Push notifications for content",
        ],
    },
    {
        id: 6,
        title: "E-Commerce App",
        company: "Edapt (Internship)",
        period: "Sep 2022 – Mar 2023",
        status: "Internship",
        category: "E-Commerce",
        desc: "Feature-complete e-commerce app with catalog, cart, wishlist, order management, and Firebase authentication.",
        longDesc: "Production-ready e-commerce app with Firebase Auth, real-time Firestore inventory, cart & wishlist, order history, and FCM order update notifications.",
        tags: ["Flutter", "Firebase", "Dart", "Firestore"],
        link: null,
        coverImg: null,
        screenshots: [],
        highlights: [
            "Product catalog with search & filters",
            "Cart, wishlist & checkout flow",
            "Firebase Auth (email + Google)",
            "Real-time Firestore inventory",
            "FCM order notifications",
        ],
    },
];

const STATUS_COLORS = {
    Live: { color: "#22C55E", bg: "rgba(34,197,94,0.10)", border: "rgba(34,197,94,0.25)" },
    Delivered: { color: "#60A5FA", bg: "rgba(96,165,250,0.10)", border: "rgba(96,165,250,0.25)" },
    Internship: { color: "#A78BFA", bg: "rgba(167,139,250,0.10)", border: "rgba(167,139,250,0.25)" },
};

/* ─── Carousel ─────────────────────────── */
function Carousel({ screenshots, accent }) {
    const [idx, setIdx] = useState(0);
    const timerRef = useRef(null);
    const total = screenshots.length;

    useEffect(() => {
        if (total <= 1) return;
        timerRef.current = setInterval(() => setIdx(p => (p + 1) % total), 2000);
        return () => clearInterval(timerRef.current);
    }, [total]);

    if (total === 0) return (
        <div style={{
            height: 260, display: "flex", alignItems: "center", justifyContent: "center",
            background: "rgba(255,255,255,0.03)", borderRadius: 16,
        }}>
            <Smartphone size={40} color={accent} style={{ opacity: 0.3 }} />
        </div>
    );

    return (
        <div>
            {/* Phone frame */}
            <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
                gap: 16, padding: "20px 0",
            }}>
                {/* Prev (desktop) */}
                <div className="side-screen" style={{ opacity: 0.35, transform: "scale(0.78)", flexShrink: 0 }}>
                    <PhoneFrame src={screenshots[(idx - 1 + total) % total]} />
                </div>

                {/* Main */}
                <div style={{ position: "relative", zIndex: 2 }}>
                    <PhoneFrame src={screenshots[idx]} large />
                    <div style={{
                        position: "absolute", bottom: -22, left: "50%", transform: "translateX(-50%)",
                        background: accent, color: "#fff", borderRadius: 100,
                        padding: "3px 12px", fontSize: 11, fontWeight: 700,
                        whiteSpace: "nowrap",
                    }}>
                        {idx + 1} / {total}
                    </div>
                </div>

                {/* Next (desktop) */}
                <div className="side-screen" style={{ opacity: 0.35, transform: "scale(0.78)", flexShrink: 0 }}>
                    <PhoneFrame src={screenshots[(idx + 1) % total]} />
                </div>
            </div>

            {/* Dots */}
            {total > 1 && (
                <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 28 }}>
                    {screenshots.map((_, i) => (
                        <button key={i} onClick={() => setIdx(i)} style={{
                            width: i === idx ? 24 : 7, height: 7, borderRadius: 4,
                            border: "none", background: i === idx ? accent : "rgba(255,255,255,0.15)",
                            cursor: "pointer", padding: 0, transition: "all 0.2s",
                        }} />
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 600px) {
          .side-screen { display: none !important; }
        }
      `}</style>
        </div>
    );
}

function PhoneFrame({ src, large = false }) {
    const w = large ? 240 : 170;
    const h = large ? 490 : 348;
    return (
        <div style={{
            width: w, height: h,
            background: "linear-gradient(145deg, #1c1c1c, #0a0a0a)",
            borderRadius: large ? 34 : 24, padding: large ? 9 : 7,
            boxShadow: "0 24px 48px -12px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08)",
            position: "relative", flexShrink: 0,
        }}>
            {/* Notch */}
            <div style={{
                position: "absolute", top: large ? 7 : 5, left: "50%", transform: "translateX(-50%)",
                width: large ? 90 : 65, height: large ? 22 : 16,
                background: "#000", borderRadius: 20, zIndex: 10,
                border: "1px solid #1a1a1a",
            }} />
            {/* Side buttons */}
            <div style={{ position: "absolute", right: -2, top: large ? 100 : 72, width: 2, height: large ? 50 : 36, background: "#2a2a2a", borderRadius: "0 3px 3px 0" }} />
            <div style={{ position: "absolute", left: -2, top: large ? 75 : 55, width: 2, height: large ? 28 : 20, background: "#2a2a2a", borderRadius: "3px 0 0 3px" }} />
            <div style={{ position: "absolute", left: -2, top: large ? 115 : 82, width: 2, height: large ? 28 : 20, background: "#2a2a2a", borderRadius: "3px 0 0 3px" }} />
            {/* Screen */}
            <div style={{
                width: "100%", height: "100%",
                borderRadius: large ? 26 : 18, overflow: "hidden", background: "#000",
            }}>
                {src && <img src={src} alt="screenshot" style={{
                    width: "100%", height: "100%", objectFit: "cover", objectPosition: "top",
                }} />}
            </div>
            {/* Home bar */}
            <div style={{
                position: "absolute", bottom: large ? 5 : 3, left: "50%", transform: "translateX(-50%)",
                width: large ? 100 : 70, height: 3, background: "rgba(255,255,255,0.25)", borderRadius: 100,
            }} />
        </div>
    );
}

/* ─── Modal ────────────────────────────── */
function Modal({ p, onClose, t, isDark }) {
    useEffect(() => {
        const fn = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", fn);
        document.body.style.overflow = "hidden";
        return () => { document.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
    }, [onClose]);

    const sc = STATUS_COLORS[p.status] || STATUS_COLORS.Delivered;

    return (
        <div onClick={onClose} style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.95)", backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 16, animation: "fadeIn 0.18s ease",
        }}>
            <div onClick={e => e.stopPropagation()} style={{
                background: t.bg2, border: `1px solid ${t.border2}`,
                borderRadius: 28, width: "100%", maxWidth: 1100,
                maxHeight: "90vh", overflowY: "auto", position: "relative",
            }}>
                {/* Close */}
                <button onClick={onClose} style={{
                    position: "absolute", top: 14, right: 14, width: 40, height: 40,
                    borderRadius: "50%", background: t.bgCard, border: `1px solid ${t.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", zIndex: 10, transition: "all 0.18s",
                }}
                    onMouseEnter={e => { e.currentTarget.style.background = t.accentBg; }}
                    onMouseLeave={e => { e.currentTarget.style.background = t.bgCard; }}
                >
                    <X size={16} color={t.text} />
                </button>

                {/* Header */}
                <div style={{ padding: "28px 28px 18px", borderBottom: `1px solid ${t.border}` }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10, flexWrap: "wrap" }}>
                        <span style={{
                            fontSize: 10.5, color: sc.color, background: sc.bg, border: `1px solid ${sc.border}`,
                            padding: "3px 12px", borderRadius: 100, fontWeight: 700,
                        }}>{p.status === "Live" ? "● LIVE" : p.status}</span>
                        <span style={{ display: "flex", alignItems: "center", gap: 5, color: t.text3, fontSize: 12 }}>
                            <Building2 size={12} /> {p.company}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: 5, color: t.text3, fontSize: 12 }}>
                            <Calendar size={12} /> {p.period}
                        </span>
                    </div>
                    <h2 style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "clamp(20px, 3.5vw, 32px)", fontWeight: 800,
                        color: t.text, letterSpacing: "-0.5px", lineHeight: 1.2,
                    }}>{p.title}</h2>
                </div>

                {/* Carousel */}
                <div style={{
                    padding: 28, background: isDark ? "rgba(34,197,94,0.03)" : "rgba(22,163,74,0.03)",
                    borderBottom: `1px solid ${t.border}`,
                }}>
                    <Carousel screenshots={p.screenshots} accent={t.accent} />
                </div>

                {/* Details */}
                <div style={{
                    padding: 28, display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28,
                }}>
                    <div>
                        <Label t={t}>About</Label>
                        <p style={{ color: t.text2, fontSize: 13.5, lineHeight: 1.72, marginTop: 10, marginBottom: 22 }}>
                            {p.longDesc || p.desc}
                        </p>
                        <Label t={t}>Tech Stack</Label>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 10 }}>
                            {p.tags.map(tag => (
                                <span key={tag} style={{
                                    padding: "5px 12px", background: t.accentBg, border: `1px solid ${t.accentBorder}`,
                                    borderRadius: 100, fontSize: 12, color: t.accent, fontFamily: "'Outfit', sans-serif",
                                }}>{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Label t={t}>Key Features</Label>
                        <div style={{ display: "flex", flexDirection: "column", gap: 7, marginTop: 10, marginBottom: 20 }}>
                            {p.highlights.map(h => (
                                <div key={h} style={{
                                    display: "flex", gap: 9, alignItems: "center",
                                    padding: "9px 13px", background: t.accentBg,
                                    border: `1px solid ${t.accentBorder}`, borderRadius: 10,
                                }}>
                                    <CheckCircle size={13} color={t.accent} style={{ flexShrink: 0 }} />
                                    <span style={{ color: t.text2, fontSize: 12.5 }}>{h}</span>
                                </div>
                            ))}
                        </div>
                        {p.link && (
                            <a href={p.link} target="_blank" rel="noreferrer" style={{
                                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                                background: t.accent, color: "#fff", borderRadius: 12,
                                padding: "13px 20px", fontSize: 13.5, fontWeight: 600,
                                textDecoration: "none", width: "100%", transition: "background 0.18s",
                            }}
                                onMouseEnter={e => { e.currentTarget.style.background = t.accentHover; }}
                                onMouseLeave={e => { e.currentTarget.style.background = t.accent; }}
                            >
                                <ExternalLink size={15} /> View on Play Store
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Label({ children, t }) {
    return (
        <div style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 10.5, color: t.text3,
            letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 600,
        }}>{children}</div>
    );
}

/* ─── Card ──────────────────────────────── */
function Card({ p, t, isDark, idx, vis, onOpen }) {
    const [hover, setHover] = useState(false);
    const sc = STATUS_COLORS[p.status] || STATUS_COLORS.Delivered;

    return (
        <div
            onClick={onOpen}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                borderRadius: 20, overflow: "hidden",
                background: t.bgCard, border: `1px solid ${hover ? t.accentBorder : t.border}`,
                cursor: "pointer", display: "flex", flexDirection: "column",
                transform: hover ? "translateY(-6px)" : "translateY(0)",
                boxShadow: hover ? t.shadowLg : t.shadow,
                transition: "all 0.28s ease",
                opacity: vis ? 1 : 0,
                animation: vis ? `fadeInUp 0.5s ease ${idx * 80}ms both` : "none",
                height: "100%",
            }}
        >
            {/* Image */}
            <div style={{
                position: "relative", height: 220, overflow: "hidden",
                background: isDark ? "#080808" : "#f0f0f0", flexShrink: 0,
            }}>
                {p.coverImg ? (
                    <img src={p.coverImg} alt={p.title} style={{
                        position: "absolute", inset: 0, width: "100%", height: "100%",
                        objectFit: "cover", objectPosition: "center",
                        transform: hover ? "scale(1.06)" : "scale(1)",
                        transition: "transform 0.4s ease",
                    }} />
                ) : (
                    <div style={{
                        position: "absolute", inset: 0,
                        background: `linear-gradient(135deg, ${t.accentBg} 0%, transparent 100%)`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                        <Layers size={44} color={t.accent} style={{ opacity: 0.3 }} />
                    </div>
                )}
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.65) 100%)",
                    pointerEvents: "none",
                }} />

                {/* Badges */}
                <span style={{
                    position: "absolute", top: 12, left: 12, zIndex: 2,
                    fontSize: 10, color: sc.color, background: "rgba(0,0,0,0.65)",
                    border: `1px solid ${sc.border}`, padding: "3px 10px",
                    borderRadius: 100, fontWeight: 700, backdropFilter: "blur(4px)",
                }}>{p.status === "Live" ? "● LIVE" : p.status}</span>
                <span style={{
                    position: "absolute", top: 12, right: 12, zIndex: 2,
                    fontSize: 10, color: "#fff", background: t.accent,
                    padding: "3px 10px", borderRadius: 100, fontWeight: 600,
                }}>{p.category}</span>

                {/* Title overlay */}
                <div style={{
                    position: "absolute", bottom: 12, left: 14, right: 14, zIndex: 2,
                }}>
                    <div style={{
                        display: "flex", alignItems: "center", gap: 5, marginBottom: 3,
                    }}>
                        <Building2 size={11} color="rgba(255,255,255,0.7)" />
                        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>{p.company}</span>
                    </div>
                    <h3 style={{
                        fontSize: 17, fontWeight: 700, color: "#fff", lineHeight: 1.3,
                        textShadow: "0 2px 6px rgba(0,0,0,0.5)",
                    }}>{p.title}</h3>
                </div>
            </div>

            {/* Content */}
            <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {p.tags.slice(0, 3).map(tag => (
                        <span key={tag} style={{
                            padding: "3px 9px", background: t.accentBg,
                            border: `1px solid ${t.accentBorder}`,
                            borderRadius: 5, fontSize: 10.5, color: t.accent,
                            fontFamily: "'Outfit', sans-serif",
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
                        <Clock size={11} color={t.text3} />
                        <span style={{ fontSize: 11, color: t.text3 }}>{p.period}</span>
                    </div>
                    {p.screenshots.length > 0 && (
                        <div style={{ display: "flex", alignItems: "center", gap: 5, color: t.accent, fontSize: 11 }}>
                            <Smartphone size={11} />
                            {p.screenshots.length} screens
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ─── Main section ───────────────────────── */
export default function Works() {
    const { t, isDark } = useTheme();
    const [ref, inView] = useInView(0.1);
    const [active, setActive] = useState(null);
    const [filter, setFilter] = useState("all");

    const categories = ["all", ...new Set(PROJECTS.map(p => p.category))];
    const filtered = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.category === filter);

    return (
        <section id="works" ref={ref} style={{
            background: t.bg, position: "relative", overflow: "hidden",
            padding: "96px clamp(20px, 6vw, 96px)",
        }}>
            {/* bg glows */}
            <div style={{
                position: "absolute", left: "-8%", top: "8%",
                width: "45%", height: "45%",
                background: `radial-gradient(circle, ${t.accent}10, transparent 70%)`,
                filter: "blur(60px)", pointerEvents: "none",
            }} />

            <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 2 }}>
                {/* Header */}
                <div style={{
                    textAlign: "center", marginBottom: "clamp(36px, 6vw, 56px)",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "none" : "translateY(24px)",
                    transition: "all 0.6s ease",
                }}>
                    <div style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14,
                    }}>
                        <div style={{ width: 36, height: 2, background: t.accent, borderRadius: 2 }} />
                        <span style={{
                            fontFamily: "'Outfit', sans-serif", fontSize: 11,
                            color: t.accent, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600,
                        }}>Portfolio</span>
                        <div style={{ width: 36, height: 2, background: t.accent, borderRadius: 2 }} />
                    </div>
                    <h2 style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "clamp(32px, 5.5vw, 56px)", fontWeight: 800,
                        color: t.text, letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 12,
                    }}>
                        Featured{" "}
                        <span style={{ color: t.accent }}>Works</span>
                    </h2>
                    <p style={{ color: t.text2, fontSize: "clamp(13px, 1.5vw, 15px)", maxWidth: 420, margin: "0 auto", lineHeight: 1.6 }}>
                        Click any card to explore screenshots and technical details
                    </p>

                    {/* Filter tabs */}
                    <div style={{
                        display: "flex", flexWrap: "wrap", gap: 7, justifyContent: "center", marginTop: 28,
                    }}>
                        {categories.map(cat => (
                            <button key={cat} onClick={() => setFilter(cat)} style={{
                                padding: "6px 16px", borderRadius: 100,
                                border: `1px solid ${filter === cat ? t.accent : t.border}`,
                                background: filter === cat ? t.accentBg : "transparent",
                                color: filter === cat ? t.accent : t.text2,
                                fontSize: 12, fontWeight: 500, cursor: "pointer",
                                fontFamily: "'Outfit', sans-serif", transition: "all 0.18s",
                                textTransform: "capitalize",
                            }}>{cat}</button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="works-grid" style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "clamp(14px, 2vw, 22px)",
                }}>
                    {filtered.map((project, index) => (
                        <Card key={project.id} p={project} idx={index} vis={inView}
                            t={t} isDark={isDark} onOpen={() => setActive(project)} />
                    ))}
                </div>
            </div>

            {active && <Modal p={active} onClose={() => setActive(null)} t={t} isDark={isDark} />}

            <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @media (max-width: 1024px) {
          .works-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .works-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}